/**
 * BT1: 
 */

 document.getElementById('btnKQ').onclick = function() {
    //input
    var a = 0;
    var n = 0;
    //process
    while(a < 10000) {
        n++;
        a = a + n;
    }
    //output
    document.getElementById('showInfor').innerHTML = 'Số nguyên dương nhỏ nhất: ' + n;
 }

/**
 * BT2:
 */

document.getElementById('btnSum').onclick = function() {
    //input
    var x = document.getElementById('numberX').value * 1;
    var n = document.getElementById('numberN').value * 1;
    //process
    var s = 0;
    for(i = 1; i = n; i++) {
        s += Math.pow(x, i);  
    }
    //output
    document.getElementById('showTong').innerHTML = "Tổng là: " + s;
}

/**
 * BT3:
 */

document.getElementById('btnGT').onclick = function() {
    //input
    var number = document.getElementById('number').value * 1;
    var n = 1;
    //process
    if(number > 1) {
        for(i = 1; i <= number; i++) {
            n = n * i; 
        }
    }else {
        alert ("Nhập số lớn hơn 0!");
        return;
    }
    //output    
    document.getElementById('ketQua').innerHTML = "Giai thừa của "+ number + " là: " + n;
}

/**
 * BT4:
 */

document.getElementById('btnDiv').onclick = function() {
    //input

    //process

    //output
    
}