import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Map as BaseMap, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { StadiaMaps, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Circle, RegularShape, Fill, Stroke, Style } from 'ol/style';

import { Travel } from '../../api/Travel';
import { getRandomColor, getColorValue } from '../CssHelpers';

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
     name: city.name,
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
  // style defaults to a dot
  let style = new Style({
    image: new Circle({
      radius: 2,
      fill: new Fill({
        color: getRandomColor(),
      }),
    }),
  });

  const star = new Style({
    geometry: feature.getGeometry(),
    image: new RegularShape({
      radius1: 5,
      radius2: 10,
      points: 5,
      angle: Math.PI,
      fill: new Fill({
        color: getColorValue('purple', 0.8),
      }),
      stroke: new Stroke({
        color: getColorValue('purple', 0.2),
        width: 1,
      }),
    }),
  });

  style = feature.values_.name === "Porto" ? star : style;
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