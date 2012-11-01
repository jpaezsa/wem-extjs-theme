Ext.onReady(function () {
    Ext.manifest = {
        widgets: [
            {
                xtype: 'widget.toolbar',
                ui: 'admin-appbar'
            },
            {
                xtype: 'widget.button',
                ui: 'admin-appbar-button'
            }
        ]
    };
});