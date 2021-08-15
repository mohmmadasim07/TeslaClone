import React from 'react'
import styled from "styled-components"
import Section from './Section'

//styling of components

const Container = styled.div
`
height:100vh;

`

function Home() {
    return (
      <Container>
          <Section title="Model S" backgroundImg="model-s.jpg" />
          <Section title="Model y" backgroundImg="model-y.jpg"/>
          <Section title="Model 3" backgroundImg="model-3.jpg"/>
          <Section title="Model x" backgroundImg="model-x.jpg"/>
          <Section title="Solar Panel" backgroundImg="solar-panel.jpg" desc="Best Solar Panel in the market" lB="Order Now" rB="Know more"/>
          <Section title="Solar Roof" backgroundImg="solar-roof.jpg" desc="Best Solar Roof Design in the market" lB="Order Now" rB="Know more"/>
          <Section title="Wall Charger" backgroundImg="accessories.jpg" desc="Best and efficient charger" lB="Order Now" rB="Buy at Retail Store"/>
      </Container>
    )
}

export default Home
