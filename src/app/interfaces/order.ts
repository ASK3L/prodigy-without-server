import { User } from './user';

export class Order {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public quantity?: string,
    public owner?: string
  ) {}
}
