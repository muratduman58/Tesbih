import dataManager from '../../dataManager'
import router from '@system.router';
import file from '@system.file';
import storage from '@system.storage';
export default {
data:{

    LastListNumber:0
},
   getStore(_key)
    {

      var res =  storage.get({
            key: _key,

            success: function(data) {

            return data;


            },
            fail: function(data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data);
            },

        });

        return res;
    },
    async setStore(_key,_value) {

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
    returnMessage(_msg)
    {
        router.push({
            uri: 'pages/message/message',
            params: {
                message: _msg,
            },
        });
    },
    returnList()
    {
        router.push({
            uri: 'pages/salavatList/salavatList',

        });
    },
    newListClick()
    {
        this.createList()

    },
    async currentListClick()
    {
      await this.getList()
       await this.returnList()
    },
   async createList()
    {
        let vm = this;

       await this.LastListNumberControl()
        await dataManager.writeText(this.$t('strings.ListText')+this.LastListNumber+";")
        vm.returnList()

    },
    async getList()
    {
        var res  = await dataManager.readText();
        if (res == null) {
            this.returnMessage("Liste Yok")
        }
        else
        {
            this.returnList()
        }
    },
   async LastListNumberControl()
    {

       this.LastListNumber= this.getStore("LastListNumber")
        if(this.LastListNumber==0)
        {
           await this.setStore("LastListNumber",1)
            this.LastListNumber= this.getStore("LastListNumber")
            //this.LastListNumber = 1

        }
        else
        {
           this.LastListNumber = this.LastListNumber + 1
           await this.setStore("LastListNumber",this.LastListNumber)
            this.LastListNumber= this.getStore("LastListNumber")
        }
    }

}