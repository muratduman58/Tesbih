import router from '@system.router';
import global from '../../globalVariables'
export default {
    data: {

        tesbih:0,
    },
    tesbihControl()
    {
        if (this.tesbih==global.data.tesbihCount) {

            router.push({
                uri:"pages/index/index"
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

        if (this.tesbih < global.data.tesbihCount) {
            let vm = this;
            vm.tesbih = vm.tesbih +1

        }

        this.tesbihControl()


    },
}
