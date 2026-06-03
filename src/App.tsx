import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { router } from "./router";
import { generateRoutes } from "./utils/generateRoutes";
import { getMenu } from "./api/user";
import { setMenu } from "./store/login/authSlice";

function App() {
  const [theRouter, setTheRouter] = useState<any>(null);
  const { token } = useSelector((state: any) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const { data } = await getMenu();

      if (data.length) {
        dispatch(setMenu(data));
        const routes = generateRoutes(data);
        const myRoutes = [...router];
        myRoutes[0].children = routes;
        myRoutes[0].children[0].index = true;

        const routerInstance = createBrowserRouter(myRoutes);
        setTheRouter(routerInstance);
      } else {
        const routerInstance = createBrowserRouter(router);
        setTheRouter(routerInstance);
      }
    }

    loadData();
  }, [dispatch, token]);

  if (theRouter) {
    return (
      <Suspense>
        <RouterProvider router={theRouter} />
      </Suspense>
    );
  }

  return <div>Please wait...</div>;
}

export default App;
