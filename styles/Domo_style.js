var size = 0;

var styleCache_Domo={}
var style_Domo = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(12,195,140,1.0)"})
    })];
    if (feature.get("Nombre") !== null) {
        var labelText = String(feature.get("Nombre"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Domo[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_Domo[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Domo[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};