Ext.define('Admin.view.BaseGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.baseGridPanel',
    requires: [
        'Admin.plugins.GridToolbarPlugin'
    ],
    deferRowRender: true,
    cls: 'admin-grid',
    viewConfig: {
        stripeRows: true
    },
    hideHeaders: true,
    loadMask: true,
    border: false,

    initComponent: function () {
        var me = this;
        if (me.getSelectionModel().$className === 'Ext.selection.CheckboxModel') {
            me.tbar = {
                xtype: 'toolbar',
                cls: 'admin-white-toolbar',
                store: me.store,
                gridPanel: me,
                plugins: ['gridToolbarPlugin']
            };
        }
        me.callParent(arguments);
    }

});

