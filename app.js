
var validator = require('validator')
var chalk = require('chalk')

var name = process.argv[2]
var username = process.argv[3]
var password = process.argv[4]
var mobile = process.argv[5]

if(validator.isAlpha(name)){
    console.log(chalk.green.inverse("Valid name"))
}else{
    console.log(chalk.red.inverse("InValid name"))
}

if(validator.isEmail(username)){
    console.log(chalk.green.inverse("Valid id"))
}else{
    console.log(chalk.red.inverse("InValid id"))
}

if(validator.isStrongPassword(password)){
    console.log(chalk.green.inverse("Valid password"))
}else{
    console.log(chalk.red.inverse("InValid password"))
}


if(validator.isMobilePhone(mobile)){
    console.log(chalk.green.inverse("Valid mobile no."))
}else{
    console.log(chalk.red.inverse("InValid mobile no."))
}









