function createToolbarContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            border: false,
            margin: ITEM_MARGINS
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Toolbar</h2>'
            },
            {
                xtype: 'toolbar',
                defaults: {
                    scale: 'medium'
                },
                items: [
                    {
                        xtype: 'button',
                        text: 'Default TB Button'
                    },
                    {
                        xtype: 'button',
                        text: 'Default TB Button (disabled)',
                        disabled: true
                    },
                    {
                        xtype: 'button',
                        text: 'TB Menu Button',
                        menu: [
                            {text: 'Item 1'},
                            {text: 'Item 2'},
                            {text: 'Item 3'},
                            {text: 'Item 4'}
                        ]
                    },
                    {
                        xtype: 'splitbutton',
                        text: 'TB Split Button',
                        menu: [
                            {text: 'Item 1'},
                            {text: 'Item 2'},
                            {text: 'Item 3'},
                            {text: 'Item 4'}
                        ]
                    },
                    {
                        xtype: 'button',
                        ui: 'blue',
                        text: 'Blue TB Button'
                    },
                    {
                        xtype: 'button',
                        ui: 'red',
                        iconCls: 'icon-warning-voltage-16',
                        text: 'Red TB Button'
                    },
                    {
                        xtype: 'button',
                        ui: 'grey',
                        text: 'Grey TB Button'
                    },
                    '-',
                    {
                        xtype: 'textfield',
                        emptyText: 'Placeholder text'

                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: 'ComboBox',
                        labelWidth: 60,
                        store: Ext.create('Ext.data.Store', {
                            fields: ['abbr', 'name'],
                            data : [
                                {"abbr":"AL", "name":"Alabama"},
                                {"abbr":"AK", "name":"Alaska"},
                                {"abbr":"AZ", "name":"Arizona"}
                            ]
                        }),
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'abbr'
                    },
                    '-',
                    {
                        hideLabel: true,
                        xtype: 'radiogroup',
                        width: 150,
                        items: [
                            {
                                boxLabel: 'Radio A',
                                checked: true,
                                name: 'tb-radiogrp2'
                            },
                            {
                                boxLabel: 'Radio B',
                                name: 'tb-radiogrp2'
                            }
                        ]
                    },
                    {
                        xtype: 'checkbox',
                        boxLabel: 'Checkbox 1'
                    }
                ]
            }
        ]
    });
}
