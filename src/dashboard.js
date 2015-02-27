import {HttpClient} from 'aurelia-http-client';
import {LogManager} from 'aurelia-framework';
import {D3} from 'd3'
import {Metrics} from 'mozilla/metrics-graphics';


// var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
// var url = 'http://hackfest.azurewebsites.net/api/oee';
var url = 'http://www.usa.gov/api/USAGovAPI/contacts.jsonp/contacts';


var logger = LogManager.getLogger("dashboard");


export class Dashboard{
  static inject() { return [HttpClient]; }
  constructor(http){
  logger.debug('Dashboard starting');
    this.heading = 'OEE Dashboard';
    this.payload = [];
    this.http = http;
  }

  activate(){
    logger.debug('Pulling data from ' + url);
    return this.http.jsonp(url, 'callmemaybe').then(response => {
      this.payload = response.items;
    });
  }

  canDeactivate(){
    logger.debug('deactivating');
    return confirm('Are you sure you want to leave?');
  }
}