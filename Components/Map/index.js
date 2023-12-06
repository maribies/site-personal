import React, { useEffect } from 'react'
import styled from 'styled-components'


import { Map as BaseMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`

export const Map = () => {
  useEffect(() => {
    new BaseMap({
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
    <MapContainer id="map" />
  )
}