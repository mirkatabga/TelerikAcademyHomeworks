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

    function convertToRadians(deg) {
        return deg * (Math.PI / 180);
    }

    function drawHeadFigure(ctx) {

        function drawHat(sp, fillColor, borderWidth, borderColor) {

            ctx.fillStyle = fillColor;
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = borderWidth;


            ctx.beginPath();
            ctx.save();

            // the celinder of the hat
            ctx.moveTo(sp.x + 100, sp.y);
            ctx.scale(1, 0.5);
            ctx.arc(sp.x + 50, (1 / 0.5) * sp.y, 50, 0, convertToRadians(360));
            ctx.restore();

            ctx.save();
            ctx.lineTo(sp.x + 100, 150);
            ctx.scale(1, 0.5);
            ctx.arc(sp.x + 50, (1 / 0.5) * sp.y + 190, 50, 0, convertToRadians(180));
            ctx.restore();
            ctx.lineTo(sp.x, sp.y);
            
            //the down part of the hat
            ctx.save();
            ctx.moveTo(sp.x + 100, sp.y + 100);
            ctx.scale(1, 0.3);
            ctx.arc(sp.x + 50, (1 / 0.3) * sp.y + 350, 100, convertToRadians(300), convertToRadians(240));
            ctx.restore();

            ctx.fill();
            ctx.stroke();
        }

        function drawFace() {

        }
        ctx.save();

        var sp = createPoint(100, 50),
            fillColor = '#396693',
            borderColor = '#000',
            borderWidth = 3;



        drawHat(sp, fillColor, borderWidth, borderColor);
    }

    var ctx = document.getElementById("the-canvas").getContext('2d');

    drawHeadFigure(ctx);


}());