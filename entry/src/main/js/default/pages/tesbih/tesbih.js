
export default {
    data: {
        index: 0,
        TesbihOne:3,
        TesbihTwo:3,
        TesbihThree:3,
    },

    TesbihOneClick()
    {
        let vm = this;
        vm.TesbihOne--
        if(vm.TesbihOne==0)
        {
            vm.index = 1
        }

    },
    TesbihTwoClick()
    {
        let vm = this;
        vm.TesbihTwo--
        if(vm.TesbihTwo==0)
        {
            vm.index = 2
        }

    },
    TesbihThreeClick()
    {
        let vm = this;
        vm.TesbihThree--
        if(vm.TesbihThree==0)
        {
            vm.index = 0
        }

    },
}