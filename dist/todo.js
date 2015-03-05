System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, NgInstance, TestModule;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NgInstance = function NgInstance(name, type, impl) {
        _classCallCheck(this, NgInstance);

        this.name = name;
        this.type = type;
        this.impl = impl;
      };

      window.angular = {};
      angular.forEach = function (obj, iterator) {
        return obj.forEach(iterator);
      };

      angular.instances = [];
      angular.module = function (name, deps) {
        return window.angular;
      };

      angular.controller = function (ctrlName, min) {
        angular.instances.push(new NgInstance(ctrlName, "controller", min[1]));
      };

      TestModule = _export("TestModule", (function () {
        function TestModule() {
          _classCallCheck(this, TestModule);
        }

        _prototypeProperties(TestModule, null, {
          activate: {
            value: function activate() {
              var _this = this;

              return System["import"]("../angular/todo").then(function () {
                // run Angular controller instance
                angular.instances[0].impl(_this);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return TestModule;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs2Q0FBTSxVQUFVLEVBdUJILFVBQVU7Ozs7Ozs7Ozs7O0FBdkJqQixnQkFBVSxHQUNILFNBRFAsVUFBVSxDQUNGLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTs4QkFEeEIsVUFBVTs7QUFFWixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztPQUNsQjs7QUFHSCxZQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNwQixhQUFPLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBSztBQUNuQyxlQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDOUIsQ0FBQzs7QUFFRixhQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN2QixhQUFPLENBQUMsTUFBTSxHQUFHLFVBQUMsSUFBSSxFQUFFLElBQUksRUFBSztBQUMvQixlQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7T0FDdkIsQ0FBQzs7QUFFRixhQUFPLENBQUMsVUFBVSxHQUFHLFVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBSztBQUN0QyxlQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDeEUsQ0FBQzs7QUFHVyxnQkFBVTtBQUNWLGlCQURBLFVBQVU7Z0NBQVYsVUFBVTtTQUVwQjs7NkJBRlUsVUFBVTtBQUlyQixrQkFBUTttQkFBQSxvQkFBRzs7O0FBQ1QscUJBQU8sTUFBTSxVQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUUsWUFBTTs7QUFFbEQsdUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFNLENBQUM7ZUFDakMsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQVRVLFVBQVUiLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9