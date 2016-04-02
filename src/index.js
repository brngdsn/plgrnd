import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {Plgrnd} from 'plgrnd';

@Component({
  selector: 'main'
})

@View({
  directives: [Plgrnd0],
  template: `
    <plgrnd></plgrnd>
  `
})

class Main {

}

bootstrap(Main);
