import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useWeather } from "./context/Weather";
import "./App.css";
import { useEffect } from "react";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);

  const refresh = () => {
    window.location.reload(true);
  };

  return (
    <div className="App">
      <h2>Weather Forecast</h2>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button onClick={refresh} value="Refresh" />
    </div>
  );
}
export default App;
