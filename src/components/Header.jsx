import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';


const Container = styled.div
`
min-height:60px;
position:fixed;
top:0;
left:0;
right:0;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
z-index:1;
`;

const Menu = styled.div
`
display:flex;
align-items:center;
justify-content:center;
flex:1;
p{
    font-weight:800;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:no-wrap;
}
@media(max-width:700px){
    display:none;
}
`;
const Rmenu = styled.div
`
display:flex;
align-items:center;
justify-content:center;
a{
    font-weight:800;
    text-transform:uppercase;
    padding:0 5px;
    flex-wrap:no-wrap;
}

`;

const BurgerNav = styled.div
`
position : fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
li{
    padding:15px 0;
    border-bottom:2px solid black;
}
`;

const Close = styled.div
`
display:flex;
justify-content :flex-end;
`;


function Header() {
    const [burgerOpen, setburgerOpen] = useState(false)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" srcset="" />
            </a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
            </Menu>

            <Rmenu>
                <a href="#">Shop</a>
                <a href="#" onClick={ ()=> setburgerOpen(true)}   ><img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"/></a>

            </Rmenu>

            <BurgerNav show={burgerOpen}>
                <Close>    
                    <li><a href="#" onClick={ ()=> setburgerOpen(false)}  ><img src="https://img.icons8.com/ios-filled/50/000000/x.png"/></a></li>

                </Close>
                <li><a href="#">Home</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Model S </a></li>
                <li><a href="#">Model Y</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header
