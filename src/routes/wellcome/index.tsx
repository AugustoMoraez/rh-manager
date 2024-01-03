import { Container,Banner } from "./style";
import bg from "../../assets/banner2.jpg";


export const WellcomePage = () => {
    return(
        <Container>
            <Banner>
                <img src={bg} alt="banner" />
            </Banner>
        </Container>
    )
}