import React from "react";
import { Link } from "react-router-dom";
import {IntermediateButton} from "./ProjectButton";

function Intermediate() {
    return ( 
        <div className="overflow-y-clip">
            <h1 className="text-3xl text-slate-300">Full Site Projects:</h1>

            <div className="h-[75vh] py-6 px-10 flex flex-col gap-10 flex-wrap overflow-x-scroll lg:overflow-x-auto ">
                <Link className="w-52 mr-16 " to="../Projects/e-learning-site">
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
                </Link>
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
                </Link>
                
            </div>
        </div>
    );
}

export default Intermediate;
