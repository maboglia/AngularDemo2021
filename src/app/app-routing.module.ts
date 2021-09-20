import { ToDoComponent } from './to-do/to-do.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'magazzino', component: MagazzinoComponent },
  {path: 'test', component: TestComponent},
  {path: 'todo', component: ToDoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
