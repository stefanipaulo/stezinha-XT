function validarCPF() {
    var cpf = document.getElementById("cpf").value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) {
        document.getElementById("resultado").innerText = "CPF inválido. Deve conter 11 dígitos.";
        return;
    }
    var sum = 0;
    var remainder;
    for (var i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
        document.getElementById("resultado").innerText = "CPF inválido.";
        return;
    }
    sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
        document.getElementById("resultado").innerText = "CPF inválido.";
        return;
    }
    document.getElementById("resultado").innerText = "CPF válido.";
}
