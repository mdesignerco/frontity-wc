webpackHotUpdate("frontity-wc",{

/***/ "./packages/frontity-wc-theme/src/actions/process-order.js":
/*!*****************************************************************!*\
  !*** ./packages/frontity-wc-theme/src/actions/process-order.js ***!
  \*****************************************************************/
/*! exports provided: processOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processOrder\", function() { return processOrder; });\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var processOrder=/*#__PURE__*/function(){var _ref=_asyncToGenerator(function*(_ref2){var{state,actions}=_ref2;var fields=state.theme.checkoutFields;state.theme.processingOrder=true;var orderData=JSON.stringify({set_paid:false,billing:{first_name:fields.filter(f=>f.name==='firstName')[0].value,last_name:fields.filter(f=>f.name==='lastName')[0].value,company:fields.filter(f=>f.name==='companyName')[0].value,address_1:fields.filter(f=>f.name==='streetAddress')[0].value,address_2:fields.filter(f=>f.name==='apartment')[0].value,city:fields.filter(f=>f.name==='city')[0].value,country:fields.filter(f=>f.name==='country')[0].value,postcode:fields.filter(f=>f.name==='postcode')[0].value,phone:fields.filter(f=>f.name==='phone')[0].value,email:fields.filter(f=>f.name==='email')[0].value,emnotesail:fields.filter(f=>f.name==='notes')[0].value},line_items:state.theme.cart.items});try{var response=yield Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"])(\"\".concat(state.frontity.url,\"/wp-json/wp/v2/create-order\"),{method:'POST',body:orderData,headers:{'Content-Type':'application/json'}}).then(response=>{//console.log('processing', JSON.parse(response))\nstate.theme.processingOrder=false;return response;}).then(response=>{var data=response.json();console.log(response);console.log('processing',data);});}catch(error){}});return function processOrder(_x){return _ref.apply(this,arguments);};}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvYWN0aW9ucy9wcm9jZXNzLW9yZGVyLmpzPzliNDMiXSwibmFtZXMiOlsicHJvY2Vzc09yZGVyIiwic3RhdGUiLCJhY3Rpb25zIiwiZmllbGRzIiwidGhlbWUiLCJjaGVja291dEZpZWxkcyIsInByb2Nlc3NpbmdPcmRlciIsIm9yZGVyRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRfcGFpZCIsImJpbGxpbmciLCJmaXJzdF9uYW1lIiwiZmlsdGVyIiwiZiIsIm5hbWUiLCJ2YWx1ZSIsImxhc3RfbmFtZSIsImNvbXBhbnkiLCJhZGRyZXNzXzEiLCJhZGRyZXNzXzIiLCJjaXR5IiwiY291bnRyeSIsInBvc3Rjb2RlIiwicGhvbmUiLCJlbWFpbCIsImVtbm90ZXNhaWwiLCJsaW5lX2l0ZW1zIiwiY2FydCIsIml0ZW1zIiwicmVzcG9uc2UiLCJmZXRjaCIsImZyb250aXR5IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7bWtCQUVPLEdBQU1BLGFBQVksb0RBQUcsZ0JBQThCLElBQXZCLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUF1QixPQUN0RCxHQUFNQyxPQUFNLENBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxjQUEzQixDQUNBSixLQUFLLENBQUNHLEtBQU4sQ0FBWUUsZUFBWixDQUE4QixJQUE5QixDQUNBLEdBQUlDLFVBQVMsQ0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FDM0JDLFFBQVEsQ0FBRSxLQURpQixDQUUzQkMsT0FBTyxDQUFFLENBQ0xDLFVBQVUsQ0FBRVQsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsV0FBOUIsRUFBMkMsQ0FBM0MsRUFBOENDLEtBRHJELENBRUxDLFNBQVMsQ0FBRWQsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsVUFBOUIsRUFBMEMsQ0FBMUMsRUFBNkNDLEtBRm5ELENBR0xFLE9BQU8sQ0FBRWYsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0RDLEtBSHBELENBSUxHLFNBQVMsQ0FBRWhCLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLGVBQTlCLEVBQStDLENBQS9DLEVBQWtEQyxLQUp4RCxDQUtMSSxTQUFTLENBQUVqQixNQUFNLENBQUNVLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxXQUE5QixFQUEyQyxDQUEzQyxFQUE4Q0MsS0FMcEQsQ0FNTEssSUFBSSxDQUFFbEIsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLEtBTjFDLENBT0xNLE9BQU8sQ0FBRW5CLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLFNBQTlCLEVBQXlDLENBQXpDLEVBQTRDQyxLQVBoRCxDQVFMTyxRQUFRLENBQUVwQixNQUFNLENBQUNVLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxVQUE5QixFQUEwQyxDQUExQyxFQUE2Q0MsS0FSbEQsQ0FTTFEsS0FBSyxDQUFFckIsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsT0FBOUIsRUFBdUMsQ0FBdkMsRUFBMENDLEtBVDVDLENBVUxTLEtBQUssQ0FBRXRCLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLE9BQTlCLEVBQXVDLENBQXZDLEVBQTBDQyxLQVY1QyxDQVdMVSxVQUFVLENBQUV2QixNQUFNLENBQUNVLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxPQUE5QixFQUF1QyxDQUF2QyxFQUEwQ0MsS0FYakQsQ0FGa0IsQ0FlM0JXLFVBQVUsQ0FBRTFCLEtBQUssQ0FBQ0csS0FBTixDQUFZd0IsSUFBWixDQUFpQkMsS0FmRixDQUFmLENBQWhCLENBa0JBLEdBQUksQ0FDQSxHQUFNQyxTQUFRLE1BQVNDLHVEQUFLLFdBQ3JCOUIsS0FBSyxDQUFDK0IsUUFBTixDQUFlQyxHQURNLGdDQUV4QixDQUNJQyxNQUFNLENBQUUsTUFEWixDQUVJQyxJQUFJLENBQUU1QixTQUZWLENBR0k2QixPQUFPLENBQUUsQ0FDTCxlQUFnQixrQkFEWCxDQUhiLENBRndCLENBQUwsQ0FTckJDLElBVHFCLENBU2hCUCxRQUFRLEVBQUksQ0FDZjtBQUVBN0IsS0FBSyxDQUFDRyxLQUFOLENBQVlFLGVBQVosQ0FBOEIsS0FBOUIsQ0FDQSxNQUFPd0IsU0FBUCxDQUNILENBZHNCLEVBY3BCTyxJQWRvQixDQWNmUCxRQUFRLEVBQUksQ0FDaEIsR0FBTVEsS0FBSSxDQUFHUixRQUFRLENBQUNTLElBQVQsRUFBYixDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsUUFBWixFQUNBVSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQTBCSCxJQUExQixFQUNILENBbEJzQixDQUF2QixDQW1CSCxDQUFDLE1BQU9JLEtBQVAsQ0FBYyxDQUVmLENBQ0osQ0E1Q3dCLGlCQUFaMUMsYUFBWSw0Q0FBbEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvYWN0aW9ucy9wcm9jZXNzLW9yZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdmcm9udGl0eSc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvY2Vzc09yZGVyID0gYXN5bmMgKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xyXG4gICAgY29uc3QgZmllbGRzID0gc3RhdGUudGhlbWUuY2hlY2tvdXRGaWVsZHM7XHJcbiAgICBzdGF0ZS50aGVtZS5wcm9jZXNzaW5nT3JkZXIgPSB0cnVlO1xyXG4gICAgbGV0IG9yZGVyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBzZXRfcGFpZDogZmFsc2UsXHJcbiAgICAgICAgYmlsbGluZzoge1xyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnZmlyc3ROYW1lJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ2xhc3ROYW1lJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGNvbXBhbnk6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdjb21wYW55TmFtZScpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBhZGRyZXNzXzE6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdzdHJlZXRBZGRyZXNzJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3NfMjogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ2FwYXJ0bWVudCcpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBjaXR5OiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnY2l0eScpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnY291bnRyeScpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBwb3N0Y29kZTogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ3Bvc3Rjb2RlJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIHBob25lOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAncGhvbmUnKVswXS52YWx1ZSxcclxuICAgICAgICAgICAgZW1haWw6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdlbWFpbCcpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBlbW5vdGVzYWlsOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnbm90ZXMnKVswXS52YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbmVfaXRlbXM6IHN0YXRlLnRoZW1lLmNhcnQuaXRlbXNcclxuICAgIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYCR7c3RhdGUuZnJvbnRpdHkudXJsfS93cC1qc29uL3dwL3YyL2NyZWF0ZS1vcmRlcmAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogb3JkZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3Byb2Nlc3NpbmcnLCBKU09OLnBhcnNlKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLnRoZW1lLnByb2Nlc3NpbmdPcmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9jZXNzaW5nJywgZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/frontity-wc-theme/src/actions/process-order.js\n");

/***/ })

})