Ext.define('Admin.view.BaseDetailsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseDetailsPanel',

    cls: 'admin-detail',
    border: false,
    autoScroll: true,

    defaults: {
        cls: 'admin-panel',
        border: false
    },

    initComponent: function () {
        this.tbar = {
            xtype: 'toolbar',
            cls: 'admin-white-toolbar',
            items: [
                {
                    xtype: 'tbtext',
                    text: 'No items selected - Choose from list above - <a href="javascript:;">Clear selection</a>'
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Live',
                    ui: 'red',
                    scale: 'small'
                }
            ]
        };
        this.callParent(arguments);
    }

});
