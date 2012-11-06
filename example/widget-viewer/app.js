Ext.application({
    name: 'App',
    appFolder: 'app',
    requires: [
        'Admin.view.BaseGridPanel',
        'Admin.view.BaseWindow'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            padding: '0',
            items: [
                {
                    region: 'center',
                    autoScroll: true,
                    border: false,
                    defaults: {
                        padding: '15 30',
                        style: {
                            borderBottom: '1px solid #ccc'
                        }
                    },
                    items: [
                        {
                            xtype: 'component',
                            html: '<h1>Admin Widgets</h1>'
                        },
                        createSelectedItemContainer(),
                        createTypographyContainer(),
                        createButtonsContainer(),
                        createWindowConfigContainer(),
                        createGridsContainer(),
                        createTreePanel()
                    ]
                }
            ]
        });
    }
});


