import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-fiche4',
  templateUrl: './fiche4.component.html',
  styleUrls: ['./fiche4.component.scss']
})
export class Fiche4Component {

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}