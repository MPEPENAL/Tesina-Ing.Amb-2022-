var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
        

        var lyr_StamenTerrain_1 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        /*var lyr_CartoCdn_3 = new ol.layer.Tile({
            'title': 'Carto Cdn',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });*/
var format_HuellaurbanaAo2010_3 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2010_3 = format_HuellaurbanaAo2010_3.readFeatures(json_HuellaurbanaAo2010_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2010_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2010_3.addFeatures(features_HuellaurbanaAo2010_3);
var lyr_HuellaurbanaAo2010_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2010_3, 
                style: style_HuellaurbanaAo2010_3,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2010_3.png" /> Huella urbana. Año 2010 '
            });
var format_HuellaurbanaAo2020_4 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2020_4 = format_HuellaurbanaAo2020_4.readFeatures(json_HuellaurbanaAo2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2020_4.addFeatures(features_HuellaurbanaAo2020_4);
var lyr_HuellaurbanaAo2020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2020_4, 
                style: style_HuellaurbanaAo2020_4,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2020_4.png" /> Huella urbana. Año 2020 '
            });
var format_HuellaurbanaAo2030prediccin_5 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2030prediccin_5 = format_HuellaurbanaAo2030prediccin_5.readFeatures(json_HuellaurbanaAo2030prediccin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2030prediccin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2030prediccin_5.addFeatures(features_HuellaurbanaAo2030prediccin_5);
var lyr_HuellaurbanaAo2030prediccin_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2030prediccin_5, 
                style: style_HuellaurbanaAo2030prediccin_5,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2030prediccin_5.png" /> Huella urbana. Año 2030 (predicción)'
            });
var format_HuellaurbanaAo2040prediccin_6 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2040prediccin_6 = format_HuellaurbanaAo2040prediccin_6.readFeatures(json_HuellaurbanaAo2040prediccin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2040prediccin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2040prediccin_6.addFeatures(features_HuellaurbanaAo2040prediccin_6);
var lyr_HuellaurbanaAo2040prediccin_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2040prediccin_6, 
                style: style_HuellaurbanaAo2040prediccin_6,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2040prediccin_6.png" /> Huella urbana. Año 2040 (predicción)'
            });
var format_HuellaurbanaAo2050prediccin_7 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2050prediccin_7 = format_HuellaurbanaAo2050prediccin_7.readFeatures(json_HuellaurbanaAo2050prediccin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2050prediccin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2050prediccin_7.addFeatures(features_HuellaurbanaAo2050prediccin_7);
var lyr_HuellaurbanaAo2050prediccin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2050prediccin_7, 
                style: style_HuellaurbanaAo2050prediccin_7,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2050prediccin_7.png" /> Huella urbana. Año 2050 (predicción)'
            });
var format_HuellaurbanaAo2060prediccin_8 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2060prediccin_8 = format_HuellaurbanaAo2060prediccin_8.readFeatures(json_HuellaurbanaAo2060prediccin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2060prediccin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2060prediccin_8.addFeatures(features_HuellaurbanaAo2060prediccin_8);
var lyr_HuellaurbanaAo2060prediccin_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2060prediccin_8, 
                style: style_HuellaurbanaAo2060prediccin_8,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2060prediccin_8.png" /> Huella urbana. Año 2060 (predicción)'
            });
var format_Red_hdrica_9 = new ol.format.GeoJSON();
var features_Red_hdrica_9 = format_Red_hdrica_9.readFeatures(json_Red_hdrica_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_hdrica_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_hdrica_9.addFeatures(features_Red_hdrica_9);
var lyr_Red_hdrica_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_hdrica_9, 
                style: style_Red_hdrica_9,
                interactive: false,
                title: '<img src="styles/legend/Red_hdrica_9.png" /> Red_hídrica'
            });
var format_Redcloacal_10 = new ol.format.GeoJSON();
var features_Redcloacal_10 = format_Redcloacal_10.readFeatures(json_Redcloacal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redcloacal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redcloacal_10.addFeatures(features_Redcloacal_10);
var lyr_Redcloacal_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redcloacal_10, 
                style: style_Redcloacal_10,
                interactive: false,
                title: '<img src="styles/legend/Redcloacal_10.png" /> Red cloacal.'
            });
var format_Red_Agua_11 = new ol.format.GeoJSON();
var features_Red_Agua_11 = format_Red_Agua_11.readFeatures(json_Red_Agua_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_Agua_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_Agua_11.addFeatures(features_Red_Agua_11);
var lyr_Red_Agua_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_Agua_11, 
                style: style_Red_Agua_11,
                interactive: false,
                title: '<img src="styles/legend/Red_Agua_11.png" /> Red_Agua'
            });
var format_OTBN_12 = new ol.format.GeoJSON();
var features_OTBN_12 = format_OTBN_12.readFeatures(json_OTBN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTBN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTBN_12.addFeatures(features_OTBN_12);
var lyr_OTBN_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTBN_12, 
                style: style_OTBN_12,
                interactive: true,
    title: 'OTBN<br />\
    <img src="styles/legend/OTBN_12_0.png" /> Protección Boscosa<br />\
    <img src="styles/legend/OTBN_12_1.png" /> Mantenimiento de cobertura boscosa<br />\
    <img src="styles/legend/OTBN_12_2.png" /> Uso potencial productivo<br />\
    <img src="styles/legend/OTBN_12_3.png" /> Área transformada<br />'
        });

lyr_GoogleSatelite_0.setVisible(false);lyr_StamenTerrain_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(true);lyr_HuellaurbanaAo2010_3.setVisible(false);lyr_HuellaurbanaAo2020_4.setVisible(false);lyr_HuellaurbanaAo2030prediccin_5.setVisible(false);lyr_HuellaurbanaAo2040prediccin_6.setVisible(false);lyr_HuellaurbanaAo2050prediccin_7.setVisible(false);lyr_HuellaurbanaAo2060prediccin_8.setVisible(false);lyr_Red_hdrica_9.setVisible(false);lyr_Redcloacal_10.setVisible(false);lyr_Red_Agua_11.setVisible(false);lyr_OTBN_12.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_StamenTerrain_1,lyr_OpenStreetMap_2,lyr_HuellaurbanaAo2010_3,lyr_HuellaurbanaAo2020_4,lyr_HuellaurbanaAo2030prediccin_5,lyr_HuellaurbanaAo2040prediccin_6,lyr_HuellaurbanaAo2050prediccin_7,lyr_HuellaurbanaAo2060prediccin_8,lyr_Red_hdrica_9,lyr_Redcloacal_10,lyr_Red_Agua_11,lyr_OTBN_12];
lyr_HuellaurbanaAo2010_3.set('fieldAliases', {'DN': 'DN', });
lyr_HuellaurbanaAo2020_4.set('fieldAliases', {'DN': 'DN', });
lyr_HuellaurbanaAo2030prediccin_5.set('fieldAliases', {'DN': 'DN', });
lyr_HuellaurbanaAo2040prediccin_6.set('fieldAliases', {'DN': 'DN', });
lyr_HuellaurbanaAo2050prediccin_7.set('fieldAliases', {'DN': 'DN', });
lyr_HuellaurbanaAo2060prediccin_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Red_hdrica_9.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Redcloacal_10.set('fieldAliases', {'fid': 'fid', 'FECHA_ALTA': 'FECHA_ALTA', 'ID_CATEGOR': 'ID_CATEGOR', 'DESC_CATEG': 'DESC_CATEG', 'ID_ESTADO': 'ID_ESTADO', 'DESC_ESTAD': 'DESC_ESTAD', 'ID_LOC': 'ID_LOC', 'ID_TIPO_SE': 'ID_TIPO_SE', 'MATERIAL': 'MATERIAL', 'DESC_MATER': 'DESC_MATER', 'DIAM_NOMIN': 'DIAM_NOMIN', 'NUM_SISTEM': 'NUM_SISTEM', 'OS_REFEREN': 'OS_REFEREN', 'ID_BAR': 'ID_BAR', 'DESC_BAR': 'DESC_BAR', 'LNG_TRAMO': 'LNG_TRAMO', });
lyr_Red_Agua_11.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'E1402_': 'E1402_', 'E1402_ID': 'E1402_ID', 'CODIGO': 'CODIGO', 'ANCHO': 'ANCHO', 'ANCHOMED': 'ANCHOMED', 'NOMBRE': 'NOMBRE', 'NOM_NOR': 'NOM_NOR', 'LADOI': 'LADOI', 'LADOD': 'LADOD', 'DESDEI': 'DESDEI', 'DESDED': 'DESDED', 'HASTAI': 'HASTAI', 'HASTAD': 'HASTAD', 'COD_CALLE': 'COD_CALLE', 'NOMBRE_DGI': 'NOMBRE_DGI', 'MZAI': 'MZAI', 'MZAD': 'MZAD', 'CONTEOI': 'CONTEOI', 'CONTEOD': 'CONTEOD', 'CODINOMB': 'CODINOMB', 'COD_EJE': 'COD_EJE', 'ALUMBRADO': 'ALUMBRADO', 'AGUA': 'AGUA', 'CLOACAS': 'CLOACAS', 'TV_CLABE': 'TV_CLABE', 'GAS': 'GAS', 'TELEFONO': 'TELEFONO', 'ELECTRICO': 'ELECTRICO', 'RECOLECCIO': 'RECOLECCIO', 'BARRIDO': 'BARRIDO', 'VALOR_UNIT': 'VALOR_UNIT', 'DESDE_PAR': 'DESDE_PAR', 'HASTA_PAR': 'HASTA_PAR', 'DESDE_IMPA': 'DESDE_IMPA', 'HASTA_IMPA': 'HASTA_IMPA', 'PRE_DIR': 'PRE_DIR', 'PRE_TIPO': 'PRE_TIPO', 'NRO_DEPART': 'NRO_DEPART', 'COD_LOCALI': 'COD_LOCALI', 'SHAPE_LEN': 'SHAPE_LEN', 'VIALIDAD': 'VIALIDAD', 'TRAT_VIAL': 'TRAT_VIAL', 'VIAL': 'VIAL', 'E6433_': 'E6433_', 'E6433_ID': 'E6433_ID', 'LISTADOI': 'LISTADOI', 'LISTADOD': 'LISTADOD', 'COLECTI': 'COLECTI', 'COLECTD': 'COLECTD', 'CONSTRI': 'CONSTRI', 'CONSTRD': 'CONSTRD', 'OBSERI': 'OBSERI', 'OBSERD': 'OBSERD', });
lyr_OTBN_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CAT_GRAL': 'CAT_GRAL', 'CAT_DET': 'CAT_DET', 'Has': 'Has', 'Color': 'Color', });
lyr_HuellaurbanaAo2010_3.set('fieldImages', {'DN': 'Range', });
lyr_HuellaurbanaAo2020_4.set('fieldImages', {'DN': 'Range', });
lyr_HuellaurbanaAo2030prediccin_5.set('fieldImages', {'DN': 'Range', });
lyr_HuellaurbanaAo2040prediccin_6.set('fieldImages', {'DN': 'Range', });
lyr_HuellaurbanaAo2050prediccin_7.set('fieldImages', {'DN': 'Range', });
lyr_HuellaurbanaAo2060prediccin_8.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Red_hdrica_9.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Redcloacal_10.set('fieldImages', {'fid': 'TextEdit', 'FECHA_ALTA': 'DateTime', 'ID_CATEGOR': 'Range', 'DESC_CATEG': 'TextEdit', 'ID_ESTADO': 'Range', 'DESC_ESTAD': 'TextEdit', 'ID_LOC': 'Range', 'ID_TIPO_SE': 'Range', 'MATERIAL': 'TextEdit', 'DESC_MATER': 'TextEdit', 'DIAM_NOMIN': 'Range', 'NUM_SISTEM': 'TextEdit', 'OS_REFEREN': 'TextEdit', 'ID_BAR': 'TextEdit', 'DESC_BAR': 'TextEdit', 'LNG_TRAMO': 'TextEdit', });
lyr_Red_Agua_11.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'E1402_': 'TextEdit', 'E1402_ID': 'TextEdit', 'CODIGO': 'Range', 'ANCHO': 'Range', 'ANCHOMED': 'TextEdit', 'NOMBRE': 'TextEdit', 'NOM_NOR': 'TextEdit', 'LADOI': 'TextEdit', 'LADOD': 'TextEdit', 'DESDEI': 'TextEdit', 'DESDED': 'TextEdit', 'HASTAI': 'TextEdit', 'HASTAD': 'TextEdit', 'COD_CALLE': 'TextEdit', 'NOMBRE_DGI': 'TextEdit', 'MZAI': 'TextEdit', 'MZAD': 'TextEdit', 'CONTEOI': 'TextEdit', 'CONTEOD': 'TextEdit', 'CODINOMB': 'TextEdit', 'COD_EJE': 'TextEdit', 'ALUMBRADO': 'Range', 'AGUA': 'Range', 'CLOACAS': 'Range', 'TV_CLABE': 'Range', 'GAS': 'Range', 'TELEFONO': 'Range', 'ELECTRICO': 'Range', 'RECOLECCIO': 'Range', 'BARRIDO': 'Range', 'VALOR_UNIT': 'TextEdit', 'DESDE_PAR': 'TextEdit', 'HASTA_PAR': 'TextEdit', 'DESDE_IMPA': 'TextEdit', 'HASTA_IMPA': 'TextEdit', 'PRE_DIR': 'Range', 'PRE_TIPO': 'Range', 'NRO_DEPART': 'Range', 'COD_LOCALI': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'VIALIDAD': 'Range', 'TRAT_VIAL': 'TextEdit', 'VIAL': 'TextEdit', 'E6433_': 'TextEdit', 'E6433_ID': 'TextEdit', 'LISTADOI': 'Range', 'LISTADOD': 'Range', 'COLECTI': 'Range', 'COLECTD': 'Range', 'CONSTRI': 'Range', 'CONSTRD': 'Range', 'OBSERI': 'TextEdit', 'OBSERD': 'TextEdit', });
lyr_OTBN_12.set('fieldImages', {'OBJECTID': 'Range', 'CAT_GRAL': 'TextEdit', 'CAT_DET': 'TextEdit', 'Has': 'TextEdit', 'Color': 'TextEdit', });
lyr_HuellaurbanaAo2010_3.set('fieldLabels', {'DN': 'no label', });
lyr_HuellaurbanaAo2020_4.set('fieldLabels', {'DN': 'no label', });
lyr_HuellaurbanaAo2030prediccin_5.set('fieldLabels', {'DN': 'no label', });
lyr_HuellaurbanaAo2040prediccin_6.set('fieldLabels', {'DN': 'no label', });
lyr_HuellaurbanaAo2050prediccin_7.set('fieldLabels', {'DN': 'no label', });
lyr_HuellaurbanaAo2060prediccin_8.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Red_hdrica_9.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Redcloacal_10.set('fieldLabels', {'fid': 'no label', 'FECHA_ALTA': 'no label', 'ID_CATEGOR': 'no label', 'DESC_CATEG': 'no label', 'ID_ESTADO': 'no label', 'DESC_ESTAD': 'no label', 'ID_LOC': 'no label', 'ID_TIPO_SE': 'no label', 'MATERIAL': 'no label', 'DESC_MATER': 'no label', 'DIAM_NOMIN': 'no label', 'NUM_SISTEM': 'no label', 'OS_REFEREN': 'no label', 'ID_BAR': 'no label', 'DESC_BAR': 'no label', 'LNG_TRAMO': 'no label', });
lyr_Red_Agua_11.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'E1402_': 'no label', 'E1402_ID': 'no label', 'CODIGO': 'no label', 'ANCHO': 'no label', 'ANCHOMED': 'no label', 'NOMBRE': 'no label', 'NOM_NOR': 'no label', 'LADOI': 'no label', 'LADOD': 'no label', 'DESDEI': 'no label', 'DESDED': 'no label', 'HASTAI': 'no label', 'HASTAD': 'no label', 'COD_CALLE': 'no label', 'NOMBRE_DGI': 'no label', 'MZAI': 'no label', 'MZAD': 'no label', 'CONTEOI': 'no label', 'CONTEOD': 'no label', 'CODINOMB': 'no label', 'COD_EJE': 'no label', 'ALUMBRADO': 'no label', 'AGUA': 'no label', 'CLOACAS': 'no label', 'TV_CLABE': 'no label', 'GAS': 'no label', 'TELEFONO': 'no label', 'ELECTRICO': 'no label', 'RECOLECCIO': 'no label', 'BARRIDO': 'no label', 'VALOR_UNIT': 'no label', 'DESDE_PAR': 'no label', 'HASTA_PAR': 'no label', 'DESDE_IMPA': 'no label', 'HASTA_IMPA': 'no label', 'PRE_DIR': 'no label', 'PRE_TIPO': 'no label', 'NRO_DEPART': 'no label', 'COD_LOCALI': 'no label', 'SHAPE_LEN': 'no label', 'VIALIDAD': 'no label', 'TRAT_VIAL': 'no label', 'VIAL': 'no label', 'E6433_': 'no label', 'E6433_ID': 'no label', 'LISTADOI': 'no label', 'LISTADOD': 'no label', 'COLECTI': 'no label', 'COLECTD': 'no label', 'CONSTRI': 'no label', 'CONSTRD': 'no label', 'OBSERI': 'no label', 'OBSERD': 'no label', });
lyr_OTBN_12.set('fieldLabels', {'OBJECTID': 'no label', 'CAT_GRAL': 'header label', 'CAT_DET': 'header label', 'Has': 'header label', 'Color': 'header label', });
lyr_OTBN_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});