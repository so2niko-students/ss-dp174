class Singletone{
    constructor(){
      this.info = 1;
    }
    
    static getSingle(){
      if(Singletone.instance){
        return Singletone.instance;
      }
      return Singletone.instance = new Singletone();
    }
  }
  
  const s = Singletone.getSingle();
  
  
  const s2 = Singletone.getSingle();
  s2.info = 2;
  console.log(s);
  
  console.log(s2);