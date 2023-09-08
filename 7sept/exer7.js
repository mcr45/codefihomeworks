


function setupCounter() {
    // Define a count variable here
    let count=0

    return function() {
        // Increment and print the count
        return ++count 
    }
}

// Create a counter instance and invoke it to test

let itbe=setupCounter()

itbe()