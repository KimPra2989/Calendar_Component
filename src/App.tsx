import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./pages/calendar-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CalendarPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
