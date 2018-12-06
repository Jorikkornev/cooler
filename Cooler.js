function Cooler(){
  const inCooler = [];
   
  const Product=(n,t,c)=>{
    return {
    name: n,
    type: t,
    coast: c,
    };
  };
  
   return{
     add: (n,t,c) => {
       let temp = Product(n,t,c);
       inCooler.push(temp);
       },
     getAll: () => inCooler.slice(),
     remove: (item) => {for (let i=0;i<inCooler.length;i++)if (inCooler[i].name===item){inCooler.splice(i,1);}},
     removeAll: () => inCooler.length=0
   };
}
