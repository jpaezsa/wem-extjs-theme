Ext.define('Example.view.BrowsePanel', {
    xtype: 'exampleBrowsePanel',
    extend: 'Ext.panel.Panel',
    requires: [
        'Example.view.GridPanel',
        'Example.view.DetailsPanel'
    ],
    layout: 'border',
    tbar: [
        {
            text: 'New',
            xtype: 'splitbutton',
            menu: new Ext.menu.Menu({
                items: [
                    {text: 'Item 1'},
                    {text: 'Item 2'}
                ]
            })
        },
        {
            text: 'Edit'
        },
        {
            text: 'Open'
        },
        {
            text: 'Delete',
            disabled: true
        },
        {
            text: 'Duplicate'
        },
        {
            text: 'Move'
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
            flex: 1,
            region: 'center',
            xtype: 'exampleDetailsPanel'
        }
    ]

});

