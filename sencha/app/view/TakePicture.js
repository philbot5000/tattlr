/*
 * File: app/view/TakePicture.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Tattlr.view.TakePicture', {
    extend: 'Ext.Container',
    alias: 'widget.takepicture',

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'component',
                html: '<h1>Step 1:</h1>',
                padding: '10px',
                style: 'font-size: 2em;'
            },
            {
                xtype: 'component',
                html: '<p>Take a picture of the violation.</p>',
                padding: '10px'
            },
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'button',
                        height: 150,
                        itemId: 'launchCameraButton',
                        style: 'border-radius: 100px;',
                        ui: 'confirm',
                        width: 150,
                        text: 'Camera'
                    }
                ]
            }
        ]
    }

});