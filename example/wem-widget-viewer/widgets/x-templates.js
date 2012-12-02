function createXTemplates() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            border: false,
            margin: ITEM_MARGINS
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>X Templates</h2>'
            },
            {
                xtype: 'component',
                html: '<h3>Selected grid item</h3>'
            },
            {
                xtype: 'component',
                html: '<h4>Large</h4>'
            },
            {
                html: selectedItemLargeBoxHtml + selectedItemLargeBoxHtml
            },
            {
                xtype: 'component',
                html: '<h4>Small</h4>'
            },
            {
                html: selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml
            }
        ]
    });
}
