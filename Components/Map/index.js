import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Map as BaseMap, View } from 'ol';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {StadiaMaps, Vector as VectorSource} from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Style} from 'ol/style';

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`
const style = new Style({});

const iconFeature = new Feature({
  geometry: new Point([0, 0]),
});

const vectorSource = new VectorSource({
  features: [iconFeature],
  wrapX: false,
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
  style,
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
        projection: "EPSG:4326"
      }),
    });
  }, []);

  return (
    <MapContainer id="map" />
  )
}