import { Link } from "react-router-dom";
import { Container,Menu,MenuOption } from "./style";
import { menuOption } from "../../../vars/vars";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

const MenuMobile = () => {
    const[toggle,setToggle] = useState<boolean>(false);

    return(
        <Container>
            <TiThMenu onClick={()=>setToggle(!toggle)} />
            <Menu toggle={toggle}>
                {
                    menuOption.map((option)=>(
                        <MenuOption>
                            <Link to={option.link}>{option.title}</Link>
                        </MenuOption>
                    ))
                }
            </Menu>
        </Container>
    )
}

export default MenuMobile;