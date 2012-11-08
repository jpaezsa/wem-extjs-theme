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
                                items: [
                                    {
                                        xtype: 'component',
                                        html: 'Custom item ... Content goes here'
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
                                xtype: 'radiogroup',
                                fieldLabel: 'Background Color',
                                labelWidth: 110,
                                width: 300,
                                itemId: 'colorRadioGroup',
                                columns: 1,
                                vertical: true,
                                items: [
                                    { boxLabel: 'White', name: 'colorRadiobutton', inputValue: 'admin-feedback-window-white', checked: true },
                                    { boxLabel: 'Enonic Black (for text)', name: 'colorRadiobutton', inputValue: 'admin-feedback-window-dark-black' },
                                    { boxLabel: 'Dark Purple (for text)', name: 'colorRadiobutton', inputValue: 'admin-feedback-window-dark-purple' }
                                ]
                            },
                            {
                                xtype: 'button',
                                text: 'Feedback',
                                scale: 'small',
                                handler: function (btn) {
                                    var selectedBackgroundColor = Ext.ComponentQuery.query('#colorRadioGroup',
                                        btn.up())[0].getValue()['colorRadiobutton'];

                                    if (!Ext.getCmp('testFeedbackWindow')) {
                                        var feedbackWindow = new Admin.view.BaseFeedbackWindow({
                                            id: 'testFeedbackWindow',
                                            title: 'Title',
                                            backgroundColor: selectedBackgroundColor
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
