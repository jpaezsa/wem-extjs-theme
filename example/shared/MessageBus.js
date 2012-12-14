Ext.define('Admin.MessageBus', {
    extend: 'Ext.util.Observable',
    singleton: true,

    showFeedback: function (config) {
        this.fireEvent('feedbackBox.show', config);
    }

});