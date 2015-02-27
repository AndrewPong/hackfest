System.register(["aurelia-http-client", "aurelia-framework", "d3", "mozilla/metrics-graphics"], function (_export) {
  var HttpClient, LogManager, D3, Metrics, _prototypeProperties, _classCallCheck, url, logger, Dashboard;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_d3) {
      D3 = _d3.D3;
    }, function (_mozillaMetricsGraphics) {
      Metrics = _mozillaMetricsGraphics.Metrics;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      // var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
      // var url = 'http://hackfest.azurewebsites.net/api/oee';
      url = "http://www.usa.gov/api/USAGovAPI/contacts.jsonp/contacts";
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
              return this.http.jsonp(url, "callmemaybe").then(function (response) {
                _this.payload = response.items;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNWLFVBQVUsRUFDVixFQUFFLEVBQ0YsT0FBTyx5Q0FLWCxHQUFHLEVBR0gsTUFBTSxFQUdHLFNBQVM7Ozs7QUFkZCxnQkFBVSxzQkFBVixVQUFVOztBQUNWLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YsUUFBRSxPQUFGLEVBQUU7O0FBQ0YsYUFBTywyQkFBUCxPQUFPOzs7Ozs7Ozs7OztBQUtYLFNBQUcsR0FBRywwREFBMEQ7QUFHaEUsWUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0FBR2pDLGVBQVM7QUFFVCxpQkFGQSxTQUFTLENBRVIsSUFBSTtnQ0FGTCxTQUFTOztBQUdwQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2pDLGNBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBQy9CLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs2QkFQVSxTQUFTO0FBQ2IsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBUXhDLGtCQUFRO21CQUFBLG9CQUFFOzs7QUFDUixvQkFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN6QyxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzFELHNCQUFLLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2VBQy9CLENBQUMsQ0FBQzthQUNKOzs7O0FBRUQsdUJBQWE7bUJBQUEseUJBQUU7QUFDYixvQkFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM3QixxQkFBTyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNuRDs7Ozs7O2VBbkJVLFNBQVMiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=