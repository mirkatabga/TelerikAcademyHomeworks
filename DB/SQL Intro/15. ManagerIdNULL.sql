/*Write a SQL query to find all employees that do not have manager.*/

USE TelerikAcademy

SELECT *
FROM dbo.Employees
WHERE ManagerID IS NULL