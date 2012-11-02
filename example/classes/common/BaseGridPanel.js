Ext.define('BaseGridPanel', {
    extend: 'Ext.grid.Panel',
    xtype: 'baseGridPanel',
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
                plugins: ['adminGridToolbarPlugin']
            };
        }
        me.callParent(arguments);
    }

});

