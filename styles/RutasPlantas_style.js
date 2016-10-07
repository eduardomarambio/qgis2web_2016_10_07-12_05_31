var size = 0;

var styleCache_RutasPlantas={}
var style_RutasPlantas = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(134,67,0,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(192,223,255,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'round', width: 3}),
    })];
    if (feature.get("Velocidad") !== null) {
        var labelText = String(feature.get("Velocidad"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_RutasPlantas[key]){
        var text = new ol.style.Text({
              font: '10.4px \'Arial\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_RutasPlantas[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_RutasPlantas[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};