System.register(["aurelia-framework"], function (_export) {
  var Behavior, _prototypeProperties, _classCallCheck, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar() {
          _classCallCheck(this, NavBar);
        }

        _prototypeProperties(NavBar, {
          metadata: {
            // static metadata(){ return Behavior.withProperty('router').useShadowDOM(); }

            value: function metadata() {
              return Behavior.withProperty("router");
            }

            // Aurelia determines the name of the custom element by convention: it will use the class name, lowered and hyphenated.
            // To be explicit, add more metadata by chaining .customElement('nav-bar') on Behavior
            // If the custom element doesn't have a view, chain .noView()
            // To use ShadowDOM, chain .useShadowDOM()

            ,
            writable: true,
            configurable: true
          }
        });

        return NavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEseUNBRUgsTUFBTTs7OztBQUZYLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsWUFBTTtpQkFBTixNQUFNO2dDQUFOLE1BQU07Ozs2QkFBTixNQUFNO0FBRVYsa0JBQVE7OzttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDZCxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekI7Ozs7Ozs7QUFBQTs7Ozs7O2VBTFUsTUFBTSIsImZpbGUiOiJuYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=