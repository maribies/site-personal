import React from 'react'
import styled from 'styled-components'
import { P } from '../Text'

const ListItem = styled.li`
  color: var(--white);
  list-style-type: circle;
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
    <ul>
      {renderListItems(props.listData)}
    </ul>
  )
}
