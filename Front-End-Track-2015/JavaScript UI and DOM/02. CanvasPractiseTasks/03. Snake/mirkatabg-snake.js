(function () {
    function createSnake(length, side) {
        var snake = [],
            x = 20;

        for (var i = length - 1; i >= 0; i--) {
            snake.push({
                x: x += side,
                y: 20,
            })
        }

        return snake;
    }

    function createFood() {
        function getRandomFood(min, max) {
            var coordinate = Math.floor((Math.random() * (max - min)) + min),
                difference = max - coordinate;

            while (difference % side !== 0) {
                difference += 1;
            }

            coordinate = max - difference;

            return coordinate;
        }

        function isFoodUnderSnake(x,y) {
            return snake.some(function (part) {
                return part.x === x && part.y === y;
            })
        }
        
        var x,
            y

        do {
            x = getRandomFood(0, boxWidth - side);
            y = getRandomFood(0, boxHeight - side);
        } while (isFoodUnderSnake(x, y));

        return {
            x: x,
            y: y
        }
    }

    function drawSnake(snake) {
        ctx.beginPath();
        for (var i = 0, len = snake.length; i < len; i += 1) {
            ctx.rect(snake[i].x, snake[i].y, side, side);
        }

        ctx.fill();
        ctx.stroke();
    }

    function drawFood(food) {
        ctx.beginPath();

        ctx.rect(food.x, food.y, side, side);

        ctx.fill();
        ctx.stroke();
    }

    function drawScore(score) {
        ctx.beginPath();

        ctx.fillText("Score: " + score, 10, boxHeight - 1);

        ctx.stroke();
    }

    document.onkeydown = function (key) {
        pressedKeys.push(key.keyCode);

        switch (key.keyCode) {
            case 38: {
                if (direction !== 'down') {
                    direction = 'up';
                }
            } break;
            case 39: {
                if (direction !== 'left') {
                    direction = 'right';
                }
            } break;
            case 40: {
                if (direction !== 'up') {
                    direction = 'down';
                }
            } break;
            case 37: {
                if (direction !== 'right') {
                    direction = 'left';
                }
            } break;
        }
    }

    function updateHeadPosition(index) {
        var head = snake[index],
            isValid = true;

        switch (direction) {
            case 'up': {
                if (head.y - side >= 0) {
                    snake.forEach(function (part, i) {
                        if (head.y - side === part.y && head.x === part.x && i !== index) {
                            isValid = false;
                        }
                    })

                    if (isValid) {
                        snake.push({
                            x: head.x,
                            y: head.y - side
                        })
                    }
                }
                else {
                    isValid = false;
                }
            } break;
            case 'right': {
                if (head.x + side < boxWidth) {
                    snake.forEach(function (part, i) {
                        if (head.x + side === part.x && head.y === part.y && i !== index) {
                            isValid = false;
                        }
                    })

                    if (isValid) {
                        snake.push({
                            x: head.x + side,
                            y: head.y
                        })
                    }
                }
                else {
                    isValid = false;
                }
            } break;
            case 'down': {
                if (head.y + side < boxHeight) {
                    snake.forEach(function (part, i) {
                        if (head.y + side === part.y && head.x === part.x && i !== index) {
                            isValid = false;
                        }
                    })
                    if (isValid) {
                        snake.push({
                            x: head.x,
                            y: head.y + side
                        })
                    }
                }
                else {
                    isValid = false;
                }
            } break;
            case 'left': {
                if (head.x - side >= 0) {
                    if (actualDirection === 'right') {
                        var previewsKeyCode = pressedKeys[pressedKeys.length - 2];
                        if (previewsKeyCode === 40) {
                            direction = 'down';
                            isPreviews = true;
                            return updateHeadPosition(index);
                        }
                    }
                    snake.forEach(function (part, i) {
                        if (head.x - side === part.x && head.y === part.y && i !== index) {
                            isValid = false;
                        }
                    })

                    if (isValid) {
                        snake.push({
                            x: head.x - side,
                            y: head.y
                        })
                    }
                }
                else {
                    isValid = false;
                }
            } break;
        }

        return isValid;
    }


    function animationFrame() {

        if (counter < framesToSkip) {
            counter++;
            requestAnimationFrame(animationFrame);
            return;
        }

        counter = 0;
        window.requestAnimationFrame(animationFrame);

        var lastIndex = snake.length - 1;
        ctx.clearRect(0, 0, boxWidth, boxHeight);

        var isUpdated = updateHeadPosition(lastIndex);

        if (isUpdated) {
            if (food.x === snake[lastIndex].x && food.y === snake[lastIndex].y) {
                score += 10;
                food = createFood();
            }
            else {
                snake.shift();
            }

        }
        else {
            snake = [];
            snake = createSnake(4, side);
            direction = 'right';
            score = 0;
        }

        drawScore(score);
        drawSnake(snake);
        actualDirection = direction;
        drawFood(food);



    }

    var canvas = document.getElementById('snake-box'),
        ctx = canvas.getContext('2d');

    var snake = [],
        framesToSkip = 5,
        food,
        counter = 0,
        direction = 'right',
        boxWidth = canvas.width,
        boxHeight = canvas.height,
        side = 10,
        fillColor = '#0000ff',
        strokeColor = '#fff',
        score = 0,
        id,
        actualDirection = 'right',
        pressedKeys = [],
        isPreviews = false;

    console.log(actualDirection);

    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;

    snake = createSnake(4, side);
    food = createFood();
    animationFrame();
}())