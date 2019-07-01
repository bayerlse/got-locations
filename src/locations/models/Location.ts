import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Location {
  @Field(type => ID)
  readonly id: number;
  @Field()
  readonly title: string;
  @Field()
  readonly country: string;
  @Field()
  readonly city: string;
  @Field()
  readonly img: string;
}
