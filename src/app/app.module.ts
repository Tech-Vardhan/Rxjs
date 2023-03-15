import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseAwaitComponent } from './component/promise-await/promise-await.component';
import { ObservableComponent } from './component/observable/observable.component';
import { ListComponent } from './component/observable/list/list.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { ToArrayComponent } from './component/observable/to-array/to-array.component';
import { CustomObservableComponent } from './component/observable/custom-observable/custom-observable.component';
import { MapComponent } from './component/observable/map/map.component';
import { PluckComponent } from './component/observable/pluck/pluck.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { TapComponent } from './component/observable/tap/tap.component';
import { TakeComponent } from './component/observable/take/take.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { DebounceTimeComponent } from './component/observable/debounce-time/debounce-time.component';
import { BehaviorComponent } from './component/observable/behavior/behavior.component';
import { Test1Component } from './component/observable/test1/test1.component';
import { Test2Component } from './component/observable/test2/test2.component';
import { ReplayComponent } from './component/observable/replay/replay.component';
import { AsyncComponent } from './component/observable/async/async.component';
import { MergeComponent } from './component/observable/merge/merge.component';
import { ConcatComponent } from './component/observable/concat/concat.component';
import { MergeMapComponent } from './component/observable/merge-map/merge-map.component';
import { SearchComponent } from './component/observable/search/search.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './component/observable/exhaust-map/exhaust-map.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseAwaitComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    BehaviorComponent,
    Test1Component,
    Test2Component,
    ReplayComponent,
    AsyncComponent,
    MergeComponent,
    ConcatComponent,
    MergeMapComponent,
    SearchComponent,
    ExhaustMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
