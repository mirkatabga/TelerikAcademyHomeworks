/*Write a SQL query to find all employees along with their address. 
  Use inner join with ON clause.*/

USE TelerikAcademy

SELECT e.FirstName, a.AddressText
FROM Employees AS e INNER JOIN Addresses AS a
ON e.AddressID = a.AddressID