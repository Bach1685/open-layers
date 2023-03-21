window.onload = init;

function init () {
    const map = new ol.Map({
        view: new ol.View({
            center: [-7711498.573963709, -805216.7185664922],
            zoom: 7,
            maxZoom: 10,
            mixZoom: 4,
            rotation: 0.5
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
         target: 'js-map'
    })

    map.on('click', function(e){
        console.log(e.coordinate)
    })
}