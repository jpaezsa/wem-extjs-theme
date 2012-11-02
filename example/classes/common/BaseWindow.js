Ext.define('BaseWindow', {
    extend: 'Ext.container.Container',
    xtype: 'baseWindow',
    floating: true,
    shadow: false,
    width: 10,
    height: 470,
    title : '',
    cls: 'admin-std-window',
    backgroundCls: 'admin-std-window-white',
    defaults: { margin: '0 0 20 0' },
    mask: true,
    autoDestroy: true,

    initComponent: function () {
        var me = this;

        if (me.mask) {
            Ext.fly(document.getElementsByTagName('html')[0]).mask();
        }

        me.setFullWidth();
        me.addClass(me.backgroundCls);
        me.doHide();

        function handleWindowResize() {
            me.setFullWidth();
        }

        me.addListener('render', function () {
            window.addEventListener('resize', handleWindowResize, false);
            me.getEl().animate({
                duration: 150,
                easing: 'easeOut',
                to: {
                    left: 0
                }
            });
        });

        me.addListener('destroy', function () {
            window.removeEventListener('resize', handleWindowResize, false);
            handleWindowResize = null;
            me = null;
        });

        // TODO: Remove
        me.items = [
            {
                xtype: 'component',
                html: '<h2>' + me.title + '</h2>'
            },
            {
                xtype: 'button',
                text: 'Cancel',
                handler: function () {
                    me.doClose();
                }
            },
            {
                xtype: 'component',
                html: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>'
            }

        ];
        me.callParent(arguments);
    },

    setFullWidth: function () {
        var me = this;
        me.setWidth(Ext.getBody().getWidth());
    },

    doShow: function () {
        var me = this;
        if (me.anchor) {
            me.y = me.anchor.getEl().getY() - me.height;
        }
        me.show();
    },

    doHide: function () {
        this.x = -this.width;
        this.hide();
    },

    doClose: function () {
        if (this.mask) {
           Ext.fly(document.getElementsByTagName('html')[0]).unmask();
        }
        this.destroy();
    }

});
