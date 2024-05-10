import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./redux/appStore";
import MainContainer from "./components/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <WatchPage />
        },
        {
          path: "/demo",
          element: <Demo />
        },
     ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div className="">
        <Header className />
        <RouterProvider router={appRouter} /> 
      </div>
    </Provider>
  );
}

export default App;
