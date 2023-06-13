import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import IconHandler from "../../assets/IconHandler";
import { Pallete } from "../../assets/theme";
import { Context } from "../../context/ContextProvider";
import { sceneLinks } from "../../data/sceneLinks";

const Sidebar = () => {
  const currentScene = window.location.pathname;

  const { theme } = useContext(Context);
  const [activeButton, setActiveButton] = useState(currentScene);

  const isLocked = false;

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  return (
    <div
      style={{
        ...Style.sidebar,
        backgroundColor: Pallete[theme]["Neutrals"][500],
        color: Pallete[theme].Text,
      }}
    >
      <div style={Style.sidebar_header}>
        <div style={{ marginTop: 10 }}>
          <IconHandler
            fileLocation="src/assets/icons/hakkeIcon.svg"
            width={184}
            height={60}
            color={Pallete[theme]["Text"]}
          />
        </div>
        <div>
          <IconHandler
            fileLocation="src/assets/icons/hakkeText.svg"
            width={184}
            height={60}
            color={Pallete[theme]["Text"]}
          />
        </div>
      </div>
      <div style={Style.sidebar_links}>
        {sceneLinks.map((scene, index) => (
          <div key={index}>
            {scene.header !== "" && (
              <>
                <h2 style={Style.sidebar_links_header}>{scene.header}</h2>
                <hr
                  style={{
                    borderColor: Pallete[theme]["Text"],
                  }}
                />
              </>
            )}
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {scene.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>
                    <button
                      disabled={link.url === "/" ? false : isLocked}
                      style={{
                        ...Style.links_BTN,
                        color: Pallete[theme]["Text"],
                        backgroundColor:
                          activeButton === link.url
                            ? Pallete[theme]["Neutrals"][400]
                            : "transparent",
                      }}
                      onClick={() => handleButtonClick(link.url)}
                    >
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Style = {
  sidebar: {
    display: "flex",
    flexDirection: "column",
    minWidth: 250,
    overflowY: "auto",
    paddingTop: 20,
  },
  sidebar_header: {
    willChange: "color",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
  },
  sidebar_links: {
    margin: 15,
  },
  sidebar_links_header: {
    fontSize: 32,
    marginBottom: -10,
  },
  links_BTN: {
    width: "100%",
    textAlign: "left",
    marginBottom: 10,
    padding: 5,
    fontSize: 24,
    backgroundColor: "transparent",
    border: "4px solid transparent",
    borderRadius: 5,
  },
};

export default Sidebar;
