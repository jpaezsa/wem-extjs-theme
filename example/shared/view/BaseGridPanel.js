Ext.define('Admin.view.BaseGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.baseGridPanel',
    deferRowRender: true,
    cls: 'admin-std-grid',
    viewConfig: {
        stripeRows: true
    },
    hideHeaders: true,
    loadMask: true,

    initComponent: function () {
        var me = this;
        if (me.getSelectionModel().$className === 'Ext.selection.CheckboxModel') {
            me.tbar = {
                xtype: 'toolbar',
                cls: 'admin-std-white-toolbar',
                store: me.store,
                gridPanel: me,
                plugins: ['Admin.plugins.adminGridToolbarPlugin']
            };
        }
        me.callParent(arguments);
    }

});

