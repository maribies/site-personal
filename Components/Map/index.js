import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Map as BaseMap, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { StadiaMaps, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Circle, Fill, Stroke, Style } from 'ol/style';

import { Travel } from '../../api/Travel';

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

// TODO: cluster by country until zoomed
// City Features grouped by country
const countryCityFeatures = Object.values(Travel.countries).map((country) => {
  const cities = Object.values(country)
  const city = cities.map(city => {
   const point = new Point(fromLonLat([city.lng, city.lat]));

   const cityFeature = new Feature({
     geometry: point,
   });
   return cityFeature;
  });
  
  return city;
});

const vectorSource = new VectorSource({
  features: countryCityFeatures.flat(),
  wrapX: false,
});

const styleFn = (feature) => {
  const style = new Style({
    image: new Circle({
      radius: 2,
      fill: new Fill({
        color: [255, 153, 0, 1],
      }),
    }),
  });
  return style;
}

const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: styleFn
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