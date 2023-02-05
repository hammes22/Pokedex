import {
  DETAILS_PAGE,
  ERROR_PAGE,
  HOME_PAGE,
  POKEDEX_PAGE,
} from "../constants/routeConstants";

export function goToHomePage(navigate) {
  navigate(HOME_PAGE);
}
export function goToDetailsPage(navigate, response = "") {
  navigate(DETAILS_PAGE, response);
}
export function goToPokedex(navigate) {
  navigate(POKEDEX_PAGE);
}

export function goToErrorPage(navigate) {
  navigate(ERROR_PAGE);
}
