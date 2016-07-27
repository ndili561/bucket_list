/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var state = {
	  countries: null
	}
	
	window.onload = function(){
	  var url = "https://restcountries.eu/rest/v1"
	  var request = new XMLHttpRequest();
	  request.open("GET", url);
	  request.onload = function () {
	   if (request.status === 200) {
	     var jsonString = request.responseText;
	     var countries = JSON.parse(jsonString);
	     state.countries = countries
	     main(countries);
	   }
	 }
	 request.send();
	
	  var main = function(countries){
	    add(countries)
	    
	 }
	
	 var add = function(countries){
	  var country = document.getElementById('add');
	  countries.forEach(function(item,index){
	    item.index = index;
	    var option = document.createElement('option');
	    option.value = index;
	    option.text = item.name;
	    country.appendChild(option);
	  
	  })
	  var button = document.getElementById('button');
	  button.onclick = function (event){
	    var selector = document.getElementById('add')
	    event.preventDefault();
	    save(state.countries[selector.value]);
	   } 
	  
	  var save = function(country){
	   var url = 'http://localhost:3000/bucket';
	   var request = new XMLHttpRequest();
	   request.open('POST', url);
	   request.setRequestHeader('Content-Type', 'application/json');
	   request.onload = function(){
	    if (request.status === 200){
	     console.log('request 200:',country)
	    }
	   }
	   request.send(JSON.stringify(country))
	  }
	 }
	};
	
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map