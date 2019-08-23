var total = '';
var angkaSatu;
var angkaDua;
var tambah=false;
var kurang=false;
var kali=false;
var bagi=false;
var modulo=false;

function buttonPress(value){
    total += value;
    document.getElementById("teks").innerHTML = total;
    console.log(total);
    if (value == '+'){
        tambah = true;
        angkaSatu = parseFloat(total);
        console.log(angkaSatu);
        total = '';
        console.log(total);
        document.getElementById("teks").innerHTML = "input angka!";
    }
    else if (value == '-'){
        kurang = true;
        angkaSatu = parseFloat(total);
        console.log(angkaSatu);
        total = '';
        console.log(total);
        document.getElementById("teks").innerHTML = "input angka!";
    }
    else if (value == 'x'){
        kali = true;
        angkaSatu = parseFloat(total);
        console.log(angkaSatu);
        total = '';
        console.log(total);
        document.getElementById("teks").innerHTML = "input angka!";
    }
    else if (value == '/'){
        bagi = true;
        angkaSatu = parseFloat(total);
        console.log(angkaSatu);
        total = '';
        console.log(total);
        document.getElementById("teks").innerHTML = "input angka!";
    }
    else if (value == '%'){
        modulo = true;
        angkaSatu = parseFloat(total);
        console.log(angkaSatu);
        total = '';
        console.log(total);
        document.getElementById("teks").innerHTML = "input angka!";
    }
}

function hasil(){
    if (tambah){
        angkaDua = parseFloat(total);
        total = angkaSatu+angkaDua;
        console.log(total);
        document.getElementById("teks").innerHTML = total;
        tambah = false;
    }
    else if (kurang){
        angkaDua = parseFloat(total);
        total = angkaSatu-angkaDua;
        console.log(total);
        document.getElementById("teks").innerHTML = total;
        kurang = false;
    }
    else if(kali){  
        angkaDua = parseFloat(total);
        total = angkaSatu*angkaDua;
        console.log(total);
        document.getElementById("teks").innerHTML = total;
        kali = false;
    }
    else if(bagi){
        angkaDua = parseFloat(total);
        total = angkaSatu/angkaDua;
        console.log(total);
        document.getElementById("teks").innerHTML = total;
        bagi = false;
    }
    else if(modulo){
        angkaDua = parseFloat(total);
        total = angkaSatu%angkaDua;
        console.log(total);
        document.getElementById("teks").innerHTML = total;
        modulo = false;
    }
}

function clr(){
    total='';
    console.log(total);
    document.getElementById("teks").innerHTML = "input angka!"
}
