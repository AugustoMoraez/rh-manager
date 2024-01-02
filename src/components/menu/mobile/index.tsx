import { Link } from "react-router-dom";
import { Container,Menu,MenuOption } from "./style";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

const MenuMobile = () => {
    const[toggle,setToggle] = useState<boolean>(false);

    return(
        <Container>
            <TiThMenu onClick={()=>setToggle(!toggle)} />
            <Menu toggle={toggle}>
                <MenuOption>
                    <Link to={"/servicos"}>Serviços</Link>
                </MenuOption>
                <MenuOption>
                    <Link to={"/suporte"}>Suporte</Link>
                </MenuOption>
                <MenuOption>
                    <Link to={"/autenticar"}>Acessar</Link>
                </MenuOption>
            </Menu>
        </Container>
    )
}

export default MenuMobile;