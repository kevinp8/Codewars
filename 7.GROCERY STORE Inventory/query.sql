-- select all of the items
select id,name,stock from products where stock < 3 and producent='CompanyA' order by id desc