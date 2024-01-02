import { Link } from "react-router-dom";
import { Menu,MenuLink} from "./style";
import { menuOption } from "../../../vars/vars";
import { useState } from "react";

export const MenuDesktop = () => {

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
        <Menu>
            {options.map((item)=>(
                <MenuLink active={item.active} onClick={()=>ActionBoton(item.index)} >
                    <Link to={item.link}>{item.title}</Link>
                </MenuLink>
            ))}
        </Menu>
    )
}

export default MenuDesktop;