function jsonp(url, callback, callbackName) {
    window[callbackName] = callback;
    var ele = document.createElement('script');
    window[callbackName] = function(data) {
        callback(data);
        document.body.removeChild(ele);
    };
    ele.src = url;
    document.body.appendChild(ele);
}

export default jsonp;