import React from 'react'
import styled, { css } from 'styled-components'

const dimensions = () => css`
  width: 464px;
  height: 244px;
  margin: 1em;
`

const View = styled.iframe`
  ${dimensions}
`

const Image = styled.div`
  background-image: url(${props => props.path});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${dimensions}
`

const componentType = (info) => {
  if (info.type === 'video' || info.type === 'site') {
    return (
      <View src={info.path} title={info.path}/>
    )
  }

  if (info.type === 'image') {
    return (
      <Image path={info.path} url={info.path} />
    )
  }
}

export const PreviewSection = ({ info }) => {
  return componentType(info);
}
