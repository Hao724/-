//画面の初期値
var result = document.getElementById("result");
//入力がされていない場合（空白）
var kuuhaku = "";

//ボタンをクリックしたら画面に表示される
//ボタン７をクリックしたらvalue="7"の値を画面に表示
document.getElementById("sev").addEventListener("click", sev)
function sev(){
var sev = document.getElementById("sev").value;
result.value += sev;
return result.value;
}

//ボタン8をクリックしたらvalue="8"の値を画面に表示
document.getElementById("eig").addEventListener("click", eig)
function eig(){
var eig = document.getElementById("eig").value;
result.value += eig;
return result.value;
}

//ボタン9をクリックしたらvalue="9"の値を画面に表示
document.getElementById("nine").addEventListener("click", nine)
function nine(){
var nine = document.getElementById("nine").value;
result.value += nine;
return result.value;
}

//ボタン+をクリックしたらvalue="+"の値を画面に表示
document.getElementById("pur").addEventListener("click", pur)
function pur(){
var pur = document.getElementById("pur").value;
if(result.value === ""){
    result.value = "";
}
else {
    result.value += pur;
}
return result.value;
}

//ボタン4をクリックしたらvalue="4"の値を画面に表示
document.getElementById("four").addEventListener("click", four)
function four(){
var four = document.getElementById("four").value;
result.value += four;
return result.value;
}

//ボタン5をクリックしたらvalue="5"の値を画面に表示
document.getElementById("five").addEventListener("click", five)
function five(){
var five = document.getElementById("five").value;
result.value += five;
return result.value;
}

//ボタン6をクリックしたらvalue="6"の値を画面に表示
document.getElementById("six").addEventListener("click", six)
function six(){
var six = document.getElementById("six").value;
result.value += six;
return result.value;
}

//ボタン-をクリックしたらvalue="-"の値を画面に表示
document.getElementById("mn").addEventListener("click", mn)
function mn(){
var mn = document.getElementById("mn").value;
if(result.value === ""){
    result.value = "";
}
else {
    result.value += mn;
}
return result.value;
}

//ボタン1をクリックしたらvalue="1"の値を画面に表示
document.getElementById("one").addEventListener("click", one)
function one(){
var one = document.getElementById("one").value;
result.value += one;
return result.value;
}

//ボタン2をクリックしたらvalue="2"の値を画面に表示
document.getElementById("two").addEventListener("click", two)
function two(){
var two = document.getElementById("two").value;
result.value += two;
return result.value;
}

//ボタン3をクリックしたらvalue="3"の値を画面に表示
document.getElementById("th").addEventListener("click", th)
function th(){
var th = document.getElementById("th").value;
result.value += th;
return result.value;
}

//ボタン*をクリックしたらvalue="*"の値を画面に表示
document.getElementById("kak").addEventListener("click", kak)
function kak(){
var kak = document.getElementById("kak").value;
if(result.value === ""){
    result.value = "";
}
else {
    result.value += kak;
}
return result.value;
}

//ボタン0をクリックしたらvalue="0"の値を画面に表示
document.getElementById("zero").addEventListener("click", zero)
function zero(){
var zero = document.getElementById("zero").value;
result.value += zero;
return result.value;
}

//ボタン00をクリックしたらvalue="00"の値を画面に表示
document.getElementById("dab").addEventListener("click", dab)
function dab(){
var dab = document.getElementById("dab").value;
if(result.value === ""){
    result.value = "";
}
else {
    result.value += dab;
}
return result.value;
}

//ボタン.をクリックしたらvalue="."の値を画面に表示
document.getElementById("ten").addEventListener("click", ten)
function ten(){
var ten = document.getElementById("ten").value;
if(result.value === ""){
    result.value = "";
}
else {
    result.value += ten;
}
    return result.value;
}

//ボタン/をクリックしたらvalue="/"の値を画面に表示
document.getElementById("sur").addEventListener("click", sur)
function sur(){
var sur = document.getElementById("sur").value;
if(result.value === ""){
    result.value = "";
}
else {
    result.value += sur;
}
return result.value;
}

//記号要素の取得
var pur = document.getElementById("pur");
var mn = document.getElementById("mn");
var kak = document.getElementById("kak");
var ten = document.getElementById("ten");
var sur = document.getElementById("sur");

//AC / =の要素を配列として取得
var buttons = document.querySelectorAll(".box2")
//ACを押したら初期画面、＝を押したら計算
buttons.forEach(button => {
button.addEventListener('click', () => {
    if (button.textContent === '=') {
    result.value = eval(result.value);
    } else if (button.textContent === 'AC') {
    result.value = "";
    pur.disabled = false;
    mn.disabled = false;
    kak.disabled = false;
    sur.disabled = false;
    ten.disabled = false;
    } 
});
});

var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "01"){
            result.value = "1";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "02"){
            result.value = "2";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "03"){
            result.value = "3";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "04"){
            result.value = "4";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "05"){
            result.value = "5";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "06"){
            result.value = "6";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "07"){
            result.value = "7";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "08"){
            result.value = "8";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "09"){
            result.value = "9";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(2,-2) === "00"){
            result.value = "0";
        }
        return;
    });
});
var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.substring(3,-2) === "000"){
            result.value = "0";
        }
        return;
    });
});

var inps = document.querySelectorAll(".inp")
inps.forEach(inp => {
    inp.addEventListener('click', () => {
        var num = result.value;
        if(num.slice(-1) === "+"){
        pur.disabled = true;
        }
        else if(num.slice(-1) === "-"){
        mn.disabled = true;
        }
        else if(num.slice(-1) === "*"){
        kak.disabled = true;
        }
        else if(num.slice(-1) === "/"){
        sur.disabled = true;
        }
        else if(num.slice(-1) === "."){
        ten.disabled = true;
        }
        return;

    });
    });
    
        var inps = document.querySelectorAll(".inp")
        inps.forEach(inp => {
        inp.addEventListener('click', () => {
            var num = result.value;
            if(num.slice(-1) !== "+"){
            pur.disabled = false;
            }
            return;
        });
        });

        var inps = document.querySelectorAll(".inp")
        inps.forEach(inp => {
        inp.addEventListener('click', () => {
            var num = result.value;
            if(num.slice(-1) !== "-"){
            mn.disabled = false;
            }
            return;
        });
        });
        var inps = document.querySelectorAll(".inp")
        inps.forEach(inp => {
        inp.addEventListener('click', () => {
            var num = result.value;
            if(num.slice(-1) !== "*"){
            kak.disabled = false;
            }
            return;
        });
        });
        var inps = document.querySelectorAll(".inp")
        inps.forEach(inp => {
        inp.addEventListener('click', () => {
            var num = result.value;
            if(num.slice(-1) !== "/"){
            sur.disabled = false;
            }
            return;
        });
        });

        var inps = document.querySelectorAll(".inp")
        inps.forEach(inp => {
        inp.addEventListener('click', () => {
        var num = result.value;
        if(num.slice(-1) !== "."){
        ten.disabled = false;
        }
        return;
        });
        });