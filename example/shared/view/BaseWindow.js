Ext.define('Admin.view.BaseWindow', {
    extend: 'Ext.container.Container',
    alias: 'widget.baseWindow',
    title: '',
    width: 640,
    height: 420,
    modal: true,
    floating: true,
    cls: 'admin-window',
    shadow: false,
    autoDestroy: true,

    initComponent: function () {
        var me = this;

        if (!me.items) {
            me.items = [];
        }
        me.insertHeader();

        me.callParent(arguments);
    },

    insertHeader: function () {
        var me = this;
        Ext.Array.insert(this.items, 0, [
            {
                xtype: 'container',
                cls: 'admin-window-header',
                padding: 5,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },

                // It should be possible to add custom buttons here.
                items: [
                    me.createTitle(me.title),
                    me.createInsertButton(),
                    me.createCloseButton()
                ]
            }
        ]);
        me.doLayout();
    },

    createTitle: function (title) {
        var me = this;
        return {
            xtype: 'component',
            flex: 1,
            autoEl: {
                tag: 'h1',
                html: title
            }
        }
    },

    createInsertButton: function () {
        var me = this;
        return {
            xtype: 'button',
            text: 'Insert (5)'
        }
    },

    createCloseButton: function () {
        var me = this;
        return {
            xtype: 'button',
            ui: 'grey',
            text: 'Close',
            handler: function (btn) {
                me.doClose();
            }
        }
    },

    doShow: function () {
        this.show();
    },

    doHide: function () {
        this.x = -this.width;
        this.hide();
    },

    doClose: function () {
        this.destroy();
    },

    listeners: {
        render: function (container) {

        }
    }

});


