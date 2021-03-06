/*
 * File: app/controller/TakePicture.js
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

Ext.define('Tattlr.controller.TakePicture', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button#launchCameraButton": {
                tap: 'onLaunchCameraButtonTap'
            }
        }
    },

    onLaunchCameraButtonTap: function(button, e, eOpts) {
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
            //return 'data:image/jpeg;base64,'+imageData;

            var main = Ext.getCmp('main');

            main.violation = {};

            main.violation.image = imageData;

            var violationForm = Ext.create('Tattlr.view.ViolationForm');

            violationForm.query('#violationImage')[0].setSrc('data:image/jpeg;base64,'+imageData);

            main.setActiveItem(violationForm);

        }

        function onFail(message) {
            //alert('Failed because: ' + message);
            //dataview.show();
        }
    }

});