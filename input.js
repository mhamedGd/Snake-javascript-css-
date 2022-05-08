let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}

window.addEventListener('keydown', e =>{
    switch(e.key){
        case 'ArrowUp':
            //Checking so the the snake can't go vertically in the opposite direction while it is moving vertically
            if(lastInputDirection.y !== 0) break
            inputDirection = {x:0, y:-1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x:0, y:1}
            break
        case 'ArrowLeft':
            //Checking so the the snake can't go horizontally in the opposite direction while it is moving horizontally
            if(lastInputDirection.x !== 0) break
            inputDirection = {x:-1, y:0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x:1, y:0}
            break
    }
})

export function GetInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}