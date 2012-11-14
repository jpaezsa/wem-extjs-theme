Ext.define('TestDataViewModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'key', type:'string' },
        { name: 'icon', type:'string' },
        { name: 'text', type:'string' },
        { name: 'description', type:'string' }
    ]
});

Ext.create('Ext.data.Store', {
    model: 'TestDataViewModel',
    id: 'testDataViewStore',
    data: [
        { key: '1', icon:'../resources/images/icons/32x32/cubes_blue.png', text: 'Lisa', description: '555-111-1234' },
        { key: '2', icon:'../resources/images/icons/32x32/cubes_blue.png', text: 'Bart', description: '555-111-1234' },
        { key: '3', icon:'../resources/images/icons/32x32/cubes_blue.png', text: 'Homer', description: '555-111-1234' },
        { key: '4', icon:'../resources/images/icons/32x32/cubes_blue.png', text: 'Marge', description: '555-111-1234' }
    ]
});

function createDataView() {
    return {
        xtype: 'container',
        items: [
            {
                xtype: 'component',
                html: '<h2>Data View</h2>' +
                      '<div>Simple generic data view (temporary name). Can be used when a grid is not needed. Example: The user store selector</div>' +
                      '<div>Fields: iconCls, text, description</div>'
            },
            new Admin.view.DataView({
                store: Ext.data.StoreManager.lookup('testDataViewStore'),
                listeners: {
                    itemclick: function(item, record) {
                        alert('Clicked ' + record.data.text);
                    }
                }
            })
        ]
    }

}

function createDataViewForFeedback() {
    return new Admin.view.DataView({
        store: Ext.data.StoreManager.lookup('testDataViewStore'),
        autoScroll: true
    })

}