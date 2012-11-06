function createSelectedItemContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            border: false
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Selected Item</h2>'
            },
            {
                html: selectedItemLargeBoxHtml
            },
            {
                html: selectedItemSmallBoxHtml
            }
        ]
    });
}
