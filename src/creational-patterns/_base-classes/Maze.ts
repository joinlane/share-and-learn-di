import Room from './Room';

export default class Maze {
  private _roomMap = new Map<number, Room>();

  constructor() {
    this._roomMap = new Map<number, Room>();
  }

  AddRoom(room: Room) {
    this._roomMap.set(room.roomNumber, room);
  }

  RoomNo(roomNumber: number): Room {
    return this._roomMap.get(roomNumber);
  }
}
