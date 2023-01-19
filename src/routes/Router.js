import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DETAILS_PAGE, HOME_PAGE } from "../constants/routeConstants";
import  DetailsPage  from "../pages/Details/DetailsPage";
import  ErrorPage  from "../pages/ErrorPage/ErroPage";
import HomePage from "../pages/Home/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={DETAILS_PAGE} element={<DetailsPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
