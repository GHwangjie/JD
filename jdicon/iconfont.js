;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M937.728 838.5536 723.5072 622.5357c-2.4934-2.4996-5.248-4.4083-7.8787-6.4881 36.1861-55.9862 57.3164-122.6742 57.3164-194.5078 0-197.3463-158.6268-357.3023-354.43-357.3023-195.6936 0-354.43 159.956-354.43 357.3023 0 197.374 158.7364 357.2951 354.43 357.2951 71.2274 0 137.4546-21.3576 193.0762-57.8458 2.0255 2.7136 3.884 5.4129 6.3365 7.893l214.2484 216.0445c14.6278 14.7036 33.6783 22.0324 52.7565 22.0324 19.0915 0 38.1553-7.3277 52.7698-21.9976C966.8055 915.5523 966.8055 867.9404 937.728 838.5536M418.5149 666.0076c-133.6812 0-242.4986-109.6847-242.4986-244.4677 0-134.7625 108.8184-244.4759 242.4986-244.4759s242.4986 109.7134 242.4986 244.4759C661.0135 556.3218 552.1951 666.0076 418.5149 666.0076"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.3267 63.9468c-185.856 0-336.5468 150.4061-336.5468 335.8894 0 185.4822 336.5468 559.7706 336.5468 559.7706s336.5437-374.2884 336.5437-559.7706C848.8704 214.3529 698.1806 63.9468 512.3267 63.9468zM714.2523 399.8362c0 111.2842-90.4018 201.5324-201.9256 201.5324-111.5269 0-201.9287-90.2482-201.9287-201.5324 0-111.3068 90.4018-201.5334 201.9287-201.5334C623.8505 198.3027 714.2523 288.5284 714.2523 399.8362z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M364.8 640l403.2 0c19.2 0 38.4-12.8 44.8-32l76.8-332.8c6.4-12.8 0-25.6-6.4-38.4-6.4-12.8-25.6-19.2-38.4-19.2L294.4 217.6 275.2 134.4 153.6 134.4C140.8 134.4 128 140.8 128 153.6s12.8 25.6 25.6 25.6l83.2 0 38.4 166.4c0 0 0 0 0 0 0 6.4 0 6.4 0 12.8l57.6 236.8C307.2 608 281.6 640 281.6 678.4c0 25.6 12.8 44.8 25.6 57.6-12.8 12.8-25.6 38.4-25.6 57.6 0 44.8 38.4 83.2 83.2 83.2S448 844.8 448 800c0-12.8-6.4-25.6-6.4-38.4l275.2 0c-6.4 12.8-6.4 25.6-6.4 38.4 0 44.8 38.4 83.2 83.2 83.2s83.2-38.4 83.2-83.2c0-44.8-32-76.8-76.8-83.2 0 0-6.4 0-6.4 0L364.8 716.8c0 0 0 0 0 0-19.2 0-38.4-19.2-38.4-38.4C332.8 659.2 345.6 640 364.8 640zM787.2 761.6c19.2 0 38.4 19.2 38.4 38.4S812.8 832 787.2 832c-19.2 0-38.4-19.2-38.4-38.4S768 761.6 787.2 761.6zM364.8 832c-19.2 0-38.4-19.2-38.4-38.4 0-19.2 19.2-38.4 38.4-38.4 0 0 0 0 0 0s0 0 0 0c19.2 0 38.4 19.2 38.4 38.4C403.2 819.2 384 832 364.8 832zM768 595.2l-384 0L332.8 371.2l486.4 0L768 595.2zM844.8 262.4 832 326.4 320 326.4 307.2 268.8 844.8 262.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxia" viewBox="0 0 1846 1024">' +
    '' +
    '<path d="M922.311423 569.678636l-177.042136-177.042136-31.24273 31.24273 208.284866 208.284866 208.284866-208.284866-31.24273-31.24273L922.311423 569.678636zM922.311423 569.678636"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyoujiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M373.412318 205.422751 334.856478 242.886344l277.618102 269.744922L334.856478 782.385917l38.55584 37.458727 316.165428-307.213379L373.412318 205.422751 373.412318 205.422751zM373.412318 205.422751"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M325.845765 35.885302c14.929014 0 29.858028 5.679349 41.250496 17.071817l427.671383 427.663196c22.779819 22.745027 22.779819 59.683311 0 82.4662l-427.671383 427.721525c-22.780843 22.786982-59.679217 22.786982-82.483596 0-22.783913-22.741957-22.783913-59.676148 0-82.462107l386.413723-386.450563L284.632107 135.458111c-22.784936-22.779819-22.784936-59.679217 0-82.482573C295.98262 41.564651 310.91675 35.885302 325.845765 35.885302L325.845765 35.885302 325.845765 35.885302zM325.845765 35.885302"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xialia-jiantou-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M740.173 52.337c-30.396-31.269-79.721-31.269-110.194 0l-391.718 403.211c-30.382 31.325-30.382 82.114 0 113.378l391.718 403.197c30.466 31.325 79.793 31.325 110.194 0 30.449-31.28 30.449-82.058 0-113.393l-336.64-346.497 336.639-346.457c30.448-31.325 30.448-82.105 0-113.445v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyoujiantou1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M675.701362 510.179538a13.100366 13.100366 0 0 1-3.86298 9.318227L371.062084 820.274062a13.06455 13.06455 0 0 1-9.309017 3.843538 13.088086 13.088086 0 0 1-9.315156-3.849678 13.08297 13.08297 0 0 1-3.861957-9.311063c0-3.51301 1.37123-6.818289 3.860934-9.307993L643.899052 510.187725 351.987656 218.276329a13.07069 13.07069 0 0 1-3.858887-9.304924c0-3.517103 1.373277-6.825452 3.865027-9.317203a13.093203 13.093203 0 0 1 9.31618-3.864004 13.068643 13.068643 0 0 1 9.30697 3.857865l301.221436 301.221435a13.075807 13.075807 0 0 1 3.86298 9.31004z" fill="#272636" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M750.933333 744.106667c-6.826667 6.826667-20.48 6.826667-30.72 0L303.786667 327.68c-6.826667-6.826667-6.826667-20.48 0-30.72 6.826667-6.826667 20.48-6.826667 30.72 0L750.933333 713.386667c6.826667 6.826667 6.826667 20.48 0 30.72z" fill="#929292" ></path>' +
    '' +
    '<path d="M750.933333 296.96c6.826667 6.826667 6.826667 20.48 0 30.72L334.506667 744.106667c-6.826667 6.826667-20.48 6.826667-30.72 0-6.826667-6.826667-6.826667-20.48 0-30.72L720.213333 296.96c6.826667-6.826667 20.48-6.826667 30.72 0z" fill="#929292" ></path>' +
    '' +
    '<path d="M512 962.56c-252.586667 0-457.386667-204.8-457.386667-457.386667S262.826667 51.2 512 51.2s457.386667 204.8 457.386667 457.386667-204.8 453.973333-457.386667 453.973333z m0-877.226667C279.893333 85.333333 92.16 273.066667 92.16 505.173333c0 232.106667 187.733333 423.253333 423.253333 423.253334 232.106667 0 423.253333-187.733333 423.253334-423.253334C935.253333 273.066667 744.106667 85.333333 512 85.333333z" fill="#929292" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)