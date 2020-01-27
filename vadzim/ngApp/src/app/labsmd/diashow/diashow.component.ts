import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diashow',
  templateUrl: './diashow.component.html',
  styles: []
})
export class DiashowComponent implements OnInit {
  // Wenn Wert für die Prop von oben kommt -> Dekorator @Input()
  @Input() images: string[];
  activeImg = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.activeImg === 3 ? this.activeImg = 0 : this.activeImg++
    }, 2000);
  }

}
