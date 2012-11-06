function createFormWidgets () {
    return {
        xtype: 'form',

        id   : 'form-widgets',

        // title: 'Form Widgets',

        // frame: true,
        border: false,

        /*
        collapsible: true,
        tools: [
            {type:'toggle'},
            {type:'close'},
            {type:'minimize'},
            {type:'maximize'},
            {type:'restore'},
            {type:'gear'},
            {type:'pin'},
            {type:'unpin'},
            {type:'right'},
            {type:'left'},
            {type:'down'},
            {type:'refresh'},
            {type:'minus'},
            {type:'plus'},
            {type:'help'},
            {type:'search'},
            {type:'save'},
            {type:'print'}
        ],
        */

        defaults: {
            anchor    : '98%',
            msgTarget : 'side',
            allowBlank: false,
            margin: '0 0 10 0'
        },
        items: [
            {
                xtype: 'label',
                text : 'Plain Label'
            },
            {
                fieldLabel: 'TextField',
                xtype     : 'textfield',
                name      : 'someField',
                emptyText : 'Enter a value'
            },
            {
                fieldLabel: 'ComboBox',
                xtype: 'combo',
                store: ['Foo', 'Bar']
            },
            {
                fieldLabel: 'ComboBox (disabled)',
                xtype: 'combo',
                disabled: true,
                store: ['Foo', 'Bar']
            },
            {
                fieldLabel: 'DateField',
                xtype     : 'datefield',
                name      : 'date'
            },
            {
                fieldLabel: 'TimeField',
                name: 'time',
                xtype: 'timefield'
            },
            {
                fieldLabel: 'NumberField',
                xtype     : 'numberfield',
                name      : 'number',
                emptyText : '(This field is optional)',
                allowBlank: true
            },
            {
                fieldLabel: 'TextArea',
                xtype     : 'textareafield',
                name      : 'message',
                cls       : 'x-form-valid',
                value     : 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)'
            },
            {
                fieldLabel: 'Checkboxes',
                xtype: 'checkboxgroup',
                columns: [100,100,100],
                items: [
                    {boxLabel: 'Foo', checked: true,id:'fooChk',inputId:'fooChkInput'},
                    {boxLabel: 'Bar', id:'fooChk2',inputId:'fooChkInput2'},
                    {boxLabel: 'Zot', disabled: true}
                ]
            },
            {
                fieldLabel: 'Radios',
                xtype: 'radiogroup',
                columns: [100,100,100],
                items: [
                    {boxLabel: 'Foo', checked: true, name: 'radios'},
                    {boxLabel: 'Bar', name: 'radios'},
                    {boxLabel: 'Zot', name: 'radios', disabled: true}
                ]
            },
            /*
            {
                hideLabel   : true,
                id          : 'htmleditor',
                xtype       : 'htmleditor',
                name        : 'html',
                enableColors: false,
                value       : 'Mouse over toolbar for tooltips.<br /><br />The HTMLEditor IFrame requires a refresh between a stylesheet switch to get accurate colors.',
                height      : 110
            },
            */
            {
                xtype : 'fieldset',
                title : 'Plain Fieldset',
                items: [
                    {
                        hideLabel: true,
                        xtype: 'radiogroup',
                        items: [
                            {boxLabel: 'Radio A', checked: true, name: 'radiogrp2'},
                            {boxLabel: 'Radio B', name: 'radiogrp2'}
                        ]
                    }
                ]
            },
            {
                xtype      : 'fieldset',
                title      : 'Collapsible Fieldset',
                collapsible: true,
                items: [
                    { xtype: 'checkbox', boxLabel: 'Checkbox 1', disabled: true, checked: true },
                    { xtype: 'checkbox', boxLabel: 'Checkbox 2' }
                ]
            },
            {
                xtype         : 'fieldset',
                title         : 'Checkbox Fieldset',
                checkboxToggle: true,
                items: [
                    { xtype: 'radio', boxLabel: 'Radio 1', name: 'radiongrp1' },
                    { xtype: 'radio', boxLabel: 'Radio 2', name: 'radiongrp1' }
                ]
            }
        ],

        buttons: [
            {
                text   :'Toggle Enabled',
                scale: 'small',
                handler: function() {
                    this.up('form').items.each(function(item) {
                        item.setDisabled(!item.disabled);
                    });
                }
            },
            {
                text   : 'Reset Form',
                scale: 'small',
                handler: function() {
                    Ext.getCmp('form-widgets').getForm().reset();
                }
            },
            {
                text   : 'Validate',
                scale: 'small',
                handler: function() {
                    Ext.getCmp('form-widgets').getForm().isValid();
                }
            }
        ]
    };
}