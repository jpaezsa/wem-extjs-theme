Ext.define('Admin.view.DataView', {
    extend: 'Ext.view.View',
    alias: 'widget.dataView',
    loadMask: true,
    store: '',
    itemSelector: 'div.admin-data-view',
    trackOver: true,
    overItemCls: 'admin-data-view-over',

    initComponent: function () {
        var me = this;
        var tpl = new Ext.XTemplate(
            '<tpl for=".">',
            '   <div class="admin-data-view">',
            '       <div class="admin-data-view-cell"><img src="{icon}"/></div>',
            '       <div class="admin-data-view-cell">',
            '           <h6>{text}</h6>',
            '           <div>{description}</div>',
            '       </div>',
            '   </div>',
            '</tpl>'
        );
        me.tpl = tpl;
        me.emptyText = 'No items available';

        me.callParent(arguments);
    }

});

