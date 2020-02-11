function jml(a,b,callback){
    setTimeout(function(){
        return callback(a+b)
    },1000)
}
console.log(jml(3,5,function(hasil){}))
console.log(jml(4,5))
console.log(jml(5,5))

