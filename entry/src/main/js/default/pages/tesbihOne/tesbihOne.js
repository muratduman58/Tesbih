import router from '@system.router';
import global from '../../globalVariables'
export default {
    data: {

        tesbih:0,
        class:"text fade-in-text"
    },
    tesbihControl()
    {

        if (this.tesbih==global.data.tesbihCount) {

            router.push({
                uri:"pages/tesbihTwo/tesbihTwo"
            })
        }  
    },

    tesbihReset()
    {
    this.tesbih = 0
    },
    tesbihMinus()
    {
        if (this.tesbih !=0) {
            this.tesbih = this.tesbih -1;
        }

    },
    TesbihClick()
    {

        this.class =""
        this.class ="text fade-in-text"
        if (this.tesbih < global.data.tesbihCount) {
            let vm = this;
            vm.tesbih = vm.tesbih +1

        }

        this.tesbihControl()


    },
}
