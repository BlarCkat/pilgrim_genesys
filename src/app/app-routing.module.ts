import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './docs/getting-started/getting-started.component';
import { OverviewComponent } from './docs/overview/overview.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'overview', component: OverviewComponent},
  {path:'getting-started', component: GettingStartedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
