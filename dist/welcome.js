System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, Welcome;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = "Welcome to the Aurelia Navigation App!";
          this.firstName = "John";
          this.lastName = "Doe";
        }

        _prototypeProperties(Welcome, null, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            },
            configurable: true
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            },
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs2Q0FBYSxPQUFPOzs7Ozs7Ozs7OztBQUFQLGFBQU87QUFDUCxpQkFEQSxPQUFPO2dDQUFQLE9BQU87O0FBRWhCLGNBQUksQ0FBQyxPQUFPLEdBQUcsd0NBQXdDLENBQUM7QUFDeEQsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7OzZCQUxVLE9BQU87QUFPZCxrQkFBUTtpQkFBQSxZQUFFO0FBQ1osMEJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO2FBQzdDOzs7QUFFRCxpQkFBTzttQkFBQSxtQkFBRTtBQUNQLG1CQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO2FBQ3JDOzs7Ozs7ZUFiVSxPQUFPIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==