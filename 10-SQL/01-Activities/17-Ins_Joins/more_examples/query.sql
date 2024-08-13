SELECT *
FROM authors
LEFT JOIN books 
ON books.author_id = authors.id;

SELECT *
FROM authors
RIGHT JOIN books 
ON books.author_id = authors.id;

SELECT * FROM authors 
INNER JOIN books 
ON books.author_id = authors.id;

SELECT * FROM authors 
FULL JOIN books 
ON books.author_id = authors.id;