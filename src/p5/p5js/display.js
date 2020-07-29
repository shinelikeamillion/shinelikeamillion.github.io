let size = 300
let displays = [
  function ($) {
    let half = size / 2
    let rect = 10
    let num = size / rect
    $.setup = _ => {
      $.createCanvas(size, size)
    }
    $.draw = _ => {
      for (let i = 0; i < num * num; i++) {
        x = (i % num) * rect
        y = $.int(i / num) * rect
        d = $.frameCount * 0.000005
        s =
          128 *
          (1 + $.sin(d * ((x - half) * (x - half) + (y - half) * (y - half))))
        $.fill(s)
        $.square(x, y, rect)
      }
    }
  },
  // 方块
  function ($) {
    $.setup = $.draw = _ => {
      $.createCanvas(size, size)

      $.noLoop()
      $.strokeWeight(1)
      $.num = 3
      $.size = size / 7
      for (let i = 0; i < size; i += 3) {
        $.line(0, i, size, i)

        if (
          (i > $.size && i < 2 * $.size) ||
          (i > 3 * $.size && i < 4 * $.size) ||
          (i > 5 * $.size && i < 6 * $.size)
        ) {
          for (let j = 0; j < $.num; j++) {
            s = $.sin(i / 50 + (j * $.PI) / 2) * 2
            // s = noise(i / 100 + j * 10) * 3
            $.line((2 * j + 1) * $.size, i - 1, (2 * j + 2) * $.size, i + s)
          }
        }
      }
    }
  },
  // dylan
  function ($) {
    var step = 5
    var rate = 0
    $.preload = _ => {
      $.bg = $.loadImage("./images/dylan.jpg")
    }
    $.setup = _ => {
      $.createCanvas(size, size)
      rate = $.bg.width < $.bg.height ? $.bg.width / size : $.bg.height / size
      $.noLoop()
      $.noStroke()
      $.fill(0)
    }
    $.draw = _ => {
      var len = $.int(size / step)
      for (let y = 0; y < len; y++) {
        var b = []
        for (let x = 0; x < len; x++) {
          b[x] = $.map(
            $.brightness($.bg.get(x * step * rate, y * step * rate)),
            0,
            100,
            step / 2,
            0
          )
        }
        $.beginShape()
        for (i = 0; i <= 2 * len; i++) {
          $.vertex(
            i <= len ? i * step : (2 * len - i) * step,
            y * step + (i <= len ? -b[i] : b[2 * len - i])
          )
        }
        $.endShape()
      }
    }
  },
  // dylan with curveline not done
  function ($) {
    step = 5
    rate = 0
    $.preload = _ => {
      bg = $.loadImage("./images/dylan.jpg")
    }
    $.setup = _ => {
      $.createCanvas(size, size)
      $.stroke($.color(255, 40, 100))
      $.noFill()
      $.noLoop()
      rate = bg.width < bg.height ? bg.width / size : bg.height / size
    }
    $.draw = _ => {
      for (let y = step / 2; y < size; y += step) {
        $.beginShape()
        for (let x = 0; x < size; x += 1) {
          b = $.brightness(bg.get(x * rate, y * rate))
          // true 限制超过边界的值
          offH = $.map(b, 0, 70, step / 2, 0, true)
          offR = $.map(b, 70, 100, 1, $.TWO_PI, true)
          off = $.map($.sin(x / offR), -1, 1, -offH, offH)
          $.vertex(x, y + off)
        }
        $.endShape()
      }
    }
  },
  // dylan cross line
  function ($) {
    step = 8
    rate = 0
    $.preload = _ => {
      bg = $.loadImage("./images/dylan.jpg")
    }
    $.setup = $.draw = _ => {
      $.createCanvas(size, size)
      $.stroke(255)
      $.background(0)
      rate = bg.width < bg.height ? bg.width / size : bg.height / size

      a = $.frameCount / 5
      for (let y = 4; y < size; y += step) {
        for (let x = 4; x < size; x += step) {
          b = $.brightness(bg.get(x * rate, y * rate))
          if (b >= 70) continue
          offSize = $.map(b, 0, 70, step * 2, 1, true)
          h = (offSize * $.cos($.PI / 3) * 2) / 3
          $.line(x, y, x + h * $.cos(a), y + h * $.sin(a))
          $.line(
            x,
            y,
            x + h * $.cos(a + (4 * $.PI) / 3),
            y + h * $.sin(a + (4 * $.PI) / 3)
          )
          $.line(
            x,
            y,
            x + h * $.cos(a + (2 * 4 * $.PI) / 3),
            y + h * $.sin(a + (2 * 4 * $.PI) / 3)
          )
        }
      }
    }
  },
  // tangle up in blue
  function ($) {
    $.setup = _ => {
      $.createCanvas(size, size, $.WEBGL)
      $.noStroke()
      $.frameRate(60)
    }

    $.draw = _ => {
      $.background(175)
      $.rotateX($.QUARTER_PI + $.frameCount / 15)
      $.rotateY($.QUARTER_PI + $.frameCount / 15)

      for (i = 0; i < 2; i++) {
        off = $.sin($.frameCount / 30 + i * $.HALF_PI)
        $.size = $.abs($.floor(20 * off)) + 20
        $.push()
        $.translate(0, 0, $.map(off, -1, 1, -$.size, $.size))
        if ($.abs(off) < 0.3) $.stroke($.color(255, 40, 100))
        $.torus($.size, 2)
        $.pop()
      }
    }
  },
  // rolling boxes
  function ($) {
    $.setup = _ => {
      $.createCanvas(size, size, $.WEBGL)
      $.smooth()
      $.fill(0)
      $.strokeWeight(1.4)
    }
    $.draw = _ => {
      $.background(0)
      offSet = $.map($.sin($.frameCount / 20), -1, 1, 0, $.TWO_PI)
      for (let i = -4; i < 5; i++) {
        for (let j = -4; j < 5; j++) {
          $.push()
          $.translate(60 * j, 60 * i)
          $.rotateY((i / 8) * $.PI + offSet)
          $.rotateX((j / 8) * $.PI + offSet)
          $.stroke($.color(255, 30, $.map(i + j, -8, 8, 80, 160)))
          $.box(30, 30, 10)
          $.pop()
        }
      }
    }
  },
  function ($) {
    var toogleRectOrEllipse

    $.setup = _ => {
      $.createCanvas(size, size)
      $.smooth()
      $.noStroke()
      $.rectMode($.CENTER)
    }

    $.draw = _ => {
      $.background(0)
      var gap = size / 10
      for (var i = 0; i <= size; i += gap) {
        for (var j = 0; j <= size; j += gap) {
          $.size = $.dist($.mouseX, $.mouseY, i, j)
          $.size = $.map($.size, 0, size, 0, gap * 2)
          if (toogleRectOrEllipse) {
            $.rect(i, j, $.size, $.size)
          } else {
            $.ellipse(i, j, $.size, $.size)
          }
        }
      }
    }

    $.mouseClicked = _ => {
      toogleRectOrEllipse = !toogleRectOrEllipse
    }
  },
  // Copyright: https://www.openprocessing.org/sketch/683686
  // 作者用了 ES6 的写法，需要学习一下
  function ($) {
    var f = 0
    $.setup = $.draw = _ => {
      $.createCanvas(size, (b = size))
      f++
      $.background(0)
      $.fill(0)
      $.stroke(b)

      for (y = 100; y < b; y += 5) {
        $.beginShape()
        for (x = 0; x < b; ++x)
          $.vertex(
            x,
            y -
              (80 / (1 + $.pow(x - 150, 4) / 8e6)) *
                $.noise(x / 30 + f / 50 + y)
          )
        // 可以不用作者这个 1 * 10000
        // v(x,1e4)
        $.endShape()
      }
    }
  },
  // inspired: https://jodeus.tumblr.com/page/6
  function ($) {
    $.setup = _ => {
      $.createCanvas(size, size)
      num = 12
      maxSize = size / num
      $.fill(0)
    }
    $.draw = _ => {
      $.background(255)
      for (let y = 1; y < num; y++) {
        for (let x = 1; x < num; x++) {
          speedX = ($.frameCount / 140) * x
          speedY = y / 6
          $.size = $.map(
            $.sin($.frameCount / 4 + (speedX + speedY) * $.PI),
            -1,
            1,
            maxSize / 2,
            maxSize
          )
          $.ellipse(x * maxSize, y * maxSize, $.size, $.size)
        }
      }
    }
  },

  // pepsi
  function ($) {
    $.setup = _ => {
      $.createCanvas(size, size)
      $.setAttributes("antialias", true)
      $.stroke(255)
    }
    $.draw = _ => {
      h = size / 2
      $.fill($.color(250, 0, 40))
      $.ellipse(h, h, h)
      for (let i = 0; i <= size; i++) {
        upY = $.map(
          $.sin($.frameCount / 40 + (i / 120) * $.HALF_PI),
          -1,
          1,
          h,
          h + 40
        )
        downY = $.map(
          $.sin($.frameCount / 20 + (i / 120) * $.HALF_PI),
          -1,
          1,
          upY,
          upY + 15
        )
        // 保证此点的 Y 轴在圆内
        safeY = $.abs($.sqrt($.pow(h / 2, 2) - $.pow(i - h, 2))) + h
        if (upY > safeY) upY = safeY
        if (downY > safeY) downY = safeY
        $.line(i, upY, i, downY)
      }
    }
  },

  function ($) {
    $.setup = _ => {
      $.createCanvas(size, size)
      $.noFill()
      $.stroke(255)
      $.strokeWeight(5)
      $.arc(0, 0, 50, 0, 0, $.HALF_PI)
    }

    $.draw = _ => {
      $.translate(size / 2, size / 2)
      $.background(50)
      speed = $.frameCount / 20
      for (let i = 20; i < 250; i += 20) {
        an = $.map($.sin(speed + i / 100), -1, 1, 0, $.HALF_PI - 1 / 1e3)
        $.arc(0, 0, i, i, an, $.PI - an)
        $.arc(0, 0, i, i, $.PI + an, $.TWO_PI - an)
      }
    }
  },

  function ($) {
    branch = 1
    speed = 100
    $.setup = _ => {
      $.createCanvas(size, size)
      $.noFill()
      $.strokeWeight(5)
    }
    $.draw = _ => {
      $.translate(size / 2, size / 2)
      $.rotate(-$.HALF_PI)
      $.stroke(255, 100, 100)
      $.background(255)
      for (let i = 20; i < 250; i += 20) {
        an = $.map(
          $.sin($.frameCount / 20 + (i / speed) * $.PI),
          -1,
          1,
          0,
          $.TWO_PI / (2 * branch) - 1 / 1e3
        )
        for (let j = 1; j <= branch; j++) {
          $.arc(
            0,
            0,
            i,
            i,
            ($.TWO_PI / branch) * (j - 1) + an,
            ($.TWO_PI / branch) * j - an
          )
        }
      }
      if ($.frameCount % 120 == 0) {
        branch++
        branch = (branch % 10) + 1
      }
    }
  },
]
