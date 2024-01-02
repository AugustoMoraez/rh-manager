import { Container,Logo } from "./style";
import { MenuDesktop } from "../menu/desktop";
import MenuMobile from "../menu/mobile";


const Header = () => {
    
   

    return(
        <Container>
            <Logo>
                Logo
            </Logo>
            <MenuDesktop/>
            <MenuMobile/>
        </Container>
    )
}

export default Header;