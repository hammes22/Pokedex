import Header from "../../components/Header";
import { ErrorContainer } from "./styled";

export default function ErrorPage() {
    return (
        <ErrorContainer>
            <Header />
            <h1>Endereço invalido </h1>
        </ErrorContainer>

    )
}