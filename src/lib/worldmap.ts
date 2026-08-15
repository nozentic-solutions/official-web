import DottedMap from 'dotted-map';

export interface MapCity {
  name: string;
  lat: number;
  lng: number;
}

export interface MapPin {
  name: string;
  xPct: number;
  yPct: number;
}

export const mapCities: MapCity[] = [
  { name: 'New York', lat: 40.7128, lng: -74.006 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Colombo', lat: 6.9271, lng: 79.8612 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
];

const map = new DottedMap({ width: 120, grid: 'diagonal' });

export const worldMapPins: MapPin[] = mapCities.map((city) => {
  const pin = map.getPin({ lat: city.lat, lng: city.lng });
  return {
    name: city.name,
    xPct: pin ? (pin.x / map.image.width) * 100 : 0,
    yPct: pin ? (pin.y / map.image.height) * 100 : 0,
  };
});

export const worldMapSvg = map.getSVG({
  radius: 0.42,
  color: 'rgba(250,250,247,0.18)',
  shape: 'circle',
  backgroundColor: 'transparent',
});

export const worldMapRatio = map.image.width / map.image.height;
