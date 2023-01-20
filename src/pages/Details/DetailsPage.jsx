import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { CardDetails, DetailsContainer, H1Details} from "./styled";

export default function DetailsPage() {
    const { state } = useLocation()
    return (
        <>
            <Header />
            <DetailsContainer>
                <H1Details>Detalhes</H1Details>
                <CardDetails>
                    asdas
                </CardDetails>

            </DetailsContainer>

        </>

    )
}