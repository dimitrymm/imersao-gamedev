
let imagemCenario;//variavel de escopo global, ou seja visivel para todo o programa
let imagemPersonagem;
let cenario;

let somDoJogo;

let personagem;



function preload() {
    imagemCenario = loadImage("imagens/cenario/floresta.png");
    imagemPersonagem = loadImage("imagens/personagem/correndo.png");
    somDoJogo = loadSound("sons/trilha_jogo.mp3");
}

//Esta funcao setup é iniciada antes do jogo iniciar
function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem);
    frameRate(40);
    somDoJogo.loop();

}

//Quando se deseja realizar alguma animacao ou funcao rotativa
function draw() {
    //image(imagemCenario,-50,0,width,height);
    // image(imagemCenario,width-50,0,width,height);
    cenario.exibe();
    cenario.move();

    personagem.exibe();


}


