import React from "react";
import { Link } from "react-router-dom";
import { ProjectButton } from "./ProjectButton";
import { useNavigate } from "react-router-dom";

const ProjectColumn = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full">
      <div className="mt-1">
        <h1 className="text-2xl sm:text-3xl"> Mini Projects: </h1>
        <div className="h-[80vh] w-full lg:w-fit py-6 px-5 md:px-10 flex flex-col flex-wrap gap-6  overflow-x-scroll lg:overflow-x-hidden">
          <Link to="./Projects/stopwatch">
            <ProjectButton title="StopWatch" />
          </Link>

          <Link to="./Projects/todoboard">
            <ProjectButton title="ToDo Board" />
          </Link>

          <Link to="/404">
            <ProjectButton title="Task Tracker" />
          </Link>

          <Link to="./Projects/qrcode">
            <ProjectButton title="QR Generator" />
          </Link>

          <Link to="404">
            <ProjectButton title="RSS-Feed" />
          </Link>

          <Link to="./Projects/Forms">
            <ProjectButton title="Forms #1" />
          </Link>

          <Link to="./Projects/custom-scrollbar">
            <ProjectButton title="Custom Scroll" />
          </Link>

          <Link to="#">
            <ProjectButton title="Podcast Player" />
          </Link>

          <Link to="#">
            <ProjectButton title="Drag n Drop" />
          </Link>

          <Link to="./Projects/navbar">
            <ProjectButton title="Navbar" />
          </Link>

          <Link to="./Projects/react-hook-form">
            <ProjectButton title="ReactHook Form" />
          </Link>

          <Link to="./Projects/shopping-cart/product-list">
            <ProjectButton title="🛒 Checkout" />
          </Link>

          <Link to="#">
            <ProjectButton title="WoW... nice" />
          </Link>

          <Link to="./Projects/carousel">
            <ProjectButton title="Carousel" />
          </Link>

          <Link to="./Projects/accordion">
            <ProjectButton title="Accordion" />
          </Link>

          <Link to="./Projects/paragraph-geneR83R">
            <ProjectButton title="Paragraf GenR8" />
          </Link>

          <Link to="#">
            <ProjectButton title="TO BE COOKED" />
          </Link>

          <Link to="./Projects/cat:3">
            <ProjectButton title="Cat :3"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectColumn;
