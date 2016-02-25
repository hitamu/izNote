'use strict';
izNo.service('storage', function(){
	var self = this;
    this.data = [];

    this.load = function(callback) {
        chrome.storage.sync.get('note', function(keys) {
            if (keys.note != null) {
                self.data = keys.note;
                callback(self.data);
            }
        });
    }

    this.sync = function() {
        chrome.storage.sync.set({note: this.data}, function() {
            console.log('Data is stored in Chrome storage');
        });
    }

})