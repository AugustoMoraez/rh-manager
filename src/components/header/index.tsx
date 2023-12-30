import { Container,Logo,Menu,MenuLink} from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { menuOption } from "../../vars/vars";

const Header = () => {
    
    const[options,setOptions] = useState(menuOption); 

    const ActionBoton = (index:number) => {
        const tempArray = [...options];
        tempArray.map((item)=>{
            if(item.index == index){
                item.active = true;
            }else{
                item.active = false;
            }
        })
        setOptions(tempArray);
    }

    return(
        <Container>
            <Logo>
                Logo
            </Logo>
            <Menu>
               {options.map((item)=>(
                    <MenuLink active={item.active} onClick={()=>ActionBoton(item.index)} >
                        <Link to={item.link}>{item.title}</Link>
                    </MenuLink>
                ))}
            </Menu>
            
        </Container>
    )
}

export default Header;