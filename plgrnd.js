System.register("plgrnd", ["angular2/angular2"], function($__export) {
  "use strict";
  var Component,
      View,
      Plgrnd;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
    }],
    execute: function() {
      Plgrnd = function() {
        function Plgrnd() {
          console.info('Plgrnd Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Plgrnd, {}, {});
      }();
      $__export("Plgrnd", Plgrnd);
      Object.defineProperty(Plgrnd, "annotations", {get: function() {
          return [new Component({selector: 'plgrnd'}), new View({templateUrl: 'plgrnd.html'})];
        }});
    }
  };
});
