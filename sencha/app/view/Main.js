/*
 * File: app/view/Main.js
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

Ext.define('Tattlr.view.Main', {
    extend: 'Ext.Container',

    config: {
        cls: 'main',
        id: 'main',
        itemId: 'main',
        style: 'background: #fff;',
        width: '100%',
        zIndex: 1,
        layout: {
            animation: 'slide',
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                itemId: 'toolbar',
                showAnimation: {
                    type: 'slideIn',
                    direction: 'down'
                },
                title: 'tattlr',
                items: [
                    {
                        xtype: 'button',
                        cls: 'green',
                        hidden: true,
                        itemId: 'menuButton',
                        showAnimation: {
                            type: 'slide',
                            direction: 'right'
                        },
                        style: 'color: #fff;',
                        ui: 'plain',
                        iconCls: 'list',
                        text: ''
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        itemId: 'back',
                        margin: '0 0 0 0',
                        padding: '0 0 0 0',
                        showAnimation: {
                            type: 'slide',
                            direction: 'right'
                        },
                        ui: 'plain',
                        width: 50,
                        iconCls: 'back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        itemId: 'editUser',
                        ui: 'plain',
                        text: 'Edit'
                    },
                    {
                        xtype: 'button',
                        cls: 'menuButton',
                        hidden: true,
                        itemId: 'addUser',
                        showAnimation: {
                            type: 'slide',
                            direction: 'left'
                        },
                        ui: 'plain',
                        iconCls: 'addUser'
                    }
                ]
            },
            {
                xtype: 'container',
                bottom: 0,
                cls: 'account-menu',
                docked: 'top',
                height: 60,
                hidden: true,
                hideAnimation: {
                    type: 'slideOut',
                    direction: 'down'
                },
                itemId: 'accountMenu',
                showAnimation: {
                    type: 'slide',
                    direction: 'up'
                },
                width: '100%',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        height: 60,
                        itemId: 'addUserAccount',
                        ui: 'plain',
                        iconAlign: 'top',
                        iconCls: 'add',
                        text: '<span class="user-account-menu">Account</span>'
                    },
                    {
                        xtype: 'button',
                        height: 60,
                        hidden: true,
                        itemId: 'oneTimeTransaction',
                        ui: 'plain',
                        width: 100,
                        iconAlign: 'top',
                        iconCls: 'compose',
                        text: '<span class="user-account-menu">One Time</span>'
                    },
                    {
                        xtype: 'button',
                        height: 60,
                        itemId: 'withdraw',
                        style: 'color: #F25050;',
                        ui: 'plain',
                        iconAlign: 'top',
                        iconCls: 'compose',
                        text: '<span class="user-account-menu">Withdraw</span>'
                    },
                    {
                        xtype: 'button',
                        height: 60,
                        itemId: 'deposit',
                        style: 'color: #65CE41;',
                        ui: 'plain',
                        iconAlign: 'top',
                        iconCls: 'compose',
                        text: '<span class="user-account-menu">Deposit</span>'
                    }
                ]
            },
            {
                xtype: 'container',
                bottom: 60,
                cls: 'account-menu',
                height: 40,
                hidden: true,
                hideAnimation: {
                    type: 'slideOut',
                    direction: 'down'
                },
                itemId: 'accountInfo',
                showAnimation: {
                    type: 'slide',
                    direction: 'up'
                },
                width: '100%',
                layout: {
                    align: 'start',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        docked: 'right',
                        height: 40,
                        hidden: false,
                        itemId: 'balanceDisplay',
                        padding: 10,
                        showAnimation: 'fade',
                        style: 'font-size: 0.8em;'
                    },
                    {
                        xtype: 'container',
                        itemId: 'accountName',
                        padding: 10
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMainActiveItemChange',
                event: 'activeitemchange'
            },
            {
                fn: 'onMainInitialize',
                event: 'initialize'
            }
        ]
    },

    onMainActiveItemChange: function(container, value, oldValue, eOpts) {
        if(oldValue !== 0) {

            //console.log(container.getActiveItem().getItemId());
            //oldValue.destroy();
            //container.remove(oldValue, false);
        }
    },

    onMainInitialize: function(component, eOpts) {

        if(localStorage.getItem('tattlrToken') !== null) {
            var violationForm = Ext.create('Tattlr.view.ViolationForm');
            component.setActiveItem(violationForm);
            console.log('token found');
        } else {

            var start = Ext.create('Tattlr.view.Start');
            component.setActiveItem(start);
        }
    }

});