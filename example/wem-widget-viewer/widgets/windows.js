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
                        text: 'Snow Window',
                        scale: 'small',
                        handler: function (btn) {
                            var window = new Admin.view.BaseWindow({
                                id: 'testWindow',
                                title: 'Window Title',
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
                        text: 'Feedback',
                        scale: 'small',
                        handler: function (btn) {
                            if (!Ext.getCmp('testFeedbackWindow')) {
                                var feedbackWindow = new Admin.view.BaseFeedbackPanel({
                                    id: 'testFeedbackWindow',
                                    feedbackTitle: 'Something has happened',
                                    height: 180,
                                    contentWidth: 420,
                                    items: [
                                        {
                                            xtype: 'component',
                                            html: '<div>Like this text component, add items here. Use <i>contentWidth</i> to set the width of the panel\'s content</div>',
                                            margins: '0 0 10 0'
                                        }
                                    ]
                                });
                                feedbackWindow.doShow();
                            }
                        }
                    }


                ]
            }
        ]
    });
}