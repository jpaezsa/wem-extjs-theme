// Globals galore
// None of this should be used in production!

var FILTER = {
    spaces: ['Enonic.com', 'Intranet', 'Extranet', 'Publisering.no', 'Monitor'],
    types: ['Person', 'Article', 'Log', 'Calendar', 'Document', 'Term', 'Discussion', 'Comment', 'Form', 'Image', 'File', 'Quiz', 'FAQ', 'CaseStudy', 'Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu'],
    lastModified: ['Today', 'Yesterday', '< 1 week', '< 1 month']
};

var selectedItemLargeBoxHtml = '<div class="admin-selected-item-box large clearfix" id="selected-item-box-user:enonic:mer"><div class="left">' +
                               '<img alt="Morten Eriksen" src="../resources/images/user_enonic_mer.png"></div>' +
                               '<div class="center"><h6>Morten &Oslash;. Eriksen</h6><p>enonic\\mer</p></div>' +
                               '<div class="right"><a href="javascript:;" class="remove-selection" id="remove-from-selection-button-user:enonic:mer"></a></div></div>';

var selectedItemSmallBoxHtml = '<div class="admin-selected-item-box small clearfix" id="selected-item-box-user:enonic:mer">' +
                               '<div class="admin-selected-item-box left">' +
                               '<img alt="Morten &Oslash;. Eriksen" src="../resources/images/user_enonic_mer.png"></div>' +
                               '<div class="admin-selected-item-box center">Morten &Oslash;. Eriksen</div>' +
                               '<div class="admin-selected-item-box right"><a href="javascript:;" class="remove-selection" id="remove-from-selection-button-user:enonic:mer"></a></div></div>';


function createFilterCheckbox (label, inputValue) {
    var title = 'title="' + label + '"';
    return {
        xtype: 'checkboxfield',
        boxLabel: Ext.String.ellipsis(label, 17, false),
        name: label,
        inputValue: inputValue,
        inputAttrTpl: title,
        boxLabelAttrTpl: title
    }
}

function generateCheckboxes(filterType) {
    var checkBoxes = [], i;
    var sorted = filterType.sort();
    for (i = 0; i < sorted.length; i++) {
        checkBoxes.push(createFilterCheckbox(sorted[i], i));
    }
    return checkBoxes;
}

function generateLastModifiedCheckboxes() {
    var checkBoxes = [], i;
    for (i = 0; i < FILTER.lastModified.length; i++) {
        checkBoxes.push(createFilterCheckbox(FILTER.lastModified[i], i));
    }
    return checkBoxes;
}

function getStore() {
    var myData = [
        ['3m Co', 'Draft', 71.72, 0.02, 0.03, '9/1 12:00am'],
        ['Alcoa Inc', 'Online', 29.01, 0.42, 1.47, '9/1 12:00am'],
        ['Altria Group Inc', 'Online', 83.81, 0.28, 0.34, '9/1 12:00am'],
        ['American Express Company', 'Online', 52.55, 0.01, 0.02, '9/1 12:00am'],
        ['American International Group, Inc.', 'Online', 64.13, 0.31, 0.49, '9/1 12:00am'],
        ['AT&T Inc.', 'Pending', 31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.', 'Modified / Online', 75.43, 0.53, 0.71, '9/1 12:00am'],
        ['Caterpillar Inc.', 'Modified / Expired',  67.27, 0.92, 1.39, '9/1 12:00am'],
        ['Citigroup, Inc.', 'Expired', 49.37, 0.02, 0.04, '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 'Draft /-', 40.48, 0.51, 1.28, '9/1 12:00am']
    ];

    return Ext.create('Ext.data.ArrayStore', {
        fields: [
            {name: 'company'},
            {name: 'status'},
            {name: 'price', type: 'float', convert: null},
            {name: 'change', type: 'float', convert: null},
            {name: 'pctChange', type: 'float', convert: null},
            {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
        sorters: {
            property: 'company',
            direction: 'ASC'
        },
        data: myData,
        pageSize: 8
    });
}

function getSelectedItemBoxes() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            border: false
        },
        items: [
            {
                html: selectedItemLargeBoxHtml + selectedItemLargeBoxHtml + selectedItemLargeBoxHtml + selectedItemLargeBoxHtml + selectedItemLargeBoxHtml + selectedItemLargeBoxHtml + selectedItemLargeBoxHtml
            },
            {
                html: selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml
            }
        ]
    });
}

function getStatusIcon(status) {
    var icon;

    switch (status) {
    case 'Draft':
        icon = '&#x25CF;';
        break;
    case 'Pending':
        icon = '&#x2161;';
        break;
    case 'Online':
        icon = '&#x25B8;';
        break;
    case 'Modified / Online':
        icon = '&#x25CF;';
        break;
    case 'Modified / Expired':
        icon = '&#x25CF;';
        break;
    case 'Expired':
        icon = '&#x25CF;';
        break;
    case 'Draft /-':
        icon = '&#x25CF;';
        break;
    default:
        icon = '';
        break;
    }
    return icon;
}