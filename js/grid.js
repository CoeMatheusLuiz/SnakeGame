// Variavel com o tamanho da grid
const gridSize = 21;

// Função que irá retornar números randomicos, para desenhar a comida em uma posição aleatoria.
export function randomGridPosition(){

    return {
        x: Math.floor(Math.random() * gridSize ) + 1,
        y: Math.floor(Math.random() * gridSize ) + 1
    }

}

// Função que diz se a cobra saiu da grid ou não.
export function outsideGrid( position ){

    return position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize

}