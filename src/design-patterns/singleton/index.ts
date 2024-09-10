// Singleton design patter it is creational design pattern which is used to create single object in memory that can do some procedures and it can be used all over the app
// such as the services in angular and nest

// we need to create just one instance of this class how can we do it
// we have two ways

// so easy way by export default an instance from this file
// or ban creating other instances in constructor

// I will do both
class Singleton {
  private static instance: Singleton;
  constructor() {
    if (Singleton.instance) {
      throw new Error("You can only have one instance");
    }
    Singleton.instance = this;
  }
}

// or the easiest way
class UserService {
  constructor() {}
}

const userService = Object.freeze(new UserService());

export default userService;
