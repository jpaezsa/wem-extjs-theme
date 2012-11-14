Ext.define('Example.view.BrowsePanel', {
    alias: 'widget.exampleBrowsePanel',
    extend: 'Ext.panel.Panel',
    requires: [
        'Example.view.GridPanel',
        'Example.view.DetailsPanel'
    ],
    layout: 'border',
    border: false,
    tbar: [
        {
            text: 'New',
            scale: 'medium',
            xtype: 'splitbutton',
            menu: new Ext.menu.Menu({
                items: [
                    {text: 'Item 1'},
                    {text: 'Item 2'}
                ]
            })
        },
        {
            text: 'Edit',
            scale: 'medium'
        },
        {
            text: 'Open',
            scale: 'medium'
        },
        {
            text: 'Delete',
            scale: 'medium',
            disabled: true
        },
        {
            text: 'Duplicate',
            scale: 'medium'
        },
        {
            text: 'Move',
            scale: 'medium'
        }
    ],
    defaults: {
        split: true
    },
    items: [
        {
            region: 'north',
            xtype: 'exampleGridPanel',
            flex: 2
        },
        {
            region: 'center',
            xtype: 'exampleDetailsPanel',
            flex: 1
        }
    ]

});

