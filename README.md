This repository holds the files for the WEM ExtJS theme

The theme uses the default template system that is provided by ExtJS
The theme is based on the default Ext4 theme (Classic)

http://docs.sencha.com/ext-js/4-1/#!/guide/theming


sass/admin.scss
- This is the entry file and includes all used components

sass/admin/variables
- Overrides to the ExtJS Sass variables

sass/admin/css
- ExtJS CSS overrides. Only used when overriding variables are not sufficient


Only these files should be exported to WEM-CE

lib/ext/resources/css/admin.css
lib/ext/resources/themes/images/default


Only use CSS overrides where it is absolutely necessary