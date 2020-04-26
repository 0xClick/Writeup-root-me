var oldDate = new Date();
oldSecond = oldDate['getSeconds']();
setTimeout('func1("'+login.password.value+'")', 2000);		// setTimeout() 	2000ms = 2s

function func3(param3_1, param3_2) {		// 5e8xXmc5bbbbbbbbbb, Z5ZeZ8ZxZXZmZcZ5
    var3_1 = '8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz';
    var3_2 = escape(param3_2 + param3_1 + "eDer");		// Z5ZeZ8ZxZXZmZcZ55e8xXmc5bbbbbbbbbbeDer
    output = "";
    var var3_3, var3_4, var3_5 = "";
    var _3, _1, _2, _0 = "";
    i = 0;
    var3_6 = var3_1;
    do {
        var3_3 = var3_2.charCodeAt(i++);
        var3_4 = var3_2.charCodeAt(i++);
        var3_5 = var3_2.charCodeAt(i++);
        _3 = var3_3 >> 2;
        _1 = ((var3_3 & 3) << 4) | (var3_4 >> 4);
        _2 = ((var3_4 & 15) << 2) | (var3_5 >> 6);
        _0 = var3_5 & 63;
        if (isNaN(var3_4)) {
            _2 = _0 = 64;
        } else if (isNaN(var3_5)) {
            _0 = 64;
        }
        output = output + var3_6.charAt(_3) + var3_1.charAt(_1) + var3_6.charAt(_2) + var3_1.charAt(_0);
        var3_3 = var3_4 = var3_5 = "";
        _3 = _1 = _2 = _0 = "";
    } while (i < var3_2.length);
	// output must be "s6qgFq;4sW~gs$XBs]1g1P)/}9IOFPE3#+$4s+/6I$?/1sqEF,T" with Subtract == 2
	// param3_1 needs 10 characters more
	if (func4(output, __) == "p5rdEr87pT}dp'[Ap^2d2S*,~:JLESF0 ('7p(,5J'<,2prFE/W") {
        window.location.href = param3_1 + ".php";
    } else {
        alert("MOUHAHAHAHHAHAHAHAHA");
    }
}

function func4(param4_1, param4_2) {
    var4_1 = "";
    var4_2 = "";
    j = 0000000000;
    for (j; j < 11; j++) {
        var4_1 = param4_1.length ^ param4_2;
        if (var4_1 != "") var4_1 = "";
    }
    var4_3 = var4_1;
    var4_2 = var4_3;
	/*
	var4_1 = var4_2 = var4_3 = ""
	*/
    for (i = 0; i < param4_1.length; i++) {
        if (var4_3 == "ESF0 ('7p(,5J')") {
            var4_3 += String["fromCharCode"](param4_2 ^ param4_1.charCodeAt(i) + 12);
        } else {
            var4_3 += String.fromCharCode(param4_2 ^ param4_1.charCodeAt(i));
        }
    }
    if (var4_2 == "sfeze5825qsde8rfq--") {
        for (______ = 0; ______ > -1; ______++) {
            var4_2 = "\x6e\x6f\x6f\x62\x20\x6e\x6f\x6f\x62";
        }
    }
    return var4_3;
}

function func2(param2_1) {		// 5e8xXmc5...
    var2_1 = "%5A%35Ze%5A%38Zx%5AX%5A%6DZc%5A5";		// Z5ZeZ8ZxZXZmZcZ5
    var2_2 = Array('%5A%58', '%5A%65', '%5A%32', '%5A%35', '%5A%72', '%5A%6C', '%5A%73', '%5A%76', '%5A%69', '%5A%70', '%5A%38', '%5A%77', '%5A%66', '%5A%70', '%5A%78', '%5A%6D', '%5A%63');
					//  'X', 	 'e',	 	'2', 	  '5',		'r',	  'l', 		's',	  'v',  	'i',  	 'p',  		'8',  	  'w',   	'f', 	  'p',  	'x',	  'm', 		'c'
    i = 0;
    var2_3 = String();
    var2_4 = '';
    for (i = 0; i < param2_1.length; i++) {
        var2_4 = param2_1.substr(i, 1);
        for (j = 0; j < var2_2.length; j++) {	// 17
            if (unescape(var2_2[j].substr(3, 3)) == var2_4) {
                var2_3 += var2_2[j];
            }
        }
    }
    if (unescape(var2_3) == unescape(var2_1)) {
        func3(param2_1, unescape(var2_3));
    } else {
        alert('fo');
    }
}

function func1(param1_1) {
    newDate = new Date();
    newSecond = newDate['getSeconds']();
    Subtract = newSecond - oldSecond;
    if (Subtract != 2) Subtract = 3;
    __ = 1.565685956 + Subtract;
    func2(param1_1);
}