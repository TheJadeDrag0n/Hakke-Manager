import React, { createContext, useEffect, useState } from "react";
// import { bungieAPI } from "../utils/api";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [characterData, setCharacterData] = useState(null);
  const [vaultData, setVaultData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [loadoutsData, setLoadoutsData] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedLoadout, setSelectedLoadout] = useState(null);

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  //   useEffect(() => {
  //     // Fetch profile data
  //     const fetchProfileData = async () => {
  //       try {
  //         const response = await bungieAPI.fetchProfileData();
  //         setProfileData(response.data);
  //       } catch (error) {
  //         console.error("Failed to fetch profile data:", error);
  //       }
  //     };

  //     // Fetch character data
  //     const fetchCharacterData = async () => {
  //       try {
  //         const response = await bungieAPI.fetchCharacterData();
  //         setCharacterData(response.data);
  //       } catch (error) {
  //         console.error("Failed to fetch character data:", error);
  //       }
  //     };

  //     // Fetch vault data
  //     const fetchVaultData = async () => {
  //       try {
  //         const response = await bungieAPI.fetchVaultData();
  //         setVaultData(response.data);
  //       } catch (error) {
  //         console.error("Failed to fetch vault data:", error);
  //       }
  //     };

  //     // Fetch inventory data
  //     const fetchInventoryData = async () => {
  //       try {
  //         const response = await bungieAPI.fetchInventoryData();
  //         setInventoryData(response.data);
  //       } catch (error) {
  //         console.error("Failed to fetch inventory data:", error);
  //       }
  //     };

  //     // Fetch loadouts data
  //     const fetchLoadoutsData = async () => {
  //       try {
  //         const response = await bungieAPI.fetchLoadoutsData();
  //         setLoadoutsData(response.data);
  //       } catch (error) {
  //         console.error("Failed to fetch loadouts data:", error);
  //       }
  //     };

  //     // Fetch all data
  //     const fetchData = async () => {
  //       await fetchProfileData();
  //       await fetchCharacterData();
  //       await fetchVaultData();
  //       await fetchInventoryData();
  //       await fetchLoadoutsData();
  //     };

  //     fetchData();
  //   }, []);

  //   const moveItem = async (itemId, source, destination) => {
  //     try {
  //       await bungieAPI.moveItem(itemId, source, destination);
  //       // Update the affected data (e.g., characterData, vaultData)
  //     } catch (error) {
  //       console.error("Failed to move item:", error);
  //     }
  //   };

  //   const editLoadout = async (loadoutId, loadoutData) => {
  //     try {
  //       await bungieAPI.editLoadout(loadoutId, loadoutData);
  //       // Update the affected data (e.g., loadoutsData)
  //     } catch (error) {
  //       console.error("Failed to edit loadout:", error);
  //     }
  //   };

  //   const loadLoadout = async (loadoutId) => {
  //     try {
  //       await bungieAPI.loadLoadout(loadoutId);
  //       // Update the affected data (e.g., characterData, inventoryData)
  //     } catch (error) {
  //       console.error("Failed to load loadout:", error);
  //     }
  //   };

  //   const deleteLoadout = async (loadoutId) => {
  //     try {
  //       await bungieAPI.deleteLoadout(loadoutId);
  //       // Update the affected data (e.g., loadoutsData)
  //     } catch (error) {
  //       console.error("Failed to delete loadout:", error);
  //     }
  //   };

  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
        profileData,
        characterData,
        vaultData,
        inventoryData,
        loadoutsData,
        selectedCharacter,
        selectedLoadout,
        // moveItem,
        // editLoadout,
        // loadLoadout,
        // deleteLoadout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
