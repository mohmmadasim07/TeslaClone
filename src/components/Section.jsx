import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div
`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props => `url("/images/${props.bgImage}")`};

`;

const Itemtext = styled.div
`
padding-top:15vh;
text-align:center;

`
const ButtonGroup = styled.div
`
display:flex;

margin-button:30px;
cursor:pointer;
// align-items:center;
// justify-content:center;

@media(max-width:700px){
    flex-direction:column;
}
`
const LeftBtn =styled.div `
background-color:rgba(23, 26, 32, 0.8);
height:40px;
width:256px;

display:flex;
justify-content:center;
align-items:center;
color:white;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px; 
margin-right:10px;
margin-top:10px;
`
const RightBtn =styled(LeftBtn)`

color:black;
background-color:white;

`;
const Arw = styled.img
`
margin-top:20px;
margin-left:45%;
height:40px;
animation:animate infinite 1.6s;
overflow-x:hidden;

`;
const Button =styled.div`


`;

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
<Itemtext>
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
</Itemtext>
<Button>
<ButtonGroup>
    <LeftBtn>
       {props.lB}
    </LeftBtn>
    <RightBtn>
       {props.rB}
    </RightBtn>
</ButtonGroup>
<Arw src="/images/down-arrow.svg"></Arw>
</Button>
        </Wrap>
    )
}

Section.defaultProps={
    desc:"Order Online for Touchless Delivery",
    lB:"Custom Order",
    rB:"Existing Inventory"
}

export default Section
