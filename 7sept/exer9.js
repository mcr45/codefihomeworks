

/* 
Define two functions: one that modifies a global 
variable and another that tries to modify a local 
variable (which is not yet declared).
Inside the second function, declare and initialize the 
local variable after attempting to modify it.
 Observe how hoisting comes into play.
Now, make use of closures: Modify the first function
 so that it becomes a factory function returning another 
 function. This inner function should use the outer function's variables.
Reflect on how the local scope of the outer function is preserved for 
the inner function through closures, even after the outer function has finished execution. */


let globe='Mario'

function onTheGlobe(){
    globe='john'
    return function yes(){
        return globe + 'here'

    }
}

function justHere(){

// x='is just wrong'

 let x='can i do it?'
    return function no(){
        console.log(x)
    }
}
onTheGlobe()
justHere()

let sea=onTheGlobe()
sea()
let mount= justHere()
mount()



