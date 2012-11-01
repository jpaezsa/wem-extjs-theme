Ext.define('ExampleFilterPanel', {
    xtype: 'exampleFilterPanel',
    extend: 'BaseFilterPanel',
    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'textfield',
                emptyText: 'Content Search',
                width: '100%',
                margin: '0 0 20 0'
            },
            {
                xtype: 'fieldset',
                title: 'Space',
                autoScroll: true,
                items: generateCheckboxes(FILTER.spaces)
            },
            {
                xtype: 'fieldset',
                title: 'Type',
                autoScroll: true,
                items: generateCheckboxes(FILTER.types)
            },
            {
                xtype: 'fieldset',
                title: 'Last Modified',
                autoScroll: true,
                items: generateLastModifiedCheckboxes()
            }
        ];
        me.callParent(arguments);
    }

});
