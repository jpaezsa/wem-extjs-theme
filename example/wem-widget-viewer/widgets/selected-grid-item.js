function createSelectedGridItemContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            border: false,
            margin: ITEM_MARGINS
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Selected Grid Item</h2><p>Displayed when an item in a browse grid is selected</p>'
            },
            {
                html: selectedItemLargeBoxHtml
            },
            {
                html: selectedItemSmallBoxHtml + selectedItemSmallBoxHtml + selectedItemSmallBoxHtml
            }
        ]
    });
}
