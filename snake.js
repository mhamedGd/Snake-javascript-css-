import {GetInputDirection} from "./input.js"
import {outsideGrid} from './grid.js'

export const SNAKE_SPEED = 5

//Snake start point
const snakeBody = [
    {x: 11, y:11}
]

let newSegments = 0

export function update(){
    //Checks if there are new segments to add before moving them
    addSegments()
    
    const inputDirection = GetInputDirection()
    //Looping through all segments except the head
    for(let i = snakeBody.length - 2; i >= 0; i--){
        //Moving the last segment towards the previous and so on...
        snakeBody[i + 1] = { ...snakeBody[i] }
    }   
    
    //Moving only the head along the inputs
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y   
    
    //Checking if the head-segment is outside the grid to loop it
    outsideGrid(snakeBody[0]);
}

export function draw(gameBoard){
    snakeBody.forEach((segment, index) => {
        const snakeElement = document.createElement('div')
        
        //Assigning the each segment in the draw call to its actual position
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        
        //In the styling section you can assign a different color to the snake-head
        if(index === 0) snakeElement.classList.add('snake-head')
        else snakeElement.classList.add('snake')
        
        gameBoard.appendChild(snakeElement)
    })
}

export function ExpandSnake(amout){
    newSegments += amout
}

function addSegments(){
    //Adding the segment at the end of the snake body
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length -1]})
    }
    
    newSegments = 0
}

//Returns true if the snake reaches 'position'
export function OnSnake(postion, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, postion)
    })
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

export function GetSnakeHead(){
    return snakeBody[0]
}

//Checking if the body is intersecting with the head, ignoreHead is true so that the head wouldn't intersect with itself
export function snakeIntersection(){
    return OnSnake(snakeBody[0], {ignoreHead: true})
}