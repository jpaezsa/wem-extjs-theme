Ext.define('ExampleDetailsPanel', {
    xtype: 'exampleDetailsPanel',
    extend: 'BaseDetailsPanel',
    autoScroll: true,

    initComponent: function () {
        var me = this;
        me.items = [
            getSelectedItemBoxes()
        ];

        this.callParent(arguments);
    }

});
