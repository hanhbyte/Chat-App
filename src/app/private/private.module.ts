import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ReateRoomComponent } from './components/reate-room/reate-room.component';
import { DashbroadComponent } from './components/dashbroad/dashbroad.component';
import { SelectUsersComponent } from './components/select-users/select-users.component';



@NgModule({
  declarations: [
    ChatMessageComponent,
    ChatRoomComponent,
    ReateRoomComponent,
    DashbroadComponent,
    SelectUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
