
// 1.First 20 numbers
var firstNumbers = 1;
    for (var i = 0; i <= 20; i++){
        console.log(i);
    }

//   first 20 odd numbers

var oddNumbers = 0;
    for (var i = 0; i  <= 20; i++){
        if (i % 2){
            console.log(i);
        }
    }

    // 2. Compute the sum of the elements of an array

    var list = [2, 3, 5, 7, 5, 3];
        sum = 0;
        for (i=0; i < list.length; i += 1) {
            sum = sum + list[i];
        }
        console.log("Sum: " + sum);

        // Compute the maximum of the elements of an array

        var list = [2, 3, 5, 7, 5, 3];
        var max = Math.max(...list);
        console.log(max);

        // Compute how many times a certain element appears 

        var list = [2, 3, 5, 7, 5, 3];  

    function countInArray(array, what) {
        var count = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] === what) {
                count++;
            }
        }
    return count;
}
console.log(countInArray(list, 2)) //returns 1
console.log(countInArray(list, 5)) //returns 2




   // 3. Write a program to print Fibonacci series of the first 50 terms
    const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

    //4.Write a program that prints the numbers from 1 to 100.
    for(var i=1;i<=100;i++){
        if((i%3 == 0) && (i%5==0))
            console.log("FizzBuzz" + " " + i);
        else if(i%3 == 0)
        console.log("Fizz" + " " + i);
        else if(i%5 == 0)
        console.log("Buzz" + " " + i);
        else {
        console.log(i); }
        }


