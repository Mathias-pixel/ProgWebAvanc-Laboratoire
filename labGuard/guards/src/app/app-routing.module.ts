import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './Parent/Parent.component';
import { SelComponent } from './sel/sel.component';
import { VerreDeauComponent } from './verreDeau/verreDeau.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { CaramelAuSelComponent } from './caramelAuSel/caramelAuSel.component';
import { guardGuard } from './guard.guard';

const routes: Routes = [



  {
    path: '', component: ParentComponent, children: [
      { path: 'sel', component: SelComponent },
      { path: 'verreDeau', component: VerreDeauComponent },
      { path: 'bonbon', component: BonbonComponent },
      { path: 'caramelAuSel', component: CaramelAuSelComponent, canActivate: [guardGuard] },
    ]
  },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
