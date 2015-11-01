/*Write a SQL query to find all the employees and the manager for each of 
  them along with the employees that do not have manager. 
  Use right outer join.*/

USE TelerikAcademy

SELECT e.EmployeeID, e.FirstName + ' ' + e.LastName AS 'Employee Full Name', e.ManagerID AS 'Employee Manager ID',
	   m.EmployeeID AS 'Manager ID', m.FirstName + ' ' + m.LastName AS 'Manager Full Name'
FROM dbo.Employees AS m RIGHT OUTER JOIN dbo.Employees AS e
ON m.EmployeeID = e.ManagerID
ORDER BY e.FirstName, e.LastName