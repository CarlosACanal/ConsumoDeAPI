var xhr = new XMLHttpRequest();

xhr.open("GET", "https://rickandmortyapi.com/api/character");
xhr.send();

xhr.addEventListener("load", function(){
    const resposta = xhr.responseText;
    const resultados = JSON.parse(resposta);
    const personagens = resultados.results
    personagens.forEach(personagem => {
        AdicionaPersonagem(personagem);
    });
});


function AdicionaPersonagem(personagem){
    const container = document.querySelector(".container");
    let cardPersonagem = document.createElement('div');
    cardPersonagem.classList.add('card-personagem');

    const tagImg = document.createElement('img');
    tagImg.classList.add('imagem-personagem')
    tagImg.src = personagem.image;
    cardPersonagem.appendChild(tagImg);

    const nomePersonagem = document.createElement('h2');
    nomePersonagem.classList.add('nome-personagem');
    nomePersonagem.innerText = personagem.name;
    cardPersonagem.appendChild(nomePersonagem);

    container.appendChild(cardPersonagem);

    
}
