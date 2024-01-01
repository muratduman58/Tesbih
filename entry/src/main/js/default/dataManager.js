import storage from '@system.storage';
import file from '@system.file';
export default {
   async storageSet(_key,_value) {

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
    async storageGet(_key) {
      await storage.get({
            key: _key,
            success: function(data) {
              return data;
            },
            fail: function(data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data);
            },
            complete: function(data) {
               return data
            },
        });
    },
    async writeText(_text) {
       await file.writeText({
            uri: 'internal://app/List.txt',
            text: _text,
            append:true,
            success: function() {
                console.log('call writeText success.');
            },
            fail: function(data, code) {
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
  readText() {
        let res = file.readText({
            uri: 'internal://app/List.txt',
            success: function(data) {

                return data.text
            },
            fail: function(data, code) {
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
            complete:function(data){
                return data.text
            },

        });
       return res
    },
    }