import { Query, Resolver } from 'type-graphql';
import { Greeting } from '../models';

@Resolver()
export class GreetingResolver {
  @Query(() => Greeting)
  async greeting(): Promise<Greeting> {
    return {
      text: 'Hello World!',
    };
  }
}
