class Model{

      constructor(observers=[], seconds=0){
            this.observers=observers;
            this.setSeconds(seconds);
      }

      setSeconds(seconds) {
            this.seconds = seconds;
            this.notifyObservers();
      }

      addObserver(callback)
      {
            this.observers.push(callback);
      }

      removeObserver(callback)
      {
            this.observers = this.observers.filter(ob => callback.toString() !== ob.toString());
      }
      
      notifyObservers()
      {
            this.observers.forEach(cb => cb());
      }

};

export default Model;



   






