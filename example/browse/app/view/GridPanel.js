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
                    sortable: true,
                    dataIndex: 'company',
                    renderer: me.nameRenderer
                },
                {
                    width: 135,
                    sortable: true,
                    dataIndex: 'status',
                    renderer: me.statusRenderer
                },
                {
                    width: 75,
                    sortable: true,
                    dataIndex: 'price'
                },
                {
                    width: 75,
                    sortable: true,
                    dataIndex: 'change'
                },
                {
                    width: 75,
                    sortable: true,
                    dataIndex: 'pctChange'
                },
                {
                    width: 85,
                    sortable: true,
                    xtype: 'datecolumn',
                    dataIndex: 'lastChange'
                }
            ]
        };

        me.callParent(arguments);
    },

    nameRenderer: function (value) {
        return Ext.String.format('<img src="../images/cubes_blue.png" style="width:32px;height:32px;display:block;float:left;margin-right:10px"/>' +
                                 '<div style="float:left;">' +
                                 '  <h5>' + value + '</h5>' +
                                 '  <div>there/is/a/path/for/that</div>' +
                                 '</div>', value, value);
    },

    statusRenderer: function (value) {
        var icon = getStatusIcon(value);
        return Ext.String.format('<span style="display:inline-block;float:left;margin-right:5px;font-size:18px">' + icon + '</span> ' +
                                 '<span style="display:inline-block;float:left;margin-top:1px">' + value + '</span>', value, value);
    },
    loadMask: true,
    viewConfig: {
        stripeRows: true
    }

});

