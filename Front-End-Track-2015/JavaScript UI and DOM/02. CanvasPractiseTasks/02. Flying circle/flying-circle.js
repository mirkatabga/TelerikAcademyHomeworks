(function () {
    var point = (function () {
        var point = Object.create({});

        Object.defineProperties(point, {
            init: {
                value: function (x, y) {
                    this.x = x;
                    this.y = y;
                    return this;
                }
            },
            x: {
                get: function () {
                    return this._x;
                },
                set: function (value) {
                    if (typeof value === 'number') {
                        this._x = value;
                    }
                }
            },
            y: {
                get: function () {
                    return this._y;
                },
                set: function (value) {
                    if (typeof value === 'number') {
                        this._y = value;
                    }
                }
            }
        })

        return point;
    }())
    function createPoint(x, y) {
        return Object.create(point).init(x, y);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function drawCircle(ctx, center, radius) {
        ctx.save();
        ctx.beginPath();

        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#008844';
        ctx.fill();
        ctx.restore();
    }

    function animationFrame() {
        times += 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (currentDirection) {
            case 'up-right': {
                center.x += 1;
                center.y -= 1;
            } break;
            case 'down-right': {
                center.x += 1;
                center.y += 1;
            } break;
            case 'down-left': {
                center.x -= 1;
                center.y += 1;
            } break;
            case 'up-left': {
                center.x -= 1;
                center.y -= 1;
            } break;
        }

        if (center.x + radius === canvas.width || center.x - radius === 0
            || center.y + radius === canvas.height || center.y - radius === 0) {
            switch (currentDirection) {
                case 'up-right': {
                    if (center.x + radius === canvas.width) {
                        currentDirection = 'up-left';
                    }
                    else if (center.y - radius === 0) {
                        currentDirection = 'down-right';
                    }
                } break;
                case 'down-right': {
                    if (center.x + radius === canvas.width) {
                        currentDirection = 'down-left';
                    }
                    else if (center.y + radius === canvas.height) {
                        currentDirection = 'up-right';
                    }
                } break;
                case 'down-left': {
                    if (center.x - radius === 0) {
                        currentDirection = 'down-right';
                    }
                    else if (center.y + radius === canvas.height) {
                        currentDirection = 'up-left';
                    }
                } break;
                case 'up-left': {
                    if (center.x - radius === 0) {
                        currentDirection = 'up-right';
                    }
                    else if (center.y - radius === 0) {
                        currentDirection = 'down-left';
                    }
                } break;
            }
        }

        drawCircle(ctx, center, 10);
        requestAnimationFrame(animationFrame);
    }


    var canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');

    var directions = ['up-right', 'down-right', 'down-left', 'up-left'],
        currentDirection,
        radius = 10,
        center = createPoint(0 + radius, getRandomInt(0 + radius, canvas.height - radius)),
        times = 0;

    currentDirection = directions[getRandomInt(0, directions.length - 1)];

    animationFrame();
}())