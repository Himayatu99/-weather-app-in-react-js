import styled from "styled-components"
const WeatherLogo = styled.img`
width:140px;
height:140px;
margin:40px auto;
`
const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:40px auto;
`
const SearchBox = styled.form
    `
display:flex;
flex-direction:row;
border:black soild 1px;
border-radius:2px;  
color:black;

margin:20px auto;

& input {
    padding: 10px;
    font-size: 14px;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    outline: none;
    padding: 0px 10px;
    color: white;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }

`;
const CityComponentInfo = ({ updateCity, fetchWeather }) => {
    return (
        <>
            <WeatherLogo src="/icon/perfect-day.svg" />
            <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="city " onChange={(e) => updateCity.e.target.value} />
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponentInfo;