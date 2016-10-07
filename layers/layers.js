var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Bodega5 = new ol.format.GeoJSON();
var features_Bodega5 = format_Bodega5.readFeatures(geojson_Bodega5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodega5 = new ol.source.Vector();
jsonSource_Bodega5.addFeatures(features_Bodega5);var lyr_Bodega5 = new ol.layer.Vector({
                source:jsonSource_Bodega5, 
                style: style_Bodega5,
                title: "Bodega 5"
            });var format_Bodega4 = new ol.format.GeoJSON();
var features_Bodega4 = format_Bodega4.readFeatures(geojson_Bodega4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodega4 = new ol.source.Vector();
jsonSource_Bodega4.addFeatures(features_Bodega4);var lyr_Bodega4 = new ol.layer.Vector({
                source:jsonSource_Bodega4, 
                style: style_Bodega4,
                title: "Bodega 4"
            });var format_Bodega3 = new ol.format.GeoJSON();
var features_Bodega3 = format_Bodega3.readFeatures(geojson_Bodega3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodega3 = new ol.source.Vector();
jsonSource_Bodega3.addFeatures(features_Bodega3);var lyr_Bodega3 = new ol.layer.Vector({
                source:jsonSource_Bodega3, 
                style: style_Bodega3,
                title: "Bodega 3"
            });var format_Bodega2 = new ol.format.GeoJSON();
var features_Bodega2 = format_Bodega2.readFeatures(geojson_Bodega2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodega2 = new ol.source.Vector();
jsonSource_Bodega2.addFeatures(features_Bodega2);var lyr_Bodega2 = new ol.layer.Vector({
                source:jsonSource_Bodega2, 
                style: style_Bodega2,
                title: "Bodega 2"
            });var format_Bodega1 = new ol.format.GeoJSON();
var features_Bodega1 = format_Bodega1.readFeatures(geojson_Bodega1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodega1 = new ol.source.Vector();
jsonSource_Bodega1.addFeatures(features_Bodega1);var lyr_Bodega1 = new ol.layer.Vector({
                source:jsonSource_Bodega1, 
                style: style_Bodega1,
                title: "Bodega 1"
            });var format_Domo = new ol.format.GeoJSON();
var features_Domo = format_Domo.readFeatures(geojson_Domo, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Domo = new ol.source.Vector();
jsonSource_Domo.addFeatures(features_Domo);var lyr_Domo = new ol.layer.Vector({
                source:jsonSource_Domo, 
                style: style_Domo,
                title: "Domo"
            });var format_StockPile = new ol.format.GeoJSON();
var features_StockPile = format_StockPile.readFeatures(geojson_StockPile, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StockPile = new ol.source.Vector();
jsonSource_StockPile.addFeatures(features_StockPile);var lyr_StockPile = new ol.layer.Vector({
                source:jsonSource_StockPile, 
                style: style_StockPile,
                title: "Stock Pile"
            });var format_RutasPlantas = new ol.format.GeoJSON();
var features_RutasPlantas = format_RutasPlantas.readFeatures(geojson_RutasPlantas, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutasPlantas = new ol.source.Vector();
jsonSource_RutasPlantas.addFeatures(features_RutasPlantas);var lyr_RutasPlantas = new ol.layer.Vector({
                source:jsonSource_RutasPlantas, 
                style: style_RutasPlantas,
                title: "Rutas Plantas"
            });var format_RutaBodega2 = new ol.format.GeoJSON();
var features_RutaBodega2 = format_RutaBodega2.readFeatures(geojson_RutaBodega2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutaBodega2 = new ol.source.Vector();
jsonSource_RutaBodega2.addFeatures(features_RutaBodega2);var lyr_RutaBodega2 = new ol.layer.Vector({
                source:jsonSource_RutaBodega2, 
                style: style_RutaBodega2,
                title: "Ruta Bodega 2"
            });

lyr_Bodega5.setVisible(true);lyr_Bodega4.setVisible(true);lyr_Bodega3.setVisible(true);lyr_Bodega2.setVisible(true);lyr_Bodega1.setVisible(true);lyr_Domo.setVisible(true);lyr_StockPile.setVisible(true);lyr_RutasPlantas.setVisible(true);lyr_RutaBodega2.setVisible(true);
var layersList = [baseLayer,lyr_Bodega5,lyr_Bodega4,lyr_Bodega3,lyr_Bodega2,lyr_Bodega1,lyr_Domo,lyr_StockPile,lyr_RutasPlantas,lyr_RutaBodega2];
lyr_Bodega5.set('fieldAliases', {'id': 'id', });
lyr_Bodega4.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Bodega3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Bodega2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Bodega1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Domo.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'fecha': 'fecha', 'capacidad': 'capacidad', 'EPP': 'EPP', });
lyr_StockPile.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Capacidad': 'Capacidad', 'Fecha': 'Fecha', });
lyr_RutasPlantas.set('fieldAliases', {'id': 'id', 'Longitud': 'Longitud', 'Velocidad': 'Velocidad', 'Nombre': 'Nombre', });
lyr_RutaBodega2.set('fieldAliases', {'id': 'id', 'Velocidad': 'Velocidad', });
lyr_Bodega5.set('fieldImages', {'id': 'TextEdit', });
lyr_Bodega4.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Bodega3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Bodega2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Bodega1.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Domo.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'fecha': 'TextEdit', 'capacidad': 'TextEdit', 'EPP': 'TextEdit', });
lyr_StockPile.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Capacidad': 'TextEdit', 'Fecha': 'TextEdit', });
lyr_RutasPlantas.set('fieldImages', {'id': 'TextEdit', 'Longitud': 'TextEdit', 'Velocidad': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_RutaBodega2.set('fieldImages', {'id': 'TextEdit', 'Velocidad': 'TextEdit', });
lyr_Bodega5.set('fieldLabels', {'id': 'no label', });
lyr_Bodega4.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Bodega3.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Bodega2.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Bodega1.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Domo.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'fecha': 'no label', 'capacidad': 'no label', 'EPP': 'no label', });
lyr_StockPile.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Capacidad': 'no label', 'Fecha': 'no label', });
lyr_RutasPlantas.set('fieldLabels', {'id': 'no label', 'Longitud': 'no label', 'Velocidad': 'no label', 'Nombre': 'no label', });
lyr_RutaBodega2.set('fieldLabels', {'id': 'no label', 'Velocidad': 'no label', });
