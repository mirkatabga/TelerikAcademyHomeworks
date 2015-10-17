/*Write a SQL query to find all employees and their address. 
  Use equijoins (conditions in the WHERE clause).*/
USE TelerikAcademy

SELECT e.FirstName, a.AddressText
FROM dbo.Employees as e, dbo.Addresses AS a
WHERE e.AddressID = a.AddressID