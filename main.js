window.onload = init;

function init () {
    const map = new ol.Map({
        view: new ol.View({
            center: [-7711498.573963709, -805216.7185664922],
            zoom: 2,
            minZoom: 4,
        }),
         target: 'js-map'
    })

    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OSMStandard'
    })

   const openStreetMapHumanitarian = new ol.layer.Tile({
    source: new ol.source.OSM({
        url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    }),
    visible: false,
    title: 'OSMHumanitarian'
   })

   const stamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false,
    title: 'StamenTerrain'
   })

   const baseLayerGroup = new ol.layer.Group({
    layers: [
        openStreetMapStandard, openStreetMapHumanitarian
    ]
   })

   map.addLayer(baseLayerGroup)
}