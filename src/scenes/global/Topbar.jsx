import { useContext, useState } from "react";
import IconHandler from "../../assets/IconHandler";
import { Pallete } from "../../assets/theme";
import SearchBar from "../../components/searchbar";
import { Context } from "../../context/ContextProvider";

const Topbar = () => {
  const [modelState, toggleModel] = useState(false);

  const { theme, toggleTheme } = useContext(Context);

  const handleClick = (event) => {
    // Handle button click event here
    console.log(`Button ${event.target.id} clicked`);
  };

  const Stat = false;

  const handleModelClick = () => {
    toggleModel(!modelState);
  };

  const clickLogin = () => {
    toggleModel(false);
    console.log("Click Login");
  };

  const clickLogout = () => {
    toggleModel(false);
    console.log("Click Logout");
  };

  return (
    <div style={Style.topbar}>
      <SearchBar />
      <div style={Style.topbar_BTN_container}>
        <div style={Style.userContainer}>
          <button
            style={Style.topbar_BTN}
            id="button1"
            onClick={handleModelClick}
          >
            <IconHandler
              fileLocation="src/assets/icons/user.svg"
              color={Pallete[theme]["Text"]}
              size={30}
            />
          </button>
          <div
            style={{
              ...Style.user_data,
              display: modelState === true ? "block" : "none",
              backgroundColor: Pallete[theme]["Neutrals"][500],
              color: Pallete[theme]["Text"],
            }}
          >
            {Stat ? (
              <div style={Style.user_content}>
                <p>Welcome</p>
                <button
                  style={{
                    ...Style.log_BTN,
                    color: Pallete[theme]["Text"],
                    backgroundColor: Pallete[theme]["Neutrals"][400],
                  }}
                  onClick={clickLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div style={Style.user_content}>
                <p>You are not logged in</p>
                <button
                  style={{
                    ...Style.log_BTN,
                    color: Pallete[theme]["Text"],
                    backgroundColor: Pallete[theme]["Neutrals"][400],
                  }}
                  onClick={clickLogin}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
        <button style={Style.topbar_BTN} id="button2" onClick={toggleTheme}>
          <div style={{ display: theme === "dark" ? "block" : "none" }}>
            <IconHandler
              fileLocation="src/assets/icons/sun.svg"
              color={Pallete[theme]["Text"]}
              size={32}
            />
          </div>
          <div style={{ display: theme === "light" ? "block" : "none" }}>
            <IconHandler
              fileLocation="src/assets/icons/moon.svg"
              color={Pallete[theme]["Text"]}
              size={32}
            />
          </div>
        </button>
        <button style={Style.topbar_BTN} id="button3" onClick={handleClick}>
          <IconHandler
            fileLocation="src/assets/icons/gear.svg"
            color={Pallete[theme]["Text"]}
            size={32}
          />
        </button>
      </div>
    </div>
  );
};

const Style = {
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    padding: "5px 10px",
  },
  topbar_BTN_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userContainer: {
    position: "relative",
  },
  topbar_BTN: {
    margin: "0px 10px",
    minWidth: 50,
    minHeight: 50,
    backgroundColor: "transparent",
    border: "none",
  },
  user_data: {
    marginTop: "10px",
    position: "absolute",
    minWidth: 175,
    padding: 5,
    top: "calc(200%)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 5,
  },
  user_content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  log_BTN: {
    border: "none",
    borderRadius: 5,
    padding: 10,
  },
};

export default Topbar;
