// Importando função
import { getInputDirection } from "./input.js";

// Exportando e criando variavel que dirá a velocidade da cobra
export const snakeSpeed = 2;

// Variavel que dita o tamanho da cobra no inicio do game
const snakeBody = [{
    x: 11, 
    y: 11
}]

// Variavel que auxilia a dizer quantos segmentos temos que adicionar na cobra
let newSegments = 0;

// Função que atualiza a cobra
export function update(){

    addSegments();

    // Variavel que pega qual a direção da cobra, atraves da função getInputDirection
    const inputDirection = getInputDirection();

    // Este for atualiza o snakeBody conforme a cobra come a comida e cresce
    for(let i = snakeBody.length - 2; i >= 0; i--){
        
        snakeBody[i+1] = { ...snakeBody[i] };

    }

    // Aqui é aonde controlamos qual a direção que a cobra andara
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

}

export function draw(gameBoard){

    // Percorrendo o array para desenhar a cobra inicial
    snakeBody.forEach( segment => {

        // Criando uma div
        const snakeElement = document.createElement('div');

        // Dizendo em qual coluna a cobra vai ser desenhada (11)
        snakeElement.style.gridColumnStart = segment.x;

        // Dizendo em qual linha a cobra vai ser desenhada (11)
        snakeElement.style.gridRowStart = segment.y;

        // Adicionando a class snake que já estilizamos no css
        snakeElement.classList.add('snake');

        // Adicionando a div ( filho ) criada, dentro do elemento pai ( div gameBoard)
        gameBoard.appendChild(snakeElement);

    })

}

// Função que diz quanto a cobra vai crescer
export function expandSnake( expansionRate ){

    // Adiciona um segmento ( +1 quadrado ) na cobra, fazendo ela crescer de tamanho
    newSegments += expansionRate;

}

// Função que faz a cobra crescer
export function addSegments(){

    for(let i = 0; i < newSegments; i++){

        // Adicionando o segment sempre ao final da cobra, fazendo assim a cobra crescer
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
        
    }

    // Zeramos o newSegments, para ele não ficar em um loop infinito
    newSegments = 0;

}

// Função que diz se a cobra interceptou algo
export function onSnake( position, { ignoreHead = false } = {} ){

    // Retorna verdadeiro quando a cobra intercepta a comida
    return snakeBody.some(( segment, index ) => {

        // Se o ignoreHead for verdadeiro e o index for 0, iremos retornar e não ira acontecer nada
        if( ignoreHead && index === 0){
            
            return

        }
        // Se a posição da cobra for igual a posição da comida, nos dois eixos ( x, y )
        // isso significa que a cobra comeu ( interceptou ) a comida, sendo assim, isto retorna true.
        return position.x === segment.x && position.y === segment.y

    })

}

export function getSnakeHead(){

    // Retornando qual a cabeça da cobra
    return snakeBody[0];

}

export function snakeIntersection(){

    // Retorna true quando a cabeça da cobra bate em seu próprio corpo
    // para que de gameOver no jogo.
    return onSnake(getSnakeHead(), {
        ignoreHead: true
    })

}