describe('My First Test', () => {

    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
      })

    it('Reverse of an integer', () => {
       let number = 123456;
       let result = number.toString().split('').reverse().join('');
       cy.log("Reverse of a number: "+ result);
    })

    it('Armstrong number check', () => {
      let  number = prompt("Enter a number !"); // taking a number as an input, we will check whether this number is Armstrong or not?
      let n = number.length; // The number of digits in the 'number' will be stored in the variable 'n'
      let sum = 0; // we will store the sum of 'nth power of all the digits in the 'sum' variable
      let i=0;
      for(let i=0;i<n;i++)
      {
        let digit = number[i]-'0'; // extracting the i’th digit of 'number'
         sum = (sum + Math.pow(digit,n)); // adding the nth power of the digit to the variable 'sum'
      }
    //   while(i<n)
    //  {
    // let digit = number[i]-'0'; // extracting the i’th digit of 'number'
    // sum = (sum + Math.pow(digit,n)); // adding the nth power of the digit to the variable 'sum'
    // i++; // incrementing the index variable of the string
    //   }
     if(sum == number) // if sum is same as number, then it is an armstrong number
     {
    cy.log(number, "is an Armstrong Number");
     }
      else{
    cy.log(number, "is not an Armstrong Number");
    }

   })

   it('Prime number check',  () => {
    // take input from the user
    const number = parseInt(prompt("Enter a positive number: "));
    let isPrime = true;

    // check if number is equal to 1
     if (number === 1) {
    cy.log("1 is neither prime nor composite number.");
    }

     // check if number is greater than 1
     else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        cy.log(`${number} is a prime number`);
    } else {
        cy.log(`${number} is a not prime number`);
    }
      }
  })

      it('Fibonacci series check', () => {
        // program to generate fibonacci series up to n terms
       // take input from the user
      const number = parseInt(prompt('Enter the number of terms: '));
     let n1 = 0, n2 = 1, nextTerm;

     cy.log('Fibonacci Series:');

        for (let i = 1; i <= number; i++) {
         cy.log(n1);
         nextTerm = n1 + n2;
         n1 = n2;
         n2 = nextTerm;
        }
      })

})