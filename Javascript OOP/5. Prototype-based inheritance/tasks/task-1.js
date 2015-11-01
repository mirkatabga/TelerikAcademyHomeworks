/* Task Description */
/*
* Create an object domElement, that has the following properties and methods:
  * use prototypal inheritance, without function constructors
  * method init() that gets the domElement type
    * i.e. `Object.create(domElement).init('div')`
  * property type that is the type of the domElement
    * a valid type is any non-empty string that contains only Latin letters and digits
  * property innerHTML of type string
    * gets the domElement, parsed as valid HTML
      * <type attr1="value1" attr2="value2" ...> .. content / children's.innerHTML .. </type>
  * property content of type string
    * sets the content of the element
    * works only if there are no children
  * property attributes
    * each attribute has name and value
    * a valid attribute has a non-empty string for a name that contains only Latin letters and digits or dashes (-)
  * property children
    * each child is a domElement or a string
  * property parent
    * parent is a domElement
  * method appendChild(domElement / string)
    * appends to the end of children list
  * method addAttribute(name, value)
    * throw Error if type is not valid
  * method removeAttribute(attribute)
    * throw Error if attribute does not exist in the domElement
*/


/* Example

var meta = Object.create(domElement)
	.init('meta')
	.addAttribute('charset', 'utf-8');

var head = Object.create(domElement)
	.init('head')
	.appendChild(meta)

var div = Object.create(domElement)
	.init('div')
	.addAttribute('style', 'font-size: 42px');

div.content = 'Hello, world!';

var body = Object.create(domElement)
	.init('body')
	.appendChild(div)
	.addAttribute('id', 'cuki')
	.addAttribute('bgcolor', '#012345');

var root = Object.create(domElement)
	.init('html')
	.appendChild(head)
	.appendChild(body);

console.log(root.innerHTML);
Outputs:
<html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="cuki"><div style="font-size: 42px">Hello, world!</div></body></html>
*/

function solve() {
  var domElement = (function () {
		
    //private methods
    function validateType(type) {
      if (typeof type === 'string' && type.length > 0) {
        var pattern = /[^0-Z]|@|=/gi;

        if (type.match(pattern)) {
          throw Error('Invalid type');
        }
        else {
          return true;
        }
      }
      else {
        throw Error('The type of the element can\'t be an empty string.');
      }
    };

    function validateAttribute(attribute) {
      function isLetter(letter) {
        var code = letter.charCodeAt(0);
        if (((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122))) {
          return true;
        }
      };
      function isDigit(digit) {
        var code = digit.charCodeAt(0);
        if (code >= 48 && code <= 57) {
          return true;
        }
      };

      if (typeof attribute === 'object') {
        if (attribute.hasOwnProperty('name') && attribute.hasOwnProperty('value')) {
          if (typeof attribute.name === 'string') {
            for (var i = 0; i < attribute.name.length; i++) {
              if (!(attribute.name[i] === '-' || isLetter(attribute.name[i]) || isDigit(attribute.name[i]))) {
                return false;
              }
            }
            if (attribute.name === '') {
              throw Error('Invalid attribute');
            }
          }
        }
      }
      return true;
    };

    var domElement = {};

    Object.defineProperties(domElement, {
      'init': {
        value: function (type) {
          this.type = type;
          return this;
        }
      },
      'type': {
        get: function () {
          return this._type;
        },
        set: function (value) {
          if (validateType(value)) {
            this._type = value;
          }
          else {
            throw Error('type is not valid.');
          }
        }
      },
      'innerHTML': {
        get: function () {
          var i,
            len;

          this._innerHTML = '<' + this.type;

          if (this.attributes !== undefined) {
            this.attributes.sort(function (a, b) {
              return a.name > b.name;
            });
            for (i = 0, len = this.attributes.length; i < len; i += 1) {
              this._innerHTML += ' ' + this.attributes[i].name + '="' + this.attributes[i].value + '"';
            }
          }

          this._innerHTML += '>';

          if (this.children !== undefined) {
            for (i = 0, len = this.children.length; i < len; i += 1) {
              if (typeof this.children[i] === 'string') {
                this._innerHTML += this.children[i];
              }
              else if (Object.getPrototypeOf(this.children[i]) === domElement) {
                this._innerHTML += this.children[i].innerHTML;
              }
            }
          }
          else if (this.content !== undefined) {
            this._innerHTML += this.content;
          }
          this._innerHTML += '</' + this.type + '>';

          return this._innerHTML;
        }
      },

      'content': {
        get: function () {
          return this._content;
        },
        set: function (value) {
          if (typeof value === 'string' && value.length > 0) {
            this._content = value;
          }
          else {
            throw Error('Invalid content');
          }
        }
      },
      'attributes': {
        get: function () {
          return this._attributes;
        },
        set: function (value) {
          this._attributes = value;
        }
      },
      'children': {
        get: function () {
          return this._children;
        },
        set: function (value) {
          this._children = value;
        }
      },
      'parent': {
        get: function () {
          return this._parent;
        },
        set: function (value) {
          if (Object.getPrototypeOf(value) === domElement) {
            this._parent = value;
          }
        }
      },
      'appendChild': {
        value: function appAtTheEnd(child) {
          if (this.children === undefined) {
            this.children = [];
          }

          if (typeof child === 'string') {
            this.children.push(child);
            return this;
          }
          else if (Object.getPrototypeOf(child) === domElement) {
            child.parent = this;
            this.children.push(child);
            return this;
          }
          else {
            throw Error('string / domElement');
          }

          return this;
        }
      },
      'addAttribute': {
        value: function (name, value) {
          var attribute = {
            'name': name,
            'value': value
          },
            i;

          if (validateAttribute(attribute)) {
            if (this.attributes === undefined) {
              this.attributes = [];
            }
            for (i = 0; i < this.attributes.length; i += 1) {
              if (this.attributes[i].name === attribute.name) {
                this.attributes[i].value = attribute.value;
                return this;
              }
            }
            this.attributes.push(attribute);
          }
          else {
            throw Error('Invalid attribute.');
          }

          return this;
        }
      },
      'removeAttribute': {
        value: function (name) {
          var isFound = false,
            i,
            self = this;

          for (i = 0; i < self.attributes.length; i += 1) {

            if (self.attributes[i].name === name) {
              isFound = true;
              if (i === 0) {
                self.attributes.shift();
              }
              else {
                self.attributes = self.attributes.splice(i - 1, 1);
              }
            }
          }

          if (!isFound) {
            throw Error('Attribute not found');
          }

          return self;
        }
      }
    });

    return domElement;
  } ());

  return domElement;
}// ());

//module.exports = solve;
