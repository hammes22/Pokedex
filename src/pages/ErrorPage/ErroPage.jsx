import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ErrorContainer } from "./styled";

export default function ErrorPage() {
    const context = useContext(GlobalContext);
    const { changeHeader, headerError } = context.headerSettings
    useEffect(() => {
        changeHeader(headerError)
    }, [])



    return (
        <>
            <Header />
            <ErrorContainer>

                <h1>Endereço invalido </h1>
            </ErrorContainer>
        </>
    )
}