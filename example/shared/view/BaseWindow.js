Ext.define('Admin.view.BaseWindow', {
    extend: 'Ext.container.Container',
    alias: 'widget.baseWindow',
    iconCls: '',
    title: '',
    width: 640,
    height: 420,
    modal: true,
    floating: true,
    cls: 'admin-window',
    shadow: false,
    autoDestroy: true,
    buttons: [],

    initComponent: function () {
        var me = this;
        if (!me.items) {
            me.items = [];
        }
        me.insertHeader(me.title);
        me.callParent(arguments);
    },

    insertHeader: function (title) {
        var me = this;
        var headerItems = [];

        headerItems.push(me.createTitle(title));
        Ext.Array.each(me.buttons, function (b, i) {
            headerItems.push(me.buttons[i]);
        });
        headerItems.push(me.createCloseButton());

        Ext.Array.insert(me.items, 0, [
            {
                xtype: 'container',
                cls: 'admin-window-header',
                padding: '5 0 5 5',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    margin: '0 5 0 0'
                },
                items: headerItems
            }
        ]);
        me.doLayout();
    },

    createTitle: function (title) {
        var me = this;
        return {
            xtype: 'component',
            flex: 1,
            cls: me.iconCls,
            autoEl: {
                tag: 'h1',
                html: title
            }
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
    }

});


