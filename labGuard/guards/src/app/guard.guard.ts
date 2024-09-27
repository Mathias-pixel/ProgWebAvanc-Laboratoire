import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {

  let sale = localStorage.getItem("saless");
  let sucres = localStorage.getItem("sucress");

  if (sale && !sucres) {
    return createUrlTreeFromSnapshot(route, ['/sel']);
  }
  else if (!sale && sucres) {
    return createUrlTreeFromSnapshot(route, ['/bonbon']);
  }
  else if (!sale && !sucres) {
    return createUrlTreeFromSnapshot(route, ['/verreDeau']);
  }
  else {
    return true;
  }


};
