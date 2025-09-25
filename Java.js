const conselhos = [
    "Acredite em você mesmo" , "o primeiro passo é o mais importante" , 
    "a persistência realiza o impossível " , "aprenda algo novo hoje" ,
    "seja gentil com todos que encontrar"


]
console.log("Arquivo de script carregado. Array de conselhos pronto");
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho()
{
    const indice =Math.floor(Math.random() * (conselhos.length));
    conselhoTexto.textContent = conselhos [indice];
    
}

novoConselhoBtn.addEventListener('click', gerarConselho);
