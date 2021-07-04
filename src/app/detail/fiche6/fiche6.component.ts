import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-fiche6',
  templateUrl: './fiche6.component.html',
  styleUrls: ['./fiche6.component.scss']
})
export class Fiche6Component {

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}