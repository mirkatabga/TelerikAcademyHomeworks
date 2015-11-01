/*Write a SQL query to find the top 5 best paid employees.*/
USE TelerikAcademy

SELECT TOP 5 *
FROM dbo.Employees
ORDER BY Salary DESC