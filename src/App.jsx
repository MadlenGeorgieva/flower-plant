import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './view/Home';
import MyPlants from './view/MyPlants';
import Create from './view/Create';
import Update from './view/Update';
import About from './view/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "myplants",
        element: <MyPlants />
      },
      {
        path: "myplants/create",
        element: <Create />
      },
      {
        path: "myplants/update/:id",
        element: <Update />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
],
{ 
  basename: "/flower-plant/" 
}
)  

function App() {
  return (
  <RouterProvider router={router} />
  ) 
}

export default App;