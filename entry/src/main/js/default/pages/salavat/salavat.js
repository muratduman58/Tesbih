
export default {
    data: {
        index: 0,
        salavatOne:33
    },

    salavatOneClick()
    {
        let vm = this;
        vm.salavatOne--
        if(vm.salavatOne==0)
        {
            vm.index = 1
        }

    },
    salavatClick()
    {
        let vm = this;
        vm.salavatOne--
        if(vm.salavatOne==0)
        {
            vm.index = 1
        }

    },
}