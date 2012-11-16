// TODO: Bind listener to Confirm button.

// TODO: Resolve vertical center position.
// In order to V center the panel we need to know the height of the panel.
// As we do not know the height (has dynamic content) we need to wait til after layout in order to start showing the panel.

Ext.define('Admin.view.BaseFeedbackPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseFeedbackPanel',
    feedbackTitle: '',
    modal: true,
    floating: true,
    shadow: false,
    contentWidth: 640,
    autoHeight: true,
    bodyPadding: 20,
    border: false,
    bodyBorder: false,
    cls: 'admin-feedback-panel',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    autoDestroy: true,

    initComponent: function () {
        var me = this;
        if (!me.items) {
            me.items = [];
        }

        me.setWidthForItems();

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
                autoEl: {
                    tag: 'h3',
                    html: title,
                    style: {
                        width: me.contentWidth
                    }
                }
            }
        ]);
    },

    insertDockedItems: function () {
        var me = this;
        var leftPadding = me.contentWidth - 140;
        me.dockedItems = [{
            xtype: 'container',
            dock: 'bottom',
            cls: 'admin-feedback-panel-white',
            padding: '20 20 20 ' + leftPadding,
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
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
            text: 'Confirm',
            // TODO: Should be customizable
            handler: function (btn) {
                alert('Got it!');
                me.doClose();
            }
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

    setWidthForItems: function () {
        var me = this;
        Ext.Array.each(me.items, function(item, index) {
            me.items[index].width = me.contentWidth;
        });
    },

    doFadeIn: function() {
        this.getEl().animate({
            duration: 110,
            to: {
                opacity: 1
            }
        });
    },

    bindEventListeners: function() {
        var me = this;

        var resizeHandler = function() { me.setFullWidth() };

        me.addListener('render', function () {
            Ext.fly(window).addListener('resize', resizeHandler);
            me.getEl().setStyle('opacity', 0);
            me.doFadeIn();
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
        this.hide();
    },

    doClose: function () {
        this.destroy();
    }

});
