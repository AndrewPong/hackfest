import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.none);
// Log level options include: none, error, warn, info and debug
// To create custom logging appenders: https://github.com/aurelia/logging-console/blob/master/src/index.js

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator();
    // .plugin('./path/to/plugin');

  aurelia.start().then(a => a.setRoot('app', document.body));
}