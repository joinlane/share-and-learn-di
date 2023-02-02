import Direction from './Direction';
import MapSite from './MapSite';

export default class Room implements MapSite {
  private _roomNumber: number;
  private _sides: Map<Direction, MapSite>;

  constructor(roomNumber: number) {
    this._roomNumber = roomNumber;
    this._sides = new Map<Direction, MapSite>();
  }

  Enter(): void {
    throw new Error('Method not implemented.');
  }

  GetSide(direction: Direction): MapSite {
    return this._sides.get(direction);
  }

  SetSide(direction: Direction, mapSite: MapSite): void {
    this._sides.set(direction, mapSite);
  }

  get roomNumber() {
    return this._roomNumber;
  }
}
