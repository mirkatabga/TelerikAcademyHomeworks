/*Write a SQL to find the full name of each employee.*/

USE TelerikAcademy

SELECT FirstName + ' ' + MiddleName + ' ' + LastName as FullName
FROM dbo.Employees
WHERE MiddleName IS NOT NULL