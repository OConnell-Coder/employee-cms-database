const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    };

    showDepartment() {
        return this.connection.promise().query(
            "SELECT * FROM department"
        )
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
        )
    };

    showEmployees() {
        return this.connection.promise().query(
            `SELECT 
                e1.id,
                e1.first_name,
                e1.last_name,
                e1.title,
                d.name AS department,
                d.salary,
                concat(e2.first_name, " ", e2.last_name) AS manager
            FROM employee AS e1
            JOIN department AS d
            ON e1.department_id = d.id,
            JOIN employee AS e2
            ON e1.manager_id = e2.id;`
        )
    };
};


