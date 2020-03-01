webpackHotUpdate("frontity-wc",{

/***/ "./packages/frontity-wc-theme/src/components/cart/cart-detail-item.js":
/*!****************************************************************************!*\
  !*** ./packages/frontity-wc-theme/src/components/cart/cart-detail-item.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured-media */ \"./packages/frontity-wc-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar CartDetailItem=(_ref)=>{var{state,actions,item,index}=_ref;if(state.source.product){var product=state.source.product[item.productId];var bg=index%2===0?'#fdfdfd':'#fbfbfb';if(product){var subTotal=item.quantity*product.price;actions.source.fetch(\"/media/\".concat(product.featured_media));return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"],{templateColumns:\"10% 10% 50% 10% 10% 10%\",padding:\"20px 0\",bg:bg},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],{padding:\"0 20px\",cursor:\"pointer\",onClick:event=>actions.theme.trashCartItem({event,productId:item.productId})},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaTimes\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],{paddingRight:\"20px\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{id:product.featured_media})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],null,product.title.rendered),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],null,product.price),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"NumberInput\"],{defaultValue:item.quantity},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"NumberInputField\"],null))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],null,subTotal));}else{return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"],null));}}else{return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"],null));}};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(CartDetailItem));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQtZGV0YWlsLWl0ZW0uanM/MGU3OSJdLCJuYW1lcyI6WyJDYXJ0RGV0YWlsSXRlbSIsInN0YXRlIiwiYWN0aW9ucyIsIml0ZW0iLCJpbmRleCIsInNvdXJjZSIsInByb2R1Y3QiLCJwcm9kdWN0SWQiLCJiZyIsInN1YlRvdGFsIiwicXVhbnRpdHkiLCJwcmljZSIsImZldGNoIiwiZmVhdHVyZWRfbWVkaWEiLCJldmVudCIsInRoZW1lIiwidHJhc2hDYXJ0SXRlbSIsInRpdGxlIiwicmVuZGVyZWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSxHQUFNQSxlQUFjLENBQUcsUUFBcUMsSUFBcEMsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQWtCQyxJQUFsQixDQUF3QkMsS0FBeEIsQ0FBb0MsTUFDeEQsR0FBSUgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLE9BQWpCLENBQTBCLENBQ3RCLEdBQU1BLFFBQU8sQ0FBR0wsS0FBSyxDQUFDSSxNQUFOLENBQWFDLE9BQWIsQ0FBcUJILElBQUksQ0FBQ0ksU0FBMUIsQ0FBaEIsQ0FDQSxHQUFNQyxHQUFFLENBQUdKLEtBQUssQ0FBRyxDQUFSLEdBQWMsQ0FBZCxDQUFrQixTQUFsQixDQUE4QixTQUF6QyxDQUNBLEdBQUlFLE9BQUosQ0FBYSxDQUNULEdBQU1HLFNBQVEsQ0FBR04sSUFBSSxDQUFDTyxRQUFMLENBQWdCSixPQUFPLENBQUNLLEtBQXpDLENBQ0FULE9BQU8sQ0FBQ0csTUFBUixDQUFlTyxLQUFmLGtCQUErQk4sT0FBTyxDQUFDTyxjQUF2QyxHQUNBLE1BQ0ksMkRBQUMsb0RBQUQsRUFDSSxlQUFlLENBQUMseUJBRHBCLENBRUksT0FBTyxDQUFDLFFBRlosQ0FHSSxFQUFFLENBQUVMLEVBSFIsRUFLSSwwREFBQyxtREFBRCxFQUNJLE9BQU8sQ0FBQyxRQURaLENBRUksTUFBTSxDQUFDLFNBRlgsQ0FHSSxPQUFPLENBQUVNLEtBQUssRUFBSVosT0FBTyxDQUFDYSxLQUFSLENBQWNDLGFBQWQsQ0FBNEIsQ0FDMUNGLEtBRDBDLENBQ25DUCxTQUFTLENBQUVKLElBQUksQ0FBQ0ksU0FEbUIsQ0FBNUIsQ0FIdEIsRUFPSSwwREFBQyxzREFBRCxNQVBKLENBTEosQ0FjSSwwREFBQyxtREFBRCxFQUFLLFlBQVksQ0FBQyxNQUFsQixFQUNJLDBEQUFDLHVEQUFELEVBQWUsRUFBRSxDQUFFRCxPQUFPLENBQUNPLGNBQTNCLEVBREosQ0FkSixDQWlCSSwwREFBQyxtREFBRCxNQUFNUCxPQUFPLENBQUNXLEtBQVIsQ0FBY0MsUUFBcEIsQ0FqQkosQ0FrQkksMERBQUMsbURBQUQsTUFBTVosT0FBTyxDQUFDSyxLQUFkLENBbEJKLENBbUJJLDBEQUFDLG1EQUFELE1BQ0ksMERBQUMsMkRBQUQsRUFBYSxZQUFZLENBQUVSLElBQUksQ0FBQ08sUUFBaEMsRUFDSSwwREFBQyxnRUFBRCxNQURKLENBREosQ0FuQkosQ0F3QkksMERBQUMsbURBQUQsTUFBTUQsUUFBTixDQXhCSixDQURKLENBNEJILENBL0JELElBK0JPLENBQUUsTUFBTywyREFBQyxtREFBRCxNQUFLLDBEQUFDLHVEQUFELE1BQUwsQ0FBUCxDQUErQixDQUMzQyxDQW5DRCxJQW1DTyxDQUFFLE1BQU8sMkRBQUMsbURBQUQsTUFBSywwREFBQyx1REFBRCxNQUFMLENBQVAsQ0FBK0IsQ0FDM0MsQ0FyQ0QsQ0FzQ2VVLHVIQUFPLENBQUNuQixjQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZnJvbnRpdHktd2MtdGhlbWUvc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LWRldGFpbC1pdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBOdW1iZXJJbnB1dCwgR3JpZCwgTnVtYmVySW5wdXRGaWVsZCwgVGV4dCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XHJcbmltcG9ydCB7IEZhVGltZXMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdmcm9udGl0eSc7XHJcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gJy4uL2ZlYXR1cmVkLW1lZGlhJztcclxuXHJcbmNvbnN0IENhcnREZXRhaWxJdGVtID0gKHsgc3RhdGUsIGFjdGlvbnMsIGl0ZW0sIGluZGV4IH0pID0+IHtcclxuICAgIGlmIChzdGF0ZS5zb3VyY2UucHJvZHVjdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5zb3VyY2UucHJvZHVjdFtpdGVtLnByb2R1Y3RJZF07XHJcbiAgICAgICAgY29uc3QgYmcgPSBpbmRleCAlIDIgPT09IDAgPyAnI2ZkZmRmZCcgOiAnI2ZiZmJmYic7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViVG90YWwgPSBpdGVtLnF1YW50aXR5ICogcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goYC9tZWRpYS8ke3Byb2R1Y3QuZmVhdHVyZWRfbWVkaWF9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz0nMTAlIDEwJSA1MCUgMTAlIDEwJSAxMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz0nMjBweCAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGJnPXtiZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9JzAgMjBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yPSdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBhY3Rpb25zLnRoZW1lLnRyYXNoQ2FydEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQsIHByb2R1Y3RJZDogaXRlbS5wcm9kdWN0SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFUaW1lcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggcGFkZGluZ1JpZ2h0PScyMHB4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e3Byb2R1Y3QuZmVhdHVyZWRfbWVkaWF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD57cHJvZHVjdC50aXRsZS5yZW5kZXJlZH08L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94Pntwcm9kdWN0LnByaWNlfTwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dCBkZWZhdWx0VmFsdWU9e2l0ZW0ucXVhbnRpdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlcklucHV0RmllbGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PntzdWJUb3RhbH08L0JveD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7IHJldHVybiA8Qm94PjxTcGlubmVyIC8+PC9Cb3g+IH1cclxuICAgIH0gZWxzZSB7IHJldHVybiA8Qm94PjxTcGlubmVyIC8+PC9Cb3g+IH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KENhcnREZXRhaWxJdGVtKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/frontity-wc-theme/src/components/cart/cart-detail-item.js\n");

/***/ })

})