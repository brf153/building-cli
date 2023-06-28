const program = require("commander")
const check = require("../commands/check")
const inquirer = require("inquirer")

program
.command('price')
.description('Check price of coins')
.options('--coin <type>', "Add specific coin types in CSV format", 'BTC,ETH,XRP')
.options('--cur <currency>', 'Change the currency', 'USD')
.action((cmd)=> check.price(cmd))

program.parse(process.argv)