import {UserInterface} from "./user.interface";
import {RoomInterface} from "./room.interface";
import {Meta} from "@angular/platform-browser";

export interface MessageInterface {
  id: number;
  text: string;
  user: UserInterface;
  room: RoomInterface;
  created_at: Date;
  update_at: Date;
}

export interface MessagePaginatel {
  items: MessageInterface;
  meta: Meta;
}
