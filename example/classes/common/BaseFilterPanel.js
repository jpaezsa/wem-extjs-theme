Ext.define('BaseFilterPanel', {
    xtype: 'baseFilterPanel',
    extend: 'Ext.panel.Panel',
    width: 205,
    bodyCls: 'admin-std-panel admin-filter-panel',
    autoScroll: true,
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }

});
