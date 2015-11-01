/*Write a SQL query to find all employees along with their manager.*/

USE TelerikAcademy

SELECT e.EmployeeID, e.FirstName AS EmpName, m.EmployeeID, m.FirstName AS MngName
FROM dbo.Employees e INNER JOIN dbo.Employees m
ON e.ManagerID = m.EmployeeID
ORDER BY e.FirstName ASC