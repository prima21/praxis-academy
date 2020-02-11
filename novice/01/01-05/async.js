const hitung =(a,b) => {
    return new promise(resolve =>{
        setTimeout(() => {
            resolve (a+b);
        }, 100);
    });
};

const main =async()=> {
    try{
        const hasil1 = await hitung(3,4);
        const hasil2 = await hitung(hasil1,10);
        return hasil2;        
    } catch (error){
        throw`waduh ${error}`;
    }
};

(async ()=> {
    console.log(await main());
})();