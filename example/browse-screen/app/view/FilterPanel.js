Ext.define('Example.view.FilterPanel', {
    alias: 'widget.exampleFilterPanel',
    extend: 'Admin.view.BaseFilterPanel',
    layout: 'border',
    initComponent: function () {
        var me = this;

        var triggerButton = {
            xtype: 'trigger',
            region: 'north',
            emptyText: 'Search',
            cls: 'admin-search-trigger',
            width: '100%',
            margin: '0 20 20 0'
        };

        var facetsContainer = {
            xtype: 'container',
            region: 'center',
            autoScroll: true,
            items: [
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
            ]
        };


        me.items = [triggerButton, facetsContainer];
        me.callParent(arguments);
    }

});
