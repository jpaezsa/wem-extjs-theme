Ext.application({
    name: 'App',
    appFolder: 'app',
    requires: [
        'Admin.view.topbar.TopBarPanel',
        'Example.view.FilterPanel',
        'Example.view.BrowsePanel'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'north',
                    xtype: 'topBarPanel'
                },
                {
                    region: 'west',
                    xtype: 'exampleFilterPanel'
                },
                {
                    region: 'center',
                    xtype: 'exampleBrowsePanel'
                }
            ]
        });
    }
});

