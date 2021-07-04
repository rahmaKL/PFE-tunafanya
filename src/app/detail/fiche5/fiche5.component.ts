import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-fiche5',
  templateUrl: './fiche5.component.html',
  styleUrls: ['./fiche5.component.scss']
})
export class Fiche5Component {

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}