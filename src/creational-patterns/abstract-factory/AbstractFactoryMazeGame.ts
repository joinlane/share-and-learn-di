import EnchantedMazeFactory from '../EnchantedMazeFactory';
import Maze from '../_base-classes/Maze';
import MazeFactory from './MazeFactory';

export default class AbstractFactoryMazeGame {
  static CreateMaze(mazeFactory: MazeFactory): Maze {
    const maze = mazeFactory.MakeMaze();
    const r1 = mazeFactory.MakeRoom(1);
    const r2 = mazeFactory.MakeRoom(2);
    const theDoor = mazeFactory.MakeDoor(r2, r2);

    maze.AddRoom(r1);
    maze.AddRoom(r2);

    r1.SetSide('North', mazeFactory.MakeWall());
    r1.SetSide('East', theDoor);
    r1.SetSide('South', mazeFactory.MakeWall());
    r1.SetSide('West', mazeFactory.MakeWall());

    r2.SetSide('North', mazeFactory.MakeWall());
    r2.SetSide('East', mazeFactory.MakeWall());
    r2.SetSide('South', mazeFactory.MakeWall());
    r2.SetSide('West', theDoor);

    return maze;
  }
}

const enchantedMazeFactory = new EnchantedMazeFactory();
const enchantedMaze = AbstractFactoryMazeGame.CreateMaze(enchantedMazeFactory);