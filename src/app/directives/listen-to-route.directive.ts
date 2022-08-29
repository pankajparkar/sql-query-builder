import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[sqbListenToRoute]',
  standalone: true
})
export class ListenToRouteDirective implements OnInit {

  @Input() sqbListenToRoute!: string;
  @Input() routeParam!: string;
  @Output() listen = new EventEmitter();

  destroyed$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
  ) { }

  listenToRoute() {
    this.route.params.pipe(
      takeUntil(this.destroyed$),
      filter(p => p[this.routeParam] === this.sqbListenToRoute)
    ).subscribe(() => {
      this.listen.emit();
    });
  }

  ngOnInit(): void {
    this.listenToRoute();
  }
}
