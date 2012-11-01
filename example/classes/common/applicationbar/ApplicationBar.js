
Ext.define('ApplicationBar', {
    xtype: 'applicationBar',
    ui: 'admin-appbar',
    extend: 'Ext.toolbar.Toolbar',
    items: [
        {
            xtype: 'applicationButton'
        },
        {
            xtype: 'tbfill'
        },
        {
            xtype: 'tbtext',
            text: 'sitename/path/to/press-releases'

        },
        {xtype: 'tbfill'},
        {
            xtype: 'button',
            cls: 'admin-std-button-red',
            text: 'Live'
        }
    ]
});
