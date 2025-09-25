const conselhos = [
    "Acredite em você mesmo" , "o primeiro passo é o mais importante" , 
    "a persistência realiza o impossível " , "aprenda algo novo hoje" ,
    "seja gentil com todos que encontrar"
]
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho()
{
    const indice =Math.floor(Math.random() * (conselhos.length +1));
    conselhoTexto.textContent = conselhos [indice];
    
}

novoConselhoBtn.addEventListener('click', gerarConselho);





