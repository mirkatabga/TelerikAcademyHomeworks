/*Write a SQL query to find the names of all employees 
 from the departments "Sales" and "Finance" whose hire year is 
 between 1995 and 2005*/

USE TelerikAcademy

SELECT e.FirstName + ' ' + e.LastName AS 'Name', d.Name AS 'Department', e.HireDate AS 'Hire Date'
FROM dbo.Employees AS e INNER JOIN dbo.Departments as d
ON e.DepartmentID = d.DepartmentID
WHERE d.Name IN('Sales','Finance') AND YEAR(e.HireDate) BETWEEN 1995 AND 2005