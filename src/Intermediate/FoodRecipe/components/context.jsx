import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("Corn");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState("");
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

  

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true); // Start loading
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipes(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        navigate("/IntermediateProjects/food-recipe"); // Redirect to the home page after search
      }

      console.log(data);
    } catch (err) {
      console.error(err);
      setLoading(false); // Stop loading in case of an error
    }
  }

  useEffect(() => {
    handleSubmit({ preventDefault: () => {} });
  }, []);


  function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavouritesList.push(getCurrentItem)

    } else {
      cpyFavouritesList.splice(index)
    }

    setFavouritesList(cpyFavouritesList)
  }

  console.log(favouritesList, 'favouritesList');

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        loading,
        recipes,
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesList,
        setFavouritesList,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
