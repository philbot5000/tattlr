/*
 * File: app/view/SignUp.js
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

Ext.define('Tattlr.view.SignUp', {
    extend: 'Ext.form.Panel',

    config: {
        itemId: 'signUp',
        items: [
            {
                xtype: 'fieldset',
                title: 'Sign Up',
                items: [
                    {
                        xtype: 'textfield',
                        hidden: true,
                        label: '',
                        name: 'firstName',
                        placeHolder: 'First Name'
                    },
                    {
                        xtype: 'textfield',
                        hidden: true,
                        label: '',
                        name: 'lastName',
                        placeHolder: 'Last Name'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'email',
                        label: '',
                        name: 'email',
                        placeHolder: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        itemId: 'password',
                        label: '',
                        name: 'password',
                        placeHolder: 'Password'
                    },
                    {
                        xtype: 'passwordfield',
                        hidden: false,
                        itemId: 'confirm',
                        label: '',
                        name: 'confirm',
                        placeHolder: 'Confirm'
                    }
                ]
            },
            {
                xtype: 'container',
                html: 'Family Penny terms of use.',
                padding: '0 15 0 15',
                style: 'font-size: 0.8em;',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'submit',
                        ui: 'action',
                        text: 'Submit'
                    }
                ]
            }
        ]
    }

});