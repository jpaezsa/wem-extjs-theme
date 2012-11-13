function createDataView() {

    Ext.define('TestDataViewModel', {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'key', type:'string' },
            { name: 'iconCls', type:'string' },
            { name: 'text', type:'string' },
            { name: 'description', type:'string' }
        ]
    });

    Ext.create('Ext.data.Store', {
        model: 'TestDataViewModel',
        id: 'testDataViewStore',
        data: [
            { key: '1', iconCls:'', text: 'Lisa', description: '555-111-1234' },
            { key: '2', iconCls:'', text: 'Bart', description: '555-111-1234' },
            { key: '3', iconCls:'', text: 'Homer', description: '555-111-1234' },
            { key: '4', iconCls:'', text: 'Marge', description: '555-111-1234' }
        ]
    });

    return {
        xtype: 'container',
        items: [
            {
                xtype: 'component',
                html: '<h2>Data View</h2>' +
                      '<div>Simple data view. Can be used when a grid is not needed. Bind a data store and listeners</div>' +
                      '<div>Model fields: iconCls, text, description</div>'
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
