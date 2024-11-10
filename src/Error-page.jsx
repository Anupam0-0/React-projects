import { useRouteError } from "react-router-dom";
import './App.css'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="h-screen w-full flex justify-center items-center bg-cyan-300 border-8 border-slate-950 rounded-xl" id="error-page">
            <div className="mb-20 text-center flex flex-col gap-10 ">
                <h1 className="text-8xl font-bold">Oops!</h1>
                <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
                <p className="text-slate-500 text-xl">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}
