Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        border: false,
        padding: '10 20',
        items: [
            {
                region: 'center',
                cls: 'admin-std-panel',
                border: false,
                defaults: {
                    margin: '0 0 20 0',
                    padding: '0 0 20 0',
                    style: {
                        borderBottom: '1px solid #ccc'
                    }
                },
                items: [
                    {
                        xtype: 'component',
                        html: '<h1>Admin Components</h1>'
                    },
                    createSelectedItemContainer(),
                    createTypographyContainer(),
                    getStdButtonsContainer(),
                    createWindowConfigContainer(),
                    createBaseTable(),
                    createTreePanel()
                ]
            }
        ]

    });
});

