class Wagon {
    constructor(capacity) {
      (this.capacity = capacity), (this.passengers = [])
    }
  
    getAvailableSeatCount() {
      return this.capacity - this.passengers.length;
    }
  
    join(traveler) {
      this.getAvailableSeatCount() > 0 ? this.passengers.push(traveler) : null;
    }
  
    shouldQuarantine() {
      if (this.capacity > 0) {
        for (const traveler of this.passengers) {
          if (!traveler.isHealthy) return true;
        }
      }
      return false;
    }
  
    totalFood() {
      if (this.capacity > 0) {
        let foodTotal = 0;
        this.passengers.forEach(passenger => {
          foodTotal += passenger.food;
        });
        return foodTotal;
      }
      return 0;
    }

    
  }