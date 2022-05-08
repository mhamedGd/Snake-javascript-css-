import {update as updateSnake, draw as drawSnake, GetSnakeHead, snakeIntersection, SNAKE_SPEED} from "./snake.js"
import {update as updateFood, draw as drawFood, GetScore} from "./food.js"


let lastRenderTime = 0
let gameOver = false

const gameBoard = document.getElementById('game-board')

//requestAnimationFrame takes a callback that has a float parameter to assign the milliseconds it took the finish the frame to
function main(currentTime) {   
    
    if(gameOver){
        if(confirm('You Lost, Try Again?')){
            window.location = '/'
        }
        return
    }
    
    //Calling it second inside the function it's calling to create a loop---------(2)
    window.requestAnimationFrame(main)
    
    //Calculating the Delta Time between the previous and the current frame in seconds
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000    
    
    //Setting the frame refreshing rate
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime
    
    update()
    draw()
}

//Calling the logic of the drawing before the browser repaints the window
//Calling it first---------(1)
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    CheckDeath()
}

function draw(){
    //Clears the gameBoard element to redraw into it
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function CheckDeath(){
    gameOver = snakeIntersection()
}