webpackHotUpdate("frontity-wc",{

/***/ "./packages/frontity-wc-theme/src/actions/process-order.js":
/*!*****************************************************************!*\
  !*** ./packages/frontity-wc-theme/src/actions/process-order.js ***!
  \*****************************************************************/
/*! exports provided: processOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processOrder\", function() { return processOrder; });\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var processOrder=/*#__PURE__*/function(){var _ref=_asyncToGenerator(function*(_ref2){var{state,actions}=_ref2;var fields=state.theme.checkoutFields;var orderData=JSON.stringify({set_paid:false,billing:{first_name:fields.filter(f=>f.name==='firstName')[0].value,last_name:fields.filter(f=>f.name==='lastName')[0].value,company:fields.filter(f=>f.name==='companyName')[0].value,address_1:fields.filter(f=>f.name==='streetAddress')[0].value,address_2:fields.filter(f=>f.name==='apartment')[0].value,city:fields.filter(f=>f.name==='city')[0].value,country:fields.filter(f=>f.name==='country')[0].value,postcode:fields.filter(f=>f.name==='postcode')[0].value,phone:fields.filter(f=>f.name==='phone')[0].value,email:fields.filter(f=>f.name==='email')[0].value,emnotesail:fields.filter(f=>f.name==='notes')[0].value}});try{var response=yield Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"])(\"\".concat(state.frontity.url,\"/wp-json/wp/v2/create-order\"),{method:'POST',body:orderData,headers:{'Content-Type':'application/json'}}).then(response=>{console.log('processing',response);state.theme.processingOrder=true;});}catch(error){}});return function processOrder(_x){return _ref.apply(this,arguments);};}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvYWN0aW9ucy9wcm9jZXNzLW9yZGVyLmpzPzliNDMiXSwibmFtZXMiOlsicHJvY2Vzc09yZGVyIiwic3RhdGUiLCJhY3Rpb25zIiwiZmllbGRzIiwidGhlbWUiLCJjaGVja291dEZpZWxkcyIsIm9yZGVyRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRfcGFpZCIsImJpbGxpbmciLCJmaXJzdF9uYW1lIiwiZmlsdGVyIiwiZiIsIm5hbWUiLCJ2YWx1ZSIsImxhc3RfbmFtZSIsImNvbXBhbnkiLCJhZGRyZXNzXzEiLCJhZGRyZXNzXzIiLCJjaXR5IiwiY291bnRyeSIsInBvc3Rjb2RlIiwicGhvbmUiLCJlbWFpbCIsImVtbm90ZXNhaWwiLCJyZXNwb25zZSIsImZldGNoIiwiZnJvbnRpdHkiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicHJvY2Vzc2luZ09yZGVyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7bWtCQUVPLEdBQU1BLGFBQVksb0RBQUcsZ0JBQThCLElBQXZCLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUF1QixPQUN0RCxHQUFNQyxPQUFNLENBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxjQUEzQixDQUNBLEdBQUlDLFVBQVMsQ0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FDM0JDLFFBQVEsQ0FBRSxLQURpQixDQUUzQkMsT0FBTyxDQUFFLENBQ0xDLFVBQVUsQ0FBRVIsTUFBTSxDQUFDUyxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsV0FBOUIsRUFBMkMsQ0FBM0MsRUFBOENDLEtBRHJELENBRUxDLFNBQVMsQ0FBRWIsTUFBTSxDQUFDUyxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsVUFBOUIsRUFBMEMsQ0FBMUMsRUFBNkNDLEtBRm5ELENBR0xFLE9BQU8sQ0FBRWQsTUFBTSxDQUFDUyxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0RDLEtBSHBELENBSUxHLFNBQVMsQ0FBRWYsTUFBTSxDQUFDUyxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsZUFBOUIsRUFBK0MsQ0FBL0MsRUFBa0RDLEtBSnhELENBS0xJLFNBQVMsQ0FBRWhCLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLFdBQTlCLEVBQTJDLENBQTNDLEVBQThDQyxLQUxwRCxDQU1MSyxJQUFJLENBQUVqQixNQUFNLENBQUNTLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FOMUMsQ0FPTE0sT0FBTyxDQUFFbEIsTUFBTSxDQUFDUyxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNENDLEtBUGhELENBUUxPLFFBQVEsQ0FBRW5CLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLFVBQTlCLEVBQTBDLENBQTFDLEVBQTZDQyxLQVJsRCxDQVNMUSxLQUFLLENBQUVwQixNQUFNLENBQUNTLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxPQUE5QixFQUF1QyxDQUF2QyxFQUEwQ0MsS0FUNUMsQ0FVTFMsS0FBSyxDQUFFckIsTUFBTSxDQUFDUyxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsT0FBOUIsRUFBdUMsQ0FBdkMsRUFBMENDLEtBVjVDLENBV0xVLFVBQVUsQ0FBRXRCLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLE9BQTlCLEVBQXVDLENBQXZDLEVBQTBDQyxLQVhqRCxDQUZrQixDQUFmLENBQWhCLENBaUJBLEdBQUksQ0FDQSxHQUFNVyxTQUFRLE1BQVNDLHVEQUFLLFdBQ3JCMUIsS0FBSyxDQUFDMkIsUUFBTixDQUFlQyxHQURNLGdDQUV4QixDQUNJQyxNQUFNLENBQUUsTUFEWixDQUVJQyxJQUFJLENBQUV6QixTQUZWLENBR0kwQixPQUFPLENBQUUsQ0FDTCxlQUFnQixrQkFEWCxDQUhiLENBRndCLENBQUwsQ0FTckJDLElBVHFCLENBU2hCUCxRQUFRLEVBQUksQ0FDZlEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUEwQlQsUUFBMUIsRUFDQXpCLEtBQUssQ0FBQ0csS0FBTixDQUFZZ0MsZUFBWixDQUE4QixJQUE5QixDQUNILENBWnNCLENBQXZCLENBYUgsQ0FBQyxNQUFPQyxLQUFQLENBQWMsQ0FFZixDQUNKLENBcEN3QixpQkFBWnJDLGFBQVksNENBQWxCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZnJvbnRpdHktd2MtdGhlbWUvc3JjL2FjdGlvbnMvcHJvY2Vzcy1vcmRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZnJvbnRpdHknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NPcmRlciA9IGFzeW5jICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcclxuICAgIGNvbnN0IGZpZWxkcyA9IHN0YXRlLnRoZW1lLmNoZWNrb3V0RmllbGRzO1xyXG4gICAgbGV0IG9yZGVyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBzZXRfcGFpZDogZmFsc2UsXHJcbiAgICAgICAgYmlsbGluZzoge1xyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnZmlyc3ROYW1lJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ2xhc3ROYW1lJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGNvbXBhbnk6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdjb21wYW55TmFtZScpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBhZGRyZXNzXzE6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdzdHJlZXRBZGRyZXNzJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3NfMjogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ2FwYXJ0bWVudCcpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBjaXR5OiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnY2l0eScpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnY291bnRyeScpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBwb3N0Y29kZTogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ3Bvc3Rjb2RlJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIHBob25lOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAncGhvbmUnKVswXS52YWx1ZSxcclxuICAgICAgICAgICAgZW1haWw6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdlbWFpbCcpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBlbW5vdGVzYWlsOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnbm90ZXMnKVswXS52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGAke3N0YXRlLmZyb250aXR5LnVybH0vd3AtanNvbi93cC92Mi9jcmVhdGUtb3JkZXJgLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IG9yZGVyRGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvY2Vzc2luZycsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBzdGF0ZS50aGVtZS5wcm9jZXNzaW5nT3JkZXIgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/frontity-wc-theme/src/actions/process-order.js\n");

/***/ })

})