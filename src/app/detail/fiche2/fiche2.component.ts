import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-fiche2',
  templateUrl: './fiche2.component.html',
  styleUrls: ['./fiche2.component.scss']
})
export class Fiche2Component {

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}