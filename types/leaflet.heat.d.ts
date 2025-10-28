declare module 'leaflet.heat' {
  import * as L from 'leaflet';
  
  namespace L {
    function heatLayer(latlngs: any[], options?: any): any;
  }
  
  export = L;
}