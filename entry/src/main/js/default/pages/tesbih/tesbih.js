
export default {
    data: {
        index: 0,
        TesbihText:"Suphanallah",
        TesbihCount:3,
        TesbihOne:3,
        TesbihTwo:3,
        TesbihThree:3,
        isLoading:false,
    },
onCreate()
{
  console.log("create")
},
    DetechSwipe()
    {
        console.log(this.index)
        console.log("Çalıştım")
        let vm = this;
        vm.isLoading= false;
        switch (this.index) {
            case 0: this.TesbihText="Suphanallah";
                if(vm.TesbihOne<=0)
                {
                    this.TesbihOne = vm.TesbihCount
                    console.log("1.")
                }
                break;
            case 1:this.TesbihText="Elhamdulilah";
                if(vm.TesbihTwo<=0)
                {
                    vm.TesbihTwo = vm.TesbihCount
                    console.log("2.")
                }
                break;
            case 2:this.TesbihText="Allah'u Ekber";
                if(vm.TesbihThree<=0)
                {
                    vm.TesbihThree = vm.TesbihCount
                    console.log("3.")
                }
                break;

        }
    vm.isLoading = true;
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