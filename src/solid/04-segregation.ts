interface Bird {
  eat(): void;
  
}

interface FlyingBird{
  fly(): void;
}
interface RunningBird{
  run(): void;
}

interface SwimmerBird{
  swin():void;
}

class Tucan implements Bird,FlyingBird {
  public fly() { }
  public eat() { }
  
}

class HumminBird implements Bird,FlyingBird {
  fly(): void {

  }
  eat(): void {
  }

}
class Ostrich implements Bird,RunningBird{
  public eat() { }
  run(): void {
  }
}

class Penguin implements Bird, SwimmerBird{
  public eat() { }
  swin(): void {
      
  }
}