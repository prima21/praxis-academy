class segitiga{
    constructor(a1,t1){
        this.a1=a1;
        this.t2=t1;
    }
    luas(){
        console.log(this.a1*this.t2*0.5 + ``);
    }
    keliling(){
        console.log(Math.sqrt(Math.pow(this.a1,2)+Math.pow(this.t2,2))+this.a1+this.t2 + ``)
    }
}
let seg = new segitiga(4, 6);
let seg1 = new segitiga(10, 8);
seg.luas();
seg1.keliling();