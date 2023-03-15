import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './component/observable/async/async.component';
import { BehaviorComponent } from './component/observable/behavior/behavior.component';

import { ConcatComponent } from './component/observable/concat/concat.component';
import { CustomObservableComponent } from './component/observable/custom-observable/custom-observable.component';
import { DebounceTimeComponent } from './component/observable/debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './component/observable/exhaust-map/exhaust-map.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { ListComponent } from './component/observable/list/list.component';
import { MapComponent } from './component/observable/map/map.component';
import { MergeMapComponent } from './component/observable/merge-map/merge-map.component';
import { MergeComponent } from './component/observable/merge/merge.component';
import { ObservableComponent } from './component/observable/observable.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { PluckComponent } from './component/observable/pluck/pluck.component';
import { ReplayComponent } from './component/observable/replay/replay.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { SearchComponent } from './component/observable/search/search.component';
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
      { path: 'retry', component: RetryComponent },
      { path: 'debounce', component: DebounceTimeComponent },
      { path: 'behavior', component: BehaviorComponent },
      { path: 'replay', component: ReplayComponent },
      { path: 'async', component: AsyncComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'mergemap', component: MergeMapComponent },
      { path: 'search', component: SearchComponent },
      { path: 'exhaust', component: ExhaustMapComponent },
    ],
  },
  { path: '**', component: PromiseAwaitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
