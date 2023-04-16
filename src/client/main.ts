import maplibregl from 'maplibre-gl'

import 'maplibre-gl/dist/maplibre-gl.css'

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [76.92848, 43.25654],
  zoom: 5
})
