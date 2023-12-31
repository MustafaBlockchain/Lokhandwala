/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransitions-setclasses !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function s() {
        var e, n, t, s, o, i, a;
        for (var l in S)
            if (S.hasOwnProperty(l)) {
                if (e = [], n = S[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), C.push((s ? "" : "no-") + a.join("-"))
            }
    }

    function o(e) {
        var n = _.className,
            t = Modernizr._config.classPrefix || "";
        if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? _.className.baseVal = n : _.className = n)
    }

    function i(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function u(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function f(e, n, t) {
        var s;
        for (var o in e)
            if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? u(s, t || n) : s);
        return !1
    }

    function c(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(n, t, r) {
        var s;
        if ("getComputedStyle" in e) {
            s = getComputedStyle.call(e, n, t);
            var o = e.console;
            if (null !== s) r && (s = s.getPropertyValue(r));
            else if (o) {
                var i = o.error ? "error" : "log";
                o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else s = !t && n.currentStyle && n.currentStyle[r];
        return s
    }

    function p() {
        var e = n.body;
        return e || (e = a(x ? "svg" : "body"), e.fake = !0), e
    }

    function m(e, t, r, s) {
        var o, i, l, u, f = "modernizr",
            c = a("div"),
            d = p();
        if (parseInt(r, 10))
            for (; r--;) l = a("div"), l.id = s ? s[r] : f + (r + 1), c.appendChild(l);
        return o = a("style"), o.type = "text/css", o.id = "s" + f, (d.fake ? d : c).appendChild(o), d.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), c.id = f, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = _.style.overflow, _.style.overflow = "hidden", _.appendChild(d)), i = t(c, e), d.fake ? (d.parentNode.removeChild(d), _.style.overflow = u, _.offsetHeight) : c.parentNode.removeChild(c), !!i
    }

    function y(n, r) {
        var s = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; s--;)
                if (e.CSS.supports(c(n[s]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; s--;) o.push("(" + c(n[s]) + ":" + r + ")");
            return o = o.join(" or "), m("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == d(e, null, "position")
            })
        }
        return t
    }

    function v(e, n, s, o) {
        function u() {
            c && (delete N.style, delete N.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
            var f = y(e, s);
            if (!r(f, "undefined")) return f
        }
        for (var c, d, p, m, v, g = ["modernizr", "tspan", "samp"]; !N.style && g.length;) c = !0, N.modElem = a(g.shift()), N.style = N.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], v = N.style[m], i(m, "-") && (m = l(m)), N.style[m] !== t) {
                if (o || r(s, "undefined")) return u(), "pfx" == n ? m : !0;
                try {
                    N.style[m] = s
                } catch (h) {}
                if (N.style[m] != v) return u(), "pfx" == n ? m : !0
            }
        return u(), !1
    }

    function g(e, n, t, s, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + P.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? v(a, n, s, o) : (a = (e + " " + z.join(i + " ") + i).split(" "), f(a, n, t))
    }

    function h(e, n, r) {
        return g(e, t, t, n, r)
    }
    var C = [],
        S = [],
        w = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
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
    Modernizr.prototype = w, Modernizr = new Modernizr;
    var _ = n.documentElement,
        x = "svg" === _.nodeName.toLowerCase(),
        b = "Moz O ms Webkit",
        P = w._config.usePrefixes ? b.split(" ") : [];
    w._cssomPrefixes = P;
    var z = w._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    w._domPrefixes = z;
    var E = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function() {
        delete E.elem
    });
    var N = {
        style: E.elem.style
    };
    Modernizr._q.unshift(function() {
        delete N.style
    }), w.testAllProps = g, w.testAllProps = h, Modernizr.addTest("cssanimations", h("animationName", "a", !0)), Modernizr.addTest("csstransitions", h("transition", "all", !0)), s(), o(C), delete w.addTest, delete w.addAsyncTest;
    for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]();
    e.Modernizr = Modernizr
}(window, document);