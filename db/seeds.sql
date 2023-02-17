USE employees_db;

INSERT INTO department (name)
VALUES
    ("Engineering"),
    ("Sales"),
    ("Accounting"),
    ("Production");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Engineer", 90000, 1),
    ("Sales Rep", 40000, 2),
    ("Accountant", 70000, 3),
    ("Foreman", 60000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES
    ("Jennifer", "Williams", null, 3),
    ("Bob", "Smith", 1, 4),
    ("Mark", "Martinez", 1, 1),
    ("John", "Doe", 1, 2);