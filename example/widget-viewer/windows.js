
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
