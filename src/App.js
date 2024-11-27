import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Root } from "./Pages/Root/Root";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./Pages/Homepage/Homepage";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import Contact from "./Pages/Contact/Contact";
import {AboutUs} from "./Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            { index: true, element: <Homepage />, },
            { path: '/contact', element: <Contact /> },
            { path: '/about-us', element: <AboutUs /> },
            { path: '/terms', element: <Terms /> },
            { path: '/privacy', element: <Privacy /> },
        ]
    }
])

function App() {
  return (
      <>
          <HelmetProvider>
              <RouterProvider router={router} />
          </HelmetProvider>
      </>
  );
}

export default App;
