;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-baidu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M282.9425 531.3935c77.9602-16.7393 67.3157-109.8865 64.9789-130.2569-3.797-31.3917-40.7204-86.229-90.8595-81.9169-63.0804 5.6596-72.3016 96.7772-72.3016 96.7772C176.2519 458.1325 205.1799 548.1329 282.9425 531.3935zM365.6899 693.3975c-2.2948 6.5577-7.3595 23.298-2.9676 37.8829 8.706 32.725 37.119 34.1893 37.119 34.1893h40.802304v-99.7632h-43.691008000000004C377.3256 671.5638 367.8269 686.8388 365.6899 693.3975zM427.5835 375.1875c43.0561 0 77.8414-49.5452 77.8414-110.7968 0-61.1901-34.7853-110.7159-77.8414-110.7159-42.9373 0-77.8404 49.5258-77.8404 110.7159C349.7431 325.6422 384.6451 375.1875 427.5835 375.1875zM612.9859 382.507c57.5416 7.4701 94.5418-53.9279 101.9023-100.4677 7.5182-46.4681-29.6407-100.4667-70.3611-109.7359-40.8023-9.3594-91.7719 56.0159-96.4014 98.646C542.5848 323.0597 555.5651 375.1168 612.9859 382.507zM753.9845 656.0788c0 0-89.0378-68.8691-140.9987-143.317-70.401-109.7554-170.4827-65.0885-203.9634-9.2682-33.3199 55.808-85.2797 91.1073-92.6392 100.4657-7.4793 9.2017-107.522 63.2013-85.3207 161.8657 22.2003 98.5795 100.2004 96.6984 100.2004 96.6984s57.4996 5.6504 124.1805-9.2805c66.7218-14.7907 124.1416 3.7018 124.1416 3.7018s155.8415 52.1779 198.5024-48.2898C820.6674 708.1892 753.9845 656.0788 753.9845 656.0788zM487.338 805.589H386.030592c-43.7668-8.7265-61.1799-38.5853-63.3948-43.6705-2.1381-5.1661-14.5654-29.1727-7.9944-69.9843 18.9153-61.1912 72.8545-65.5759 72.8545-65.5759h53.89824v-66.282496l45.9448 0.6922V805.588992zM676.0264 804.8876H559.44192c-45.1912-11.6449-47.2893-43.7391-47.2893-43.7391V632.218624l47.2893-0.7731v115.879936c2.8887 12.3576 18.2426 14.593 18.2426 14.593h48.004096v-129.69984h50.337792V804.887552zM841.087 460.6556c0-22.27-18.518-89.3082-87.1025-89.3082-68.738 0-77.9192 63.2689-77.9192 108.0074 0 42.6885 3.6424 102.2874 88.961 100.3868C850.4279 577.8545 841.087 483.0444 841.087 460.6556z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M638.8081 555.9101c77.3161-46.1599 129.4592-131.2492 129.4592-228.6469 0-146.3532-117.3975-265.4321-261.7129-265.4321-144.3144 0-261.7149 119.0789-261.7149 265.4321 0 99.1324 53.9494 185.5949 133.5624 231.1721-158.0411 51.5707-275.3853 191.999-291.1396 366.6842-1.7142 19.0474 12.33 35.884 31.3764 37.5962 19.0904 1.7592 35.8707-12.3279 37.5962-31.3754 16.7137-185.3942 169.7956-325.2091 356.0909-325.2091 186.2963 0 339.3772 139.8149 356.0909 325.2091 1.622 17.9866 16.725 31.5116 34.4412 31.5116 1.0465 0 2.0951-0.0451 3.156-0.1372 19.0464-1.7121 33.0885-18.5487 31.3754-37.5962C921.386 747.6613 800.6257 605.4318 638.8081 555.9101zM314.0833 327.2632c0-108.1702 86.3416-196.1902 192.471-196.1902 106.1315 0 192.468 88.02 192.468 196.1902 0 108.1713-86.3365 196.1892-192.468 196.1892C400.425 523.4524 314.0833 435.4345 314.0833 327.2632z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 480 544 480 544 128 480 128 480 480 128 480 128 544 480 544 480 896 544 896 544 544 896 544Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baidu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M400.121 519.282c35.704-7.684 30.849-49.788 29.704-59.079-1.712-14.279-18.607-39.054-41.558-37.004-28.898 2.371-33.165 43.7-33.165 43.7C351.282 486.033 364.562 526.808 400.121 519.282z"  ></path>' +
    '' +
    '<path d="M466.318 448.419c19.677 0 35.649-22.453 35.649-50.181 0-27.806-15.972-50.191-35.649-50.191-19.64 0-35.649 22.386-35.649 50.191C430.668 425.966 446.678 448.419 466.318 448.419z"  ></path>' +
    '' +
    '<path d="M437.929 592.622c-0.955 3.026-3.254 10.552-1.24 17.134 3.952 14.934 16.932 15.546 16.932 15.546l18.681 0 0-45.23-19.942 0C443.292 582.81 439.02 589.587 437.929 592.622z"  ></path>' +
    '' +
    '<path d="M551.162 451.69c26.317 3.471 43.361-24.389 46.635-45.476 3.366-21.07-13.529-45.467-32.209-49.608-18.681-4.366-41.951 25.276-44.188 44.566C518.916 424.744 524.898 448.419 551.162 451.69z"  ></path>' +
    '' +
    '<path d="M615.59 575.64c0 0-40.632-31.138-64.427-64.89-32.247-49.776-78.072-29.516-93.345-4.195-15.22 25.218-39.019 41.37-42.497 45.571-3.407 4.151-49.174 28.596-38.982 73.284 10.143 44.688 45.846 43.754 45.846 43.754s26.396 2.613 56.778-3.969c30.659-6.748 56.902 1.48 56.902 1.48s71.299 23.684 90.881-21.84C646.236 599.37 615.59 575.64 615.59 575.64zM493.615 643.396l-46.317 0c-20.053-3.887-27.901-17.374-29.046-19.64-0.955-2.443-6.694-13.314-3.631-31.804 8.638-27.81 33.355-29.704 33.355-29.704l24.721 0 0-29.967 20.918 0.263L493.615 643.396zM580.018 643.115l-53.371 0c-20.674-5.201-21.67-19.855-21.67-19.855l0-58.415 21.67-0.318 0 52.581c1.257 5.541 8.39 6.649 8.39 6.649l21.992 0 0-58.912 22.989 0L580.018 643.115z"  ></path>' +
    '' +
    '<path d="M655.51 487.106c0-10.049-8.39-40.411-39.921-40.411-31.321 0-35.571 28.622-35.571 48.911 0 19.413 1.596 46.352 40.764 45.579C659.781 540.363 655.51 497.255 655.51 487.106z"  ></path>' +
    '' +
    '<path d="M802.09 563.505l0 26.954-98.444 0 0-26.954L802.09 563.505zM802.239 639.013c0 0-1.708 4.102-4.172 4.102l-94.42 0 0-28.77 98.592 0L802.239 639.013zM834.035 526.619l0-24.653L670.259 501.966l-0.248 24.934 70.456 0-6.512 14.997-59.97 0 0 123.504 142.255 0c14.823 0 13.583-14.752 13.583-14.752L829.823 541.897l-59.957 0 5.176-15.278L834.035 526.619z"  ></path>' +
    '' +
    '<path d="M973.073 614.519l-23.498 12.321-21.654-12.321L973.073 614.519zM887.232 615.007l41.351 23.675c-3.37 3.428-17.403 7.918-17.403 7.918l-27.669 0 0 18.247 37.526 0c10.986-2.216 31.755-12.553 31.755-12.553 8.542 7.691 24.966 10.887 24.966 10.887l42.497 0L1020.255 645l-32.131 0c-8.559-1.224-16.312-6.086-16.312-6.086l48.442-27.612 0-14.86L887.232 596.442 887.232 615.007zM978.002 567.516c0 0-2.295 4.093-5.284 4.093l-48.294 0L924.424 554.5l53.578 0L978.002 567.516zM1003.922 536.373 1003.922 526.9l-25.921 0 0 9.473-53.16 0 0-9.088L900.12 527.285l0 9.088-16.609 0 0.355 18.52 16.254 0 0 34.694 89.662 0c12.524 0 14.141-13.024 14.141-13.024l0-21.67L1023 554.893l0-18.52L1003.922 536.373zM1021.267 502.625l-64.332 0 0-12.398-30.01 0 0 11.739-73.892 0 0 163.228 26.619 0L879.652 523.092l141.614 0L1021.266 502.625z"  ></path>' +
    '' +
    '<path d="M305.701 664.624l35.744 0L341.445 542.157l-35.744 0L305.701 664.624zM305.701 497.432l0 31.132 35.744 0 0-31.132L305.701 497.432z"  ></path>' +
    '' +
    '<path d="M254.1 640.791l-48.666 0c-6.677-2.605-8.824-6.954-9.237-8.071-0.505-0.885-1.919-5.044-0.186-8.728 3.895-7.649 10.382-9.473 10.382-9.473L254.1 614.519 254.1 640.791zM247.571 542.278l-76.281-0.215 0 25.726 66.916 0c0 0 15.894 3.82 15.894 13.884l0 9.067-60.553 0c0 0-23.853 2.221-31.453 30.246-1.265 13.264 0.504 19.805 1.335 22.129 0.901 2.493 7.86 18.093 28.687 21.893l96.413 0 0-87.727C288.529 577.282 283.824 547.255 247.571 542.278z"  ></path>' +
    '' +
    '<path d="M111.187 556.005c0 0-3.986 7.12-14.562 8.799L39.813 564.804l0-35.307 56.683 0c0 0 12.359-0.544 16.366 9.25C112.862 538.747 115.305 548.93 111.187 556.005zM98.713 634.87 98.713 634.87 39.813 634.87 39.813 598.2l58.655 0 1.96 0.384c0 0 11.172 1.997 15.141 11.858 0 0 2.407 9.497-2.708 16.349C112.862 626.791 109.173 633.217 98.713 634.87zM154.134 621.606c1.244-29.757-25.83-40.111-25.83-40.111 22.84-11.834 19.996-41.641 19.996-41.641-2.46-45.525-58.883-43.532-58.883-43.532L2.415 496.322l0 170.08 98.348 0C158.459 666.286 154.134 621.606 154.134 621.606z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
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