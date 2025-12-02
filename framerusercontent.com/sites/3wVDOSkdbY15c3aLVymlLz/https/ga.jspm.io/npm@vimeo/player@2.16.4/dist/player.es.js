function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){t&&_defineProperties(e.prototype,t);n&&_defineProperties(e,n);return e}
/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */var e="undefined"!==typeof global&&"[object global]"==={}.toString.call(global);
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */function getMethodName(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */function isDomElement(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */function isInteger(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */function isVimeoUrl(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */function getVimeoUrl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t=e.id;var n=e.url;var r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(isInteger(r))return"https://vimeo.com/".concat(r);if(isVimeoUrl(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var t="undefined"!==typeof Array.prototype.indexOf;var n="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;if(!e&&(!t||!n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports
/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */}(function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty;var defineProperty=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:true,writable:true,value:n}):e[t]=n};e.WeakMap=function(){function WeakMap(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");defineProperty(this,"_id",genId("_WeakMap"));if(arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}defineProperty(WeakMap.prototype,"delete",(function(e){checkInstance(this,"delete");if(!isObject(e))return false;var t=e[this._id];if(t&&t[0]===e){delete e[this._id];return true}return false}));defineProperty(WeakMap.prototype,"get",(function(e){checkInstance(this,"get");if(isObject(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}));defineProperty(WeakMap.prototype,"has",(function(e){checkInstance(this,"has");if(!isObject(e))return false;var t=e[this._id];return!(!t||t[0]!==e)}));defineProperty(WeakMap.prototype,"set",(function(e,t){checkInstance(this,"set");if(!isObject(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];if(n&&n[0]===e){n[1]=t;return this}defineProperty(e,this._id,[e,t]);return this}));function checkInstance(e,n){if(!isObject(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function genId(e){return e+"_"+rand()+"."+rand()}function rand(){return Math.random().toString().substring(2)}defineProperty(WeakMap,"_polyfill",true);return WeakMap}()}function isObject(e){return Object(e)===e}})("undefined"!==typeof self?self:"undefined"!==typeof window?window:("undefined"!==typeof r,r));var o=createCommonjsModule((function(e){(function UMD(t,n,r){n[t]=n[t]||r();e.exports&&(e.exports=n[t])})("Promise",("undefined"!=typeof r,r),(function DEF(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function timer(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{});e=function builtInProp(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:true,configurable:false!==r})}}catch(t){e=function builtInProp(e,t,n){e[t]=n;return e}}n=function Queue(){var e,n,r;function Item(e,t){this.fn=e;this.self=t;this.next=void 0}return{add:function add(t,o){r=new Item(t,o);n?n.next=r:e=r;n=r;r=void 0},drain:function drain(){var r=e;e=n=t=void 0;while(r){r.fn.call(r.self);r=r.next}}}}();function schedule(e,r){n.add(e,r);t||(t=o(n.drain))}function isThenable(e){var t,n=typeof e;null==e||"object"!=n&&"function"!=n||(t=e.then);return"function"==typeof t&&t}function notify(){for(var e=0;e<this.chain.length;e++)notifyIsolated(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function notifyIsolated(e,t,n){var r,o;try{if(false===t)n.reject(e.msg);else{r=true===t?e.msg:t.call(void 0,e.msg);r===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=isThenable(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}}catch(e){n.reject(e)}}function resolve(e){var t,n=this;if(!n.triggered){n.triggered=true;n.def&&(n=n.def);try{if(t=isThenable(e))schedule((function(){var r=new MakeDefWrapper(n);try{t.call(e,(function $resolve$(){resolve.apply(r,arguments)}),(function $reject$(){reject.apply(r,arguments)}))}catch(e){reject.call(r,e)}}));else{n.msg=e;n.state=1;n.chain.length>0&&schedule(notify,n)}}catch(e){reject.call(new MakeDefWrapper(n),e)}}}function reject(e){var t=this;if(!t.triggered){t.triggered=true;t.def&&(t=t.def);t.msg=e;t.state=2;t.chain.length>0&&schedule(notify,t)}}function iteratePromises(e,t,n,r){for(var o=0;o<t.length;o++)(function IIFE(o){e.resolve(t[o]).then((function $resolver$(e){n(o,e)}),r)})(o)}function MakeDefWrapper(e){this.def=e;this.triggered=false}function MakeDef(e){this.promise=e;this.state=0;this.triggered=false;this.chain=[];this.msg=void 0}function Promise(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new MakeDef(this);this.then=function then(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};r.promise=new this.constructor((function extractChain(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e;r.reject=t}));t.chain.push(r);0!==t.state&&schedule(notify,t);return r.promise};this.catch=function $catch$(e){return this.then(void 0,e)};try{e.call(void 0,(function publicResolve(e){resolve.call(t,e)}),(function publicReject(e){reject.call(t,e)}))}catch(e){reject.call(t,e)}}var i=e({},"constructor",Promise,false);Promise.prototype=i;e(i,"__NPO__",0,false);e(Promise,"resolve",(function Promise$resolve(e){var t=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new t((function executor(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))}));e(Promise,"reject",(function Promise$reject(e){return new this((function executor(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))}));e(Promise,"all",(function Promise$all(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function executor(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;iteratePromises(t,e,(function resolver(e,t){i[e]=t;++a===o&&n(i)}),r)}))}));e(Promise,"race",(function Promise$race(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function executor(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");iteratePromises(t,e,(function resolver(e,t){n(t)}),r)}))}));return Promise}))}));var i=new WeakMap;
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */function storeCallback(e,t,n){var r=i.get(e.element)||{};t in r||(r[t]=[]);r[t].push(n);i.set(e.element,r)}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */function getCallbacks(e,t){var n=i.get(e.element)||{};return n[t]||[]}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */function removeCallback(e,t,n){var r=i.get(e.element)||{};if(!r[t])return true;if(!n){r[t]=[];i.set(e.element,r);return true}var o=r[t].indexOf(n);-1!==o&&r[t].splice(o,1);i.set(e.element,r);return r[t]&&0===r[t].length}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */function shiftCallbacks(e,t){var n=getCallbacks(e,t);if(n.length<1)return false;var r=n.shift();removeCallback(e,t,r);return r}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */function swapCallbacks(e,t){var n=i.get(e);i.set(t,n);i.delete(e)}var a=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */function getOEmbedParameters(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));(r||""===r)&&(t[n]=""===r?1:r);return t}),t)}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */function createEmbed(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");r.innerHTML=n;t.appendChild(r.firstChild);t.setAttribute("data-vimeo-initialized","true");return t.querySelector("iframe")}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */function getOEmbedData(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!isVimeoUrl(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,true);u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code){createEmbed(t,n);o(new Error("“".concat(e,"” is not embeddable.")));return}r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))};u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))};u.send()}))}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function initializeEmbeds(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;var t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));var n=function handleError(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=getOEmbedParameters(e);var r=getVimeoUrl(t);getOEmbedData(r,t,e).then((function(t){return createEmbed(t,e)})).catch(n)}catch(e){n(e)}}))}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function resizeEmbeds(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=true;var t=function onMessage(t){if(isVimeoUrl(t.origin)&&t.data&&"spacechange"===t.data.event){var n=e.querySelectorAll("iframe");for(var r=0;r<n.length;r++)if(n[r].contentWindow===t.source){var o=n[r].parentElement;o.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}}};window.addEventListener("message",t)}}
/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */function parseMessageData(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){console.warn(e);return{}}return e}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */function postMessage(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r));e.element.contentWindow.postMessage(r,e.origin)}}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */function processData(e,t){t=parseMessageData(t);var n=[];var r;if(t.event){if("error"===t.event){var o=getCallbacks(e,t.data.method);o.forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name;n.reject(r);removeCallback(e,t.data.method,n)}))}n=getCallbacks(e,"event:".concat(t.event));r=t.data}else if(t.method){var i=shiftCallbacks(e,t.method);if(i){n.push(i);r=t.value}}n.forEach((function(t){try{if("function"===typeof t){t.call(e,r);return}t.resolve(r)}catch(e){}}))}function initializeScreenfull(){var e=function(){var e;var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];var n=0;var r=t.length;var o={};for(;n<r;n++){e=t[n];if(e&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}}return false}();var t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror};var n={request:function request(t){return new Promise((function(r,o){var i=function onFullScreenEntered(){n.off("fullscreenchange",onFullScreenEntered);r()};n.on("fullscreenchange",i);t=t||document.documentElement;var a=t[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function exit(){return new Promise((function(t,r){if(n.isFullscreen){var o=function onFullScreenExit(){n.off("fullscreenchange",onFullScreenExit);t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function on(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function off(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};Object.defineProperties(n,{isFullscreen:{get:function get(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:true,get:function get(){return document[e.fullscreenElement]}},isEnabled:{enumerable:true,get:function get(){return Boolean(document[e.fullscreenEnabled])}}});return n}var u=new WeakMap;var l=new WeakMap;var s={};var c=function(){
/**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
function Player(e){var t=this;var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,Player);if(window.jQuery&&e instanceof jQuery){e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element.");e=e[0]}"undefined"!==typeof document&&"string"===typeof e&&(e=document.getElementById(e));if(!isDomElement(e))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var r=e.querySelector("iframe");r&&(e=r)}if("IFRAME"===e.nodeName&&!isVimeoUrl(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(u.has(e))return u.get(e);this._window=e.ownerDocument.defaultView;this.element=e;this.origin="*";var i=new o((function(r,o){t._onMessage=function(e){if(isVimeoUrl(e.origin)&&t.element.contentWindow===e.source){"*"===t.origin&&(t.origin=e.origin);var n=parseMessageData(e.data);var i=n&&"error"===n.event;var a=i&&n.data&&"ready"===n.data.method;if(a){var u=new Error(n.data.message);u.name=n.data.name;o(u)}else{var l=n&&"ready"===n.event;var s=n&&"ping"===n.method;if(l||s){t.element.setAttribute("data-ready","true");r()}else processData(t,n)}}};t._window.addEventListener("message",t._onMessage);if("IFRAME"!==t.element.nodeName){var i=getOEmbedParameters(e,n);var a=getVimeoUrl(i);getOEmbedData(a,i,e).then((function(n){var r=createEmbed(n,e);t.element=r;t._originalElement=e;swapCallbacks(e,r);u.set(t.element,t);return n})).catch(o)}}));l.set(this,i);u.set(this.element,this);"IFRAME"===this.element.nodeName&&postMessage(this,"ping");if(s.isEnabled){var a=function exitFullscreen(){return s.exit()};this.fullscreenchangeHandler=function(){s.isFullscreen?storeCallback(t,"event:exitFullscreen",a):removeCallback(t,"event:exitFullscreen",a);t.ready().then((function(){postMessage(t,"fullscreenchange",s.isFullscreen)}))};s.on("fullscreenchange",this.fullscreenchangeHandler)}return this}
/**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */_createClass(Player,[{key:"callMethod",value:function callMethod(e){var t=this;var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new o((function(r,o){return t.ready().then((function(){storeCallback(t,e,{resolve:r,reject:o});postMessage(t,e,n)})).catch(o)}))}
/**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */},{key:"get",value:function get(e){var t=this;return new o((function(n,r){e=getMethodName(e,"get");return t.ready().then((function(){storeCallback(t,e,{resolve:n,reject:r});postMessage(t,e)})).catch(r)}))}
/**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */},{key:"set",value:function set(e,t){var n=this;return new o((function(r,o){e=getMethodName(e,"set");if(void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){storeCallback(n,e,{resolve:r,reject:o});postMessage(n,e,t)})).catch(o)}))}
/**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */},{key:"on",value:function on(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!==typeof t)throw new TypeError("The callback must be a function.");var n=getCallbacks(this,"event:".concat(e));0===n.length&&this.callMethod("addEventListener",e).catch((function(){}));storeCallback(this,"event:".concat(e),t)}
/**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */},{key:"off",value:function off(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!==typeof t)throw new TypeError("The callback must be a function.");var n=removeCallback(this,"event:".concat(e),t);n&&this.callMethod("removeEventListener",e).catch((function(e){}))}
/**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */},{key:"loadVideo",value:function loadVideo(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function ready(){var e=l.get(this)||new o((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return o.resolve(e)}
/**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */},{key:"addCuePoint",value:function addCuePoint(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}
/**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */},{key:"removeCuePoint",value:function removeCuePoint(e){return this.callMethod("removeCuePoint",e)}
/**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */
/**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */},{key:"enableTextTrack",value:function enableTextTrack(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function disableTextTrack(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function pause(){return this.callMethod("pause")}},{key:"play",value:function play(){return this.callMethod("play")}},{key:"requestFullscreen",value:function requestFullscreen(){return s.isEnabled?s.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function exitFullscreen(){return s.isEnabled?s.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function getFullscreen(){return s.isEnabled?o.resolve(s.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function requestPictureInPicture(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function exitPictureInPicture(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function getPictureInPicture(){return this.get("pictureInPicture")}},{key:"unload",value:function unload(){return this.callMethod("unload")}},{key:"destroy",value:function destroy(){var e=this;return new o((function(t){l.delete(e);u.delete(e.element);if(e._originalElement){u.delete(e._originalElement);e._originalElement.removeAttribute("data-vimeo-initialized")}e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element));if(e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage);s.isEnabled&&s.off("fullscreenchange",e.fullscreenchangeHandler);t()}))}},{key:"getAutopause",value:function getAutopause(){return this.get("autopause")}
/**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */},{key:"setAutopause",value:function setAutopause(e){return this.set("autopause",e)}},{key:"getBuffered",value:function getBuffered(){return this.get("buffered")}
/**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */},{key:"getCameraProps",value:function getCameraProps(){return this.get("cameraProps")}
/**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */},{key:"setCameraProps",value:function setCameraProps(e){return this.set("cameraProps",e)}
/**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */},{key:"getChapters",value:function getChapters(){return this.get("chapters")}},{key:"getCurrentChapter",value:function getCurrentChapter(){return this.get("currentChapter")}},{key:"getColor",value:function getColor(){return this.get("color")}
/**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */},{key:"setColor",value:function setColor(e){return this.set("color",e)}
/**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */},{key:"getCuePoints",value:function getCuePoints(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function getCurrentTime(){return this.get("currentTime")}
/**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */},{key:"setCurrentTime",value:function setCurrentTime(e){return this.set("currentTime",e)}},{key:"getDuration",value:function getDuration(){return this.get("duration")}},{key:"getEnded",value:function getEnded(){return this.get("ended")}},{key:"getLoop",value:function getLoop(){return this.get("loop")}
/**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */},{key:"setLoop",value:function setLoop(e){return this.set("loop",e)}
/**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */},{key:"setMuted",value:function setMuted(e){return this.set("muted",e)}},{key:"getMuted",value:function getMuted(){return this.get("muted")}},{key:"getPaused",value:function getPaused(){return this.get("paused")}},{key:"getPlaybackRate",value:function getPlaybackRate(){return this.get("playbackRate")}
/**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */},{key:"setPlaybackRate",value:function setPlaybackRate(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function getPlayed(){return this.get("played")}},{key:"getQualities",value:function getQualities(){return this.get("qualities")}},{key:"getQuality",value:function getQuality(){return this.get("quality")}
/**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */},{key:"setQuality",value:function setQuality(e){return this.set("quality",e)}},{key:"getSeekable",value:function getSeekable(){return this.get("seekable")}},{key:"getSeeking",value:function getSeeking(){return this.get("seeking")}},{key:"getTextTracks",value:function getTextTracks(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function getVideoEmbedCode(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function getVideoId(){return this.get("videoId")}},{key:"getVideoTitle",value:function getVideoTitle(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function getVideoWidth(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function getVideoHeight(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function getVideoUrl(){return this.get("videoUrl")}},{key:"getVolume",value:function getVolume(){return this.get("volume")}
/**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */},{key:"setVolume",value:function setVolume(e){return this.set("volume",e)}}]);return Player}();if(!e){s=initializeScreenfull();initializeEmbeds();resizeEmbeds()}export{c as default};

//# sourceMappingURL=player.es.js.map