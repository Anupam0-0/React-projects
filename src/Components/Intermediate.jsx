import React from "react";
import { Link } from "react-router-dom";
import {IntermediateButton} from "./ProjectButton";

function Intermediate() {
    return ( 
        <div className="overflow-y-clip">
            <h1 className="text-2xl sm:text-3xl text-slate-300">Full Site Projects:</h1>

            <div className="h-[69vh] sm:h-[73vh] md:h-[75vh] w-full md:w-fit px-5 py-6 md:px-10 flex flex-col flex-start gap-10 flex-wrap overflow-x-auto lg:overflow-x-hidden ">
                <Link className="w-52 mr-16 " to="../IntermediateProjects/e-learning-site">
                    <IntermediateButton title="E-learning" />
                </Link>

                <Link className="w-52 mr-16" to="../IntermediateProjects/food-recipe">
                    <IntermediateButton title="Food Recipe" />
                </Link>
                <Link className="w-52 mr-16" to="../IntermediateProjects/employee-management-system">
                    <IntermediateButton title="Employee Management (EMS)" />
                </Link>
               <Link className="w-52 mr-16" to="../IntermediateProjects/movie-list/">
                    <IntermediateButton title="Movies Look up" />
                </Link>
                {/* 
                <Link className="w-52 mr-16" to="#">
                    <IntermediateButton title="E-learning" />
                </Link>
                <Link className="w-52 mr-16" to="#">
                    <IntermediateButton title="E-learning" />
                </Link>
                <Link className="w-52 mr-16" to="#">
                    <IntermediateButton title="E-learning" />
                </Link>
                <Link className="w-52 mr-16" to="#">
                    <IntermediateButton title="E-learning" />
                </Link> */}
                
            </div>
        </div>
    );
}

export default Intermediate;
