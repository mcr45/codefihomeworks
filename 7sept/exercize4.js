


// Declare a global variable here
let allTheGlobe='mr305'
function modifyGlobal() {
allTheGlobe='Not anymore'
console.log(allTheGlobe)
    // Try to modify the global variable here
}

function localScopeTest() {
    let allTheGlobe="actually no"
 console.log(allTheGlobe)
    // Declare a local variable with the same name as the global variable
}

modifyGlobal()
localScopeTest()
// Call both functions here
