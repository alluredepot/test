function GetNumber(number, tagId, firstTime)
    {
	if(firstTime)
        window.pnumber = number;
        // alert("Your Ringba phone number is: " + window.pnumber + ". Please call it to test!");

    }
 
 
    (function(e,d) {
 
        var ringba_com_tag="JSc6512f8a2bbe45b5a85652bc2ea2d61d"; 
        var _sc = d.getElementsByTagName('script'), _s = _sc[_sc.length - 1];
 
        e._rgba = e._rgba || { q: [] }; e._rgba.q.push({ tag: ringba_com_tag, cb: GetNumber, numberClass: "phNumber", render: false, script: _s });
 
        if (!(e._rgba.loading = !!e._rgba.loading)) {
            var sc = d.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
            sc.src = '//js.callcdn.com/js_v2/min/ringba.com.js';
            var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
            e._rgba.loading = true;
        }
    })(window,document);
