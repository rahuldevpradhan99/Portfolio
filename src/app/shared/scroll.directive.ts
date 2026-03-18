import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('show');
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}