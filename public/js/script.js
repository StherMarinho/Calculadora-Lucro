function Calcular(){
    var precoVenda = parseFloat(document.getElementById("inputPrecoVenda").value);
    var precoCusto = parseFloat(document.getElementById("inputPrecoCusto").value);
    var valorLucro = precoVenda - precoCusto;
    var porcentagemLucro = (valorLucro/precoCusto) * 100;
    let resultado = document.getElementById("resultado");
    let htmlExibirResultado = "";
        htmlExibirResultado += `
                <div class="mt-4">
                    <p>${valorLucro}</p>
                    <p>${porcentagemLucro}%</p>
                </div>
                `;
    resultado.innerHTML = htmlExibirResultado;
    return htmlExibirResultado;
}