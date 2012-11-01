Ext.define('BaseDetailsPanel', {
    xtype: 'baseDetailsPanel',
    extend: 'Ext.panel.Panel',
    autoScroll: true,
    defaults: {
        cls: 'admin-std-panel'
    },
    initComponent: function () {
        this.tbar = {
            xtype: 'toolbar',
            style: {
                borderTop: '1px solid #eee !important'
            },
            cls: 'admin-std-white-toolbar',
            items: [
                {
                    xtype: 'tbtext',
                    text: 'No items selected - Choose from list above - <a href="">Clear selection</a>'
                }
            ]
        };
        this.callParent(arguments);
    }

});
