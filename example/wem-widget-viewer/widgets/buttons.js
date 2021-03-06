function getCycleButton (scale) {
    return {
        xtype: 'cycle',
        scale: scale.toLowerCase(),
        showText: true,
        prependText: scale + ' Cycle',
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
    };
}

function getMenuButton (scale) {
    return {
        xtype: 'button',
        text: scale + ' w/menu',
        scale: scale.toLowerCase(),
        menu: [
            {text: 'Item 1'},
            {text: 'Item 2'},
            {text: 'Item 3'},
            {text: 'Item 4'}
        ]
    };
}

function getSplitButton (scale) {
    return {
        xtype: 'splitbutton',
        text: scale + ' Split',
        scale: scale,
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
    };
}

function getDisabledButton (scale, ui) {
    return {
        xtype: 'button',
        text: 'Disabled ' + scale + ' button',
        ui: ui,
        disabled: true,
        scale: scale.toLowerCase()
    };
}


function getIconButtonsContainer (iconAlign) {
    return {
        xtype: 'container',
        margin: '5 0 0 0',
        defaults: {
            margin: '0 5 0 0'
        },
        items: [
            {
                xtype: 'button',
                scale: 'small',
                iconCls: 'icon-test-16',
                iconAlign: iconAlign

            },
            {
                xtype: 'button',
                scale: 'medium',
                iconCls: 'icon-test-24',
                iconAlign: iconAlign
            },
            {
                xtype: 'button',
                scale: 'large',
                iconCls: 'icon-test-32',
                iconAlign: iconAlign
            }
        ]
    };
}

function createButtonsContainer () {
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
                                html: '<h5>Icon</h5>'
                            },
                            getIconButtonsContainer('left'),
                            getIconButtonsContainer('right'),
                            getIconButtonsContainer('top'),
                            getIconButtonsContainer('bottom')
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
                                    getMenuButton('Small'),
                                    getMenuButton('Medium'),
                                    getMenuButton('Large')
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
                                    getCycleButton('Small'),
                                    getCycleButton('Medium'),
                                    getCycleButton('Large')
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
                                    getSplitButton('small'),
                                    getSplitButton('medium'),
                                    getSplitButton('large')
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
                    },
                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'component',
                                html: '<h5>Toggle enabled</h5>'
                            },
                            {
                                xtype: 'container',
                                defaults: {
                                    margin: '0 5 0 0'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        text: 'Toggle',
                                        scale: 'small',
                                        enableToggle: true,
                                        listeners: {
                                            toggle: function (btn, pressed) {
                                                btn.setText( pressed ? 'Pressed' : 'Toggle');
                                            }
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
                                html: '<h5>Disabled</h5>'
                            },
                            {
                                xtype: 'container',
                                defaults: {
                                    margin: '0 5 0 0'
                                },
                                items: [
                                    getDisabledButton('small', 'default'),
                                    getDisabledButton('small', 'red'),
                                    getDisabledButton('small', 'grey'),
                                    getDisabledButton('medium', 'default'),
                                    getDisabledButton('medium', 'red'),
                                    getDisabledButton('medium', 'grey'),
                                    getDisabledButton('large', 'default'),
                                    getDisabledButton('large', 'red'),
                                    getDisabledButton('large', 'grey')
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
}
