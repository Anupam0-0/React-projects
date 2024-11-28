import { useContext } from "react";
import RecipeItem from "../components/RecipeItem";
import { GlobalContext } from "../components/context";

export default function Favourites() {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto">
      {favouritesList && favouritesList.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10">
          {favouritesList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added to favourites.
          </p>
        </div>
      )}
    </div>
  );
}
