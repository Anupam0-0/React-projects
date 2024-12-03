import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(true);

  const movies = [
    {
      id: 1,
      title: "noice",
      release_date: "2025",
      url: "https:/images.com/?",
    },
    {
      id: 2,
      title: "noice",
      release_date: "2025",
      url: "https:/images.com/?",
    },
    {
      id: 3,
      title: "wow",
      release_date: "2025",
      url: "https:/images.com/?",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    setSearch("");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const bodyElement = document.querySelector("#body");
    if (bodyElement) {
      bodyElement.style.opacity = Loading ? "0" : "1000";
    }
  }, [Loading]);

  return (
    <div className="home">
      <div className="flex py-8 px-16 w-full justify-between">
        <div className="text-2xl hover:scale-[1.05]">Movies App</div>

        <form
          onSubmit={handleSearch}
          className="flex justify-center text-xl border-2 border-slate-900 px-5 py-1 rounded-full hover:focus-[1.05]"
        >
          <input
            className="outline-none"
            type="text"
            name="search"
            placeholder="Search for movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="text-2xl hover:scale-[1.05]">Favourites</div>
      </div>


      <div className="flex flex-wrap w-full shrink-0 gap-10 p-10" id="body">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(search.toLowerCase()) && (
              <MovieCard key={movie.id} props={movie} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
