Ext.define('Example.view.GridPanel', {
    alias: 'widget.exampleGridPanel',
    extend: 'Admin.view.BaseGridPanel',
    selModel: Ext.create('Ext.selection.CheckboxModel', {
        headerWidth: 42
    }),
    store: getStore(),
    initComponent: function () {
        var me = this;
        me.columns = {
            items: [
                {
                    flex: 1,
                    text: 'Company',
                    sortable: true,
                    dataIndex: 'company',
                    renderer: me.nameRenderer
                },
                {
                    width: 135,
                    text: 'Status',
                    sortable: true,
                    dataIndex: 'status',
                    renderer: me.statusRenderer
                },
                {
                    width: 75,
                    text: 'Price',
                    sortable: true,
                    dataIndex: 'price'
                },
                {
                    width: 75,
                    text: 'Change',
                    sortable: true,
                    dataIndex: 'change'
                },
                {
                    width: 75,
                    text: 'Percent Change',
                    sortable: true,
                    dataIndex: 'pctChange'
                },
                {
                    width: 85,
                    text: 'Last Change',
                    sortable: true,
                    xtype: 'datecolumn',
                    dataIndex: 'lastChange'
                }
            ]
        };

        me.callParent(arguments);
    },

    nameRenderer: function (value) {
        return Ext.String.format('<img src="../resources/images/icons/32x32/cubes_blue.png" class="admin-grid-thumbnail"/>' +
                                 '<div class="admin-grid-description">' +
                                 '  <h6>' + value + '</h6>' +
                                 '  <div>there/is/a/path/for/that</div>' +
                                 '</div>', value, value);
    },

    statusRenderer: function (value) {
        var icon = getStatusIcon(value);
        return Ext.String.format('<span style="display:inline-block;float:left;margin-right:5px;font-size:17px">' + icon + '</span> ' +
                                 '<span style="display:inline-block;float:left;margin-top:1px">' + value + '</span>', value, value);
    },
    loadMask: true,
    viewConfig: {
        stripeRows: true
    }

});

