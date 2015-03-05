class NgInstance {
  constructor(name, type, impl) {
    this.name = name;
    this.type = type;
    this.impl = impl;
  }
}

window.angular = {};
angular.forEach = (obj, iterator) => {
  return obj.forEach(iterator);
};

angular.instances = [];
angular.module = (name, deps) => {
  return window.angular;
};

angular.controller = (ctrlName, min) => {
  angular.instances.push(new NgInstance(ctrlName, "controller", min[1]));
};


export class TestModule {
  constructor() {
  }

  activate() {
    return System.import('../angular/todo').then( () => {
      // run Angular controller instance
      angular.instances[0].impl(this);
    });
  }
}

