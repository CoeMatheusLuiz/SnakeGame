// Importando funções
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

// Pegando o elemento HTML gameBoard.
const gameBoard = document.getElementById('gameBoard');

// Variavel auxiliar para renderização do jogo.
let lastRenderTime = 0;

// Variavel auxiliar para nos ajudar a dizer quando é o fim do jogo.
let gameOver = false;

// Método que informa ao navegador que desejamos executar uma animação.
// A main é uma callback, que é a função a ser chamada quando queremos atualizar a animação.
requestAnimationFrame(main);


function main(currentTime){

    if( gameOver ){

        // Exibi uma janela com a frase "Você perdeu!".
        if( confirm("Você perdeu!")){

            // Quando acontece o fim do jogo/gameover, atualizamos a página para dar inicio a um novo game
            // fazemos isso utilizando o location na mesma url da pagina/pasta principal do game.
            location = '/17 - Snake Game'

        }

        // Para a execução da função.
        return 

    }

    requestAnimationFrame(main);

    // Variavel para calcular os segundos da renderização.
    const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;

    // Limitando a renderização de acordo com a velocidade da cobra.
    if(secondsSinceLastRender < 1 / snakeSpeed){

        // Para a execução da função.
        return

    }
    
    // Reseta a renderização e faz com que o que código/jogo rode mais rápido.
    lastRenderTime = currentTime;

    // Chamando a função.
    update();

    // Chamando a função.
    draw();

}

function update(){

    // Chamando a função que atualiza o tamanho da cobra.
    updateSnake();

    // Chamando a função que atualiza a posição da comida.
    updateFood();

    // Chamando a função que checa se deu game over.
    checkDeath();

}

function draw(){

    // Limpamos o gameBoard para que não acumule quando a cobra se mexer.
    gameBoard.innerHTML = ""
    
    // Chamando a função que desenha a cobra.
    drawSnake(gameBoard);
    
    // Chamando a função que desenha a comida.
    drawFood(gameBoard);

}

function checkDeath(){

    // Aqui chamamos duas funções, uma verifica se a cabeça da cobra saiu da grid do jogo
    // outra checa se a cabeça bateu em seu proprio corpo. Caso uma delas dê verdadeiro
    // o game over vira verdadeiro, desta maneira finaliza o game.
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();

}
