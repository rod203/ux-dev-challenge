import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { data, overviewToday, totalFollowers } from "./data.js";
import DataDayCard from "./components/DataDay/DataDayCard.js";
import { Header } from "./styled/Header.styled";
import { DataDay } from "./components/DataDay/DataDay.styled";
import { Dashboard, OverviewTitel } from "./styled/Dashboard.styled";
import { MediaCardContainer } from "./styled/MediaCardContainer.styled";
import { Toggle } from "./styled/Toggle.stylerd"
import MediaCard from "./components/MediaCard/MediaCard";

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Dashboard>
        <div className="topBg"/>
        <Header>
          <div>
            <h2>Social Media Dashboard</h2>
            <h3>Total Followers: {totalFollowers.total}</h3>
          </div>
          <div className="toggle">
            <h3>{theme} Mode</h3>
            <Toggle onClick={() => themeToggler()} type="checkbox"/>
          </div>
        </Header>
        <MediaCardContainer>
          {data.map((cardData, i) =>(
            <MediaCard key={i} props={cardData} />
          ))}
        </MediaCardContainer>
        <OverviewTitel>
          <h2>Overview - Today</h2>
        </OverviewTitel>
        <DataDay>
          {overviewToday.map((data, i) =>(
            <DataDayCard key={i} type={data.type} icon={data.icon} percentage={data.percentage} counter={data.counter}  />
          ))}
        </DataDay>
      </Dashboard>
    </ThemeProvider>
  );
}

export default App;
