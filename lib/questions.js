const DB = require('../db');

module.exports = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What do you want to name this new department?',
        when: ({task}) => task == 'add a department'
    },
    {
        type: 'input',
        name: 'first_name',
        message: 'What is their first name?',
        when: ({task}) => task == 'add an employee'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is their last name?',
        when: ({task}) => task == 'add an employee'
    },
    {
        type: 'input',
        name: 'first_name',
        message: 'What is their first name?',
        when: ({task}) => task == 'add an employee'
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'What is their role?',
        choices: DB.listRoles,
        when: ({task}) => task == 'add an employee'
    },
]