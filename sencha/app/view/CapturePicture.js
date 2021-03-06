/*
 * File: app/view/CapturePicture.js
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

Ext.define('Tattlr.view.CapturePicture', {
    extend: 'Ext.Container',
    alias: 'widget.capturepicture',

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
                        xtype: 'container',
                        cls: 'picture-capture',
                        height: 150,
                        html: '<div class="icon"><i class="icon-camera"></i></div><img class="image-tns" /><input type="file" capture="camera" accept="image/*" />',
                        width: 150
                    },
                    {
                        xtype: 'textareafield',
                        itemId: 'violationDescription',
                        minWidth: 300,
                        placeHolder: 'Describe the violation'
                    },
                    {
                        xtype: 'button',
                        height: 40,
                        itemId: 'violationSubmit',
                        margin: '10 0 0 0',
                        ui: 'confirm',
                        width: 300,
                        text: 'Submit'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();


        this.file = this.element.down('input[type=file]');
        this.img = this.element.down('img');

        this.file.on('change', this.setPicture, this); //Step 2

        //FIX for webkit
        window.URL = window.URL || window.webkitURL; //Step 3
    },

    setPicture: function(event) {
        var files = event.target.files;
        if (files.length === 1 && files[0].type.indexOf("image/") === 0) {
            this.img.setStyle('display', 'block');
            this.img.set({
                src: URL.createObjectURL(files[0]) //Step 4
            });
            this.setCaptured(true);
        }
    },

    reset: function() {
        this.img.setStyle('display', 'none');
        this.img.set({
            src: ''
        });
        this.setCaptured(false);
    }

});