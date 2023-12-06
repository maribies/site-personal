import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { animated } from 'react-spring'

import theme from '../Styles/themes'
import { basicLoading } from '../Components/Loading'
import { Footer } from '../Components/Footer'

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`

const World = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  });

  return (
  <ThemeProvider theme={theme}>
    {!!status && <>
        <animated.div style={loadingProps}>
        <MapContainer id="map" />
        <Footer />
      </ animated.div>
    </>}
  </ThemeProvider>
)}

export default World