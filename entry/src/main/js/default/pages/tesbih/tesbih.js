
export default {
    data: {
        index: 0,
        TesbihText:"Suphanallah",
        TesbihOne:3,
        TesbihTwo:3,
        TesbihThree:3,
    },
    onShow()
    {

    },
    DetechSwipe()
    {
        let vm = this;
        switch (vm.index) {
            case 0: vm.TesbihText="Suphanallah";
                break;
            case 1:vm.TesbihText="Elhamdulilah";
                break;
            case 2:vm.TesbihText="Allah'u Ekber";
                break;

        }
        console.log(vm.TesbihText)
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