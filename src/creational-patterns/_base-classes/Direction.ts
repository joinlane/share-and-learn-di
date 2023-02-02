import { z } from 'zod';

const Direction = z.enum(['North', 'South', 'East', 'West']);
type Direction = z.infer<typeof Direction>;

export default Direction;
