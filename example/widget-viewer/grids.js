function createSimpsonsStore (storeId) {
    return Ext.create('Ext.data.Store', {
        storeId: storeId,
        fields:['name', 'email', 'phone'],
        data:{'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });
}


function createGridsContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            margin: '0 0 10 0'
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Grid</h2>'
            },
            {
                xtype: 'container',
                layout: {
                    type: 'table',
                    width: '100%',
                    tableAttrs: {
                        style: {
                            width: '100%'
                        }
                    },
                    columns: 2,
                    tdAttrs: {
                        valign: 'top',
                        style: {
                            padding: '0 10px 10px 0'

                        }
                    }
                },
                items: [
                    {
                        xtype: 'grid',
                        title: 'Simpsons',
                        store: createSimpsonsStore('simpsonsStore1'),
                        columns: [
                            { text: 'Name',  dataIndex: 'name' },
                            { text: 'Email', dataIndex: 'email', flex: 1 },
                            { text: 'Phone', dataIndex: 'phone' }
                        ]
                    },
                    {
                        xtype: 'grid',
                        store: createSimpsonsStore('simpsonsStore2'),
                        columns: [
                            { text: 'Name',  dataIndex: 'name' },
                            { text: 'Email', dataIndex: 'email', flex: 1 },
                            { text: 'Phone', dataIndex: 'phone' }
                        ]
                    },
                    {
                        colspan: 2,
                        xtype: 'baseGridPanel',
                        style: {
                            border: '1px solid #eee'
                        },
                        store: createSimpsonsStore('simpsonsStore3'),
                        selModel: Ext.create('Ext.selection.CheckboxModel', {
                            headerWidth: 42
                        }),
                        columns: [
                            { text: 'Name',  dataIndex: 'name' },
                            { text: 'Email', dataIndex: 'email', flex: 1 },
                            { text: 'Phone', dataIndex: 'phone' }
                        ]
                    }
                ]
            }
        ]
    });
}
