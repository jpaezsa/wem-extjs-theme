
function createTreeStore () {
    return Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "detention", leaf: true },
                { text: "homework", expanded: true, children: [
                    { text: "book report", leaf: true },
                    { text: "alegrbra", leaf: true}
                ] },
                { text: "buy lottery tickets", leaf: true }
            ]
        }
    });
}

function createTreePanel () {
    return Ext.create('Ext.container.Container', {
        items: [
            {
                xtype: 'component',
                html: '<h2>Tree</h2>'
            },
            {
                xtype: 'treepanel',
                title: 'Simple Tree',
                store: createTreeStore(),
                rootVisible: false
            }
        ]
    });
}
