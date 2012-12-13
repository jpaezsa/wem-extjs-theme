Ext.application({
    name: 'App',
    appFolder: 'app',
    requires: [
        'Admin.view.BaseGridPanel',
        'Admin.view.BaseConfirmationDialog',
        'Admin.view.BaseWindow',
        'Admin.view.FeedbackBox'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            padding: '0',
            items: [
                {
                    region: 'center',
                    id: 'center',
                    layout: 'card',
                    border: false,
                    defaults: {
                        padding: '15 30'
                    },
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            padding: '0 0 0 10',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'back-button',
                                    text: '&lt;',
                                    margin: '0 5 0 0',
                                    handler: function () {
                                        WemWidgets.navigate('prev');
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'forward-button',
                                    text: '&gt;',
                                    handler: function () {
                                        WemWidgets.navigate('next');
                                    }
                                }
                            ]
                        }
                    ],

                    items: [
                        createXTemplates(),
                        createTypographyContainer(),
                        createWindowConfigContainer(),
                        createGridsContainer(),
                        createDataView(),
                        createToolbarContainer(),
                        createButtonsContainer(),
                        createTreePanel(),
                        createFormWidgets()
                    ]
                }
            ]
        });

        WemWidgets.createCombo();
    }
});

var WemWidgets = {};

WemWidgets.navigate = function (direction, index) {
    var panel = Ext.getCmp('center');
    var layout = panel.getLayout();
    var combo = Ext.getCmp('navigation-combo');
    if (direction) {
        layout[direction]();
        combo.setValue(panel.items.items.indexOf(layout.getActiveItem()));
    } else {
        layout.setActiveItem(index);
    }
    WemWidgets.updateToolbarComponents();
};

WemWidgets.updateToolbarComponents = function() {
    var combo = Ext.getCmp('navigation-combo');
    var panel = Ext.getCmp('center');
    var layout = panel.getLayout();
    Ext.getCmp('back-button').setDisabled(!layout.getPrev());
    Ext.getCmp('forward-button').setDisabled(!layout.getNext());
};

WemWidgets.createCombo = function () {
    var panel = Ext.getCmp('center');
    var panelItems = panel.items.items;
    var store = Ext.create('Ext.data.Store', {
        fields: ['index', 'name'],
        data : [
        ]
    });

    for (var i = 0; i < panelItems.length; i++) {
        var header = panelItems[i].el.down('h2');
        store.add({index: i, name: header.getHTML()})
    }

    var combo = Ext.create('Ext.form.ComboBox', {
        store: store,
        id: 'navigation-combo',
        queryMode: 'local',
        displayField: 'name',
        valueField: 'index',
        listeners: {
            change: function (combo) {
                WemWidgets.navigate(null, combo.getValue());
            }
        }
    });

    var toolbar = panel.getDockedItems('toolbar[dock="top"]')[0];
    toolbar.add(combo);
    toolbar.doLayout();

    combo.setValue(2);
};

