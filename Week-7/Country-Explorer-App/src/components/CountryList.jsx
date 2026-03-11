import CountryCard from "./CountryCard"

function CountryList({countries,view}) {

  if(view === "table"){
    return(

      <table border="1">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Region</th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country,index)=>(
            <tr key={index}>
              <td>
                <img src={country.flags.png} width="40"/>
              </td>

              <td>{country.name.common}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>

    )
  }

  return(

    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
      gap:"20px"
    }}>

      {countries.map((country,index)=>(
        <CountryCard key={index} country={country}/>
      ))}

    </div>

  )
}

export default CountryList
