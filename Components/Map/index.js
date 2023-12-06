import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Map as BaseMap, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { StadiaMaps, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const point = new Point(fromLonLat([-8.61099, 41.14961]));

const iconFeature = new Feature({
  geometry: point,
});

const vectorSource = new VectorSource({
  features: [iconFeature],
  wrapX: false,
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const tileLayer = new TileLayer({
  source: new StadiaMaps({
    layer: 'stamen_toner',
  }),
});

export const Map = () => {
  useEffect(() => {
    new BaseMap({
      target: 'map',
      layers: [tileLayer, vectorLayer],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return (
    <MapContainer id="map" />
  )
}