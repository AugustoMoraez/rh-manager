import { Container,Banner } from "./style";
import bg from "../../assets/banner2.jpg";


export const WellcomePage = () => {
    return(
        <Container>
            <Banner>
                <img src={bg} alt="banner" />
             
                
                <p>
                Otimize sua gestão de estoque de forma simples e eficiente! Descubra como o nosso serviço online revoluciona a maneira como você administra seu estoque. Maximize a eficiência, reduza custos e simplifique processos com nossa plataforma intuitiva. Experimente agora e simplifique a gestão do seu estoque!"
                </p>
             
            </Banner>
        </Container>
    )
}