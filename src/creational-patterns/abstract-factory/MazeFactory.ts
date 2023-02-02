import Door from '../_base-classes/Door';
import Maze from '../_base-classes/Maze';
import Room from '../_base-classes/Room';
import Wall from '../_base-classes/Wall';

export default abstract class MazeFactory {
  abstract MakeMaze(): Maze;

  abstract MakeWall(): Wall;

  abstract MakeRoom(roomNumber: number): Room;

  abstract MakeDoor(r1: Room, r2: Room): Door;
}
