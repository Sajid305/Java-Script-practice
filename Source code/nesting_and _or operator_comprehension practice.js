

                    // Nesting-----Comprehension-----and-or operator practic


            

var personOne = 'Shajid';
var personTwo = 'Rayhan';
var aretheyBrother = false;

/*if (personOne=='Shajid'){
    if(personTwo=='Rayhan'){
        if(aretheyBrother){
            console.log('Shajid and Rayhan are brother')
        }else{
            console.log('No they are not brother')
        }
    }
}
*/ //trying to make it short with comprehension and & operator

if ('Shajid'==personOne && 'Rayhan'==personTwo && aretheyBrother){
    console.log('Yes thae are')
}else{
    console.log('No they are not')
}

/// finding prime number from 2,3,5,7 with using or (||) operator

var n = 10;
if (n<10){
    if(2==n || 3==n || 5==n || 7==n){
        console.log('this number ',n,' is smaller then 10 and it is a prime number')
    }else{
        console.log('this number ',n, ' is smaller then 10 and it is not a prime number')
    }
}else{
    console.log('this number',n,'is grater then 10 and it is a prime number')
}