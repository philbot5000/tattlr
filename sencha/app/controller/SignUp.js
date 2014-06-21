/*
 * File: app/controller/SignUp.js
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

Ext.define('Tattlr.controller.SignUp', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'signup': 'showSignup'
        },

        control: {
            "formpanel#signUp": {
                submit: 'onSignUpSubmit'
            },
            "button#submit": {
                tap: 'onSubmitTap'
            }
        }
    },

    onSignUpSubmit: function(formpanel, result, e, eOpts) {
        var username = formpanel.getComponent('email'),
            password = formpanel.getComponent('password'),
            confirm = formpanel.getComponent('confirm');

        if(password.getValue() === confirm.getValue()) {
            var user = new Parse.User();


            user.set("username", username);
            user.set("password", password);
            user.set("email", username);


            user.signUp(null, {
                success: function(user) {
                    // Hooray! Let them use the app now.
                    FP.app.redirectTo('accounts');
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.

                    navigator.notification.alert(error.message, function() {}, error.code, 'OK');

                    //alert("Error: " + error.code + " " + error.message);
                }
            });

        } else {

            navigator.notification.alert('Passwords do not match.', function() {}, 'Missmatch', 'OK');
        }
    },

    onSubmitTap: function(button, e, eOpts) {
        var username = Ext.ComponentQuery.query('#email')[0],
            password = Ext.ComponentQuery.query('#password')[0],
            confirm = Ext.ComponentQuery.query('#confirm')[0],
            signup = Ext.ComponentQuery.query('#signUp')[0];

        signup.setMasked({xtype: 'loadmask', message: 'Submitting...'});

        if(password.getValue() === confirm.getValue()) {

            var user = new Parse.User();

            user.set("username", username.getValue());
            user.set("password", password.getValue());
            user.set("email", username.getValue());


            user.signUp(null, {
                success: function(user) {
                    // Hooray! Let them use the app now.
                    FP.config.Runtime.setCurrentUserId(user.id);
                    signup.setMasked(false);
                    FP.app.redirectTo('intro');
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.

                    signup.setMasked(false);

                    // Check if we're in Phonegap

                    if(typeof navigator.alert !== 'undefined') {
                        navigator.notification.alert(error.message, function() {}, error.code, 'OK');
                    } else {
                        alert("Error: " + error.code + " " + error.message);
                    }
                }
            });

        } else {
            signup.setMasked(false);
            // check if we are in Phonegap
            if(typeof navigator.alert !== 'undefined') {

                navigator.notification.alert('Passwords do not match.', function() {}, 'Missmatch', 'OK');
            } else {
                alert('Passwords do not match.');
            }
        }
    },

    showSignup: function() {
        var main = Ext.getCmp('main'),
            signup = Ext.create('FP.view.SignUp');

        Ext.ComponentQuery.query('#toolbar')[0].hide();
        //toolbar.hide();
        main.setActiveItem(signup);
    }

});