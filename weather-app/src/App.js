import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponentInfo from "./components/CityComponentInfo"
import WeatherComponentInfo from "./components/WeatherComponentInfo"

const API_key = "4ba09b71ab4e3ac4d1eec80cc63e8d8c";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 380px;
padding: 20px 10px;
margin: auto;
border-radius: 4px;
box-shadow: 0 3px 6px 0 #555;
background: white;
font-family: Montserrat;
`
const HeadingText = styled.div`
color:black;
font-size:18;
font-weight: bold;
`

const CityComponent = styled.div`
display:flex;
flex-direction:column;
`
const WeatherComponent = styled.div`
display:flex;
flex-direction:column;
`
function App() {
  const [city, updateCity] = useState();
  const [Weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await
      Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
    updateWeather(response.data);
  }
  return (
    <Container>
      <HeadingText>React Weather App</HeadingText>
      {Weather ? (
        <WeatherComponentInfo Weather={Weather} />)
        : (
          <CityComponentInfo updateCity={updateCity} fetchWeather={fetchWeather} />

        )}
    </Container>

  );
}

export default App;
