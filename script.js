function reset(){
    document.getElementById("display1").value = "0";
    document.getElementById("display2").value = "0";
    document.getElementById("display3").value = "0";
}

function add(){
    const num1 = Number(document.getElementById("display1").value);
    const num2 = Number(document.getElementById("display2").value);
    const sum = num1 + num2;
    String(sum);
    document.getElementById("display3").value = String(sum);
}

function minus(){
    const num1 = Number(document.getElementById("display1").value);
    const num2 = Number(document.getElementById("display2").value);
    const sum = num1 - num2;
    String(sum);
    document.getElementById("display3").value = String(sum);
}

function multi(){
    const num1 = Number(document.getElementById("display1").value);
    const num2 = Number(document.getElementById("display2").value);
    const sum = num1 * num2;
    String(sum);
    document.getElementById("display3").value = String(sum);
}

function divide(){
    const num1 = Number(document.getElementById("display1").value);
    const num2 = Number(document.getElementById("display2").value);
    const sum = num1 / num2;
    String(sum);
    document.getElementById("display3").value = String(sum);
}