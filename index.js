const { prompt } = require('inquirer');
const { questions } = require('./lib');
const DB = require('./db');

const init = () => {
    prompt(questions).then(ans => {
        let { task } = ans;
        if(task == 'view all departments') DB.showDepartment().then(init);
        if(task == 'add a department') DB.addDepartment(ans).then(init);
        if(task == 'add an employee') DB.addEmployee(ans).then(init);
    });
};

init();