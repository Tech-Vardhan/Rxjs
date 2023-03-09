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
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
