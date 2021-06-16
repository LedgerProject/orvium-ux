import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxSpinner, PRIMARY_SPINNER, Spinner } from './orv-spinner.enum';

@Injectable({
  providedIn: 'root'
})
export class OrvSpinnerService {
  // @ts-ignore
  // @ts-ignore
  /**
   * Spinner observable
   *
   * @memberof NgxSpinnerService
   */
    // @ts-ignore
  private spinnerObservable = new BehaviorSubject<NgxSpinner>(null);

  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() {
  }

  /**
   * Get subscription of desired spinner
   * @memberof NgxSpinnerService
   **/
  getSpinner(name: string): Observable<NgxSpinner> {
    return this.spinnerObservable.asObservable().pipe(filter((x: NgxSpinner) => x && x.name === name));
  }

  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */
  show(name: string = PRIMARY_SPINNER, spinner?: Spinner): void {
    setTimeout(() => {
      const showPromise = new Promise((resolve, _reject) => {
        if (spinner && Object.keys(spinner).length) {
          // @ts-ignore
          spinner['name'] = name;
          this.spinnerObservable.next(new NgxSpinner({ ...spinner, show: true }));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
          resolve(true);
        }
      });
      return showPromise;
    }, 10);
  }

  /**
   * To hide spinner
   *
   * @memberof NgxSpinnerService
   */
  hide(name: string = PRIMARY_SPINNER, debounce: number = 10): void {
    setTimeout(() => {
      const hidePromise = new Promise((resolve, _reject) => {
        this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
        resolve(true);
      });
      return hidePromise;
    }, debounce);
  }
}
