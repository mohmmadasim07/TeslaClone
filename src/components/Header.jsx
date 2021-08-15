import React from 'react'
import styled from 'styled-components'


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
p{
    font-weight:800;
    text-transform:uppercase;
    padding:0 5px;
    flex-wrap:no-wrap;
}

`;

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" srcset="" />
            </a>
            <Menu>
                <p><a href="">Model S</a></p>
                <p><a href="">Model 3</a></p>
                <p><a href="">Model X</a></p>
                <p><a href="">Model Y</a></p>
            </Menu>

            <Rmenu>
                <p><a href="">Shop</a></p>
                <p><a href=""><img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"/></a></p>

            </Rmenu>
        </Container>
    )
}

export default Header
