import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { HomeComponent } from './components/home/home.component';
import { SignsComponent } from './components/signs/signs.component';
import { RalliesComponent } from './components/rallies/rallies.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { DragService } from './services/drag.service';
import { DraggableDirective } from './directives/drag.directive';
import { DropTargetDirective } from './directives/drop-target.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignsComponent,
    RalliesComponent,
    GeneratorComponent,
    DraggableDirective,
    DropTargetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
