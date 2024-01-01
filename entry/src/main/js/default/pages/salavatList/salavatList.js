import dataManager from '../../dataManager'
import file from '@system.file';
export default {
    data: {
       List:null
    },
readList()
{
    let vm = this;
    file.readText({
        uri: 'internal://app/List.txt',
        success: function(data) {
        vm.List = data.text

        },
        fail: function(data, code) {
            console.error('call fail callback fail, code: ' + code + ', data: ' + data);
        },
    });
},
    onInit()
    {

   this.readList()


    }
}