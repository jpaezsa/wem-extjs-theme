Ext.define('BaseFilterPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'baseFilterPanel',
    width: 205,
    bodyCls: 'admin-std-panel admin-filter-panel',
    autoScroll: true,
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }

});
