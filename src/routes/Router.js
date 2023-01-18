import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_PAGE } from "../constants/routeConstants";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={HOME_PAGE} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
