const countryData = [];
fetch("data.json")
  .then((response) => response.json())
  .then((countries) =>
    countries.forEach((country) => countryData.push(country))
  )
  .catch((error) => console.error(error));
