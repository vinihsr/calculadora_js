function insert(num) {
    var resultado = document.getElementById("resultado");
    var calculo = resultado.textContent;
    
    // Check if the length exceeds the limit
    if (calculo.length < 12) {
        resultado.textContent = calculo + num;
    } else {
        // Show an indication when the limit is exceeded
        resultado.textContent = "Max limit reached";
        setTimeout(() => {
            resultado.textContent = calculo;
        }, 1000); // Reset to the previous value after 1 second
    }

    // Check if the content overflows the container horizontally
    if (resultado.scrollWidth > resultado.clientWidth) {
        resultado.style.width = resultado.scrollWidth + "px";
    }
}

function clean() {
    var resultado = document.getElementById("resultado");
    resultado.textContent = "";
}

function back() {
    var resultado = document.getElementById("resultado");
    var calculo = resultado.textContent;
    resultado.textContent = calculo.substring(0, calculo.length - 1);
}

function calcular() {
    var resultado = document.getElementById("resultado");
    var calculo = resultado.textContent;
    var lastChar = calculo.charAt(calculo.length - 1);
    
    // Check if the last character is a number
    if (!isNaN(lastChar) && calculo.length > 0) {
        // Evaluate the expression if it ends with a number
        resultado.textContent = eval(calculo);
    } else {
        // Otherwise, clear the display
        clean();
    }
}
