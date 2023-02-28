const DB = require('../db');

module.exports = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'delete a record']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What do you want to name this new department?',
        when: ({task}) => task == 'add a department'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this new role?',
        when: ({task}) => task == 'add a role'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of this new role?',
        when: ({task}) => task == 'add a role'
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'What department does this new role belong to?',
        // choices: [1, 2, 3],
        choices: DB.listDepartments,
        when: ({task}) => task == 'add a role'
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
        type: 'list',
        name: 'id',
        message: 'What employee do you want to change the role for?',
        choices: DB.listEmployees,
        when: ({task}) => task == 'update an employee role'
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'What is their role?',
        choices: DB.listRoles,
        when: ({task}) => task == 'add an employee' || task == 'update an employee role'
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Who is their manager?',
        choices: DB.listEmployees,
        when: ({task}) => task == 'add an employee' || task == 'update an employee role'
    },
    {
        type: 'input',
        name: 'record_id',
        message: 'What is the id of the record that you what to delete?',
        when: ({task}) => task == 'delete a record'
    },
    {
        type: 'list',
        name: 'location',
        message: 'Which table do you want to delete the record from?',
        choices: ['department', 'role', 'employee'],
        when: ({task}) => task == 'delete a record'
    },
]
