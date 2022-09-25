import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/reviews-fastcomet/reviews-fastcomet.component';
import { ContactComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
// import { BluehostComponent } from './pages/reviews-bluehost/reviews-bluehost.component';
import { AboutComponentdreamhost } from './pages/reviews-dreamhost/reviews-dreamhost.component';
import { AboutComponenthostarmada } from './pages/reviews-hostarmada/reviews-hostarmada.component';
// import { ionosComponent } from './pages/reviews-ionos/reviews-ionos.component';
import { AboutComponentgodaddy } from './pages/reviews-godaddy/reviews-godaddy.component';
// import { hostgatorComponent } from './pages/reviews-hostgator/reviews-hostgator.component';
 import { AboutComponenthostinger } from './pages/reviews-hostinger/reviews-hostinger.component';
// import { hostpapaComponent } from './pages/reviews-hostpapa/reviews-hostpapa.component';
import { FeaturesComponent } from './features/features.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { AboutComponentbluehost } from './pages/reviews-bluehost/reviews-bluehost.component';
import { AboutComponentinterserver } from './pages/reviews-interserver/reviews-interserver.component';
import { AboutComponenta2hosting } from './pages/reviews-a2hosting/reviews-a2hosting.component';
import { AboutComponenthostgator } from './pages/reviews-hostgator/reviews-hostgator.component';
import { AboutComponentcloudways } from './pages/reviews-cloudways/reviews-cloudways.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'reviews-fastcomet',component:AboutComponent},
  {path:'reviews-bluehost',component:AboutComponentbluehost},
  // {path:'reviews-bluehost',component:BluehostComponent},
  {path:'reviews-dreamhost',component:AboutComponentdreamhost},
  {path:'reviews-interserver',component:AboutComponentinterserver},
  {path:'reviews-hostarmada',component:AboutComponenthostarmada},
  // {path:'reviews-ionos',component:ionosComponent},
  {path:'reviews-godaddy',component:AboutComponentgodaddy},
  // {path:'reviews-hostgator',component:hostgatorComponent},
   {path:'reviews-hostinger',component:AboutComponenthostinger},
   {path:'reviews-a2hosting',component:AboutComponenta2hosting},
   {path:'reviews-hostgator',component:AboutComponenthostgator},
   {path:'reviews-cloudways',component:AboutComponentcloudways},
  // {path:'reviews-hostpapa',component:hostpapaComponent},
  {path:'about-us',component:ContactComponent},
  {path:'app-contact-form',component:ContactFormComponent},
  
];

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'home' },
//   {
//       path: '',component: FeaturesComponent,
//       children: [
//         {path:'home',component:HomeComponent},
//           { path: 'reviews-bluehost', loadChildren: () => import('./pages/reviews-bluehost/bluehost.module').then(m => m.BluehostModule) },
//           { path: 'reviews-dreamhost', loadChildren: () => import('./pages/reviews-dreamhost/dreamhost.module').then(m => m.dreamhostModule) },
//           { path: 'reviews-fastcomet', loadChildren: () => import('./pages/reviews-fastcomet/fastcomet.module').then(m => m.fastcometModule) },
//           { path: 'reviews-godaddy', loadChildren: () => import('./pages/reviews-godaddy/godaddy.module').then(m => m.godaddyModule) },
//           { path: 'reviews-hostarmada', loadChildren: () => import('./pages/reviews-hostarmada/hostarmada.module').then(m => m.hostarmadaModule) },
//           { path: 'reviews-hostgator', loadChildren: () => import('./pages/reviews-hostgator/hostgator.module').then(m => m.hostgatorModule) },
//           { path: 'reviews-hostinger', loadChildren: () => import('./pages/reviews-hostinger/hostinger.module').then(m => m.hostingerModule) },
//           { path: 'reviews-hostpapa', loadChildren: () => import('./pages/reviews-hostpapa/hostpapa.module').then(m => m.hostpapaModule) },
//           { path: 'reviews-interserver', loadChildren: () => import('./pages/reviews-interserver/interserver.module').then(m => m.interserverModule) },
//           { path: 'reviews-ionos', loadChildren: () => import('./pages/reviews-ionos/ionos.module').then(m => m.ionosModule) },
//            { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.menuModule) },   
//       ]
//   }
// ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
