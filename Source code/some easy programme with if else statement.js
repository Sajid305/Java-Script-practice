
                 
                 
                            // even odd finding programm with if else statement

var number = 18;
var result;
var reminder = number % 2;


if (0 == reminder ){
    result = ('this number is even')
}else{
    result = ('this number is odd')
}
console.log(result)


                         // age finding programm with if else && || statement


var moviRating = 'parent-guide';
var age = 18;


if (moviRating=='parent-guide' && age>=12){
    console.log('you can watch this movie')
}else if (moviRating == 'rated' && age >= 18){
    console.log('you can watch this movie')
}else if (moviRating == 'general'){
    console.log('you can watch this movie')
}else{
    console.log('you can not watch this movie')
}


///making this code short

if ((moviRating=='parent-guide' && age>=12)||(moviRating == 'rated' && age >= 18)||(moviRating == 'general')){
    console.log('you can watch this movie')
}else{
    console.log('you can not watch this movie')
}


                                // Age and stage finding programme with if else and or statement



var age = 1;
var result;

if (age <= 1){

    result = 'baby'

}else if (age<=3){

    result = 'toddler'

}else if (age <12){

    result = 'kid'

}else if (age<18){

    result = 'teenage'

}else if(age >=18){

    result = 'adult'

}

console.log('you are a',result)








