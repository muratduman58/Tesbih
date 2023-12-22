export default {
    data: {
        sayac:0,
        sayacText:"Deneme"
    },
    sayacArttir() {
        this.sayac++;
       this.sayacText = this.sayac;
        console.log("BURAAAAA",this.sayacText)
    },
    resetSayac() {
        let vm = this;
        vm.sayac = 0;
        this.sayacText = this.sayac;
    }
}
