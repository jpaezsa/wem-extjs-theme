Ext.define('Example.view.DetailsPanel', {
    alias: 'widget.exampleDetailsPanel',
    extend: 'Admin.view.BaseDetailsPanel',
    autoScroll: true,

    initComponent: function () {
        var me = this;
        me.items = [
            getSelectedItemBoxes()
        ];

        this.callParent(arguments);
    }

});
