export const mainTitle = 'Know Gas';
export const titleMainPage = 'Know Gas | Saiba o preço mais barato para abastecer seu carro!';
export const descriptionMainPage = 'Feito para você conseguir economizar uma graninha extra, podendo abastecer seu carro nos postos com o melhor preço de Aguas Claras!!';

export function getDistance(from, to): string {
  const rad = (x) => {
    return x * Math.PI / 180;
  };

  const R = 6378.137;
  const dLat = rad(to.latitude - from.latitude);
  const dLong = rad(to.longitude - from.longitude);
  // tslint:disable-next-line:max-line-length
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(from.latitude)) * Math.cos(rad(to.latitude)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d.toFixed(2);
}

export function formatCoordsInRegion(coords: any): string {
  const abstration = 1;
  const lat1 = String(coords.latitude).split('.')[0];
  const lng1 = String(coords.longitude).split('.')[0];
  const lat2 = String(coords.latitude).split('.')[1];
  const lng2 = String(coords.longitude).split('.')[1];
  let lat = lat1 + lat2.slice(0, abstration);
  let lng = lng1 + lng2.slice(0, abstration);
  if (lat.indexOf('-') === -1){
    lat = '+' + lat;
  }
  if (lng.indexOf('-') === -1){
    lng = '+' + lng;
  }

  return lat + '|' + lng;
}

export function getCurrentRegionOfUser(): string {
  // @ts-ignore
  return formatCoordsInRegion(window.currentUserLocation);
}
