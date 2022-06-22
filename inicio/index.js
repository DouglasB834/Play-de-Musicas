
import musicas from './player.js'

// tudo que precisa carregar no play ...  ao indexMsuic 
const imagem = document.querySelector("img");
const titleM = document.querySelector(".tittle");
const nomeArtist = document.querySelector(".artist");
const musica = document.querySelector("audio");


//Comando das musicas 
document.querySelector('.btn-play').addEventListener('click', function()  {
    musica.play()
    document.querySelector('#btn-pause').setAttribute('style', 'display:block')
    document.querySelector('.btn-play').setAttribute('style', 'display:none')  
});

document.querySelector('#btn-pause').addEventListener('click', () => {
    musica.pause()
    document.querySelector('#btn-pause').setAttribute('style', 'display:none')
    document.querySelector('.btn-play').setAttribute('style', 'display:block')
});

let indexMusica = 0;
musica.onended = ()=> {
    if(indexMusica == musicas.length){
        indexMusica = 0
        renderizarMusica (indexMusica)
        musica.play();
    }else{
        ++indexMusica 
        renderizarMusica (indexMusica)
        musica.play();
    }
    document.querySelector('.btn-play').setAttribute('style', 'display:none')  
    document.querySelector('#btn-pause').setAttribute('style', 'display:block')

}  
renderizarMusica (indexMusica)// para puxar os atributos do primeiro vetor.  toda vez que add uma  jogar uma musica  ++
document.querySelector("#back").addEventListener('click',() =>{
    indexMusica-- ;
    if(indexMusica < 0){
        indexMusica = musicas.length -1
    }
    renderizarMusica(indexMusica) 
    document.querySelector('.btn-play').setAttribute('style', 'display:block')
    document.querySelector('#btn-pause').setAttribute('style', 'display:none')   
});

document.querySelector("#next").addEventListener('click',() =>{   
    indexMusica++ ; // quando vc clicar ele vai jogar o vator 0 pro index na função   
     
    if(indexMusica == musicas.length){
        indexMusica =0
    }
    renderizarMusica(indexMusica)
    document.querySelector('.btn-play').setAttribute('style', 'display:block')
    document.querySelector('#btn-pause').setAttribute('style', 'display:none')
});

function renderizarMusica(index){   
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        titleM.textContent =musicas[index].title 
        nomeArtist.textContent =musicas[index].artist
        imagem.src =musicas[index].img
       
    })
}

// let Fmusica= document.querySelector('.container-form')
document.querySelector('.cadastrar').addEventListener('click', () =>{
    document.querySelector('.container-form').classList.add('active')   
})

document.querySelector('#enviar').addEventListener('click', () =>{   
        document.querySelector('.container-form').classList.remove('active') 
    // fazer um tratamento para quando for preenchido active required
    //e enviar ++ para redenrizar
})

document.querySelector('#voltar').addEventListener('click', () =>{
    document.querySelector('.container-form').classList.remove('active')    
})
