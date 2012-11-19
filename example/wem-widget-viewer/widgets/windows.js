function createWindowConfigContainer() {
    return Ext.create('Ext.container.Container', {
        cls: 'admin-panel',
        defaults: {
            margin: ITEM_MARGINS
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Window</h2>'
            },
            {
                xtype: 'container',
                defaults: {
                    margin: '0 5 0 0'
                },
                items: [

                    {
                        xtype: 'button',
                        text: 'Regular Window',
                        scale: 'small',
                        handler: function (btn) {
                            var window = new Admin.view.BaseWindow({
                                id: 'testWindow',
                                title: 'Window Title',
                                width: 720,
                                iconCls: 'icon-content-24',
                                buttons: [
                                    {
                                        xtype: 'button',
                                        text: 'Insert (5)',
                                        handler: function () {
                                            alert('Inserted 5 items');
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Do something else',
                                        handler: function () {
                                            alert('Did something else instead');
                                        }
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'component',
                                        html: '<p>Mixed collection. Add items here</p><ul><li>Add custom buttons using the buttons configuration</li></ul>'
                                    }
                                ]
                            });
                            window.doShow();
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Confirmation Dialog',
                        scale: 'small',
                        handler: function (btn) {
                            if (!Ext.getCmp('testConfirmationDialog')) {
                                var confirmationWindow = new Admin.view.BaseConfirmationDialog({
                                    id: 'testConfirmationDialog',
                                    headerText: 'Continue?',
                                    contentWidth: 520,
                                    height: 200,
                                    items: [
                                        {
                                            xtype: 'component',
                                            html: '<div>Use this dialog when telling the user to confirm an action. <br/>Supports a mixed collection of ExtJS items like this text component. Use <i>contentWidth</i> to adjust the width of the window\'s content</div>',
                                            margins: '0 0 10 0'
                                        }
                                    ]
                                });
                                confirmationWindow.doShow();
                            }
                        }
                    }


                ]
            }
        ]
    });
}
