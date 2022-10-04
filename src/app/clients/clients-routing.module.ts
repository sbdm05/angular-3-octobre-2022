import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';

// routes dans Clients Module
const routes: Routes = [
  // route '' vers PageListClients
  { path: '', component: PageListClientsComponent },
  // route 'add' vers PageAddClient
  { path: 'add', component: PageAddClientComponent },
  // route 'edit' vers PageEditClient
  { path: 'edit', component: PageEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
