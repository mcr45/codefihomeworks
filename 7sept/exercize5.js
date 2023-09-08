


function functionFactory(param) {
    // Return a function that makes use of 'param'

    return function miao(){
        return param++
    }
    
}

// Create an instance of the inner function by invoking functionFactory with a parameter


let x=functionFactory(0)
