function obterTurno() {
    const hora = new Date().getHours();

    if (hora < 8) {
        return "NOITE";
    } else if (hora < 16) {
        return "MANHÃ";
    } else {
        return "TARDE";
    }
}

function obterData() {
    const hoje = new Date();

    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

function preencherEmail() {

    const assunto = document.querySelector("input[name='subjectbox']");
    const corpo = document.querySelector("div[aria-label='Corpo da mensagem']");

    if (!assunto || !corpo) return;

    if (assunto.value !== "") return;

    const turno = obterTurno();

    assunto.value =
        `PASSAGEM DE TURNO DA ${turno} - ${obterData()} - `;

    assunto.dispatchEvent(new Event("input", { bubbles: true }));

    const texto = `RECEPÇÃO:




✅ Check-in Realizados:
⏳ Check-in Pendentes:
🚪 Check-out Realizados:
🕐 Late Check-out:-


🔹📦 - Pedidos -


🔹🍎 BALONECK:



🔹🥖 Padaria:





💰 Dinheiro em caixa: R$ 0,00`;

corpo.focus();

document.execCommand("selectAll", false, null);
document.execCommand("insertText", false, texto);
document.execCommand("selectAll", false, null);
document.execCommand("bold", false, null);

corpo.dispatchEvent(new Event("input", { bubbles: true }));


    const para = document.querySelector("input[aria-label='Destinatários']");

    if (para && para.value === "") {
        para.value =
        "recepcaocentroclass@gmail.com, recepcaocasacentro@gmail.com, sup2.ghotelaria@gmail.com, sup.ghotelaria@gmail.com";

        para.dispatchEvent(new Event("input", { bubbles: true }));
    }
}

setInterval(preencherEmail, 1000);
