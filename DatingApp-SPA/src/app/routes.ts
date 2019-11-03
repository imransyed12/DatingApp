import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MembersListComponent } from '../members/members-list/members-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_gaurds/auth.guard';
import { MemberDetailComponent } from 'src/members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_reslovers/member-detail.resolver';
import { MemberListResolver } from './_reslovers/member-list.resolver';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MembersListComponent,  resolve: { users: MemberListResolver } },
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
