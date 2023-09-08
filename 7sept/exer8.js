
/* 
Create a function that initializes a counter variable.
 This function should return another function.
The returned function, when invoked, should increment
 the counter and print its value. However, if the counter 
 reaches a certain value (e.g., 10), it should reset itself.
Notice how hoisting affects the behavior when you try to declare 
and initialize the counter after referencing it.
Comment on the role of closure in maintaining the counter's 
state across multiple invocations of the returned function.
 */


function counter(){
    /* console.log(x) */
    let x=0
    return function(){
        if(x>9){
            x=0
            console.log(x)
        }
        else{
        x=x+1
        console.log(x)}
    }
}
