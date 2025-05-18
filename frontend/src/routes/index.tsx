import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Submit from '../pages/Submit';
import Categories from '../pages/Categories';
import Story from '../pages/Story';
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Legal from '../pages/Legal';
import NotFound from '../pages/NotFound';
import Leaks from '../pages/Leaks';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'leaks',
        element: <Leaks />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'submit',
        element: <Submit />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'story/:id',
        element: <Story />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'legal',
        element: <Legal />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]); 