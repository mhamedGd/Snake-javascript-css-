import{RandomGridPosition} from "./grid.js"
import{OnSnake, ExpandSnake} from "./snake.js"

//Setting the position of the food randomly on start
let food = GetRandomFoodPosition()

const EXPANSION_RATE = 1

let score = 0
const SCORE_WORTH = 10

export function GetScore(){
    return score
}

export function update(){
    //When the snake eats the food
    if(OnSnake(food)){
        ExpandSnake(EXPANSION_RATE)
        UpdatingScore()
        food = GetRandomFoodPosition()
    }
}

function UpdatingScore(){
    score += SCORE_WORTH
    document.getElementById("score").textContent = score.toString()
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')    
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function GetRandomFoodPosition(){
    let newFoodPosition
    
    //Until the position is valid in the grid and is not on the snake, It will keep randmoizing the food position
    while(newFoodPosition == null || OnSnake(newFoodPosition)){
        newFoodPosition = RandomGridPosition()
    }
    
    return newFoodPosition
}