
const btn = document.querySelector('#btn');
const nome = document.querySelector('#nome');
const Lnome= document.querySelector('#labelNome');
let validNome = false;

const usuario= document.querySelector('#usuario');
const LUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

const Senha = document.querySelector('#senha');
const LSenha = document.querySelector('#labelSenha');
let validSenha =false;

const repitSenha = document.querySelector('#repitsenha');
const LrepitSenha = document.querySelector('#labelRepiSenha');
let validRepitSenha =false;

const msgerro = document.querySelector('#erro')
const msgsucesso =document.querySelector('#sucesso')

// FUNÇÃO deixa texto vemelhor 
let red = (item) =>{  
    item.setAttribute('style','color:red')   
}
let borderRed = (item) =>{
    item.setAttribute('style', 'border-color: red;');  
}
// FN texto verde Grenn 
let textGreen = (item) =>{  
    item.setAttribute('style', ' color:green')  
}
let bordergreen = (item) =>{
    item.setAttribute('style', 'border-color: green;');;  
}

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        red(Lnome)
        borderRed(nome)
        Lnome.textContent = ' Nome: insira no minimo 3 caracteres';
        if( nome.value.length == ""){
            Lnome.textContent = '' ;
        }
    }else {
        textGreen(Lnome)
        bordergreen(nome)
        Lnome.textContent = ' Nome';        
        validNome = true;
    }
});

usuario.addEventListener('keyup', () => {

    if(usuario.value.length <= 2){ 
        red(LUsuario)
        borderRed(usuario)
        LUsuario.textContent = ' Nome: insira no minimo 3 caracteres';
        if( usuario.value.length == ""){
            LUsuario.textContent = '' ;
        }
    }else {
        textGreen(LUsuario)
        bordergreen(usuario)
        LUsuario.textContent = ' Usuario';
        validUsuario = true;
    }
});

Senha.addEventListener('keyup', () => {
    if(Senha.value.length <=3) { 
        red(LSenha)
        borderRed(Senha)
        LSenha.textContent = 'Senha: minimo 4 caracteres'
        if( Senha.value.length == ""){
            LSenha.textContent = '' ;
        }

    } else {

        textGreen(LSenha)
        bordergreen(Senha)
        LSenha.textContent = 'Senha';
        validSenha =true;
    }
});

repitSenha.addEventListener('keyup', () => {
    if(repitSenha.value != Senha.value  ){    
        LrepitSenha.setAttribute('style', ' color:red')
        LrepitSenha.textContent = 'senha não confere ';
        repitSenha.setAttribute('style', 'border-color: red;');
    } else {
        LrepitSenha.setAttribute('style', ' color:green')
        LrepitSenha.textContent = 'Confirme senha';
        repitSenha.setAttribute('style', 'border-color: green;');
        validRepitSenha =true;
    }
});
// funçao com passagem de argumento . 

//  ========== CADASTRAR  ===============

btn.addEventListener('click', () => {
    
    if( validNome && validUsuario && validSenha && validRepitSenha ){
       
        //fazendo um  com json objeto
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        //objeto Js ...    
        listaUser.push(
            
            {
                nome: nome.value,
                userCad:usuario.value,
                senhaCad: Senha.value
            }

        ); 
         // converte para objeto string 
        localStorage.setItem( 'listaUser',JSON.stringify(listaUser));//cria uma string com o array . pq localstorage so recebe string .
        msgsucesso.setAttribute('style', 'display:block')
        msgsucesso.textContent = "Cadastrando Usuário"
        msgerro.setAttribute('style', 'display:none')

        setTimeout( () => {
            window.location.href = 'http://127.0.0.1:5500/index.html'
        }, 1000);

    } else {
        msgerro.setAttribute('style', 'display:block')
        msgerro.textContent = "Prencha todos os campos" 
    }

})

// ========= fazer Login ========

function entrar() {
    const usuario =document.querySelector('#usuario'); 
    const senha =document.querySelector('#senha');
    
    let listaUser = [];   

    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    let ache = false ;

    listaUser.forEach((item) => {
        if (usuario.value === item.userCad && senha.value === item.senhaCad) {

            userValid = {
                user: item.userCad,
                senha: item.senhaCad
            };
            ache =true;  
        }
    });
        // variavel achei ou nao ; true 
    if ( ache ) {
        window.location.href = 'http://127.0.0.1:5500/inicio/index.html';
        //gerar um token para autenticar o usuario
        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;
      
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
        console.log('logando')

    } else {
        red(LUsuario)
        borderRed(usuario)
        red(LSenha)
        borderRed(senha)
        msgerro.setAttribute('style','display:block');
        msgerro.textContent = 'Usuário ou senha incorretos';
       console.log('erro: entrou no else ');

    }
    
}

