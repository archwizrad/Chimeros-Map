ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9473").setExtent([36692.237844, -4354135.966091, 4230996.237844, -2229792.368036]);
var wms_layers = [];

var lyr_ChimerosMap_modified_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ChimerosMap_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ChimerosMap_modified_0.png",
            attributions: ' ',
            projection: 'EPSG:9473',
            alwaysInRange: true,
            imageExtent: [-2119073.867181, -5073305.934035, 2312488.254849, -918716.444632]
        })
    });
var format_HexTile_1 = new ol.format.GeoJSON();
var features_HexTile_1 = format_HexTile_1.readFeatures(json_HexTile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_HexTile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HexTile_1.addFeatures(features_HexTile_1);
var lyr_HexTile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HexTile_1, 
                style: style_HexTile_1,
                popuplayertitle: 'Hex Tile',
                interactive: true,
                title: '<img src="styles/legend/HexTile_1.png" /> Hex Tile'
            });

lyr_ChimerosMap_modified_0.setVisible(true);lyr_HexTile_1.setVisible(true);
var layersList = [lyr_ChimerosMap_modified_0,lyr_HexTile_1];
lyr_HexTile_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Opacity': 'Opacity', 'Discovery level': 'Discovery level', 'Landmarks': 'Landmarks', 'Histories': 'Histories', });
lyr_HexTile_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Opacity': 'Range', 'Discovery level': 'TextEdit', 'Landmarks': 'TextEdit', 'Histories': 'TextEdit', });
lyr_HexTile_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - visible with data', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Opacity': 'hidden field', 'Discovery level': 'inline label - visible with data', 'Landmarks': 'inline label - visible with data', 'Histories': 'inline label - visible with data', });
lyr_HexTile_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});