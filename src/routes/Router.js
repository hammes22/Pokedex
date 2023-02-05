import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DETAILS_PAGE,
  ERROR_PAGE,
  HOME_PAGE,
  POKEDEX_PAGE,
} from "../constants/routeConstants";
import DetailsPage from "../pages/Details/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErroPage";
import HomePage from "../pages/Home/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={DETAILS_PAGE} element={<DetailsPage />} />
        <Route path={POKEDEX_PAGE} element={<PokedexPage />} />
        <Route path={ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
