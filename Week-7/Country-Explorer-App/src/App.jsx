import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  //states
  const [countries, setCountries] = useState([]);//to store country
  const [query, setQuery] = useState("");   //when user types in searchbar
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [view, setView] = useState("grid"); // grid or table

  // fetch countries when page loads
  useEffect(() => {

    const fetchCountries = async () => {
      try {

        setLoading(true);

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        const data = await res.json();

        setCountries(data);
        setLoading(false);

      } catch (err) {

        setError("Failed to fetch countries");
        setLoading(false);

      }
    };

    fetchCountries();

  }, []);

  // filter countries based on search
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <h2>Loading countries...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>

      <h1>Country Explorer</h1>

      <SearchBar onSearch={setQuery} />

      <div style={{ margin: "15px" }}>
        <button onClick={() => setView("grid")} style={{ marginRight: "10px" }}>
          Grid View
        </button>

        <button onClick={() => setView("table")}>
          Table View
        </button>
      </div>

      <CountryList countries={filteredCountries} view={view} />

    </div>
  );
}

export default App;
