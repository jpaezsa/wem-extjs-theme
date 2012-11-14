function createButtonsContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            margin: ITEM_MARGINS
        },
        items: [

            {
                xtype: 'component',
                html: '<h2>Buttons</h2>'
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'component',
                                html: '<h5>Standard</h5>'
                            },
                            {
                                xtype: 'container',
                                defaults: {
                                    margin: '0 5 0 0'
                                },
                                items: [
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
                                ]
                            }
                        ]
                    },

                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'component',
                                html: '<h5>Menu Button</h5>'
                            },
                            {
                                xtype: 'container',
                                defaults: {
                                    margin: '0 5 0 0'
                                },
                                items: [
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
                                        xtype: 'button',
                                        text: 'Medium w/menu',
                                        scale: 'medium',
                                        menu: [
                                            {text: 'Item 1'},
                                            {text: 'Item 2'},
                                            {text: 'Item 3'},
                                            {text: 'Item 4'}
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Large w/menu',
                                        scale: 'large',
                                        menu: [
                                            {text: 'Item 1'},
                                            {text: 'Item 2'},
                                            {text: 'Item 3'},
                                            {text: 'Item 4'}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'component',
                                html: '<h5>Cycle Button</h5>'
                            },
                            {
                                xtype: 'container',
                                defaults: {
                                    margin: '0 5 0 0'
                                },
                                items: [
                                    {
                                        xtype: 'cycle',
                                        scale: 'small',
                                        showText: true,
                                        prependText: 'Small Cycle',
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
                                        xtype: 'cycle',
                                        scale: 'medium',
                                        showText: true,
                                        prependText: 'Medium Cycle ',
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
                                        xtype: 'cycle',
                                        scale: 'large',
                                        showText: true,
                                        prependText: 'Large Cycle ',
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
                                ]
                            }
                        ]
                    },

                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'component',
                                html: '<h5>Split Button</h5>'
                            },
                            {
                                xtype: 'container',
                                defaults: {
                                    margin: '0 5 0 0'
                                },
                                items: [
                                    {
                                        xtype: 'splitbutton',
                                        text: 'Small Split',
                                        scale: 'small',
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
                                        xtype: 'splitbutton',
                                        text: 'Medium Split',
                                        scale: 'medium',
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
                                        xtype: 'splitbutton',
                                        text: 'Large Split',
                                        scale: 'large',
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
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'component',
                                html: '<h5>Colors</h5><div>ui: red, ui: grey</div>'
                            },
                            {
                                xtype: 'container',
                                defaults: {
                                    margin: '0 5 0 0'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        ui: 'red',
                                        text: 'Red',
                                        scale: 'small'
                                    },
                                    {
                                        xtype: 'button',
                                        ui: 'grey',
                                        text: 'Grey',
                                        scale: 'small'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
}
