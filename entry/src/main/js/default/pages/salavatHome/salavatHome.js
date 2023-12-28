import dataManager from '../../dataManager'
import router from '@system.router';
export default {
data:{
    List:[]
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
        this.createList()
    },
    currentListClick()
    {
       this.getList()
    },
    createList()
    {
        var id = this.lastListNumber()
        this.List.push("Liste-",id)
        dataManager.storageSet("Lists",this.List)

    },
    getList()
    {
        this.List = dataManager.storageGet("Lists")
        if (this.List == null) {
            this.returnMessage("Liste Yok")
        }
    },
    lastListNumber()
    {
       var last= dataManager.storageGet("LastListNumber")
        if(last==null)
        {
            dataManager.storageSet("LastListNumber",1)
            return 1
        }
        else
        {
            return last
        }
    }

}