import { useContext } from "react";
import { Pallete } from "../../assets/theme";
import { Context } from "../../context/ContextProvider";
const FourOhFour = () => {
  const { theme } = useContext(Context);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: Pallete[theme]["Text"] }}>404 Page Not Found</h1>
      <p style={{ color: Pallete[theme]["Text"] }}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default FourOhFour;
