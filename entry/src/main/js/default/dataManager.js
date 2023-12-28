import storage from '@system.storage';
export default {
    storageSet(_key,_value) {
        storage.set({
            key: _key,
            value: _value,
            success: function() {
                console.log('call storage.set success.');
            },
            fail: function(data, code) {
                console.log('call storage.set fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    storageGet(_key) {
        storage.get({
            key: _key,
            success: function(data) {
              return data;
            },
            fail: function(data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data);
            },
            complete: function() {
                console.log('call complete');
            },
        });
    }
}