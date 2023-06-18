import Body from "./components/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpecialMenu from "./components/SpecialMenu";
import MainMenu from "./components/MainMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";

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
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App sm:max-w-[400px]">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
