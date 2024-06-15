import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    width: 100%;
    background-color: blue;
`

const Div2 = styled.div`

    background-color: green;
`

const AsideI = () => {
  return (
    <Div1>
        <h1>AsideI</h1>
        <Div2>
            <h1>AsideI</h1>
        </Div2>
    </Div1>
  )
}

export default AsideI