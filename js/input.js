// Variavel que auxila a dizer a direção da cobra.
let inputDirection = { x: 0, y: 0};

// Variavel que auxilia a checar qual a ultima direção da cobra.
let lastInputDirection = { x: 0, y: 0};

// Função que dirá qual input/direção devemos usar.
export function getInputDirection(){

    // Igualando a ultima direção, a nova direção.
    lastInputDirection = inputDirection;

    // Retornando o inputDirection, para nos ajudar a saber qual direção a cobra deve ir no game
    return inputDirection;

}

// O evento keydown é disparado para teclas que produzem e que não produzem um caractere.
addEventListener('keydown', e => {
    
    // Switch case, que irá agir de acordo com disparar das teclas setas do teclado.
    switch(e.key){

        // Seta para cima
        case "ArrowUp":

            // Este If tem o papel de bloquear a direção da cobra em sentido contrario.
            // Ou seja, se ela estiver andando para cima, não pode simplesmente voltar para tras.
            if(lastInputDirection.y !== 0){ break; }
                inputDirection = { x: 0, y: -1};
                break;

        // Seta para baixo
        case "ArrowDown":

            // Este If tem o papel de bloquear a direção da cobra em sentido contrario.
            // Ou seja, se ela estiver andando para cima, não pode simplesmente voltar para tras.
            if(lastInputDirection.y !== 0){ break; }
                inputDirection = { x: 0, y: 1};
                break;

        // Seta para esquerda
        case "ArrowLeft":
            
            // Este If tem o papel de bloquear a direção da cobra em sentido contrario.
            // Ou seja, se ela estiver andando para cima, não pode simplesmente voltar para tras.
            if(lastInputDirection.x !== 0){ break; }
                inputDirection = { x: -1, y: 0};
                break;

        // Seta para direita
            case "ArrowRight":
            
            // Este If tem o papel de bloquear a direção da cobra em sentido contrario.
            // Ou seja, se ela estiver andando para cima, não pode simplesmente voltar para tras.
            if(lastInputDirection.x !== 0){ break; }
                inputDirection = { x: 1, y: 0};
                break;

    }

})