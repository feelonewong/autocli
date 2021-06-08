const program = require('commander');

//增加自己的options
const helpOptions = ()=>{
    program.option('-a --autocli', 'a auto build cli');
    program.option('-d --dest <dest>', 'a destionation folder, Example: -d /src/components')
    program.option('-f --framwork <framework>', 'your framework');
}

program.on('--help', function(){
    console.log("");
    console.log("Other:");
    console.log(" Other options!");
})

module.exports = {
    helpOptions
}