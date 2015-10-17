## Structured Query Language (SQL)
### _Homework_

1.	What is SQL? What is DML? What is DDL? Recite the most important SQL commands.
1.	What is Transact-SQL (T-SQL)?
1.	Start SQL Management Studio and connect to the database TelerikAcademy. Examine the major tables in the "TelerikAcademy" database.
1.	Write a SQL query to find all information about all departments (use "TelerikAcademy" database).
1.	Write a SQL query to find all department names.
1.	Write a SQL query to find the salary of each employee.
1.	Write a SQL to find the full name of each employee.
1.	Write a SQL query to find the email addresses of each employee (by his first and last name). Consider that the mail domain is telerik.com. Emails should look like “John.Doe@telerik.com". The produced column should be named "Full Email Addresses".
1.	Write a SQL query to find all different employee salaries.
1.	Write a SQL query to find all information about the employees whose job title is “Sales Representative“.
1.	Write a SQL query to find the names of all employees whose first name starts with "SA".
1.	Write a SQL query to find the names of all employees whose last name contains "ei".
1.	Write a SQL query to find the salary of all employees whose salary is in the range [20000…30000].
1.	Write a SQL query to find the names of all employees whose salary is 25000, 14000, 12500 or 23600.
1.	Write a SQL query to find all employees that do not have manager.
1.	Write a SQL query to find all employees that have salary more than 50000. Order them in decreasing order by salary.
1.	Write a SQL query to find the top 5 best paid employees.
1.	Write a SQL query to find all employees along with their address. Use inner join with `ON` clause.
1.	Write a SQL query to find all employees and their address. Use equijoins (conditions in the `WHERE` clause).
1.	Write a SQL query to find all employees along with their manager.
1.	Write a SQL query to find all employees, along with their manager and their address. Join the 3 tables: `Employees e`, `Employees m` and `Addresses a`.
1.	Write a SQL query to find all departments and all town names as a single list. Use `UNION`.
1.	Write a SQL query to find all the employees and the manager for each of them along with the employees that do not have manager. Use right outer join. Rewrite the query to use left outer join.
1.	Write a SQL query to find the names of all employees from the departments "Sales" and "Finance" whose hire year is between 1995 and 2005.

# SQL Homework

### 1. What is SQL? What is DML? What is DDL? Recite the most important SQL commands.
SQL(Structured Query Language) is tool for making CRUD and definitional operations over a database.

DML is a family of syntax elements similar to a computer programming language used for selecting, inserting, deleting and updating data in a database. Performing read-only queries of data is sometimes also considered a component of DML.

DDL is data definition language or data description language (DDL) is a syntax similar to a computer programming language for defining data structures, especially database schemas.

### 2. What is Transact-SQL (T-SQL)?
T-SQL expands on the SQL standard to include procedural programming, local variables, various support functions for string processing, date processing, mathematics, etc. and changes to the DELETE and UPDATE statements. These additional features make Transact-SQL. T-SQL is central for using MSSQL database.
