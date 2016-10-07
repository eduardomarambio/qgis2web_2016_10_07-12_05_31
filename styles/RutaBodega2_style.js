var size = 0;

var styleCache_RutaBodega2={}
var style_RutaBodega2 = function(feature, resolution){
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

    if (!styleCache_RutaBodega2[key]){
        var text = new ol.style.Text({
              font: '10.4px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_RutaBodega2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_RutaBodega2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};