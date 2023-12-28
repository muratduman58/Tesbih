import dataManager from '../../dataManager'
export default {
    data: {
       List:[]
    },
    onInit()
    {
    this.List = dataManager.storageGet("Lists")
    }
}