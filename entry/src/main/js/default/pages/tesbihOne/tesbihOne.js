import router from '@system.router';

export default {
    data: {
        tesbihCount:3,
        tesbih:0,



    },

    tesbihControl()
    {
        if (this.tesbih==this.tesbihCount) {

            router.push({
                uri:"pages/tesbihTwo/tesbihTwo"
            })
        }  
    },

    tesbihReset()
    {
    this.tesbih = this.tesbihCount
    },
    tesbihMinus()
    {
        if (this.tesbih !=0) {
            this.tesbih = this.tesbih -1;
        }

    },
    TesbihClick()
    {

        if (this.tesbih <this.tesbihCount) {
            let vm = this;
            vm.tesbih = vm.tesbih +1
            this.tesbihControl()
        }




    },
}
