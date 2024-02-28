/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransforms3d-flexbox-touchevents-setclasses-cssclassprefix:mad- !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o() {
        var e, n, t, o, s, i, a;
        for (var l in S)
            if (S.hasOwnProperty(l)) {
                if (e = [], n = S[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function s(e) {
        var n = w.className,
            t = Modernizr._config.classPrefix || "";
        if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? w.className.baseVal = n : w.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a() {
        var e = n.body;
        return e || (e = i(_ ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, t, r, o) {
        var s, l, u, f, c = "modernizr",
            p = i("div"),
            d = a();
        if (parseInt(r, 10))
            for (; r--;) u = i("div"), u.id = o ? o[r] : c + (r + 1), p.appendChild(u);
        return s = i("style"), s.type = "text/css", s.id = "s" + c, (d.fake ? d : p).appendChild(s), d.appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), p.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", f = w.style.overflow, w.style.overflow = "hidden", w.appendChild(d)), l = t(p, e), d.fake ? (d.parentNode.removeChild(d), w.style.overflow = f, w.offsetHeight) : p.parentNode.removeChild(p), !!l
    }

    function u(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function p(e, n, t) {
        var o;
        for (var s in e)
            if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? c(o, t || n) : o);
        return !1
    }

    function d(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var s = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (s) {
                var i = s.error ? "error" : "log";
                s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }

    function v(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(d(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; o--;) s.push("(" + d(n[o]) + ":" + r + ")");
            return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return t
    }

    function h(e, n, o, s) {
        function a() {
            c && (delete A.style, delete A.modElem)
        }
        if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
            var l = v(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var c, p, d, m, h, y = ["modernizr", "tspan", "samp"]; !A.style && y.length;) c = !0, A.modElem = i(y.shift()), A.style = A.modElem.style;
        for (d = e.length, p = 0; d > p; p++)
            if (m = e[p], h = A.style[m], u(m, "-") && (m = f(m)), A.style[m] !== t) {
                if (s || r(o, "undefined")) return a(), "pfx" == n ? m : !0;
                try {
                    A.style[m] = o
                } catch (g) {}
                if (A.style[m] != h) return a(), "pfx" == n ? m : !0
            }
        return a(), !1
    }

    function y(e, n, t, o, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + N.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? h(a, n, o, s) : (a = (e + " " + j.join(i + " ") + i).split(" "), p(a, n, t))
    }

    function g(e, n, r) {
        return y(e, t, t, n, r)
    }
    var C = [],
        S = [],
        x = {
            _version: "3.6.0",
            _config: {
                classPrefix: "mad-",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                S.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                S.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr;
    var w = n.documentElement,
        _ = "svg" === w.nodeName.toLowerCase(),
        b = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = b;
    var T = "CSS" in e && "supports" in e.CSS,
        z = "supportsCSS" in e;
    Modernizr.addTest("supports", T || z);
    var P = x.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            P(r, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    });
    var E = "Moz O ms Webkit",
        N = x._config.usePrefixes ? E.split(" ") : [];
    x._cssomPrefixes = N;
    var j = x._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    x._domPrefixes = j;
    var k = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete k.elem
    });
    var A = {
        style: k.elem.style
    };
    Modernizr._q.unshift(function() {
        delete A.style
    }), x.testAllProps = y, x.testAllProps = g, Modernizr.addTest("cssanimations", g("animationName", "a", !0)), Modernizr.addTest("flexbox", g("flexBasis", "1px", !0)), Modernizr.addTest("csstransforms3d", function() {
        return !!g("perspective", "1px", !0)
    }), o(), s(C), delete x.addTest, delete x.addAsyncTest;
    for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
    e.Modernizr = Modernizr
}(window, document);