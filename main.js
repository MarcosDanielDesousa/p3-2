// Para começar a escrever, precisamos trazer os elementos que criamos no HTML para o JavaScript. 
// Para fazer isso, utilizamos uma constante (const), porque este valor não vai mudar mais.
// dentro dos [], cada {} é um objeto
const caixaPrincipal = document.querySelector(".caixa-principal"); //constante caixa-principal do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas"); //constante caixa-perguntas do HTML
const caixaAlternativas = document.querySelector(".caixa-alternativas"); //constante caixa-alternativas do HTML
const caixaResultado = document.querySelector(".caixa-resultado"); //constante caixa-resultado do HTML
const textoResultado = document.querySelector(".texto-resultado"); //constante texto-resultado do HTML

const perguntas = [ 
    {
        enunciado: " Escolha seu tipo inicial ",
            alternativas: [
        { //alternativa 1
            texto: " Fogo ",
            afirmacao: "Vantagens: Inseto, Planta, Gelo e Aço. Desvantagens são Pedra, Terrestre e Água."
        },
        { //alternativa 2
            texto: "Água",
            afirmacao: "Ganha dos pokémons do tipo:veneno, normal, fogo, pedra, e suas únicas fraquezas são elétrico e planta"
        },
        { //alternativa 3
            texto: "Planta",
            afirmacao: " recebe dano dobrado de golpes do tipo inseto, fogo, voador, gelo e venenoso. Em compensação são resistentes aos elétricos, plantas, terrestres e água."},
            
        ]      
    },
    {
        enunciado: " Escolha seu tipo secundarío",
        alternativas: [
        {
            texto: "Inseto",
            afirmacao: "Vantagem: Psíquico, Sombrio e Planta. E as fraquezas são Fogo e Voador"
        },
        {
            texto: "Voador",
            afirmacao: "Vantagem: Lutador, Planta e Inseto. E ar fraquezas são Elétrico, Pedra e Gelo",
        },
            {
            texto: "Noturno",
            afirmacao: "Vantagem: Fantasma e Psíquico Fraqueza.E as fraquezas Lutador, Fada e Inseto",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Escolha a primeira parte do nome de eu pokemon",
        alternativas: [
        {
            texto: "zjarrit",
            afirmacao: "O nome seria Zjarrit"
        },
        {
            texto: "uje",
            afirmacao: "O nome seria Uje",
        },
        {
            texto: "bime",
            afirmacao: "O nome seria Bime ",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Escolha a segunda parte do nome",
        alternativas: [
        {
            texto: "fluturues",
            afirmacao: "-fluturues"
        },
        {
            texto: "nate",
            afirmacao: "-nate",
        },
        {
            texto: "nxitje",
            afirmacao: "-nxitje",
        },
    ]
    } //fecha objeto de pergunta
]; //fecha lista de pergunta

let atual = 0; //variável que mantem o inice da pergunta atual no array 'perguntas'
let perguntaAtual; // variável que armazena a pergunta atual
let historiaFinal = ""; //String que acumula as afirmações selecionadas pelo usuário, formando uma narrativa final.

//Essa função tem como objetivo exibir a pergunta atual ou o resultado final se todas as perguntas tiverem sido respondidas.
function mostraPergunta() {
    if (atual >= perguntas.length) { //Verifica se o índice atual excede o número de perguntas disponíveis. Se sim, chama mostraResultado e retorna, encerrando a função.
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]; //Atribui à variável perguntaAtual a pergunta atual do array perguntas.
    caixaPerguntas.textContent = perguntaAtual.enunciado; //Define o conteúdo de texto do elemento caixaPerguntas como o enunciado da pergunta atual.
    caixaAlternativas.textContent = ""; //Limpa o conteúdo do elemento caixaAlternativas.
    mostraAlternativas(); //Chama a função mostraAlternativas para exibir as alternativas da pergunta atual.
}

//Essa função tem como cobjetivo exibir as alternativas da pergunta atual como botões e definir a ação ao clicar neles.
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) { // Itera sobre cada alternativa da pergunta atual.
        const botaoAlternativas = document.createElement("button"); //Cria um novo elemento de botão para cada alternativa.
        botaoAlternativas.textContent = alternativa.texto; //Define o texto do botão como o texto da alternativa.
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); //Adiciona um ouvinte de eventos ao botão, que chama a função respostaSelecionada passando a alternativa selecionada quando o botão é clicado.
        caixaAlternativas.appendChild(botaoAlternativas); //Adiciona o botão ao elemento caixaAlternativas.
    }
}

//Essa função tem como objetivo processar a resposta selecionada, atualizar a narrativa final e avançar para a próxima pergunta.
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao; //Obtém a afirmação associada à alternativa selecionada.
    historiaFinal += afirmacoes + " "; //Adiciona a afirmação à historiaFinal.
    atual++; //Incrementa o índice da pergunta atual.
    mostraPergunta(); //Chama a função mostraPergunta para exibir a próxima pergunta.
}

//Essa função tem como objetivo exibir a narrativa final baseada nas respostas do usuário.
function mostraResultado() {
    caixaPerguntas.textContent = "Com base nas suas respostas, o que faria você derrotar o Thanos é"; //Define o conteúdo de texto do elemento caixaPerguntas para informar o usuário sobre o resultado.
    textoResultado.textContent = historiaFinal; //Define o conteúdo de texto do elemento textoResultado como a narrativa final acumulada.
    caixaAlternativas.textContent = ""; // Limpa o conteúdo do elemento caixaAlternativas.
}

mostraPergunta(); //Chama a função mostraPergunta para iniciar o questionário exibindo a primeira pergunta.