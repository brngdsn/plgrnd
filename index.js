System.register("index", ["angular2/angular2", "plgrnd"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      Plgrnd,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Plgrnd = $__m.Plgrnd;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Plgrnd],
            template: "\n    <plgrnd></plgrnd>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
