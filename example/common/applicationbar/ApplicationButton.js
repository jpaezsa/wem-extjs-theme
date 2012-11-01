Ext.define('ApplicationButton', {
    xtype: 'applicationButton',
    extend: 'Ext.button.Button',
    text: 'Content Manager',
    ui: 'admin-appbar-button',
    iconCls: 'admin-icon-content-manager-24',
    scale: 'medium',
    menu: new Ext.menu.Menu({
        items: [
            {text: 'Item 1'},
            {text: 'Item 2'}
        ]
    })
});