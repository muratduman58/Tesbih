import router from '@system.router';
export default {
    data: {
        tesbihCount:3,
        tesbih:3,


    },
    onInit()
    {
    },
    tesbihControl()
    {
        if (this.tesbih<=0) {
            this.tesbih =this.tesbihCount
            router.push({
                uri:"pages/tesbihTwo/tesbihTwo"
            })
        }  
    },

    TesbihClick()
    {

        let vm = this;
        vm.tesbih--
        this.tesbihControl()


    },
}
