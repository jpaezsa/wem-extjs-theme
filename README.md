# Welcome to the Enonic WEM ExtJS Theme

This project holds the assets for the general Enonic WEM ExtJS theme.

## Prerequisites
* Sass
* Compass

See the Sencha ExtJS documentation for details regarding how to set up the developer enviroment

http://docs.sencha.com/ext-js/4-1/#!/guide/theming

## Building

Compile

    > ${project-dir}/lib/ext/resources/sass/compass compile admin.scss


## Deploying

### CSS

Copy admin.css to the WEM 5.0 project

    ${project-dir}/lib/ext/resources/css/admin.css 

to

    ${enonic-wem-project}/modules/wem-webapp/src/main/webapp/admin/resources/lib/ext/resources/css/admin.css
    

### Images

Copy all images to the WEM 5.0 project

    ${project-dir}/lib/ext/resources/themes/images/default/ 

to

    ${enonic-wem-project}/modules/wem-webapp/src/main/webapp/admin/resources/lib/ext/resources/themes/images/default/


