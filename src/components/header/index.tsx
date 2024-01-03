import { Container,Logo } from "./style";
import { MenuDesktop } from "../menu/desktop";
import { Link } from "react-router-dom";
import MenuMobile from "../menu/mobile";


const Header = () => {
    return(
        <Container>
            <Logo>
                <Link to={"/"}>RH+</Link>
            </Logo>
            <MenuDesktop/>
            <MenuMobile/>
        </Container>
    )
}

export default Header;