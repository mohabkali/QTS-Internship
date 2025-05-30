function addNumbers(a:number, b:number):number{
    return a+b;
}

function concatStrings(a:string,b:string):string{
    return `${a}${b}`;
}

let numbers=[1,2,3];
function calculateAverage(array:number[]):number{
    let sum=0;
    for (let i=0; i<array.length;i++){
        sum+=array[i]
    }
    return sum/array.length;
}


function logMessage(message:string){
 console.log(`This function should have a void type`)
}

console.log(addNumbers(2,3));
console.log(concatStrings(`Hello`,`World`));
console.log(calculateAverage(numbers));
console.log(logMessage(`Hello`));

function createGreeting(name:string,title?:string):string{
    if (title === undefined){
        return `Hello ${name}!`
    }
    else {
        return `Hello ${title}${name} !`
    }
}

console.log(createGreeting(`Mohab`));
console.log(createGreeting(`Mohab`,`Mr.`))

function calculateOrderTotal(price:number,quantity:number = 1, discountCode?:string):number{
if(discountCode=`SAVE10`){
    return price*quantity*0.9;
}
else{
    return price*quantity;
}
}

function sumAllNumbers(num:number[]):number{
    let sum=0;
    for(let i=0; i<num.length;i++){
        sum+=num[i]
    }
    return sum
}

numbers=[1,2,3];
console.log(sumAllNumbers(numbers));