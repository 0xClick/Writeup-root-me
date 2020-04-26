var glo_var = "\x71\x11\x24\x59\x8d\x6d\x71\x11\x35\x16\x8c\x6d\x71\x0d\x39\x47\x1f\x36\xf1\x2f\x39\x36\x8e\x3c\x4b\x39\x35\x12\x87\x7c\xa3\x10\x74\x58\x16\xc7\x71\x56\x68\x51\x2c\x8c\x73\x45\x32\x5b\x8c\x2a\xf1\x2f\x3f\x57\x6e\x04\x3d\x16\x75\x67\x16\x4f\x6d\x1c\x6e\x40\x01\x36\x93\x59\x33\x56\x04\x3e\x7b\x3a\x70\x50\x16\x04\x3d\x18\x73\x37\xac\x24\xe1\x56\x62\x5b\x8c\x2a\xf1\x45\x7f\x86\x07\x3e\x63\x47";

function xor(x, y) 
{
    return x ^ y;
}

function func_5(y) 		
{
	/*
		make a number from y.
		y == 3 => binary(z) == 111 00000
		y == 5 => binary(z) == 11111 000
		...
	*/
    var z = 0;
    for (var i = 8 - y; i < 8; i++)
	{
        z += Math.pow(2, i);
    }
    return z
}

function func_4(x, y) 
{
	y = y % 8;
	/*
		take y first bits from x and turn it to the last.
		binary(x) == 10 011101, y == 2 => binary(func_4(x,y)) == 011101 10
		binary(x) == 11011 011, y == 5 => binary(func_4(x,y)) == 011 11011
	*/
    temp = func_5(y);
    temp = (x & temp) >> (8 - y);
    return ((temp) + (x << y)) & 0x00ff;
}

function func_2(param_1, key) 
{
    var_1 = "";
    for (var i = 0; i < param_1.length; i++) 	// 98 times
	{
        c = param_1.charCodeAt(i);
        if (i != 0) 
		{
            t = var_1.charCodeAt(i - 1) % 2;
            switch (t) 
			{
                case 0:
                    cr = xor(c, key.charCodeAt(i % key.length));
                    break;
                case 1:
                    cr = func_4(c, key.charCodeAt(i % key.length));
                    break;
            }
        } 
		else 
		{
            cr = xor(c, key.charCodeAt(0));
        }
        var_1 += String.fromCharCode(cr);
    }
    return var_1;
}

function func_1(param_1) 
{
    var sum = 0;
    for (var i = 0; i < param_1.length; i++)
	{
        sum += param_1["charCodeAt"](i)
    }
    if (sum == 8932) 
	{
        var code = window.open("", "", "\x77\x69\x64\x74\x68\x3d\x33\x30\x30\x2c\x68\x65\x69\x67\x68\x74\x3d\x32\x20\x30");
        code.document.write(param_1)
    } 
	else 
	{
        alert("Mauvais mot de passe!")
    }
}

func_1(func_2(glo_var, prompt("Mot de passe?")));

/*------------------- Brute 2 more characters -------------------*/

function brute()
{
	for (var i = 32; i < 127; i++)
	{
		for (var j = 32; j < 127; j++)
		{
			var known = "MyP4" + String.fromCharCode(i, j);
			var var_1 = func_2(glo_var, known);
			if (var_1[4] == 'l' && var_1[5] == '>')
			{
				console.log(var_1);
				console.log(known);
			}
		}
	}
}	
