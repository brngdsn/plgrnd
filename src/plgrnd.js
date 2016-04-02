import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'plgrnd'
})

@View({
  templateUrl: 'plgrnd.html'
})

export class Plgrnd {

  constructor() {
    console.info('Plgrnd Component Mounted Successfully');
  }

}
