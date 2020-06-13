let size = 300;
var displays = [
    function ($) {
        let half = size / 2
        $.setup = _ => {
            $.createCanvas(size, size);
        }
        $.draw = _ => {
            for (let index = 0; index < size * size; index++) {
                x = (index % size)
                y = $.int(index / size)
                d = $.frameCount * 0.0001
                s = 128 * (1 + $.sin(d * ((x - half) * (x - half) + (y - half) * (y - half))))
                $.set(x, y, $.color(s, s, s))
            }
            $.updatePixels()
        }
    },
    function ($) {
        $.setup = $.draw = _ => {
            $.createCanvas(size, size)

            $.noLoop()
            $.strokeWeight(0.5)
            $.num = 3
            $.size = size / 7
            for (let i = 0; i < $.height; i += 2) {
                $.line(0, i, $.width, i)

                if ((i > $.size && i < 2 * $.size)
                    || (i > 3 * $.size && i < 4 * $.size)
                    || (i > 5 * $.size && i < 6 * $.size)) {
                    for (let j = 0; j < $.num; j++) {
                        s = $.sin(i / 50 + j * $.PI / 2) * 2
                        // s = noise(i/100 + j*10) * 3
                        $.line((2 * j + 1) * $.size, i - 1, (2 * j + 2) * $.size, i + s)
                    }
                }
            }
        }
    },
    function ($) {

        var step = 6
        var rate = 0
        $.preload = _ => {
            $.bg = $.loadImage('./sources/dylan.jpg')
        }
        $.setup = _ => {
            $.createCanvas(size, size)
            rate = $.bg.width < $.bg.height ? $.bg.width / $.width : $.bg.height / $.height
            $.noLoop()
            $.noStroke()
            $.fill(0)
        }
        $.draw = _ => {
            var len = $.int($.width / step)
            for (let y = 0; y < len; y++) {
                var b = []
                for (let x = 0; x < len; x++) {
                    b[x] = $.map($.brightness($.bg.get(x * step * rate, y * step * rate)), 0, 100, step / 2, 0)
                }
                $.beginShape()
                for (i = 0; i <= 2 * len; i++) {
                    $.vertex(i <= len ? i * step : (2 * len - i) * step, y * step + (i <= len ? -b[i] : b[2 * len - i]))
                }
                $.endShape()
            }
        }

    },
    function ($) {
        var max_distance;
        var toogleRectOrEllipse;

        $.setup = _ => {
            $.createCanvas(size, size)
            $.smooth();
            $.noStroke();
            max_distance = $.dist(0, 0, $.width, $.height);
            $.rectMode($.CENTER);
        }

        $.draw = _ => {
            $.background(0);
            var gap = $.width / 10;
            for (var i = 0; i <= $.width; i += gap) {
                for (var j = 0; j <= $.width; j += gap) {
                    var size = $.dist($.mouseX, $.mouseY, i, j);
                    size = $.map(size, 0, $.width, 0, gap * 2)
                    if (toogleRectOrEllipse) {
                        $.rect(i, j, size, size);
                    } else {
                        $.ellipse(i, j, size, size);
                    }
                }
            }
        }

        $.mouseClicked = _ => {
            toogleRectOrEllipse = !toogleRectOrEllipse;
        }
    },
];
