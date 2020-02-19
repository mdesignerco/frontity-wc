webpackHotUpdate("frontity-wc",{

/***/ "./packages/frontity-wc-theme/src/handlers/product-handler.js":
/*!********************************************************************!*\
  !*** ./packages/frontity-wc-theme/src/handlers/product-handler.js ***!
  \********************************************************************/
/*! exports provided: productHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productHandler\", function() { return productHandler; });\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var productHandler={name:'product-cat',priority:10,pattern:'/product-cat/:slug',func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,params,state,libraries}=_ref;// 1. get single product\nvar response=yield libraries.source.api.get({endpoint:'/wp/v2/product/?product_cat',params:{slug:params.slug}});// 2. add single product to state\nvar productData=yield response.json();// 3. add route to data\nObject.assign(state.source.data[route],{productData,isProduct:true});});function func(_x){return _func.apply(this,arguments);}return func;}()};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS13Yy10aGVtZS9zcmMvaGFuZGxlcnMvcHJvZHVjdC1oYW5kbGVyLmpzP2Q2MTYiXSwibmFtZXMiOlsicHJvZHVjdEhhbmRsZXIiLCJuYW1lIiwicHJpb3JpdHkiLCJwYXR0ZXJuIiwiZnVuYyIsInJvdXRlIiwicGFyYW1zIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJyZXNwb25zZSIsInNvdXJjZSIsImFwaSIsImdldCIsImVuZHBvaW50Iiwic2x1ZyIsInByb2R1Y3REYXRhIiwianNvbiIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJpc1Byb2R1Y3QiXSwibWFwcGluZ3MiOiI7O21rQkFBTyxHQUFNQSxlQUFjLENBQUcsQ0FDMUJDLElBQUksQ0FBRSxhQURvQixDQUUxQkMsUUFBUSxDQUFFLEVBRmdCLENBRzFCQyxPQUFPLENBQUUsb0JBSGlCLENBSTFCQyxJQUFJLHdDQUFFLGVBQStDLElBQXhDLENBQUVDLEtBQUYsQ0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsQ0FBd0JDLFNBQXhCLENBQXdDLE1BRW5EO0FBQ0EsR0FBTUMsU0FBUSxNQUFTRCxVQUFTLENBQUNFLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCQyxHQUFyQixDQUF5QixDQUM5Q0MsUUFBUSxDQUFFLDZCQURvQyxDQUU5Q1AsTUFBTSxDQUFFLENBQUVRLElBQUksQ0FBRVIsTUFBTSxDQUFDUSxJQUFmLENBRnNDLENBQXpCLENBQXZCLENBS0E7QUFDQSxHQUFNQyxZQUFXLE1BQVNOLFNBQVEsQ0FBQ08sSUFBVCxFQUExQixDQUVBO0FBQ0FDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxLQUFLLENBQUNHLE1BQU4sQ0FBYVMsSUFBYixDQUFrQmQsS0FBbEIsQ0FBZCxDQUF3QyxDQUN0Q1UsV0FEc0MsQ0FFdENLLFNBQVMsQ0FBRSxJQUYyQixDQUF4QyxFQUlELENBaEJHLHVFQUpzQixDQUF2QiIsImZpbGUiOiIuL3BhY2thZ2VzL2Zyb250aXR5LXdjLXRoZW1lL3NyYy9oYW5kbGVycy9wcm9kdWN0LWhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvZHVjdEhhbmRsZXIgPSB7XHJcbiAgICBuYW1lOiAncHJvZHVjdC1jYXQnLFxyXG4gICAgcHJpb3JpdHk6IDEwLFxyXG4gICAgcGF0dGVybjogJy9wcm9kdWN0LWNhdC86c2x1ZycsXHJcbiAgICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICBcclxuICAgICAgLy8gMS4gZ2V0IHNpbmdsZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGlicmFyaWVzLnNvdXJjZS5hcGkuZ2V0KHtcclxuICAgICAgICBlbmRwb2ludDogJy93cC92Mi9wcm9kdWN0Lz9wcm9kdWN0X2NhdCcsXHJcbiAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBhcmFtcy5zbHVnfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgLy8gMi4gYWRkIHNpbmdsZSBwcm9kdWN0IHRvIHN0YXRlXHJcbiAgICAgIGNvbnN0IHByb2R1Y3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgICAvLyAzLiBhZGQgcm91dGUgdG8gZGF0YVxyXG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXSwge1xyXG4gICAgICAgIHByb2R1Y3REYXRhLFxyXG4gICAgICAgIGlzUHJvZHVjdDogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/frontity-wc-theme/src/handlers/product-handler.js\n");

/***/ })

})