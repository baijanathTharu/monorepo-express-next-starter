import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Greeting {
  @Field()
  text: string;
}
