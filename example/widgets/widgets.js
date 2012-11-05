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

function createWindowConfigContainer() {
    return Ext.create('Ext.container.Container', {
        cls: 'admin-std-panel',
        defaults: {
            margin: '0 10 0 0'
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Windows</h2>'
            },
            {
                xtype: 'container',
                layout: {
                    type: 'table',
                    columns: 3,
                    tdAttrs: {
                        valign: 'top',
                        width: 150
                    }
                },
                items: [
                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'checkbox',
                                itemId: 'maskCheckbox',
                                boxLabel: 'Mask'
                            },
                            {
                                xtype: 'checkbox',
                                itemId: 'anchorCheckbox',
                                boxLabel: 'Show at anchor'
                            }
                        ]

                    },
                    {
                        xtype: 'radiogroup',
                        fieldLabel: 'Color',
                        labelWidth: 40,
                        width: 300,
                        itemId: 'colorRadioGroup',
                        columns: 1,
                        vertical: true,
                        items: [
                            { boxLabel: 'White', name: 'colorRadiobutton', inputValue: 'admin-std-window-white', checked: true },
                            { boxLabel: 'Enonic Black (for text)', name: 'colorRadiobutton', inputValue: 'admin-std-window-dark-black' },
                            { boxLabel: 'Dark Purple (for text)', name: 'colorRadiobutton', inputValue: 'admin-std-window-dark-purple' }
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Open Window',
                scale: 'small',
                handler: function(btn) {
                    var useMask = Ext.ComponentQuery.query('#maskCheckbox', btn.up())[0].getValue();
                    var backgroundCls = Ext.ComponentQuery.query('#colorRadioGroup', btn.up())[0].getValue()['colorRadiobutton'];
                    var showAtAnchor = Ext.ComponentQuery.query('#anchorCheckbox', btn.up())[0].getValue();

                    if (!Ext.getCmp('testAdminWindow')) {
                        var win = new Admin.view.BaseWindow({
                            id: 'testAdminWindow',
                            title: 'Window 1 Title',
                            backgroundCls: backgroundCls,
                            mask: useMask,
                            anchor: showAtAnchor ? btn : null
                        });

                        win.doShow();
                    }
                }
            }
        ]
    });
}


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

function createTypographyContainer() {
    return Ext.create('Ext.container.Container', {
        items: [
            {
                xtype: 'component',
                html: '<h2>Typography</h2>'
            },
            {
                xtype: 'component',
                html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>'
                          + '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>'
                          + '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>'
                    + '<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>'

            }
        ]
    });
}

function createSimpsonsStore (storeId) {
    return Ext.create('Ext.data.Store', {
        storeId: storeId,
        fields:['name', 'email', 'phone'],
        data:{'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });
}


function createTableContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            margin: '0 0 10 0'
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Grid</h2>'
            },
            {
                xtype: 'container',
                layout: {
                    type: 'table',
                    width: '100%',
                    tableAttrs: {
                        style: {
                            width: '100%'
                        }
                    },
                    columns: 2,
                    tdAttrs: {
                        valign: 'top',
                        style: {
                            padding: '0 10px 10px 0'

                        }
                    }
                },
                items: [
                    {
                        xtype: 'grid',
                        title: 'Simpsons',
                        store: createSimpsonsStore('simpsonsStore1'),
                        columns: [
                            { text: 'Name',  dataIndex: 'name' },
                            { text: 'Email', dataIndex: 'email', flex: 1 },
                            { text: 'Phone', dataIndex: 'phone' }
                        ]
                    },
                    {
                        xtype: 'grid',
                        store: createSimpsonsStore('simpsonsStore2'),
                        columns: [
                            { text: 'Name',  dataIndex: 'name' },
                            { text: 'Email', dataIndex: 'email', flex: 1 },
                            { text: 'Phone', dataIndex: 'phone' }
                        ]
                    },
                    {
                        colspan: 2,
                        xtype: 'baseGridPanel',
                        style: {
                            border: '1px solid #eee'
                        },
                        store: createSimpsonsStore('simpsonsStore3'),
                        selModel: Ext.create('Ext.selection.CheckboxModel', {
                            headerWidth: 42
                        }),
                        columns: [
                            { text: 'Name',  dataIndex: 'name' },
                            { text: 'Email', dataIndex: 'email', flex: 1 },
                            { text: 'Phone', dataIndex: 'phone' }
                        ]
                    }
                ]
            }
        ]
    });
}


function createTreeStore () {
    return Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "detention", leaf: true },
                { text: "homework", expanded: true, children: [
                    { text: "book report", leaf: true },
                    { text: "alegrbra", leaf: true}
                ] },
                { text: "buy lottery tickets", leaf: true }
            ]
        }
    });
}

function createTreePanel () {
    return Ext.create('Ext.container.Container', {
        items: [
            {
                xtype: 'component',
                html: '<h2>Tree</h2>'
            },
            {
                xtype: 'treepanel',
                title: 'Simple Tree',
                store: createTreeStore(),
                rootVisible: false
            }
        ]
    });
}
