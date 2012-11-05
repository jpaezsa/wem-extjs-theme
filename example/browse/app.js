Ext.application({
    name: 'App',
    appFolder: 'app',
    requires: [
        'Admin.view.applicationbar.ApplicationBar',
        'Example.view.FilterPanel',
        'Example.view.BrowsePanel'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'north',
                    xtype: 'applicationBar'
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

