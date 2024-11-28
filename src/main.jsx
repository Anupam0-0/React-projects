import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./Error-page.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// //Files elements are imported from the src folder
import Stopwatch from "./Projects/StopWatch.jsx";
import ToDoBoard from "./Projects/ToDoBoard/ToDoBoard.jsx";
import Error404 from "./Components/Error404.jsx";
import Forms from "./Projects/Forms.jsx";
import QRCode from "./Projects/QrCode.jsx";
import CustomScrollIndicator from "./Projects/CustomScrolling/CustomScrollIndicator.jsx";
import Carousel from "./Projects/Carousel.jsx";
import Accordion from "./Projects/Accordion.jsx";

import ELearningSite from "./Intermediate/ELearningSite/App.jsx";
// import FoodRecipe from "./Intermediate/FoodRecipe/App.jsx";
import Navbar from "./Intermediate/FoodRecipe/components/Navbar.jsx";
import Home from "./Intermediate/FoodRecipe/pages/Home.jsx";
import Favourites from "./Intermediate/FoodRecipe/pages/Favourites.jsx";
import Details from "./Intermediate/FoodRecipe/pages/Details.jsx";
import GlobalState from "./Intermediate/FoodRecipe/components/context.jsx";


// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path="/" element={<App/>} >
//     <Route path="projects/stopwatch" element={<Stopwatch/>} />
//     </Route>
//   )
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
  {
    path: "/Projects",
    children: [
      {
        path: "stopwatch",
        element: <Stopwatch />,
      },
      {
        path: "todoboard",
        element: <ToDoBoard />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "qrcode",
        element: <QRCode />,
      },
      {
        path: "custom-scrollbar",
        element: (
          <CustomScrollIndicator
            url={"https://dummyjson.com/products?limit=100"}
          />
        ),
      },
      {
        path: "carousel",
        element: <Carousel />,
      },
      {
        path: "accordion",
        element: <Accordion />,
      }
    ],
  },
  {
    path: "/IntermediateProjects",
    // element: <Error404 />,
    children: [
      {
        path: "e-learning-site",
        element: <ELearningSite />,
      },
      {
        path: "food-recipe",
        // element: (<GlobalState> <Details /> </GlobalState>),
        children: [
          {
            path: "",  element: (<><GlobalState> <Navbar /> <Home /> </GlobalState></>),
          },
          {
            path: "favourites", element: (<GlobalState> <Favourites /> </GlobalState>),
          },
          {
            path: "recipe-item/:id", element: (<GlobalState> <Details /> </GlobalState>),
          }
        ]
        
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
