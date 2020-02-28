webpackHotUpdate("frontity-wc",{

/***/ "./packages/frontity-wc-theme/src/components/header/cart-detail-item.js":
/*!******************************************************************************!*\
  !*** ./packages/frontity-wc-theme/src/components/header/cart-detail-item.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar CartDetailItem=(_ref)=>{var{state,item}=_ref;var _onClick=(e,productId)=>{e.preventDefault();actions.theme.onTrashCartItem({productId});};var ready=true;var products=state.source.product;if(products){var _product=state.source.product[item.productId];//ready = product;\nif(_product){ready=true;}else{ready=false;}}else{ready=false;}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"],{justifyContent:\"space-between\",fontSize:\"0.8em\"},ready?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"],null,product.title.rendered),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"],{as:\"span\"},\"$\",product.price),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"],{padding:\"5px\",onClick:e=>_onClick(e,item.productId)},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaTrash\"],{size:\"10px\"})))):Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"],null,\"Loading...\"));/* if (state.source.product) {\r\n        const product = state.source.product[item.productId];\r\n        if (product) {\r\n            return (\r\n                <Flex\r\n                    key={product.id}\r\n                    justifyContent='space-between'\r\n                    fontSize='0.8em'\r\n                >\r\n                    <Text>{product.title.rendered}</Text>\r\n                    <Flex>\r\n                        <Text as='span'>${product.price}</Text>\r\n                        <Text\r\n                            padding='5px'\r\n                            onClick={(e) => onClick(e, item.productId)}\r\n                        >\r\n                            <FaTrash size='10px' />\r\n                        </Text>\r\n                    </Flex>\r\n                </Flex>\r\n            );\r\n        } else { return <Text>Loading...</Text>; }\r\n    } else { return <Text>Cargando...</Text>; } */};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(CartDetailItem));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvY29tcG9uZW50cy9oZWFkZXIvY2FydC1kZXRhaWwtaXRlbS5qcz81NTZlIl0sIm5hbWVzIjpbIkNhcnREZXRhaWxJdGVtIiwic3RhdGUiLCJpdGVtIiwib25DbGljayIsImUiLCJwcm9kdWN0SWQiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbnMiLCJ0aGVtZSIsIm9uVHJhc2hDYXJ0SXRlbSIsInJlYWR5IiwicHJvZHVjdHMiLCJzb3VyY2UiLCJwcm9kdWN0IiwidGl0bGUiLCJyZW5kZXJlZCIsInByaWNlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLEdBQU1BLGVBQWMsQ0FBRyxRQUFxQixJQUFwQixDQUFFQyxLQUFGLENBQVNDLElBQVQsQ0FBb0IsTUFFeEMsR0FBTUMsU0FBTyxDQUFHLENBQUNDLENBQUQsQ0FBSUMsU0FBSixHQUFrQixDQUM5QkQsQ0FBQyxDQUFDRSxjQUFGLEdBQ0FDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxlQUFkLENBQThCLENBQzFCSixTQUQwQixDQUE5QixFQUdILENBTEQsQ0FPQSxHQUFJSyxNQUFLLENBQUcsSUFBWixDQUNBLEdBQU1DLFNBQVEsQ0FBR1YsS0FBSyxDQUFDVyxNQUFOLENBQWFDLE9BQTlCLENBQ0EsR0FBSUYsUUFBSixDQUFjLENBQ1YsR0FBTUUsU0FBTyxDQUFHWixLQUFLLENBQUNXLE1BQU4sQ0FBYUMsT0FBYixDQUFxQlgsSUFBSSxDQUFDRyxTQUExQixDQUFoQixDQUNBO0FBQ0EsR0FBSVEsUUFBSixDQUFhLENBQ1RILEtBQUssQ0FBRyxJQUFSLENBQ0gsQ0FGRCxJQUVPLENBQ0hBLEtBQUssQ0FBRyxLQUFSLENBQ0gsQ0FDSixDQVJELElBUU8sQ0FDSEEsS0FBSyxDQUFHLEtBQVIsQ0FDSCxDQUNELE1BQ0ksMkRBQUMsb0RBQUQsRUFDSSxjQUFjLENBQUMsZUFEbkIsQ0FFSSxRQUFRLENBQUMsT0FGYixFQUtRQSxLQUFLLENBQ0MscUhBQ0UsMERBQUMsb0RBQUQsTUFBT0csT0FBTyxDQUFDQyxLQUFSLENBQWNDLFFBQXJCLENBREYsQ0FFRSwwREFBQyxvREFBRCxNQUNJLDBEQUFDLG9EQUFELEVBQU0sRUFBRSxDQUFDLE1BQVQsTUFBa0JGLE9BQU8sQ0FBQ0csS0FBMUIsQ0FESixDQUVJLDBEQUFDLG9EQUFELEVBQ0ksT0FBTyxDQUFDLEtBRFosQ0FFSSxPQUFPLENBQUdaLENBQUQsRUFBT0QsUUFBTyxDQUFDQyxDQUFELENBQUlGLElBQUksQ0FBQ0csU0FBVCxDQUYzQixFQUlJLDBEQUFDLHNEQUFELEVBQVMsSUFBSSxDQUFDLE1BQWQsRUFKSixDQUZKLENBRkYsQ0FERCxDQWFDLDBEQUFDLG9EQUFELG1CQWxCZCxDQURKLENBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQXVCSCxDQXRFRCxDQXdFZVksdUhBQU8sQ0FBQ2pCLGNBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvY29tcG9uZW50cy9oZWFkZXIvY2FydC1kZXRhaWwtaXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBGYVRyYXNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnZnJvbnRpdHknO1xyXG5cclxuY29uc3QgQ2FydERldGFpbEl0ZW0gPSAoeyBzdGF0ZSwgaXRlbSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb25DbGljayA9IChlLCBwcm9kdWN0SWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYWN0aW9ucy50aGVtZS5vblRyYXNoQ2FydEl0ZW0oe1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVhZHkgPSB0cnVlXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnNvdXJjZS5wcm9kdWN0O1xyXG4gICAgaWYgKHByb2R1Y3RzKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnNvdXJjZS5wcm9kdWN0W2l0ZW0ucHJvZHVjdElkXTtcclxuICAgICAgICAvL3JlYWR5ID0gcHJvZHVjdDtcclxuICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICByZWFkeSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlYWR5ID0gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcbiAgICAgICAgICAgIGZvbnRTaXplPScwLjhlbSdcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlYWR5XHJcbiAgICAgICAgICAgICAgICAgICAgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57cHJvZHVjdC50aXRsZS5yZW5kZXJlZH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3NwYW4nPiR7cHJvZHVjdC5wcmljZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9JzVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGljayhlLCBpdGVtLnByb2R1Y3RJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVHJhc2ggc2l6ZT0nMTBweCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPFRleHQ+TG9hZGluZy4uLjwvVGV4dD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICApXHJcblxyXG4gICAgLyogaWYgKHN0YXRlLnNvdXJjZS5wcm9kdWN0KSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnNvdXJjZS5wcm9kdWN0W2l0ZW0ucHJvZHVjdElkXTtcclxuICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9JzAuOGVtJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Pntwcm9kdWN0LnRpdGxlLnJlbmRlcmVkfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3NwYW4nPiR7cHJvZHVjdC5wcmljZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPSc1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGljayhlLCBpdGVtLnByb2R1Y3RJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVRyYXNoIHNpemU9JzEwcHgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIDxUZXh0PkxvYWRpbmcuLi48L1RleHQ+OyB9XHJcbiAgICB9IGVsc2UgeyByZXR1cm4gPFRleHQ+Q2FyZ2FuZG8uLi48L1RleHQ+OyB9ICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQ2FydERldGFpbEl0ZW0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/frontity-wc-theme/src/components/header/cart-detail-item.js\n");

/***/ })

})