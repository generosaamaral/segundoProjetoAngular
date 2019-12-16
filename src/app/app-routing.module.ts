import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {TarefasComponent} from './tarefas/tarefas.component';
import {BuscaComponent}   from './busca/busca.component';

const routes: Routes = [
  {path:'', redirectTo: '', pathMatch: "full" },
  {path: 'home', component: HomeComponent},
  {path: 'tarefas', component: TarefasComponent},
  {path: 'busca', component: BuscaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
