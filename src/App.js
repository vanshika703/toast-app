import Body from "./components/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpecialMenu from "./components/SpecialMenu";
import MainMenu from "./components/MainMenu";
import Cart from "./components/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <SpecialMenu /> },
      { path: "/main", element: <MainMenu /> },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
