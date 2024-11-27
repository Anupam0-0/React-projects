import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './Error-page.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// //Files elements are imported from the src folder
import Stopwatch from './Projects/StopWatch.jsx'
import ToDoBoard from './Projects/ToDoBoard/ToDoBoard.jsx'
import Error404 from './Components/Error404.jsx';
import Forms from './Projects/Forms.jsx'
import QRCode from './Projects/QrCode.jsx'
import ELearningSite from './Intermediate/ELearningSite/App.jsx'
import CustomScrollIndicator from './Projects/CustomScrolling/CustomScrollIndicator.jsx'


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
        element: <QRCode />
      },

      {
        path: "e-learning-site",
        element: <ELearningSite />,
      },
      {
        path: "custom-scrollbar",
        element: <CustomScrollIndicator url={'https://dummyjson.com/products?limit=100'} />,
      }
    ],

  },
  {
    path: "/IntermediateProjects",
    element: <Error404 />,
    children: [
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
