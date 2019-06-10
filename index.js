// Fancy cli
var inquirer = require('inquirer')

// Command line colorer
var chalk = require("chalk")

// The output
var output;

// To copy and paste the output from an external file
var fs = require("fs")

// inquirer's questions
var question = [
    {
    type: 'list',
    name: 'sta',
    message: 'Do you want to replace the exact word? \nIf not this may mess up words that start with the word you want to replace.',
    choices: ['Yes', 'No']
    },
    {
    type: 'list',
    name: 'Aa',
    message: 'Do you want to it to be case sensitive?',
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

// inquirer's prompt
inquirer.prompt(question).then(answers => {
    var org = answers.org
    if(answers.Aa === "No"){
        org = answers.org.toLowerCase()
    }
        const bruh = answers['fsent'].split(" ")
    var counts = {}
    const outpu = async() =>{
    for(let bruhh of bruh){
        var bru;
    if(answers.Aa === "No"){
        bru = bruhh.toLowerCase()
    } else {
        bru = bruhh
    }
        if(answers.sta === "No"){
        if(bru.startsWith(org)){
            if(bru.length === org.length){
            var index = bruh.indexOf(bruhh)
            bruh[index] = answers.new
            output = bruh.join(" ")
            } else {
                var sub = bru.substr(org.length)
                var index = bruh.indexOf(bruhh)
                bruh[index] = answers.new + sub
                output = bruh.join(" ")
            }
        }
        }else {
        if(bru === org){
            var index = bruh.indexOf(bruhh)
    bruh[index] = answers.new
            output = bruh.join(" ")
        }
        }
    }
            if(!output){
        console.log(chalk.red.bold("Original word not found"))
    } else {
      fs.writeFile(__dirname + '/output.txt', output, (err) => {
        console.log(chalk.cyan.bold(output))
        console.log(chalk.red.blue('You can also find the output in the \'output.txt\' file for easier copy + pasting.'))
        if (err) throw err;
      });
    }
}

// excecution of inquirer prompt and full code
    outpu()
  });
