interface Bird {
  eat(): void;
  run(): void;
}

interface FlyingBird{
  fly(): void;
}

class Tucan implements Bird,FlyingBird {
  public fly() { }
  public eat() { }
  public run() { }
}

class HumminBird implements Bird {
  fly(): void {

  }
  eat(): void {

  }
  run(): void {

  }

}
class Ostrich implements Bird{
  public fly() { }
  public eat() { }
  public run() { }
}

class Penguin implements Bird{
  public fly() { }
  public eat() { }
  public run() { }
}