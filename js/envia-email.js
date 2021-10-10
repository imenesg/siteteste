var nome =  document.querySelector("#FNAME")
var empresa = document.querySelector("#ENAME")
var email = document.querySelector("#EMAIL")
var vaga = document.querySelector("#VAGA")
var telefone = document.querySelector("#TELEFONE")
var celular = document.querySelector("#CELULAR")
var local = document.querySelector("#LOCAL")
var atividades = document.querySelector("#mce-ATIVIDADES")
var requisitos = document.querySelector("#mce-REQUISITOS")
var pagamento =  document.querySelector("#VALOR")
var observacoes = document.querySelector("#mce-OBSERVACAO")
var botao = document.querySelector(".botao")


botao.addEventListener("click", enviaEmail)

function enviaEmail(event){
    event.preventDefault()
    
    var emailFormatado = (`
    Seu nome : ${nome.value};

    Empresa : ${empresa.value};

    E-mail : ${email.value};

    vaga : ${vaga.value};

    telefone : ${telefone.value};

    celular :${celular.value};

    Local : ${local.value};

    Como será o Freela ?:
    ${atividades.value};

    Requisitos : 
    ${requisitos.value};

    Quanto será pago ?: R$${pagamento.value};

    Outras informações/observações :
    ${observacoes.value};
    `);


    window.open(`mailto:freelaemfrancavaga@gmail.com?subject=Nova vaga&body=${encodeURI(emailFormatado)}`);
}