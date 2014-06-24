/*
 * File: app/view/ViolationForm.js
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

Ext.define('Tattlr.view.ViolationForm', {
    extend: 'Ext.form.Panel',

    config: {
        itemId: 'violationForm',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'image',
                height: 201,
                hidden: true,
                itemId: 'violationImage',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            var width = window.innerWidth;

                            component.setWidth(width);
                            component.setHeight(width);
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                itemId: 'violationSet',
                title: '',
                items: [
                    {
                        xtype: 'filefield',
                        itemId: 'violationFile',
                        label: '',
                        name: 'File'
                    },
                    {
                        xtype: 'textareafield',
                        itemId: 'violationDescription',
                        margin: '5 10 5 10',
                        name: 'Description',
                        placeHolder: 'Please write a description of the violation...'
                    },
                    {
                        xtype: 'numberfield',
                        itemId: 'lat',
                        label: 'Lat',
                        name: 'Latitude'
                    },
                    {
                        xtype: 'numberfield',
                        itemId: 'lon',
                        label: 'Lon',
                        name: 'Longitude'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'submitViolation',
                margin: '5 10 5 10',
                ui: 'confirm',
                text: 'Submit'
            }
        ],
        listeners: [
            {
                fn: 'onSubmitViolationTap',
                event: 'tap',
                delegate: '#submitViolation'
            },
            {
                fn: 'onViolationFormSubmit',
                event: 'submit'
            },
            {
                fn: 'onViolationFormInitialize',
                event: 'initialize'
            }
        ]
    },

    onSubmitViolationTap: function(button, e, eOpts) {
        console.log('hey');

        var form = button.getParent();
        var values = form.getValues();

        var token = localStorage.getItem('tattlrToken');

        /*form.submit({
        url: 'http://tattlr.azurewebsites.net/api/report',
        method: 'POST',
        success: function(form, response) {
        alert('form submitted successfully!');
        console.log(response);
        },
        failure: function(form, response) {
        console.log(response);
        console.log(form);
        }
        });*/

        Ext.Ajax.request({
            url: 'http://tattlr.azurewebsites.net/api/report',
            method: 'POST',
            form: form,
            headers: {
                'Content-type': 'multipart/form-data; charset=UTF-8',
                'Accept': 'application/json'
            },
            //params: {
            //    'File': values.File,
            //    'Description': values.Description,
            //    'Latitude': values.Latitude,
            //    'Longitude': values.Longitude
            //},
            success: function(form, response) {
                alert('worked');
                console.log(response);
            },
            failure: function(form, response) {
                console.log(response);
            }
        });
    },

    onViolationFormSubmit: function(formpanel, result, e, eOpts) {
        consolte.log(formpanel);
    },

    onViolationFormInitialize: function(component, eOpts) {
        Ext.device.Geolocation.getCurrentPosition({
            timeout: 5000,
            enableHighAccuracy: true,
            maximumAge: 3000,
            success: function(position) {
                var lat = component.query('#lat')[0],
                    lon = component.query('#lon')[0];

                lat.setValue(position.coords.latitude);
                lon.setValue(position.coords.longitude);    
            },
            failure: function(error) {
                console.log(error);
                alert('can\'t find your location.');

            }
        });

        //var el = component.getElement();
    }

});