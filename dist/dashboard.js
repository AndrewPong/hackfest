System.register(["aurelia-http-client", "aurelia-framework", "d3", "PMSI-AlignAlytics/dimple/dist/dimple.latest"], function (_export) {
  var HttpClient, LogManager, D3, Dimple, _prototypeProperties, _classCallCheck, url, logger, Dashboard;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_d3) {
      D3 = _d3.D3;
    }, function (_PMSIAlignAlyticsDimpleDistDimpleLatest) {
      Dimple = _PMSIAlignAlyticsDimpleDistDimpleLatest.Dimple;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      // var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
      url = "http://hackfest.azurewebsites.net/api/oee";

      // var url = 'http://www.usa.gov/api/USAGovAPI/contacts.jsonp/contacts';

      logger = LogManager.getLogger("dashboard");
      Dashboard = _export("Dashboard", (function () {
        function Dashboard(http) {
          _classCallCheck(this, Dashboard);

          logger.debug("Dashboard starting");
          this.heading = "OEE Dashboard";
          this.payload = [];
          this.http = http;
        }

        _prototypeProperties(Dashboard, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;

              logger.debug("Pulling data from " + url);
              return this.http.jsonp(url).then(function (response) {
                _this.payload = response;
              });
            },
            writable: true,
            configurable: true
          },
          canDeactivate: {
            value: function canDeactivate() {
              logger.debug("deactivating");
              return confirm("Are you sure you want to leave?");
            },
            writable: true,
            configurable: true
          }
        });

        return Dashboard;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNWLFVBQVUsRUFDVixFQUFFLEVBQ0YsTUFBTSx5Q0FJVixHQUFHLEVBSUgsTUFBTSxFQUVHLFNBQVM7Ozs7QUFiZCxnQkFBVSxzQkFBVixVQUFVOztBQUNWLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YsUUFBRSxPQUFGLEVBQUU7O0FBQ0YsWUFBTSwyQ0FBTixNQUFNOzs7Ozs7Ozs7O0FBSVYsU0FBRyxHQUFHLDJDQUEyQzs7OztBQUlqRCxZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFFakMsZUFBUztBQUVULGlCQUZBLFNBQVMsQ0FFUixJQUFJO2dDQUZMLFNBQVM7O0FBR3BCLGdCQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDakMsY0FBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsY0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7OzZCQVBVLFNBQVM7QUFDYixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFReEMsa0JBQVE7bUJBQUEsb0JBQUU7OztBQUNSLG9CQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUMzQyxzQkFBSyxPQUFPLEdBQUcsUUFBUSxDQUFDO2VBQ3pCLENBQUMsQ0FBQzthQUNKOzs7O0FBRUQsdUJBQWE7bUJBQUEseUJBQUU7QUFDYixvQkFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM3QixxQkFBTyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNuRDs7Ozs7O2VBbkJVLFNBQVMiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=