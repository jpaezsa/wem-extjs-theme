Ext.application({
    name: 'App',
    appFolder: 'app',
    requires: [
        'Admin.view.BaseGridPanel',
        'Admin.view.BaseFeedbackPanel',
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
                        createSelectedItemContainer(),
                        createTypographyContainer(),
                        createButtonsContainer(),
                        createWindowConfigContainer(),
                        createGridsContainer(),
                        createTreePanel(),
                        createWindowConfigContainer(),
                        createFormWidgets()
                    ]
                }
            ]
        });
    }
});


