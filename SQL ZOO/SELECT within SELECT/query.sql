--Show the countries in Europe with a per capita GDP greater than 'United Kingdom'.
select name from world
where continent='Europe' and gdp/population>(SELECT gdp/population FROM world
      WHERE name='United Kingdom'