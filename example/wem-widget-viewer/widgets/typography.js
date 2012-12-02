function createTypographyContainer() {
    return Ext.create('Ext.container.Container', {
        defaults: {
            margin: ITEM_MARGINS
        },
        items: [
            {
                xtype: 'component',
                html: '<h2>Typography</h2>'
            },
            {
                xtype: 'component',
                html: '<h3>Headings</h3><p>All HTML headings, &lt;h1&gt; through &lt;h6&gt; are available.</p>'
            },
            {
                xtype: 'component',
                html: '<p class="example">Example</p>'
                      + '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>'
            },
            {
                xtype: 'component',
                html: '<h3>Body Copy</h3>'
                      + '<p>Default font is size is Tahoma, 12px</p>'
                      + '<p class="example">Example</p>'
                      + '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>'
                      + '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>'
                      + '<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>'

            },
            {
                xtype: 'component',
                html: '<h3>Lists</h3>'
                      + '<ul>'
                      + '<li>Item 1</li>'
                      + '<li>Item 2</li>'
                      + '<li>Item 3</li>'
                      + '<li>Item 4</li>'
                      + '<li>Item 5</li>'
                      + '</ul>'

            }
        ]
    });
}

