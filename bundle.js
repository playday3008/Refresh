webpackJsonp([4], [function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    n(271), n(272), n(455), n(609);
    var o = n(467),
        r = i(o),
        s = n(269),
        a = i(s),
        u = n(466),
        c = (i(u), n(468)),
        l = (i(c), n(261)),
        f = (i(l), n(259)),
        h = (i(f), n(258)),
        p = (i(h), n(125)),
        d = (i(p), n(250)),
        v = (i(d), n(257)),
        m = (i(v), n(264)),
        g = (i(m), n(61)),
        y = (i(g), n(126)),
        w = (i(y), n(42)),
        x = (i(w), n(105));
    i(x);
    n(610), new r.default(document.body), TweenMax.set(a.default.q("#stage"), {
        display: "block"
    })
}, function(t, e, n) {
    var i = n(8),
        o = n(52),
        r = n(27),
        s = n(28),
        a = n(53),
        u = "prototype",
        c = function(t, e, n) {
            var l, f, h, p, d = t & c.F,
                v = t & c.G,
                m = t & c.S,
                g = t & c.P,
                y = t & c.B,
                w = v ? i : m ? i[e] || (i[e] = {}) : (i[e] || {})[u],
                x = v ? o : o[e] || (o[e] = {}),
                b = x[u] || (x[u] = {});
            v && (n = e);
            for (l in n) f = !d && w && void 0 !== w[l], h = (f ? w : n)[l], p = y && f ? a(h, i) : g && "function" == typeof h ? a(Function.call, h) : h, w && s(w, l, h, t & c.U), x[l] != h && r(x, l, p), g && b[l] != h && (b[l] = h)
        };
    i.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, , , , , function(t, e, n) {
    var i = n(11);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, , function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, , function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var i = n(115)("wks"),
        o = n(76),
        r = n(8).Symbol,
        s = "function" == typeof r,
        a = t.exports = function(t) {
            return i[t] || (i[t] = s && r[t] || (s ? r : o)("Symbol." + t))
        };
    a.store = i
}, , , function(t, e, n) {
    t.exports = !n(10)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var i = n(6),
        o = n(195),
        r = n(45),
        s = Object.defineProperty;
    e.f = n(15) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = r(e, !0), i(n), o) try {
            return s(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, , , function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(270),
        r = i(o);
    e.default = new r.default
}, function(t, e, n) {
    var i = n(59),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(i(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var i = n(39);
    t.exports = function(t) {
        return Object(i(t))
    }
}, , , function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, , function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var i = n(16),
        o = n(58);
    t.exports = n(15) ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var i = n(8),
        o = n(27),
        r = n(24),
        s = n(76)("src"),
        a = "toString",
        u = Function[a],
        c = ("" + u).split(a);
    n(52).inspectSource = function(t) {
        return u.call(t)
    }, (t.exports = function(t, e, n, a) {
        var u = "function" == typeof n;
        u && (r(n, "name") || o(n, "name", e)), t[e] !== n && (u && (r(n, s) || o(n, s, t[e] ? "" + t[e] : c.join(String(e)))), t === i ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, a, function() {
        return "function" == typeof this && this[s] || u.call(this)
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(10),
        r = n(39),
        s = /"/g,
        a = function(t, e, n, i) {
            var o = String(r(t)),
                a = "<" + e;
            return "" !== n && (a += " " + n + '="' + String(i).replace(s, "&quot;") + '"'), a + ">" + o + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var n = {};
        n[t] = e(a), i(i.P + i.F * o(function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        }), "String", n)
    }
}, function(t, e, n) {
    var i = n(99),
        o = n(39);
    t.exports = function(t) {
        return i(o(t))
    }
}, , function(t, e) {
    "use strict";

    function n(t) {
        Object.getOwnPropertyNames(t.__proto__).forEach(function(e) {
            "function" == typeof t[e] && 0 === e.indexOf("on") && (t[e] = t[e].bind(t))
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function(t, e, n) {
    var i = n(100),
        o = n(58),
        r = n(30),
        s = n(45),
        a = n(24),
        u = n(195),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(15) ? c : function(t, e) {
        if (t = r(t), e = s(e, !0), u) try {
            return c(t, e)
        } catch (t) {}
        if (a(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var i = n(24),
        o = n(21),
        r = n(165)("IE_PROTO"),
        s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t), i(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Events = e.Types = void 0;
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(19),
        a = i(s),
        u = n(124),
        c = i(u),
        l = function() {
            function t() {
                o(this, t), this._addedFiles = 0, this._finishedFiles = 0
            }
            return r(t, [{
                key: "getFile",
                value: function(e, n) {
                    return new Promise(function(i, o) {
                        ! function() {
                            switch (n) {
                                case t.Types.IMAGE:
                                    var i = new Image;
                                    i.onload = function() {
                                        c.default.finish(e, i)
                                    }, i.onerror = function() {
                                        c.default.finish(e, "OMAGAD")
                                    }, i.src = e;
                                    break;
                                case t.Types.SVG:
                                    fetch(e, {}).then(function(t) {
                                        if (t.status <= 400) return t.text()
                                    }).then(function(t) {
                                        c.default.finish(e, t)
                                    });
                                    break;
                                case t.Types.JSON:
                                    fetch(e, {}).then(function(t) {
                                        if (t.status <= 400) return t.json()
                                    }).then(function(t) {
                                        c.default.finish(e, t)
                                    });
                                    break;
                                case t.Types.FILE:
                                    fetch(e, {}).then(function(t) {
                                        if (t.status <= 400) return t.text()
                                    }).then(function(t) {
                                        c.default.finish(e, t)
                                    })
                            }
                        }()
                    })
                }
            }, {
                key: "load",
                value: function(e) {
                    var n = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Types.IMAGE,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    return this._addedFiles++, new Promise(function(r, s) {
                        c.default.isInCache(e) || n.getFile(e, i), c.default.add(e, function(e) {
                            n._finishedFiles++, o(e), r(e), requestAnimationFrame(function() {
                                a.default.dispatchEvent(t.Events.UPDATE, {
                                    addedFiles: n._addedFiles,
                                    finishedFiles: n._finishedFiles
                                }, !1)
                            })
                        })
                    })
                }
            }, {
                key: "loadAll",
                value: function(t) {
                    var e = this;
                    return Promise.all(t.map(function(t) {
                        return e.load(t.url, t.type, t.callback)
                    }))
                }
            }]), t
        }();
    l.Types = {
        IMAGE: "Preloader.Type.Image",
        SVG: "Preloader.Type.Svg",
        JSON: "Preloader.Type.Json",
        FILE: "Preloader.Type.File"
    }, l.Events = {
        UPDATE: "Preloader.Events.Update"
    }, e.default = new l;
    e.Types = l.Types, e.Events = l.Events
}, , , function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var i = n(10);
    t.exports = function(t, e) {
        return !!t && i(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}, , function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Events = void 0;
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(216),
        a = i(s),
        u = (n(593), n(19)),
        c = i(u),
        l = n(47),
        f = i(l),
        h = void 0,
        p = function() {
            function t() {
                o(this, t), this.isReady = !1, c.default.addEventListener(t.Events.INIT, this.init.bind(this))
            }
            return r(t, [{
                key: "init",
                value: function() {
                    this.isReady || this.setupHistory()
                }
            }, {
                key: "setupHistory",
                value: function() {
                    var e = this;
                    h = (0, a.default)({}), h.listen(function(n) {
                        var i = e.getPageFromLocation(n);
                        console.log("ROUTER", e.currentPage, i), e.currentPage !== i && (e.currentPage = i, f.default.trackPageView("/" + i), c.default.dispatchEvent(t.Events.UPDATE, {
                            page: i
                        }))
                    });
                    var n = this.getPageFromLocation(h.getCurrentLocation());
                    c.default.dispatchEvent(t.Events.UPDATE, {
                        page: n
                    }), f.default.trackPageView("/" + n)
                }
            }, {
                key: "push",
                value: function(t) {
                    h.push(t)
                }
            }, {
                key: "replace",
                value: function(t) {
                    h.replace(t)
                }
            }, {
                key: "getPageFromLocation",
                value: function(t) {
                    return t.pathname.substr(1).split("/")[0]
                }
            }]), t
        }();
    p.Events = {
        INIT: "Router.INIT",
        UPDATE: "Router.UPDATE"
    }, e.default = new p;
    e.Events = p.Events
}, function(t, e, n) {
    var i = n(53),
        o = n(99),
        r = n(21),
        s = n(20),
        a = n(276);
    t.exports = function(t, e) {
        var n = 1 == t,
            u = 2 == t,
            c = 3 == t,
            l = 4 == t,
            f = 6 == t,
            h = 5 == t || f,
            p = e || a;
        return function(e, a, d) {
            for (var v, m, g = r(e), y = o(g), w = i(a, d, 3), x = s(y.length), b = 0, P = n ? p(e, x) : u ? p(e, 0) : void 0; x > b; b++)
                if ((h || b in y) && (v = y[b], m = w(v, b, g), t))
                    if (n) P[b] = m;
                    else if (m) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return b;
                case 2:
                    P.push(v)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : P
        }
    }
}, function(t, e, n) {
    var i = n(1),
        o = n(52),
        r = n(10);
    t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t],
            s = {};
        s[t] = e(n), i(i.S + i.F * r(function() {
            n(1)
        }), "Object", s)
    }
}, function(t, e, n) {
    var i = n(11);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !i(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Events = void 0;
    var r = n(456),
        s = (i(r), function t(e) {
            o(this, t), this.isActive = !1, this.timelines = {}, this.$node = e, this.isDark = DOMUtils.hasClass(document.body, "dark-mode")
        });
    s.Events = {
        CURR_OUT: "Section.CURR_OUT",
        CURR_IN: "Section.CURR_IN",
        CONTENT_READY: "Section.CONTENT_READY"
    }, e.default = s;
    e.Events = s.Events
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Events = void 0;
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(19),
        a = i(s),
        u = void 0,
        c = function() {
            function t() {
                o(this, t), this.checkForLibs(), this.setupListeners()
            }
            return r(t, [{
                key: "checkForLibs",
                value: function() {
                    "undefined" != typeof window && window.ga && (u = window.ga)
                }
            }, {
                key: "trackPageView",
                value: function(t) {
                    "undefined" != typeof u && "undefined" != typeof webtrends || this.checkForLibs(), "undefined" != typeof u ? u("send", "pageview", t) : console.log("Tracking: can not send tracking requests, because ga is not defined")
                }
            }, {
                key: "trackInteraction",
                value: function(t, e, n, i) {
                    "undefined" == typeof u && this.checkForLibs(), "undefined" != typeof u ? u("send", "event", t, e, n, i) : console.log("Tracking: can not send tracking requests, because ga is not defined")
                }
            }, {
                key: "setupListeners",
                value: function() {
                    a.default.addEventListener(t.Events.TRACK_PAGE, this.onTrackPage.bind(this)), a.default.addEventListener(t.Events.TRACK_EVENT, this.onTrackEvent.bind(this))
                }
            }, {
                key: "onTrackPage",
                value: function(t) {
                    var e = t.page;
                    this.trackPageView(e)
                }
            }, {
                key: "onTrackEvent",
                value: function(t) {
                    var e = t.category,
                        n = t.action,
                        i = t.label,
                        o = t.value;
                    this.trackInteraction(e, n, i, o)
                }
            }]), t
        }();
    c.Events = {
        TRACK_PAGE: "TRACKINCONTROLLER.TRACK_PAGE",
        TRACK_EVENT: "TRACKINCONTROLLER.TRACK_EVENT"
    }, e.default = new c;
    e.Events = c.Events
}, , , , , function(t, e) {
    var n = t.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var i = n(26);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, o) {
                    return t.call(e, n, i, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    var i = n(211),
        o = n(1),
        r = n(115)("metadata"),
        s = r.store || (r.store = new(n(214))),
        a = function(t, e, n) {
            var o = s.get(t);
            if (!o) {
                if (!n) return;
                s.set(t, o = new i)
            }
            var r = o.get(e);
            if (!r) {
                if (!n) return;
                o.set(e, r = new i)
            }
            return r
        },
        u = function(t, e, n) {
            var i = a(e, n, !1);
            return void 0 !== i && i.has(t)
        },
        c = function(t, e, n) {
            var i = a(e, n, !1);
            return void 0 === i ? void 0 : i.get(t)
        },
        l = function(t, e, n, i) {
            a(n, i, !0).set(t, e)
        },
        f = function(t, e) {
            var n = a(t, e, !1),
                i = [];
            return n && n.forEach(function(t, e) {
                i.push(e)
            }), i
        },
        h = function(t) {
            return void 0 === t || "symbol" == typeof t ? t : String(t)
        },
        p = function(t) {
            o(o.S, "Reflect", t)
        };
    t.exports = {
        store: s,
        map: a,
        has: u,
        get: c,
        set: l,
        keys: f,
        key: h,
        exp: p
    }
}, function(t, e, n) {
    "use strict";
    if (n(15)) {
        var i = n(69),
            o = n(8),
            r = n(10),
            s = n(1),
            a = n(116),
            u = n(172),
            c = n(53),
            l = n(68),
            f = n(58),
            h = n(27),
            p = n(73),
            d = n(59),
            v = n(20),
            m = n(75),
            g = n(45),
            y = n(24),
            w = n(208),
            x = n(98),
            b = n(11),
            P = n(21),
            M = n(157),
            O = n(70),
            k = n(34),
            E = n(71).f,
            T = n(174),
            _ = n(76),
            A = n(12),
            L = n(43),
            $ = n(106),
            C = n(166),
            S = n(175),
            D = n(82),
            I = n(112),
            j = n(74),
            U = n(150),
            N = n(188),
            R = n(16),
            B = n(33),
            F = R.f,
            V = B.f,
            q = o.RangeError,
            W = o.TypeError,
            z = o.Uint8Array,
            H = "ArrayBuffer",
            G = "Shared" + H,
            Y = "BYTES_PER_ELEMENT",
            X = "prototype",
            K = Array[X],
            J = u.ArrayBuffer,
            Q = u.DataView,
            Z = L(0),
            tt = L(2),
            et = L(3),
            nt = L(4),
            it = L(5),
            ot = L(6),
            rt = $(!0),
            st = $(!1),
            at = S.values,
            ut = S.keys,
            ct = S.entries,
            lt = K.lastIndexOf,
            ft = K.reduce,
            ht = K.reduceRight,
            pt = K.join,
            dt = K.sort,
            vt = K.slice,
            mt = K.toString,
            gt = K.toLocaleString,
            yt = A("iterator"),
            wt = A("toStringTag"),
            xt = _("typed_constructor"),
            bt = _("def_constructor"),
            Pt = a.CONSTR,
            Mt = a.TYPED,
            Ot = a.VIEW,
            kt = "Wrong length!",
            Et = L(1, function(t, e) {
                return Ct(C(t, t[bt]), e)
            }),
            Tt = r(function() {
                return 1 === new z(new Uint16Array([1]).buffer)[0]
            }),
            _t = !!z && !!z[X].set && r(function() {
                new z(1).set({})
            }),
            At = function(t, e) {
                if (void 0 === t) throw W(kt);
                var n = +t,
                    i = v(t);
                if (e && !w(n, i)) throw q(kt);
                return i
            },
            Lt = function(t, e) {
                var n = d(t);
                if (n < 0 || n % e) throw q("Wrong offset!");
                return n
            },
            $t = function(t) {
                if (b(t) && Mt in t) return t;
                throw W(t + " is not a typed array!")
            },
            Ct = function(t, e) {
                if (!(b(t) && xt in t)) throw W("It is not a typed array constructor!");
                return new t(e)
            },
            St = function(t, e) {
                return Dt(C(t, t[bt]), e)
            },
            Dt = function(t, e) {
                for (var n = 0, i = e.length, o = Ct(t, i); i > n;) o[n] = e[n++];
                return o
            },
            It = function(t, e, n) {
                F(t, e, {
                    get: function() {
                        return this._d[n]
                    }
                })
            },
            jt = function(t) {
                var e, n, i, o, r, s, a = P(t),
                    u = arguments.length,
                    l = u > 1 ? arguments[1] : void 0,
                    f = void 0 !== l,
                    h = T(a);
                if (void 0 != h && !M(h)) {
                    for (s = h.call(a), i = [], e = 0; !(r = s.next()).done; e++) i.push(r.value);
                    a = i
                }
                for (f && u > 2 && (l = c(l, arguments[2], 2)), e = 0, n = v(a.length), o = Ct(this, n); n > e; e++) o[e] = f ? l(a[e], e) : a[e];
                return o
            },
            Ut = function() {
                for (var t = 0, e = arguments.length, n = Ct(this, e); e > t;) n[t] = arguments[t++];
                return n
            },
            Nt = !!z && r(function() {
                gt.call(new z(1))
            }),
            Rt = function() {
                return gt.apply(Nt ? vt.call($t(this)) : $t(this), arguments)
            },
            Bt = {
                copyWithin: function(t, e) {
                    return N.call($t(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return nt($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return U.apply($t(this), arguments)
                },
                filter: function(t) {
                    return St(this, tt($t(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return it($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return ot($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    Z($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return st($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return rt($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return pt.apply($t(this), arguments)
                },
                lastIndexOf: function(t) {
                    return lt.apply($t(this), arguments)
                },
                map: function(t) {
                    return Et($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return ft.apply($t(this), arguments)
                },
                reduceRight: function(t) {
                    return ht.apply($t(this), arguments)
                },
                reverse: function() {
                    for (var t, e = this, n = $t(e).length, i = Math.floor(n / 2), o = 0; o < i;) t = e[o], e[o++] = e[--n], e[n] = t;
                    return e
                },
                some: function(t) {
                    return et($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return dt.call($t(this), t)
                },
                subarray: function(t, e) {
                    var n = $t(this),
                        i = n.length,
                        o = m(t, i);
                    return new(C(n, n[bt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, v((void 0 === e ? i : m(e, i)) - o))
                }
            },
            Ft = function(t, e) {
                return St(this, vt.call($t(this), t, e))
            },
            Vt = function(t) {
                $t(this);
                var e = Lt(arguments[1], 1),
                    n = this.length,
                    i = P(t),
                    o = v(i.length),
                    r = 0;
                if (o + e > n) throw q(kt);
                for (; r < o;) this[e + r] = i[r++]
            },
            qt = {
                entries: function() {
                    return ct.call($t(this))
                },
                keys: function() {
                    return ut.call($t(this))
                },
                values: function() {
                    return at.call($t(this))
                }
            },
            Wt = function(t, e) {
                return b(t) && t[Mt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            },
            zt = function(t, e) {
                return Wt(t, e = g(e, !0)) ? f(2, t[e]) : V(t, e)
            },
            Ht = function(t, e, n) {
                return !(Wt(t, e = g(e, !0)) && b(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? F(t, e, n) : (t[e] = n.value, t)
            };
        Pt || (B.f = zt, R.f = Ht), s(s.S + s.F * !Pt, "Object", {
            getOwnPropertyDescriptor: zt,
            defineProperty: Ht
        }), r(function() {
            mt.call({})
        }) && (mt = gt = function() {
            return pt.call(this)
        });
        var Gt = p({}, Bt);
        p(Gt, qt), h(Gt, yt, qt.values), p(Gt, {
            slice: Ft,
            set: Vt,
            constructor: function() {},
            toString: mt,
            toLocaleString: Rt
        }), It(Gt, "buffer", "b"), It(Gt, "byteOffset", "o"), It(Gt, "byteLength", "l"), It(Gt, "length", "e"), F(Gt, wt, {
            get: function() {
                return this[Mt]
            }
        }), t.exports = function(t, e, n, u) {
            u = !!u;
            var c = t + (u ? "Clamped" : "") + "Array",
                f = "Uint8Array" != c,
                p = "get" + t,
                d = "set" + t,
                m = o[c],
                g = m || {},
                y = m && k(m),
                w = !m || !a.ABV,
                P = {},
                M = m && m[X],
                T = function(t, n) {
                    var i = t._d;
                    return i.v[p](n * e + i.o, Tt)
                },
                _ = function(t, n, i) {
                    var o = t._d;
                    u && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), o.v[d](n * e + o.o, i, Tt)
                },
                A = function(t, e) {
                    F(t, e, {
                        get: function() {
                            return T(this, e)
                        },
                        set: function(t) {
                            return _(this, e, t)
                        },
                        enumerable: !0
                    })
                };
            w ? (m = n(function(t, n, i, o) {
                l(t, m, c, "_d");
                var r, s, a, u, f = 0,
                    p = 0;
                if (b(n)) {
                    if (!(n instanceof J || (u = x(n)) == H || u == G)) return Mt in n ? Dt(m, n) : jt.call(m, n);
                    r = n, p = Lt(i, e);
                    var d = n.byteLength;
                    if (void 0 === o) {
                        if (d % e) throw q(kt);
                        if (s = d - p, s < 0) throw q(kt)
                    } else if (s = v(o) * e, s + p > d) throw q(kt);
                    a = s / e
                } else a = At(n, !0), s = a * e, r = new J(s);
                for (h(t, "_d", {
                        b: r,
                        o: p,
                        l: s,
                        e: a,
                        v: new Q(r)
                    }); f < a;) A(t, f++)
            }), M = m[X] = O(Gt), h(M, "constructor", m)) : I(function(t) {
                new m(null), new m(t)
            }, !0) || (m = n(function(t, n, i, o) {
                l(t, m, c);
                var r;
                return b(n) ? n instanceof J || (r = x(n)) == H || r == G ? void 0 !== o ? new g(n, Lt(i, e), o) : void 0 !== i ? new g(n, Lt(i, e)) : new g(n) : Mt in n ? Dt(m, n) : jt.call(m, n) : new g(At(n, f))
            }), Z(y !== Function.prototype ? E(g).concat(E(y)) : E(g), function(t) {
                t in m || h(m, t, g[t])
            }), m[X] = M, i || (M.constructor = m));
            var L = M[yt],
                $ = !!L && ("values" == L.name || void 0 == L.name),
                C = qt.values;
            h(m, xt, !0), h(M, Mt, c), h(M, Ot, !0), h(M, bt, m), (u ? new m(1)[wt] == c : wt in M) || F(M, wt, {
                get: function() {
                    return c
                }
            }), P[c] = m, s(s.G + s.W + s.F * (m != g), P), s(s.S, c, {
                BYTES_PER_ELEMENT: e,
                from: jt,
                of: Ut
            }), Y in M || h(M, Y, e), s(s.P, c, Bt), j(c), s(s.P + s.F * _t, c, {
                set: Vt
            }), s(s.P + s.F * !$, c, qt), s(s.P + s.F * (M.toString != mt), c, {
                toString: mt
            }), s(s.P + s.F * r(function() {
                new m(1).slice()
            }), c, {
                slice: Ft
            }), s(s.P + s.F * (r(function() {
                return [1, 2].toLocaleString() != new m([1, 2]).toLocaleString()
            }) || !r(function() {
                M.toLocaleString.call([1, 2])
            })), c, {
                toLocaleString: Rt
            }), D[c] = $ ? L : C, i || $ || h(M, yt, C)
        }
    } else t.exports = function() {}
}, , function(t, e, n) {
    var i = n(76)("meta"),
        o = n(11),
        r = n(24),
        s = n(16).f,
        a = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(10)(function() {
            return u(Object.preventExtensions({}))
        }),
        l = function(t) {
            s(t, i, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        },
        f = function(t, e) {
            if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!r(t, i)) {
                if (!u(t)) return "F";
                if (!e) return "E";
                l(t)
            }
            return t[i].i
        },
        h = function(t, e) {
            if (!r(t, i)) {
                if (!u(t)) return !0;
                if (!e) return !1;
                l(t)
            }
            return t[i].w
        },
        p = function(t) {
            return c && d.NEED && u(t) && !r(t, i) && l(t), t
        },
        d = t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: f,
            getWeak: h,
            onFreeze: p
        }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.createPath = e.parsePath = e.getQueryStringValueFromPath = e.stripQueryStringValueFromPath = e.addQueryStringValueToPath = void 0;
    var o = n(78),
        r = (i(o), e.addQueryStringValueToPath = function(t, e, n) {
            var i = s(t),
                o = i.pathname,
                r = i.search,
                u = i.hash;
            return a({
                pathname: o,
                search: r + (r.indexOf("?") === -1 ? "?" : "&") + e + "=" + n,
                hash: u
            })
        }, e.stripQueryStringValueFromPath = function(t, e) {
            var n = s(t),
                i = n.pathname,
                o = n.search,
                r = n.hash;
            return a({
                pathname: i,
                search: o.replace(new RegExp("([?&])" + e + "=[a-zA-Z0-9]+(&?)"), function(t, e, n) {
                    return "?" === e ? e : n
                }),
                hash: r
            })
        }, e.getQueryStringValueFromPath = function(t, e) {
            var n = s(t),
                i = n.search,
                o = i.match(new RegExp("[?&]" + e + "=([a-zA-Z0-9]+)"));
            return o && o[1]
        }, function(t) {
            var e = t.match(/^(https?:)?\/\/[^\/]*/);
            return null == e ? t : t.substring(e[0].length)
        }),
        s = e.parsePath = function(t) {
            var e = r(t),
                n = "",
                i = "",
                o = e.indexOf("#");
            o !== -1 && (i = e.substring(o), e = e.substring(0, o));
            var s = e.indexOf("?");
            return s !== -1 && (n = e.substring(s), e = e.substring(0, s)), "" === e && (e = "/"), {
                pathname: e,
                search: n,
                hash: i
            }
        },
        a = e.createPath = function(t) {
            if (null == t || "string" == typeof t) return t;
            var e = t.basename,
                n = t.pathname,
                i = t.search,
                o = t.hash,
                r = (e || "") + n;
            return i && "?" !== i && (r += i), o && (r += o), r
        }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Events = void 0;
    var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        c = n(464),
        l = (o(c), n(46)),
        f = o(l),
        h = n(19),
        p = o(h),
        d = n(42),
        v = o(d),
        m = n(35),
        g = o(m),
        y = n(105),
        w = n(262),
        x = i(w),
        b = n(32),
        P = o(b),
        M = n(79),
        O = o(M),
        k = n(47),
        E = o(k),
        T = ["", "work", "about", "contact"],
        _ = function(t) {
            function e() {
                r(this, e);
                var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.ui")));
                return t.isMenuVisible = !1, t.targetMenuContainerX = -50, t.currentMenuContainerX = -50, t.currentMenuEnterTLs = [], t.currentMenuLeaveTLs = [], t.isMouseOverSome = [], t.someEnterTLs = [], t.someLeaveTLs = [], (0, P.default)(t), t.preload().then(t.setup.bind(t)), t
            }
            return a(e, t), u(e, [{
                key: "preload",
                value: function() {
                    return new Promise(function(t, e) {
                        g.default.loadAll([{
                            url: "assets/images/logo-ani.svg",
                            type: m.Types.SVG
                        }]).then(function() {
                            t()
                        })
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    var t = this;
                    this.isDark = DOMUtils.hasClass(document.body, "dark-mode"), this.setupSVGs().then(function() {
                        t.setupDOMNodes(), t.setupTimelines(), t.setupListeners()
                    })
                }
            }, {
                key: "setupSVGs",
                value: function() {
                    return O.default.inject(DOMUtils.q(".svg", this.$node))
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$menuButton = DOMUtils.q(".menu-button", this.$node), this.$menuButtonStripes = DOMUtils.q(".stripe", this.$menuButton), this.$closeButton = DOMUtils.q(".close-button", this.$node), this.$closeButtonStripes = DOMUtils.q(".stripe", this.$closeButton), this.$logo = DOMUtils.q(".logo", this.$node), this.$logoContainer = DOMUtils.q(".logo-container", this.$logo), this.$logoLines = DOMUtils.q(".logo-lines path", this.$logo), this.$logoFakeLine = DOMUtils.q(".fake-line", this.$logo), this.$logoRPath = DOMUtils.q("#r-stroke", this.$logo), this.$logoFPath = DOMUtils.q("#f-stroke", this.$logo), this.$logoRPath2 = DOMUtils.q("#r-stroke_1_", this.$logo), this.$logoSPath = DOMUtils.q("#s-stroke", this.$logo), this.$logoHPath = DOMUtils.q("#h-stroke", this.$logo), this.$menu = DOMUtils.q(".menu", this.$node), this.$someContainer = DOMUtils.q(".some-container", this.$node), this.$someLabel = DOMUtils.q(".label", this.$someContainer), this.$someLinksContainer = DOMUtils.q(".link-container", this.$someContainer), this.$someLinks = DOMUtils.q(".link-container a", this.$someContainer), this.$menuContainer = DOMUtils.q(".menu-container", this.$node), this.$menuLinks = DOMUtils.q("a", this.$menuContainer)
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    window.APP.isMobile ? x.setupMobileTimelines(this) : x.setupDesktopTimelines(this)
                }
            }, {
                key: "setupListeners",
                value: function() {
                    p.default.addEventListener(d.Events.UPDATE, this.onRouterUpdate), DOMUtils.on(this.$menuButton, "click", this.onMenuButtonClick), DOMUtils.on(this.$closeButton, "click", this.onCloseButtonClick), DOMUtils.on(this.$menuLinks, "click", this.onMenuLinkClick), DOMUtils.on(this.$logo, "click", this.onLogoClick), window.APP.isMobile || (DOMUtils.on(this.$menuButton, "mouseenter", this.onMenuButtonEnter), DOMUtils.on(this.$closeButton, "mouseenter", this.onCloseButtonEnter), DOMUtils.on(this.$menuLinks, "mouseenter", this.onMenuLinkEnter), DOMUtils.on(this.$menuLinks, "mouseleave", this.onMenuLinkLeave), DOMUtils.on(this.$someLinks, "mouseenter", this.onSomeEnter), DOMUtils.on(this.$someLinks, "mouseleave", this.onSomeLeave), DOMUtils.on(this.$logo, "mouseenter", this.onLogoEnter), DOMUtils.on(this.$logo, "mouseleave", this.onLogoLeave))
                }
            }, {
                key: "activateMouseMove",
                value: function() {
                    this.targetMenuContainerX = -50, this.currentMenuContainerX = -50, DOMUtils.on(window, "mousemove", this.onMouseMove), p.default.addEventListener(y.Events.TICK, this.onMenuTick)
                }
            }, {
                key: "deactivateMouseMove",
                value: function() {
                    DOMUtils.off(window, "mousemove", this.onMouseMove), p.default.removeEventListener(y.Events.TICK, this.onMenuTick)
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return this.timelines.hide.kill(), new Promise(function(e, n) {
                        t.timelines.show.eventCallback("onComplete", e), t.timelines.show.restart(!0, !1)
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return this.timelines.show.kill(), new Promise(function(e, n) {
                        t.timelines.hide.eventCallback("onComplete", e), t.timelines.hide.restart(!0, !1)
                    })
                }
            }, {
                key: "showMenu",
                value: function() {
                    var t = this;
                    return this.isMenuVisible = !0, this.timelines.hideMenu.kill(), new Promise(function(n, i) {
                        p.default.dispatchEvent(e.Events.OPEN_MENU), t.timelines.showMenu.eventCallback("onComplete", function() {
                            window.APP.isMobile || t.activateMouseMove(), n()
                        }), t.timelines.showMenu.restart(!0, !1)
                    })
                }
            }, {
                key: "hideMenu",
                value: function(t, n) {
                    var i = this;
                    return this.isMenuVisible = !1, this.timelines.showMenu.kill(), new Promise(function(o, r) {
                        t && v.default.push(n), n = "undefined" != typeof n ? n.substring(1) : n, i.timelines.hideMenu.eventCallback("onComplete", function() {
                            if (p.default.dispatchEvent(e.Events.CLOSE_MENU, {
                                    wasLink: t,
                                    page: n
                                }), i.deactivateMouseMove(), window.APP.isMobile) {
                                var r = new TimelineMax;
                                r.staggerTo(Array.prototype.slice.call(i.$menuLinks).reverse(), .3, {
                                    autoAlpha: 0,
                                    ease: Power0.easeNone
                                }, .1, "start"), r.set(i.$menu, {
                                    display: "none"
                                }, "start+=.5")
                            } else {
                                var s = new TimelineMax;
                                s.staggerTo(i.$menuLinks, .3, {
                                    autoAlpha: 0,
                                    ease: Power0.easeNone
                                }, .1, "start"), s.set(i.$menu, {
                                    display: "none"
                                }, "start+=.5"), s.set(i.$menuLinks, {
                                    autoAlpha: 1,
                                    clearProps: "background-image, -webkit-background-clip, -webkit-text-fill-color"
                                }, "start+=.5")
                            }
                            o()
                        }), i.timelines.hideMenu.restart(!0, !1)
                    })
                }
            }, {
                key: "showCloseButton",
                value: function() {
                    TweenMax.to(this.$closeButton, .3, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    })
                }
            }, {
                key: "hideCloseButton",
                value: function() {
                    TweenMax.to(this.$closeButton, .3, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })
                }
            }, {
                key: "onRouterUpdate",
                value: function(t) {
                    var e = t.page,
                        n = T.indexOf(e);
                    this.currentIndex = n, n < 0 ? this.showCloseButton() : this.hideCloseButton(), this.isActive || p.default.addEventListener(l.Events.CURR_OUT, this.onSectionCurrOut)
                }
            }, {
                key: "onSectionCurrOut",
                value: function() {
                    p.default.removeEventListener(l.Events.CURR_OUT, this.onSectionCurrOut), this.isActive = !0, this.show()
                }
            }, {
                key: "onMenuLinkClick",
                value: function(t) {
                    t.preventDefault(), window.APP.isMobile ? x.mobileMenuLinkClick(this, t.currentTarget) : x.desktopMenuLinkClick(this, t.currentTarget), E.default.trackInteraction("Ui", "click", t.currentTarget.className)
                }
            }, {
                key: "mouseEnter",
                value: function(t, e) {
                    var n = this;
                    if (!(this.currentMenuEnterTLs[e] && this.currentMenuEnterTLs[e].isActive() || this.currentMenuLeaveTLs[e] && this.currentMenuLeaveTLs[e].isActive())) {
                        var i = this.isDark ? ["rgba(255,255,255,.5)", "rgba(255,255,255,.1)"] : ["rgba(0,0,0,.5)", "rgba(0,0,0,.1)"],
                            o = -25,
                            r = {
                                left: 0
                            },
                            s = new TimelineMax({
                                onComplete: function() {
                                    n.currentCursorHover !== e && n.mouseLeave(t, e)
                                }
                            });
                        s.set(t, {
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent"
                        }, "start"), s.to(r, .7, {
                            left: 100 - o,
                            ease: Power1.easeInOut,
                            onUpdate: function() {
                                TweenMax.set(t, {
                                    "background-image": "linear-gradient(to right, " + i[0] + " " + (r.left + o) + "%, " + i[1] + " " + r.left + "%)"
                                })
                            }
                        }, "start"), this.currentMenuEnterTLs[e] = s
                    }
                }
            }, {
                key: "mouseLeave",
                value: function(t, e) {
                    var n = this;
                    if (!(this.currentMenuEnterTLs[e] && this.currentMenuEnterTLs[e].isActive() || this.currentMenuLeaveTLs[e] && this.currentMenuLeaveTLs[e].isActive())) {
                        var i = this.isDark ? ["rgba(255,255,255,.1)", "rgba(255,255,255,.5)"] : ["rgba(0,0,0,.1)", "rgba(0,0,0,.5)"],
                            o = -25,
                            r = {
                                left: 0
                            },
                            s = new TimelineMax({
                                onComplete: function() {
                                    n.currentCursorHover === e && n.mouseEnter(t, e)
                                }
                            });
                        s.set(t, {
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent"
                        }, "start"), s.to(r, .7, {
                            left: 100 - o,
                            ease: Power1.easeInOut,
                            onUpdate: function() {
                                TweenMax.set(t, {
                                    "background-image": "linear-gradient(to right, " + i[0] + " " + (r.left + o) + "%, " + i[1] + " " + r.left + "%)"
                                })
                            }
                        }, "start"), this.currentMenuLeaveTLs[e] = s
                    }
                }
            }, {
                key: "onMenuLinkEnter",
                value: function(t) {
                    if (!this.inMenuClickTransition) {
                        var e = t.currentTarget,
                            n = DOMUtils.index(e);
                        this.currentCursorHover = n, this.mouseEnter(e, n)
                    }
                }
            }, {
                key: "onMenuLinkLeave",
                value: function(t) {
                    if (!this.inMenuClickTransition) {
                        var e = t.currentTarget,
                            n = DOMUtils.index(e);
                        this.currentCursorHover = void 0, this.mouseLeave(e, n)
                    }
                }
            }, {
                key: "onMenuButtonEnter",
                value: function(t) {
                    this.isMenuVisible ? (this.timelines.menuEnter.isActive() && this.timelines.menuEnter.pause().progress(1), this.timelines.menuCloseEnter.isActive() || this.timelines.menuCloseEnter.restart(!0, !1)) : (this.timelines.menuCloseEnter.isActive() && this.timelines.menuCloseEnter.pause().progress(1), this.timelines.menuEnter.isActive() || this.timelines.menuEnter.restart(!0, !1))
                }
            }, {
                key: "onCloseButtonEnter",
                value: function(t) {
                    this.timelines.closeEnter.restart(!0, !1)
                }
            }, {
                key: "someEnter",
                value: function(t, e) {
                    var n = this;
                    if (!(this.someEnterTLs[e] && this.someEnterTLs[e].isActive() || this.someLeaveTLs[e] && this.someLeaveTLs[e].isActive())) {
                        var i = t.children[0],
                            o = new TimelineMax({
                                onComplete: function() {
                                    n.isMouseOverSome[e] || n.someLeave(t, e)
                                }
                            });
                        o.to(i, .3, {
                            y: "-100%",
                            ease: Expo.easeIn
                        }, "start").set(i, {
                            y: "110%"
                        }, "start+=.3").set(t, {
                            opacity: 1
                        }).to(i, .3, {
                            y: "0%",
                            ease: Expo.easeOut
                        }, "start+=.3"), this.someEnterTLs[e] = o
                    }
                }
            }, {
                key: "someLeave",
                value: function(t, e) {
                    var n = this;
                    if (!(this.someEnterTLs[e] && this.someEnterTLs[e].isActive() || this.someLeaveTLs[e] && this.someLeaveTLs[e].isActive())) {
                        var i = new TimelineMax({
                            onComplete: function() {
                                n.isMouseOverSome[e] && n.someEnter(t, e)
                            }
                        });
                        i.to(t, .5, {
                            opacity: .5,
                            ease: Power0.easeNone
                        }), this.someLeaveTLs[e] = i
                    }
                }
            }, {
                key: "onSomeEnter",
                value: function(t) {
                    var e = t.currentTarget,
                        n = DOMUtils.index(e);
                    this.isMouseOverSome[n] = !0, this.someEnter(e, n)
                }
            }, {
                key: "onSomeLeave",
                value: function(t) {
                    var e = t.currentTarget,
                        n = DOMUtils.index(e);
                    this.isMouseOverSome[n] = !1, this.someLeave(e, n)
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    var e = t.clientX,
                        n = t.clientY,
                        i = window.innerWidth / 2,
                        o = window.innerHeight / 2,
                        r = (e - i) / i;
                    r *= 1 - Math.min(Math.abs(n - o), .5 * o) / (.5 * o), this.targetMenuContainerX = -50 + 20 * -r
                }
            }, {
                key: "onMenuTick",
                value: function() {
                    this.currentMenuContainerX += .05 * (this.targetMenuContainerX - this.currentMenuContainerX), TweenMax.set(this.$menuContainer, {
                        x: this.currentMenuContainerX + "%"
                    })
                }
            }, {
                key: "onMenuButtonClick",
                value: function(t) {
                    t.preventDefault(), this.isMenuVisible ? (!window.APP.isMobile && this.timelines.menuCloseEnter.isActive() && this.timelines.menuCloseEnter.pause().progress(1), this.hideMenu(!1), this.currentIndex < 0 && this.showCloseButton()) : (!window.APP.isMobile && this.timelines.menuEnter.isActive() && this.timelines.menuEnter.pause().progress(1), this.showMenu(), 0 !== this.currentIndex && this.hideCloseButton()), E.default.trackInteraction("Ui", "click", "MenuButton")
                }
            }, {
                key: "onCloseButtonClick",
                value: function(t) {
                    t.preventDefault(), E.default.trackInteraction("Ui", "click", "CloseButton"), this.currentIndex < 0 ? v.default.push("/work") : v.default.push("/")
                }
            }, {
                key: "logoEnter",
                value: function() {
                    this.timelines.logoEnter.isActive() || this.timelines.logoLeave.isActive() || this.timelines.logoEnter.restart(!0, !1);
                }
            }, {
                key: "logoLeave",
                value: function() {
                    this.timelines.logoEnter.isActive() || this.timelines.logoLeave.isActive() || this.timelines.logoLeave.restart(!0, !1)
                }
            }, {
                key: "onLogoEnter",
                value: function(t) {
                    this.timelines.logoEnter.isActive() || this.timelines.logoLeave.isActive() || this.logoEnter(), this.isMouseOverLogo = !0
                }
            }, {
                key: "onLogoLeave",
                value: function(t) {
                    this.timelines.logoEnter.isActive() || this.timelines.logoLeave.isActive() || this.timelines.logoLeave.restart(!0, !1), this.isMouseOverLogo = !1
                }
            }, {
                key: "onLogoClick",
                value: function(t) {
                    t.preventDefault(), this.isMenuVisible ? (this.hideMenu(!1).then(function() {}), v.default.push("/")) : v.default.push("/")
                }
            }]), e
        }(f.default);
    _.Events = {
        OPEN_MENU: "UI.EVENTS.OPEN_MENU",
        CLOSE_MENU: "UI.EVENTS.CLOSE_MENU"
    }, e.default = new _;
    e.Events = _.Events
}, , , , , , , function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var i = n(6),
        o = n(201),
        r = n(153),
        s = n(165)("IE_PROTO"),
        a = function() {},
        u = "prototype",
        c = function() {
            var t, e = n(152)("iframe"),
                i = r.length,
                o = "<",
                s = ">";
            for (e.style.display = "none", n(155).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + s + "document.F=Object" + o + "/script" + s), t.close(), c = t.F; i--;) delete c[u][r[i]];
            return c()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a[u] = i(t), n = new a, a[u] = null, n[s] = t) : n = c(), void 0 === e ? n : o(n, e)
    }
}, function(t, e, n) {
    var i = n(203),
        o = n(153).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, o)
    }
}, function(t, e, n) {
    var i = n(203),
        o = n(153);
    t.exports = Object.keys || function(t) {
        return i(t, o)
    }
}, function(t, e, n) {
    var i = n(28);
    t.exports = function(t, e, n) {
        for (var o in e) i(t, o, e[o], n);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(8),
        o = n(16),
        r = n(15),
        s = n(12)("species");
    t.exports = function(t) {
        var e = i[t];
        r && e && !e[s] && o.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var i = n(59),
        o = Math.max,
        r = Math.min;
    t.exports = function(t, e) {
        return t = i(t), t < 0 ? o(t + e, 0) : r(t, e)
    }
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.locationsAreEqual = e.statesAreEqual = e.createLocation = e.createQuery = void 0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        },
        r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        s = n(102),
        a = i(s),
        u = n(78),
        c = (i(u), n(60)),
        l = n(117),
        f = (e.createQuery = function(t) {
            return r(Object.create(null), t)
        }, e.createLocation = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? "/" : arguments[0],
                e = arguments.length <= 1 || void 0 === arguments[1] ? l.POP : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                i = "string" == typeof t ? (0, c.parsePath)(t) : t,
                o = i.pathname || "/",
                r = i.search || "",
                s = i.hash || "",
                a = i.state;
            return {
                pathname: o,
                search: r,
                hash: s,
                state: a,
                action: e,
                key: n
            }
        }, function(t) {
            return "[object Date]" === Object.prototype.toString.call(t)
        }),
        h = e.statesAreEqual = function t(e, n) {
            if (e === n) return !0;
            var i = "undefined" == typeof e ? "undefined" : o(e),
                r = "undefined" == typeof n ? "undefined" : o(n);
            if (i !== r) return !1;
            if ("function" === i ? (0, a.default)(!1) : void 0, "object" === i) {
                if (f(e) && f(n) ? (0, a.default)(!1) : void 0, !Array.isArray(e)) {
                    var s = Object.keys(e),
                        u = Object.keys(n);
                    return s.length === u.length && s.every(function(i) {
                        return t(e[i], n[i])
                    })
                }
                return Array.isArray(n) && e.length === n.length && e.every(function(e, i) {
                    return t(e, n[i])
                })
            }
            return !1
        };
    e.locationsAreEqual = function(t, e) {
        return t.key === e.key && t.pathname === e.pathname && t.search === e.search && t.hash === e.hash && h(t.state, e.state)
    }
}, function(t, e, n) {
    "use strict";
    var i = function() {};
    t.exports = i
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(124),
        a = i(s),
        u = function() {
            function t() {
                o(this, t)
            }
            return r(t, [{
                key: "inject",
                value: function(t) {
                    var e = this;
                    return new Promise(function(n, i) {
                        if ("undefined" != typeof t.length) {
                            for (var o = [], r = 0, s = t.length; r < s; r++) o.push(e.inject(t[r]));
                            Promise.all(o).then(function() {
                                n()
                            })
                        } else if ("undefined" != typeof t) {
                            var u = t.getAttribute("src");
                            a.default.isInCache(u) || e.fetchSVG(u), a.default.add(u, function(i) {
                                e.injectSVG(t, i), n()
                            })
                        }
                    })
                }
            }, {
                key: "fetchSVG",
                value: function(t) {
                    fetch(t, {}).then(function(t) {
                        if (t.status <= 400) return t.text()
                    }).then(function(e) {
                        a.default.finish(t, e)
                    })
                }
            }, {
                key: "injectSVG",
                value: function(t, e) {
                    var n = document.createElement("div");
                    n.innerHTML = e;
                    for (var i = n.childNodes[0], o = Array.prototype.slice.call(t.attributes), r = 0, s = o.length; r < s; r++) {
                        var a = o[r];
                        "src" !== a.name && i.setAttributeNode(o[r].cloneNode(!0))
                    }
                    t.parentNode.insertBefore(i, t), t.parentNode.removeChild(t)
                }
            }]), t
        }();
    e.default = new u
}, function(t, e, n) {
    var i = n(12)("unscopables"),
        o = Array.prototype;
    void 0 == o[i] && n(27)(o, i, {}), t.exports = function(t) {
        o[i][t] = !0
    }
}, function(t, e, n) {
    var i = n(53),
        o = n(197),
        r = n(157),
        s = n(6),
        a = n(20),
        u = n(174),
        c = {},
        l = {},
        e = t.exports = function(t, e, n, f, h) {
            var p, d, v, m, g = h ? function() {
                    return t
                } : u(t),
                y = i(n, f, e ? 2 : 1),
                w = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (r(g)) {
                for (p = a(t.length); p > w; w++)
                    if (m = e ? y(s(d = t[w])[0], d[1]) : y(t[w]), m === c || m === l) return m
            } else
                for (v = g.call(t); !(d = v.next()).done;)
                    if (m = o(v, y, d.value, e), m === c || m === l) return m
        };
    e.BREAK = c, e.RETURN = l
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var i = n(16).f,
        o = n(24),
        r = n(12)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, r) && i(t, r, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var i = n(1),
        o = n(39),
        r = n(10),
        s = n(170),
        a = "[" + s + "]",
        u = "​",
        c = RegExp("^" + a + a + "*"),
        l = RegExp(a + a + "*$"),
        f = function(t, e, n) {
            var o = {},
                a = r(function() {
                    return !!s[t]() || u[t]() != u
                }),
                c = o[t] = a ? e(h) : s[t];
            n && (o[n] = c), i(i.P + i.F * a, "String", o)
        },
        h = f.trim = function(t, e) {
            return t = String(o(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(l, "")), t
        };
    t.exports = f
}, , , , , , , , , , , , , , function(t, e, n) {
    var i = n(38),
        o = n(12)("toStringTag"),
        r = "Arguments" == i(function() {
            return arguments
        }()),
        s = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        };
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), o)) ? n : r ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    var i = n(38);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e) {
    "use strict";
    e.__esModule = !0;
    e.addEventListener = function(t, e, n) {
        return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
    }, e.removeEventListener = function(t, e, n) {
        return t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n)
    }, e.supportsHistory = function() {
        var t = window.navigator.userAgent;
        return (t.indexOf("Android 2.") === -1 && t.indexOf("Android 4.0") === -1 || t.indexOf("Mobile Safari") === -1 || t.indexOf("Chrome") !== -1 || t.indexOf("Windows Phone") !== -1) && (window.history && "pushState" in window.history)
    }, e.supportsGoWithoutReloadUsingHash = function() {
        return window.navigator.userAgent.indexOf("Firefox") === -1
    }, e.supportsPopstateOnHashchange = function() {
        return window.navigator.userAgent.indexOf("Trident") === -1
    }
}, function(t, e, n) {
    "use strict";
    var i = function(t, e, n, i, o, r, s, a) {
        if (!t) {
            var u;
            if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, i, o, r, s, a],
                    l = 0;
                u = new Error(e.replace(/%s/g, function() {
                    return c[l++]
                })), u.name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    };
    t.exports = i
}, function(t, e) {
    (function(e) {
        function n(t, e, n) {
            function o(e) {
                var n = v,
                    i = m;
                return v = m = void 0, O = e, y = t.apply(i, n)
            }

            function r(t) {
                return O = t, w = setTimeout(l, e), k ? o(t) : y
            }

            function u(t) {
                var n = t - M,
                    i = t - O,
                    o = e - n;
                return E ? b(o, g - i) : o
            }

            function c(t) {
                var n = t - M,
                    i = t - O;
                return void 0 === M || n >= e || n < 0 || E && i >= g
            }

            function l() {
                var t = P();
                return c(t) ? f(t) : void(w = setTimeout(l, u(t)))
            }

            function f(t) {
                return w = void 0, T && v ? o(t) : (v = m = void 0, y)
            }

            function h() {
                void 0 !== w && clearTimeout(w), O = 0, v = M = m = w = void 0
            }

            function p() {
                return void 0 === w ? y : f(P())
            }

            function d() {
                var t = P(),
                    n = c(t);
                if (v = arguments, m = this, M = t, n) {
                    if (void 0 === w) return r(M);
                    if (E) return w = setTimeout(l, e), o(M)
                }
                return void 0 === w && (w = setTimeout(l, e)), y
            }
            var v, m, g, y, w, M, O = 0,
                k = !1,
                E = !1,
                T = !0;
            if ("function" != typeof t) throw new TypeError(a);
            return e = s(e) || 0, i(n) && (k = !!n.leading, E = "maxWait" in n, g = E ? x(s(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), d.cancel = h, d.flush = p, d
        }

        function i(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function o(t) {
            return !!t && "object" == typeof t
        }

        function r(t) {
            return "symbol" == typeof t || o(t) && w.call(t) == c
        }

        function s(t) {
            if ("number" == typeof t) return t;
            if (r(t)) return u;
            if (i(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = i(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(l, "");
            var n = h.test(t);
            return n || p.test(t) ? d(t.slice(2), n ? 2 : 8) : f.test(t) ? u : +t
        }
        var a = "Expected a function",
            u = NaN,
            c = "[object Symbol]",
            l = /^\s+|\s+$/g,
            f = /^[-+]0x[0-9a-f]+$/i,
            h = /^0b[01]+$/i,
            p = /^0o[0-7]+$/i,
            d = parseInt,
            v = "object" == typeof e && e && e.Object === Object && e,
            m = "object" == typeof self && self && self.Object === Object && self,
            g = v || m || Function("return this")(),
            y = Object.prototype,
            w = y.toString,
            x = Math.max,
            b = Math.min,
            P = function() {
                return g.Date.now()
            };
        t.exports = n
    }).call(e, function() {
        return this
    }())
}, , function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Events = void 0;
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(19),
        a = i(s),
        u = function() {
            function t() {
                o(this, t), this.lastTick = 0, this.tick()
            }
            return r(t, [{
                key: "tick",
                value: function() {
                    window.requestAnimationFrame(this.tick.bind(this)), a.default.dispatchEvent(t.Events.TICK, +new Date - this.lastTick, !1), this.lastTick = +new Date
                }
            }]), t
        }();
    u.Events = {
        TICK: "GlobalRAF.TICK"
    }, e.default = new u;
    e.Events = u.Events
}, function(t, e, n) {
    var i = n(30),
        o = n(20),
        r = n(75);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, u = i(e),
                c = o(u.length),
                l = r(s, c);
            if (t && n != n) {
                for (; c > l;)
                    if (a = u[l++], a != a) return !0
            } else
                for (; c > l; l++)
                    if ((t || l in u) && u[l] === n) return t || l || 0; return !t && -1
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(8),
        o = n(1),
        r = n(28),
        s = n(73),
        a = n(57),
        u = n(81),
        c = n(68),
        l = n(11),
        f = n(10),
        h = n(112),
        p = n(83),
        d = n(156);
    t.exports = function(t, e, n, v, m, g) {
        var y = i[t],
            w = y,
            x = m ? "set" : "add",
            b = w && w.prototype,
            P = {},
            M = function(t) {
                var e = b[t];
                r(b, t, "delete" == t ? function(t) {
                    return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof w && (g || b.forEach && !f(function() {
                (new w).entries().next()
            }))) {
            var O = new w,
                k = O[x](g ? {} : -0, 1) != O,
                E = f(function() {
                    O.has(1)
                }),
                T = h(function(t) {
                    new w(t)
                }),
                _ = !g && f(function() {
                    for (var t = new w, e = 5; e--;) t[x](e, e);
                    return !t.has(-0)
                });
            T || (w = e(function(e, n) {
                c(e, w, t);
                var i = d(new y, e, w);
                return void 0 != n && u(n, m, i[x], i), i
            }), w.prototype = b, b.constructor = w), (E || _) && (M("delete"), M("has"), m && M("get")), (_ || k) && M(x), g && b.clear && delete b.clear
        } else w = v.getConstructor(e, t, m, x), s(w.prototype, n), a.NEED = !0;
        return p(w, t), P[t] = w, o(o.G + o.W + o.F * (w != y), P), g || v.setStrong(w, t, m), w
    }
}, function(t, e, n) {
    "use strict";
    var i = n(27),
        o = n(28),
        r = n(10),
        s = n(39),
        a = n(12);
    t.exports = function(t, e, n) {
        var u = a(t),
            c = n(s, u, "" [t]),
            l = c[0],
            f = c[1];
        r(function() {
            var e = {};
            return e[u] = function() {
                return 7
            }, 7 != "" [t](e)
        }) && (o(String.prototype, t, l), i(RegExp.prototype, u, 2 == e ? function(t, e) {
            return f.call(t, this, e)
        } : function(t) {
            return f.call(t, this)
        }))
    }
}, function(t, e, n) {
    "use strict";
    var i = n(6);
    t.exports = function() {
        var t = i(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
            case 0:
                return i ? t() : t.call(n);
            case 1:
                return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var i = n(11),
        o = n(38),
        r = n(12)("match");
    t.exports = function(t) {
        var e;
        return i(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == o(t))
    }
}, function(t, e, n) {
    var i = n(12)("iterator"),
        o = !1;
    try {
        var r = [7][i]();
        r.return = function() {
            o = !0
        }, Array.from(r, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
            var r = [7],
                s = r[i]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }, r[i] = function() {
                return s
            }, t(r)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    t.exports = n(69) || !n(10)(function() {
        var t = Math.random();
        __defineSetter__.call(null, t, function() {}), delete n(8)[t]
    })
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var i = n(8),
        o = "__core-js_shared__",
        r = i[o] || (i[o] = {});
    t.exports = function(t) {
        return r[t] || (r[t] = {})
    }
}, function(t, e, n) {
    for (var i, o = n(8), r = n(27), s = n(76), a = s("typed_array"), u = s("view"), c = !(!o.ArrayBuffer || !o.DataView), l = c, f = 0, h = 9, p = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < h;)(i = o[p[f++]]) ? (r(i.prototype, a, !0), r(i.prototype, u, !0)) : l = !1;
    t.exports = {
        ABV: c,
        CONSTR: l,
        TYPED: a,
        VIEW: u
    }
}, function(t, e) {
    "use strict";
    e.__esModule = !0;
    e.PUSH = "PUSH", e.REPLACE = "REPLACE", e.POP = "POP"
}, function(t, e) {
    "use strict";
    e.__esModule = !0;
    e.canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement)
}, , , , , , function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = function() {
            function t() {
                n(this, t), this._cache = {}
            }
            return i(t, [{
                key: "add",
                value: function(t, e) {
                    var n = "function" == typeof e ? e : function() {};
                    return this.isInCache(t) && this.isLoaded(t) ? void n(this._cache[t].data) : void(this.isInCache(t) && !this.isLoaded(t) ? this._cache[t].callbacks.push(n) : this._cache[t] = {
                        callbacks: [n],
                        isLoaded: !1
                    })
                }
            }, {
                key: "finish",
                value: function(t, e) {
                    if (this.isInCache(t) && !this.isLoaded(t)) {
                        var n = this._cache[t];
                        n.data = e, n.isLoaded = !0, this._execCallbacks(t)
                    }
                }
            }, {
                key: "isInCache",
                value: function(t) {
                    return !!this._cache[t]
                }
            }, {
                key: "isLoaded",
                value: function(t) {
                    return this.isInCache(t) && !!this._cache[t].isLoaded
                }
            }, {
                key: "getData",
                value: function(t) {
                    return this._cache[t].data
                }
            }, {
                key: "_execCallbacks",
                value: function(t) {
                    var e = this._cache[t];
                    if (e && e.isLoaded)
                        for (var n = 0, i = e.callbacks.length; n < i; n++) e.callbacks.shift()(e.data), n--, i--
                }
            }]), t
        }();
    e.default = new o
}, function(t, e, n) {
    (function(t) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Events = void 0;
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            u = n(458),
            c = (i(u), n(46)),
            l = i(c),
            f = n(19),
            h = i(f),
            p = n(42),
            d = (i(p), n(35)),
            v = i(d),
            m = n(61),
            g = n(126),
            y = n(254),
            w = n(32),
            x = i(w),
            b = n(252),
            P = i(b),
            M = n(253),
            O = i(M),
            k = {
                DARK: {
                    MAIN: {
                        primary: new t.Color(0),
                        secondary: new t.Color(6710886)
                    }
                },
                LIGHT: {
                    MAIN: {
                        primary: new t.Color(16777215),
                        secondary: new t.Color(10066329)
                    }
                }
            },
            E = function(e) {
                function n() {
                    o(this, n);
                    var e = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, DOMUtils.q("section.background")));
                    return e.isDark = DOMUtils.hasClass(document.body, "dark-mode"), e.isActive = !1, e.isTempActive = !1, e.targetCameraX = 0, e.mousePosition = new t.Vector2, (0, x.default)(e), e.preload().then(function() {
                        e.setup(), e.onResize()
                    }), e
                }
                return s(n, e), a(n, [{
                    key: "preload",
                    value: function() {
                        return new Promise(function(t, e) {
                            v.default.loadAll([]).then(function() {
                                t()
                            })
                        })
                    }
                }, {
                    key: "setup",
                    value: function() {
                        var e = new t.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1e4);
                        e.position.set(0, 0, 100), e.lookAt(new t.Vector3);
                        var n = new t.Scene,
                            i = new t.WebGLRenderer({
                                antialias: !1,
                                alpha: !0,
                                premultipliedAlpha: !0,
                                transparent: !0,
                                precision: "highp"
                            });
                        i.setClearColor(0, 1), this.$node.appendChild(i.domElement), this.camera = e, this.scene = n, this.renderer = i, this.setupScene(), this.setupListeners()
                    }
                }, {
                    key: "setupScene",
                    value: function() {
                        var e = 60 * Math.PI / 180,
                            n = 2 * Math.tan(e / 2) * 150,
                            i = 1.5 * n * (window.innerWidth / window.innerHeight),
                            o = this.isDark ? k.DARK.MAIN.primary : k.LIGHT.MAIN.primary,
                            r = this.isDark ? k.DARK.MAIN.secondary : k.LIGHT.MAIN.secondary;
                        this.fullWidth = i, this.fullHeight = n, this.screenWidth = n * (window.innerWidth / window.innerHeight), this.simulator = new P.default(this.renderer, 2 * i, 2 * n);
                        var s = new t.PlaneBufferGeometry(i, n, 2.5, 1),
                            a = new t.ShaderMaterial({
                                wireframe: !1,
                                vertexShader: y.Vertex,
                                fragmentShader: y.Fragment,
                                shading: t.SmoothShading,
                                uniforms: {
                                    uDisplacement: {
                                        type: "t",
                                        value: this.simulator.texture
                                    },
                                    uTime: {
                                        type: "f",
                                        value: 0
                                    },
                                    uDisplacementScale: {
                                        type: "f",
                                        value: 0
                                    },
                                    uPrimaryColor: {
                                        type: "c",
                                        value: o.clone()
                                    },
                                    uSecondaryColor: {
                                        type: "c",
                                        value: r.clone()
                                    },
                                    uDrawBorders: {
                                        type: "vec4",
                                        value: new t.Vector4(0, 0, 1, 1)
                                    }
                                }
                            });
                        a.extensions.derivatives = !0;
                        var u = new t.Mesh(s, a);
                        this.mesh = u, this.scene.add(u)
                    }
                }, {
                    key: "setupCallbacks",
                    value: function() {
                        this.onResize = _debounce(this.onResize, 100)
                    }
                }, {
                    key: "setupListeners",
                    value: function() {
                        DOMUtils.on(window, "resize", this.onResize), DOMUtils.on(window, "mousemove", this.onMouseMove), h.default.addEventListener(p.Events.UPDATE, this.onRouterUpdate), h.default.addEventListener(m.Events.OPEN_MENU, this.onOpenMenu), h.default.addEventListener(m.Events.CLOSE_MENU, this.onCloseMenu), h.default.addEventListener(g.Events.ACTIVE, this.onLandscapeOverlayActive), h.default.addEventListener(g.Events.NOT_ACTIVE, this.onLandscapeOverlayNotActive), h.default.addEventListener(n.Events.WAVEFADE_SHOW, this.onWaveFadeShow), h.default.addEventListener(n.Events.WAVEFADE_HIDE, this.onWaveFadeHide)
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this;
                        return new Promise(function(e, n) {
                            var i = new TimelineMax({
                                onStart: function() {
                                    t.render()
                                },
                                onComplete: function() {
                                    e()
                                }
                            });
                            i.set(t.$node, {
                                autoAlpha: 1
                            }), i.to(t.mesh.material.uniforms.uDisplacementScale, 1, {
                                value: 1,
                                ease: Power0.easeNone
                            })
                        })
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var t = this;
                        return new Promise(function(e, n) {
                            var i = new TimelineMax({
                                onComplete: function() {
                                    DOMUtils.off(window, "mousemove", t.onMouseMove), e()
                                }
                            });
                            i.to(t.mesh.material.uniforms.uDrawBorders.value, .5, {
                                x: .5,
                                z: .5,
                                ease: Power0.easeNone
                            }), i.set(t.$node, {
                                autoAlpha: 0
                            })
                        })
                    }
                }, {
                    key: "enterMenuMode",
                    value: function() {
                        this.menuMode = !0
                    }
                }, {
                    key: "leaveMenuMode",
                    value: function() {
                        this.menuMode = !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        (this.isActive || this.isTempActive) && requestAnimationFrame(this.render.bind(this)), window.APP.isMobile || this.isLandscapeOverlayActive || (this.simulator.render(), this.currentWF && (this.currentWF.render(), this.currentWF.position.x = this.camera.position.x), this.mesh.material.uniforms.uTime.value += .001, this.camera.position.x += .05 * (this.targetCameraX - this.camera.position.x), this.renderer.render(this.scene, this.camera))
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.currentWF && this.currentWF.onResize()
                    }
                }, {
                    key: "onRouterUpdate",
                    value: function(t) {
                        var e = this,
                            n = t.page;
                        this.currentPage = n, this.isActive || "" === n || h.default.addEventListener(c.Events.CURR_OUT, this.onSectionCurrOut), this.isActive && "" === n && this.hide().then(function() {
                            e.isActive = !1, h.default.dispatchEvent(c.Events.CURR_OUT)
                        })
                    }
                }, {
                    key: "onSectionCurrOut",
                    value: function() {
                        h.default.removeEventListener(c.Events.CURR_OUT, this.onSectionCurrOut), this.isActive = !0, this.show()
                    }
                }, {
                    key: "onMouseMove",
                    value: function(t) {
                        var e = t.clientX,
                            n = t.clientY;
                        if (this.menuMode) {
                            var i = window.innerWidth / 2,
                                o = window.innerHeight / 2,
                                r = (e - i) / i;
                            r *= 1 - Math.min(Math.abs(n - o), .5 * o) / (.5 * o), this.targetCameraX = (this.fullWidth - this.screenWidth) / 6 * r
                        }
                    }
                }, {
                    key: "onOpenMenu",
                    value: function() {
                        var t = this;
                        this.isActive ? (this.enterMenuMode(), "undefined" != typeof this.currentWF && (console.log(this.currentWF), this.currentWF.fastHide())) : (this.isTempActive = !0, this.show().then(function() {
                            t.enterMenuMode()
                        }))
                    }
                }, {
                    key: "onCloseMenu",
                    value: function(t) {
                        var e = this,
                            n = t.wasLink,
                            i = t.page;
                        TweenMax.to(this.camera, .3, {
                            x: 0
                        }), this.isActive || n && "" !== i ? (this.leaveMenuMode(), console.log("leave only"), "undefined" == typeof this.currentWF || n && "about" !== this.currentPage || (console.log("fast show"), this.currentWF.fastShow())) : (console.log("leave and hide"), this.leaveMenuMode(), this.hide().then(function() {
                            e.isTempActive = !1
                        }))
                    }
                }, {
                    key: "onWaveFadeShow",
                    value: function(t) {
                        var e = new O.default(t.$image, t.factor);
                        e.position.z = 5, e.position.x = this.camera.position.x, "undefined" != typeof this.currentWF ? this.upcomingWF = e : (this.scene.add(e), e.fadeIn().then(function() {
                            h.default.dispatchEvent(n.Events.WAVEFADE_SHOW_DONE)
                        }), this.currentWF = e)
                    }
                }, {
                    key: "onWaveFadeHide",
                    value: function(t) {
                        var e = this;
                        this.currentWF.fadeOut().then(function() {
                            e.scene.remove(e.currentWF), e.currentWF = void 0, h.default.dispatchEvent(n.Events.WAVEFADE_HIDE_DONE), "undefined" != typeof e.upcomingWF && (e.scene.add(e.upcomingWF), e.upcomingWF.fadeIn().then(function() {
                                h.default.dispatchEvent(n.Events.WAVEFADE_SHOW_DONE)
                            }), e.currentWF = e.upcomingWF, e.upcomingWF = void 0)
                        })
                    }
                }, {
                    key: "onLandscapeOverlayActive",
                    value: function() {
                        this.isLandscapeOverlayActive = !0
                    }
                }, {
                    key: "onLandscapeOverlayNotActive",
                    value: function() {
                        this.isLandscapeOverlayActive = !1
                    }
                }]), n
            }(l.default);
        E.Events = {
            WAVEFADE_SHOW: "Background.Events.WAVEFADE_SHOW",
            WAVEFADE_HIDE: "Background.Events.WAVEFADE_HIDE",
            WAVEFADE_SHOW_DONE: "Background.Events.WAVEFADE_SHOW_DONE",
            WAVEFADE_HIDE_DONE: "Background.Events.WAVEFADE_HIDE_DONE"
        }, e.default = new E;
        e.Events = E.Events
    }).call(e, n(18))
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Events = void 0;
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(460),
        c = (i(u), n(46)),
        l = i(c),
        f = n(35),
        h = i(f),
        p = n(19),
        d = i(p),
        v = n(42),
        m = (i(v), n(103)),
        g = (i(m), n(32)),
        y = i(g),
        w = n(79),
        x = i(w),
        b = n(47),
        P = i(b),
        M = function(t) {
            function e() {
                o(this, e);
                var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.landscape-overlay")));
                return t.isFirstRouterUpdate = !0, (0, y.default)(t), t.preload().then(t.setup.bind(t)), t.onResize(), t
            }
            return s(e, t), a(e, [{
                key: "preload",
                value: function() {
                    return new Promise(function(t, e) {
                        h.default.loadAll([{
                            url: "assets/images/Mic.png",
                            type: f.Types.IMAGE
                        }, {
                            url: "assets/images/Raph.png",
                            type: f.Types.IMAGE
                        }, {
                            url: "assets/images/logo-turn.svg",
                            type: f.Types.SVG
                        }]).then(function() {
                            t()
                        })
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    this.setupSVGs(), this.setupListeners(), this.setupDOMNodes(), this.setupTimelines()
                }
            }, {
                key: "setupSVGs",
                value: function() {
                    return x.default.inject(DOMUtils.q(".svg", this.$node))
                }
            }, {
                key: "setupListeners",
                value: function() {
                    DOMUtils.on(window, "resize", this.onResize), d.default.addEventListener(v.Events.UPDATE, this.onRouterUpdate)
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$michael = DOMUtils.q("img.left", this.$node), this.$raphael = DOMUtils.q("img.right", this.$node), this.$logoContainer = DOMUtils.q(".logo-container", this.$node), this.$subText = DOMUtils.q(".sub-text", this.$node), this.$icon = DOMUtils.q(".icon-container", this.$node)
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    this.timelines = {};
                    var t = this.timelines.show = new TimelineMax({
                        paused: !0,
                        immediateRender: !0
                    });
                    t.set(this.$node, {
                        autoAlpha: 1
                    }, "start").fromTo(this.$michael, .3, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    }, "start").fromTo(this.$raphael, .3, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    }, "start").from(this.$logoContainer, .75, {
                        width: 0,
                        ease: Expo.easeInOut
                    }, "start+=.5").fromTo(this.$subText, .5, {
                        autoAlpha: 0,
                        y: "+=20px"
                    }, {
                        autoAlpha: 1,
                        y: "-=20px",
                        ease: Power2.easeOut
                    }, "start+=1.5").fromTo(this.$icon, .5, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    }, "start+=2");
                    var e = this.timelines.hide = new TimelineMax({
                        paused: !0,
                        immediateRender: !1
                    });
                    e.to(this.$node, .1, {
                        autoAlpha: 0
                    }, "start")
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return d.default.dispatchEvent(e.Events.ACTIVE), this.timelines.hide.kill(), new Promise(function(e, n) {
                        t.timelines.show.eventCallback("onComplete", e), t.timelines.show.restart(!0, !1), P.default.trackInteraction("LandscapeScreen", "show")
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return d.default.dispatchEvent(e.Events.NOT_ACTIVE), this.timelines.show.kill(), new Promise(function(e, n) {
                        t.timelines.hide.eventCallback("onComplete", e), t.timelines.hide.restart(!0, !1), P.default.trackInteraction("LandscapeScreen", "hide")
                    })
                }
            }, {
                key: "onResize",
                value: function() {
                    window.innerWidth > window.innerHeight && window.APP.isMobile ? this.isActive || (this.isActive = !0, this.isFirstRouterUpdate || this.show()) : this.isActive && (this.isActive = !1, this.isFirstRouterUpdate || this.hide())
                }
            }, {
                key: "onRouterUpdate",
                value: function() {
                    this.isFirstRouterUpdate && (this.isFirstRouterUpdate = !1, this.isActive && this.show())
                }
            }]), e
        }(l.default);
    M.Events = {
        ACTIVE: "LANDSCAPE.EVENTS.ACTIVE",
        NOT_ACTIVE: "LANDSCAPE.EVENTS.NOT_ACTIVE"
    }, e.default = new M;
    e.Events = M.Events
}, , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var i = n(21),
        o = n(75),
        r = n(20);
    t.exports = function(t) {
        for (var e = i(this), n = r(e.length), s = arguments.length, a = o(s > 1 ? arguments[1] : void 0, n), u = s > 2 ? arguments[2] : void 0, c = void 0 === u ? n : o(u, n); c > a;) e[a++] = t;
        return e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(16),
        o = n(58);
    t.exports = function(t, e, n) {
        e in t ? i.f(t, e, o(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    var i = n(11),
        o = n(8).document,
        r = i(o) && i(o.createElement);
    t.exports = function(t) {
        return r ? o.createElement(t) : {}
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var i = n(12)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[i] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    t.exports = n(8).document && document.documentElement
}, function(t, e, n) {
    var i = n(11),
        o = n(164).set;
    t.exports = function(t, e, n) {
        var r, s = e.constructor;
        return s !== n && "function" == typeof s && (r = s.prototype) !== n.prototype && i(r) && o && o(t, r), t
    }
}, function(t, e, n) {
    var i = n(82),
        o = n(12)("iterator"),
        r = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || r[o] === t)
    }
}, function(t, e, n) {
    var i = n(38);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(70),
        o = n(58),
        r = n(83),
        s = {};
    n(27)(s, n(12)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(s, {
            next: o(1, n)
        }), r(t, e + " Iterator")
    }
}, function(t, e, n) {
    "use strict";
    var i = n(69),
        o = n(1),
        r = n(28),
        s = n(27),
        a = n(24),
        u = n(82),
        c = n(159),
        l = n(83),
        f = n(34),
        h = n(12)("iterator"),
        p = !([].keys && "next" in [].keys()),
        d = "@@iterator",
        v = "keys",
        m = "values",
        g = function() {
            return this
        };
    t.exports = function(t, e, n, y, w, x, b) {
        c(n, e, y);
        var P, M, O, k = function(t) {
                if (!p && t in A) return A[t];
                switch (t) {
                    case v:
                        return function() {
                            return new n(this, t)
                        };
                    case m:
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            E = e + " Iterator",
            T = w == m,
            _ = !1,
            A = t.prototype,
            L = A[h] || A[d] || w && A[w],
            $ = L || k(w),
            C = w ? T ? k("entries") : $ : void 0,
            S = "Array" == e ? A.entries || L : L;
        if (S && (O = f(S.call(new t)), O !== Object.prototype && (l(O, E, !0), i || a(O, h) || s(O, h, g))), T && L && L.name !== m && (_ = !0, $ = function() {
                return L.call(this)
            }), i && !b || !p && !_ && A[h] || s(A, h, $), u[e] = $, u[E] = g, w)
            if (P = {
                    values: T ? $ : k(m),
                    keys: x ? $ : k(v),
                    entries: C
                }, b)
                for (M in P) M in A || r(A, M, P[M]);
            else o(o.P + o.F * (p || _), e, P);
        return P
    }
}, function(t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || n(-2e-17) != -2e-17 ? function(t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : n
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e, n) {
    var i = n(8),
        o = n(171).set,
        r = i.MutationObserver || i.WebKitMutationObserver,
        s = i.process,
        a = i.Promise,
        u = "process" == n(38)(s);
    t.exports = function() {
        var t, e, n, c = function() {
            var i, o;
            for (u && (i = s.domain) && i.exit(); t;) {
                o = t.fn, t = t.next;
                try {
                    o()
                } catch (i) {
                    throw t ? n() : e = void 0, i
                }
            }
            e = void 0, i && i.enter()
        };
        if (u) n = function() {
            s.nextTick(c)
        };
        else if (r) {
            var l = !0,
                f = document.createTextNode("");
            new r(c).observe(f, {
                characterData: !0
            }), n = function() {
                f.data = l = !l
            }
        } else if (a && a.resolve) {
            var h = a.resolve();
            n = function() {
                h.then(c)
            }
        } else n = function() {
            o.call(i, c)
        };
        return function(i) {
            var o = {
                fn: i,
                next: void 0
            };
            e && (e.next = o), t || (t = o, n()), e = o
        }
    }
}, function(t, e, n) {
    var i = n(11),
        o = n(6),
        r = function(t, e) {
            if (o(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
            try {
                i = n(53)(Function.call, n(33).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return r(t, n), e ? t.__proto__ = n : i(t, n), t
            }
        }({}, !1) : void 0),
        check: r
    }
}, function(t, e, n) {
    var i = n(115)("keys"),
        o = n(76);
    t.exports = function(t) {
        return i[t] || (i[t] = o(t))
    }
}, function(t, e, n) {
    var i = n(6),
        o = n(26),
        r = n(12)("species");
    t.exports = function(t, e) {
        var n, s = i(t).constructor;
        return void 0 === s || void 0 == (n = i(s)[r]) ? e : o(n)
    }
}, function(t, e, n) {
    var i = n(59),
        o = n(39);
    t.exports = function(t) {
        return function(e, n) {
            var r, s, a = String(o(e)),
                u = i(n),
                c = a.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (r = a.charCodeAt(u), r < 55296 || r > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : r : t ? a.slice(u, u + 2) : (r - 55296 << 10) + (s - 56320) + 65536)
        }
    }
}, function(t, e, n) {
    var i = n(111),
        o = n(39);
    t.exports = function(t, e, n) {
        if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(o(t))
    }
}, function(t, e, n) {
    "use strict";
    var i = n(59),
        o = n(39);
    t.exports = function(t) {
        var e = String(o(this)),
            n = "",
            r = i(t);
        if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
        for (; r > 0;
            (r >>>= 1) && (e += e)) 1 & r && (n += e);
        return n
    }
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    var i, o, r, s = n(53),
        a = n(110),
        u = n(155),
        c = n(152),
        l = n(8),
        f = l.process,
        h = l.setImmediate,
        p = l.clearImmediate,
        d = l.MessageChannel,
        v = 0,
        m = {},
        g = "onreadystatechange",
        y = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e()
            }
        },
        w = function(t) {
            y.call(t.data)
        };
    h && p || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return m[++v] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }, i(v), v
    }, p = function(t) {
        delete m[t]
    }, "process" == n(38)(f) ? i = function(t) {
        f.nextTick(s(y, t, 1))
    } : d ? (o = new d, r = o.port2, o.port1.onmessage = w, i = s(r.postMessage, r, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function(t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", w, !1)) : i = g in c("script") ? function(t) {
        u.appendChild(c("script"))[g] = function() {
            u.removeChild(this), y.call(t)
        }
    } : function(t) {
        setTimeout(s(y, t, 1), 0)
    }), t.exports = {
        set: h,
        clear: p
    }
}, function(t, e, n) {
    "use strict";
    var i = n(8),
        o = n(15),
        r = n(69),
        s = n(116),
        a = n(27),
        u = n(73),
        c = n(10),
        l = n(68),
        f = n(59),
        h = n(20),
        p = n(71).f,
        d = n(16).f,
        v = n(150),
        m = n(83),
        g = "ArrayBuffer",
        y = "DataView",
        w = "prototype",
        x = "Wrong length!",
        b = "Wrong index!",
        P = i[g],
        M = i[y],
        O = i.Math,
        k = i.RangeError,
        E = i.Infinity,
        T = P,
        _ = O.abs,
        A = O.pow,
        L = O.floor,
        $ = O.log,
        C = O.LN2,
        S = "buffer",
        D = "byteLength",
        I = "byteOffset",
        j = o ? "_b" : S,
        U = o ? "_l" : D,
        N = o ? "_o" : I,
        R = function(t, e, n) {
            var i, o, r, s = Array(n),
                a = 8 * n - e - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                l = 23 === e ? A(2, -24) - A(2, -77) : 0,
                f = 0,
                h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = _(t), t != t || t === E ? (o = t != t ? 1 : 0, i = u) : (i = L($(t) / C), t * (r = A(2, -i)) < 1 && (i--, r *= 2), t += i + c >= 1 ? l / r : l * A(2, 1 - c), t * r >= 2 && (i++, r /= 2), i + c >= u ? (o = 0, i = u) : i + c >= 1 ? (o = (t * r - 1) * A(2, e), i += c) : (o = t * A(2, c - 1) * A(2, e), i = 0)); e >= 8; s[f++] = 255 & o, o /= 256, e -= 8);
            for (i = i << e | o, a += e; a > 0; s[f++] = 255 & i, i /= 256, a -= 8);
            return s[--f] |= 128 * h, s
        },
        B = function(t, e, n) {
            var i, o = 8 * n - e - 1,
                r = (1 << o) - 1,
                s = r >> 1,
                a = o - 7,
                u = n - 1,
                c = t[u--],
                l = 127 & c;
            for (c >>= 7; a > 0; l = 256 * l + t[u], u--, a -= 8);
            for (i = l & (1 << -a) - 1, l >>= -a, a += e; a > 0; i = 256 * i + t[u], u--, a -= 8);
            if (0 === l) l = 1 - s;
            else {
                if (l === r) return i ? NaN : c ? -E : E;
                i += A(2, e), l -= s
            }
            return (c ? -1 : 1) * i * A(2, l - e)
        },
        F = function(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        },
        V = function(t) {
            return [255 & t]
        },
        q = function(t) {
            return [255 & t, t >> 8 & 255]
        },
        W = function(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        },
        z = function(t) {
            return R(t, 52, 8)
        },
        H = function(t) {
            return R(t, 23, 4)
        },
        G = function(t, e, n) {
            d(t[w], e, {
                get: function() {
                    return this[n]
                }
            })
        },
        Y = function(t, e, n, i) {
            var o = +n,
                r = f(o);
            if (o != r || r < 0 || r + e > t[U]) throw k(b);
            var s = t[j]._b,
                a = r + t[N],
                u = s.slice(a, a + e);
            return i ? u : u.reverse()
        },
        X = function(t, e, n, i, o, r) {
            var s = +n,
                a = f(s);
            if (s != a || a < 0 || a + e > t[U]) throw k(b);
            for (var u = t[j]._b, c = a + t[N], l = i(+o), h = 0; h < e; h++) u[c + h] = l[r ? h : e - h - 1]
        },
        K = function(t, e) {
            l(t, P, g);
            var n = +e,
                i = h(n);
            if (n != i) throw k(x);
            return i
        };
    if (s.ABV) {
        if (!c(function() {
                new P
            }) || !c(function() {
                new P(.5)
            })) {
            P = function(t) {
                return new T(K(this, t))
            };
            for (var J, Q = P[w] = T[w], Z = p(T), tt = 0; Z.length > tt;)(J = Z[tt++]) in P || a(P, J, T[J]);
            r || (Q.constructor = P)
        }
        var et = new M(new P(2)),
            nt = M[w].setInt8;
        et.setInt8(0, 2147483648), et.setInt8(1, 2147483649), !et.getInt8(0) && et.getInt8(1) || u(M[w], {
            setInt8: function(t, e) {
                nt.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                nt.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else P = function(t) {
        var e = K(this, t);
        this._b = v.call(Array(e), 0), this[U] = e
    }, M = function(t, e, n) {
        l(this, M, y), l(t, P, y);
        var i = t[U],
            o = f(e);
        if (o < 0 || o > i) throw k("Wrong offset!");
        if (n = void 0 === n ? i - o : h(n), o + n > i) throw k(x);
        this[j] = t, this[N] = o, this[U] = n
    }, o && (G(P, D, "_l"), G(M, S, "_b"), G(M, D, "_l"), G(M, I, "_o")), u(M[w], {
        getInt8: function(t) {
            return Y(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return Y(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = Y(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = Y(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return F(Y(this, 4, t, arguments[1]))
        },
        getUint32: function(t) {
            return F(Y(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function(t) {
            return B(Y(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function(t) {
            return B(Y(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function(t, e) {
            X(this, 1, t, V, e)
        },
        setUint8: function(t, e) {
            X(this, 1, t, V, e)
        },
        setInt16: function(t, e) {
            X(this, 2, t, q, e, arguments[2])
        },
        setUint16: function(t, e) {
            X(this, 2, t, q, e, arguments[2])
        },
        setInt32: function(t, e) {
            X(this, 4, t, W, e, arguments[2])
        },
        setUint32: function(t, e) {
            X(this, 4, t, W, e, arguments[2])
        },
        setFloat32: function(t, e) {
            X(this, 4, t, H, e, arguments[2])
        },
        setFloat64: function(t, e) {
            X(this, 8, t, z, e, arguments[2])
        }
    });
    m(P, g), m(M, y), a(M[w], s.VIEW, !0), e[g] = P, e[y] = M
}, function(t, e, n) {
    var i = n(8),
        o = n(52),
        r = n(69),
        s = n(210),
        a = n(16).f;
    t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = r ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {
            value: s.f(t)
        })
    }
}, function(t, e, n) {
    var i = n(98),
        o = n(12)("iterator"),
        r = n(82);
    t.exports = n(52).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || r[i(t)]
    }
}, function(t, e, n) {
    "use strict";
    var i = n(80),
        o = n(198),
        r = n(82),
        s = n(30);
    t.exports = n(160)(Array, "Array", function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries")
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.go = e.replaceLocation = e.pushLocation = e.startListener = e.getUserConfirmation = e.getCurrentLocation = void 0;
    var i = n(77),
        o = n(101),
        r = n(215),
        s = n(60),
        a = n(118),
        u = "popstate",
        c = "hashchange",
        l = a.canUseDOM && !(0, o.supportsPopstateOnHashchange)(),
        f = function(t) {
            var e = t && t.key;
            return (0, i.createLocation)({
                pathname: window.location.pathname,
                search: window.location.search,
                hash: window.location.hash,
                state: e ? (0, r.readState)(e) : void 0
            }, void 0, e)
        },
        h = e.getCurrentLocation = function() {
            var t = void 0;
            try {
                t = window.history.state || {}
            } catch (e) {
                t = {}
            }
            return f(t)
        },
        p = (e.getUserConfirmation = function(t, e) {
            return e(window.confirm(t))
        }, e.startListener = function(t) {
            var e = function(e) {
                void 0 !== e.state && t(f(e.state))
            };
            (0, o.addEventListener)(window, u, e);
            var n = function() {
                return t(h())
            };
            return l && (0, o.addEventListener)(window, c, n),
                function() {
                    (0, o.removeEventListener)(window, u, e), l && (0, o.removeEventListener)(window, c, n)
                }
        }, function(t, e) {
            var n = t.state,
                i = t.key;
            void 0 !== n && (0, r.saveState)(i, n), e({
                key: i
            }, (0, s.createPath)(t))
        });
    e.pushLocation = function(t) {
        return p(t, function(t, e) {
            return window.history.pushState(t, null, e)
        })
    }, e.replaceLocation = function(t) {
        return p(t, function(t, e) {
            return window.history.replaceState(t, null, e)
        })
    }, e.go = function(t) {
        t && window.history.go(t)
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(588),
        r = n(60),
        s = n(178),
        a = i(s),
        u = n(117),
        c = n(77),
        l = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = t.getCurrentLocation,
                n = t.getUserConfirmation,
                i = t.pushLocation,
                s = t.replaceLocation,
                l = t.go,
                f = t.keyLength,
                h = void 0,
                p = void 0,
                d = [],
                v = [],
                m = [],
                g = function() {
                    return p && p.action === u.POP ? m.indexOf(p.key) : h ? m.indexOf(h.key) : -1
                },
                y = function(t) {
                    var e = g();
                    h = t, h.action === u.PUSH ? m = [].concat(m.slice(0, e + 1), [h.key]) : h.action === u.REPLACE && (m[e] = h.key), v.forEach(function(t) {
                        return t(h)
                    })
                },
                w = function(t) {
                    return d.push(t),
                        function() {
                            return d = d.filter(function(e) {
                                return e !== t
                            })
                        }
                },
                x = function(t) {
                    return v.push(t),
                        function() {
                            return v = v.filter(function(e) {
                                return e !== t
                            })
                        }
                },
                b = function(t, e) {
                    (0, o.loopAsync)(d.length, function(e, n, i) {
                        (0, a.default)(d[e], t, function(t) {
                            return null != t ? i(t) : n()
                        })
                    }, function(t) {
                        n && "string" == typeof t ? n(t, function(t) {
                            return e(t !== !1)
                        }) : e(t !== !1)
                    })
                },
                P = function(t) {
                    h && (0, c.locationsAreEqual)(h, t) || p && (0, c.locationsAreEqual)(p, t) || (p = t, b(t, function(e) {
                        if (p === t)
                            if (p = null, e) {
                                if (t.action === u.PUSH) {
                                    var n = (0, r.createPath)(h),
                                        o = (0, r.createPath)(t);
                                    o === n && (0, c.statesAreEqual)(h.state, t.state) && (t.action = u.REPLACE)
                                }
                                t.action === u.POP ? y(t) : t.action === u.PUSH ? i(t) !== !1 && y(t) : t.action === u.REPLACE && s(t) !== !1 && y(t)
                            } else if (h && t.action === u.POP) {
                            var a = m.indexOf(h.key),
                                f = m.indexOf(t.key);
                            a !== -1 && f !== -1 && l(a - f)
                        }
                    }))
                },
                M = function(t) {
                    return P(A(t, u.PUSH))
                },
                O = function(t) {
                    return P(A(t, u.REPLACE))
                },
                k = function() {
                    return l(-1)
                },
                E = function() {
                    return l(1)
                },
                T = function() {
                    return Math.random().toString(36).substr(2, f || 6)
                },
                _ = function(t) {
                    return (0, r.createPath)(t)
                },
                A = function(t, e) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? T() : arguments[2];
                    return (0, c.createLocation)(t, e, n)
                };
            return {
                getCurrentLocation: e,
                listenBefore: w,
                listen: x,
                transitionTo: P,
                push: M,
                replace: O,
                go: l,
                goBack: k,
                goForward: E,
                createKey: T,
                createPath: r.createPath,
                createHref: _,
                createLocation: A
            }
        };
    e.default = l
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(78),
        r = (i(o), function(t, e, n) {
            var i = t(e, n);
            t.length < 2 && n(i)
        });
    e.default = r
}, , , , function(t, e, n) {
    "use strict";

    function i(t) {
        u(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = o({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1
        }, t), this.options.limitInertia && (this._lethargy = new s), this._emitter = new r, this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null
    }
    var o = n(218),
        r = n(605),
        s = n(597).Lethargy,
        a = n(607),
        u = (n(606), n(273)),
        c = "virtualscroll";
    t.exports = i;
    var l = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    i.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(c, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        })
    }, i.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || this._lethargy.check(t) !== !1) {
            var n = this._event;
            n.deltaX = t.wheelDeltaX || t.deltaX * -1, n.deltaY = t.wheelDeltaY || t.deltaY * -1, a.isFirefox && 1 == t.deltaMode && (n.deltaX *= e.firefoxMultiplier, n.deltaY *= e.firefoxMultiplier), n.deltaX *= e.mouseMultiplier, n.deltaY *= e.mouseMultiplier, this._notify(t)
        }
    }, i.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || this._lethargy.check(t) !== !1) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
        }
    }, i.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY
    }, i.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var n = this._event,
            i = t.targetTouches ? t.targetTouches[0] : t;
        n.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier, n.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = i.pageX, this.touchStartY = i.pageY, this._notify(t)
    }, i.prototype._onKeyDown = function(t) {
        var e = this._event;
        switch (e.deltaX = e.deltaY = 0, t.keyCode) {
            case l.LEFT:
            case l.UP:
                e.deltaY = this.options.keyStep;
                break;
            case l.RIGHT:
            case l.DOWN:
                e.deltaY = -this.options.keyStep;
                break;
            default:
                return
        }
        this._notify(t)
    }, i.prototype._bind = function() {
        a.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel), a.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel), a.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart), this.el.addEventListener("touchmove", this._onTouchMove)), a.hasPointer && a.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && document.addEventListener("keydown", this._onKeyDown)
    }, i.prototype._unbind = function() {
        a.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), a.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), a.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), a.hasPointer && a.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && document.removeEventListener("keydown", this._onKeyDown)
    }, i.prototype.on = function(t, e) {
        this._emitter.on(c, t, e);
        var n = this._emitter.e;
        n && n[c] && 1 === n[c].length && this._bind()
    }, i.prototype.off = function(t, e) {
        this._emitter.off(c, t, e);
        var n = this._emitter.e;
        (!n[c] || n[c].length <= 0) && this._unbind()
    }, i.prototype.reset = function() {
        var t = this._event;
        t.x = 0, t.y = 0
    }, i.prototype.destroy = function() {
        this._emitter.off(), this._unbind()
    }
}, , , , function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PERLIN3 = '\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n'
}, function(t, e, n) {
    var i = n(38);
    t.exports = function(t, e) {
        if ("number" != typeof t && "Number" != i(t)) throw TypeError(e);
        return +t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(21),
        o = n(75),
        r = n(20);
    t.exports = [].copyWithin || function(t, e) {
        var n = i(this),
            s = r(n.length),
            a = o(t, s),
            u = o(e, s),
            c = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === c ? s : o(c, s)) - u, s - a),
            f = 1;
        for (u < a && a < u + l && (f = -1, u += l - 1, a += l - 1); l-- > 0;) u in n ? n[a] = n[u] : delete n[a], a += f, u += f;
        return n
    }
}, function(t, e, n) {
    var i = n(81);
    t.exports = function(t, e) {
        var n = [];
        return i(t, !1, n.push, n, e), n
    }
}, function(t, e, n) {
    var i = n(26),
        o = n(21),
        r = n(99),
        s = n(20);
    t.exports = function(t, e, n, a, u) {
        i(e);
        var c = o(t),
            l = r(c),
            f = s(c.length),
            h = u ? f - 1 : 0,
            p = u ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (h in l) {
                    a = l[h], h += p;
                    break
                }
                if (h += p, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? h >= 0 : f > h; h += p) h in l && (a = e(a, l[h], h, c));
        return a
    }
}, function(t, e, n) {
    "use strict";
    var i = n(26),
        o = n(11),
        r = n(110),
        s = [].slice,
        a = {},
        u = function(t, e, n) {
            if (!(e in a)) {
                for (var i = [], o = 0; o < e; o++) i[o] = "a[" + o + "]";
                a[e] = Function("F,a", "return new F(" + i.join(",") + ")")
            }
            return a[e](t, n)
        };
    t.exports = Function.bind || function(t) {
        var e = i(this),
            n = s.call(arguments, 1),
            a = function() {
                var i = n.concat(s.call(arguments));
                return this instanceof a ? u(e, i.length, i) : r(e, i, t)
            };
        return o(e.prototype) && (a.prototype = e.prototype), a
    }
}, function(t, e, n) {
    "use strict";
    var i = n(16).f,
        o = n(70),
        r = n(73),
        s = n(53),
        a = n(68),
        u = n(39),
        c = n(81),
        l = n(160),
        f = n(198),
        h = n(74),
        p = n(15),
        d = n(57).fastKey,
        v = p ? "_s" : "size",
        m = function(t, e) {
            var n, i = d(e);
            if ("F" !== i) return t._i[i];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, l) {
            var f = t(function(t, i) {
                a(t, f, e, "_i"), t._i = o(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != i && c(i, n, t[l], t)
            });
            return r(f.prototype, {
                clear: function() {
                    for (var t = this, e = t._i, n = t._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
                    t._f = t._l = void 0, t[v] = 0
                },
                delete: function(t) {
                    var e = this,
                        n = m(e, t);
                    if (n) {
                        var i = n.n,
                            o = n.p;
                        delete e._i[n.i], n.r = !0, o && (o.n = i), i && (i.p = o), e._f == n && (e._f = i), e._l == n && (e._l = o), e[v]--
                    }
                    return !!n
                },
                forEach: function(t) {
                    a(this, f, "forEach");
                    for (var e, n = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
                        for (n(e.v, e.k, this); e && e.r;) e = e.p
                },
                has: function(t) {
                    return !!m(this, t)
                }
            }), p && i(f.prototype, "size", {
                get: function() {
                    return u(this[v])
                }
            }), f
        },
        def: function(t, e, n) {
            var i, o, r = m(t, e);
            return r ? r.v = n : (t._l = r = {
                i: o = d(e, !0),
                k: e,
                v: n,
                p: i = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = r), i && (i.n = r), t[v]++, "F" !== o && (t._i[o] = r)), t
        },
        getEntry: m,
        setStrong: function(t, e, n) {
            l(t, e, function(t, e) {
                this._t = t, this._k = e, this._l = void 0
            }, function() {
                for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? f(0, n.k) : "values" == e ? f(0, n.v) : f(0, [n.k, n.v]) : (t._t = void 0, f(1))
            }, n ? "entries" : "values", !n, !0), h(e)
        }
    }
}, function(t, e, n) {
    var i = n(98),
        o = n(189);
    t.exports = function(t) {
        return function() {
            if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return o(this)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(73),
        o = n(57).getWeak,
        r = n(6),
        s = n(11),
        a = n(68),
        u = n(81),
        c = n(43),
        l = n(24),
        f = c(5),
        h = c(6),
        p = 0,
        d = function(t) {
            return t._l || (t._l = new v)
        },
        v = function() {
            this.a = []
        },
        m = function(t, e) {
            return f(t.a, function(t) {
                return t[0] === e
            })
        };
    v.prototype = {
        get: function(t) {
            var e = m(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!m(this, t)
        },
        set: function(t, e) {
            var n = m(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = h(this.a, function(e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, r) {
            var c = t(function(t, i) {
                a(t, c, e, "_i"), t._i = p++, t._l = void 0, void 0 != i && u(i, n, t[r], t)
            });
            return i(c.prototype, {
                delete: function(t) {
                    if (!s(t)) return !1;
                    var e = o(t);
                    return e === !0 ? d(this).delete(t) : e && l(e, this._i) && delete e[this._i]
                },
                has: function(t) {
                    if (!s(t)) return !1;
                    var e = o(t);
                    return e === !0 ? d(this).has(t) : e && l(e, this._i)
                }
            }), c
        },
        def: function(t, e, n) {
            var i = o(r(e), !0);
            return i === !0 ? d(t).set(e, n) : i[t._i] = n, t
        },
        ufstore: d
    }
}, function(t, e, n) {
    t.exports = !n(15) && !n(10)(function() {
        return 7 != Object.defineProperty(n(152)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var i = n(11),
        o = Math.floor;
    t.exports = function(t) {
        return !i(t) && isFinite(t) && o(t) === t
    }
}, function(t, e, n) {
    var i = n(6);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var r = t.return;
            throw void 0 !== r && i(r.call(t)), e
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e) {
    t.exports = Math.log1p || function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(72),
        o = n(114),
        r = n(100),
        s = n(21),
        a = n(99),
        u = Object.assign;
    t.exports = !u || n(10)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach(function(t) {
            e[t] = t
        }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = s(t), u = arguments.length, c = 1, l = o.f, f = r.f; u > c;)
            for (var h, p = a(arguments[c++]), d = l ? i(p).concat(l(p)) : i(p), v = d.length, m = 0; v > m;) f.call(p, h = d[m++]) && (n[h] = p[h]);
        return n
    } : u
}, function(t, e, n) {
    var i = n(16),
        o = n(6),
        r = n(72);
    t.exports = n(15) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, s = r(e), a = s.length, u = 0; a > u;) i.f(t, n = s[u++], e[n]);
        return t
    }
}, function(t, e, n) {
    var i = n(30),
        o = n(71).f,
        r = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        a = function(t) {
            try {
                return o(t)
            } catch (t) {
                return s.slice()
            }
        };
    t.exports.f = function(t) {
        return s && "[object Window]" == r.call(t) ? a(t) : o(i(t))
    }
}, function(t, e, n) {
    var i = n(24),
        o = n(30),
        r = n(106)(!1),
        s = n(165)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = o(t),
            u = 0,
            c = [];
        for (n in a) n != s && i(a, n) && c.push(n);
        for (; e.length > u;) i(a, n = e[u++]) && (~r(c, n) || c.push(n));
        return c
    }
}, function(t, e, n) {
    var i = n(72),
        o = n(30),
        r = n(100).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, s = o(e), a = i(s), u = a.length, c = 0, l = []; u > c;) r.call(s, n = a[c++]) && l.push(t ? [n, s[n]] : s[n]);
            return l
        }
    }
}, function(t, e, n) {
    var i = n(71),
        o = n(114),
        r = n(6),
        s = n(8).Reflect;
    t.exports = s && s.ownKeys || function(t) {
        var e = i.f(r(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var i = n(8).parseFloat,
        o = n(84).trim;
    t.exports = 1 / i(n(170) + "-0") !== -(1 / 0) ? function(t) {
        var e = o(String(t), 3),
            n = i(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : i
}, function(t, e, n) {
    var i = n(8).parseInt,
        o = n(84).trim,
        r = n(170),
        s = /^[\-+]?0[xX]/;
    t.exports = 8 !== i(r + "08") || 22 !== i(r + "0x16") ? function(t, e) {
        var n = o(String(t), 3);
        return i(n, e >>> 0 || (s.test(n) ? 16 : 10))
    } : i
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    var i = n(20),
        o = n(169),
        r = n(39);
    t.exports = function(t, e, n, s) {
        var a = String(r(t)),
            u = a.length,
            c = void 0 === n ? " " : String(n),
            l = i(e);
        if (l <= u || "" == c) return a;
        var f = l - u,
            h = o.call(c, Math.ceil(f / c.length));
        return h.length > f && (h = h.slice(0, f)), s ? h + a : a + h
    }
}, function(t, e, n) {
    e.f = n(12)
}, function(t, e, n) {
    "use strict";
    var i = n(192);
    t.exports = n(107)("Map", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var e = i.getEntry(this, t);
            return e && e.v
        },
        set: function(t, e) {
            return i.def(this, 0 === t ? 0 : t, e)
        }
    }, i, !0)
}, function(t, e, n) {
    n(15) && "g" != /./g.flags && n(16).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(109)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(192);
    t.exports = n(107)("Set", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return i.def(this, t = 0 === t ? 0 : t, t)
        }
    }, i)
}, function(t, e, n) {
    "use strict";
    var i, o = n(43)(0),
        r = n(28),
        s = n(57),
        a = n(200),
        u = n(194),
        c = n(11),
        l = s.getWeak,
        f = Object.isExtensible,
        h = u.ufstore,
        p = {},
        d = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        v = {
            get: function(t) {
                if (c(t)) {
                    var e = l(t);
                    return e === !0 ? h(this).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return u.def(this, t, e)
            }
        },
        m = t.exports = n(107)("WeakMap", d, v, u, !0, !0);
    7 != (new m).set((Object.freeze || Object)(p), 7).get(p) && (i = u.getConstructor(d), a(i.prototype, v), s.NEED = !0, o(["delete", "has", "get", "set"], function(t) {
        var e = m.prototype,
            n = e[t];
        r(e, t, function(e, o) {
            if (c(e) && !f(e)) {
                this._f || (this._f = new i);
                var r = this._f[t](e, o);
                return "set" == t ? this : r
            }
            return n.call(this, e, o)
        })
    }))
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.readState = e.saveState = void 0;
    var o = n(78),
        r = (i(o), {
            QuotaExceededError: !0,
            QUOTA_EXCEEDED_ERR: !0
        }),
        s = {
            SecurityError: !0
        },
        a = "@@History/",
        u = function(t) {
            return a + t
        };
    e.saveState = function(t, e) {
        if (window.sessionStorage) try {
            null == e ? window.sessionStorage.removeItem(u(t)) : window.sessionStorage.setItem(u(t), JSON.stringify(e))
        } catch (t) {
            if (s[t.name]) return;
            if (r[t.name] && 0 === window.sessionStorage.length) return;
            throw t
        }
    }, e.readState = function(t) {
        var e = void 0;
        try {
            e = window.sessionStorage.getItem(u(t))
        } catch (t) {
            if (s[t.name]) return
        }
        if (e) try {
            return JSON.parse(e)
        } catch (t) {}
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        s = n(102),
        a = o(s),
        u = n(118),
        c = n(176),
        l = i(c),
        f = n(590),
        h = i(f),
        p = n(101),
        d = n(177),
        v = o(d),
        m = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            u.canUseDOM ? void 0 : (0, a.default)(!1);
            var e = t.forceRefresh || !(0, p.supportsHistory)(),
                n = e ? h : l,
                i = n.getUserConfirmation,
                o = n.getCurrentLocation,
                s = n.pushLocation,
                c = n.replaceLocation,
                f = n.go,
                d = (0, v.default)(r({
                    getUserConfirmation: i
                }, t, {
                    getCurrentLocation: o,
                    pushLocation: s,
                    replaceLocation: c,
                    go: f
                })),
                m = 0,
                g = void 0,
                y = function(t, e) {
                    1 === ++m && (g = l.startListener(d.transitionTo));
                    var n = e ? d.listenBefore(t) : d.listen(t);
                    return function() {
                        n(), 0 === --m && g()
                    }
                },
                w = function(t) {
                    return y(t, !0)
                },
                x = function(t) {
                    return y(t, !1)
                };
            return r({}, d, {
                listenBefore: w,
                listen: x
            })
        };
    e.default = m
}, , function(t, e) {
    "use strict";

    function n(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }

    function i() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            var i = Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            });
            if ("0123456789" !== i.join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                o[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (t) {
            return !1
        }
    }
    var o = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable;
    t.exports = i() ? Object.assign : function(t, e) {
        for (var i, a, u = n(t), c = 1; c < arguments.length; c++) {
            i = Object(arguments[c]);
            for (var l in i) r.call(i, l) && (u[l] = i[l]);
            if (o) {
                a = o(i);
                for (var f = 0; f < a.length; f++) s.call(i, a[f]) && (u[a[f]] = i[a[f]])
            }
        }
        return u
    }
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }

    function r(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === i || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }

    function s() {
        v && p && (v = !1, p.length ? d = p.concat(d) : m = -1, d.length && a())
    }

    function a() {
        if (!v) {
            var t = o(s);
            v = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++m < e;) p && p[m].run();
                m = -1, e = d.length
            }
            p = null, v = !1, r(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var l, f, h = t.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            f = i
        }
    }();
    var p, d = [],
        v = !1,
        m = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new u(t, e)), 1 !== d.length || v || o(a)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(19),
        u = i(a),
        c = void 0,
        l = function() {
            function t() {
                o(this, t), c = window.localStorage
            }
            return s(t, [{
                key: "get",
                value: function(t) {
                    return c.getItem(t)
                }
            }, {
                key: "set",
                value: function(e, n) {
                    return "string" == typeof e ? (c.setItem(e, n), u.default.dispatchEvent(t.Events.UPDATE, {
                        key: e,
                        value: n
                    })) : "object" === ("undefined" == typeof e ? "undefined" : r(e)) && ! function() {
                        var n = {};
                        e.keys().forEach(function(t) {
                            n[t] = e[t], c.setItem(t, e[t])
                        }), u.default.dispatchEvent(t.Events.UPDATE, n)
                    }(), this
                }
            }]), t
        }();
    l.Events = {
        UPDATE: "LocalStorage.UPDATE"
    }, e.default = new l
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.MODES = {
        DARK: "dark-mode",
        LIGHT: "light-mode"
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        c = n(457),
        l = (o(c), n(182)),
        f = o(l),
        h = n(46),
        p = o(h),
        d = n(19),
        v = o(d),
        m = n(42),
        g = (o(m), n(35)),
        y = o(g),
        w = n(251),
        x = i(w),
        b = n(61),
        P = n(125),
        M = n(32),
        O = o(M),
        k = n(79),
        E = o(k),
        T = n(47),
        _ = o(T),
        A = "about",
        L = 300,
        $ = function(t) {
            function e() {
                r(this, e);
                var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.about")));
                return t.currentDelta = 0, t.currentVisiblePart = 0, (0, O.default)(t), t.preload().then(t.setup.bind(t)), t
            }
            return a(e, t), u(e, [{
                key: "preload",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        y.default.loadAll([{
                            url: "assets/images/about/Who.png",
                            type: g.Types.IMAGE
                        }, {
                            url: "assets/images/about/What.png",
                            type: g.Types.IMAGE
                        }, {
                            url: "assets/images/about/Achievements.png",
                            type: g.Types.IMAGE
                        }, {
                            url: "assets/images/about/Clients.png",
                            type: g.Types.IMAGE
                        }, {
                            url: "assets/images/Logo_minimal.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Clio_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/FWA_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Awwwards_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Disney_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/BMW_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Dove_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/DNB_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Lion_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/DHL_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Volvo_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/MCD_logo.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Netcom_logo.svg",
                            type: g.Types.SVG
                        }]).then(function(n) {
                            if (t.$contentImages = n.slice(0, 4), t.waveShowFactor = 1, window.APP.isMobile) {
                                var i = window.innerWidth - 10;
                                t.waveShowFactor = i / t.$contentImages[0].width
                            }
                            e()
                        })
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    this.setupSVGs(), this.setupDOMNodes(), this.setupTimelines(), this.setupListeners()
                }
            }, {
                key: "setupSVGs",
                value: function() {
                    E.default.inject(DOMUtils.q(".svg", this.$node))
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$partContainers = DOMUtils.q(".part-container", this.$node), this.$partIndicators = DOMUtils.q(".part-indicator li", this.$node), this.$scrollIndicatorBar = DOMUtils.q(".scroll-indicator .bar", this.$node), this.$logoPart = DOMUtils.q(".logo-container", this.$node), this.$logoBackground = DOMUtils.q(".background", this.$logoPart), this.$logo = DOMUtils.q("svg.logo-minimal", this.$logoPart), this.$logoScrollIndicator = DOMUtils.q(".scroll-indicator", this.$logoPart), this.$logoScrollIndicatorBar = DOMUtils.q(".scroll-indicator .bar", this.$logoPart), this.$logoScrollIndicatorText = DOMUtils.q(".scroll-indicator .text", this.$logoPart), this.$whoPart = DOMUtils.q(".who-container", this.$node), this.$whoHeadline = DOMUtils.q("h2", this.$whoPart), this.$whoText = DOMUtils.q("p", this.$whoPart), this.$whatPart = DOMUtils.q(".what-container", this.$node), this.$whatHeadline = DOMUtils.q("h2", this.$whatPart), this.$whatText = DOMUtils.q("p", this.$whatPart), this.$awardsPart = DOMUtils.q(".awards-container", this.$node), this.$awardsHeadline = DOMUtils.q("h2", this.$awardsPart), this.$awardsText = DOMUtils.q("p", this.$awardsPart), this.$awardsList = DOMUtils.q(".award-list", this.$awardsPart), this.$awardsElements = DOMUtils.q("li", this.$awardsPart), this.$clientPart = DOMUtils.q(".client-container", this.$node), this.$clientHeadline = DOMUtils.q("h2", this.$clientPart), this.$clientText = DOMUtils.q("p", this.$clientPart), this.$clientRow = DOMUtils.q(".client-list tr", this.$clientPart), this.$clientElements = DOMUtils.q(".client-list td", this.$clientPart)
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    var t = this.timelines.show = new TimelineMax({
                        paused: !0,
                        immediateRender: !0
                    });
                    t.set(this.$node, {
                        autoAlpha: 1
                    }, "start").staggerFromTo(this.$partIndicators, .5, {
                        autoAlpha: 1,
                        y: "+=100px"
                    }, {
                        autoAlpha: 1,
                        y: "-=100px",
                        ease: Power3.easeOut
                    }, .1, "start");
                    var e = this.timelines.hide = new TimelineMax({
                        paused: !0,
                        immediateRender: !1
                    });
                    e.to(this.$node, .2, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    });
                    var n = this.timelines.partScrollIndicator = new TimelineMax({
                        paused: !0,
                        immediateRender: !0,
                        repeat: -1
                    });
                    n.to(this.$scrollIndicatorBar, .7, {
                        height: "100%",
                        ease: Expo.easeIn
                    }, "start").to(this.$scrollIndicatorBar, .7, {
                        height: "0%",
                        top: "100%",
                        ease: Expo.easeOut
                    }, "start+=.7"), window.APP.isMobile ? x.setupMobileTimelines(this) : x.setupDesktopTimelines(this)
                }
            }, {
                key: "setupListeners",
                value: function() {
                    v.default.addEventListener(m.Events.UPDATE, this.onRouterUpdate), v.default.addEventListener(b.Events.OPEN_MENU, this.onOpenMenu), v.default.addEventListener(b.Events.CLOSE_MENU, this.onCloseMenu), this.virtualScroll = new f.default({
                        limitInertia: !1,
                        mouseMultiplier: 1,
                        touchMultiplier: 5,
                        firefoxMultiplier: 30,
                        preventTouch: !0
                    })
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return this.timelines.hide.kill(), new Promise(function(e, n) {
                        t.showCurrentPart(), t.timelines.show.eventCallback("onComplete", function() {
                            e()
                        }), t.timelines.show.restart(!0, !1), t.virtualScroll.on(t.onScroll)
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return this.timelines.show.kill(), new Promise(function(e, n) {
                        t.timelines.hide.eventCallback("onComplete", function() {
                            e()
                        }), t.timelines.hide.restart(!0, !1), t.hideCurrentPart(), t.virtualScroll.off(t.onScroll), t.currentVisiblePart = 0
                    })
                }
            }, {
                key: "showCurrentPart",
                value: function() {
                    var t = this,
                        e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new Promise(function(n, i) {
                        (!window.APP.isMobile && !t.showPartTimelines[t.currentVisiblePart].isActive() || window.APP.isMobile && !t.showNextPartTimelines[t.currentVisiblePart].isActive() && !t.showPrevPartTimelines[t.currentVisiblePart].isActive()) && (t.currentVisiblePart > 0 && !window.APP.isMobile ? ! function() {
                            var e = function t() {
                                v.default.removeEventListener(P.Events.WAVEFADE_SHOW_DONE, t), n()
                            };
                            v.default.addEventListener(P.Events.WAVEFADE_SHOW_DONE, e), t.showPartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {})
                        }() : window.APP.isMobile ? e ? t.showNextPartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {
                            n()
                        }) : t.showPrevPartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {
                            n()
                        }) : t.showPartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {
                            n()
                        }), window.APP.isMobile ? e ? t.showNextPartTimelines[t.currentVisiblePart].restart(!0, !1) : t.showPrevPartTimelines[t.currentVisiblePart].restart(!0, !1) : t.showPartTimelines[t.currentVisiblePart].restart(!0, !1), t.highlightCurrrentPartIndicator(), _.default.trackInteraction("About", "show", t.currentVisiblePart))
                    })
                }
            }, {
                key: "hideCurrentPart",
                value: function() {
                    var t = this,
                        e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return new Promise(function(n, i) {
                        (!window.APP.isMobile && !t.hidePartTimelines[t.currentVisiblePart].isActive() || window.APP.isMobile && !t.hideNextPartTimelines[t.currentVisiblePart].isActive() && !t.hidePrevPartTimelines[t.currentVisiblePart].isActive()) && (t.currentVisiblePart > 0 && !window.APP.isMobile ? ! function() {
                            var e = function t() {
                                v.default.removeEventListener(P.Events.WAVEFADE_HIDE_DONE, t), n()
                            };
                            v.default.addEventListener(P.Events.WAVEFADE_HIDE_DONE, e), t.hidePartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {})
                        }() : window.APP.isMobile ? e ? t.hideNextPartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {
                            n()
                        }) : t.hidePrevPartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {
                            n()
                        }) : t.hidePartTimelines[t.currentVisiblePart].eventCallback("onComplete", function() {
                            n()
                        }), window.APP.isMobile ? e ? t.hideNextPartTimelines[t.currentVisiblePart].restart(!0, !1) : t.hidePrevPartTimelines[t.currentVisiblePart].restart(!0, !1) : t.hidePartTimelines[t.currentVisiblePart].restart(!0, !1), t.unhighlightCurrentPartIndicator())
                    })
                }
            }, {
                key: "unhighlightCurrentPartIndicator",
                value: function() {
                    TweenMax.to(this.$partIndicators[this.currentVisiblePart], .3, {
                        opacity: .2,
                        ease: Power2.easeOut
                    })
                }
            }, {
                key: "highlightCurrrentPartIndicator",
                value: function() {
                    var t = this,
                        e = Array.prototype.slice.call(this.$partIndicators).filter(function(e, n) {
                            return t.currentVisiblePart != n
                        });
                    TweenMax.to(e, .3, {
                        opacity: .2,
                        ease: Power2.easeOut,
                        delay: .4
                    }), TweenMax.to(this.$partIndicators[this.currentVisiblePart], .3, {
                        opacity: 1,
                        ease: Power2.easeOut,
                        delay: .4
                    })
                }
            }, {
                key: "showNextPart",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        t.currentVisiblePart < t.$partContainers.length - 1 ? t.hideCurrentPart(!0).then(function() {
                            t.currentVisiblePart++, t.showCurrentPart(!0).then(function() {
                                e()
                            })
                        }) : e()
                    })
                }
            }, {
                key: "showPrevPart",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        t.currentVisiblePart > 0 ? t.hideCurrentPart(!1).then(function() {
                            t.currentVisiblePart--, t.showCurrentPart(!1).then(function() {
                                e()
                            })
                        }) : e()
                    })
                }
            }, {
                key: "onRouterUpdate",
                value: function(t) {
                    var e = this,
                        n = t.page;
                    this.isActive || n !== A || (console.log("WAIT FOR OUT -> ABOUT"), v.default.addEventListener(h.Events.CURR_OUT, this.onSectionCurrOut)), this.isActive && n !== A && this.hide().then(function() {
                        e.isActive = !1, v.default.dispatchEvent(h.Events.CURR_OUT)
                    })
                }
            }, {
                key: "onSectionCurrOut",
                value: function() {
                    v.default.removeEventListener(h.Events.CURR_OUT, this.onSectionCurrOut), this.isActive = !0, this.show()
                }
            }, {
                key: "onScroll",
                value: function(t) {
                    var e = this;
                    this.ignoreScroll || (this.currentDelta += t.deltaY, Math.abs(this.currentDelta) > L && (this.ignoreScroll = !0, this.currentDelta > 0 ? this.showPrevPart().then(function() {
                        e.ignoreScroll = !1
                    }) : this.showNextPart().then(function() {
                        e.ignoreScroll = !1
                    }), this.currentDelta = 0))
                }
            }, {
                key: "onOpenMenu",
                value: function() {
                    this.isActive && TweenMax.to(this.$node, .2, {
                        autoAlpha: 0
                    })
                }
            }, {
                key: "onCloseMenu",
                value: function(t) {
                    var e = t.wasLink,
                        n = t.page;
                    !e && this.isActive || this.isActive && e && n === A ? TweenMax.to(this.$node, .2, {
                        autoAlpha: 1
                    }) : this.isActive && e && n !== A && (this.isActive = !1, this.timelines.hide.progress(1, !1))
                }
            }]), e
        }(p.default);
    e.default = new $
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setupDesktopTimelines = e.setupMobileTimelines = void 0;
    var o = n(19),
        r = i(o),
        s = n(125);
    e.setupMobileTimelines = function(t) {
        t.showNextPartTimelines = [], t.showPrevPartTimelines = [];
        var e = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            delay: .3
        });
        e.set(t.$logoPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$logoBackground, .5, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power2.easeOut
        }, "start").fromTo(t.$logo, .5, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power2.easeOut
        }, "start+=.3").from(t.$logoScrollIndicator, .5, {
            height: 0,
            bottom: 235,
            ease: Expo.easeInOut,
            onComplete: function() {
                t.timelines.partScrollIndicator.restart(!0, !1)
            }
        }, "start+=.6").fromTo(t.$logoScrollIndicatorText, .3, {
            autoAlpha: 0,
            y: "+=20px"
        }, {
            autoAlpha: 1,
            y: "-=20px",
            ease: Expo.easeOut
        }, "start+=1.5"), t.showNextPartTimelines.push(e), t.showPrevPartTimelines.push(e);
        var n = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        n.set(t.$whoPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$whoHeadline, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: 1,
            y: "-=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$whoText, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: .5,
            y: "-=15",
            ease: Power2.easeOut
        }, "start+=.2");
        var i = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        i.set(t.$whoPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$whoHeadline, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: 1,
            y: "+=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$whoText, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: .5,
            y: "+=15",
            ease: Power2.easeOut
        }, "start+=.2"), t.showNextPartTimelines.push(n), t.showPrevPartTimelines.push(i);
        var o = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        o.set(t.$whatPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$whatHeadline, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: 1,
            y: "-=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$whatText, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: .5,
            y: "-=15",
            ease: Power2.easeOut
        }, "start+=.2");
        var r = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        r.set(t.$whatPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$whatHeadline, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: 1,
            y: "+=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$whatText, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: .5,
            y: "+=15",
            ease: Power2.easeOut
        }, "start+=.2"), t.showNextPartTimelines.push(o), t.showPrevPartTimelines.push(r);
        var s = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        s.set(t.$awardsPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$awardsHeadline, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: 1,
            y: "-=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$awardsText, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: .5,
            y: "-=15",
            ease: Power2.easeOut
        }, "start+=.2").fromTo(t.$awardsList, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: 1,
            y: "-=15",
            ease: Power2.easeOut
        }, "start+=.4");
        var a = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        a.set(t.$awardsPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$awardsHeadline, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: 1,
            y: "+=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$awardsText, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: .5,
            y: "+=15",
            ease: Power2.easeOut
        }, "start+=.2").fromTo(t.$awardsList, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: 1,
            y: "+=15",
            ease: Power2.easeOut
        }, "start+=.4"), t.showNextPartTimelines.push(s), t.showPrevPartTimelines.push(a);
        var u = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        u.set(t.$clientPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$clientHeadline, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: 1,
            y: "-=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$clientText, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: .5,
            y: "-=15",
            ease: Power2.easeOut
        }, "start+=.2").staggerFromTo(t.$clientRow, .3, {
            autoAlpha: 0,
            y: "+=15"
        }, {
            autoAlpha: 1,
            y: "-=15",
            ease: Power2.easeOut
        }, .1, "start+=.4");
        var c = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        c.set(t.$clientPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$clientHeadline, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: 1,
            y: "+=15",
            ease: Power2.easeOut
        }, "start").fromTo(t.$clientText, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: .5,
            y: "+=15",
            ease: Power2.easeOut
        }, "start+=.2").staggerFromTo(t.$clientRow, .3, {
            autoAlpha: 0,
            y: "-=15"
        }, {
            autoAlpha: 1,
            y: "+=15",
            ease: Power2.easeOut
        }, .1, "start+=.4"), t.showNextPartTimelines.push(u), t.showPrevPartTimelines.push(c), t.hideNextPartTimelines = [], t.hidePrevPartTimelines = [];
        var l = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        l.to(t.$logoScrollIndicator, .5, {
            height: 0,
            ease: Expo.easeInOut,
            onComplete: function() {
                t.timelines.partScrollIndicator.kill()
            }
        }, "start").to(t.$logoScrollIndicatorText, .4, {
            autoAlpha: 0,
            y: "+=20px",
            ease: Expo.easeIn
        }, "start").to(t.$logo, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").to(t.$logoBackground, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").set(t.$logoPart, {
            autoAlpha: 0
        }, "start+=1.1"), t.hideNextPartTimelines.push(l), t.hidePrevPartTimelines.push(l);
        var f = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        f.to(t.$whoHeadline, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").to(t.$whoText, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").set(t.$whoPart, {
            autoAlpha: 0
        }, "start+=.3").set([t.$whoHeadline, t.$whoText], {
            autoAlpha: 1
        }, "start+=.3"), t.hideNextPartTimelines.push(f), t.hidePrevPartTimelines.push(f);
        var h = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        h.to(t.$whatHeadline, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").to(t.$whatText, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").set(t.$whatPart, {
            autoAlpha: 0
        }, "start+=.3").set([t.$whatHeadline, t.$whatText], {
            autoAlpha: 1
        }, "start+=.3"), t.hideNextPartTimelines.push(h), t.hidePrevPartTimelines.push(h);
        var p = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        p.to(t.$awardsHeadline, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").to(t.$awardsText, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").to(t.$awardsElements, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").set(t.$awardsPart, {
            autoAlpha: 0
        }, "start+=.3").set([t.$awardsHeadline, t.$awardsText], {
            autoAlpha: 1
        }, "start+=.3").set(t.$awardsElements, {
            autoAlpha: .5
        }, "start+=.3"), t.hideNextPartTimelines.push(p), t.hidePrevPartTimelines.push(p);
        var d = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        d.to(t.$clientHeadline, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").to(t.$clientText, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").to(t.$clientElements, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start").set(t.$clientPart, {
            autoAlpha: 0
        }, "start+=.3").set([t.$clientHeadline, t.$clientText], {
            autoAlpha: 1
        }, "start+=.3").set(t.$clientElements, {
            autoAlpha: .5
        }, "start+=.3"), t.hideNextPartTimelines.push(d), t.hidePrevPartTimelines.push(d)
    }, e.setupDesktopTimelines = function(t) {
        t.showPartTimelines = [];
        var e = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        e.set(t.$logoPart, {
            autoAlpha: 1
        }, "start").fromTo(t.$logoBackground, .5, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power2.easeOut
        }, "start").fromTo(t.$logo, .5, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power2.easeOut
        }, "start+=.3").from(t.$logoScrollIndicator, .5, {
            height: 0,
            bottom: 235,
            ease: Expo.easeInOut,
            onComplete: function() {
                t.timelines.partScrollIndicator.restart(!0, !1)
            }
        }, "start+=.6").fromTo(t.$logoScrollIndicatorText, .3, {
            autoAlpha: 0,
            y: "+=20px"
        }, {
            autoAlpha: 1,
            y: "-=20px",
            ease: Expo.easeOut
        }, "start+=1.5"), t.showPartTimelines.push(e);
        var n = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_SHOW, {
                    $image: t.$contentImages[0],
                    factor: t.waveShowFactor
                })
            }
        });
        n.to(t.$whoPart, .3, {
            autoAlpha: 1
        }, "start"), t.showPartTimelines.push(n);
        var i = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_SHOW, {
                    $image: t.$contentImages[1],
                    factor: t.waveShowFactor
                })
            }
        });
        i.to(t.$whatPart, .3, {
            autoAlpha: 1
        }, "start"), t.showPartTimelines.push(i);
        var o = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_SHOW, {
                    $image: t.$contentImages[2],
                    factor: t.waveShowFactor
                })
            }
        });
        o.to(t.$awardsPart, .3, {
            autoAlpha: 1
        }, "start"), t.showPartTimelines.push(o);
        var a = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_SHOW, {
                    $image: t.$contentImages[3],
                    factor: t.waveShowFactor
                })
            }
        });
        a.to(t.$clientPart, .3, {
            autoAlpha: 1
        }, "start"), t.showPartTimelines.push(a), t.hidePartTimelines = [];
        var u = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        u.to(t.$logoScrollIndicator, .5, {
            height: 0,
            ease: Expo.easeInOut,
            onComplete: function() {
                t.timelines.partScrollIndicator.kill()
            }
        }, "start").to(t.$logoScrollIndicatorText, .4, {
            autoAlpha: 0,
            y: "+=20px",
            ease: Expo.easeIn
        }, "start").to(t.$logo, .5, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start+=.3").to(t.$logoBackground, .5, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start+=.6").set(t.$logoPart, {
            autoAlpha: 0
        }, "start+=1.1"), t.hidePartTimelines.push(u);
        var c = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_HIDE, {
                    $image: t.$contentImages[0]
                })
            }
        });
        c.to(t.$whoPart, .3, {
            autoAlpha: 0
        }, "start"), t.hidePartTimelines.push(c);
        var l = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_HIDE, {
                    $image: t.$contentImages[1]
                })
            }
        });
        l.to(t.$whatPart, .3, {
            autoAlpha: 0
        }, "start"), t.hidePartTimelines.push(l);
        var f = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_HIDE, {
                    $image: t.$contentImages[2]
                })
            }
        });
        f.to(t.$awardsPart, .3, {
            autoAlpha: 0
        }, "start"), t.hidePartTimelines.push(f);
        var h = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                r.default.dispatchEvent(s.Events.WAVEFADE_HIDE, {
                    $image: t.$contentImages[3]
                })
            }
        });
        h.to(t.$clientPart, .3, {
            autoAlpha: 0
        }, "start"), t.hidePartTimelines.push(h)
    }
}, function(t, e, n) {
    (function(t) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            a = n(255),
            u = function(e) {
                function n(e, r, s) {
                    i(this, n);
                    var a = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r, s, {
                        depthBuffer: !1,
                        stencilBuffer: !1,
                        format: t.RGBAFormat,
                        wrapS: t.ClampToEdgeWrapping,
                        wrapT: t.ClampToEdgeWrapping
                    }));
                    return a.width = r, a.height = s, a.renderer = e, a.setup(), a
                }
                return r(n, e), s(n, [{
                    key: "setup",
                    value: function() {
                        this.mesh = new t.Mesh(new t.PlaneBufferGeometry(1, 1), new t.ShaderMaterial({
                            uniforms: {
                                uTime: {
                                    type: "f",
                                    value: 0
                                }
                            },
                            vertexShader: a.Vertex,
                            fragmentShader: a.Fragment
                        })), this.mesh.scale.set(this.width, this.height, 1), this.scene = new t.Scene, this.scene.add(this.mesh), this.camera = new t.OrthographicCamera(this.width / -2, this.width / 2, this.height / 2, this.height / -2, -1e4, 1e4), this.camera.position.z = 1
                    }
                }, {
                    key: "resize",
                    value: function(e, n) {
                        this.width = e, this.height = n, this.mesh.setScale(e, n, 1), this.camera = new t.OrthographicCamera(this.width / -2, this.width / 2, this.height / 2, this.height / -2, -1e4, 1e4), this.setSize(e, n)
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.mesh.material.uniforms.uTime.value += .002
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.update(), this.renderer.render(this.scene, this.camera, this)
                    }
                }]), n
            }(t.WebGLRenderTarget);
        e.default = u
    }).call(e, n(18))
}, function(t, e, n) {
    (function(t) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            a = n(256),
            u = new t.Color(16777215),
            c = new t.Color(0),
            l = function(e) {
                function n(t, e) {
                    i(this, n);
                    var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                    return r.timeSpeed = .02, r.$image = t, r._factor = e, r.setup(), r
                }
                return r(n, e), s(n, [{
                    key: "setup",
                    value: function() {
                        this.texture = new t.Texture(this.$image), this.texture.magFilter = t.LinearFilter, this.texture.minFilter = t.LinearFilter, this.texture.needsUpdate = !0, this.geo = new t.PlaneBufferGeometry(this.$image.width, this.$image.height, 100, 100), this.material = new t.ShaderMaterial({
                            vertexShader: a.Vertex,
                            fragmentShader: a.Fragment,
                            uniforms: {
                                uTime: {
                                    type: "f",
                                    value: Math.random()
                                },
                                uResolution: {
                                    type: "v2",
                                    value: new t.Vector2(this.$image.width, this.$image.height)
                                },
                                uBlurAmount: {
                                    type: "f",
                                    value: 2
                                },
                                uWaveScale: {
                                    type: "f",
                                    value: 200
                                },
                                uOpacity: {
                                    type: "f",
                                    value: 0
                                },
                                uTexture: {
                                    type: "t",
                                    value: this.texture
                                },
                                uColor: {
                                    type: "c",
                                    value: DOMUtils.hasClass(document.body, "dark-mode") ? u : c
                                }
                            },
                            transparent: !0
                        }), this.mesh = new t.Mesh(this.geo, this.material), this.onResize(), this.add(this.mesh)
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        var t = 60 * Math.PI / 180,
                            e = 2 * Math.tan(t / 2) * 95,
                            n = e * (window.innerWidth / window.innerHeight),
                            i = this.$image.width / window.innerWidth * n,
                            o = this.$image.height / window.innerHeight * e,
                            r = i / this.$image.width * this._factor;
                        this.mesh.scale.set(r, r, r), console.log({
                            vHeight: e,
                            vWidth: n,
                            meshWidth: i,
                            meshHeight: o,
                            scale: r
                        })
                    }
                }, {
                    key: "fastShow",
                    value: function() {
                        var t = this;
                        return new Promise(function(e, n) {
                            var i = new TimelineMax({
                                onComplete: function() {
                                    e()
                                }
                            });
                            i.to(t.material.uniforms.uOpacity, .3, {
                                value: 1,
                                ease: Power0.easeNone
                            }, "start")
                        })
                    }
                }, {
                    key: "fastHide",
                    value: function() {
                        var t = this;
                        return new Promise(function(e, n) {
                            var i = new TimelineMax({
                                onComplete: function() {
                                    e()
                                }
                            });
                            i.to(t.material.uniforms.uOpacity, .3, {
                                value: 0,
                                ease: Power0.easeNone
                            }, "start")
                        })
                    }
                }, {
                    key: "fadeIn",
                    value: function() {
                        var t = this;
                        return console.log("WAVEFADE: fade in"), new Promise(function(e, n) {
                            var i = new TimelineMax({
                                onComplete: function() {
                                    console.log("WAVEFADE: fade in done"), e()
                                }
                            });
                            i.to(t.material.uniforms.uOpacity, 2, {
                                value: 1,
                                ease: Power0.easeNone
                            }, "start").to(t.material.uniforms.uWaveScale, 2, {
                                value: 0,
                                ease: Power0.easeNone
                            }, "start").to(t.material.uniforms.uBlurAmount, 1.5, {
                                value: 0,
                                ease: Power0.easeNone
                            }, "start").to(t, 2, {
                                timeSpeed: 0,
                                ease: Power0.easeNone
                            }, "start")
                        })
                    }
                }, {
                    key: "fadeOut",
                    value: function() {
                        var t = this;
                        return console.log("fade out"), new Promise(function(e, n) {
                            var i = new TimelineMax({
                                onComplete: function() {
                                    console.log("fade out done"), e()
                                }
                            });
                            i.to(t.material.uniforms.uOpacity, 1, {
                                value: 0,
                                ease: Power0.easeNone
                            }, "start").to(t.material.uniforms.uWaveScale, 1, {
                                value: 200,
                                ease: Power0.easeNone
                            }, "start").to(t.material.uniforms.uBlurAmount, 1, {
                                value: 2,
                                ease: Power0.easeNone
                            }, "start").to(t, 1, {
                                timeSpeed: .02,
                                ease: Power0.easeNone
                            }, "start")
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.material.uniforms.uTime.value += this.timeSpeed
                    }
                }]), n
            }(t.Object3D);
        e.default = l
    }).call(e, n(18))
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Vertex = "\nfloat rand(vec2 co){\n\treturn fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nuniform sampler2D uDisplacement;\nuniform float uDisplacementScale;\nuniform vec4 uDrawBorders; // x - left, y - top, z - right, w - bottom\n\nvarying vec2 vUV;\nvarying vec3 vViewPosition;\nvarying float vDiscard;\n\nvoid main() {\n\n\t//vec4 positionInfo = (texture2D(uDisplacement, uv.xy) * uDisplacementScale);\n\t//vec4 newPos = vec4(position + normal * positionInfo.x , 1.0);\n\tvec4 newPos = vec4(position, 1.0);\n\n\tvec4 mvPosition = modelViewMatrix * newPos;\n    gl_Position = projectionMatrix * mvPosition;\n\n/*\n\tif (uv.x < uDrawBorders.x || uv.y < uDrawBorders.y || uv.x > uDrawBorders.z || uv.y > uDrawBorders.w) {\n\t\tvDiscard = 1.0;\n\t}\n*/\n\n\tvUV = uv;\n\tvViewPosition = -mvPosition.xyz;\n}\n", e.Fragment = "\nfloat getLightDiffuse(vec4 pos, vec3 viewPosition, vec3 normal, float maxDistance) {\n\tvec4 lightPos = viewMatrix * pos;\n\tvec3 lVector = lightPos.xyz + viewPosition.xyz;\n\tvec3 lightVec = normalize(lVector);\n\tfloat lightDistance = 1.0 - min((length(lVector) / maxDistance), 1.0);\n\n\treturn max(dot(normal, lightVec), 0.0) * lightDistance;\n}\n\nuniform sampler2D uDisplacement;\nuniform float uDisplacementScale;\nuniform vec3 uPrimaryColor;\nuniform vec3 uSecondaryColor;\n\nuniform sampler2D uMouseSim;\n\nvarying vec2 vUV;\nvarying vec3 vViewPosition;\nvarying float vDiscard;\n\nvoid main() {\n\tif (vDiscard != 0.0) {\n\t\tdiscard;\n\t}\n\n\t//http://alteredqualia.com/three/examples/webgl_cubes_indexed.html\n\t//vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));\n\n\t//float firstDiff = getLightDiffuse(vec4(50.0, 50.0, 100.0, 1.0), vViewPosition, normal, 200.0);\n\t//float secondDiff = getLightDiffuse(vec4(-50.0, -50.0, 100.0, 1.0), vViewPosition, normal, 200.0);\n\t//float thirdDiff = getLightDiffuse(vec4(0.0, 0.0, 100.0, 1.0), vViewPosition, normal, 200.0);\n\n\t//float diffuse = firstDiff + secondDiff + thirdDiff;\n\n\t//vec4 outputColor = vec4(diffuse * uPrimaryColor + (1.0 - diffuse) * uSecondaryColor, 1.0);\n\n\tvec4 mixVal = texture2D(uDisplacement, vUV) * uDisplacementScale;\n\n    //gl_FragColor = outputColor;\n\tgl_FragColor = vec4(mix(uPrimaryColor, uSecondaryColor, mixVal.x), 1.0);\n\n\t//gl_FragColor = texture2D(uMouseSim, vUV);\n}\n"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Fragment = e.Vertex = void 0;
    var i = n(186);
    e.Vertex = "\nvarying vec2 vUV;\nvoid main() {\n\tvUV = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n", e.Fragment = "\n" + i.PERLIN3 + "\n\nuniform float uTime;\n\nvarying vec2 vUV;\n\nvoid main() {\n    vec3 pos = vec3(vUV.xy, 1.0);\n\n\tfloat noise =\n\t\tpnoise(10.0 * pos + vec3(0, uTime, 0), vec3(100.0)) * 0.25\n\t\t+ pnoise(10.0 * pos + vec3(0, -uTime, 0), vec3(100.0)) * 0.25\n\t\t+ pnoise(10.0 * pos + vec3(uTime, 0, 0), vec3(100.0)) * 0.25\n\t\t+ pnoise(10.0 * pos + vec3(-uTime, 0, 0), vec3(100.0)) * 0.25\n\t\t/*\n\t\tpnoise(20.0 * pos + vec3(0, uTime, 0), vec3(100.0))\n\t\t+ pnoise(20.0 * pos + vec3(0, -uTime, 0), vec3(100.0))\n\t\t+ pnoise(10.0 * pos + vec3(0, uTime, 0), vec3(100.0))\n\t\t+ pnoise(10.0 * pos + vec3(0, -uTime, 0), vec3(100.0))\n\t\t+ pnoise(pos + vec3(0, uTime, 0), vec3(100.0))\n\t\t+ pnoise(pos + vec3(0, -uTime, 0), vec3(100.0))\n\t\t*/\n\t\t;\n\n    gl_FragColor = vec4(vec3(noise), 1.0);\n}\n"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Fragment = e.Vertex = void 0;
    var i = n(186);
    e.Vertex = "\n" + i.PERLIN3 + "\n\nuniform float uWaveScale;\nuniform float uTime;\nuniform vec2 uResolution;\nuniform float uBlurAmount;\n\nvarying vec2 vUV;\nvarying float vDisplacement;\nvarying vec2 blurTexCoords[9];\n\nvoid main() {\n\tvUV = uv;\n\n\tvec2 inc = vec2(uBlurAmount) / uResolution;\n\n\tblurTexCoords[ 0 ] = uv - inc * 4.;\n\tblurTexCoords[ 1 ] = uv - inc * 3.;\n\tblurTexCoords[ 2 ] = uv - inc * 2.;\n\tblurTexCoords[ 3 ] = uv - inc * 1.;\n\tblurTexCoords[ 4 ] = uv;\n\tblurTexCoords[ 5 ] = uv + inc * 1.;\n\tblurTexCoords[ 6 ] = uv + inc * 2.;\n\tblurTexCoords[ 7 ] = uv + inc * 3.;\n\tblurTexCoords[ 8 ] = uv + inc * 4.;\n\n\tfloat displacement = pnoise(0.01 * position + vec3(0, uTime, 0), vec3(100.0)) * uWaveScale\n\t\t+ pnoise(0.01 * position + vec3(0, -uTime, 0), vec3(100.0)) * uWaveScale;\n\n\tvDisplacement = displacement;\n\n\tvec3 newPosition = position + normal * displacement;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n}\n", e.Fragment = "\nfloat normpdf(in float x, in float sigma) {\n\treturn 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;\n}\n\n\nuniform sampler2D uTexture;\nuniform vec3 uColor;\nuniform float uOpacity;\n\nvarying vec2 vUV;\nvarying float vDisplacement;\nvarying vec2 blurTexCoords[9];\n\nvoid main() {\n\tvec4 textureColor = texture2D(uTexture, vUV.xy);\n\n\t//vec4 outputColor = vec4(uColor, textureColor.a * uOpacity);\n\n\tvec4 outputColor = vec4(0.0);\n\n\toutputColor += texture2D(uTexture, blurTexCoords[0] ) * 0.051;\n\toutputColor += texture2D(uTexture, blurTexCoords[1] ) * 0.0918;\n\toutputColor += texture2D(uTexture, blurTexCoords[2] ) * 0.12245;\n\toutputColor += texture2D(uTexture, blurTexCoords[3] ) * 0.1531;\n\toutputColor += texture2D(uTexture, blurTexCoords[4] ) * 0.1633;\n\toutputColor += texture2D(uTexture, blurTexCoords[5] ) * 0.1531;\n\toutputColor += texture2D(uTexture, blurTexCoords[6] ) * 0.12245;\n\toutputColor += texture2D(uTexture, blurTexCoords[7] ) * 0.0918;\n\toutputColor += texture2D(uTexture, blurTexCoords[8] ) * 0.051;\n\n    gl_FragColor = vec4(uColor, outputColor.a * uOpacity);\n}\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(459),
        c = (i(u), n(46)),
        l = i(c),
        f = n(19),
        h = i(f),
        p = n(42),
        d = (i(p), n(35)),
        v = i(d),
        m = n(61),
        g = n(32),
        y = i(g),
        w = n(79),
        x = i(w),
        b = n(47),
        P = i(b),
        M = "contact",
        O = function(t) {
            function e() {
                o(this, e);
                var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.contact")));
                return t.isMouseOverLink = [], t.linkEnterTLs = [], t.linkLeaveTLs = [], (0, y.default)(t), t.preload().then(t.setup.bind(t)), t
            }
            return s(e, t), a(e, [{
                key: "preload",
                value: function() {
                    return new Promise(function(t, e) {
                        v.default.loadAll([]).then(function() {
                            t()
                        })
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    this.setupSVGs(), this.setupDOMNodes(), this.setupTimelines(), this.setupListeners()
                }
            }, {
                key: "setupSVGs",
                value: function() {
                    x.default.inject(DOMUtils.q(".svg", this.$node))
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$textContainer = DOMUtils.q(".text-container", this.$node), this.$background = DOMUtils.q(".background", this.$node), this.$textLines = DOMUtils.q(".text-container > div", this.$node), this.$links = DOMUtils.q("a", this.$node), this.$reverseTextLines = Array.prototype.slice.call(this.$textLines, 0).reverse()
                }
            }, {
                key: "setupAnimations",
                value: function() {
                    TweenMax.set(this.$node, {
                        autoAlpha: 1
                    }), this.waveFade = new WaveFade(this.$textContainer), TweenMax.set(this.$node, {
                        autoAlpha: 0
                    })
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    var t = this.timelines.show = new TimelineMax({
                        paused: !0,
                        immediateRender: !0,
                        delay: .3
                    });
                    t.set(this.$node, {
                        autoAlpha: 1
                    }).set(this.$links, {
                        autoAlpha: this.isDark ? .4 : .6
                    }).fromTo(this.$background, .5, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    }, "start").staggerFromTo(this.$textLines, .3, {
                        autoAlpha: 0,
                        y: "10px"
                    }, {
                        autoAlpha: 1,
                        y: "0px",
                        ease: Power2.easeOut
                    }, .1, "start+=.3");
                    var e = this.timelines.hide = new TimelineMax({
                        paused: !0,
                        immediateRender: !1
                    });
                    e.to(this.$node, .2, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })
                }
            }, {
                key: "setupListeners",
                value: function() {
                    h.default.addEventListener(p.Events.UPDATE, this.onRouterUpdate), h.default.addEventListener(m.Events.OPEN_MENU, this.onOpenMenu), h.default.addEventListener(m.Events.CLOSE_MENU, this.onCloseMenu), DOMUtils.on(this.$links, "mouseenter", this.onLinksEnter), DOMUtils.on(this.$links, "mouseleave", this.onLinksLeave), DOMUtils.on(this.$links, "click", this.onLinksClick)
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return this.timelines.hide.kill(), new Promise(function(e, n) {
                        t.timelines.show.eventCallback("onComplete", function() {
                            e()
                        }), t.timelines.show.restart(!0, !1)
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return this.timelines.show.kill(), new Promise(function(e, n) {
                        t.timelines.hide.eventCallback("onComplete", e), t.timelines.hide.restart(!0, !1)
                    })
                }
            }, {
                key: "onRouterUpdate",
                value: function(t) {
                    var e = this,
                        n = t.page;
                    this.isActive || n !== M || (console.log("WAIT FOR OUT -> CONTACT"), h.default.addEventListener(c.Events.CURR_OUT, this.onSectionCurrOut)), this.isActive && n !== M && this.hide().then(function() {
                        e.isActive = !1, h.default.dispatchEvent(c.Events.CURR_OUT)
                    })
                }
            }, {
                key: "onSectionCurrOut",
                value: function() {
                    h.default.removeEventListener(c.Events.CURR_OUT, this.onSectionCurrOut), this.isActive = !0, this.show()
                }
            }, {
                key: "onOpenMenu",
                value: function() {
                    this.isActive && TweenMax.to(this.$node, .5, {
                        autoAlpha: 0
                    })
                }
            }, {
                key: "onCloseMenu",
                value: function(t) {
                    var e = t.wasLink,
                        n = t.page;
                    !e && this.isActive || this.isActive && e && n === M ? TweenMax.to(this.$node, .5, {
                        autoAlpha: 1
                    }) : this.isActive && e && n !== M && (this.isActive = !1, this.timelines.hide.progress(1, !1))
                }
            }, {
                key: "linkEnter",
                value: function(t, e) {
                    var n = this;
                    if (!(this.linkEnterTLs[e] && this.linkEnterTLs[e].isActive() || this.linkLeaveTLs[e] && this.linkLeaveTLs[e].isActive())) {
                        var i = new TimelineMax({
                            onComplete: function() {
                                n.isMouseOverLink[e] || n.linkLeave(t, e)
                            }
                        });
                        i.to(t, .3, {
                            y: "-110%",
                            ease: Expo.easeIn
                        }, "start").set(t, {
                            y: "110%",
                            opacity: 1
                        }, "start+=.3").to(t, .3, {
                            y: "0%",
                            ease: Expo.easeOut
                        }, "start+=.3"), this.linkEnterTLs[e] = i
                    }
                }
            }, {
                key: "linkLeave",
                value: function(t, e) {
                    var n = this;
                    if (!(this.linkEnterTLs[e] && this.linkEnterTLs[e].isActive() || this.linkLeaveTLs[e] && this.linkLeaveTLs[e].isActive())) {
                        var i = new TimelineMax({
                            onComplete: function() {
                                n.isMouseOverLink[e] && n.linkEnter(t, e)
                            }
                        });
                        i.to(t, .5, {
                            opacity: this.isDark ? .4 : .6,
                            ease: Power0.easeNone
                        }), this.linkLeaveTLs[e] = i
                    }
                }
            }, {
                key: "onLinksEnter",
                value: function(t) {
                    var e = t.currentTarget,
                        n = DOMUtils.index(e.parentElement);
                    this.isMouseOverLink[n] = !0, this.linkEnter(e, n)
                }
            }, {
                key: "onLinksLeave",
                value: function(t) {
                    var e = t.currentTarget,
                        n = DOMUtils.index(e.parentElement);
                    this.isMouseOverLink[n] = !1, this.linkLeave(e, n)
                }
            }, {
                key: "onLinksClick",
                value: function(t) {
                    var e = t.currentTarget;
                    DOMUtils.hasClass(e, "mail") ? P.default.trackInteraction("Contact", "click", "Mail") : P.default.trackInteraction("Contact", "click", "Phone")
                }
            }]), e
        }(l.default);
    e.default = new O
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(461),
        c = (i(u), n(46)),
        l = i(c),
        f = n(19),
        h = i(f),
        p = n(42),
        d = i(p),
        v = n(35),
        m = (i(v), n(32)),
        g = i(m),
        y = n(103),
        w = i(y),
        x = n(47),
        b = i(x),
        P = {
            DARK: {
                box: "#ffffff",
                grid: "#ffffff",
                overlay: "#000000",
                background: "rgba(50, 50, 50, .25)"
            },
            LIGHT: {
                box: "#000000",
                grid: "#000000",
                overlay: "#ffffff",
                background: "rgba(231, 231, 231, .25)"
            }
        },
        M = function(t) {
            function e() {
                o(this, e);
                var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.preloader")));
                return t.isDark = DOMUtils.hasClass(document.body, "dark-mode"), t.isActive = !0, t.width = 0, t.height = 0, t.hideObj = {
                    bar: 0
                }, t.showObj = {
                    logo: 0
                }, t.currentPer = 0, t.targetPer = 0, t.fontSize = 22 * window.devicePixelRatio, t.gridSize = window.devicePixelRatio, t.gridGap = 9 * window.devicePixelRatio, t.gridOffset = {
                    x: 0,
                    y: 0
                }, t.rows = [], t.imageRows = [], t.imageBoxWidth = window.APP.isMobile ? .8 * window.innerWidth * window.devicePixelRatio : 390 * window.devicePixelRatio, t.imageBoxHeight = window.APP.isMobile ? t.imageBoxWidth / (390 * window.devicePixelRatio) * 120 * window.devicePixelRatio : 120 * window.devicePixelRatio, t.startTime = +new Date, (0, g.default)(t), t.setup(), t.render(), t.show(), t
            }
            return s(e, t), a(e, [{
                key: "setup",
                value: function() {
                    this.colors = this.isDark ? P.DARK : P.LIGHT, this.setupLogo(), this.setupDOMNodes(), this.onResize(), this.setupTimelines(), this.setupCallbacks(), this.setupListeners()
                }
            }, {
                key: "setupLogo",
                value: function() {
                    var t = this;
                    this.$logo = new Image, this.$logo.onload = function() {
                        t.logoWidth = t.$logo.width, t.logoHeight = t.$logo.height, t.logoOutputWidth = 120 * window.devicePixelRatio, t.logoOutputHeight = t.logoHeight * (120 * window.devicePixelRatio / t.$logo.width)
                    }, this.$logo.src = this.isDark ? "assets/images/Logo_minimal_white.svg" : "assets/images/Logo_minimal.svg"
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$canvas = DOMUtils.q("canvas", this.$node), this.ctx = this.$canvas.getContext("2d")
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    var t = this.timelines.show = new TimelineMax({
                        paused: !0,
                        immediateRender: !0
                    });
                    t.set(this.$node, {
                        display: "block",
                        autoAlpha: 1
                    }, "start").to(this.showObj, .5, {
                        logo: 1,
                        ease: Power0.easeNone
                    }, "start+=1").staggerTo(this.rows, 1.2, {
                        progress: 1,
                        ease: Expo.easeInOut
                    }, .2, "start+=1.5");
                    var e = this.timelines.hide = new TimelineMax({
                        paused: !0,
                        immediateRender: !1
                    });
                    e.to(this.hideObj, 1, {
                        bar: 1,
                        ease: Expo.easeInOut
                    }, "start").set(this.$node, {
                        autoAlpha: 0,
                        display: "none"
                    }, "start+=1")
                }
            }, {
                key: "setupCallbacks",
                value: function() {
                    this.onResize = (0, w.default)(this.onResize, 100)
                }
            }, {
                key: "setupListeners",
                value: function() {
                    DOMUtils.on(window, "resize", this.onResize), h.default.addEventListener(v.Events.UPDATE, this.onLoaderUpdate), h.default.addEventListener(p.Events.UPDATE, this.onRouterUpdate)
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return this.timelines.hide.kill(), new Promise(function(e, n) {
                        t.timelines.show.eventCallback("onComplete", e), t.timelines.show.restart(!0, !1)
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return this.timelines.show.kill(), new Promise(function(e, n) {
                        t.timelines.hide.eventCallback("onComplete", e), t.timelines.hide.restart(!0, !1), b.default.trackInteraction("Preloader", "stats", "Done", Math.round((+new Date - t.startTime) / 1e3))
                    })
                }
            }, {
                key: "onResize",
                value: function() {
                    this.$canvas.width = this.width = window.innerWidth * window.devicePixelRatio, this.$canvas.height = this.height = window.innerHeight * window.devicePixelRatio, this.$canvas.style.width = window.innerWidth + "px", this.$canvas.style.height = window.innerHeight + "px", this.fontSize = 22 * window.devicePixelRatio, this.gridOffsetX = Math.ceil(this.width / 2 - this.imageBoxWidth / 2), this.gridOffsetY = Math.ceil(this.height / 2 - this.imageBoxHeight / 2);
                    for (var t = Math.round(10 * window.devicePixelRatio), e = 0, n = this.imageBoxHeight / t - 1; e < n; e++) "undefined" == typeof this.rows[e] ? this.rows[e] = {
                        progress: 0,
                        y: Math.floor(e * t)
                    } : this.rows[e].y = Math.floor(e * t)
                }
            }, {
                key: "onLoaderUpdate",
                value: function(t) {
                    var e = t.addedFiles,
                        n = t.finishedFiles;
                    this.targetPer = n / e * 100
                }
            }, {
                key: "onRouterUpdate",
                value: function() {
                    var t = this;
                    this.isActive && (this.timelines.show.isActive() ? this.timelines.show.eventCallback("onComplete", function() {
                        t.hide().then(function() {
                            t.isActive = !1, h.default.dispatchEvent(c.Events.CURR_OUT)
                        })
                    }) : this.hide().then(function() {
                        t.isActive = !1, h.default.dispatchEvent(c.Events.CURR_OUT)
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    100 !== this.currentPer || this.didRouterInit || (this.didRouterInit = !0, d.default.init()), this.isActive && requestAnimationFrame(this.render.bind(this)), this.currentPer += Math.round(Math.random()), this.currentPer = Math.min(100, Math.min(this.currentPer, this.targetPer)), this.ctx.clearRect(0, 0, this.width, this.height), this.ctx.globalCompositeOperation = "source-over", this.currentPer >= 100 && (this.ctx.globalAlpha = 1 - Math.max(0, this.hideObj.bar - .99) / .01);
                    var t = this.gridGap + 2 * this.gridSize;
                    t = Math.round(10 * window.devicePixelRatio);
                    for (var e = 0; e < this.rows.length; e++) {
                        var n = this.rows[e],
                            i = n.progress,
                            o = this.imageBoxWidth * i;
                        this.ctx.fillStyle = this.colors.box, this.ctx.fillRect(this.gridOffsetX, n.y + this.gridOffsetY, o, t)
                    }
                    if (this.ctx.globalCompositeOperation = "source-atop", this.ctx.font = this.fontSize + "px DINNextLTPro", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillStyle = this.colors.overlay, this.ctx.fillText(Math.floor(this.currentPer), this.width / 2, this.height / 2), this.ctx.globalCompositeOperation = "destination-over", this.ctx.globalAlpha = this.showObj.logo, this.ctx.drawImage(this.$logo, this.width / 2 - this.logoOutputWidth / 2, this.height / 2 - this.logoOutputHeight / 2, this.logoOutputWidth, this.logoOutputHeight), this.ctx.globalAlpha = 1, this.currentPer >= 100) {
                        this.ctx.globalCompositeOperation = "destination-out", this.ctx.fillStyle = "#000", this.ctx.beginPath();
                        var r = this.gridOffsetX + this.imageBoxWidth * this.hideObj.bar,
                            s = this.gridOffsetY + this.imageBoxHeight;
                        this.ctx.moveTo(this.gridOffsetX, this.gridOffsetY), this.ctx.lineTo(r, this.gridOffsetY), this.ctx.lineTo(r, s), this.ctx.lineTo(this.gridOffsetX, s), this.ctx.fill()
                    }
                }
            }, {
                key: "animateRows",
                value: function() {
                    var t = new TimelineMax;
                    t.staggerTo(this.rows, 1.2, {
                        progress: 1,
                        ease: Expo.easeInOut
                    }, .2)
                }
            }]), e
        }(l.default);
    e.default = new M
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        c = n(462),
        l = (o(c), n(46)),
        f = o(l),
        h = n(19),
        p = o(h),
        d = n(42),
        v = o(d),
        m = n(105),
        g = n(35),
        y = o(g),
        w = n(61),
        x = n(260),
        b = i(x),
        P = n(124),
        M = (o(P), n(103)),
        O = o(M),
        k = n(32),
        E = o(k),
        T = n(79),
        _ = o(T),
        A = n(47),
        L = o(A),
        $ = n(182),
        C = o($),
        S = void 0,
        D = function(t) {
            function e() {
                r(this, e);
                var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.project")));
                return t.pageStrings = [], t.currentDelta = 0, t.targetDelta = 0, (0, E.default)(t), t.preload().then(t.setup.bind(t)), t
            }
            return a(e, t), u(e, [{
                key: "preload",
                value: function() {
                    var t = this;
                    return new Promise(function(e, i) {
                        y.default.loadAll([{
                            url: "assets/data/work.json",
                            type: g.Types.JSON
                        }, {
                            url: "assets/images/Arrow_Right.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Arrow_Left.svg",
                            type: g.Types.SVG
                        }, {
                            url: "assets/images/Play_Button.svg",
                            type: g.Types.SVG
                        }]).then(function(i) {
                            n.e(3, function(t) {
                                S = n(268).default
                            }), t.projectData = i[0].projects, t.projectData.forEach(function(e) {
                                t.pageStrings.push(e["project-url"])
                            }), e()
                        })
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    var t = this;
                    this.setupSVGs().then(function() {
                        t.setupDOMNodes(), t.setupTimelines(), t.setupListeners(), t.drawArrows()
                    })
                }
            }, {
                key: "setupSVGs",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        _.default.inject(DOMUtils.q("img.svg", t.$node)).then(function() {
                            e()
                        })
                    })
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$projectContainer = DOMUtils.q(".project-container", this.$node), this.$contentContainer = DOMUtils.q(".content-container", this.$node), this.$projectMask = DOMUtils.q(".project-mask", this.$node), this.$randomContainer = DOMUtils.q(".random-container", this.$node), this.$nextButton = DOMUtils.q(".next-button", this.$node), this.$nextThumbMask = DOMUtils.q(".thumb-mask", this.$nextButton), this.$nextThumb = DOMUtils.q(".thumb", this.$nextButton), this.$nextProjectTitle = DOMUtils.q(".project-title", this.$nextButton), this.$nextLine = DOMUtils.q(".line", this.$nextButton), this.$nextSVG = DOMUtils.q("svg", this.$nextButton), this.$nextCanvas = DOMUtils.q("canvas", this.$nextButton), this.nextContext = this.$nextCanvas.getContext("2d"), this.$prevButton = DOMUtils.q(".prev-button", this.$node), this.$prevThumbMask = DOMUtils.q(".thumb-mask", this.$prevButton), this.$prevThumb = DOMUtils.q(".thumb", this.$prevButton), this.$prevProjectTitle = DOMUtils.q(".project-title", this.$prevButton), this.$prevLine = DOMUtils.q(".line", this.$prevButton), this.$prevSVG = DOMUtils.q("svg", this.$prevButton), this.$prevCanvas = DOMUtils.q("canvas", this.$prevButton), this.prevContext = this.$prevCanvas.getContext("2d"), this.$backButton = DOMUtils.q(".back-button", this.$node), this.$backButtonMask = DOMUtils.q(".mask", this.$backButton), this.$visitButton = DOMUtils.q(".site-button", this.$node), this.$visitButtonMask = DOMUtils.q(".button-mask", this.$visitButton)
                }
            }, {
                key: "setupContentDOMNodes",
                value: function() {
                    this.$textContainer = DOMUtils.q(".text-container", this.$node), this.$headline = DOMUtils.q("h2", this.$textContainer), this.$clientBox = DOMUtils.q(".client-box", this.$textContainer), this.$serviceBox = DOMUtils.q(".services-box", this.$textContainer), this.$partnerBox = DOMUtils.q(".partners-box", this.$textContainer), this.$storyBox = DOMUtils.q(".story-box", this.$textContainer), this.$headlines = DOMUtils.q(".headline-container", this.$node), this.$videoContainer = DOMUtils.q(".video-container", this.$node), this.$imageContainer = DOMUtils.q(".image-container", this.$node)
                }
            }, {
                key: "setupSizes",
                value: function() {
                    var t = this;
                    if (this.$positionSortedMedia = [], this.$videoContainer.length && this.$videoContainer.length > 0) Array.prototype.slice.call(this.$videoContainer, 0).forEach(function(e) {
                        e.innerHTML = '<div class="mask">' + e.innerHTML + "</div>";
                        var n = e.getBoundingClientRect();
                        t.$positionSortedMedia.push({
                            $node: e,
                            isVisible: !1,
                            height: n.height,
                            top: n.top
                        })
                    });
                    else if ("undefined" == typeof this.$videoContainer.length) {
                        this.$videoContainer.innerHTML = '<div class="mask">' + this.$videoContainer.innerHTML + "</div>";
                        var e = this.$videoContainer.getBoundingClientRect();
                        this.$positionSortedMedia.push({
                            $node: this.$videoContainer,
                            isVisible: !1,
                            height: e.height,
                            top: e.top
                        })
                    }
                    Array.prototype.slice.call(this.$imageContainer, 0).forEach(function(e, n) {
                        DOMUtils.wrap(e.children[0], "div", {
                            class: "mask"
                        });
                        var i = DOMUtils.create("div", {
                            class: "placeholder"
                        });
                        e.appendChild(i);
                        var o = DOMUtils.q("img", e),
                            r = o.getBoundingClientRect();
                        t.$positionSortedMedia[n] = {
                            $node: e,
                            isVisible: !1,
                            height: r.height,
                            top: r.top
                        }, TweenMax.set(i, {
                            width: r.width,
                            height: r.height
                        })
                    }), this.$positionSortedMedia.sort(function(t, e) {
                        return t.top - e.top
                    }), this.$positionSortedMedia.forEach(function(t, e) {
                        0 !== e ? TweenMax.set(DOMUtils.q(".mask", t.$node), {
                            height: 0
                        }) : t.isVisible = !0
                    })
                }
            }, {
                key: "updateSizes",
                value: function() {
                    var t = this;
                    Array.prototype.slice.call(this.$imageContainer, 0).forEach(function(e, n) {
                        var i = DOMUtils.q(".placeholder", e),
                            o = DOMUtils.q("img", e),
                            r = o.getBoundingClientRect();
                        t.$positionSortedMedia[n] = {
                            $node: e,
                            isVisible: !1,
                            height: r.height,
                            top: r.top
                        }, TweenMax.set(i, {
                            width: r.width,
                            height: r.height
                        })
                    })
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    window.APP.isMobile ? b.setupMobileTimelines(this) : b.setupDesktopTimelines(this)
                }
            }, {
                key: "setupCallbacks",
                value: function() {
                    this.onResize = (0, O.default)(this.onResize, 100)
                }
            }, {
                key: "setupListeners",
                value: function() {
                    this.vScroll = new C.default({
                        limitInertia: !!window.APP.isMobile,
                        mouseMultiplier: 1,
                        touchMultiplier: 2,
                        firefoxMultiplier: 30,
                        preventTouch: !0
                    }), p.default.addEventListener(d.Events.UPDATE, this.onRouterUpdate), p.default.addEventListener(m.Events.TICK, this.onTick), p.default.addEventListener(w.Events.OPEN_MENU, this.onOpenMenu), p.default.addEventListener(w.Events.CLOSE_MENU, this.onCloseMenu), DOMUtils.on(window, "resize", this.onResize), window.APP.isMobile || (DOMUtils.on([this.$nextButton, this.$prevButton], "mouseenter", this.onNextPrevMouseEnter), DOMUtils.on([this.$nextButton, this.$prevButton], "mouseleave", this.onNextPrevMouseLeave), DOMUtils.on(this.$backButton, "mouseenter", this.onBackEnter), DOMUtils.on(this.$backButton, "mouseleave", this.onBackLeave), DOMUtils.on(this.$visitButton, "mouseenter", this.onVisitEnter), DOMUtils.on(this.$visitButton, "mouseleave", this.onVisitLeave)), DOMUtils.on([this.$nextButton, this.$prevButton], "click", this.onNextPrevClick), DOMUtils.on(this.$backButton, "click", this.onBackClick)
                }
            }, {
                key: "setupContent",
                value: function(t) {
                    var e = this;
                    return new Promise(function(n, i) {
                        e.currentIndex = t;
                        var o = e.projectData[t].template,
                            r = S[o];
                        DOMUtils.html(e.$contentContainer, r);
                        var s = t < e.projectData.length - 1 ? e.projectData[t + 1] : e.projectData[0];
                        DOMUtils.text(e.$nextProjectTitle, s.title), e.$nextButton.href = "/" + s["project-url"], e.$nextThumb.src = s["project-thumb"];
                        var a = t > 0 ? e.projectData[t - 1] : e.projectData[e.projectData.length - 1];
                        DOMUtils.text(e.$prevProjectTitle, a.title), e.$prevButton.href = "/" + a["project-url"], e.$prevThumb.src = a["project-thumb"], e.projectData[t].link ? (e.$visitButton.href = e.projectData[t].link, TweenMax.to(e.$visitButton, .3, {
                            autoAlpha: .5,
                            ease: Power2.easeOut
                        })) : TweenMax.to(e.$visitButton, .3, {
                            autoAlpha: 0,
                            ease: Power2.easeOut
                        }), e.setupSVGs().then(function() {
                            e.setupContentDOMNodes(), e.setupSizes(), e.updateListeners(), e.updateTimelines(), n()
                        })
                    })
                }
            }, {
                key: "updateListeners",
                value: function() {
                    var t = this;
                    [].concat(this.$videoContainer).forEach(function(e) {
                        DOMUtils.on(e, "click", t.onVideoContainerClick), DOMUtils.on(e, "mouseenter", t.onVideoContainerEnter), DOMUtils.on(e, "mouseleave", t.onVideoContainerLeave)
                    })
                }
            }, {
                key: "updateTimelines",
                value: function() {
                    var t = this,
                        e = "undefined" == typeof this.$headlines.length ? this.$headlines : this.$headlines[0],
                        n = this.timelines.show = new TimelineMax({
                            paused: !0,
                            immediateRender: !0
                        });
                    n.set(this.$node, {
                        autoAlpha: 1
                    }, "start").set(this.$projectMask, {
                        width: window.innerWidth < 1120 ? window.innerWidth : 1120
                    }, "start").set(this.$headline, {
                        autoAlpha: 1
                    }, "start").set(this.$backButton, {
                        autoAlpha: 0,
                        onComplete: function() {
                            t.updateSizes()
                        }
                    }, "start").staggerFrom([this.$clientBox, this.$serviceBox, this.$partnerBox, this.$storyBox], .3, {
                        autoAlpha: 0,
                        y: "+=20px",
                        ease: Power2.easeOut
                    }, .1, "start").from(e, .5, {
                        y: "+=100px",
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    }, "start+=.1").from(this.$positionSortedMedia[0].$node, .3, {
                        y: "30%",
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    }, "start+=.3");
                    var i = this.timelines.hide = new TimelineMax({
                        paused: !0,
                        immediateRender: !1
                    });
                    i.to(this.$node, .2, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })
                }
            }, {
                key: "checkViewportMedia",
                value: function() {
                    var t = this.$projectMask.scrollTop + window.innerHeight * (window.APP.isMobile ? .7 : .85);
                    Array.prototype.slice.call(this.$headlines, 0).every(function(e) {
                        if (!e.isVisible) {
                            var n = e.getBoundingClientRect();
                            n.top - 50 <= t && (e.isVisible = !0, TweenMax.from(e, .5, {
                                y: "+=100px",
                                autoAlpha: 0,
                                ease: Power2.easeOut
                            }))
                        }
                        return !0
                    }), this.$positionSortedMedia.every(function(e) {
                        if (e.isVisible) return !0;
                        var n = e.top <= t;
                        if (n) {
                            e.isVisible = !0;
                            var i = new TimelineMax;
                            i.to(DOMUtils.q(".mask", e.$node), .85, {
                                height: e.height,
                                ease: Power2.easeInOut
                            }, "start")
                        }
                        return n
                    })
                }
            }, {
                key: "drawArrows",
                value: function() {
                    var t = this.$nextCanvas.getBoundingClientRect(),
                        e = t.width,
                        n = t.height,
                        i = window.devicePixelRatio;
                    this.$nextCanvas.width = e * i, this.$nextCanvas.height = n * i, this.$prevCanvas.width = e * i, this.$prevCanvas.height = n * i;
                    var o = this.nextContext;
                    o.strokeStyle = "#fff", o.lineWidth = 2 * i, o.beginPath(), o.moveTo(2 * i, 2 * i), o.lineTo((e - 2) * i, n / 2 * i), o.lineTo(2 * i, (n - 2) * i), o.lineTo(2 * i, 2 * i), o.closePath(), o.stroke();
                    var r = this.prevContext;
                    r.strokeStyle = "#fff", r.lineWidth = 2 * i, r.beginPath(), r.moveTo((e - 2) * i, 2 * i), r.lineTo(2 * i, n / 2 * i), r.lineTo((e - 2) * i, (n - 2) * i), r.lineTo((e - 2) * i, 2 * i), r.closePath(), r.stroke()
                }
            }, {
                key: "show",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this.timelines.hide.kill(), new Promise(function(n, i) {
                        t.timelines.show.eventCallback("onComplete", function() {
                            "undefined" != typeof t.currentMouseTarget, n()
                        }), t.timelines.show.restart(!0, !1), e ? TweenMax.from(t.$headline, .3, {
                            autoAlpha: 0,
                            y: "+=20px",
                            ease: Power2.easeOut
                        }) : t.vScroll.on(t.onScroll)
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return this.timelines.show.kill(), new Promise(function(e, n) {
                        t.vScroll.off(t.onScroll), t.timelines.hide.eventCallback("onComplete", e), t.timelines.hide.restart(!0, !1)
                    })
                }
            }, {
                key: "onRouterUpdate",
                value: function(t) {
                    var e = this,
                        n = t.page,
                        i = this.pageStrings.indexOf(n);
                    !this.isActive && i >= 0 && (console.log("WAIT FOR OUT -> PROJECT"), this.setupContent(i).then(function() {
                        p.default.dispatchEvent(l.Events.CONTENT_READY, e.$node), p.default.addEventListener(l.Events.CURR_OUT, e.onSectionCurrOut)
                    })), this.isActive && i < 0 && this.hide().then(function() {
                        e.isActive = !1, e.$projectMask.scrollTop = 0, e.currentDelta = 0, e.targetDelta = 0, p.default.dispatchEvent(l.Events.CURR_OUT)
                    }), this.isActive && i >= 0 && this.currentIndex !== i && (this.timelines.gatherMenu.pause(), this.timelines.gatherMenu.reverse(), this.isActive = !1, this.$projectMask.scrollTop = 0, this.currentDelta = 0, this.targetDelta = 0, this.setupContent(i).then(function() {
                        e.isSwitchingProject = !1, e.isActive = !0, e.show(!0)
                    }))
                }
            }, {
                key: "onSectionCurrOut",
                value: function() {
                    p.default.removeEventListener(l.Events.CURR_OUT, this.onSectionCurrOut), this.isActive = !0, this.show()
                }
            }, {
                key: "onTick",
                value: function() {
                    if (this.isActive && !this.isSwitchingProject && (this.currentDelta += .1 * (this.targetDelta - this.currentDelta), this.$projectMask.scrollTop !== this.currentDelta)) {
                        this.checkViewportMedia(), this.$projectMask.scrollTop = -this.currentDelta;
                        var t = !(this.targetDelta < this.currentDelta),
                            e = this.$contentContainer.getBoundingClientRect(),
                            n = Math.abs(-this.currentDelta - e.height + window.innerHeight);
                        if (!window.APP.isMobile) {
                            var i = 105;
                            n < i && TweenMax.set([this.$nextButton, this.$prevButton, this.$backButton], {
                                bottom: 30 + (105 - n)
                            })
                        }
                        var o = window.APP.isMobile ? 5 : 50;
                        if (!(n < o) || this.areControllsAnimating || this.areControllsGathered || t || this.timelines.gatherMenu.isActive()) {
                            if (n > o && this.areControllsGathered && t && !this.timelines.gatherMenu.isActive() && (this.timelines.gatherMenu.pause(), this.timelines.gatherMenu.reverse(), "undefined" != typeof this.currentMouseTarget)) {
                                var r = this.currentMouseTarget,
                                    s = DOMUtils.q(".line", r),
                                    a = DOMUtils.q(".thumb-mask", r),
                                    u = new TimelineMax;
                                u.to(s, .3, {
                                    width: 0,
                                    ease: Expo.easeInOut
                                }, "start").to(a, .3, {
                                    width: 0,
                                    ease: Expo.easeInOut
                                }, "start"), this.currentMouseTarget.isSameNode(r) && (this.currentMouseTarget = void 0)
                            }
                        } else this.timelines.gatherMenu.restart(!0, !1)
                    }
                }
            }, {
                key: "onScroll",
                value: function(t) {
                    this.targetDelta += t.deltaY;
                    var e = this.$contentContainer.getBoundingClientRect(),
                        n = e.height - window.innerHeight;
                    this.targetDelta = Math.max(Math.min(0, this.targetDelta), -n)
                }
            }, {
                key: "onResize",
                value: function() {
                    var t = this;
                    if (this.isActive) {
                        if (this.areControllsGathered) {
                            var e = this.$nextButton.getBoundingClientRect();
                            TweenMax.set(this.$nextButton, {
                                right: "auto",
                                left: window.innerWidth / 2 + 560 - (e.width + 195) + "px"
                            });
                            var n = this.$prevButton.getBoundingClientRect();
                            TweenMax.set(this.$prevButton, {
                                left: "auto",
                                right: window.innerWidth / 2 + 560 - (n.width + 195) + "px"
                            })
                        }
                        TweenMax.set(this.$projectMask, {
                            width: window.innerWidth < 1120 ? window.innerWidth : 1120
                        }), Array.prototype.slice.call(this.$imageContainer, 0).forEach(function(e, n) {
                            var i = DOMUtils.q(".placeholder", e),
                                o = DOMUtils.q("img", e),
                                r = o.getBoundingClientRect();
                            if (TweenMax.set(i, {
                                    width: r.width,
                                    height: r.height
                                }), t.$positionSortedMedia[n].height = r.height, t.$positionSortedMedia[n].top = r.top, t.$positionSortedMedia[n].isVisible) {
                                var s = DOMUtils.q(".mask", e);
                                TweenMax.set(s, {
                                    height: r.height
                                })
                            }
                        })
                    }
                }
            }, {
                key: "onVideoContainerClick",
                value: function(t) {
                    var e = t.currentTarget,
                        n = DOMUtils.q("video", e),
                        i = DOMUtils.q(".overlay", e);
                    n.isPlaying ? (n.pause(), n.src = n.src, n.isPlaying = !1, window.APP.isIOS || TweenMax.to(i, .3, {
                        autoAlpha: .5,
                        ease: Power2.easeOut
                    })) : (n.play(), window.APP.isIOS || (n.isPlaying = !0, TweenMax.to(i, .3, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    })))
                }
            }, {
                key: "onVideoContainerEnter",
                value: function(t) {
                    "undefined" != typeof this.currentVideoLeaveTL && this.currentVideoLeaveTL.isActive() && this.currentVideoLeaveTL.pause().progress(1, !1);
                    var e = t.currentTarget,
                        n = DOMUtils.q(".svg", e),
                        i = DOMUtils.q(".play-button", e),
                        o = new TimelineMax;
                    o.to(n, .3, {
                        left: "70%",
                        autoAlpha: 0,
                        ease: Expo.easeIn
                    }, "start").set(n, {
                        left: "36%"
                    }, "start+=.3").to(n, .3, {
                        left: "52%",
                        autoAlpha: 1,
                        ease: Expo.easeOut
                    }, "start+=.3").to(i, .3, {
                        backgroundColor: "rgba(0, 0, 0, 1)",
                        ease: Power2.easeOut
                    }, "start+=.3"), this.currentVideoEnterTL = o
                }
            }, {
                key: "onVideoContainerLeave",
                value: function(t) {
                    "undefined" != typeof this.currentVideoEnterTL && this.currentVideoEnterTL.isActive() && this.currentVideoEnterTL.pause().progress(1, !1);
                    var e = t.currentTarget,
                        n = (DOMUtils.q(".svg", e), DOMUtils.q(".play-button", e)),
                        i = new TimelineMax;
                    i.to(n, .3, {
                        backgroundColor: "rgba(0, 0, 0, .4)",
                        ease: Power2.easeOut
                    }, "start"), this.currentVideoLeaveTL = i
                }
            }, {
                key: "nextPrevMouseEnter",
                value: function(t, e) {
                    var n = this;
                    e ? this.isNextAnimating = !0 : this.isPrevAnimating = !0;
                    var i = new TimelineMax({
                        onComplete: function() {
                            e ? (n.isNextAnimating = !1, n.isMouseOverNextButton || n.nextPrevMouseLeave(t, e)) : (n.isPrevAnimating = !1, n.isMouseOverPrevButton || n.nextPrevMouseLeave(t, e))
                        }
                    });
                    if (this.areControllsGathered) {
                        var o = DOMUtils.q(".line", t),
                            r = DOMUtils.q(".line-background", o),
                            s = DOMUtils.q(".thumb-mask", t);
                        i.to(o, .3, {
                            width: 100,
                            ease: Power2.easeInOut
                        }, "start").to(r, .2, {
                            width: 100,
                            ease: Power2.easeInOut
                        }, "start+=.1").to(s, .3, {
                            width: 200,
                            ease: Power2.easeInOut
                        }, "start"), this.currentMouseTarget = t
                    } else {
                        var a = DOMUtils.q(".project-title", t);
                        i.to(a, .3, {
                            autoAlpha: 1,
                            ease: Power2.easeOut
                        }, "start+=.2"), DOMUtils.hasClass(t, "next-button") ? i.fromTo(a, .5, {
                            x: "-20px"
                        }, {
                            x: "0",
                            ease: Expo.easeInOut
                        }, "start") : i.fromTo(a, .5, {
                            x: "20px"
                        }, {
                            x: "0",
                            ease: Expo.easeInOut
                        }, "start"), this.currentMouseTarget = t
                    }
                }
            }, {
                key: "nextPrevMouseLeave",
                value: function(t, e) {
                    var n = this;
                    e ? this.isNextAnimating = !0 : this.isPrevAnimating = !0;
                    var i = new TimelineMax({
                        onComplete: function() {
                            e ? (n.isNextAnimating = !1, n.isMouseOverNextButton && n.nextPrevMouseLeave(t, e)) : (n.isPrevAnimating = !1, n.isMouseOverPrevButton && n.nextPrevMouseLeave(t, e))
                        }
                    });
                    if (this.areControllsGathered) {
                        var o = DOMUtils.q(".line", t),
                            r = DOMUtils.q(".line-background", o),
                            s = DOMUtils.q(".thumb-mask", t);
                        i.to(o, .3, {
                            width: 0,
                            ease: Power2.easeInOut
                        }, "start").to(r, .3, {
                            width: 0,
                            ease: Power2.easeInOut
                        }, "start").to(s, .3, {
                            width: 0,
                            ease: Power2.easeInOut
                        }, "start"), this.currentMouseTarget && this.currentMouseTarget.isSameNode(t) && (this.currentMouseTarget = void 0)
                    } else {
                        var a = DOMUtils.q(".project-title", t);
                        i.to(a, .3, {
                            autoAlpha: 0,
                            ease: Power2.easeOut
                        }, "start+=.2"), DOMUtils.hasClass(t, "next-button") ? i.to(a, .5, {
                            x: "-20px",
                            ease: Expo.easeInOut
                        }, "start") : i.to(a, .5, {
                            x: "20px",
                            ease: Expo.easeInOut
                        }, "start"), this.currentMouseTarget && this.currentMouseTarget.isSameNode(t) && (this.currentMouseTarget = void 0)
                    }
                }
            }, {
                key: "onNextPrevMouseEnter",
                value: function(t) {
                    var e = t.currentTarget,
                        n = DOMUtils.hasClass(e, "next-button");
                    this.isMouseOverNextButton = n, this.isMouseOverPrevButton = !n, (n && !this.isNextAnimating || !n && !this.isPrevAnimating) && this.nextPrevMouseEnter(e, n)
                }
            }, {
                key: "onNextPrevMouseLeave",
                value: function(t) {
                    var e = t.currentTarget,
                        n = DOMUtils.hasClass(e, "next-button");
                    this.isMouseOverNextButton = !1, this.isMouseOverPrevButton = !1, (n && !this.isNextAnimating || !n && !this.isPrevAnimating) && this.nextPrevMouseLeave(e, n)
                }
            }, {
                key: "onNextPrevClick",
                value: function(t) {
                    var e = this;
                    t.preventDefault();
                    var n = t.currentTarget,
                        i = DOMUtils.hasClass(n, "next-button"),
                        o = DOMUtils.q(".project-title", n),
                        r = DOMUtils.q(".line", n),
                        s = DOMUtils.q(".thumb-mask", n);
                    this.isSwitchingProject = !0;
                    var a = new TimelineMax({
                        onComplete: function() {
                            e.areControllsGathered ? (e.timelines.gatherMenu.pause(), e.timelines.gatherMenu.eventCallback("onReverseComplete", function() {
                                e.timelines.gatherMenu.eventCallback("onReverseComplete", function() {
                                    e.areControllsGathered = !1
                                }), e.areControllsGathered = !1, window.APP.isMobile ? v.default.push(n.getAttribute("href")) : (TweenMax.set(e.$nextButton, {
                                    right: "40px",
                                    left: "auto"
                                }), TweenMax.set(e.$prevButton, {
                                    left: "40px",
                                    right: "auto"
                                }), TweenMax.to([e.$nextButton, e.$prevButton], .5, {
                                    bottom: "40px",
                                    ease: Power2.easeInOut,
                                    onComplete: function() {
                                        v.default.push(n.getAttribute("href"))
                                    }
                                }))
                            }), e.timelines.gatherMenu.reverse()) : (window.APP.isMobile || (TweenMax.set(e.$nextButton, {
                                right: "40px",
                                left: "auto"
                            }), TweenMax.set(e.$prevButton, {
                                left: "40px",
                                right: "auto"
                            })), v.default.push(n.getAttribute("href")))
                        }
                    });
                    i ? (a.set(this.$projectMask, {
                        left: 0
                    }, "start").set(this.$randomContainer, {
                        left: 0
                    }, "start").to(this.$projectMask, 1, {
                        width: 0,
                        ease: Expo.easeInOut
                    }, "start"), this.areControllsGathered ? a.to(r, .3, {
                        width: 0,
                        ease: Expo.easeInOut
                    }, "start").to(s, .3, {
                        width: 0,
                        ease: Expo.easeInOut
                    }, "start") : a.to(o, .5, {
                        x: "-20px",
                        ease: Expo.easeInOut
                    }, "start").to(o, .3, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    }, "start+=.1"), L.default.trackInteraction("Project", "click", "NextButton")) : (a.set(this.$projectMask, {
                        right: 0,
                        left: "auto"
                    }, "start").set(this.$randomContainer, {
                        right: 0,
                        left: "auto"
                    }, "start").to(this.$projectMask, 1, {
                        width: 0,
                        ease: Expo.easeInOut
                    }, "start"), this.areControllsGathered ? a.to(r, .3, {
                        width: 0,
                        ease: Expo.easeInOut
                    }, "start").to(s, .3, {
                        width: 0,
                        ease: Expo.easeInOut
                    }, "start") : a.to(o, .5, {
                        x: "20px",
                        ease: Expo.easeInOut
                    }, "start").to(o, .3, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    }, "start+=.1"), L.default.trackInteraction("Project", "click", "PrevButton"))
                }
            }, {
                key: "onBackClick",
                value: function(t) {
                    t.preventDefault(), v.default.push("/work"), L.default.trackInteraction("Project", "click", "BackButton")
                }
            }, {
                key: "backEnter",
                value: function() {
                    var t = this;
                    this.isBackAnimating = !0;
                    var e = new TimelineMax({
                        onComplete: function() {
                            t.isBackAnimating = !1, t.isMouseOverBack || t.backLeave()
                        }
                    });
                    e.to(this.$backButtonMask, .3, {
                        y: "-100%",
                        ease: Expo.easeIn
                    }, "start").set(this.$backButtonMask, {
                        y: "100%",
                        opacity: 1
                    }, "start+=.3").to(this.$backButtonMask, .3, {
                        y: "0%",
                        ease: Expo.easeOut
                    }, "start+=.3")
                }
            }, {
                key: "backLeave",
                value: function() {
                    var t = this;
                    this.isBackAnimating = !0;
                    var e = new TimelineMax({
                        onComplete: function() {
                            t.isBackAnimating = !1, t.isMouseOverBack && t.backEnter()
                        }
                    });
                    e.to(this.$backButtonMask, .4, {
                        opacity: .5,
                        ease: Power2.easeOut
                    }, "start")
                }
            }, {
                key: "onBackEnter",
                value: function(t) {
                    this.isMouseOverBack = !0, this.isBackAnimating || this.backEnter()
                }
            }, {
                key: "onBackLeave",
                value: function(t) {
                    this.isMouseOverBack = !1, this.isBackAnimating || this.backLeave()
                }
            }, {
                key: "visitEnter",
                value: function() {
                    var t = this;
                    this.isVisitAnimating = !0;
                    var e = new TimelineMax({
                        onComplete: function() {
                            t.isVisitAnimating = !1, t.isMouseOverVisit || t.visitLeave()
                        }
                    });
                    e.to(this.$visitButtonMask, .3, {
                        y: "-100%",
                        ease: Expo.easeIn
                    }, "start").set(this.$visitButtonMask, {
                        y: "100%",
                        opacity: 1
                    }, "start+=.3").to(this.$visitButtonMask, .3, {
                        y: "0%",
                        ease: Expo.easeOut
                    }, "start+=.3")
                }
            }, {
                key: "visitLeave",
                value: function() {
                    var t = this;
                    this.isVisitAnimating = !0;
                    var e = new TimelineMax({
                        onComplete: function() {
                            t.isVisitAnimating = !1, t.isMouseOverVisit && t.visitEnter()
                        }
                    });
                    e.to(this.$visitButtonMask, .4, {
                        opacity: .5,
                        ease: Power2.easeOut
                    }, "start")
                }
            }, {
                key: "onVisitEnter",
                value: function(t) {
                    this.isMouseOverVisit = !0, this.isVisitAnimating || this.visitEnter()
                }
            }, {
                key: "onVisitLeave",
                value: function(t) {
                    this.isMouseOverVisit = !1, this.isVisitAnimating || this.visitLeave()
                }
            }, {
                key: "onOpenMenu",
                value: function() {
                    this.isActive && TweenMax.to(this.$node, .5, {
                        autoAlpha: 0
                    })
                }
            }, {
                key: "onCloseMenu",
                value: function(t) {
                    var e = t.wasLink;
                    this.isActive && !e && TweenMax.to(this.$node, .5, {
                        autoAlpha: 1
                    })
                }
            }]), e
        }(f.default);
    e.default = new D
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setupDesktopTimelines = e.setupMobileTimelines = void 0;
    var o = n(19);
    i(o), e.setupMobileTimelines = function(t) {
        var e = t.timelines.gatherMenu = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onStart: function() {
                t.areControllsAnimating = !0
            },
            onComplete: function() {
                t.areControllsAnimating = !1, t.areControllsGathered = !0
            },
            onReverseComplete: function() {
                t.areControllsGathered = !1
            }
        });
        e.set(t.$backButton, {
            autoAlpha: 1
        }, "start").from(t.$backButtonMask, .3, {
            y: "100%",
            ease: Power2.easeInOut
        }, "start")
    }, e.setupDesktopTimelines = function(t) {
        var e = t.timelines.gatherMenu = new TimelineMax({
                paused: !0,
                immediateRender: !1,
                onStart: function() {
                    t.areControllsAnimating = !0
                },
                onComplete: function() {
                    t.areControllsAnimating = !1, t.areControllsGathered = !0
                },
                onReverseComplete: function() {
                    t.areControllsGathered = !1
                }
            }),
            n = {
                position: 0
            };
        e.to(n, .8, {
            position: 1,
            ease: Power2.easeInOut,
            onStart: function() {
                var e = t.$nextButton.getBoundingClientRect();
                n.nextLeft = e.left, n.nextDiff = n.nextLeft - (window.innerWidth / 2 + 560 - e.width - 195), TweenMax.set(t.$nextButton, {
                    right: "auto",
                    left: n.nextLeft + "px"
                });
                var i = t.$prevButton.getBoundingClientRect();
                n.prevRight = window.innerWidth - i.right, n.prevDiff = n.prevRight - (window.innerWidth / 2 + 560 - i.width - 195), TweenMax.set(t.$prevButton, {
                    left: "auto",
                    right: n.prevRight + "px"
                })
            },
            onUpdate: function() {
                TweenMax.set(t.$nextButton, {
                    left: n.nextLeft - n.nextDiff * n.position + "px"
                }), TweenMax.set(t.$prevButton, {
                    right: n.prevRight - n.prevDiff * n.position + "px"
                })
            }
        }, "start").set([t.$nextProjectTitle, t.$prevProjectTitle], {
            x: "0"
        }, "start").set(t.$backButton, {
            autoAlpha: 1
        }, "start+=.6").from(t.$backButtonMask, .3, {
            y: "100%",
            ease: Power2.easeInOut
        }, "start+=.6").to(t.$nextProjectTitle, .3, {
            autoAlpha: 1,
            ease: Power2.easeOut
        }, "start+=.6").to(t.$prevProjectTitle, .3, {
            autoAlpha: 1,
            ease: Power2.easeOut
        }, "start+=.6")
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(463),
        c = (i(u), n(249)),
        l = n(248),
        f = i(l),
        h = n(46),
        p = i(h),
        d = n(19),
        v = i(d),
        m = n(42),
        g = (i(m), n(35)),
        y = (i(g), n(61)),
        w = n(126),
        x = n(32),
        b = i(x),
        P = n(47),
        M = i(P),
        O = "",
        k = [{
            name: "Landscape",
            mode: c.MODES.DARK,
            soundColor: "#fff"
        }, {
            name: "Skull",
            mode: c.MODES.DARK,
            soundColor: "#000"
        }],
        E = void 0,
        T = function(t) {
            function e() {
                o(this, e);
                var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.splash")));
                return t.someEnterTLs = [], t.someLeaveTLs = [], t.isMouseOverSome = [], t.isSoundMuted = !1, t.soundAnim = {
                    radius: 1.5 * Math.PI,
                    direction: !1
                }, (0, b.default)(t), t.chooseExperiment(), t.preload().then(t.setup.bind(t)), t
            }
            return s(e, t), a(e, [{
                key: "preload",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        Promise.all([t.loadExperiment()]).then(function() {
                            e()
                        })
                    })
                }
            }, {
                key: "chooseExperiment",
                value: function() {
                    var t = parseInt(f.default.get("exp-index")),
                        e = Math.floor(Math.random() * k.length);
                    null == t || void 0 == t || Number.isNaN(t) || (e = t + 1, e >= k.length && (e = 0)), "#landscape" === window.location.hash ? e = 0 : "#skull" === window.location.hash && (e = 1), DOMUtils.addClass(document.body, k[e].mode), this.isDark = "dark-mode" === k[e].mode, this.experimentIndex = e, f.default.set("exp-index", e)
                }
            }, {
                key: "loadExperiment",
                value: function() {
                    var t = this;
                    return new Promise(function(e, i) {
                        switch (t.experimentIndex) {
                            case 0:
                                n.e(1, function(t) {
                                    E = n(228).default, E.preload().then(function() {
                                        e()
                                    })
                                }), DOMUtils.addClass(t.$node, "landscape"), DOMUtils.addClass(document.body, "landscape");
                                break;
                            case 1:
                                n.e(0, function(t) {
                                    E = n(241).default, E.preload().then(function() {
                                        e()
                                    })
                                }), DOMUtils.addClass(t.$node, "skull"), DOMUtils.addClass(document.body, "skull")
                        }
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    this.setupDOMNodes(), this.setupTimelines(), this.setupListeners(), this.setupExperiment()
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$experimentContainer = DOMUtils.q(".experiment-container", this.$node), this.$footer = DOMUtils.q("footer", this.$node), this.$footerContent = DOMUtils.q(".content-wrapper", this.$footer), this.$footerLeft = DOMUtils.q(".left", this.$footerContent), this.$footerCenter = DOMUtils.q(".center", this.$footerContent), this.$footerRight = DOMUtils.q(".right", this.$footerContent), this.$someContainer = DOMUtils.q(".some-container", this.$node), this.$someLinks = DOMUtils.q("a", this.$someContainer), this.$experimentNumber = DOMUtils.q(".left span", this.$node), this.$soundButton = DOMUtils.q(".sound-button", this.$footer), this.$soundCanvas = DOMUtils.q("canvas", this.$soundButton), this.$soundText = DOMUtils.q(".text", this.$soundButton), TweenMax.set(this.$soundText, {
                        x: "-100%",
                        y: "-50%"
                    });
                    var t = this.$soundCanvas.getBoundingClientRect();
                    this.$soundCanvas.width = t.width, this.$soundCanvas.height = t.height, this.soundContext = this.$soundCanvas.getContext("2d")
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    var t = this.timelines.show = new TimelineMax({
                        paused: !0,
                        immediateRender: !0
                    });
                    t.set(this.$node, {
                        display: "block",
                        autoAlpha: 1
                    }, "start").set([this.$footerCenter, this.$footerLeft], {
                        y: "-50%"
                    }).set(this.$footerRight, {
                        x: "0",
                        y: "-50%"
                    }, "start").set(this.$footerCenter, {
                        x: "-50%"
                    }).from(this.$experimentContainer, 1, {
                        opacity: 0,
                        ease: Power0.easeNone
                    }, "start").fromTo(this.$footer, .4, {
                        y: "+=50px"
                    }, {
                        y: "-=50px",
                        ease: Expo.easeOut
                    }, "start+=1.3");
                    var e = this.timelines.hide = new TimelineMax({
                        paused: !0,
                        immediateRender: !1
                    });
                    e.to(this.$node, .2, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    }).set(this.$node, {
                        display: "none"
                    })
                }
            }, {
                key: "setupListeners",
                value: function() {
                    v.default.addEventListener(m.Events.UPDATE, this.onRouterUpdate), v.default.addEventListener(y.Events.OPEN_MENU, this.onMenuOpen), v.default.addEventListener(y.Events.CLOSE_MENU, this.onMenuClose), v.default.addEventListener(y.Events.CLOSE_MENU, this.onMenuClose), v.default.addEventListener(w.Events.ACTIVE, this.onLandscapeOverlayActive), v.default.addEventListener(w.Events.NOT_ACTIVE, this.onLandscapeOverlayNotActive), DOMUtils.on(this.$someLinks, "mouseenter", this.onSomeEnter), DOMUtils.on(this.$someLinks, "mouseleave", this.onSomeLeave), DOMUtils.on(this.$soundButton, "mouseenter", this.onSoundEnter), DOMUtils.on(this.$soundButton, "mouseleave", this.onSoundLeave), DOMUtils.on(this.$soundButton, "click", this.onSoundClick)
                }
            }, {
                key: "setupExperiment",
                value: function() {
                    this.experiment = new E(this.$experimentContainer, this.$footerCenter), window.APP.isMobile && (this.isSoundMuted = !0, this.soundAnim.radius = -Math.PI / 2, this.drawSoundButton(), this.experiment.mute());
                    var t = this.experimentIndex + 1,
                        e = t <= 9 ? ("0" + t).slice("-2") : t;
                    DOMUtils.text(this.$experimentNumber, e)
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return this.experiment.onResize(), this.timelines.hide.kill(), new Promise(function(e, n) {
                        DOMUtils.addClass(document.body, "is-on-splash"), t.drawSoundButton(), t.experiment.start(), t.timelines.show.eventCallback("onComplete", e), t.timelines.show.restart(!0, !1)
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return this.timelines.show.kill(), new Promise(function(e, n) {
                        DOMUtils.removeClass(document.body, "is-on-splash"), t.timelines.hide.eventCallback("onComplete", function() {
                            t.experiment.stop(), e()
                        }), t.timelines.hide.restart(!0, !1)
                    })
                }
            }, {
                key: "drawSoundButton",
                value: function() {
                    var t = this.soundContext,
                        e = this.$soundCanvas.width,
                        n = this.$soundCanvas.height;
                    t.clearRect(0, 0, e, n), t.beginPath(), t.arc(e / 2, n / 2, e / 2 - 4, -Math.PI / 2, this.soundAnim.radius, this.soundAnim.direction), t.lineWidth = 2, t.strokeStyle = k[this.experimentIndex].soundColor, t.stroke(), t.globalAlpha = .3, t.beginPath(), t.arc(e / 2, n / 2, e / 2 - 4, 0, 2 * Math.PI, !1), t.lineWidth = 2, t.strokeStyle = k[this.experimentIndex].soundColor, t.stroke(), t.globalAlpha = 1
                }
            }, {
                key: "onRouterUpdate",
                value: function(t) {
                    var e = this,
                        n = t.page;
                    this.isActive || n !== O || v.default.addEventListener(h.Events.CURR_OUT, this.onSectionCurrOut), this.isActive && n !== O && this.hide().then(function() {
                        e.isActive = !1, v.default.dispatchEvent(h.Events.CURR_OUT)
                    })
                }
            }, {
                key: "onSectionCurrOut",
                value: function() {
                    v.default.removeEventListener(h.Events.CURR_OUT, this.onSectionCurrOut), this.isActive = !0, this.show()
                }
            }, {
                key: "onMenuOpen",
                value: function() {
                    this.isActive && (DOMUtils.removeClass(document.body, "is-on-splash"), this.experiment.stop())
                }
            }, {
                key: "onMenuClose",
                value: function(t) {
                    var e = t.wasLink;
                    t.page;
                    this.isActive && !e && (DOMUtils.addClass(document.body, "is-on-splash"), this.experiment.start())
                }
            }, {
                key: "someEnter",
                value: function(t, e) {
                    var n = this;
                    if (!(this.someEnterTLs[e] && this.someEnterTLs[e].isActive() || this.someLeaveTLs[e] && this.someLeaveTLs[e].isActive())) {
                        var i = t.children[0],
                            o = new TimelineMax({
                                onComplete: function() {
                                    n.isMouseOverSome[e] || n.someLeave(t, e)
                                }
                            });
                        o.to(i, .3, {
                            y: "-100%",
                            ease: Expo.easeIn
                        }, "start").set(i, {
                            y: "110%"
                        }, "start+=.3").set(t, {
                            opacity: 1
                        }).to(i, .3, {
                            y: "0%",
                            ease: Expo.easeOut
                        }, "start+=.3"), this.someEnterTLs[e] = o
                    }
                }
            }, {
                key: "someLeave",
                value: function(t, e) {
                    var n = this;
                    if (!(this.someEnterTLs[e] && this.someEnterTLs[e].isActive() || this.someLeaveTLs[e] && this.someLeaveTLs[e].isActive())) {
                        var i = new TimelineMax({
                            onComplete: function() {
                                n.isMouseOverSome[e] && n.someEnter(t, e)
                            }
                        });
                        i.to(t, .5, {
                            opacity: .5,
                            ease: Power0.easeNone
                        }), this.someLeaveTLs[e] = i
                    }
                }
            }, {
                key: "onSomeEnter",
                value: function(t) {
                    var e = t.currentTarget,
                        n = Math.floor(DOMUtils.index(e) / 2);
                    this.isMouseOverSome[n] = !0, this.someEnter(e, n)
                }
            }, {
                key: "onSomeLeave",
                value: function(t) {
                    var e = t.currentTarget,
                        n = Math.floor(DOMUtils.index(e) / 2);
                    this.isMouseOverSome[n] = !1, this.someLeave(e, n)
                }
            }, {
                key: "soundEnter",
                value: function() {
                    var t = this;
                    this.isSoundAnimating = !0;
                    var e = new TimelineMax({
                        onUpdate: function() {
                            t.drawSoundButton()
                        },
                        onComplete: function() {
                            t.isSoundAnimating = !1, t.isMouseOverSound || t.soundLeave()
                        }
                    });
                    window.APP.isMobile || e.fromTo(this.$soundText, .4, {
                        autoAlpha: 0,
                        x: "-20px"
                    }, {
                        autoAlpha: 1,
                        x: "+=20px",
                        ease: Expo.easeInOut
                    }, "start"), this.isSoundMuted ? (this.experiment.unmute(), this.soundAnim.direction = !1, e.fromTo(this.soundAnim, .5, {
                        radius: -Math.PI / 2
                    }, {
                        radius: 1.5 * Math.PI,
                        ease: Power2.easeInOut
                    }, "start")) : (this.experiment.mute(), this.soundAnim.direction = !0, e.fromTo(this.soundAnim, .5, {
                        radius: -2.5 * Math.PI
                    }, {
                        radius: -Math.PI / 2,
                        ease: Power2.easeInOut
                    }, "start"))
                }
            }, {
                key: "soundLeave",
                value: function() {
                    var t = this;
                    this.isSoundAnimating = !0;
                    var e = new TimelineMax({
                        onUpdate: function() {
                            t.drawSoundButton()
                        },
                        onComplete: function() {
                            t.isSoundAnimating = !1, t.isMouseOverSound && t.soundEnter()
                        }
                    });
                    window.APP.isMobile || e.to(this.$soundText, .4, {
                        autoAlpha: 0,
                        x: "-=20px",
                        ease: Expo.easeInOut
                    }, "start"), this.isSoundMuted ? (this.experiment.mute(), this.soundAnim.direction = !0, e.fromTo(this.soundAnim, .5, {
                        radius: -2.5 * Math.PI
                    }, {
                        radius: -Math.PI / 2,
                        ease: Power2.easeInOut
                    }, "start")) : (this.experiment.unmute(), this.soundAnim.direction = !1, e.fromTo(this.soundAnim, .5, {
                        radius: -Math.PI / 2
                    }, {
                        radius: 1.5 * Math.PI,
                        ease: Power2.easeInOut
                    }, "start"))
                }
            }, {
                key: "onSoundEnter",
                value: function(t) {
                    this.isMouseOverSound = !0, this.isSoundAnimating || this.soundEnter()
                }
            }, {
                key: "onSoundLeave",
                value: function(t) {
                    return this.ignoreNextSoundLeave ? void(this.ignoreNextSoundLeave = !1) : (this.isMouseOverSound = !1, void(this.isSoundAnimating || this.soundLeave()))
                }
            }, {
                key: "onSoundClick",
                value: function(t) {
                    return t.preventDefault(), M.default.trackInteraction("Splash", "click", "SoundButton"), this.isSoundMuted = !this.isSoundMuted, this.isSoundMuted ? window.APP.isMobile ? (this.soundLeave(), this.experiment.mute()) : (TweenMax.to(this.$soundText, .4, {
                        autoAlpha: 0,
                        x: "-=20px",
                        ease: Expo.easeInOut
                    }, "start"), this.experiment.mute()) : window.APP.isMobile ? (this.soundLeave(), this.experiment.unmute()) : (TweenMax.to(this.$soundText, .4, {
                        autoAlpha: 0,
                        x: "-=20px",
                        ease: Expo.easeInOut
                    }, "start"), this.experiment.unmute()), this.ignoreNextSoundLeave = !0, !1
                }
            }, {
                key: "onLandscapeOverlayActive",
                value: function() {
                    this.experiment.pause()
                }
            }, {
                key: "onLandscapeOverlayNotActive",
                value: function() {
                    this.experiment.resume()
                }
            }]), e
        }(p.default);
    e.default = new T
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = e.setupUniTimelines = function(t) {
        var e = t.timelines.show = new TimelineMax({
            paused: !0,
            immediateRender: !0
        });
        e.set(t.$node, {
            display: "block",
            autoAlpha: 1
        }, "start").fromTo(t.$logoFakeLine, .2, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power2.easeInOut,
            repeat: 4,
            yoyo: !0
        }, "start+=.2").fromTo(t.$logoFakeLine, .5, {
            right: "100%"
        }, {
            right: "0%",
            ease: Expo.easeInOut
        }, "start+=1.6").from(t.$logoContainer, .5, {
            width: "0px",
            ease: Expo.easeInOut
        }, "start+=1.6").to(t.$logoFakeLine, .2, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start+=1.9").set([t.$logoRPath, t.$logoRPath2], {
            strokeDashoffset: "91",
            strokeDasharray: "91"
        }, "start").set(t.$logoFPath, {
            strokeDashoffset: "27",
            strokeDasharray: "27"
        }, "start").set(t.$logoSPath, {
            strokeDashoffset: "96",
            strokeDasharray: "96"
        }, "start").set(t.$logoHPath, {
            strokeDashoffset: "26",
            strokeDasharray: "26"
        }, "start").to(t.$logoRPath, .4, {
            strokeDashoffset: "0",
            ease: Power0.easeNone
        }, "start+=2").to(t.$logoFPath, .4, {
            strokeDashoffset: "0",
            ease: Power0.easeNone
        }, "start+=2.2").to(t.$logoRPath2, .4, {
            strokeDashoffset: "0",
            ease: Power0.easeNone
        }, "start+=2.4").to(t.$logoSPath, .4, {
            strokeDashoffset: "0",
            ease: Power0.easeNone
        }, "start+=2.6").to(t.$logoHPath, .4, {
            strokeDashoffset: "0",
            ease: Power0.easeNone
        }, "start+=2.8");
        var n = t.timelines.hide = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        n.to(t.$node, .2, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }).set(t.$node, {
            display: "none"
        });
        var i = (DOMUtils.hasClass(document.body, "dark-mode") ? "#fff" : "#000", t.timelines.showMenu = new TimelineMax({
            paused: !0,
            immediateRender: !0
        }));
        i.set(t.$menu, {
            display: "block"
        }, "start").set(t.$menuContainer, {
            x: "-50%",
            y: "-50%"
        }, "start").set(t.$menuButtonStripes, {
            right: "10px",
            left: "auto"
        }, "start").to(t.$menuButtonStripes[0], .3, {
            width: "0%",
            ease: Expo.easeInOut
        }, "start").to(t.$menuButtonStripes[1], .3, {
            width: "0%",
            ease: Expo.easeInOut
        }, "start+=.1").set(t.$menuButton, {
            rotation: "45deg"
        }, "start+=.4").set(t.$menuButtonStripes, {
            top: "50%",
            left: "50%",
            right: "auto"
        }, "start+=.4").set(t.$menuButtonStripes[0], {
            width: "50%",
            x: "-200%",
            y: "-50%"
        }, "start+=.4").set(t.$menuButtonStripes[1], {
            width: "2px",
            height: "50%",
            x: "-50%",
            y: "-200%"
        }, "start+=.4").to(t.$menuButtonStripes[0], .3, {
            x: "-50%"
        }, "start+=.4").to(t.$menuButtonStripes[1], .3, {
            y: "-50%"
        }, "start+=.5").set(t.$menu, {
            autoAlpha: 1
        }, "start").fromTo(t.$someLabel, .3, {
            autoAlpha: 0,
            y: "20px"
        }, {
            autoAlpha: .5,
            y: "0px",
            ease: Power2.easeOut
        }, "start+=.3").fromTo(t.$someLinksContainer, .3, {
            autoAlpha: 0,
            y: "20px"
        }, {
            autoAlpha: 1,
            y: "0px",
            ease: Power2.easeOut
        }, "start+=.4").staggerFromTo(t.$menuLinks, .3, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power0.easeNone
        }, .1, "start+=.3");
        var o = t.timelines.hideMenu = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        o.to(t.$menuButtonStripes[0], .3, {
            x: "100%",
            ease: Expo.easeIn
        }, "start").to(t.$menuButtonStripes[1], .3, {
            y: "100%",
            ease: Expo.easeIn
        }, "start+=.1").set(t.$menuButton, {
            rotation: "0deg"
        }, "start+=.4").set(t.$menuButtonStripes, {
            width: "0%",
            height: "2px",
            left: "10px",
            right: "auto",
            x: "0%",
            y: "0%"
        }, "start+=.4").set(t.$menuButtonStripes[0], {
            top: "42%"
        }, "start+=.4").set(t.$menuButtonStripes[1], {
            top: "58%"
        }, "start+=.4").to(t.$menuButtonStripes[0], .3, {
            width: "50%",
            ease: Expo.easeInOut
        }, "start+=.4").to(t.$menuButtonStripes[1], .3, {
            width: "50%",
            ease: Expo.easeInOut
        }, "start+=.5").to(t.$someLabel, .3, {
            autoAlpha: 0,
            y: "20px",
            ease: Power2.easeOut
        }, "start+=.2").to(t.$someLinksContainer, .3, {
            autoAlpha: 0,
            y: "20px",
            ease: Power2.easeOut
        }, "start+=.1")
    };
    e.setupMobileTimelines = function(t) {
        n(t)
    }, e.setupDesktopTimelines = function(t) {
        n(t);
        var e = t.timelines.closeEnter = new TimelineMax({
            paused: !0,
            immediateRender: !0
        });
        e.to(t.$closeButtonStripes[0], .3, {
            x: "100%",
            ease: Expo.easeIn
        }, "start").set(t.$closeButtonStripes[0], {
            x: "-200%"
        }, "start+=.3").to(t.$closeButtonStripes[0], .3, {
            x: "-50%",
            ease: Expo.easeOut
        }, "start+=.3").to(t.$closeButtonStripes[1], .3, {
            y: "100%",
            ease: Expo.easeIn
        }, "start+=.1").set(t.$closeButtonStripes[1], {
            y: "-200%"
        }, "start+=.4").to(t.$closeButtonStripes[1], .3, {
            y: "-50%",
            ease: Expo.easeOut
        }, "start+=.4");
        var i = t.timelines.menuEnter = new TimelineMax({
            paused: !0,
            immediateRender: !0
        });
        i.set(t.$menuButtonStripes, {
            right: "10px",
            left: "auto"
        }, "start").to(t.$menuButtonStripes[0], .3, {
            width: "0%",
            ease: Expo.easeInOut
        }, "start").set(t.$menuButtonStripes[0], {
            left: "10px",
            right: "auto"
        }, "start+=.3").to(t.$menuButtonStripes[0], .3, {
            width: "50%",
            ease: Expo.easeInOut
        }, "start+=.3").to(t.$menuButtonStripes[1], .3, {
            width: "0%",
            ease: Expo.easeInOut
        }, "start+=.1").set(t.$menuButtonStripes[1], {
            left: "10px",
            right: "auto"
        }, "start+=.4").to(t.$menuButtonStripes[1], .3, {
            width: "50%",
            ease: Expo.easeInOut
        }, "start+=.4");
        var o = t.timelines.menuCloseEnter = new TimelineMax({
            paused: !0,
            immediateRender: !1
        });
        o.to(t.$menuButtonStripes[0], .3, {
            x: "100%",
            ease: Expo.easeIn
        }, "start").set(t.$menuButtonStripes[0], {
            x: "-200%"
        }, "start+=.3").to(t.$menuButtonStripes[0], .3, {
            x: "-50%",
            ease: Expo.easeOut
        }, "start+=.3").to(t.$menuButtonStripes[1], .3, {
            y: "100%",
            ease: Expo.easeIn
        }, "start+=.1").set(t.$menuButtonStripes[1], {
            y: "-200%"
        }, "start+=.4").to(t.$menuButtonStripes[1], .3, {
            y: "-50%",
            ease: Expo.easeOut
        }, "start+=.4");
        var r = t.timelines.logoEnter = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onComplete: function() {
                t.isMouseOverLogo || t.logoLeave()
            }
        });
        r.to(t.$logoRPath, .65, {
            strokeDashoffset: "-91",
            ease: Power2.easeInOut
        }, "start").to(t.$logoFPath, .65, {
            strokeDashoffset: "-27",
            ease: Power2.easeInOut
        }, "start+=.1").to(t.$logoRPath2, .65, {
            strokeDashoffset: "-91",
            ease: Power2.easeInOut
        }, "start+=.2").to(t.$logoSPath, .65, {
            strokeDashoffset: "-96",
            ease: Power2.easeInOut
        }, "start+=.3").to(t.$logoHPath, .65, {
            strokeDashoffset: "-26",
            ease: Power2.easeInOut
        }, "start+=.4");
        var s = t.timelines.logoLeave = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onComplete: function() {
                t.isMouseOverLogo && t.logoEnter()
            }
        });
        s.fromTo(t.$logoRPath, .8, {
            strokeDashoffset: "91"
        }, {
            strokeDashoffset: "0",
            ease: Power2.easeInOut
        }, "start").fromTo(t.$logoFPath, .8, {
            strokeDashoffset: "27"
        }, {
            strokeDashoffset: "0",
            ease: Power2.easeInOut
        }, "start+=.1").fromTo(t.$logoRPath2, .8, {
            strokeDashoffset: "91"
        }, {
            strokeDashoffset: "0",
            ease: Power2.easeInOut
        }, "start+=.2").fromTo(t.$logoSPath, .8, {
            strokeDashoffset: "96"
        }, {
            strokeDashoffset: "0",
            ease: Power2.easeInOut
        }, "start+=.3").fromTo(t.$logoHPath, .8, {
            strokeDashoffset: "26"
        }, {
            strokeDashoffset: "0",
            ease: Power2.easeInOut
        }, "start+=.4")
    }, e.mobileMenuLinkClick = function(t, e) {
        e.getBoundingClientRect();
        t.deactivateMouseMove(), t.inMenuClickTransition = !0;
        var n = new TimelineMax({
            onComplete: function() {
                var n = e.getAttribute("href");
                t.hideMenu(!0, n), t.inMenuClickTransition = !1
            }
        });
        n.staggerTo(t.$menuLinks, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, .1, "start")
    }, e.desktopMenuLinkClick = function(t, e) {
        var n = e.getBoundingClientRect(),
            i = (e.offsetLeft, n.left + n.width / 2),
            o = "+=" + (window.innerWidth / 2 - i) + "px";
        t.deactivateMouseMove(), t.inMenuClickTransition = !0;
        var r = -25,
            s = {
                left: 0
            },
            a = Array.prototype.slice.call(t.$menuLinks, 0).filter(function(t) {
                return !t.isSameNode(e)
            }),
            u = t.isDark ? ["rgba(0,0,0,1)", "rgba(255,255,255,.5)"] : ["rgba(255,255,255,1)", "rgba(0,0,0,.5)"],
            c = new TimelineMax({
                onComplete: function() {
                    var n = e.getAttribute("href");
                    t.hideMenu(!0, n), t.inMenuClickTransition = !1
                }
            });
        c.to(t.$menuContainer, 1, {
            x: o,
            ease: Power4.easeInOut
        }, "start"), c.to(a, .3, {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "start"), c.to(s, .7, {
            left: 100 - r,
            ease: Power1.easeInOut,
            onUpdate: function() {
                TweenMax.set(e, {
                    "background-image": "linear-gradient(to right, " + u[0] + " " + (s.left + r) + "%, " + u[1] + " " + s.left + "%)"
                })
            }
        }, "start+=1")
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.showPrevDesktop = e.showPrevMobile = e.showNextDesktop = e.showNextMobile = e.desktopShow = e.mobileShow = e.setupDesktopTimelines = e.setupMobileTimelines = e.setupTimelines = void 0;
    var o = n(19),
        r = (i(o), e.setupTimelines = function(t) {
            var e = t.timelines.hide = new TimelineMax({
                paused: !0,
                immediateRender: !1
            });
            e.to(t.$node, .2, {
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "start").set(Array.prototype.slice.call(t.$videoMasks).concat(Array.prototype.slice.call(t.$imageMasks)), {
                autoAlpha: 0
            }, "start+=.2").set(t.$videos, {
                display: "none"
            }, "start+=.2")
        });
    e.setupMobileTimelines = function(t) {
        r(t)
    }, e.setupDesktopTimelines = function(t) {
        r(t);
        var e = t.timelines.projectIn = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onComplete: function() {
                t.isProjectLinkAnimating = !1, t.isMouseOverProjectLink || t.projectLinkLeave()
            }
        });
        e.to(t.$projectLinkLine, .4, {
            width: "100%",
            right: 0,
            left: "auto",
            ease: Power2.easeInOut
        }, "start").to(t.$projectLinkDarkLine, .3, {
            width: "100%",
            ease: Power2.easeInOut
        }, "start+=.2");
        var n = t.timelines.projectOut = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onComplete: function() {
                t.isProjectLinkAnimating = !1, t.isMouseOverProjectLink && t.projectLinkEnter()
            }
        });
        n.to(t.$projectLinkLine, .3, {
            width: "0%",
            right: 0,
            left: "auto",
            ease: Power2.easeIn
        }, "start").to(t.$projectLinkDarkLine, .3, {
            width: "0%",
            right: 0,
            left: "auto",
            ease: Power2.easeIn
        }, "start").set([t.$projectLinkLine, t.$projectLinkDarkLine], {
            left: 0,
            right: "auto"
        }, "start+=.3").to(t.$projectLinkLine, .2, {
            width: "40px",
            ease: Power3.easeOut
        }, "start+=.3");
        var i = t.timelines.siteIn = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onComplete: function() {
                t.isSiteLinkAnimating = !1, t.isMouseOverSiteLink || t.siteLinkLeave()
            }
        });
        i.to(t.$siteLinkLine, .4, {
            width: "100%",
            right: 0,
            left: "auto",
            ease: Power2.easeInOut
        }, "start").to(t.$siteLinkDarkLine, .3, {
            width: "100%",
            ease: Power2.easeInOut
        }, "start+=.2");
        var o = t.timelines.siteOut = new TimelineMax({
            paused: !0,
            immediateRender: !1,
            onComplete: function() {
                t.isSiteLinkAnimating = !1, t.isMouseOverSiteLink && t.siteLinkEnter()
            }
        });
        o.to(t.$siteLinkLine, .3, {
            width: "0%",
            right: 0,
            left: "auto",
            ease: Power2.easeIn
        }, "start").to(t.$siteLinkDarkLine, .3, {
            width: "0%",
            right: 0,
            left: "auto",
            ease: Power2.easeIn
        }, "start").set([t.$siteLinkLine, t.$siteLinkDarkLine], {
            left: 0,
            right: "auto"
        }, "start+=.3").to(t.$siteLinkLine, .2, {
            width: "40px",
            ease: Power3.easeOut
        }, "start+=.3")
    }, e.mobileShow = function(t) {
        return t.timelines.hide.pause(), new Promise(function(e, n) {
            t.collapseNumberOverlay(!1), t.expandNumberOverlay();
            var i = t.timelines.show = new TimelineMax({
                paused: !1,
                immediateRender: !0,
                onComplete: function() {
                    e(), t.vScroll.on(t.onScroll)
                }
            });
            i.set(t.$node, {
                autoAlpha: 1
            }, "start").set(t.$imageMasks[0], {
                autoAlpha: 1
            }, "start").set(t.$images[0], {
                y: "-140%",
                x: "-50%"
            }, "start").fromTo(t.$imageMasks[0], .5, {
                y: "100%"
            }, {
                y: "0%",
                ease: Expo.easeInOut
            }, "start").fromTo(t.$images[0], .5, {
                y: "-140%"
            }, {
                y: "-50%",
                ease: Expo.easeInOut
            }, "start").from(t.$headline, .3, {
                x: "-40px",
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "start").from(t.$client, .3, {
                x: "-20px",
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "start+=0.1").from(t.$projectLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "start+=0.3").from(t.$projectLinkLine, .3, {
                width: 0,
                ease: Expo.easeInOut
            }, "start+=0.6").from(t.$scrollUpArrow, .3, {
                y: "+=150%",
                ease: Expo.easeInOut
            }, "start+=.6").from(t.$scrollDownArrow, .3, {
                y: "-=150%",
                ease: Expo.easeInOut
            }, "start+=.6")
        })
    }, e.desktopShow = function(t) {
        return t.timelines.hide.pause(), new Promise(function(e, n) {
            t.prepFadeIn();
            var i = t.timelines.show = new TimelineMax({
                paused: !1,
                immediateRender: !0,
                onComplete: function() {
                    e()
                }
            });
            i.set(t.$node, {
                autoAlpha: 1
            }, "start").set(t.$imageMasks[0], {
                y: "100%",
                autoAlpha: 1
            }, "start").set(t.$images[0], {
                y: "-90%"
            }, "start").set(t.$videos, {
                display: "block"
            }, "start").staggerFrom(t.$navEntries, 1, {
                bottom: "0%",
                ease: Power2.easeInOut,
                onStart: function() {}
            }, .1, "start", function() {
                t.expandNumberOverlay().then(function() {
                    t.vScroll.on(t.onScroll)
                })
            }).fromTo(t.$imageMasks[0], .5, {
                y: "100%"
            }, {
                y: "0%",
                ease: Expo.easeInOut
            }, "start+=1.5").fromTo(t.$images[0], .5, {
                y: "-90%"
            }, {
                y: "0%",
                ease: Expo.easeInOut
            }, "start+=1.5").from(t.$headline, .3, {
                y: "40px",
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "start+=1.5").from(t.$client, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "start+=1.6").from(t.$projectLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "start+=1.8").from(t.$projectLinkLine, .3, {
                width: 0,
                ease: Expo.easeInOut
            }, "start+=1.9")
        })
    }, e.showNextMobile = function(t) {
        return new Promise(function(e, n) {
            var i = t.activeIndex + 1;
            i >= t.projectData.length && (i = 0);
            var o = (t.projectData[t.activeIndex], t.projectData[i], Math.abs(t.currentMediaIndex - 1)),
                r = t.$images[o],
                s = t.$images[t.currentMediaIndex],
                a = t.$imageMasks[o],
                u = t.$imageMasks[t.currentMediaIndex];
            t.collapseNumberOverlay();
            var c = new TimelineMax({
                onComplete: function() {
                    e()
                }
            });
            c.add("out", 0).set(a, {
                y: "0%",
                zIndex: 1
            }, "out").set(u, {
                y: "0%",
                zIndex: 10
            }, "out").set(r, {
                y: "-40%",
                x: "-50%"
            }, "out").set(s, {
                y: "-50%",
                x: "-50%"
            }, "out").to(t.$headline, .3, {
                x: "-40px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out").to(t.$client, .3, {
                x: "-20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.1").to(t.$projectLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$projectLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.2").to(t.$siteLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$siteLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.25").to(t.$scrollUpArrow, .3, {
                y: "-=150%",
                ease: Expo.easeIn
            }, "out").add(function() {
                t.activeIndex = i, t.showCurrentProject(), t.expandNumberOverlay()
            }, "out+=.551").add("in", "out+=.552").set(t.$scrollUpArrow, {
                y: "+=300%"
            }, "in").set(a, {
                autoAlpha: 1
            }, "in").to(u, .5, {
                y: "-100%",
                ease: Expo.easeInOut
            }, "in").to(s, .5, {
                y: "40%",
                ease: Expo.easeInOut
            }, "in").to(r, .5, {
                y: "-50%",
                ease: Expo.easeInOut
            }, "in").set(u, {
                autoAlpha: 0
            }, "in+=.5").to(t.$scrollUpArrow, .3, {
                y: "-=150%",
                ease: Expo.easeOut
            }, "in").to(t.$headline, .3, {
                x: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in").to(t.$client, .3, {
                x: "0px",
                autoAlpha: .5,
                ease: Power2.easeOut
            }, "in+=.1").to(t.$projectLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.2").to(t.$projectLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.5").to(t.$siteLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.25").to(t.$siteLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.55")
        })
    }, e.showNextDesktop = function(t) {
        return new Promise(function(e, n) {
            var i = t.activeIndex + 1;
            i >= t.projectData.length && (i = 0);
            var o = t.projectData[t.activeIndex],
                r = t.projectData[i],
                s = Math.abs(t.currentMediaIndex - 1),
                a = "video" === r["background-type"] ? t.$videos[s] : t.$images[s],
                u = "video" === o["background-type"] ? t.$videos[t.currentMediaIndex] : t.$images[t.currentMediaIndex],
                c = "video" === r["background-type"] ? t.$videoMasks[s] : t.$imageMasks[s],
                l = "video" === o["background-type"] ? t.$videoMasks[t.currentMediaIndex] : t.$imageMasks[t.currentMediaIndex];
            t.collapseNumberOverlay();
            var f = new TimelineMax({
                onComplete: function() {
                    console.log(t.isMouseOverProjectLink), e()
                }
            });
            f.add("out", 0).set(c, {
                y: "0%",
                zIndex: 1
            }, "out").set(l, {
                y: "0%",
                zIndex: 10
            }, "out").set(a, {
                y: "10%"
            }, "out").set(u, {
                y: "0%"
            }, "out").to(t.$headline, .3, {
                y: "-20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out").to(t.$client, .3, {
                y: "-20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.1").to(t.$projectLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$projectLink, .3, {
                y: "-20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.2").to(t.$siteLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$siteLink, .3, {
                y: "-20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.25").add(function() {
                t.activeIndex = i, t.showCurrentProject(), t.updateEntryPositions(!0).then(function() {
                    t.expandNumberOverlay()
                })
            }, "out+=.551").add("in", "out+=.552").set([t.$headline, t.$client, t.$projectLink, t.$siteLink], {
                y: "20px"
            }, "in").set([t.$projectLinkLine, t.$projectLinkDarkLine], {
                width: "0%",
                left: 0,
                right: "auto"
            }, "in").set(c, {
                autoAlpha: 1
            }, "in").to(l, .5, {
                y: "-100%",
                ease: Expo.easeInOut
            }, "in").to(u, .5, {
                y: "90%",
                ease: Expo.easeInOut
            }, "in").to(a, .5, {
                y: "0%",
                ease: Expo.easeInOut
            }, "in").set(l, {
                autoAlpha: 0
            }, "in+=.5").to(t.$headline, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in").to(t.$client, .3, {
                y: "0px",
                autoAlpha: .5,
                ease: Power2.easeOut
            }, "in+=.1").to(t.$projectLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.2").to(t.$siteLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.25").to(t.$siteLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.55"), t.isMouseOverProjectLink ? f.to(t.$projectLinkLine, .4, {
                width: "100%",
                ease: Power2.easeInOut
            }, "in+=.5").to(t.$projectLinkDarkLine, .3, {
                width: "100%",
                ease: Power2.easeInOut
            }, "in+=.7") : f.to(t.$projectLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.5")
        })
    }, e.showPrevMobile = function(t) {
        return new Promise(function(e, n) {
            var i = t.activeIndex - 1;
            i < 0 && (i = t.projectData.length - 1);
            var o = (t.projectData[t.activeIndex], t.projectData[i], Math.abs(t.currentMediaIndex - 1)),
                r = t.$images[o],
                s = t.$images[t.currentMediaIndex],
                a = t.$imageMasks[o],
                u = t.$imageMasks[t.currentMediaIndex];
            t.collapseNumberOverlay();
            var c = new TimelineMax({
                onComplete: function() {
                    e()
                }
            });
            c.add("out", 0).set(a, {
                y: "0%",
                zIndex: 1
            }, "out").set(u, {
                y: "0%",
                zIndex: 10
            }, "out").set(r, {
                y: "-60%",
                x: "-50%"
            }, "out").set(s, {
                y: "-50%",
                x: "-50%"
            }, "out").to(t.$headline, .3, {
                x: "-40px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out").to(t.$client, .3, {
                x: "-20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.1").to(t.$projectLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$projectLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.2").to(t.$siteLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$siteLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.25").to(t.$scrollDownArrow, .3, {
                y: "+=150%",
                ease: Expo.easeIn
            }, "out").add(function() {
                t.activeIndex = i, t.showCurrentProject(), t.expandNumberOverlay()
            }, "out+=.551").add("in", "out+=.552").set(t.$scrollDownArrow, {
                y: "-=300%"
            }, "in").set(a, {
                autoAlpha: 1
            }, "in").to(u, .5, {
                y: "100%",
                ease: Expo.easeInOut
            }, "in").to(s, .5, {
                y: "-140%",
                ease: Expo.easeInOut
            }, "in").to(r, .5, {
                y: "-50%",
                ease: Expo.easeInOut
            }, "in").set(u, {
                autoAlpha: 0
            }, "in+=.5").to(t.$scrollDownArrow, .3, {
                y: "+=150%",
                ease: Expo.easeOut
            }, "in").to(t.$headline, .3, {
                x: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in").to(t.$client, .3, {
                x: "0px",
                autoAlpha: .5,
                ease: Power2.easeOut
            }, "in+=.1").to(t.$projectLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.2").to(t.$projectLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.5").to(t.$siteLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.25").to(t.$siteLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.55")
        })
    }, e.showPrevDesktop = function(t) {
        return new Promise(function(e, n) {
            var i = t.activeIndex - 1;
            i < 0 && (i = t.projectData.length - 1);
            var o = t.projectData[t.activeIndex],
                r = t.projectData[i],
                s = Math.abs(t.currentMediaIndex - 1),
                a = "video" === r["background-type"] ? t.$videos[s] : t.$images[s],
                u = "video" === o["background-type"] ? t.$videos[t.currentMediaIndex] : t.$images[t.currentMediaIndex],
                c = "video" === r["background-type"] ? t.$videoMasks[s] : t.$imageMasks[s],
                l = "video" === o["background-type"] ? t.$videoMasks[t.currentMediaIndex] : t.$imageMasks[t.currentMediaIndex];
            t.collapseNumberOverlay();
            var f = new TimelineMax({
                onComplete: function() {
                    e()
                }
            });
            f.add("out", 0).set(c, {
                y: "0%",
                zIndex: 1
            }, "out").set(l, {
                y: "0%",
                zIndex: 10
            }, "out").set(a, {
                y: "-10%"
            }, "out").set(u, {
                y: "0%"
            }, "out").to(t.$headline, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out").to(t.$client, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.1").to(t.$projectLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$projectLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.2").to(t.$siteLinkLine, .3, {
                width: "0%",
                ease: Expo.easeInOut
            }, "out").to(t.$siteLink, .3, {
                y: "20px",
                autoAlpha: 0,
                ease: Power2.easeOut
            }, "out+=.25").add(function() {
                t.activeIndex = i, t.showCurrentProject(), t.updateEntryPositions(!1).then(function() {
                    t.expandNumberOverlay()
                })
            }, "out+=.551").add("in", "out+=.552").set([t.$headline, t.$client, t.$projectLink, t.$siteLink], {
                y: "-20px"
            }, "in").set([t.$projectLinkLine, t.$projectLinkDarkLine], {
                width: "0%",
                left: 0,
                right: "auto"
            }, "in").set(c, {
                autoAlpha: 1
            }, "in").to(l, .5, {
                y: "100%",
                ease: Expo.easeInOut
            }, "in").to(u, .5, {
                y: "-90%",
                ease: Expo.easeInOut
            }, "in").to(a, .5, {
                y: "0%",
                ease: Expo.easeInOut
            }, "in").set(l, {
                autoAlpha: 0
            }, "in+=.5").to(t.$headline, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in").to(t.$client, .3, {
                y: "0px",
                autoAlpha: .5,
                ease: Power2.easeOut
            }, "in+=.1").to(t.$projectLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.2").to(t.$siteLink, .3, {
                y: "0px",
                autoAlpha: 1,
                ease: Power2.easeOut
            }, "in+=.25").to(t.$siteLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.55"), t.isMouseOverProjectLink ? f.to(t.$projectLinkLine, .4, {
                width: "100%",
                ease: Power2.easeInOut
            }, "in+=.5").to(t.$projectLinkDarkLine, .3, {
                width: "100%",
                ease: Power2.easeInOut
            }, "in+=.7") : f.to(t.$projectLinkLine, .3, {
                width: "40px",
                ease: Expo.easeInOut
            }, "in+=.5")
        })
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        c = n(465),
        l = (o(c), n(46)),
        f = o(l),
        h = n(19),
        p = o(h),
        d = n(42),
        v = o(d),
        m = (n(105), n(35)),
        g = o(m),
        y = n(61),
        w = n(263),
        x = i(w),
        b = n(32),
        P = o(b),
        M = n(182),
        O = o(M),
        k = n(79),
        E = o(k),
        T = n(47),
        _ = o(T),
        A = "work",
        L = 300,
        $ = function(t) {
            function e() {
                r(this, e);
                var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, DOMUtils.q("section.work")));
                return t.currentDelta = 0, t.activeIndex = 0, t.currentMediaIndex = 1, (0, P.default)(t), t.preload().then(t.setup.bind(t)), t
            }
            return a(e, t), u(e, [{
                key: "preload",
                value: function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        g.default.loadAll([{
                            url: "assets/data/work.json",
                            type: m.Types.JSON
                        }]).then(function(n) {
                            t.projectData = n[0].projects;
                            var i = [];
                            t.projectData.forEach(function(t) {
                                if (t.assets) {
                                    var e = t.assets.map(function(t) {
                                        return {
                                            url: t,
                                            type: m.Types.IMAGE
                                        }
                                    });
                                    i = i.concat(e)
                                }
                                window.APP.isMobile && i.push({
                                    url: t["mobile-background"],
                                    type: m.Types.IMAGE
                                })
                            }), g.default.loadAll(i).then(function(t) {
                                e()
                            })
                        })
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    var t = this;
                    window.APP.isMobile ? this.setupSVGs().then(function() {
                        t.setupDOMNodes(), t.setupTimelines(), t.setupListeners()
                    }) : (this.setupDOMNodes(), this.setupTimelines(), this.setupListeners())
                }
            }, {
                key: "setupSVGs",
                value: function() {
                    return E.default.inject(DOMUtils.q(".svg", this.$node))
                }
            }, {
                key: "setupDOMNodes",
                value: function() {
                    this.$nav = DOMUtils.q(".navigation-container", this.$node), this.$navParent = DOMUtils.q("ul", this.$nav), this.$navEntries = DOMUtils.q("li", this.$nav), this.lineCenterIndex = Math.floor(this.$navEntries.length / 2), this.$numberOverlay = DOMUtils.q(".number-overlay", this.$nav), this.$numberCurrent = DOMUtils.q(".number", this.$numberOverlay), this.$numberTotal = DOMUtils.q(".total", this.$numberOverlay), this.$textContainer = DOMUtils.q(".text-container", this.$node), this.$headline = DOMUtils.q(".text-container .headline", this.$node), this.$client = DOMUtils.q(".text-container .client", this.$node), this.$projectLink = DOMUtils.q(".text-container .project-link", this.$node), this.$projectLinkLine = DOMUtils.q(".line", this.$projectLink), this.$projectLinkDarkLine = DOMUtils.q(".dark-line", this.$projectLink), this.$projectLinkMask = DOMUtils.q(".link-mask", this.$siteLink), this.$siteLink = DOMUtils.q(".text-container .site-link", this.$node), this.$siteLinkLine = DOMUtils.q(".line", this.$siteLink), this.$siteLinkDarkLine = DOMUtils.q(".dark-line", this.$siteLink), this.$siteLinkMask = DOMUtils.q(".link-mask", this.$siteLink), this.$previewContainer = DOMUtils.q(".preview-container", this.$node), this.$mediaMasks = DOMUtils.q(".mask", this.$previewContainer), this.$videoMasks = DOMUtils.q(".mask.video", this.$previewContainer), this.$videos = DOMUtils.q(".mask.video video", this.$previewContainer), this.$imageMasks = DOMUtils.q(".mask.image", this.$previewContainer), this.$images = DOMUtils.q(".mask.image img", this.$previewContainer), this.$scrollIndicator = DOMUtils.q(".scroll-indicator-container", this.$node), this.$scrollUpArrow = DOMUtils.q(".up-arrow", this.$scrollIndicator), this.$scrollDownArrow = DOMUtils.q(".down-arrow", this.$scrollIndicator)
                }
            }, {
                key: "setupTimelines",
                value: function() {
                    window.APP.isMobile ? x.setupMobileTimelines(this) : x.setupDesktopTimelines(this)
                }
            }, {
                key: "setupListeners",
                value: function() {
                    this.vScroll = new O.default({
                        limitInertia: !1,
                        mouseMultiplier: 1,
                        touchMultiplier: 10,
                        firefoxMultiplier: 30,
                        preventTouch: !0
                    }), p.default.addEventListener(d.Events.UPDATE, this.onRouterUpdate), p.default.addEventListener(y.Events.OPEN_MENU, this.onOpenMenu), p.default.addEventListener(y.Events.CLOSE_MENU, this.onCloseMenu), DOMUtils.on(this.$projectLink, "click", this.onProjectLinkClick), DOMUtils.on(this.$siteLink, "click", this.onSiteLinkClick), window.APP.isMobile || (DOMUtils.on(this.$previewContainer, "click", this.onPreviewClick), DOMUtils.on(this.$previewContainer, "mouseenter", this.onProjectLinkMouseEnter), DOMUtils.on(this.$previewContainer, "mouseleave", this.onProjectLinkMouseLeave), DOMUtils.on(this.$projectLink, "mouseenter", this.onProjectLinkMouseEnter), DOMUtils.on(this.$projectLink, "mouseleave", this.onProjectLinkMouseLeave), DOMUtils.on(this.$siteLink, "mouseenter", this.onSiteLinkMouseEnter), DOMUtils.on(this.$siteLink, "mouseleave", this.onSiteLinkMouseLeave))
                }
            }, {
                key: "prepFadeIn",
                value: function() {
                    this.collapseNumberOverlay(!1), this.navEntryPositons = [];
                    var t = 50;
                    TweenMax.set(this.$navEntries, {
                        x: "0px",
                        width: "15px"
                    }), TweenMax.set(this.$navEntries[this.lineCenterIndex], {
                        bottom: "50%",
                        top: "auto",
                        y: "0%"
                    });
                    for (var e = this.lineCenterIndex + 1, n = this.$navEntries.length; e < n; e++) t -= .5 * t, TweenMax.set(this.$navEntries[e], {
                        bottom: Math.floor(t) + "%",
                        top: "auto",
                        y: "0%"
                    });
                    var i = 50;
                    t = 50;
                    for (var o = this.lineCenterIndex - 1; o >= 0; o--) i *= .5, t += i, TweenMax.set(this.$navEntries[o], {
                        bottom: Math.floor(t) + "%",
                        top: "auto",
                        y: "0%"
                    })
                }
            }, {
                key: "show",
                value: function() {
                    return window.APP.isMobile ? x.mobileShow(this) : x.desktopShow(this)
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    return this.timelines.show.pause(), new Promise(function(e, n) {
                        t.vScroll.off(t.onScroll), window.clearTimeout(t.videoBackgroundTimeout), t.timelines.hide.eventCallback("onComplete", e), t.timelines.hide.restart(!0, !1)
                    })
                }
            }, {
                key: "showNextProject",
                value: function() {
                    return window.APP.isMobile ? x.showNextMobile(this) : x.showNextDesktop(this)
                }
            }, {
                key: "showPrevProject",
                value: function() {
                    return window.APP.isMobile ? x.showPrevMobile(this) : x.showPrevDesktop(this)
                }
            }, {
                key: "showCurrentProject",
                value: function() {
                    var t = this,
                        e = this.projectData[this.activeIndex];
                    DOMUtils.html(this.$headline, e.title), DOMUtils.text(this.$client, e.client), this.$projectLink.href = "/" + e["project-url"], e.link ? (this.$siteLink.href = e.link, TweenMax.set(this.$siteLink, {
                        display: "block"
                    })) : TweenMax.set(this.$siteLink, {
                        display: "none"
                    }), window.clearTimeout(this.videoBackgroundTimeout), window.APP.isMobile ? (this.currentMediaIndex = Math.abs(this.currentMediaIndex - 1), this.$images[this.currentMediaIndex].src = e["mobile-background"]) : "video" === e["background-type"] ? (this.currentMediaIndex = Math.abs(this.currentMediaIndex - 1), this.$videos[this.currentMediaIndex].src = e.background, window.APP.isMobile || (this.videoBackgroundTimeout = window.setTimeout(function() {
                        t.$videos[t.currentMediaIndex].play()
                    }, 2e3))) : "image" === e["background-type"] && (this.currentMediaIndex = Math.abs(this.currentMediaIndex - 1), this.$images[this.currentMediaIndex].src = e.background), _.default.trackInteraction("Work", "show", this.activeIndex)
                }
            }, {
                key: "collapseNumberOverlay",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (t) {
                        var e = new TimelineMax;
                        e.to(this.$numberCurrent, .3, {
                            autoAlpha: 0,
                            x: "-=15px",
                            ease: Power2.easeIn
                        }, "start"), e.to(this.$navEntries[this.lineCenterIndex], .3, {
                            width: "80px",
                            x: "0px",
                            ease: Power2.easeIn
                        }, "start"), e.to(this.$navEntries[this.lineCenterIndex], .3, {
                            width: "15px",
                            ease: Power2.easeOut
                        }, "start+=.3"), e.to(this.$numberTotal, .3, {
                            autoAlpha: 0,
                            x: "-=15px"
                        }, "start+=.15")
                    } else TweenMax.set(this.$numberCurrent, {
                        autoAlpha: 0
                    }), TweenMax.set(this.$numberTotal, {
                        autoAlpha: 0
                    }), TweenMax.set(this.$navEntries[this.lineCenterIndex], {
                        width: "15px"
                    })
                }
            }, {
                key: "expandNumberOverlay",
                value: function() {
                    var t = this,
                        e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return new Promise(function(n) {
                        if (DOMUtils.text(t.$numberCurrent, "0" + (t.activeIndex + 1)), e) {
                            var i = new TimelineMax({
                                onComplete: function() {
                                    n()
                                }
                            });
                            i.to(t.$navEntries[t.lineCenterIndex], .3, {
                                width: "80px",
                                ease: Power2.easeIn
                            }, "start"), i.to(t.$navEntries[t.lineCenterIndex], .3, {
                                x: "30px",
                                width: "65px",
                                ease: Power2.easeOut
                            }, "start+=.3"), i.fromTo(t.$numberTotal, .3, {
                                autoAlpha: 0,
                                x: "-=15px"
                            }, {
                                autoAlpha: .2,
                                x: "0px",
                                ease: Power2.easeOut
                            }, "start+=.2"), i.fromTo(t.$numberCurrent, .3, {
                                autoAlpha: 0,
                                x: "-=15px"
                            }, {
                                autoAlpha: 1,
                                x: "0px",
                                ease: Power2.easeOut
                            }, "start+=.3")
                        } else TweenMax.set(t.$numberCurrent, {
                            autoAlpha: 1
                        }), TweenMax.set(t.$numberTotal, {
                            autoAlpha: .2
                        }), TweenMax.set(t.$navEntries[t.lineCenterIndex], {
                            width: "65px"
                        }), n()
                    })
                }
            }, {
                key: "updateEntryPositions",
                value: function(t) {
                    var e = this;
                    return new Promise(function(n, i) {
                        var o = new TimelineMax({
                                onComplete: function() {
                                    t ? (e.$navParent.appendChild(e.$navEntries[0]), TweenMax.set(e.$navEntries[0], {
                                        bottom: "0%"
                                    })) : (e.$navParent.insertBefore(e.$navEntries[e.$navEntries.length - 1], e.$navEntries[0]), TweenMax.set(e.$navEntries[e.$navEntries.length - 1], {
                                        bottom: "99%"
                                    })), e.$navEntries = DOMUtils.q("li", e.$nav), n()
                                }
                            }),
                            r = 50;
                        if (t) {
                            o.to(e.$navEntries[e.lineCenterIndex + 1], .5, {
                                ease: Power2.easeInOut,
                                bottom: "50%",
                                top: "auto",
                                y: "0%",
                                onComplete: function() {}
                            }, "start");
                            for (var s = e.lineCenterIndex + 2, a = e.$navEntries.length; s < a; s++) r -= .5 * r, o.to(e.$navEntries[s], .5, {
                                ease: Power2.easeInOut,
                                bottom: Math.floor(r) + "%",
                                top: "auto",
                                y: "0%"
                            }, "start");
                            var u = 50;
                            r = 50;
                            for (var c = e.lineCenterIndex; c >= 0; c--) u *= .5, r += u, o.to(e.$navEntries[c], .5, {
                                ease: Power2.easeInOut,
                                bottom: Math.floor(r) + "%",
                                top: "auto",
                                y: "0%"
                            }, "start")
                        } else {
                            o.to(e.$navEntries[e.lineCenterIndex - 1], .5, {
                                ease: Power2.easeInOut,
                                bottom: "50%",
                                top: "auto",
                                y: "0%"
                            }, "start");
                            for (var l = e.lineCenterIndex, f = e.$navEntries.length; l < f; l++) r -= .5 * r, o.to(e.$navEntries[l], .5, {
                                ease: Power2.easeInOut,
                                bottom: Math.floor(r) + "%",
                                top: "auto",
                                y: "0%"
                            }, "start");
                            var h = 50;
                            r = 50;
                            for (var p = e.lineCenterIndex - 2; p >= 0; p--) h *= .5, r += h, o.to(e.$navEntries[p], .5, {
                                ease: Power2.easeInOut,
                                bottom: Math.floor(r) + "%",
                                top: "auto",
                                y: "0%"
                            }, "start")
                        }
                    })
                }
            }, {
                key: "onRouterUpdate",
                value: function(t) {
                    var e = this,
                        n = t.page;
                    this.isActive || n !== A || (console.log("WAIT FOR OUT -> WORK"), p.default.addEventListener(l.Events.CURR_OUT, this.onSectionCurrOut)), this.isActive && n !== A && !this.ignoreNextRouterUpdate && this.hide().then(function() {
                        e.isActive = !1, p.default.dispatchEvent(l.Events.CURR_OUT)
                    }), this.ignoreNextRouterUpdate = !1
                }
            }, {
                key: "onSectionCurrOut",
                value: function() {
                    p.default.removeEventListener(l.Events.CURR_OUT, this.onSectionCurrOut), this.currentDelta = 0, this.currentMediaIndex = 1, this.showCurrentProject(), this.isActive = !0, this.show()
                }
            }, {
                key: "onScroll",
                value: function(t) {
                    var e = this;
                    this.ignoreScroll || (this.currentDelta += t.deltaY, Math.abs(this.currentDelta) > L && (this.ignoreScroll = !0, this.currentDelta > 0 ? this.showPrevProject().then(function() {
                        e.ignoreScroll = !1
                    }) : this.showNextProject().then(function() {
                        e.ignoreScroll = !1
                    }), this.currentDelta = 0))
                }
            }, {
                key: "onProjectLinkClick",
                value: function(t) {
                    t.preventDefault(), p.default.addEventListener(l.Events.CONTENT_READY, this.onProjectContentReady), this.ignoreNextRouterUpdate = !0;
                    var e = t.currentTarget.getAttribute("href");
                    v.default.push(e), _.default.trackInteraction("Work", "click", "ProjectLink")
                }
            }, {
                key: "onPreviewClick",
                value: function(t) {
                    t.preventDefault(), p.default.addEventListener(l.Events.CONTENT_READY, this.onProjectContentReady), this.ignoreNextRouterUpdate = !0;
                    var e = this.$projectLink.getAttribute("href");
                    v.default.push(e), _.default.trackInteraction("Work", "click", "ProjectPreview")
                }
            }, {
                key: "onProjectContentReady",
                value: function(t) {
                    var e = this,
                        n = DOMUtils.q("h2", t),
                        i = n.getBoundingClientRect(),
                        o = this.$headline.getBoundingClientRect(),
                        r = this.projectData[this.activeIndex],
                        s = "video" !== r["background-type"] || window.APP.isMobile ? this.$imageMasks[this.currentMediaIndex] : this.$videoMasks[this.currentMediaIndex],
                        a = "video" !== r["background-type"] || window.APP.isMobile ? this.$images[this.currentMediaIndex] : this.$videos[this.currentMediaIndex],
                        u = new TimelineMax({
                            onComplete: function() {
                                e.prepFadeIn(), e.vScroll.off(e.onScroll)
                            }
                        });
                    u.to(this.$client, .3, {
                        autoAlpha: 0,
                        ease: Power2.easeOut
                    }, "start").to(this.$projectLinkMask, .3, {
                        width: 0,
                        ease: Power2.easeOut
                    }, "start").to(this.$siteLinkMask, .3, {
                        width: 0,
                        ease: Power2.easeOut
                    }, "start").to(s, .5, {
                        y: "-100%",
                        ease: Expo.easeInOut
                    }, "start").to(a, .5, {
                        y: "10%",
                        ease: Expo.easeInOut
                    }, "start").to(this.$navEntries, .5, {
                        width: "0px",
                        ease: Power2.easeInOut
                    }, "start").to(this.$navEntries[this.lineCenterIndex], .5, {
                        x: "0px",
                        ease: Power2.easeInOut
                    }, "start").to(this.$numberCurrent, .3, {
                        autoAlpha: 0,
                        x: "-=15px",
                        ease: Power2.easeIn
                    }, "start").to(this.$numberTotal, .3, {
                        autoAlpha: 0,
                        x: "-=15px"
                    }, "start+=.15").to(this.$headline, .5, {
                        y: "-=" + (o.top - i.top) + "px",
                        ease: Power2.easeInOut
                    }, "start+=.5").to(this.$headline, .5, {
                        x: "-=" + (o.left - i.left) + "px",
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            p.default.dispatchEvent(l.Events.CURR_OUT), e.isActive = !1
                        }
                    }, "start+=1").set(this.$node, {
                        autoAlpha: 0
                    }, "start+=1.5").set(this.$projectLinkMask, {
                        width: "auto"
                    }, "start+=1.6").set(this.$siteLinkMask, {
                        width: "auto"
                    }, "start+=1.6").set(this.$headline, {
                        y: 0,
                        x: 0
                    }, "start+=1.6")
                }
            }, {
                key: "projectLinkEnter",
                value: function() {
                    this.isProjectLinkAnimating = !0, this.timelines.projectIn.restart(!0, !1)
                }
            }, {
                key: "projectLinkLeave",
                value: function() {
                    this.isProjectLinkAnimating = !0, this.timelines.projectOut.restart(!0, !1)
                }
            }, {
                key: "onProjectLinkMouseEnter",
                value: function(t) {
                    this.isMouseOverProjectLink = !0, this.isProjectLinkAnimating || this.projectLinkEnter()
                }
            }, {
                key: "onProjectLinkMouseLeave",
                value: function(t) {
                    this.isMouseOverProjectLink = !1, this.isProjectLinkAnimating || this.projectLinkLeave()
                }
            }, {
                key: "siteLinkEnter",
                value: function() {
                    this.isSiteLinkAnimating = !0, this.timelines.siteIn.restart(!0, !1)
                }
            }, {
                key: "siteLinkLeave",
                value: function() {
                    this.isSiteLinkAnimating = !0, this.timelines.siteOut.restart(!0, !1)
                }
            }, {
                key: "onSiteLinkMouseEnter",
                value: function(t) {
                    this.isMouseOverSiteLink = !0, this.isSiteLinkAnimating || this.siteLinkEnter()
                }
            }, {
                key: "onSiteLinkMouseLeave",
                value: function(t) {
                    this.isMouseOverSiteLink = !1, this.isSiteLinkAnimating || this.siteLinkLeave()
                }
            }, {
                key: "onSiteLinkClick",
                value: function(t) {
                    _.default.trackInteraction("Work", "click", "SiteLink")
                }
            }, {
                key: "onOpenMenu",
                value: function() {
                    this.isActive && TweenMax.to(this.$node, .5, {
                        autoAlpha: 0
                    })
                }
            }, {
                key: "onCloseMenu",
                value: function(t) {
                    var e = t.wasLink,
                        n = t.page;
                    !e && this.isActive || this.isActive && e && n === A ? TweenMax.to(this.$node, .5, {
                        autoAlpha: 1
                    }) : this.isActive && e && n !== A && (this.isActive = !1, this.timelines.hide.progress(1, !1))
                }
            }]), e
        }(f.default);
    e.default = new $
}, , , , , function(t, e) {
    "use strict";

    function n(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = function() {
            function t() {
                i(this, t), window.DOMUtils = this
            }
            return o(t, [{
                key: "q",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
                        n = e.querySelectorAll(t);
                    return 1 === n.length ? n[0] : n
                }
            }, {
                key: "text",
                value: function(t, e) {
                    return "undefined" == typeof e ? "string" == typeof t.textContent ? t.textContent : t.innerText : void("string" == typeof t.textContent ? t.textContent = e : t.innerText = e)
                }
            }, {
                key: "html",
                value: function(t, e) {
                    return "undefined" == typeof e ? t.innerHTML : void(t.innerHTML = e)
                }
            }, {
                key: "create",
                value: function(t, e) {
                    var n = document.createElement(t);
                    Object.keys(e).forEach(function(t) {
                        n.setAttribute(t, e[t])
                    });
                    return n
                }
            }, {
                key: "wrap",
                value: function(t, e, n) {
                    var i = t.parentElement.innerHTML,
                        o = Object.keys(n).map(function(t) {
                            return t + '="' + n[t] + '"'
                        }),
                        r = "<" + e + " " + o.join(" ") + "> " + i + " </" + e + ">";
                    t.parentElement.innerHTML = r
                }
            }, {
                key: "addClass",
                value: function(t, e) {
                    t.classList ? t.classList.add(e) : t.className += " " + e
                }
            }, {
                key: "removeClass",
                value: function(t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e + "(\\b|$)", "gi"), " ")
                }
            }, {
                key: "toggleClass",
                value: function(t, e) {
                    this.hasClass(t, e) ? this.removeClass(t, e) : this.addClass(t, e)
                }
            }, {
                key: "hasClass",
                value: function(t, e) {
                    return t.classList ? t.classList.contains(e) : t.className.indexOf(e) >= 0
                }
            }, {
                key: "index",
                value: function(t) {
                    return "undefined" == typeof t.parentNode.children ? Array.prototype.filter.call(t.parentNode.childNodes, function(t) {
                        return t.nodeType === Node.ELEMENT_NODE
                    }).indexOf(t) : Array.prototype.indexOf.call(t.parentNode.children, t)
                }
            }, {
                key: "on",
                value: function(t, e, i) {
                    t instanceof NodeList || t instanceof Array ? [].concat(n(t)).forEach(function(t) {
                        return t.addEventListener(e, i, !1)
                    }) : t.addEventListener(e, i, !1)
                }
            }, {
                key: "off",
                value: function(t, e, i) {
                    t instanceof NodeList || t instanceof Array ? [].concat(n(t)).forEach(function(t) {
                        return t.removeEventListener(e, i)
                    }) : t.removeEventListener(e, i)
                }
            }, {
                key: "one",
                value: function(t, e, n) {
                    var i = this,
                        o = function o(r) {
                            n(r), i.off(t, e, o)
                        };
                    this.on(t, e, o)
                }
            }]), t
        }();
    e.default = new r
}, function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = function() {
            function t() {
                n(this, t), this.listeners = {}
            }
            return i(t, [{
                key: "addEventListener",
                value: function(t, e) {
                    "undefined" == typeof this.listeners[t] && (this.listeners[t] = []), this.listeners[t].indexOf(e) === -1 && this.listeners[t].push(e)
                }
            }, {
                key: "removeEventListener",
                value: function(t, e) {
                    if ("undefined" != typeof this.listeners[t]) {
                        var n = this.listeners[t].indexOf(e);
                        n !== -1 && this.listeners[t].splice(n, 1)
                    }
                }
            }, {
                key: "dispatchEvent",
                value: function(t, e) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (n && console.log("EventDispatcher.dispatchEvent", t, "Data:", e), "undefined" != typeof this.listeners[t]) {
                        var i = this.listeners[t].slice(0);
                        i.forEach(function(t) {
                            t(e)
                        })
                    }
                }
            }]), t
        }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    console.log("Hey curious visitor :)"), console.log("Thank you for checking out our site!"), console.log("If you have feedback or questions or just want to talk, just hit us up on Twitter: @refreshStu"), console.log("We also want to thank Hello Monday, Watson, Resn, Active Theory, Ultranoir, Jam3 and all the other amazing agencies for their work and for the inspiration they give us!"), console.log = function() {}, console.warn = function() {}, console.time = function() {}, console.timeEnd = function() {}
}, function(t, e, n) {
    (function(t) {
        "use strict";

        function e(t, e, n) {
            t[e] || Object[i](t, e, {
                writable: !0,
                configurable: !0,
                value: n
            })
        }
        if (n(454), n(603), n(274), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        t._babelPolyfill = !0;
        var i = "defineProperty";
        e(String.prototype, "padLeft", "".padStart), e(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t) {
            [][t] && e(Array, t, Function.call.bind([][t]))
        })
    }).call(e, function() {
        return this
    }())
}, function(t, e) {
    "use strict";

    function n(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var i = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!t) return console.warn("bindAll requires at least one argument.");
        var e = Array.prototype.slice.call(arguments, 1);
        if (0 === e.length)
            for (var r in t) o.call(t, r) && "function" == typeof t[r] && "[object Function]" == i.call(t[r]) && e.push(r);
        for (var s = 0; s < e.length; s++) {
            var a = e[s];
            t[a] = n(t[a], t)
        }
    }
}, function(t, e, n) {
    n(283), t.exports = n(52).RegExp.escape
}, function(t, e, n) {
    var i = n(11),
        o = n(158),
        r = n(12)("species");
    t.exports = function(t) {
        var e;
        return o(t) && (e = t.constructor, "function" != typeof e || e !== Array && !o(e.prototype) || (e = void 0), i(e) && (e = e[r], null === e && (e = void 0))), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    var i = n(275);
    t.exports = function(t, e) {
        return new(i(t))(e)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(6),
        o = n(45),
        r = "number";
    t.exports = function(t) {
        if ("string" !== t && t !== r && "default" !== t) throw TypeError("Incorrect hint");
        return o(i(this), t != r)
    }
}, function(t, e, n) {
    var i = n(72),
        o = n(114),
        r = n(100);
    t.exports = function(t) {
        var e = i(t),
            n = o.f;
        if (n)
            for (var s, a = n(t), u = r.f, c = 0; a.length > c;) u.call(t, s = a[c++]) && e.push(s);
        return e
    }
}, function(t, e, n) {
    var i = n(72),
        o = n(30);
    t.exports = function(t, e) {
        for (var n, r = o(t), s = i(r), a = s.length, u = 0; a > u;)
            if (r[n = s[u++]] === e) return n
    }
}, function(t, e, n) {
    "use strict";
    var i = n(281),
        o = n(110),
        r = n(26);
    t.exports = function() {
        for (var t = r(this), e = arguments.length, n = Array(e), s = 0, a = i._, u = !1; e > s;)(n[s] = arguments[s++]) === a && (u = !0);
        return function() {
            var i, r = this,
                s = arguments.length,
                c = 0,
                l = 0;
            if (!u && !s) return o(t, n, r);
            if (i = n.slice(), u)
                for (; e > c; c++) i[c] === a && (i[c] = arguments[l++]);
            for (; s > l;) i.push(arguments[l++]);
            return o(t, i, r)
        }
    }
}, function(t, e, n) {
    t.exports = n(8)
}, function(t, e) {
    t.exports = function(t, e) {
        var n = e === Object(e) ? function(t) {
            return e[t]
        } : e;
        return function(e) {
            return String(e).replace(t, n)
        }
    }
}, function(t, e, n) {
    var i = n(1),
        o = n(282)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    i(i.S, "RegExp", {
        escape: function(t) {
            return o(t)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.P, "Array", {
        copyWithin: n(188)
    }), n(80)("copyWithin")
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(43)(4);
    i(i.P + i.F * !n(40)([].every, !0), "Array", {
        every: function(t) {
            return o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.P, "Array", {
        fill: n(150)
    }), n(80)("fill")
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(43)(2);
    i(i.P + i.F * !n(40)([].filter, !0), "Array", {
        filter: function(t) {
            return o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(43)(6),
        r = "findIndex",
        s = !0;
    r in [] && Array(1)[r](function() {
        s = !1
    }), i(i.P + i.F * s, "Array", {
        findIndex: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(80)(r)
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(43)(5),
        r = "find",
        s = !0;
    r in [] && Array(1)[r](function() {
        s = !1
    }), i(i.P + i.F * s, "Array", {
        find: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(80)(r)
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(43)(0),
        r = n(40)([].forEach, !0);
    i(i.P + i.F * !r, "Array", {
        forEach: function(t) {
            return o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(53),
        o = n(1),
        r = n(21),
        s = n(197),
        a = n(157),
        u = n(20),
        c = n(151),
        l = n(174);
    o(o.S + o.F * !n(112)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, o, f, h = r(t),
                p = "function" == typeof this ? this : Array,
                d = arguments.length,
                v = d > 1 ? arguments[1] : void 0,
                m = void 0 !== v,
                g = 0,
                y = l(h);
            if (m && (v = i(v, d > 2 ? arguments[2] : void 0, 2)), void 0 == y || p == Array && a(y))
                for (e = u(h.length), n = new p(e); e > g; g++) c(n, g, m ? v(h[g], g) : h[g]);
            else
                for (f = y.call(h), n = new p; !(o = f.next()).done; g++) c(n, g, m ? s(f, v, [o.value, g], !0) : o.value);
            return n.length = g, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(106)(!1),
        r = [].indexOf,
        s = !!r && 1 / [1].indexOf(1, -0) < 0;
    i(i.P + i.F * (s || !n(40)(r)), "Array", {
        indexOf: function(t) {
            return s ? r.apply(this, arguments) || 0 : o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Array", {
        isArray: n(158)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(30),
        r = [].join;
    i(i.P + i.F * (n(99) != Object || !n(40)(r)), "Array", {
        join: function(t) {
            return r.call(o(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(30),
        r = n(59),
        s = n(20),
        a = [].lastIndexOf,
        u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    i(i.P + i.F * (u || !n(40)(a)), "Array", {
        lastIndexOf: function(t) {
            if (u) return a.apply(this, arguments) || 0;
            var e = o(this),
                n = s(e.length),
                i = n - 1;
            for (arguments.length > 1 && (i = Math.min(i, r(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
                if (i in e && e[i] === t) return i || 0;
            return -1
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(43)(1);
    i(i.P + i.F * !n(40)([].map, !0), "Array", {
        map: function(t) {
            return o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(151);
    i(i.S + i.F * n(10)(function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    }), "Array", {
        of: function() {
            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) o(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(190);
    i(i.P + i.F * !n(40)([].reduceRight, !0), "Array", {
        reduceRight: function(t) {
            return o(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(190);
    i(i.P + i.F * !n(40)([].reduce, !0), "Array", {
        reduce: function(t) {
            return o(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(155),
        r = n(38),
        s = n(75),
        a = n(20),
        u = [].slice;
    i(i.P + i.F * n(10)(function() {
        o && u.call(o)
    }), "Array", {
        slice: function(t, e) {
            var n = a(this.length),
                i = r(this);
            if (e = void 0 === e ? n : e, "Array" == i) return u.call(this, t, e);
            for (var o = s(t, n), c = s(e, n), l = a(c - o), f = Array(l), h = 0; h < l; h++) f[h] = "String" == i ? this.charAt(o + h) : this[o + h];
            return f
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(43)(3);
    i(i.P + i.F * !n(40)([].some, !0), "Array", {
        some: function(t) {
            return o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(26),
        r = n(21),
        s = n(10),
        a = [].sort,
        u = [1, 2, 3];
    i(i.P + i.F * (s(function() {
        u.sort(void 0)
    }) || !s(function() {
        u.sort(null)
    }) || !n(40)(a)), "Array", {
        sort: function(t) {
            return void 0 === t ? a.call(r(this)) : a.call(r(this), o(t))
        }
    })
}, function(t, e, n) {
    n(74)("Array")
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(10),
        r = Date.prototype.getTime,
        s = function(t) {
            return t > 9 ? t : "0" + t
        };
    i(i.P + i.F * (o(function() {
        return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
    }) || !o(function() {
        new Date(NaN).toISOString()
    })), "Date", {
        toISOString: function() {
            if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
            var t = this,
                e = t.getUTCFullYear(),
                n = t.getUTCMilliseconds(),
                i = e < 0 ? "-" : e > 9999 ? "+" : "";
            return i + ("00000" + Math.abs(e)).slice(i ? -6 : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(21),
        r = n(45);
    i(i.P + i.F * n(10)(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    }), "Date", {
        toJSON: function(t) {
            var e = o(this),
                n = r(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
        }
    })
}, function(t, e, n) {
    var i = n(12)("toPrimitive"),
        o = Date.prototype;
    i in o || n(27)(o, i, n(277))
}, function(t, e, n) {
    var i = Date.prototype,
        o = "Invalid Date",
        r = "toString",
        s = i[r],
        a = i.getTime;
    new Date(NaN) + "" != o && n(28)(i, r, function() {
        var t = a.call(this);
        return t === t ? s.call(this) : o
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.P, "Function", {
        bind: n(191)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(11),
        o = n(34),
        r = n(12)("hasInstance"),
        s = Function.prototype;
    r in s || n(16).f(s, r, {
        value: function(t) {
            if ("function" != typeof this || !i(t)) return !1;
            if (!i(this.prototype)) return t instanceof this;
            for (; t = o(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    })
}, function(t, e, n) {
    var i = n(16).f,
        o = n(58),
        r = n(24),
        s = Function.prototype,
        a = /^\s*function ([^ (]*)/,
        u = "name",
        c = Object.isExtensible || function() {
            return !0
        };
    u in s || n(15) && i(s, u, {
        configurable: !0,
        get: function() {
            try {
                var t = this,
                    e = ("" + t).match(a)[1];
                return r(t, u) || !c(t) || i(t, u, o(5, e)), e
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(199),
        r = Math.sqrt,
        s = Math.acosh;
    i(i.S + i.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
        acosh: function(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : o(t - 1 + r(t - 1) * r(t + 1))
        }
    })
}, function(t, e, n) {
    function i(t) {
        return isFinite(t = +t) && 0 != t ? t < 0 ? -i(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
    }
    var o = n(1),
        r = Math.asinh;
    o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", {
        asinh: i
    })
}, function(t, e, n) {
    var i = n(1),
        o = Math.atanh;
    i(i.S + i.F * !(o && 1 / o(-0) < 0), "Math", {
        atanh: function(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(162);
    i(i.S, "Math", {
        cbrt: function(t) {
            return o(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = Math.exp;
    i(i.S, "Math", {
        cosh: function(t) {
            return (o(t = +t) + o(-t)) / 2
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(161);
    i(i.S + i.F * (o != Math.expm1), "Math", {
        expm1: o
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(162),
        r = Math.pow,
        s = r(2, -52),
        a = r(2, -23),
        u = r(2, 127) * (2 - a),
        c = r(2, -126),
        l = function(t) {
            return t + 1 / s - 1 / s
        };
    i(i.S, "Math", {
        fround: function(t) {
            var e, n, i = Math.abs(t),
                r = o(t);
            return i < c ? r * l(i / c / a) * c * a : (e = (1 + a / s) * i, n = e - (e - i), n > u || n != n ? r * (1 / 0) : r * n)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = Math.abs;
    i(i.S, "Math", {
        hypot: function(t, e) {
            for (var n, i, r = 0, s = 0, a = arguments.length, u = 0; s < a;) n = o(arguments[s++]), u < n ? (i = u / n, r = r * i * i + 1, u = n) : n > 0 ? (i = n / u, r += i * i) : r += n;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(r)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = Math.imul;
    i(i.S + i.F * n(10)(function() {
        return o(4294967295, 5) != -5 || 2 != o.length
    }), "Math", {
        imul: function(t, e) {
            var n = 65535,
                i = +t,
                o = +e,
                r = n & i,
                s = n & o;
            return 0 | r * s + ((n & i >>> 16) * s + r * (n & o >>> 16) << 16 >>> 0)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        log10: function(t) {
            return Math.log(t) / Math.LN10
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        log1p: n(199)
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        log2: function(t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        sign: n(162)
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(161),
        r = Math.exp;
    i(i.S + i.F * n(10)(function() {
        return !Math.sinh(-2e-17) != -2e-17
    }), "Math", {
        sinh: function(t) {
            return Math.abs(t = +t) < 1 ? (o(t) - o(-t)) / 2 : (r(t - 1) - r(-t - 1)) * (Math.E / 2)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(161),
        r = Math.exp;
    i(i.S, "Math", {
        tanh: function(t) {
            var e = o(t = +t),
                n = o(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (r(t) + r(-t))
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        trunc: function(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(8),
        o = n(24),
        r = n(38),
        s = n(156),
        a = n(45),
        u = n(10),
        c = n(71).f,
        l = n(33).f,
        f = n(16).f,
        h = n(84).trim,
        p = "Number",
        d = i[p],
        v = d,
        m = d.prototype,
        g = r(n(70)(m)) == p,
        y = "trim" in String.prototype,
        w = function(t) {
            var e = a(t, !1);
            if ("string" == typeof e && e.length > 2) {
                e = y ? e.trim() : h(e, 3);
                var n, i, o, r = e.charCodeAt(0);
                if (43 === r || 45 === r) {
                    if (n = e.charCodeAt(2), 88 === n || 120 === n) return NaN
                } else if (48 === r) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            i = 2, o = 49;
                            break;
                        case 79:
                        case 111:
                            i = 8, o = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var s, u = e.slice(2), c = 0, l = u.length; c < l; c++)
                        if (s = u.charCodeAt(c), s < 48 || s > o) return NaN;
                    return parseInt(u, i)
                }
            }
            return +e
        };
    if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
        d = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof d && (g ? u(function() {
                m.valueOf.call(n)
            }) : r(n) != p) ? s(new v(w(e)), n, d) : w(e)
        };
        for (var x, b = n(15) ? c(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), P = 0; b.length > P; P++) o(v, x = b[P]) && !o(d, x) && f(d, x, l(v, x));
        d.prototype = m, m.constructor = d, n(28)(i, p, d)
    }
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(8).isFinite;
    i(i.S, "Number", {
        isFinite: function(t) {
            return "number" == typeof t && o(t)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Number", {
        isInteger: n(196)
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Number", {
        isNaN: function(t) {
            return t != t
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(196),
        r = Math.abs;
    i(i.S, "Number", {
        isSafeInteger: function(t) {
            return o(t) && r(t) <= 9007199254740991;
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(206);
    i(i.S + i.F * (Number.parseFloat != o), "Number", {
        parseFloat: o
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(207);
    i(i.S + i.F * (Number.parseInt != o), "Number", {
        parseInt: o
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(59),
        r = n(187),
        s = n(169),
        a = 1..toFixed,
        u = Math.floor,
        c = [0, 0, 0, 0, 0, 0],
        l = "Number.toFixed: incorrect invocation!",
        f = "0",
        h = function(t, e) {
            for (var n = -1, i = e; ++n < 6;) i += t * c[n], c[n] = i % 1e7, i = u(i / 1e7)
        },
        p = function(t) {
            for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = u(n / t), n = n % t * 1e7
        },
        d = function() {
            for (var t = 6, e = ""; --t >= 0;)
                if ("" !== e || 0 === t || 0 !== c[t]) {
                    var n = String(c[t]);
                    e = "" === e ? n : e + s.call(f, 7 - n.length) + n
                }
            return e
        },
        v = function(t, e, n) {
            return 0 === e ? n : e % 2 === 1 ? v(t, e - 1, n * t) : v(t * t, e / 2, n)
        },
        m = function(t) {
            for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
            for (; n >= 2;) e += 1, n /= 2;
            return e
        };
    i(i.P + i.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9. toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(10)(function() {
        a.call({})
    })), "Number", {
        toFixed: function(t) {
            var e, n, i, a, u = r(this, l),
                c = o(t),
                g = "",
                y = f;
            if (c < 0 || c > 20) throw RangeError(l);
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (g = "-", u = -u), u > 1e-21)
                if (e = m(u * v(2, 69, 1)) - 69, n = e < 0 ? u * v(2, -e, 1) : u / v(2, e, 1), n *= 4503599627370496, e = 52 - e, e > 0) {
                    for (h(0, n), i = c; i >= 7;) h(1e7, 0), i -= 7;
                    for (h(v(10, i, 1), 0), i = e - 1; i >= 23;) p(1 << 23), i -= 23;
                    p(1 << i), h(1, 1), p(2), y = d()
                } else h(0, n), h(1 << -e, 0), y = d() + s.call(f, c);
            return c > 0 ? (a = y.length, y = g + (a <= c ? "0." + s.call(f, c - a) + y : y.slice(0, a - c) + "." + y.slice(a - c))) : y = g + y, y
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(10),
        r = n(187),
        s = 1..toPrecision;
    i(i.P + i.F * (o(function() {
        return "1" !== s.call(1, void 0)
    }) || !o(function() {
        s.call({})
    })), "Number", {
        toPrecision: function(t) {
            var e = r(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? s.call(e) : s.call(e, t)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S + i.F, "Object", {
        assign: n(200)
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Object", {
        create: n(70)
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S + i.F * !n(15), "Object", {
        defineProperties: n(201)
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S + i.F * !n(15), "Object", {
        defineProperty: n(16).f
    })
}, function(t, e, n) {
    var i = n(11),
        o = n(57).onFreeze;
    n(44)("freeze", function(t) {
        return function(e) {
            return t && i(e) ? t(o(e)) : e
        }
    })
}, function(t, e, n) {
    var i = n(30),
        o = n(33).f;
    n(44)("getOwnPropertyDescriptor", function() {
        return function(t, e) {
            return o(i(t), e)
        }
    })
}, function(t, e, n) {
    n(44)("getOwnPropertyNames", function() {
        return n(202).f
    })
}, function(t, e, n) {
    var i = n(21),
        o = n(34);
    n(44)("getPrototypeOf", function() {
        return function(t) {
            return o(i(t))
        }
    })
}, function(t, e, n) {
    var i = n(11);
    n(44)("isExtensible", function(t) {
        return function(e) {
            return !!i(e) && (!t || t(e))
        }
    })
}, function(t, e, n) {
    var i = n(11);
    n(44)("isFrozen", function(t) {
        return function(e) {
            return !i(e) || !!t && t(e)
        }
    })
}, function(t, e, n) {
    var i = n(11);
    n(44)("isSealed", function(t) {
        return function(e) {
            return !i(e) || !!t && t(e)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Object", {
        is: n(208)
    })
}, function(t, e, n) {
    var i = n(21),
        o = n(72);
    n(44)("keys", function() {
        return function(t) {
            return o(i(t))
        }
    })
}, function(t, e, n) {
    var i = n(11),
        o = n(57).onFreeze;
    n(44)("preventExtensions", function(t) {
        return function(e) {
            return t && i(e) ? t(o(e)) : e
        }
    })
}, function(t, e, n) {
    var i = n(11),
        o = n(57).onFreeze;
    n(44)("seal", function(t) {
        return function(e) {
            return t && i(e) ? t(o(e)) : e
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Object", {
        setPrototypeOf: n(164).set
    })
}, function(t, e, n) {
    "use strict";
    var i = n(98),
        o = {};
    o[n(12)("toStringTag")] = "z", o + "" != "[object z]" && n(28)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
    }, !0)
}, function(t, e, n) {
    var i = n(1),
        o = n(206);
    i(i.G + i.F * (parseFloat != o), {
        parseFloat: o
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(207);
    i(i.G + i.F * (parseInt != o), {
        parseInt: o
    })
}, function(t, e, n) {
    "use strict";
    var i, o, r, s = n(69),
        a = n(8),
        u = n(53),
        c = n(98),
        l = n(1),
        f = n(11),
        h = n(26),
        p = n(68),
        d = n(81),
        v = n(166),
        m = n(171).set,
        g = n(163)(),
        y = "Promise",
        w = a.TypeError,
        x = a.process,
        b = a[y],
        x = a.process,
        P = "process" == c(x),
        M = function() {},
        O = !! function() {
            try {
                var t = b.resolve(1),
                    e = (t.constructor = {})[n(12)("species")] = function(t) {
                        t(M, M)
                    };
                return (P || "function" == typeof PromiseRejectionEvent) && t.then(M) instanceof e
            } catch (t) {}
        }(),
        k = function(t, e) {
            return t === e || t === b && e === r
        },
        E = function(t) {
            var e;
            return !(!f(t) || "function" != typeof(e = t.then)) && e
        },
        T = function(t) {
            return k(b, t) ? new _(t) : new o(t)
        },
        _ = o = function(t) {
            var e, n;
            this.promise = new t(function(t, i) {
                if (void 0 !== e || void 0 !== n) throw w("Bad Promise constructor");
                e = t, n = i
            }), this.resolve = h(e), this.reject = h(n)
        },
        A = function(t) {
            try {
                t()
            } catch (t) {
                return {
                    error: t
                }
            }
        },
        L = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                g(function() {
                    for (var i = t._v, o = 1 == t._s, r = 0, s = function(e) {
                            var n, r, s = o ? e.ok : e.fail,
                                a = e.resolve,
                                u = e.reject,
                                c = e.domain;
                            try {
                                s ? (o || (2 == t._h && S(t), t._h = 1), s === !0 ? n = i : (c && c.enter(), n = s(i), c && c.exit()), n === e.promise ? u(w("Promise-chain cycle")) : (r = E(n)) ? r.call(n, a, u) : a(n)) : u(i)
                            } catch (t) {
                                u(t)
                            }
                        }; n.length > r;) s(n[r++]);
                    t._c = [], t._n = !1, e && !t._h && $(t)
                })
            }
        },
        $ = function(t) {
            m.call(a, function() {
                var e, n, i, o = t._v;
                if (C(t) && (e = A(function() {
                        P ? x.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
                            promise: t,
                            reason: o
                        }) : (i = a.console) && i.error && i.error("Unhandled promise rejection", o)
                    }), t._h = P || C(t) ? 2 : 1), t._a = void 0, e) throw e.error
            })
        },
        C = function(t) {
            if (1 == t._h) return !1;
            for (var e, n = t._a || t._c, i = 0; n.length > i;)
                if (e = n[i++], e.fail || !C(e.promise)) return !1;
            return !0
        },
        S = function(t) {
            m.call(a, function() {
                var e;
                P ? x.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        D = function(t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), L(e, !0))
        },
        I = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw w("Promise can't be resolved itself");
                    (e = E(t)) ? g(function() {
                        var i = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, u(I, i, 1), u(D, i, 1))
                        } catch (t) {
                            D.call(i, t)
                        }
                    }): (n._v = t, n._s = 1, L(n, !1))
                } catch (t) {
                    D.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    O || (b = function(t) {
        p(this, b, y, "_h"), h(t), i.call(this);
        try {
            t(u(I, this, 1), u(D, this, 1))
        } catch (t) {
            D.call(this, t)
        }
    }, i = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, i.prototype = n(73)(b.prototype, {
        then: function(t, e) {
            var n = T(v(this, b));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = P ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), _ = function() {
        var t = new i;
        this.promise = t, this.resolve = u(I, t, 1), this.reject = u(D, t, 1)
    }), l(l.G + l.W + l.F * !O, {
        Promise: b
    }), n(83)(b, y), n(74)(y), r = n(52)[y], l(l.S + l.F * !O, y, {
        reject: function(t) {
            var e = T(this),
                n = e.reject;
            return n(t), e.promise
        }
    }), l(l.S + l.F * (s || !O), y, {
        resolve: function(t) {
            if (t instanceof b && k(t.constructor, this)) return t;
            var e = T(this),
                n = e.resolve;
            return n(t), e.promise
        }
    }), l(l.S + l.F * !(O && n(112)(function(t) {
        b.all(t).catch(M)
    })), y, {
        all: function(t) {
            var e = this,
                n = T(e),
                i = n.resolve,
                o = n.reject,
                r = A(function() {
                    var n = [],
                        r = 0,
                        s = 1;
                    d(t, !1, function(t) {
                        var a = r++,
                            u = !1;
                        n.push(void 0), s++, e.resolve(t).then(function(t) {
                            u || (u = !0, n[a] = t, --s || i(n))
                        }, o)
                    }), --s || i(n)
                });
            return r && o(r.error), n.promise
        },
        race: function(t) {
            var e = this,
                n = T(e),
                i = n.reject,
                o = A(function() {
                    d(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, i)
                    })
                });
            return o && i(o.error), n.promise
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(26),
        r = n(6),
        s = (n(8).Reflect || {}).apply,
        a = Function.apply;
    i(i.S + i.F * !n(10)(function() {
        s(function() {})
    }), "Reflect", {
        apply: function(t, e, n) {
            var i = o(t),
                u = r(n);
            return s ? s(i, e, u) : a.call(i, e, u)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(70),
        r = n(26),
        s = n(6),
        a = n(11),
        u = n(10),
        c = n(191),
        l = (n(8).Reflect || {}).construct,
        f = u(function() {
            function t() {}
            return !(l(function() {}, [], t) instanceof t)
        }),
        h = !u(function() {
            l(function() {})
        });
    i(i.S + i.F * (f || h), "Reflect", {
        construct: function(t, e) {
            r(t), s(e);
            var n = arguments.length < 3 ? t : r(arguments[2]);
            if (h && !f) return l(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var i = [null];
                return i.push.apply(i, e), new(c.apply(t, i))
            }
            var u = n.prototype,
                p = o(a(u) ? u : Object.prototype),
                d = Function.apply.call(t, p, e);
            return a(d) ? d : p
        }
    })
}, function(t, e, n) {
    var i = n(16),
        o = n(1),
        r = n(6),
        s = n(45);
    o(o.S + o.F * n(10)(function() {
        Reflect.defineProperty(i.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }), "Reflect", {
        defineProperty: function(t, e, n) {
            r(t), e = s(e, !0), r(n);
            try {
                return i.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(33).f,
        r = n(6);
    i(i.S, "Reflect", {
        deleteProperty: function(t, e) {
            var n = o(r(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(6),
        r = function(t) {
            this._t = o(t), this._i = 0;
            var e, n = this._k = [];
            for (e in t) n.push(e)
        };
    n(159)(r, "Object", function() {
        var t, e = this,
            n = e._k;
        do
            if (e._i >= n.length) return {
                value: void 0,
                done: !0
            };
        while (!((t = n[e._i++]) in e._t));
        return {
            value: t,
            done: !1
        }
    }), i(i.S, "Reflect", {
        enumerate: function(t) {
            return new r(t)
        }
    })
}, function(t, e, n) {
    var i = n(33),
        o = n(1),
        r = n(6);
    o(o.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return i.f(r(t), e)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(34),
        r = n(6);
    i(i.S, "Reflect", {
        getPrototypeOf: function(t) {
            return o(r(t))
        }
    })
}, function(t, e, n) {
    function i(t, e) {
        var n, a, l = arguments.length < 3 ? t : arguments[2];
        return c(t) === l ? t[e] : (n = o.f(t, e)) ? s(n, "value") ? n.value : void 0 !== n.get ? n.get.call(l) : void 0 : u(a = r(t)) ? i(a, e, l) : void 0
    }
    var o = n(33),
        r = n(34),
        s = n(24),
        a = n(1),
        u = n(11),
        c = n(6);
    a(a.S, "Reflect", {
        get: i
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Reflect", {
        has: function(t, e) {
            return e in t
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(6),
        r = Object.isExtensible;
    i(i.S, "Reflect", {
        isExtensible: function(t) {
            return o(t), !r || r(t)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Reflect", {
        ownKeys: n(205)
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(6),
        r = Object.preventExtensions;
    i(i.S, "Reflect", {
        preventExtensions: function(t) {
            o(t);
            try {
                return r && r(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(164);
    o && i(i.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            o.check(t, e);
            try {
                return o.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    function i(t, e, n) {
        var u, h, p = arguments.length < 4 ? t : arguments[3],
            d = r.f(l(t), e);
        if (!d) {
            if (f(h = s(t))) return i(h, e, n, p);
            d = c(0)
        }
        return a(d, "value") ? !(d.writable === !1 || !f(p)) && (u = r.f(p, e) || c(0), u.value = n, o.f(p, e, u), !0) : void 0 !== d.set && (d.set.call(p, n), !0)
    }
    var o = n(16),
        r = n(33),
        s = n(34),
        a = n(24),
        u = n(1),
        c = n(58),
        l = n(6),
        f = n(11);
    u(u.S, "Reflect", {
        set: i
    })
}, function(t, e, n) {
    var i = n(8),
        o = n(156),
        r = n(16).f,
        s = n(71).f,
        a = n(111),
        u = n(109),
        c = i.RegExp,
        l = c,
        f = c.prototype,
        h = /a/g,
        p = /a/g,
        d = new c(h) !== h;
    if (n(15) && (!d || n(10)(function() {
            return p[n(12)("match")] = !1, c(h) != h || c(p) == p || "/a/i" != c(h, "i")
        }))) {
        c = function(t, e) {
            var n = this instanceof c,
                i = a(t),
                r = void 0 === e;
            return !n && i && t.constructor === c && r ? t : o(d ? new l(i && !r ? t.source : t, e) : l((i = t instanceof c) ? t.source : t, i && r ? u.call(t) : e), n ? this : f, c)
        };
        for (var v = (function(t) {
                t in c || r(c, t, {
                    configurable: !0,
                    get: function() {
                        return l[t]
                    },
                    set: function(e) {
                        l[t] = e
                    }
                })
            }), m = s(l), g = 0; m.length > g;) v(m[g++]);
        f.constructor = c, c.prototype = f, n(28)(i, "RegExp", c)
    }
    n(74)("RegExp")
}, function(t, e, n) {
    n(108)("match", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var i = t(this),
                o = void 0 == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i) : new RegExp(n)[e](String(i))
        }, n]
    })
}, function(t, e, n) {
    n(108)("replace", 2, function(t, e, n) {
        return [function(i, o) {
            "use strict";
            var r = t(this),
                s = void 0 == i ? void 0 : i[e];
            return void 0 !== s ? s.call(i, r, o) : n.call(String(r), i, o)
        }, n]
    })
}, function(t, e, n) {
    n(108)("search", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var i = t(this),
                o = void 0 == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i) : new RegExp(n)[e](String(i))
        }, n]
    })
}, function(t, e, n) {
    n(108)("split", 2, function(t, e, i) {
        "use strict";
        var o = n(111),
            r = i,
            s = [].push,
            a = "split",
            u = "length",
            c = "lastIndex";
        if ("c" == "abbc" [a](/(b)*/)[1] || 4 != "test" [a](/(?:)/, -1)[u] || 2 != "ab" [a](/(?:ab)*/)[u] || 4 != "." [a](/(.?)(.?)/)[u] || "." [a](/()()/)[u] > 1 || "" [a](/.?/)[u]) {
            var l = void 0 === /()??/.exec("")[1];
            i = function(t, e) {
                var n = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!o(t)) return r.call(n, t, e);
                var i, a, f, h, p, d = [],
                    v = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                    m = 0,
                    g = void 0 === e ? 4294967295 : e >>> 0,
                    y = new RegExp(t.source, v + "g");
                for (l || (i = new RegExp("^" + y.source + "$(?!\\s)", v));
                    (a = y.exec(n)) && (f = a.index + a[0][u], !(f > m && (d.push(n.slice(m, a.index)), !l && a[u] > 1 && a[0].replace(i, function() {
                        for (p = 1; p < arguments[u] - 2; p++) void 0 === arguments[p] && (a[p] = void 0)
                    }), a[u] > 1 && a.index < n[u] && s.apply(d, a.slice(1)), h = a[0][u], m = f, d[u] >= g)));) y[c] === a.index && y[c]++;
                return m === n[u] ? !h && y.test("") || d.push("") : d.push(n.slice(m)), d[u] > g ? d.slice(0, g) : d
            }
        } else "0" [a](void 0, 0)[u] && (i = function(t, e) {
            return void 0 === t && 0 === e ? [] : r.call(this, t, e)
        });
        return [function(n, o) {
            var r = t(this),
                s = void 0 == n ? void 0 : n[e];
            return void 0 !== s ? s.call(n, r, o) : i.call(String(r), n, o)
        }, i]
    })
}, function(t, e, n) {
    "use strict";
    n(212);
    var i = n(6),
        o = n(109),
        r = n(15),
        s = "toString",
        a = /./ [s],
        u = function(t) {
            n(28)(RegExp.prototype, s, t, !0)
        };
    n(10)(function() {
        return "/a/b" != a.call({
            source: "a",
            flags: "b"
        })
    }) ? u(function() {
        var t = i(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !r && t instanceof RegExp ? o.call(t) : void 0)
    }) : a.name != s && u(function() {
        return a.call(this)
    })
}, function(t, e, n) {
    "use strict";
    n(29)("anchor", function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("big", function(t) {
        return function() {
            return t(this, "big", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("blink", function(t) {
        return function() {
            return t(this, "blink", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("bold", function(t) {
        return function() {
            return t(this, "b", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(167)(!1);
    i(i.P, "String", {
        codePointAt: function(t) {
            return o(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(20),
        r = n(168),
        s = "endsWith",
        a = "" [s];
    i(i.P + i.F * n(154)(s), "String", {
        endsWith: function(t) {
            var e = r(this, t, s),
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = o(e.length),
                u = void 0 === n ? i : Math.min(o(n), i),
                c = String(t);
            return a ? a.call(e, c, u) : e.slice(u - c.length, u) === c
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("fixed", function(t) {
        return function() {
            return t(this, "tt", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("fontcolor", function(t) {
        return function(e) {
            return t(this, "font", "color", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("fontsize", function(t) {
        return function(e) {
            return t(this, "font", "size", e)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(75),
        r = String.fromCharCode,
        s = String.fromCodePoint;
    i(i.S + i.F * (!!s && 1 != s.length), "String", {
        fromCodePoint: function(t) {
            for (var e, n = [], i = arguments.length, s = 0; i > s;) {
                if (e = +arguments[s++], o(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? r(e) : r(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(168),
        r = "includes";
    i(i.P + i.F * n(154)(r), "String", {
        includes: function(t) {
            return !!~o(this, t, r).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("italics", function(t) {
        return function() {
            return t(this, "i", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(167)(!0);
    n(160)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    "use strict";
    n(29)("link", function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(30),
        r = n(20);
    i(i.S, "String", {
        raw: function(t) {
            for (var e = o(t.raw), n = r(e.length), i = arguments.length, s = [], a = 0; n > a;) s.push(String(e[a++])), a < i && s.push(String(arguments[a]));
            return s.join("")
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.P, "String", {
        repeat: n(169)
    })
}, function(t, e, n) {
    "use strict";
    n(29)("small", function(t) {
        return function() {
            return t(this, "small", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(20),
        r = n(168),
        s = "startsWith",
        a = "" [s];
    i(i.P + i.F * n(154)(s), "String", {
        startsWith: function(t) {
            var e = r(this, t, s),
                n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                i = String(t);
            return a ? a.call(e, i, n) : e.slice(n, n + i.length) === i
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("strike", function(t) {
        return function() {
            return t(this, "strike", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("sub", function(t) {
        return function() {
            return t(this, "sub", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(29)("sup", function(t) {
        return function() {
            return t(this, "sup", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(84)("trim", function(t) {
        return function() {
            return t(this, 3)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(8),
        o = n(24),
        r = n(15),
        s = n(1),
        a = n(28),
        u = n(57).KEY,
        c = n(10),
        l = n(115),
        f = n(83),
        h = n(76),
        p = n(12),
        d = n(210),
        v = n(173),
        m = n(279),
        g = n(278),
        y = n(158),
        w = n(6),
        x = n(30),
        b = n(45),
        P = n(58),
        M = n(70),
        O = n(202),
        k = n(33),
        E = n(16),
        T = n(72),
        _ = k.f,
        A = E.f,
        L = O.f,
        $ = i.Symbol,
        C = i.JSON,
        S = C && C.stringify,
        D = "prototype",
        I = p("_hidden"),
        j = p("toPrimitive"),
        U = {}.propertyIsEnumerable,
        N = l("symbol-registry"),
        R = l("symbols"),
        B = l("op-symbols"),
        F = Object[D],
        V = "function" == typeof $,
        q = i.QObject,
        W = !q || !q[D] || !q[D].findChild,
        z = r && c(function() {
            return 7 != M(A({}, "a", {
                get: function() {
                    return A(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var i = _(F, e);
            i && delete F[e], A(t, e, n), i && t !== F && A(F, e, i)
        } : A,
        H = function(t) {
            var e = R[t] = M($[D]);
            return e._k = t, e
        },
        G = V && "symbol" == typeof $.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof $
        },
        Y = function(t, e, n) {
            return t === F && Y(B, e, n), w(t), e = b(e, !0), w(n), o(R, e) ? (n.enumerable ? (o(t, I) && t[I][e] && (t[I][e] = !1), n = M(n, {
                enumerable: P(0, !1)
            })) : (o(t, I) || A(t, I, P(1, {})), t[I][e] = !0), z(t, e, n)) : A(t, e, n)
        },
        X = function(t, e) {
            w(t);
            for (var n, i = g(e = x(e)), o = 0, r = i.length; r > o;) Y(t, n = i[o++], e[n]);
            return t
        },
        K = function(t, e) {
            return void 0 === e ? M(t) : X(M(t), e)
        },
        J = function(t) {
            var e = U.call(this, t = b(t, !0));
            return !(this === F && o(R, t) && !o(B, t)) && (!(e || !o(this, t) || !o(R, t) || o(this, I) && this[I][t]) || e)
        },
        Q = function(t, e) {
            if (t = x(t), e = b(e, !0), t !== F || !o(R, e) || o(B, e)) {
                var n = _(t, e);
                return !n || !o(R, e) || o(t, I) && t[I][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = L(x(t)), i = [], r = 0; n.length > r;) o(R, e = n[r++]) || e == I || e == u || i.push(e);
            return i
        },
        tt = function(t) {
            for (var e, n = t === F, i = L(n ? B : x(t)), r = [], s = 0; i.length > s;) !o(R, e = i[s++]) || n && !o(F, e) || r.push(R[e]);
            return r
        };
    V || ($ = function() {
        if (this instanceof $) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === F && e.call(B, n), o(this, I) && o(this[I], t) && (this[I][t] = !1), z(this, t, P(1, n))
            };
        return r && W && z(F, t, {
            configurable: !0,
            set: e
        }), H(t)
    }, a($[D], "toString", function() {
        return this._k
    }), k.f = Q, E.f = Y, n(71).f = O.f = Z, n(100).f = J, n(114).f = tt, r && !n(69) && a(F, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return H(p(t))
    }), s(s.G + s.W + s.F * !V, {
        Symbol: $
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
    for (var et = T(p.store), nt = 0; et.length > nt;) v(et[nt++]);
    s(s.S + s.F * !V, "Symbol", {
        for: function(t) {
            return o(N, t += "") ? N[t] : N[t] = $(t)
        },
        keyFor: function(t) {
            if (G(t)) return m(N, t);
            throw TypeError(t + " is not a symbol!")
        },
        useSetter: function() {
            W = !0
        },
        useSimple: function() {
            W = !1
        }
    }), s(s.S + s.F * !V, "Object", {
        create: K,
        defineProperty: Y,
        defineProperties: X,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt
    }), C && s(s.S + s.F * (!V || c(function() {
        var t = $();
        return "[null]" != S([t]) || "{}" != S({
            a: t
        }) || "{}" != S(Object(t))
    })), "JSON", {
        stringify: function(t) {
            if (void 0 !== t && !G(t)) {
                for (var e, n, i = [t], o = 1; arguments.length > o;) i.push(arguments[o++]);
                return e = i[1], "function" == typeof e && (n = e), !n && y(e) || (e = function(t, e) {
                    if (n && (e = n.call(this, t, e)), !G(e)) return e
                }), i[1] = e, S.apply(C, i)
            }
        }
    }), $[D][j] || n(27)($[D], j, $[D].valueOf), f($, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0)
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(116),
        r = n(172),
        s = n(6),
        a = n(75),
        u = n(20),
        c = n(11),
        l = n(8).ArrayBuffer,
        f = n(166),
        h = r.ArrayBuffer,
        p = r.DataView,
        d = o.ABV && l.isView,
        v = h.prototype.slice,
        m = o.VIEW,
        g = "ArrayBuffer";
    i(i.G + i.W + i.F * (l !== h), {
        ArrayBuffer: h
    }), i(i.S + i.F * !o.CONSTR, g, {
        isView: function(t) {
            return d && d(t) || c(t) && m in t
        }
    }), i(i.P + i.U + i.F * n(10)(function() {
        return !new h(2).slice(1, void 0).byteLength
    }), g, {
        slice: function(t, e) {
            if (void 0 !== v && void 0 === e) return v.call(s(this), t);
            for (var n = s(this).byteLength, i = a(t, n), o = a(void 0 === e ? n : e, n), r = new(f(this, h))(u(o - i)), c = new p(this), l = new p(r), d = 0; i < o;) l.setUint8(d++, c.getUint8(i++));
            return r
        }
    }), n(74)(g)
}, function(t, e, n) {
    var i = n(1);
    i(i.G + i.W + i.F * !n(116).ABV, {
        DataView: n(172).DataView
    })
}, function(t, e, n) {
    n(55)("Float32", 4, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Float64", 8, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Int16", 2, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Int32", 4, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Int8", 1, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Uint16", 2, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Uint32", 4, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Uint8", 1, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(55)("Uint8", 1, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    }, !0)
}, function(t, e, n) {
    "use strict";
    var i = n(194);
    n(107)("WeakSet", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return i.def(this, t, !0)
        }
    }, i, !1, !0)
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(106)(!0);
    i(i.P, "Array", {
        includes: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(80)("includes")
}, function(t, e, n) {
    var i = n(1),
        o = n(163)(),
        r = n(8).process,
        s = "process" == n(38)(r);
    i(i.G, {
        asap: function(t) {
            var e = s && r.domain;
            o(e ? e.bind(t) : t)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(38);
    i(i.S, "Error", {
        isError: function(t) {
            return "Error" === o(t)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.P + i.R, "Map", {
        toJSON: n(193)("Map")
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        iaddh: function(t, e, n, i) {
            var o = t >>> 0,
                r = e >>> 0,
                s = n >>> 0;
            return r + (i >>> 0) + ((o & s | (o | s) & ~(o + s >>> 0)) >>> 31) | 0
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        imulh: function(t, e) {
            var n = 65535,
                i = +t,
                o = +e,
                r = i & n,
                s = o & n,
                a = i >> 16,
                u = o >> 16,
                c = (a * s >>> 0) + (r * s >>> 16);
            return a * u + (c >> 16) + ((r * u >>> 0) + (c & n) >> 16)
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        isubh: function(t, e, n, i) {
            var o = t >>> 0,
                r = e >>> 0,
                s = n >>> 0;
            return r - (i >>> 0) - ((~o & s | ~(o ^ s) & o - s >>> 0) >>> 31) | 0
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "Math", {
        umulh: function(t, e) {
            var n = 65535,
                i = +t,
                o = +e,
                r = i & n,
                s = o & n,
                a = i >>> 16,
                u = o >>> 16,
                c = (a * s >>> 0) + (r * s >>> 16);
            return a * u + (c >>> 16) + ((r * u >>> 0) + (c & n) >>> 16)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(21),
        r = n(26),
        s = n(16);
    n(15) && i(i.P + n(113), "Object", {
        __defineGetter__: function(t, e) {
            s.f(o(this), t, {
                get: r(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(21),
        r = n(26),
        s = n(16);
    n(15) && i(i.P + n(113), "Object", {
        __defineSetter__: function(t, e) {
            s.f(o(this), t, {
                set: r(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(204)(!0);
    i(i.S, "Object", {
        entries: function(t) {
            return o(t)
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(205),
        r = n(30),
        s = n(33),
        a = n(151);
    i(i.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n = r(t), i = s.f, u = o(n), c = {}, l = 0; u.length > l;) a(c, e = u[l++], i(n, e));
            return c
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(21),
        r = n(45),
        s = n(34),
        a = n(33).f;
    n(15) && i(i.P + n(113), "Object", {
        __lookupGetter__: function(t) {
            var e, n = o(this),
                i = r(t, !0);
            do
                if (e = a(n, i)) return e.get;
            while (n = s(n))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(21),
        r = n(45),
        s = n(34),
        a = n(33).f;
    n(15) && i(i.P + n(113), "Object", {
        __lookupSetter__: function(t) {
            var e, n = o(this),
                i = r(t, !0);
            do
                if (e = a(n, i)) return e.set;
            while (n = s(n))
        }
    })
}, function(t, e, n) {
    var i = n(1),
        o = n(204)(!1);
    i(i.S, "Object", {
        values: function(t) {
            return o(t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(8),
        r = n(52),
        s = n(163)(),
        a = n(12)("observable"),
        u = n(26),
        c = n(6),
        l = n(68),
        f = n(73),
        h = n(27),
        p = n(81),
        d = p.RETURN,
        v = function(t) {
            return null == t ? void 0 : u(t)
        },
        m = function(t) {
            var e = t._c;
            e && (t._c = void 0, e())
        },
        g = function(t) {
            return void 0 === t._o
        },
        y = function(t) {
            g(t) || (t._o = void 0, m(t))
        },
        w = function(t, e) {
            c(t), this._c = void 0, this._o = t, t = new x(this);
            try {
                var n = e(t),
                    i = n;
                null != n && ("function" == typeof n.unsubscribe ? n = function() {
                    i.unsubscribe()
                } : u(n), this._c = n)
            } catch (e) {
                return void t.error(e)
            }
            g(this) && m(this)
        };
    w.prototype = f({}, {
        unsubscribe: function() {
            y(this)
        }
    });
    var x = function(t) {
        this._s = t
    };
    x.prototype = f({}, {
        next: function(t) {
            var e = this._s;
            if (!g(e)) {
                var n = e._o;
                try {
                    var i = v(n.next);
                    if (i) return i.call(n, t)
                } catch (t) {
                    try {
                        y(e)
                    } finally {
                        throw t
                    }
                }
            }
        },
        error: function(t) {
            var e = this._s;
            if (g(e)) throw t;
            var n = e._o;
            e._o = void 0;
            try {
                var i = v(n.error);
                if (!i) throw t;
                t = i.call(n, t)
            } catch (t) {
                try {
                    m(e)
                } finally {
                    throw t
                }
            }
            return m(e), t
        },
        complete: function(t) {
            var e = this._s;
            if (!g(e)) {
                var n = e._o;
                e._o = void 0;
                try {
                    var i = v(n.complete);
                    t = i ? i.call(n, t) : void 0
                } catch (t) {
                    try {
                        m(e)
                    } finally {
                        throw t
                    }
                }
                return m(e), t
            }
        }
    });
    var b = function(t) {
        l(this, b, "Observable", "_f")._f = u(t)
    };
    f(b.prototype, {
        subscribe: function(t) {
            return new w(t, this._f)
        },
        forEach: function(t) {
            var e = this;
            return new(r.Promise || o.Promise)(function(n, i) {
                u(t);
                var o = e.subscribe({
                    next: function(e) {
                        try {
                            return t(e)
                        } catch (t) {
                            i(t), o.unsubscribe()
                        }
                    },
                    error: i,
                    complete: n
                })
            })
        }
    }), f(b, {
        from: function(t) {
            var e = "function" == typeof this ? this : b,
                n = v(c(t)[a]);
            if (n) {
                var i = c(n.call(t));
                return i.constructor === e ? i : new e(function(t) {
                    return i.subscribe(t)
                })
            }
            return new e(function(e) {
                var n = !1;
                return s(function() {
                        if (!n) {
                            try {
                                if (p(t, !1, function(t) {
                                        if (e.next(t), n) return d
                                    }) === d) return
                            } catch (t) {
                                if (n) throw t;
                                return void e.error(t)
                            }
                            e.complete()
                        }
                    }),
                    function() {
                        n = !0
                    }
            })
        },
        of: function() {
            for (var t = 0, e = arguments.length, n = Array(e); t < e;) n[t] = arguments[t++];
            return new("function" == typeof this ? this : b)(function(t) {
                var e = !1;
                return s(function() {
                        if (!e) {
                            for (var i = 0; i < n.length; ++i)
                                if (t.next(n[i]), e) return;
                            t.complete()
                        }
                    }),
                    function() {
                        e = !0
                    }
            })
        }
    }), h(b.prototype, a, function() {
        return this
    }), i(i.G, {
        Observable: b
    }), n(74)("Observable")
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = i.key,
        s = i.set;
    i.exp({
        defineMetadata: function(t, e, n, i) {
            s(t, e, o(n), r(i))
        }
    })
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = i.key,
        s = i.map,
        a = i.store;
    i.exp({
        deleteMetadata: function(t, e) {
            var n = arguments.length < 3 ? void 0 : r(arguments[2]),
                i = s(o(e), n, !1);
            if (void 0 === i || !i.delete(t)) return !1;
            if (i.size) return !0;
            var u = a.get(e);
            return u.delete(n), !!u.size || a.delete(e)
        }
    })
}, function(t, e, n) {
    var i = n(213),
        o = n(189),
        r = n(54),
        s = n(6),
        a = n(34),
        u = r.keys,
        c = r.key,
        l = function(t, e) {
            var n = u(t, e),
                r = a(t);
            if (null === r) return n;
            var s = l(r, e);
            return s.length ? n.length ? o(new i(n.concat(s))) : s : n
        };
    r.exp({
        getMetadataKeys: function(t) {
            return l(s(t), arguments.length < 2 ? void 0 : c(arguments[1]))
        }
    })
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = n(34),
        s = i.has,
        a = i.get,
        u = i.key,
        c = function(t, e, n) {
            var i = s(t, e, n);
            if (i) return a(t, e, n);
            var o = r(e);
            return null !== o ? c(t, o, n) : void 0
        };
    i.exp({
        getMetadata: function(t, e) {
            return c(t, o(e), arguments.length < 3 ? void 0 : u(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = i.keys,
        s = i.key;
    i.exp({
        getOwnMetadataKeys: function(t) {
            return r(o(t), arguments.length < 2 ? void 0 : s(arguments[1]))
        }
    })
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = i.get,
        s = i.key;
    i.exp({
        getOwnMetadata: function(t, e) {
            return r(t, o(e), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = n(34),
        s = i.has,
        a = i.key,
        u = function(t, e, n) {
            var i = s(t, e, n);
            if (i) return !0;
            var o = r(e);
            return null !== o && u(t, o, n)
        };
    i.exp({
        hasMetadata: function(t, e) {
            return u(t, o(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = i.has,
        s = i.key;
    i.exp({
        hasOwnMetadata: function(t, e) {
            return r(t, o(e), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(54),
        o = n(6),
        r = n(26),
        s = i.key,
        a = i.set;
    i.exp({
        metadata: function(t, e) {
            return function(n, i) {
                a(t, e, (void 0 !== i ? o : r)(n), s(i))
            }
        }
    })
}, function(t, e, n) {
    var i = n(1);
    i(i.P + i.R, "Set", {
        toJSON: n(193)("Set")
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(167)(!0);
    i(i.P, "String", {
        at: function(t) {
            return o(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(39),
        r = n(20),
        s = n(111),
        a = n(109),
        u = RegExp.prototype,
        c = function(t, e) {
            this._r = t, this._s = e
        };
    n(159)(c, "RegExp String", function() {
        var t = this._r.exec(this._s);
        return {
            value: t,
            done: null === t
        }
    }), i(i.P, "String", {
        matchAll: function(t) {
            if (o(this), !s(t)) throw TypeError(t + " is not a regexp!");
            var e = String(this),
                n = "flags" in u ? String(t.flags) : a.call(t),
                i = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
            return i.lastIndex = r(t.lastIndex), new c(i, e)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(209);
    i(i.P, "String", {
        padEnd: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(209);
    i(i.P, "String", {
        padStart: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(84)("trimLeft", function(t) {
        return function() {
            return t(this, 1)
        }
    }, "trimStart")
}, function(t, e, n) {
    "use strict";
    n(84)("trimRight", function(t) {
        return function() {
            return t(this, 2)
        }
    }, "trimEnd")
}, function(t, e, n) {
    n(173)("asyncIterator")
}, function(t, e, n) {
    n(173)("observable")
}, function(t, e, n) {
    var i = n(1);
    i(i.S, "System", {
        global: n(8)
    })
}, function(t, e, n) {
    for (var i = n(175), o = n(28), r = n(8), s = n(27), a = n(82), u = n(12), c = u("iterator"), l = u("toStringTag"), f = a.Array, h = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], p = 0; p < 5; p++) {
        var d, v = h[p],
            m = r[v],
            g = m && m.prototype;
        if (g) {
            g[c] || s(g, c, f), g[l] || s(g, l, v), a[v] = f;
            for (d in i) g[d] || o(g, d, i[d], !0)
        }
    }
}, function(t, e, n) {
    var i = n(1),
        o = n(171);
    i(i.G + i.B, {
        setImmediate: o.set,
        clearImmediate: o.clear
    })
}, function(t, e, n) {
    var i = n(8),
        o = n(1),
        r = n(110),
        s = n(280),
        a = i.navigator,
        u = !!a && /MSIE .\./.test(a.userAgent),
        c = function(t) {
            return u ? function(e, n) {
                return t(r(s, [].slice.call(arguments, 2), "function" == typeof e ? e : Function(e)), n)
            } : t
        };
    o(o.G + o.B + o.F * u, {
        setTimeout: c(i.setTimeout),
        setInterval: c(i.setInterval)
    })
}, function(t, e, n) {
    n(403), n(342), n(344), n(343), n(346), n(348), n(353), n(347), n(345), n(355), n(354), n(350), n(351), n(349), n(341), n(352), n(356), n(357), n(309), n(311), n(310), n(359), n(358), n(329), n(339), n(340), n(330), n(331), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(390), n(395), n(402), n(393), n(385), n(386), n(391), n(396), n(398), n(381), n(382), n(383), n(384), n(387), n(388), n(389), n(392), n(394), n(397), n(399), n(400), n(401), n(304), n(306), n(305), n(308), n(307), n(293), n(291), n(297), n(294), n(300), n(302), n(290), n(296), n(287), n(301), n(285), n(299), n(298), n(292), n(295), n(284), n(286), n(289), n(288), n(303), n(175), n(375), n(380), n(212), n(376), n(377), n(378), n(379), n(360), n(211), n(213), n(214), n(415), n(404), n(405), n(410), n(413), n(414), n(408), n(411), n(409), n(412), n(406), n(407), n(361), n(362), n(363), n(364), n(365), n(368), n(366), n(367), n(369), n(370), n(371), n(372), n(374), n(373), n(416), n(442), n(445), n(444), n(446), n(447), n(443), n(448), n(449), n(427), n(430), n(426), n(424), n(425), n(428), n(429), n(419), n(441), n(450), n(418), n(420), n(422), n(421), n(423), n(432), n(433), n(435), n(434), n(437), n(436), n(438), n(439), n(440), n(417), n(431), n(453), n(452), n(451), t.exports = n(52)
}, function(t, e, n) {
    (function(e, i) {
        ! function(e, n) {
            t.exports = n()
        }(this, function() {
            "use strict";

            function t(t) {
                return "function" == typeof t || "object" == typeof t && null !== t
            }

            function o(t) {
                return "function" == typeof t
            }

            function r(t) {
                X = t
            }

            function s(t) {
                K = t
            }

            function a() {
                return function() {
                    return e.nextTick(h)
                }
            }

            function u() {
                return function() {
                    Y(h)
                }
            }

            function c() {
                var t = 0,
                    e = new Z(h),
                    n = document.createTextNode("");
                return e.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = t = ++t % 2
                    }
            }

            function l() {
                var t = new MessageChannel;
                return t.port1.onmessage = h,
                    function() {
                        return t.port2.postMessage(0)
                    }
            }

            function f() {
                var t = setTimeout;
                return function() {
                    return t(h, 1)
                }
            }

            function h() {
                for (var t = 0; t < G; t += 2) {
                    var e = nt[t],
                        n = nt[t + 1];
                    e(n), nt[t] = void 0, nt[t + 1] = void 0
                }
                G = 0
            }

            function p() {
                try {
                    var t = n(611);
                    return Y = t.runOnLoop || t.runOnContext, u()
                } catch (t) {
                    return f()
                }
            }

            function d(t, e) {
                var n = arguments,
                    i = this,
                    o = new this.constructor(m);
                void 0 === o[ot] && I(o);
                var r = i._state;
                return r ? ! function() {
                    var t = n[r - 1];
                    K(function() {
                        return C(r, o, t, i._result)
                    })
                }() : _(i, o, t, e), o
            }

            function v(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var n = new e(m);
                return O(n, t), n
            }

            function m() {}

            function g() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function y() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function w(t) {
                try {
                    return t.then
                } catch (t) {
                    return ut.error = t, ut
                }
            }

            function x(t, e, n, i) {
                try {
                    t.call(e, n, i)
                } catch (t) {
                    return t
                }
            }

            function b(t, e, n) {
                K(function(t) {
                    var i = !1,
                        o = x(n, e, function(n) {
                            i || (i = !0,
                                e !== n ? O(t, n) : E(t, n))
                        }, function(e) {
                            i || (i = !0, T(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                    !i && o && (i = !0, T(t, o))
                }, t)
            }

            function P(t, e) {
                e._state === st ? E(t, e._result) : e._state === at ? T(t, e._result) : _(e, void 0, function(e) {
                    return O(t, e)
                }, function(e) {
                    return T(t, e)
                })
            }

            function M(t, e, n) {
                e.constructor === t.constructor && n === d && e.constructor.resolve === v ? P(t, e) : n === ut ? T(t, ut.error) : void 0 === n ? E(t, e) : o(n) ? b(t, e, n) : E(t, e)
            }

            function O(e, n) {
                e === n ? T(e, g()) : t(n) ? M(e, n, w(n)) : E(e, n)
            }

            function k(t) {
                t._onerror && t._onerror(t._result), A(t)
            }

            function E(t, e) {
                t._state === rt && (t._result = e, t._state = st, 0 !== t._subscribers.length && K(A, t))
            }

            function T(t, e) {
                t._state === rt && (t._state = at, t._result = e, K(k, t))
            }

            function _(t, e, n, i) {
                var o = t._subscribers,
                    r = o.length;
                t._onerror = null, o[r] = e, o[r + st] = n, o[r + at] = i, 0 === r && t._state && K(A, t)
            }

            function A(t) {
                var e = t._subscribers,
                    n = t._state;
                if (0 !== e.length) {
                    for (var i = void 0, o = void 0, r = t._result, s = 0; s < e.length; s += 3) i = e[s], o = e[s + n], i ? C(n, i, o, r) : o(r);
                    t._subscribers.length = 0
                }
            }

            function L() {
                this.error = null
            }

            function $(t, e) {
                try {
                    return t(e)
                } catch (t) {
                    return ct.error = t, ct
                }
            }

            function C(t, e, n, i) {
                var r = o(n),
                    s = void 0,
                    a = void 0,
                    u = void 0,
                    c = void 0;
                if (r) {
                    if (s = $(n, i), s === ct ? (c = !0, a = s.error, s = null) : u = !0, e === s) return void T(e, y())
                } else s = i, u = !0;
                e._state !== rt || (r && u ? O(e, s) : c ? T(e, a) : t === st ? E(e, s) : t === at && T(e, s))
            }

            function S(t, e) {
                try {
                    e(function(e) {
                        O(t, e)
                    }, function(e) {
                        T(t, e)
                    })
                } catch (e) {
                    T(t, e)
                }
            }

            function D() {
                return lt++
            }

            function I(t) {
                t[ot] = lt++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            function j(t, e) {
                this._instanceConstructor = t, this.promise = new t(m), this.promise[ot] || I(this.promise), H(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && E(this.promise, this._result))) : T(this.promise, U())
            }

            function U() {
                return new Error("Array Methods must be provided an Array")
            }

            function N(t) {
                return new j(this, t).promise
            }

            function R(t) {
                var e = this;
                return new e(H(t) ? function(n, i) {
                    for (var o = t.length, r = 0; r < o; r++) e.resolve(t[r]).then(n, i)
                } : function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }

            function B(t) {
                var e = this,
                    n = new e(m);
                return T(n, t), n
            }

            function F() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function V() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function q(t) {
                this[ot] = D(), this._result = this._state = void 0, this._subscribers = [], m !== t && ("function" != typeof t && F(), this instanceof q ? S(this, t) : V())
            }

            function W() {
                var t = void 0;
                if ("undefined" != typeof i) t = i;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(e.resolve())
                    } catch (t) {}
                    if ("[object Promise]" === n && !e.cast) return
                }
                t.Promise = q
            }
            var z = void 0;
            z = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var H = z,
                G = 0,
                Y = void 0,
                X = void 0,
                K = function(t, e) {
                    nt[G] = t, nt[G + 1] = e, G += 2, 2 === G && (X ? X(h) : it())
                },
                J = "undefined" != typeof window ? window : void 0,
                Q = J || {},
                Z = Q.MutationObserver || Q.WebKitMutationObserver,
                tt = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                et = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                nt = new Array(1e3),
                it = void 0;
            it = tt ? a() : Z ? c() : et ? l() : void 0 === J ? p() : f();
            var ot = Math.random().toString(36).substring(16),
                rt = void 0,
                st = 1,
                at = 2,
                ut = new L,
                ct = new L,
                lt = 0;
            return j.prototype._enumerate = function() {
                for (var t = this.length, e = this._input, n = 0; this._state === rt && n < t; n++) this._eachEntry(e[n], n)
            }, j.prototype._eachEntry = function(t, e) {
                var n = this._instanceConstructor,
                    i = n.resolve;
                if (i === v) {
                    var o = w(t);
                    if (o === d && t._state !== rt) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                    else if (n === q) {
                        var r = new n(m);
                        M(r, t, o), this._willSettleAt(r, e)
                    } else this._willSettleAt(new n(function(e) {
                        return e(t)
                    }), e)
                } else this._willSettleAt(i(t), e)
            }, j.prototype._settledAt = function(t, e, n) {
                var i = this.promise;
                i._state === rt && (this._remaining--, t === at ? T(i, n) : this._result[e] = n), 0 === this._remaining && E(i, this._result)
            }, j.prototype._willSettleAt = function(t, e) {
                var n = this;
                _(t, void 0, function(t) {
                    return n._settledAt(st, e, t)
                }, function(t) {
                    return n._settledAt(at, e, t)
                })
            }, q.all = N, q.race = R, q.resolve = v, q.reject = B, q._setScheduler = r, q._setAsap = s, q._asap = K, q.prototype = {
                constructor: q,
                then: d,
                catch: function(t) {
                    return this.then(null, t)
                }
            }, W(), q.polyfill = W, q.Promise = q, q
        })
    }).call(e, n(219), function() {
        return this
    }())
}, function(t, e) {}, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, function(t, e, n) {
    var i;
    ! function() {
        "use strict";

        function o(t, e) {
            function n(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var i;
            if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !o.notNeeded(t)) {
                for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, u = 0, c = r.length; u < c; u++) a[r[u]] = n(a[r[u]], a);
                s && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
                    var o = Node.prototype.removeEventListener;
                    "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
                }, t.addEventListener = function(e, n, i) {
                    var o = Node.prototype.addEventListener;
                    "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(t) {
                        t.propagationStopped || n(t)
                    }), i) : o.call(t, e, n, i)
                }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(t) {
                    i(t)
                }, !1), t.onclick = null)
            }
        }
        var r = navigator.userAgent.indexOf("Windows Phone") >= 0,
            s = navigator.userAgent.indexOf("Android") > 0 && !r,
            a = /iP(ad|hone|od)/.test(navigator.userAgent) && !r,
            u = a && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            c = a && /OS [6-7]_\d/.test(navigator.userAgent),
            l = navigator.userAgent.indexOf("BB10") > 0;
        o.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (a && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, o.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !s;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, o.prototype.sendClick = function(t, e) {
            var n, i;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
        }, o.prototype.determineEventType = function(t) {
            return s && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, o.prototype.focus = function(t) {
            var e;
            a && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, o.prototype.updateScrollParent = function(t) {
            var e, n;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                n = t;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        e = n, t.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, o.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, o.prototype.onTouchStart = function(t) {
            var e, n, i;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], a) {
                if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
                if (!u) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, o.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
        }, o.prototype.onTouchMove = function(t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, o.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, o.prototype.onTouchEnd = function(t) {
            var e, n, i, o, r, l = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, c && (r = t.changedTouches[0], l = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = l.tagName.toLowerCase(), "label" === i) {
                if (e = this.findControl(l)) {
                    if (this.focus(l), s) return !1;
                    l = e
                }
            } else if (this.needsFocus(l)) return t.timeStamp - n > 100 || a && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, t), a && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
            return !(!a || u || (o = l.fastClickScrollParent, !o || o.fastClickLastScrollTop === o.scrollTop)) || (this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)), !1)
        }, o.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, o.prototype.onMouse = function(t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        }, o.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, o.prototype.destroy = function() {
            var t = this.layer;
            s && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, o.notNeeded = function(t) {
            var e, n, i, o;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!s) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (l && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }, o.attach = function(t, e) {
            return new o(t, e)
        }, i = function() {
            return o
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }()
}, function(t, e, n) {
    t.exports = n.p + "index.html"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Arrow_Left.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Arrow_Right.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Arrow_Work.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Awwwards_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/BMW_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Clio_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/DHL_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/DNB_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Disney_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Dove_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/FWA_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Lion_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Logo_minimal.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Logo_minimal_white.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/MCD_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Mic.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Netcom_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Play_Button.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Raph.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/Volvo_logo.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/about/Achievements.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/about/Clients.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/about/What.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/about/Who.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/cover_img.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-114x114.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-120x120.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-144x144.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-152x152.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-57x57.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-60x60.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-72x72.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/apple-touch-icon-76x76.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/favicon-128.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/favicon-16x16.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/favicon-196x196.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/favicon-32x32.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/favicon-96x96.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/favicon.ico"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/mstile-144x144.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/mstile-150x150.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/mstile-310x150.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/mstile-310x310.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/fav_ico/mstile-70x70.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/landscape/background.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/landscape/pillarTexture.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/logo-ani.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/logo-animation.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/logo-symbol.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/logo-turn.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/logo-type.svg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/logo_glitch.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/00.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/01.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/02.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/03.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/04.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/05.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/06.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/07.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/_tmb.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/FixedIt/mobile_thumb.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/00.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/01.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/02.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/03.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/04.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/05.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/06.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/07.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/08.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/09.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/_tmb.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/Hypebeast/mobile_thumb.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/JasonBourne/00.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/JasonBourne/01.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/JasonBourne/02.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/JasonBourne/03.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/JasonBourne/04.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/JasonBourne/_tmb.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/projects/JasonBourne/mobile_thumb.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/symbol-e.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/symbol-h.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/symbol-l.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/test.png"
}, function(t, e, n) {
    t.exports = n.p + "assets/images/uvTest.jpg"
}, function(t, e, n) {
    t.exports = n.p + "assets/3d/Skull_3.obj"
}, function(t, e, n) {
    t.exports = n.p + "assets/3d/logo.obj"
}, function(t, e, n) {
    t.exports = n.p + "assets/3d/skull.obj"
}, function(t, e, n) {
    t.exports = n.p + "assets/3d/skull_final.obj"
}, function(t, e, n) {
    t.exports = n.p + "assets/data/work.json"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProLight/DINNextLTPro-Light.eot"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProLight/DINNextLTPro-Light.otf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProLight/DINNextLTPro-Light.ttf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProLight/DINNextLTPro-Light.woff"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProMedium/DINNextLTPro-Medium.eot"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProMedium/DINNextLTPro-Medium.otf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProMedium/DINNextLTPro-Medium.ttf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProMedium/DINNextLTPro-Medium.woff"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProRegular/DINNextLTPro-Regular.eot"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProRegular/DINNextLTPro-Regular.otf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProRegular/DINNextLTPro-Regular.ttf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProRegular/DINNextLTPro-Regular.woff"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.eot"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.otf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.ttf"
}, function(t, e, n) {
    t.exports = n.p + "assets/fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.woff"
}, function(t, e, n) {
    t.exports = n.p + "assets/sound/landscape/ambient.mp3"
}, function(t, e, n) {
    t.exports = n.p + "assets/sound/landscape/impact.mp3"
}, function(t, e, n) {
    t.exports = n.p + "assets/sound/skull/closed_loop.mp3"
}, function(t, e, n) {
    t.exports = n.p + "assets/sound/skull/explosion.mp3"
}, function(t, e, n) {
    t.exports = n.p + "assets/sound/skull/open_loop.mp3"
}, function(t, e, n) {
    t.exports = n.p + "assets/sound/skull/reassambly.mp3"
}, function(t, e, n) {
    t.exports = n.p + "assets/sound/skull/reassambly_1.mp3"
}, function(t, e, n) {
    t.exports = n.p + "assets/videos/Appoteket.mp4"
}, function(t, e, n) {
    t.exports = n.p + "assets/videos/BaconClubhouse.mp4"
}, function(t, e, n) {
    t.exports = n.p + "assets/videos/Watchinvest.mp4"
}, function(t, e, n) {
    t.exports = n.p + "assets/videos/big_buck_bunny.mp4"
}, , function(t, e) {
    "use strict";
    e.__esModule = !0;
    e.loopAsync = function(t, e, n) {
        var i = 0,
            o = !1,
            r = !1,
            s = !1,
            a = void 0,
            u = function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return o = !0, r ? void(a = e) : void n.apply(void 0, e)
            },
            c = function c() {
                if (!o && (s = !0, !r)) {
                    for (r = !0; !o && i < t && s;) s = !1, e(i++, c, u);
                    return r = !1, o ? void n.apply(void 0, a) : void(i >= t && s && (o = !0, n()))
                }
            };
        c()
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.replaceLocation = e.pushLocation = e.startListener = e.getCurrentLocation = e.go = e.getUserConfirmation = void 0;
    var o = n(176);
    Object.defineProperty(e, "getUserConfirmation", {
        enumerable: !0,
        get: function() {
            return o.getUserConfirmation
        }
    }), Object.defineProperty(e, "go", {
        enumerable: !0,
        get: function() {
            return o.go
        }
    });
    var r = n(78),
        s = (i(r), n(77)),
        a = n(101),
        u = n(215),
        c = n(60),
        l = "hashchange",
        f = function() {
            var t = window.location.href,
                e = t.indexOf("#");
            return e === -1 ? "" : t.substring(e + 1)
        },
        h = function(t) {
            return window.location.hash = t
        },
        p = function(t) {
            var e = window.location.href.indexOf("#");
            window.location.replace(window.location.href.slice(0, e >= 0 ? e : 0) + "#" + t)
        },
        d = e.getCurrentLocation = function(t, e) {
            var n = t.decodePath(f()),
                i = (0, c.getQueryStringValueFromPath)(n, e),
                o = void 0;
            i && (n = (0, c.stripQueryStringValueFromPath)(n, e), o = (0, u.readState)(i));
            var r = (0, c.parsePath)(n);
            return r.state = o, (0, s.createLocation)(r, void 0, i)
        },
        v = void 0,
        m = (e.startListener = function(t, e, n) {
            var i = function() {
                    var i = f(),
                        o = e.encodePath(i);
                    if (i !== o) p(o);
                    else {
                        var r = d(e, n);
                        if (v && r.key && v.key === r.key) return;
                        v = r, t(r)
                    }
                },
                o = f(),
                r = e.encodePath(o);
            return o !== r && p(r), (0, a.addEventListener)(window, l, i),
                function() {
                    return (0, a.removeEventListener)(window, l, i)
                }
        }, function(t, e, n, i) {
            var o = t.state,
                r = t.key,
                s = e.encodePath((0, c.createPath)(t));
            void 0 !== o && (s = (0, c.addQueryStringValueToPath)(s, n, r), (0, u.saveState)(r, o)), v = t, i(s)
        });
    e.pushLocation = function(t, e, n) {
        return m(t, e, n, function(t) {
            f() !== t && h(t)
        })
    }, e.replaceLocation = function(t, e, n) {
        return m(t, e, n, function(t) {
            f() !== t && p(t)
        })
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.replaceLocation = e.pushLocation = e.getCurrentLocation = e.go = e.getUserConfirmation = void 0;
    var i = n(176);
    Object.defineProperty(e, "getUserConfirmation", {
        enumerable: !0,
        get: function() {
            return i.getUserConfirmation
        }
    }), Object.defineProperty(e, "go", {
        enumerable: !0,
        get: function() {
            return i.go
        }
    });
    var o = n(77),
        r = n(60);
    e.getCurrentLocation = function() {
        return (0, o.createLocation)(window.location)
    }, e.pushLocation = function(t) {
        return window.location.href = (0, r.createPath)(t), !1
    }, e.replaceLocation = function(t) {
        return window.location.replace((0, r.createPath)(t)), !1
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        s = n(78),
        a = (o(s), n(102)),
        u = o(a),
        c = n(118),
        l = n(101),
        f = n(589),
        h = i(f),
        p = n(177),
        d = o(p),
        v = "_k",
        m = function(t) {
            return "/" === t.charAt(0) ? t : "/" + t
        },
        g = {
            hashbang: {
                encodePath: function(t) {
                    return "!" === t.charAt(0) ? t : "!" + t
                },
                decodePath: function(t) {
                    return "!" === t.charAt(0) ? t.substring(1) : t
                }
            },
            noslash: {
                encodePath: function(t) {
                    return "/" === t.charAt(0) ? t.substring(1) : t
                },
                decodePath: m
            },
            slash: {
                encodePath: m,
                decodePath: m
            }
        },
        y = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c.canUseDOM ? void 0 : (0, u.default)(!1);
            var e = t.queryKey,
                n = t.hashType;
            "string" != typeof e && (e = v), null == n && (n = "slash"), n in g || (n = "slash");
            var i = g[n],
                o = h.getUserConfirmation,
                s = function() {
                    return h.getCurrentLocation(i, e)
                },
                a = function(t) {
                    return h.pushLocation(t, i, e)
                },
                f = function(t) {
                    return h.replaceLocation(t, i, e)
                },
                p = (0, d.default)(r({
                    getUserConfirmation: o
                }, t, {
                    getCurrentLocation: s,
                    pushLocation: a,
                    replaceLocation: f,
                    go: h.go
                })),
                m = 0,
                y = void 0,
                w = function(t, n) {
                    1 === ++m && (y = h.startListener(p.transitionTo, i, e));
                    var o = n ? p.listenBefore(t) : p.listen(t);
                    return function() {
                        o(), 0 === --m && y()
                    }
                },
                x = function(t) {
                    return w(t, !0)
                },
                b = function(t) {
                    return w(t, !1)
                },
                P = ((0, l.supportsGoWithoutReloadUsingHash)(), function(t) {
                    p.go(t)
                }),
                M = function(t) {
                    return "#" + i.encodePath(p.createHref(t))
                };
            return r({}, p, {
                listenBefore: x,
                listen: b,
                go: P,
                createHref: M
            })
        };
    e.default = y
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        r = n(78),
        s = (i(r), n(102)),
        a = i(s),
        u = n(77),
        c = n(60),
        l = n(177),
        f = i(l),
        h = n(117),
        p = function(t) {
            return t.filter(function(t) {
                return t.state
            }).reduce(function(t, e) {
                return t[e.key] = e.state, t
            }, {})
        },
        d = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            Array.isArray(t) ? t = {
                entries: t
            } : "string" == typeof t && (t = {
                entries: [t]
            });
            var e = function() {
                    var t = v[m],
                        e = (0, c.createPath)(t),
                        n = void 0,
                        i = void 0;
                    t.key && (n = t.key, i = w(n));
                    var r = (0, c.parsePath)(e);
                    return (0, u.createLocation)(o({}, r, {
                        state: i
                    }), void 0, n)
                },
                n = function(t) {
                    var e = m + t;
                    return e >= 0 && e < v.length
                },
                i = function(t) {
                    if (t && n(t)) {
                        m += t;
                        var i = e();
                        l.transitionTo(o({}, i, {
                            action: h.POP
                        }))
                    }
                },
                r = function(t) {
                    m += 1, m < v.length && v.splice(m), v.push(t), y(t.key, t.state)
                },
                s = function(t) {
                    v[m] = t, y(t.key, t.state)
                },
                l = (0, f.default)(o({}, t, {
                    getCurrentLocation: e,
                    pushLocation: r,
                    replaceLocation: s,
                    go: i
                })),
                d = t,
                v = d.entries,
                m = d.current;
            "string" == typeof v ? v = [v] : Array.isArray(v) || (v = ["/"]), v = v.map(function(t) {
                return (0, u.createLocation)(t)
            }), null == m ? m = v.length - 1 : m >= 0 && m < v.length ? void 0 : (0, a.default)(!1);
            var g = p(v),
                y = function(t, e) {
                    return g[t] = e
                },
                w = function(t) {
                    return g[t]
                };
            return o({}, l, {
                canGo: n
            })
        };
    e.default = d
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.locationsAreEqual = e.Actions = e.useQueries = e.useBeforeUnload = e.useBasename = e.createMemoryHistory = e.createHashHistory = e.createHistory = void 0;
    var r = n(77);
    Object.defineProperty(e, "locationsAreEqual", {
        enumerable: !0,
        get: function() {
            return r.locationsAreEqual
        }
    });
    var s = n(216),
        a = o(s),
        u = n(591),
        c = o(u),
        l = n(592),
        f = o(l),
        h = n(594),
        p = o(h),
        d = n(595),
        v = o(d),
        m = n(596),
        g = o(m),
        y = n(117),
        w = i(y);
    e.createHistory = a.default, e.createHashHistory = c.default, e.createMemoryHistory = f.default, e.useBasename = p.default, e.useBeforeUnload = v.default, e.useQueries = g.default, e.Actions = w
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        r = n(178),
        s = i(r),
        a = n(60),
        u = function(t) {
            return function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    n = t(e),
                    i = e.basename,
                    r = function(t) {
                        return t ? (i && null == t.basename && (0 === t.pathname.indexOf(i) ? (t.pathname = t.pathname.substring(i.length), t.basename = i, "" === t.pathname && (t.pathname = "/")) : t.basename = ""), t) : t
                    },
                    u = function(t) {
                        if (!i) return t;
                        var e = "string" == typeof t ? (0, a.parsePath)(t) : t,
                            n = e.pathname,
                            r = "/" === i.slice(-1) ? i : i + "/",
                            s = "/" === n.charAt(0) ? n.slice(1) : n,
                            u = r + s;
                        return o({}, e, {
                            pathname: u
                        })
                    },
                    c = function() {
                        return r(n.getCurrentLocation())
                    },
                    l = function(t) {
                        return n.listenBefore(function(e, n) {
                            return (0, s.default)(t, r(e), n)
                        })
                    },
                    f = function(t) {
                        return n.listen(function(e) {
                            return t(r(e))
                        })
                    },
                    h = function(t) {
                        return n.push(u(t))
                    },
                    p = function(t) {
                        return n.replace(u(t))
                    },
                    d = function(t) {
                        return n.createPath(u(t))
                    },
                    v = function(t) {
                        return n.createHref(u(t))
                    },
                    m = function(t) {
                        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                        return r(n.createLocation.apply(n, [u(t)].concat(i)))
                    };
                return o({}, n, {
                    getCurrentLocation: c,
                    listenBefore: l,
                    listen: f,
                    push: h,
                    replace: p,
                    createPath: d,
                    createHref: v,
                    createLocation: m
                })
            }
        };
    e.default = u
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        r = n(102),
        s = i(r),
        a = n(101),
        u = n(118),
        c = function(t) {
            var e = function(e) {
                var n = t();
                if ("string" == typeof n) return (e || window.event).returnValue = n, n
            };
            return (0, a.addEventListener)(window, "beforeunload", e),
                function() {
                    return (0, a.removeEventListener)(window, "beforeunload", e)
                }
        },
        l = function(t) {
            return u.canUseDOM ? void 0 : (0, s.default)(!1),
                function(e) {
                    var n = t(e),
                        i = [],
                        r = void 0,
                        s = function() {
                            for (var t = void 0, e = 0, n = i.length; null == t && e < n; ++e) t = i[e].call();
                            return t
                        },
                        a = function(t) {
                            return 1 === i.push(t) && (r = c(s)),
                                function() {
                                    i = i.filter(function(e) {
                                        return e !== t
                                    }), 0 === i.length && r && (r(), r = null)
                                }
                        };
                    return o({}, n, {
                        listenBeforeUnload: a
                    })
                }
        };
    e.default = l
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        r = n(598),
        s = n(178),
        a = i(s),
        u = n(77),
        c = n(60),
        l = function(t) {
            return (0, r.stringify)(t).replace(/%20/g, "+")
        },
        f = r.parse,
        h = function(t) {
            return function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    n = t(e),
                    i = e.stringifyQuery,
                    r = e.parseQueryString;
                "function" != typeof i && (i = l), "function" != typeof r && (r = f);
                var s = function(t) {
                        return t ? (null == t.query && (t.query = r(t.search.substring(1))), t) : t
                    },
                    h = function(t, e) {
                        if (null == e) return t;
                        var n = "string" == typeof t ? (0, c.parsePath)(t) : t,
                            r = i(e),
                            s = r ? "?" + r : "";
                        return o({}, n, {
                            search: s
                        })
                    },
                    p = function() {
                        return s(n.getCurrentLocation())
                    },
                    d = function(t) {
                        return n.listenBefore(function(e, n) {
                            return (0, a.default)(t, s(e), n)
                        })
                    },
                    v = function(t) {
                        return n.listen(function(e) {
                            return t(s(e))
                        })
                    },
                    m = function(t) {
                        return n.push(h(t, t.query))
                    },
                    g = function(t) {
                        return n.replace(h(t, t.query))
                    },
                    y = function(t) {
                        return n.createPath(h(t, t.query))
                    },
                    w = function(t) {
                        return n.createHref(h(t, t.query))
                    },
                    x = function(t) {
                        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                        var r = n.createLocation.apply(n, [h(t, t.query)].concat(i));
                        return t.query && (r.query = (0, u.createQuery)(t.query)), s(r)
                    };
                return o({}, n, {
                    getCurrentLocation: p,
                    listenBefore: d,
                    listen: v,
                    push: m,
                    replace: g,
                    createPath: y,
                    createHref: w,
                    createLocation: x
                })
            }
        };
    e.default = h
}, function(t, e) {
    (function() {
        var t;
        t = "undefined" != typeof e && null !== e ? e : this, t.Lethargy = function() {
            function t(t, e, n, i) {
                this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != n ? 1 + Math.abs(n) : 1.1, this.delay = null != i ? i : 150, this.lastUpDeltas = function() {
                    var t, e, n;
                    for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
                    return n
                }.call(this), this.lastDownDeltas = function() {
                    var t, e, n;
                    for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
                    return n
                }.call(this), this.deltasTimestamp = function() {
                    var t, e, n;
                    for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
                    return n
                }.call(this)
            }
            return t.prototype.check = function(t) {
                var e;
                return t = t.originalEvent || t, null != t.wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = t.deltaY * -40 : null == t.detail && 0 !== t.detail || (e = t.detail * -40),
                    this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
            }, t.prototype.isInertia = function(t) {
                var e, n, i, o, r, s, a;
                return e = t === -1 ? this.lastDownDeltas : this.lastUpDeltas, null === e[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability), n = e.slice(this.stability, 2 * this.stability), a = i.reduce(function(t, e) {
                    return t + e
                }), r = n.reduce(function(t, e) {
                    return t + e
                }), s = a / i.length, o = r / n.length, Math.abs(s) < Math.abs(o * this.tolerance) && this.sensitivity < Math.abs(o) && t)
            }, t.prototype.showLastUpDeltas = function() {
                return this.lastUpDeltas
            }, t.prototype.showLastDownDeltas = function() {
                return this.lastDownDeltas
            }, t
        }()
    }).call(this)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        switch (t.arrayFormat) {
            case "index":
                return function(e, n, i) {
                    return null === n ? [r(e, t), "[", i, "]"].join("") : [r(e, t), "[", r(i, t), "]=", r(n, t)].join("")
                };
            case "bracket":
                return function(e, n) {
                    return null === n ? r(e, t) : [r(e, t), "[]=", r(n, t)].join("")
                };
            default:
                return function(e, n) {
                    return null === n ? r(e, t) : [r(e, t), "=", r(n, t)].join("")
                }
        }
    }

    function o(t) {
        var e;
        switch (t.arrayFormat) {
            case "index":
                return function(t, n, i) {
                    return e = /\[(\d*)]$/.exec(t), t = t.replace(/\[\d*]$/, ""), e ? (void 0 === i[t] && (i[t] = {}), void(i[t][e[1]] = n)) : void(i[t] = n)
                };
            case "bracket":
                return function(t, n, i) {
                    return e = /(\[])$/.exec(t), t = t.replace(/\[]$/, ""), e && void 0 !== i[t] ? void(i[t] = [].concat(i[t], n)) : void(i[t] = n)
                };
            default:
                return function(t, e, n) {
                    return void 0 === n[t] ? void(n[t] = e) : void(n[t] = [].concat(n[t], e))
                }
        }
    }

    function r(t, e) {
        return e.encode ? e.strict ? a(t) : encodeURIComponent(t) : t
    }

    function s(t) {
        return Array.isArray(t) ? t.sort() : "object" == typeof t ? s(Object.keys(t)).sort(function(t, e) {
            return Number(t) - Number(e)
        }).map(function(e) {
            return t[e]
        }) : t
    }
    var a = n(604),
        u = n(218);
    e.extract = function(t) {
        return t.split("?")[1] || ""
    }, e.parse = function(t, e) {
        e = u({
            arrayFormat: "none"
        }, e);
        var n = o(e),
            i = Object.create(null);
        return "string" != typeof t ? i : (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function(t) {
            var e = t.replace(/\+/g, " ").split("="),
                o = e.shift(),
                r = e.length > 0 ? e.join("=") : void 0;
            r = void 0 === r ? null : decodeURIComponent(r), n(decodeURIComponent(o), r, i)
        }), Object.keys(i).sort().reduce(function(t, e) {
            var n = i[e];
            return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? t[e] = s(n) : t[e] = n, t
        }, Object.create(null))) : i
    }, e.stringify = function(t, e) {
        var n = {
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        };
        e = u(n, e);
        var o = i(e);
        return t ? Object.keys(t).sort().map(function(n) {
            var i = t[n];
            if (void 0 === i) return "";
            if (null === i) return r(n, e);
            if (Array.isArray(i)) {
                var s = [];
                return i.slice().forEach(function(t) {
                    void 0 !== t && s.push(o(n, t, s.length))
                }), s.join("&")
            }
            return r(n, e) + "=" + r(i, e)
        }).filter(function(t) {
            return t.length > 0
        }).join("&") : ""
    }
}, , , , , function(t, e, n) {
    (function(e, n) {
        ! function(e) {
            "use strict";

            function i(t, e, n, i) {
                var o = e && e.prototype instanceof r ? e : r,
                    s = Object.create(o.prototype),
                    a = new p(i || []);
                return s._invoke = l(t, n, a), s
            }

            function o(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function r() {}

            function s() {}

            function a() {}

            function u(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function c(t) {
                function e(n, i, r, s) {
                    var a = o(t[n], t, i);
                    if ("throw" !== a.type) {
                        var u = a.arg,
                            c = u.value;
                        return c && "object" == typeof c && y.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                            e("next", t, r, s)
                        }, function(t) {
                            e("throw", t, r, s)
                        }) : Promise.resolve(c).then(function(t) {
                            u.value = t, r(u)
                        }, s)
                    }
                    s(a.arg)
                }

                function i(t, n) {
                    function i() {
                        return new Promise(function(i, o) {
                            e(t, n, i, o)
                        })
                    }
                    return r = r ? r.then(i, i) : i()
                }
                "object" == typeof n && n.domain && (e = n.domain.bind(e));
                var r;
                this._invoke = i
            }

            function l(t, e, n) {
                var i = O;
                return function(r, s) {
                    if (i === E) throw new Error("Generator is already running");
                    if (i === T) {
                        if ("throw" === r) throw s;
                        return v()
                    }
                    for (;;) {
                        var a = n.delegate;
                        if (a) {
                            if ("return" === r || "throw" === r && a.iterator[r] === m) {
                                n.delegate = null;
                                var u = a.iterator.return;
                                if (u) {
                                    var c = o(u, a.iterator, s);
                                    if ("throw" === c.type) {
                                        r = "throw", s = c.arg;
                                        continue
                                    }
                                }
                                if ("return" === r) continue
                            }
                            var c = o(a.iterator[r], a.iterator, s);
                            if ("throw" === c.type) {
                                n.delegate = null, r = "throw", s = c.arg;
                                continue
                            }
                            r = "next", s = m;
                            var l = c.arg;
                            if (!l.done) return i = k, l;
                            n[a.resultName] = l.value, n.next = a.nextLoc, n.delegate = null
                        }
                        if ("next" === r) n.sent = n._sent = s;
                        else if ("throw" === r) {
                            if (i === O) throw i = T, s;
                            n.dispatchException(s) && (r = "next", s = m)
                        } else "return" === r && n.abrupt("return", s);
                        i = E;
                        var c = o(t, e, n);
                        if ("normal" === c.type) {
                            i = n.done ? T : k;
                            var l = {
                                value: c.arg,
                                done: n.done
                            };
                            if (c.arg !== _) return l;
                            n.delegate && "next" === r && (s = m)
                        } else "throw" === c.type && (i = T, r = "throw", s = c.arg)
                    }
                }
            }

            function f(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function h(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function p(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(f, this), this.reset(!0)
            }

            function d(t) {
                if (t) {
                    var e = t[x];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            i = function e() {
                                for (; ++n < t.length;)
                                    if (y.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = m, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                return {
                    next: v
                }
            }

            function v() {
                return {
                    value: m,
                    done: !0
                }
            }
            var m, g = Object.prototype,
                y = g.hasOwnProperty,
                w = "function" == typeof Symbol ? Symbol : {},
                x = w.iterator || "@@iterator",
                b = w.toStringTag || "@@toStringTag",
                P = "object" == typeof t,
                M = e.regeneratorRuntime;
            if (M) return void(P && (t.exports = M));
            M = e.regeneratorRuntime = P ? t.exports : {}, M.wrap = i;
            var O = "suspendedStart",
                k = "suspendedYield",
                E = "executing",
                T = "completed",
                _ = {},
                A = {};
            A[x] = function() {
                return this
            };
            var L = Object.getPrototypeOf,
                $ = L && L(L(d([])));
            $ && $ !== g && y.call($, x) && (A = $);
            var C = a.prototype = r.prototype = Object.create(A);
            s.prototype = C.constructor = a, a.constructor = s, a[b] = s.displayName = "GeneratorFunction", M.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === s || "GeneratorFunction" === (e.displayName || e.name))
            }, M.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, b in t || (t[b] = "GeneratorFunction")), t.prototype = Object.create(C), t
            }, M.awrap = function(t) {
                return {
                    __await: t
                }
            }, u(c.prototype), M.AsyncIterator = c, M.async = function(t, e, n, o) {
                var r = new c(i(t, e, n, o));
                return M.isGeneratorFunction(e) ? r : r.next().then(function(t) {
                    return t.done ? t.value : r.next()
                })
            }, u(C), C[b] = "Generator", C.toString = function() {
                return "[object Generator]"
            }, M.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var i = e.pop();
                            if (i in t) return n.value = i, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, M.values = d, p.prototype = {
                constructor: p,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.tryEntries.forEach(h), !t)
                        for (var e in this) "t" === e.charAt(0) && y.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0],
                        e = t.completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    function e(e, i) {
                        return r.type = "throw", r.arg = t, n.next = e, !!i
                    }
                    if (this.done) throw t;
                    for (var n = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i],
                            r = o.completion;
                        if ("root" === o.tryLoc) return e("end");
                        if (o.tryLoc <= this.prev) {
                            var s = y.call(o, "catchLoc"),
                                a = y.call(o, "finallyLoc");
                            if (s && a) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && y.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var r = o ? o.completion : {};
                    return r.type = t, r.arg = e, o ? this.next = o.finallyLoc : this.complete(r), _
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = t.arg, this.next = "end") : "normal" === t.type && e && (this.next = e)
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), h(n), _
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var o = i.arg;
                                h(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: d(t),
                        resultName: e,
                        nextLoc: n
                    }, _
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(e, function() {
        return this
    }(), n(219))
}, function(t, e) {
    "use strict";
    t.exports = function(t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}, function(t, e) {
    function n() {}
    n.prototype = {
        on: function(t, e, n) {
            var i = this.e || (this.e = {});
            return (i[t] || (i[t] = [])).push({
                fn: e,
                ctx: n
            }), this
        },
        once: function(t, e, n) {
            function i() {
                o.off(t, i), e.apply(n, arguments)
            }
            var o = this;
            return i._ = e, this.on(t, i, n)
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[t] || []).slice(),
                i = 0,
                o = n.length;
            for (i; i < o; i++) n[i].fn.apply(n[i].ctx, e);
            return this
        },
        off: function(t, e) {
            var n = this.e || (this.e = {}),
                i = n[t],
                o = [];
            if (i && e)
                for (var r = 0, s = i.length; r < s; r++) i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
            return o.length ? n[t] = o : delete n[t], this
        }
    }, t.exports = n
}, function(t, e) {
    "use strict";
    t.exports = function(t) {
        return JSON.parse(JSON.stringify(t))
    }
}, function(t, e) {
    "use strict";
    t.exports = function() {
        return {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch: "ontouchstart" in document,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1
        }
    }()
}, , function(t, e) {
    ! function(t) {
        "use strict";

        function e(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function n(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function i(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return g.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function o(t) {
            this.map = {}, t instanceof o ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function r(t) {
            return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0)
        }

        function s(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    n(t.error)
                }
            })
        }

        function a(t) {
            var e = new FileReader,
                n = s(e);
            return e.readAsArrayBuffer(t), n
        }

        function u(t) {
            var e = new FileReader,
                n = s(e);
            return e.readAsText(t), n
        }

        function c(t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), i = 0; i < e.length; i++) n[i] = String.fromCharCode(e[i]);
            return n.join("")
        }

        function l(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function f() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (g.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (g.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (g.arrayBuffer && g.blob && w(t)) this._bodyArrayBuffer = l(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!g.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !x(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = l(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : g.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, g.blob && (this.blob = function() {
                var t = r(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? r(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
            }), this.text = function() {
                var t = r(this);
                if (t) return t;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, g.formData && (this.formData = function() {
                return this.text().then(d)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function h(t) {
            var e = t.toUpperCase();
            return b.indexOf(e) > -1 ? e : t
        }

        function p(t, e) {
            e = e || {};
            var n = e.body;
            if ("string" == typeof t) this.url = t;
            else {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new o(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
            }
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new o(e.headers)), this.method = h(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function d(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("="),
                        i = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(i), decodeURIComponent(o))
                }
            }), e
        }

        function v(t) {
            var e = new o;
            return t.split("\r\n").forEach(function(t) {
                var n = t.split(":"),
                    i = n.shift().trim();
                if (i) {
                    var o = n.join(":").trim();
                    e.append(i, o)
                }
            }), e
        }

        function m(t, e) {
            e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new o(e.headers), this.url = e.url || "", this._initBody(t)
        }
        if (!t.fetch) {
            var g = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (g.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                w = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                x = ArrayBuffer.isView || function(t) {
                    return t && y.indexOf(Object.prototype.toString.call(t)) > -1
                };
            o.prototype.append = function(t, i) {
                t = e(t), i = n(i);
                var o = this.map[t];
                o || (o = [], this.map[t] = o), o.push(i)
            }, o.prototype.delete = function(t) {
                delete this.map[e(t)]
            }, o.prototype.get = function(t) {
                var n = this.map[e(t)];
                return n ? n[0] : null
            }, o.prototype.getAll = function(t) {
                return this.map[e(t)] || []
            }, o.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }, o.prototype.set = function(t, i) {
                this.map[e(t)] = [n(i)]
            }, o.prototype.forEach = function(t, e) {
                Object.getOwnPropertyNames(this.map).forEach(function(n) {
                    this.map[n].forEach(function(i) {
                        t.call(e, i, n, this)
                    }, this)
                }, this)
            }, o.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n)
                }), i(t)
            }, o.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), i(t)
            }, o.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([n, e])
                }), i(t)
            }, g.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            p.prototype.clone = function() {
                return new p(this, {
                    body: this._bodyInit
                })
            }, f.call(p.prototype), f.call(m.prototype), m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            }, m.error = function() {
                var t = new m(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var P = [301, 302, 303, 307, 308];
            m.redirect = function(t, e) {
                if (P.indexOf(e) === -1) throw new RangeError("Invalid status code");
                return new m(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = o, t.Request = p, t.Response = m, t.fetch = function(t, e) {
                return new Promise(function(n, i) {
                    var o = new p(t, e),
                        r = new XMLHttpRequest;
                    r.onload = function() {
                        var t = {
                            status: r.status,
                            statusText: r.statusText,
                            headers: v(r.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in r ? r.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in r ? r.response : r.responseText;
                        n(new m(e, t))
                    }, r.onerror = function() {
                        i(new TypeError("Network request failed"))
                    }, r.ontimeout = function() {
                        i(new TypeError("Network request failed"))
                    }, r.open(o.method, o.url, !0), "include" === o.credentials && (r.withCredentials = !0), "responseType" in r && g.blob && (r.responseType = "blob"), o.headers.forEach(function(t, e) {
                        r.setRequestHeader(e, t)
                    }), r.send("undefined" == typeof o._bodyInit ? null : o._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}, function(t, e, n) {
    function i(t) {
        return n(o(t))
    }

    function o(t) {
        return r[t] || function() {
            throw new Error("Cannot find module '" + t + "'.")
        }()
    }
    var r = {
        "./3d/Skull_3.obj": 555,
        "./3d/logo.obj": 556,
        "./3d/skull.obj": 557,
        "./3d/skull_final.obj": 558,
        "./data/work.json": 559,
        "./fonts/DINNextLTProLight/DINNextLTPro-Light.eot": 560,
        "./fonts/DINNextLTProLight/DINNextLTPro-Light.otf": 561,
        "./fonts/DINNextLTProLight/DINNextLTPro-Light.ttf": 562,
        "./fonts/DINNextLTProLight/DINNextLTPro-Light.woff": 563,
        "./fonts/DINNextLTProMedium/DINNextLTPro-Medium.eot": 564,
        "./fonts/DINNextLTProMedium/DINNextLTPro-Medium.otf": 565,
        "./fonts/DINNextLTProMedium/DINNextLTPro-Medium.ttf": 566,
        "./fonts/DINNextLTProMedium/DINNextLTPro-Medium.woff": 567,
        "./fonts/DINNextLTProRegular/DINNextLTPro-Regular.eot": 568,
        "./fonts/DINNextLTProRegular/DINNextLTPro-Regular.otf": 569,
        "./fonts/DINNextLTProRegular/DINNextLTPro-Regular.ttf": 570,
        "./fonts/DINNextLTProRegular/DINNextLTPro-Regular.woff": 571,
        "./fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.eot": 572,
        "./fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.otf": 573,
        "./fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.ttf": 574,
        "./fonts/DINNextLTProUltraLight/DINNextLTPro-UltraLight.woff": 575,
        "./images/Arrow_Left.svg": 469,
        "./images/Arrow_Right.svg": 470,
        "./images/Arrow_Work.svg": 471,
        "./images/Awwwards_logo.svg": 472,
        "./images/BMW_logo.svg": 473,
        "./images/Clio_logo.svg": 474,
        "./images/DHL_logo.svg": 475,
        "./images/DNB_logo.svg": 476,
        "./images/Disney_logo.svg": 477,
        "./images/Dove_logo.svg": 478,
        "./images/FWA_logo.svg": 479,
        "./images/Lion_logo.svg": 480,
        "./images/Logo_minimal.svg": 481,
        "./images/Logo_minimal_white.svg": 482,
        "./images/MCD_logo.svg": 483,
        "./images/Mic.png": 484,
        "./images/Netcom_logo.svg": 485,
        "./images/Play_Button.svg": 486,
        "./images/Raph.png": 487,
        "./images/Volvo_logo.svg": 488,
        "./images/about/Achievements.png": 489,
        "./images/about/Clients.png": 490,
        "./images/about/What.png": 491,
        "./images/about/Who.png": 492,
        "./images/cover_img.jpg": 493,
        "./images/fav_ico/apple-touch-icon-114x114.png": 494,
        "./images/fav_ico/apple-touch-icon-120x120.png": 495,
        "./images/fav_ico/apple-touch-icon-144x144.png": 496,
        "./images/fav_ico/apple-touch-icon-152x152.png": 497,
        "./images/fav_ico/apple-touch-icon-57x57.png": 498,
        "./images/fav_ico/apple-touch-icon-60x60.png": 499,
        "./images/fav_ico/apple-touch-icon-72x72.png": 500,
        "./images/fav_ico/apple-touch-icon-76x76.png": 501,
        "./images/fav_ico/favicon-128.png": 502,
        "./images/fav_ico/favicon-16x16.png": 503,
        "./images/fav_ico/favicon-196x196.png": 504,
        "./images/fav_ico/favicon-32x32.png": 505,
        "./images/fav_ico/favicon-96x96.png": 506,
        "./images/fav_ico/favicon.ico": 507,
        "./images/fav_ico/mstile-144x144.png": 508,
        "./images/fav_ico/mstile-150x150.png": 509,
        "./images/fav_ico/mstile-310x150.png": 510,
        "./images/fav_ico/mstile-310x310.png": 511,
        "./images/fav_ico/mstile-70x70.png": 512,
        "./images/landscape/background.jpg": 513,
        "./images/landscape/pillarTexture.png": 514,
        "./images/logo-ani.svg": 515,
        "./images/logo-animation.svg": 516,
        "./images/logo-symbol.svg": 517,
        "./images/logo-turn.svg": 518,
        "./images/logo-type.svg": 519,
        "./images/logo_glitch.png": 520,
        "./images/projects/FixedIt/00.jpg": 521,
        "./images/projects/FixedIt/01.jpg": 522,
        "./images/projects/FixedIt/02.jpg": 523,
        "./images/projects/FixedIt/03.jpg": 524,
        "./images/projects/FixedIt/04.jpg": 525,
        "./images/projects/FixedIt/05.jpg": 526,
        "./images/projects/FixedIt/06.jpg": 527,
        "./images/projects/FixedIt/07.jpg": 528,
        "./images/projects/FixedIt/_tmb.jpg": 529,
        "./images/projects/FixedIt/mobile_thumb.jpg": 530,
        "./images/projects/Hypebeast/00.jpg": 531,
        "./images/projects/Hypebeast/01.jpg": 532,
        "./images/projects/Hypebeast/02.jpg": 533,
        "./images/projects/Hypebeast/03.jpg": 534,
        "./images/projects/Hypebeast/04.jpg": 535,
        "./images/projects/Hypebeast/05.jpg": 536,
        "./images/projects/Hypebeast/06.jpg": 537,
        "./images/projects/Hypebeast/07.jpg": 538,
        "./images/projects/Hypebeast/08.jpg": 539,
        "./images/projects/Hypebeast/09.jpg": 540,
        "./images/projects/Hypebeast/_tmb.jpg": 541,
        "./images/projects/Hypebeast/mobile_thumb.jpg": 542,
        "./images/projects/JasonBourne/00.jpg": 543,
        "./images/projects/JasonBourne/01.jpg": 544,
        "./images/projects/JasonBourne/02.jpg": 545,
        "./images/projects/JasonBourne/03.jpg": 546,
        "./images/projects/JasonBourne/04.jpg": 547,
        "./images/projects/JasonBourne/_tmb.jpg": 548,
        "./images/projects/JasonBourne/mobile_thumb.jpg": 549,
        "./images/symbol-e.png": 550,
        "./images/symbol-h.png": 551,
        "./images/symbol-l.png": 552,
        "./images/test.png": 553,
        "./images/uvTest.jpg": 554,
        "./sound/landscape/ambient.mp3": 576,
        "./sound/landscape/impact.mp3": 577,
        "./sound/skull/closed_loop.mp3": 578,
        "./sound/skull/explosion.mp3": 579,
        "./sound/skull/open_loop.mp3": 580,
        "./sound/skull/reassambly.mp3": 581,
        "./sound/skull/reassambly_1.mp3": 582,
        "./videos/Appoteket.mp4": 583,
        "./videos/BaconClubhouse.mp4": 584,
        "./videos/Watchinvest.mp4": 585,
        "./videos/big_buck_bunny.mp4": 586
    };
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, t.exports = i, i.id = 610
}, function(t, e) {}]);