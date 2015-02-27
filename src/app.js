import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.heading = 'Router';
    this.router = router;
    this.router.configure(config => {
      config.title = 'DST Controls';
      config.options.pushState = true; // this is the daddy!
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title :'OEE Dashboard' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true, title :'Flickr' },
        { route: 'child-router',  moduleId: 'child-router', nav: true, title :'Child Router' }
      ]);
    });
  }
}