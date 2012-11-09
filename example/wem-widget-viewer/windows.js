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
                items: [
                    {
                        xtype: 'component',
                        html: '<h3>Window</h3>'
                    },
                    {
                        xtype: 'button',
                        text: 'Show',
                        scale: 'small',
                        handler: function (btn) {
                            var window = new Admin.view.BaseWindow({
                                id: 'testWindow',
                                title: 'Window Title',
                                iconCls: 'icon-content-24',
                                items: [
                                    {
                                        xtype: 'component',
                                        html: '<p>Mixed collection. Add items here</p><p>Windows are usually appended to a screen</p>'
                                    }
                                ]
                            });
                            window.doShow();
                        }
                    },
                    {
                        xtype: 'component',
                        html: '<h3>Feedback</h3>'
                    },
                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Feedback',
                                scale: 'small',
                                handler: function (btn) {
                                    if (!Ext.getCmp('testFeedbackWindow')) {
                                        var feedbackWindow = new Admin.view.BaseFeedbackPanel({
                                            id: 'testFeedbackWindow',
                                            feedbackTitle: 'Feedback Title',
                                            items: [
                                                {
                                                    xtype: 'component',
                                                    html: '<p>Mixed collection. Add items here</p><p>For global feedback, append to viewport or body element</p>'
                                                }
                                            ]
                                        });
                                        feedbackWindow.doShow();
                                    }
                                }
                            }
                        ]
                    },
                ]
            }
        ]
    });
}
