-- Your solution here
select capital from countries where country like 'E%' and continent in ('Africa', 'Afrika') ORDER BY capital ASC limit 3