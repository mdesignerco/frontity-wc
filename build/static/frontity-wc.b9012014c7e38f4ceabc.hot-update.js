webpackHotUpdate("frontity-wc",{

/***/ "./packages/frontity-wc-theme/src/actions/process-order.js":
/*!*****************************************************************!*\
  !*** ./packages/frontity-wc-theme/src/actions/process-order.js ***!
  \*****************************************************************/
/*! exports provided: processOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processOrder\", function() { return processOrder; });\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var processOrder=/*#__PURE__*/function(){var _ref=_asyncToGenerator(function*(_ref2){var{state,actions}=_ref2;var fields=state.theme.checkoutFields;state.theme.processingOrder=true;var orderData=JSON.stringify({set_paid:false,billing:{first_name:fields.filter(f=>f.name==='firstName')[0].value,last_name:fields.filter(f=>f.name==='lastName')[0].value,company:fields.filter(f=>f.name==='companyName')[0].value,address_1:fields.filter(f=>f.name==='streetAddress')[0].value,address_2:fields.filter(f=>f.name==='apartment')[0].value,city:fields.filter(f=>f.name==='city')[0].value,country:fields.filter(f=>f.name==='country')[0].value,postcode:fields.filter(f=>f.name==='postcode')[0].value,phone:fields.filter(f=>f.name==='phone')[0].value,email:fields.filter(f=>f.name==='email')[0].value,emnotesail:fields.filter(f=>f.name==='notes')[0].value},line_items:state.theme.cart.items});var res=yield Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"])(\"\".concat(state.frontity.url,\"/wp-json/wp/v2/create-order\"),{method:'POST',body:orderData,headers:{'Content-Type':'application/json'}});var body=yield res.json();var orderId=body.id;console.log('body',body);console.log('id',body.id);console.log('id',body[0].id);state.theme.processingOrder=false;/* try {\r\n        const response = await fetch(\r\n            `${state.frontity.url}/wp-json/wp/v2/create-order`,\r\n            {\r\n                method: 'POST',\r\n                body: orderData,\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                }\r\n            }\r\n        ).then(response => {\r\n            //console.log('processing', JSON.parse(response))\r\n\r\n            state.theme.processingOrder = false;\r\n            return response\r\n        }).then(response => {\r\n            const data = response.json();\r\n            console.log(response)\r\n            console.log('processing', data)\r\n        })\r\n    } catch (error) {\r\n\r\n    } */});return function processOrder(_x){return _ref.apply(this,arguments);};}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvYWN0aW9ucy9wcm9jZXNzLW9yZGVyLmpzPzliNDMiXSwibmFtZXMiOlsicHJvY2Vzc09yZGVyIiwic3RhdGUiLCJhY3Rpb25zIiwiZmllbGRzIiwidGhlbWUiLCJjaGVja291dEZpZWxkcyIsInByb2Nlc3NpbmdPcmRlciIsIm9yZGVyRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRfcGFpZCIsImJpbGxpbmciLCJmaXJzdF9uYW1lIiwiZmlsdGVyIiwiZiIsIm5hbWUiLCJ2YWx1ZSIsImxhc3RfbmFtZSIsImNvbXBhbnkiLCJhZGRyZXNzXzEiLCJhZGRyZXNzXzIiLCJjaXR5IiwiY291bnRyeSIsInBvc3Rjb2RlIiwicGhvbmUiLCJlbWFpbCIsImVtbm90ZXNhaWwiLCJsaW5lX2l0ZW1zIiwiY2FydCIsIml0ZW1zIiwicmVzIiwiZmV0Y2giLCJmcm9udGl0eSIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwianNvbiIsIm9yZGVySWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7bWtCQUVPLEdBQU1BLGFBQVksb0RBQUcsZ0JBQThCLElBQXZCLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUF1QixPQUN0RCxHQUFNQyxPQUFNLENBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxjQUEzQixDQUNBSixLQUFLLENBQUNHLEtBQU4sQ0FBWUUsZUFBWixDQUE4QixJQUE5QixDQUNBLEdBQUlDLFVBQVMsQ0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FDM0JDLFFBQVEsQ0FBRSxLQURpQixDQUUzQkMsT0FBTyxDQUFFLENBQ0xDLFVBQVUsQ0FBRVQsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsV0FBOUIsRUFBMkMsQ0FBM0MsRUFBOENDLEtBRHJELENBRUxDLFNBQVMsQ0FBRWQsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsVUFBOUIsRUFBMEMsQ0FBMUMsRUFBNkNDLEtBRm5ELENBR0xFLE9BQU8sQ0FBRWYsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0RDLEtBSHBELENBSUxHLFNBQVMsQ0FBRWhCLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLGVBQTlCLEVBQStDLENBQS9DLEVBQWtEQyxLQUp4RCxDQUtMSSxTQUFTLENBQUVqQixNQUFNLENBQUNVLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxXQUE5QixFQUEyQyxDQUEzQyxFQUE4Q0MsS0FMcEQsQ0FNTEssSUFBSSxDQUFFbEIsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLEtBTjFDLENBT0xNLE9BQU8sQ0FBRW5CLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLFNBQTlCLEVBQXlDLENBQXpDLEVBQTRDQyxLQVBoRCxDQVFMTyxRQUFRLENBQUVwQixNQUFNLENBQUNVLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxVQUE5QixFQUEwQyxDQUExQyxFQUE2Q0MsS0FSbEQsQ0FTTFEsS0FBSyxDQUFFckIsTUFBTSxDQUFDVSxNQUFQLENBQWNDLENBQUMsRUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEdBQVcsT0FBOUIsRUFBdUMsQ0FBdkMsRUFBMENDLEtBVDVDLENBVUxTLEtBQUssQ0FBRXRCLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjQyxDQUFDLEVBQUlBLENBQUMsQ0FBQ0MsSUFBRixHQUFXLE9BQTlCLEVBQXVDLENBQXZDLEVBQTBDQyxLQVY1QyxDQVdMVSxVQUFVLENBQUV2QixNQUFNLENBQUNVLE1BQVAsQ0FBY0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUYsR0FBVyxPQUE5QixFQUF1QyxDQUF2QyxFQUEwQ0MsS0FYakQsQ0FGa0IsQ0FlM0JXLFVBQVUsQ0FBRTFCLEtBQUssQ0FBQ0csS0FBTixDQUFZd0IsSUFBWixDQUFpQkMsS0FmRixDQUFmLENBQWhCLENBa0JBLEdBQU1DLElBQUcsTUFBU0MsdURBQUssV0FDaEI5QixLQUFLLENBQUMrQixRQUFOLENBQWVDLEdBREMsZ0NBRW5CLENBQ0lDLE1BQU0sQ0FBRSxNQURaLENBRUlDLElBQUksQ0FBRTVCLFNBRlYsQ0FHSTZCLE9BQU8sQ0FBRSxDQUNMLGVBQWdCLGtCQURYLENBSGIsQ0FGbUIsQ0FBdkIsQ0FVQSxHQUFNRCxLQUFJLE1BQVNMLElBQUcsQ0FBQ08sSUFBSixFQUFuQixDQUVBLEdBQU1DLFFBQU8sQ0FBR0gsSUFBSSxDQUFDSSxFQUFyQixDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxNQUFiLENBQXFCTixJQUFyQixFQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLENBQWtCTixJQUFJLENBQUNJLEVBQXZCLEVBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosQ0FBa0JOLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksRUFBMUIsRUFFQXRDLEtBQUssQ0FBQ0csS0FBTixDQUFZRSxlQUFaLENBQThCLEtBQTlCLENBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF1QkgsQ0EvRHdCLGlCQUFaTixhQUFZLDRDQUFsQiIsImZpbGUiOiIuL3BhY2thZ2VzL2Zyb250aXR5LXdjLXRoZW1lL3NyYy9hY3Rpb25zL3Byb2Nlc3Mtb3JkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2Zyb250aXR5JztcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9jZXNzT3JkZXIgPSBhc3luYyAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBzdGF0ZS50aGVtZS5jaGVja291dEZpZWxkcztcclxuICAgIHN0YXRlLnRoZW1lLnByb2Nlc3NpbmdPcmRlciA9IHRydWU7XHJcbiAgICBsZXQgb3JkZXJEYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHNldF9wYWlkOiBmYWxzZSxcclxuICAgICAgICBiaWxsaW5nOiB7XHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdmaXJzdE5hbWUnKVswXS52YWx1ZSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnbGFzdE5hbWUnKVswXS52YWx1ZSxcclxuICAgICAgICAgICAgY29tcGFueTogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ2NvbXBhbnlOYW1lJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3NfMTogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ3N0cmVldEFkZHJlc3MnKVswXS52YWx1ZSxcclxuICAgICAgICAgICAgYWRkcmVzc18yOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAnYXBhcnRtZW50JylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGNpdHk6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdjaXR5JylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGNvdW50cnk6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdjb3VudHJ5JylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIHBvc3Rjb2RlOiBmaWVsZHMuZmlsdGVyKGYgPT4gZi5uYW1lID09PSAncG9zdGNvZGUnKVswXS52YWx1ZSxcclxuICAgICAgICAgICAgcGhvbmU6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdwaG9uZScpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBlbWFpbDogZmllbGRzLmZpbHRlcihmID0+IGYubmFtZSA9PT0gJ2VtYWlsJylbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGVtbm90ZXNhaWw6IGZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgPT09ICdub3RlcycpWzBdLnZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZV9pdGVtczogc3RhdGUudGhlbWUuY2FydC5pdGVtc1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYCR7c3RhdGUuZnJvbnRpdHkudXJsfS93cC1qc29uL3dwL3YyL2NyZWF0ZS1vcmRlcmAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogb3JkZXJEYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJJZCA9IGJvZHkuaWQ7XHJcbiAgICBjb25zb2xlLmxvZyggJ2JvZHknLCBib2R5KTtcclxuICAgIGNvbnNvbGUubG9nKCdpZCcsIGJvZHkuaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ2lkJywgYm9keVswXS5pZCk7XHJcblxyXG4gICAgc3RhdGUudGhlbWUucHJvY2Vzc2luZ09yZGVyID0gZmFsc2U7XHJcblxyXG4gICAgLyogdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgJHtzdGF0ZS5mcm9udGl0eS51cmx9L3dwLWpzb24vd3AvdjIvY3JlYXRlLW9yZGVyYCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBvcmRlckRhdGEsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncHJvY2Vzc2luZycsIEpTT04ucGFyc2UocmVzcG9uc2UpKVxyXG5cclxuICAgICAgICAgICAgc3RhdGUudGhlbWUucHJvY2Vzc2luZ09yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2Nlc3NpbmcnLCBkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIH0gKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/frontity-wc-theme/src/actions/process-order.js\n");

/***/ })

})