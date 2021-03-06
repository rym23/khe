import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { HuborcontComponent } from './huborcont/huborcont.component';
import { NamesComponent } from './names/names.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material'
import {ReactiveFormsModule} from '@angular/forms';
import { WaitingComponent } from './waiting/waiting.component';
import { MainComponent } from './main/main.component';
import { EndComponent } from './end/end.component';
import { ControllerService } from './controller.service';
import { GameButtonsComponent } from './game-buttons/game-buttons.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CategoryComponent } from './category/category.component';
import { RoomCreatorComponent } from './room-creator/room-creator.component';
import { RoomJoinerComponent } from './room-joiner/room-joiner.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { QuestionBankService } from './question-bank.service';
import { TurnService } from './turn.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HuborcontComponent,
    NamesComponent,
    WaitingComponent,
    MainComponent,
    EndComponent,
    GameButtonsComponent,
    CategoryComponent,
    RoomCreatorComponent,
    RoomJoinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ControllerService, QuestionBankService, TurnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
