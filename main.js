// Para começar a escrever, precisamos trazer os elementos que criamos no HTML para o JavaScript. 
// Para fazer isso, utilizamos uma constante (const), porque este valor não vai mudar mais.
// dentro dos [], cada {} é um objeto
const caixaPrincipal = document.querySelector(".caixa-principal"); //constante caixa-principal do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas"); //constante caixa-perguntas do HTML
const caixaAlternativas = document.querySelector(".caixa-alternativas"); //constante caixa-alternativas do HTML
const caixaResultado = document.querySelector(".caixa-resultado"); //constante caixa-resultado do HTML
const textoResultado = document.querySelector(".texto-resultado"); //constante texto-resultado do HTML

const perguntas = [ //abre uma lista de perguntas
    { //abre objeto de pergunta
        enunciado: " Crie seu Pokémon",
        enunciado: " Escolha seu tipo inicial ",
            alternativas: [
        { //alternativa 1
            texto: " Fogo ",
            afirmacao: "Vantagens: Inseto, Planta, Gelo e Aço.
Desvantagens: Pedra, Terrestre e Água."
        },
        { //alternativa 2
            texto: "Água",
            afirmacao: "Ganha dos pokémons do tipo:veneno, normal, fogo, pedra, e suas únicas fraquezas são elétrico e planta",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Pergunta 2",
        alternativas: [
        {
            texto: "Que não sei que sei que lá",
            afirmacao: "Afirmação"
        },
        {
            texto: "Sei lá sei que",
            afirmacao: "Afirmação",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Pergunta 3",
        alternativas: [
        {
            texto: "Bla bla bla bla",
            afirmacao: "Afirmação"
        },
        {
            texto: "Endauldi agrummgit",
            afirmacao: "Afirmação",
        },
    ]
    } //fecha objeto de pergunta
]; //fecha lista de pergunta

let atual = 0; //variável marcador de posição; começa pela pergunta 1
let perguntaAtual; //variável que vai receber o texto

function mostraPergunta(){ //função que faz aparecer a pergunta
    perguntaAtual = perguntas[atual]; //declara a variável
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
