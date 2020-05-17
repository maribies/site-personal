import React from 'react'
import styled from 'styled-components'
import { P } from '../Text'
import { getColorValue } from '../CssHelpers'

const UnorderedList = styled.ul`

`

const ListItem = styled.li`
  color: ${getColorValue('white')};
`

const renderListItems = listData => {
  return listData.map((item, index) => {
    return (
      <ListItem key={index} value={item}>
        <P>
          {item}
        </P>
      </ListItem>
    )
  })
}

export const UnorderedListComponent = props => {
  return (
    <UnorderedList>
      {renderListItems(props.listData)}
    </UnorderedList>
  )
}
