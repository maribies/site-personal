import React from 'react'
import styled from 'styled-components'

const View = styled.iframe`
  max-width: 464px;
  height: 244px;
`

const Image = styled.div`
  background-image: url(${props => props.path});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 464px;
  height: 244px; 
`

export const PreviewSection = ({ info }) => {
  const Component = info.video ? <View src={info.path} frameborder='0' />
    : <Image path={info.path} url={info.path} />

  return Component
}
