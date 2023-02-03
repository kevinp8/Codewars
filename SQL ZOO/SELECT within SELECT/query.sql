--List each country name where the population is larger than that of 'Russia'. 
SELECT name
FROM world
WHERE population > (
	SELECT population
	FROM world
    WHERE name='Russia'
	)

--Show the countries in Europe with a per capita GDP greater than 'United Kingdom'.
select name
from world
where continent='Europe' and gdp/population > (
	SELECT gdp/population
	FROM world
    WHERE name='United Kingdom'
	)
	
--List the name and continent of countries in the continents containing either Argentina or Australia. Order by name of the country.
select name, continent
from world
where continent in ('South America', 'Oceania')

--Which country has a population that is more than United Kingom but less than Germany? Show the name and the population.
select name, population
from world
where population between (select population+1 from world where name='United Kingdom') and (select population-1 from world where name='Germany') 

--Show the name and the population of each country in Europe. Show the population as a percentage of the population of Germany.
SELECT name, CONCAT(CAST(ROUND(100*population/(SELECT population FROM world
WHERE name = 'Germany'),0) AS INT), '%')percetage
FROM world
WHERE continent = 'Europe'