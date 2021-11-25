import {UserInterface} from "./user.interface";
import {Meta} from "@angular/platform-browser";

export interface RoomInterface {
  id: number;
  name: string;
  description: string;
  users: UserInterface[];
  create_at: Date;
  update_at: Date;
}

export interface RoomPaginatel {
  items: RoomInterface[];
  meta: Meta;
}
