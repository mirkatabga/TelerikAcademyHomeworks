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

    function drawHeadFigure(ctx, sp) {

        function drawHat(ctx, sp, fillColor, borderWidth, borderColor) {

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

        function drawFace(ctx, center, radius, fillColor, borderColor, borderWidth) {

            function drawEye(center) {

                function drawEyeBall(center) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.fillStyle = ctx.strokeStyle;
                    ctx.scale(0.7, 1);
                    ctx.arc((1 / 0.7) * center.x, center.y, 10, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.restore();
                }

                ctx.beginPath();
                ctx.save();

                ctx.scale(1, 0.8);
                ctx.arc(center.x, (1 / 0.8) * center.y, 18, 0, convertToRadians(360));
                ctx.restore();

                ctx.fill();
                ctx.stroke();

                drawEyeBall(createPoint(center.x - 8, center.y));

            }

            function drawNose(sp) {
                ctx.save();
                ctx.beginPath();

                ctx.moveTo(sp.x, sp.y);
                ctx.lineTo(sp.x - 12, sp.y + 35);
                ctx.lineTo(sp.x, sp.y + 35);
                ctx.stroke();
                ctx.restore();
            }

            function drawMouth(center) {
                //ctx.save();

                ctx.beginPath();

                ctx.translate(center.x - 10, center.y - 10);
                ctx.rotate(convertToRadians(10));
                ctx.scale(1, 0.3);
                ctx.arc(0, (1 / 0.3) * (0), 40, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }

            ctx.beginPath();
            ctx.fillStyle = fillColor;
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = borderWidth;

            ctx.save();
            ctx.scale(1, 0.8);
            ctx.arc(center.x, (1 / 0.8) * center.y, radius, convertToRadians(315), convertToRadians(225));
            ctx.restore();
            ctx.fill();
            ctx.stroke();

            //Eyes
            var eyeCenter = createPoint(center.x - 55, (1 / 0.8) * center.y - 80);

            drawEye(eyeCenter);
            drawEye(createPoint(center.x + 30, (1 / 0.8) * center.y - 80));

            //Nose
            drawNose(createPoint(center.x - 10, (1 / 0.8) * center.y - 80));

            //Mouth
            drawMouth(createPoint(center.x - 10, (1 / 0.8) * center.y - 10))
        }

        ctx.save();

        var fillColor = '#396693',
            borderColor = '#000',
            borderWidth = 3,
            faceCenter = createPoint(sp.x + 50, sp.y + 182);


        drawFace(ctx, faceCenter, 100, '#90CAD7', '#346772', 3);
        drawHat(ctx, sp, fillColor, borderWidth, borderColor);
    }

    var canvas = document.getElementById("the-canvas"),
        ctx = canvas.getContext('2d');

    var headStartingPoint = createPoint(0, 50),
     step = 0;

    console.log(canvas.width);
    function anim() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        headStartingPoint.x = step;
        drawHeadFigure(ctx, headStartingPoint);
        step += 2;

        if (step < canvas.width) {
            requestAnimationFrame(anim);
        }
    }

    anim();
}());