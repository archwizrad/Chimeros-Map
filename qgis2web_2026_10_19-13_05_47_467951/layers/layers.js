ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9473").setExtent([641705.294570, -5249759.227031, 2738857.294570, -4187587.428003]);
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
var format_Grid_1 = new ol.format.GeoJSON();
var features_Grid_1 = format_Grid_1.readFeatures(json_Grid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_Grid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_1.addFeatures(features_Grid_1);
var lyr_Grid_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_1, 
                style: style_Grid_1,
                popuplayertitle: 'Grid',
                interactive: true,
                title: '<img src="styles/legend/Grid_1.png" /> Grid'
            });

lyr_ChimerosMap_modified_0.setVisible(true);lyr_Grid_1.setVisible(true);
var layersList = [lyr_ChimerosMap_modified_0,lyr_Grid_1];
lyr_Grid_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Opacity': 'Opacity', 'Discovery level': 'Discovery level', 'Landmarks': 'Landmarks', 'Histories': 'Histories', });
lyr_Grid_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Opacity': 'Range', 'Discovery level': 'TextEdit', 'Landmarks': 'TextEdit', 'Histories': 'TextEdit', });
lyr_Grid_1.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'Opacity': 'no label', 'Discovery level': 'inline label - always visible', 'Landmarks': 'inline label - always visible', 'Histories': 'inline label - always visible', });
lyr_Grid_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});