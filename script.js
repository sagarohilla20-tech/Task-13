const numbers =[2,5,6,8,9];

function checkOddEven(numbers) {
    const result = numbers % 2;
    
    if (result === 0) {
        console.log("The given number", numbers, "is Even.");
    } else {
        console.log("The given number", numbers, "is Odd.");
    }
}

checkOddEven(numbers[0]);  
checkOddEven(numbers[1]);  
checkOddEven(numbers[2]);  
checkOddEven(numbers[3]);  
checkOddEven(numbers[4]);