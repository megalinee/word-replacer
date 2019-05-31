var inquirer = require('inquirer')
var chalk = require("chalk")
var output;

var question = [
    {
    type: 'list',
    name: 'sta',
    message: 'Do you want to replace the exact word? If not this may mess up words that start with the word you want to replace, as well as periods and commas.',
    choices: ['Yes', 'No']
    },
    {
      type: 'input',
      name: 'fsent',
      message: 'What\'s the full sentence?'
    },
    {
      type: 'input',
      name: 'org',
      message: 'What\'s the original word?'
    },
    {
      type: 'input',
      name: 'new',
      message: 'What\'s the new word?'
    }
  ]
inquirer.prompt(question).then(answers => {
        const bruh = answers['fsent'].split(" ")
    var counts = {}
    const outpu = async() =>{
    for(let bru of bruh){
        if(answers.sta === "No"){
        if(bru.startsWith(answers.org)){
            var index = bruh.indexOf(bru)
    bruh[index] = answers.new
            output = bruh.join(" ")
        }
        }else {
        if(bru === answers.org){
            var index = bruh.indexOf(bru)
    bruh[index] = answers.new
            output = bruh.join(" ")
        }
        }
    }
            if(!output){
        console.log(chalk.red.bold("Original word not found"))
    } else {
        console.log(chalk.cyan.bold(output))
    }
}
    outpu()
  });