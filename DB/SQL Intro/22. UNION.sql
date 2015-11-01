/*Write a SQL query to find all departments and all town 
  names as a single list. Use UNION.*/

USE TelerikAcademy

SELECT Name AS NAME
FROM dbo.Departments
UNION
SELECT Name AS NAME
FROM dbo.Towns