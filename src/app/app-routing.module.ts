import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './screens/details/details.component';
import { HomeComponent } from './screens/home/home.component';
import { Zadatak1Component } from './screens/zadatak1/zadatak1.component';
import { Zadatak3Component } from './screens/zadatak3/zadatak3.component';

const routes: Routes = [
  {
    path: 'zadatak',
    children: [
      { path: '1', component: Zadatak1Component },
      { path: '3', component: Zadatak3Component },
    ],
  },
  { path: '', component: HomeComponent },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
