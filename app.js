var prompt = require('sync-prompt').prompt
var chalk = require('chalk');

var weight = prompt('What is your weight? ');
var gender = prompt('Your Gender? M/F ');

weight = parseInt(weight);
var foods = [];
var total = 0;

var option = prompt('(f)ood or (q)uit ');
while(option != 'q'){
  var food = prompt ('Food you ate: ');
  var calories = prompt('How many calories was it? ');
  
  total += parseInt(calories);
  foods.push(food);
  option = prompt ('(f)ood or (q)uit ');
}

weight += gender === 'f' ? total/3000 : total /4000;
console.log('You have eaten: ' + chalk.cyan( foods) + '.You now have gained ' + chalk.red(weight.toFixed(1)) + ' lbs');
