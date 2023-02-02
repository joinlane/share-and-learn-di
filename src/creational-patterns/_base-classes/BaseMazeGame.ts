import Door from './Door';
import Maze from './Maze';
import Room from './Room';
import Wall from './Wall';

export default class BaseMazeGame {
  CreateMaze(): Maze {
    const maze = new Maze();
    const r1 = new Room(1);
    const r2 = new Room(2);
    const theDoor = new Door(r1, r2);

    maze.AddRoom(r1);
    maze.AddRoom(r2);

    r1.SetSide('North', new Wall());
    r1.SetSide('East', theDoor);
    r1.SetSide('South', new Wall());
    r1.SetSide('West', new Wall());

    r2.SetSide('North', new Wall());
    r2.SetSide('East', new Wall());
    r2.SetSide('South', new Wall());
    r2.SetSide('West', theDoor);

    return maze;
  }
}
