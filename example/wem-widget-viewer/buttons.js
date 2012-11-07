function createButtonsContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            margin: '0 10 0 0'
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Buttons</h2>'
            },
            {
                xtype: 'button',
                text: 'Small',
                scale: 'small'
            },
            {
                xtype: 'button',
                text: 'Medium',
                scale: 'medium'
            },
            {
                xtype: 'button',
                text: 'Large',
                scale: 'large'
            },
            {
                xtype: 'button',
                text: 'Small w/menu',
                scale: 'small',
                menu: [
                    {text: 'Item 1'},
                    {text: 'Item 2'},
                    {text: 'Item 3'},
                    {text: 'Item 4'}
                ]
            },
            {
                xtype: 'cycle',
                showText: true,
                prependText: 'Small Cycle ',
                scale: 'small',
                menu: {
                    items: [
                        {
                            text: 'JSON',
                            checked: true
                        },
                        {
                            text: 'XML'
                        },
                        {
                            text: 'Text'
                        }
                    ]
                }
            },
            {
                xtype: 'splitbutton',
                text: 'Small Split',
                menu: new Ext.menu.Menu({
                    items: [
                        {
                            text: 'Item 1'
                        },
                        {
                            text: 'Item 2'
                        }
                    ]
                })
            },
            {
                xtype: 'component',
                html: '<h4>Colors</h4>',
            },
            {
                xtype: 'button',
                ui: 'admin-button-grey',
                text: 'Grey',
                scale: 'small'
            },
            {
                xtype: 'button',
                ui: 'admin-button-red',
                text: 'Red',
                scale: 'small'
            }
        ]
    });
}