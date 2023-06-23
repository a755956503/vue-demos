var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "div",
        { attrs: { id: "nav" } },
        [
          _c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")]),
          _vm._v(" | "),
          _c("router-link", { attrs: { to: "/about" } }, [_vm._v("About")]),
          _c("router-link", { attrs: { to: "/com" } }, [_vm._v("Com")])
        ],
        1
      ),
      _c("router-view")
    ],
    1
  )
}