Ext.define('Admin.view.BaseDetailsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseDetailsPanel',
    autoScroll: true,
    defaults: {
        cls: 'admin-panel'
    },
    initComponent: function () {
        this.tbar = {
            xtype: 'toolbar',
            cls: 'admin-white-toolbar',
            items: [
                {
                    xtype: 'tbtext',
                    text: 'No items selected - Choose from list above - <a href="javascript:;">Clear selection</a>'
                }
            ]
        };
        this.callParent(arguments);
    }

});
