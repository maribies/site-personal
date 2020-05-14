import React from 'react'
import styled from 'styled-components'

const View = styled.iframe`
  max-width: 464px;
  height: 244px;
`

export const PreviewSection = ({ url }) => {
  return (
    <View src={url} frameborder='0' />
  )
}
