import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignsComponent } from './components/signs/signs.component';
import { RalliesComponent } from './components/rallies/rallies.component';
import { GeneratorComponent } from './components/generator/generator.component';

export const AppRoutes = {
    Home: '',
    Signs: 'signs',
    Generator: 'generator',
    Rallies: 'rallies'
};

export const routes: Routes = [
    { path: AppRoutes.Home, component: HomeComponent },
    { path: AppRoutes.Signs, component: SignsComponent },
    { path: AppRoutes.Generator, component: GeneratorComponent},
    { path: AppRoutes.Rallies, component: RalliesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
