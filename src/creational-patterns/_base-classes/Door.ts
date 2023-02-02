import MapSite from './MapSite';
import Room from './Room';

export default class Door implements MapSite {
  private _room1: Room;
  private _room2: Room;
  private _isOpen: boolean;

  constructor(room1: Room, room2: Room) {
    this._room1 = room1;
    this._room2 = room2;
    this._isOpen = false;
  }

  Enter(): void {
    throw new Error('Method not implemented.');
  }

  OtherSideFrom(room: Room): Room {
    return room === this._room1 ? this._room2 : this._room1;
  }
}
