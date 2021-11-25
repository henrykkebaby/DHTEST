class Model{
    constructor(filip=1){
          this.filip = filip;
      }

      addObserver(callback){
            this.observers = this.observers.concat(callback);
      }

      removeObserver(callback){
            this.observers = this.observers.filter(x=> x !=callback);

      }
      
      notifyObservers(){
      console.log("Notify observer called");
      this.observers.forEach(cb=>{
            setTimeout(()=> {
            try{
                  cb()
            }
            catch(error){
                  Error(error, cb);
            }
            },0)
      })
      
      }
  
};

export default Model;



   






