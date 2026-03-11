function CountryCard({ country }) {

  return (
    <div style={{
      border:"1px solid gray",
      padding:"10px",
      borderRadius:"8px"
    }}>

      <img
        src={country.flags.png}
        alt="flag"
        width="100%"
      />

      <h3>{country.name.common}</h3>

      <p>Capital: {country.capital}</p>

      <p>Population: {country.population}</p>

      <p>Region: {country.region}</p>

    </div>
  )
}

export default CountryCard
