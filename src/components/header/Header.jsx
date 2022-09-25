import React from "react";

import Menu from "../menu/Menu";
import Filter from "../filter/Filter";
import Button from "../button/Button";

import "./Header.scss";

const Header = ({ projectKeys, applyFilter, currentFilter }) => {
  const theme = localStorage.getItem('theme');
  const [dark, setDark] = React.useState(theme === 'dark');
  const enableDark = () => {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem('theme', 'dark');
    setDark(true);
  }
  const disableDark = () => {
    document.documentElement.dataset.theme = "default";
    localStorage.setItem('theme', 'default');
    setDark(false);
  }
  
  const switchTheme = () => {
    if (theme !== 'dark') {
      enableDark();
    } else {
      disableDark();
    }
  };
  const clearFilterOnProjectChange = () => applyFilter("");
  return (
    <header>
      <div className="header-inner">
        <Filter applyFilter={applyFilter} currentValue={currentFilter} />

        <Button icon={dark ? "sun": "moon"} className="theme-switcher" onClick={switchTheme} />

        {projectKeys.length > 1 && (
          // Display project selection only for more than 1 projects
          <Menu
            items={[
              {
                route: "/",
                title: "all",
                icon: "clone",
                onClick: clearFilterOnProjectChange,
              },
              ...projectKeys.map((projectKey) => ({
                route: `/${projectKey}`,
                projectKey,
                icon: "folder",
                onClick: clearFilterOnProjectChange,
              })),
            ]}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
