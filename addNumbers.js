const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){

    if (numsLeft > 0){
        reader.question("Please enter any number: ", function(answer){
            const num = parseInt(answer);
            sum += num;
            console.log("partial sum:" + sum);

            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    }else{
        completionCallback(sum);
    }


}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));