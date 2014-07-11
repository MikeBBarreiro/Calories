var prompt = require('sync-prompt').prompt
var chalk = require('chalk');

var lbs= 0, food=[], Cal=[]; sumCals = 0; weigh = 0;

var gender
var weight = prompt('How much do you weigh? ');
  weight = parseInt(weight);
  gender = prompt('What is your gender? F/M? ');

var eat
var input

  while(input != 'q') {
   eat = prompt('What did you eat? or (q)uit? ');
  food.push(eat);
var calnum = prompt('How many calories? ');
  calnum = parseInt(calnum);
  Cal.push(calnum);
  input = prompt('Click any key to enter another food or (q)uit ')

  }


console.log('Devoured Foods: ' + chalk.blue( food));

var i
for( i = 0; i < Cal.length; i++) {
  sumCals += Cal[i]
}
console.log('You took in ' + chalk.red(sumCals) + ' calories');


var add
add = parseFloat(add)

if(gender === 'M' && sumCals >= 4000) {
   add =  sumCals/4000;
}else if(gender === 'F' && sumcals >= 3000){
 add = sumcals/3000
}



console.log('You have gained ' + chalk.blue(add.toFixed(10)) + ' pounds. Now you should weight ' + chalk.blue((weigh+add).toFixed(1)) )






