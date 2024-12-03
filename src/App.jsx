import { createBrowserRouter, RouterProvider, Outlet  } from 'react-router-dom'

import './app.css'

import Welcome from "./components/Welcome/Welcome";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Shop from './components/Shop/Shop';
import Locations from './components/Locations/Locations';




function Layout() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { index: true, element: <Welcome /> },
      { path: 'map', element: <Locations /> },  
      { path: 'shop/:shopKey', element: <Shop /> }, 
      { path: '*', element: <Error /> },
    ],
  },
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
