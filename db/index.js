const connection = require('./connection');
const cTable = require('console.table');

class DB {
    constructor(connection){
        this.connection = connection;
    };

    showDepartment() {
        return this.connection.promise().query(
            "SELECT * FROM department"
        ).then(([data]) => console.table(data))
    };

    listDepartments = () => 
        this.connection.promise().query(
            `SELECT id AS value, name FROM department`
        ).then(([data]) => data);

    addDepartment({name}) {
        return this.connection.promise().query(
            "INSERT INTO department SET ?", {name}
        );
    };

    showRoles() {
        return this.connection.promise().query(
            `SELECT 
                r.id,
                r.title,
                d.name AS department,
                r.salary
            FROM role AS r
            JOIN department AS d
            ON r.department_id = d.id;`
        ).then(([data]) => console.table(data))
    };

    listRoles = () =>
        this.connection.promise().query(
            'SELECT id AS value, title AS name FROM role'
        ).then(([data]) => data);

    addRole({title, salary, department_id}) {
        return this.connection.promise().query(
            "INSERT INTO role SET ?", {title, salary, department_id}
        );
    };

    showEmployees() {
        return this.connection.promise().query(
            `SELECT 
                e1.id,
                e1.first_name,
                e1.last_name,
                r.title AS title,
                d.name AS department,
                r.salary AS salary,
                concat(e2.first_name, " ", e2.last_name) AS manager
            FROM employee AS e1
            JOIN role AS r
            ON e1.role_id = r.id
            JOIN department AS d
            ON r.department_id = d.id
            JOIN employee AS e2
            ON e1.manager_id = e2.id;`
        ).then(([data]) => console.table(data))
    };

    listEmployees = () =>
        this.connection.promise().query(
            'SELECT id AS value, concat(first_name, " ", last_name) AS name FROM employee'
        ).then(([data]) => data);

    addEmployee({first_name, last_name, role_id, manager_id}) {
        return this.connection.promise().query(
            'INSERT INTO employee SET ?', {first_name, last_name, role_id, manager_id}
        );
    };

    updateEmployee = ({id, role_id, manager_id}) =>
        this.connection.promise().query(
            'UPDATE employee SET ? WHERE ?', [{role_id, manager_id}, {id}]
        );

    removeRecord = ({location, record_id}) =>
        this.connection.promise().query(
            `DELETE FROM ${location} WHERE id = ?`, [record_id]
        );
};


module.exports = new DB(connection);