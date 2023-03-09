import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './component/observable/custom-observable/custom-observable.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { ListComponent } from './component/observable/list/list.component';
import { MapComponent } from './component/observable/map/map.component';
import { ObservableComponent } from './component/observable/observable.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { PluckComponent } from './component/observable/pluck/pluck.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { TapComponent } from './component/observable/tap/tap.component';
import { ToArrayComponent } from './component/observable/to-array/to-array.component';
import { PromiseAwaitComponent } from './component/promise-await/promise-await.component';

const routes: Routes = [
  { path: 'promise', component: PromiseAwaitComponent },
  {
    path: 'observe',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'customObservabale', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'retry', component: RetryComponent},
    ],
  },
  { path: '**', component: PromiseAwaitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
