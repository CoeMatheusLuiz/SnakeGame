// Importando as funções
import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

// Inserindo na variavel food, uma posição aleatoria.
let food = getRandomFoodPosition();

// Variavel que diz quanto de tamanho a cobra vai crescer.
const expansionRate = 1;

export function update(){
    
    // Se a snake estive na mesma direção de food.
    if( onSnake(food) ){

        // Chamando a função de expandir a cobra, e passando quanto ela vai crescer
        // atraves da variavel expansionRate.
        expandSnake(expansionRate);

        // Colocando a food em um novo lugar aleatório.
        food = getRandomFoodPosition();

    }

}

export function draw(gameBoard){


    // Criando uma div
    const foodElement = document.createElement('div');

    // Dizendo em qual coluna a comida vai ser desenhada (11).
    foodElement.style.gridColumnStart = food.x;

    // Dizendo em qual linha a comida vai ser desenhada (11).
    foodElement.style.gridRowStart = food.y;

    // Adicionando a class food que já estilizamos no css.
    foodElement.classList.add('food');

    // Adicionando a div ( filho ) criada, dentro do elemento pai ( div gameBoard).
    gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition(){

    // Variavel auxiliar
    let newFoodPosition;

    // Enquanto a food for nula, ou aparece na mesma posição da snake.
    while ( newFoodPosition == null || onSnake(newFoodPosition) ){

        // Inserindo uma posição aleatória inserida atraves da função randomGridPosition.
        newFoodPosition = randomGridPosition();

    }

    // retornando a nova posição da food.
    return newFoodPosition;

}