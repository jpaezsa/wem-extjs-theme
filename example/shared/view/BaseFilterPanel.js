Ext.define('Admin.view.BaseFilterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseFilterPanel',
    width: 205,
    bodyCls: 'admin-std-panel admin-filter-panel',
    autoScroll: true,
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }

});
