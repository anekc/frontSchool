import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import {  retry , take, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;
  constructor() {
    this.retornaObservable();
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);

    // this.retornaIntervalo()
    // .subscribe((valor) => console.log(valor));
  }

  retornaIntervalo(): Observable<number> {
    return interval(200)
    .pipe(
      map((valor) => valor + 1),
      filter( valor => (valor % 2 === 0) ? true : false),

    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });

    // obs$.pipe(
    // retry()
    // ).subscribe(
    // valor => console.log('Subs:', valor),
    // err => console.warn('Error', err),
    // () => console.warn('Obs terminado')
    // );

    return obs$;
  }

  ngOnDestroy(): void {
 this.intervalSubs.unsubscribe();
  }
}


