class Model{

      constructor(observers=[], highscore=[1, 2, 3]){
            this.observers = observers;
            this.highscore = highscore;
      }

      addHighscore(score) {
            this.highscore.push(score);
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



   






