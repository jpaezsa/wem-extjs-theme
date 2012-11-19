Ext.application({
    name: 'App',
    appFolder: 'app',
    requires: [
        'Admin.view.BaseGridPanel',
        'Admin.view.BaseConfirmationDialog',
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
                        padding: '15 30'
                    },
                    items: [
                        createSelectedGridItemContainer(),
                        createTypographyContainer(),
                        createWindowConfigContainer(),
                        createGridsContainer(),
                        createDataView(),
                        createToolbarContainer(),
                        createButtonsContainer(),
                        createTreePanel(),
                        createFormWidgets()
                    ]
                }
            ]
        });
    }
});


