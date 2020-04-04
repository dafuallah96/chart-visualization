import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DougnutChartComponent } from './dougnut-chart/dougnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ProjectsComponent } from './projects/projects.component';
import { ParamsComponent } from './params/params.component';
import { ElementsComponent } from './elements/elements.component';
import { EventsComponent } from './events/events.component';
import { HazardsComponent } from './hazards/hazards.component';
import { EsatoComponent } from './esato/esato.component';
import { EssidComponent } from './essid/essid.component';

const routes: Routes = [
  { path: 'bar-chart', component: ChartsComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'doughnut-chart', component: DougnutChartComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'params', component: ParamsComponent},
  { path: 'elements', component: ElementsComponent},
  { path: 'events', component: EventsComponent},
  { path: 'hazards', component: HazardsComponent},
  { path: 'esato', component: EsatoComponent},
  { path: 'essid', component: EssidComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    PieChartComponent,
    DougnutChartComponent,
    RadarChartComponent,
    ProjectsComponent,
    ParamsComponent,
    ElementsComponent,
    EventsComponent,
    HazardsComponent,
    EsatoComponent,
    EssidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
