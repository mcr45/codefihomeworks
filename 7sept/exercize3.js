


function openTheDoor(knock){
let key=true

return function closeIt(knock){

if(key){
    console.log(`${knock} is at the door entrance`)
}

}

}

openTheDoor('Mike')


function counter(){
    let count=0
    
    
    return function increase(){
        count++
        console.log(count)
    }
    }
