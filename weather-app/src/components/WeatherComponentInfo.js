import styled from "styled-components"

const WeatherInfoIcon = {
  sunset: "/icon/temp.svg",
  sunrise: "/icon/temp.svg",
  Humidity: "/icon/humidity.svg",
  wind: "/icon/wind.svg",
  pressure: "/icon/pressure.svg"
}

const WeatherCondition = styled.div`
display:flex;
flex-direction:row;
align-items:center;
weight:100%;
justify-content:space-between;
`
const Condition = styled.span`
    margin: 30px auto;
    text-transform: capitalize;
    font-size: 14px;
     & span {
    font-size: 20px;
  }
`;
const WeatherLogo = styled.img`
width:100px;
height:100px;
margin:5px auto;
`
const Location = styled.span`
font-size:28px;
font-weight:bold;
`

const WeatherLable = styled.span`
margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;

`;

const WeatherContainer = styled.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherContainerInfo = ({ name, value }) => {

  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcon[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  )
}

const WeatherComponentInfo = ({ Weather }) => {
  const isDay = Weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <>
      <WeatherCondition>
        <Condition><span>{`${Math.floor(Weather?.main?.temp - 273)}°C`}</span>{`| ${Weather?.weather[0].description}`}</Condition>
        < WeatherLogo src="/icon/perfect-day.svg" />
      </WeatherCondition>
      <Location>{`${Weather?.name},${Weather?.sys?.counter}`}</Location>
      <WeatherLable>Weather Info</WeatherLable>
      <WeatherContainer>
        <WeatherContainerInfo name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(Weather?.sys[isDay ? "sunset" : "sunrise"])}`} />
        <WeatherContainerInfo name="Humidity" value={Weather?.main?.humidity} />
        <WeatherContainerInfo name="wind" value={Weather?.wind?.speed} />
        <WeatherContainerInfo name={"pressure"} value={Weather?.main?.pressure} />
      </WeatherContainer>
    </>
  )
}

export default WeatherComponentInfo
