const GRID_SIZE = 21

export function RandomGridPosition(){
    return{
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

//Looping through the gameBoard if out of bounds
export function outsideGrid(position){    
    if     (position.x < 1)         position.x = GRID_SIZE
    else if(position.x > GRID_SIZE) position.x = 1
    else if(position.y < 1)         position.y = GRID_SIZE
    else if(position.y > GRID_SIZE) position.y = 1
}