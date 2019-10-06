import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appLevelBar]'
})
export class LevelBarDirective implements OnInit {
  i = 0;
  @Input() appLevelBar: number;

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnInit() {
    while (this.i < this.appLevelBar) {
      const div = this.r.createElement('div');
      this.r.appendChild(this.el.nativeElement, div);
      this.i++;
    }
  }
}
