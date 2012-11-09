Ext.define('Admin.view.BaseFeedbackPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseFeedbackPanel',
    title : '',
    feedbackTitle: '',
    floating: true,
    modal: true,
    shadow: false,
    autoHeight: true,
    cls: 'admin-feedback-panel',
    bodyPadding: 20,
    autoDestroy: true,
    border: false,
    bodyBorder: false,
    defaults: {
        margin: '0 0 20 0'
    },

    initComponent: function () {
        var me = this;
        if (!me.items) {
            me.items = [];
        }
        me.insertTitle(me.feedbackTitle);
        me.insertDockedItems();

        me.setFullWidth();
        me.doHide();
        me.bindEventListeners();

        me.callParent(arguments);
    },

    insertTitle: function (title) {
        var me = this;
        if (me.feedbackTitle === '') {
            return;
        }
        Ext.Array.insert(me.items, 0, [
            {
                xtype: 'component',
                flex: 1,
                autoEl: {
                    tag: 'h3',
                    html: title

                }
            }
        ]);
        me.doLayout();
    },

    insertDockedItems: function () {
        var me = this;
        me.dockedItems = [{
            xtype: 'container',
            dock: 'bottom',
            cls: 'admin-feedback-panel-white',
            padding: 20,
            defaults: {
                margin: '0 5 0 0'
            },
            items:  [
                me.createConfirmButton(),
                me.createCancelButton()
            ]
        }];
    },

    createConfirmButton: function () {
        var me = this;
        return {
            xtype: 'button',
            text: 'Confirm'
        };
    },

    createCancelButton: function () {
        var me = this;
        return  {
            xtype: 'button',
            ui: 'grey',
            text: 'Cancel',
            handler: function (btn) {
                me.doClose();
            }
        };
    },

    doAnimate: function() {
        this.getEl().animate({
            duration: 150,
            easing: 'easeOut',
            to: {
                left: 0
            }
        });
    },

    bindEventListeners: function() {
        var me = this;

        var resizeHandler = function() { me.setFullWidth() };

        me.addListener('render', function () {
            me.doAnimate();
            Ext.fly(window).addListener('resize', resizeHandler);
        });

        me.addListener('destroy', function () {
            Ext.fly(window).removeListener('resize', resizeHandler);
        });
    },

    setFullWidth: function () {
        var me = this;
        me.setWidth(Ext.getBody().getWidth());
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
