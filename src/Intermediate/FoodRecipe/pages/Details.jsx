import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/context";

export default function Details() {
    const { id } = useParams();
    const {
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesList,
        handleAddToFavorite,
    } = useContext(GlobalContext);

    useEffect(() => {vew
        async function getRecipeDetails() {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
            const data = await response.json();

            console.log(data);
            if (data?.data) {
                setRecipeDetailsData(data?.data);
            }
        }

        getRecipeDetails();
    }, []);

    console.log(recipeDetailsData, "recipeDetailsData");

    return (
        <div className="container mx-auto py-1 sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-10 flex flex-col">
            <div className="row-start-2 lg:row-start-auto ">
                <div className="rounded-xl px-8 group">
                    <img
                        src={recipeDetailsData?.recipe?.image_url}
                        className="h-96 mx-5 object-cover block rounded-2xl border-2 border-slate-900 duration-300 hover:scale-105"
                    />

                    <div className="text-sm mt-4 mb-1 px-1 text-cyan-700 font-medium">
                        {recipeDetailsData?.recipe?.publisher}
                    </div>
                    <h3 className="font-bold text-4xl text-black">
                        {recipeDetailsData?.recipe?.title}
                    </h3>
                    <div>
                        <button
                            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
                            className="py-2.5 px-7 rounded-lg text-sm uppercase font-medium tracking-wider mt-4 inline-block shadow-md bg-black text-white active:bg-gray-900 active:scale-95 duration-300"
                        >
                            {favouritesList && favouritesList.length > 0 && favouritesList.findIndex(
                                (item) => item.id === recipeDetailsData?.recipe?.id
                            ) !== -1
                                ? "Remove from favourites"
                                : "Add to favourites"}
                        </button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-3">

                <div className="pl-20">
                    <div className="text-2xl my-3 font-semibold text-black ">
                        Ingredients:
                    </div>
                    <ul className="flex flex-col gap-1 px-9 mb-5 list-disc">
                        {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                            <li>
                                <span className="text-lg font-semibold text-black">
                                    {ingredient.quantity} {ingredient.unit} -{" "} 
                                </span>
                                <span className="text-lg font-semibold text-black">
                                    {ingredient.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}