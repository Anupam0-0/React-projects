import { Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "./Error-page.jsx";
import Error404 from "../Components/Error404.jsx";
import Stopwatch from "../Projects/StopWatch.jsx";
import ToDoBoard from "../Projects/ToDoBoard/ToDoBoard.jsx";
import Forms from "../Projects/Forms.jsx";
import QRCode from "../Projects/QrCode.jsx";
import CustomScrollIndicator from "../Projects/CustomScrolling/CustomScrollIndicator.jsx";
import Carousel from "../Projects/Carousel.jsx";
import Accordion from "../Projects/Accordion.jsx";
import NAVBARs from "../Projects/ResponsiveNavbar.jsx";
import ELearningSite from "../Intermediate/ELearningSite/App.jsx";
import EMS from "../Intermediate/EMS/EMS.jsx";
import Navbar from "../Intermediate/FoodRecipe/components/Navbar.jsx";
import Home from "../Intermediate/FoodRecipe/pages/Home.jsx";
import Favourites from "../Intermediate/FoodRecipe/pages/Favourites.jsx";
import Details from "../Intermediate/FoodRecipe/pages/Details.jsx";
import GlobalState from "../Intermediate/FoodRecipe/components/context.jsx";
import ParagraphGenerator from "../Projects/ParagraphGenerator.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Root */}
      <Route path="/" element={<App />} />
      <Route path="/404" element={<Error404 />} />


      {/* Projects */}
      <Route path="/Projects/stopwatch" element={<Stopwatch />} />
      <Route path="/Projects/todoboard" element={<ToDoBoard />} />
      <Route path="/Projects/forms" element={<Forms />} />
      <Route path="/Projects/navbar" element={<NAVBARs />} />
      <Route
        path="/Projects/custom-scrollbar"
        element={<CustomScrollIndicator url={"https://dummyjson.com/products?limit=100"} />}
      />
      <Route path="/Projects/carousel" element={<Carousel />} />
      <Route path="/Projects/accordion" element={<Accordion />} />
      <Route path="/Projects/qrcode" element={<QRCode />} />
      <Route path="/Projects/paragraph-geneR83R" element={<ParagraphGenerator />} />

      {/* Intermediate Projects */}
      <Route path="/IntermediateProjects/e-learning-site" element={<ELearningSite />} />
      <Route path="/IntermediateProjects/employee-management-system" element={<EMS />} />
      <Route
        path="/IntermediateProjects/food-recipe"
        element={
          <GlobalState>
            <Navbar />
            <Home />
          </GlobalState>
        }
      >
        <Route
          path="favourites"
          element={
            <GlobalState>
              <Navbar />
              <Favourites />
            </GlobalState>
          }
        />
        <Route
          path="recipe-item/:id"
          element={
            <GlobalState>
              <Navbar />
              <Details />
            </GlobalState>
          }
        />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
