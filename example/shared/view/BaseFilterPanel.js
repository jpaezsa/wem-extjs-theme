Ext.define('Admin.view.BaseFilterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseFilterPanel',

    cls: 'admin-filter',
    width: 205,
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }

});
