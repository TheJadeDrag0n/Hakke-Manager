import { useContext, useState } from "react";
import IconHandler from "../assets/IconHandler";
import { Pallete } from "../assets/theme";
import { Context } from "../context/ContextProvider";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useContext(Context);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.onSearch(searchTerm);
    console.log(searchTerm);
  };

  return (
    <form
      style={{
        backgroundColor: Pallete[theme]["Neutrals"][500],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        maxWidth: 250,
        borderRadius: 5,
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          backgroundColor: "rgb(255, 255, 255, 0)",
          borderRadius: 5,
          padding: 10,
          border: "none",
          fontSize: 16,
          width: "100%",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "rgb(255, 255, 255, 0)",
          border: "none",
          cursor: "pointer",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <IconHandler
          fileLocation="src/assets/icons/magnifyingGlass.svg"
          color={"black"}
          size={16}
        />
      </button>
    </form>
  );
};

export default SearchBar;
