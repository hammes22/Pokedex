import { DETAILS_PAGE, HOME_PAGE } from "../constants/routeConstants";

export function goToHomePage(navigate) {
  navigate(HOME_PAGE);
}
export function goToDetailsPage(navigate, response) {
  navigate(DETAILS_PAGE, response);
}
