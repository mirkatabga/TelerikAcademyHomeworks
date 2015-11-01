/*Write a SQL query to find all employees, along with their manager and their address. 
  Join the 3 tables: Employees e, Employees m and Addresses a.*/

USE TelerikAcademy

SELECT e.EmployeeID AS 'Employee ID', e.FirstName + ' ' + e.LastName AS 'Employee Name',
	   e.AddressID AS 'Employee Address ID',a.AddressID AS 'Address ID', a.AddressText AS 'Address', 
	   m.EmployeeID AS 'Manager ID', m.FirstName + ' ' + m.LastName AS 'Manager Name'
FROM dbo.Employees AS e INNER JOIN dbo.Employees AS m
ON e.ManagerID = m.EmployeeID
INNER JOIN dbo.Addresses AS a
ON e.AddressID = a.AddressID 