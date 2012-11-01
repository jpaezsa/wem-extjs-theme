Ext.application({
    name: 'Admin',
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

