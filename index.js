// function printThis(callback){
//     callback();
// }

// const receivesAFunction = (callback) => callback();


function receivesAFunction (cb){
    console.log(cb());
}

receivesAFunction(function (){return "I love functions"});

function returnsANamedFunction(){
    function namedFunction(){
        console.log("This is a named function!");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return (function() {
        console.log("ThisIsANamedFunction");
    })
}
returnsANamedFunction("");
returnsAnAnonymousFunction("");