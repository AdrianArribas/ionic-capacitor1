import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then(module => module.AvatarPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../list/list.module').then(module => module.ListPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../infscroll/infscroll.module').then(module => module.InfscrollPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
