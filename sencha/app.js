/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    views: [
        'Start',
        'SignUp',
        'Introduction',
        'TakePicture',
        'Main',
        'ViolationForm',
        'CapturePicture'
    ],
    requires: [
        'Ext.DateExtras',
        'Ext.MessageBox'
    ],
    controllers: [
        'Master',
        'SignUp',
        'Login',
        'TakePicture'
    ],
    name: 'Tattlr',

    launch: function() {
        // Makes room for our iOS 7 toolbar...
        if(Ext.os.is.iOS) {

            if(parseFloat(device.version) >= 7.0) {

                Ext.Viewport.setMargin('20 0 0 0');
                Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight() - 20);
                var body = Ext.DomQuery.select('body')[0];
                var html = Ext.DomQuery.select('html')[0];
                body.style.backgroundColor = '#1468A2';
                html.style.backgroundColor = '#1468A2';
            }
        }

        //Tattlr.app.tokenCheck();
        Ext.create('Tattlr.view.Main', {fullscreen: true});
    },

    takePicture: function() {
        /****
        * Not currently in use....
        * Phonegap specific code
        * Camera Capture
        *
        ***/
        var me = this;
        var settings = {
            quality: 90,
            sourceType : Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            destinationType: Camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            allowEdit : true,
            targetWidth: 640,
            targetHeight: 640,
            correctOrientation: true
        };


        navigator.camera.getPicture(onSuccess, onFail, settings);

        function onSuccess(imageData) {

            //console.log(imageData);
            return 'data:image/jpeg;base64,'+imageData;

        }

        function onFail(message) {
            //alert('Failed because: ' + message);
            //dataview.show();
        }
    },

    tokenCheck: function() {

    }

});
