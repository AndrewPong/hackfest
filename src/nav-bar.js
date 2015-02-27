import {Behavior} from 'aurelia-framework';

export class NavBar {
  // static metadata(){ return Behavior.withProperty('router').useShadowDOM(); }
  static metadata(){ 
    return Behavior
    .withProperty('router');
  }

  // Aurelia determines the name of the custom element by convention: it will use the class name, lowered and hyphenated. 
  // To be explicit, add more metadata by chaining .customElement('nav-bar') on Behavior
  // If the custom element doesn't have a view, chain .noView()
  // To use ShadowDOM, chain .useShadowDOM()

}