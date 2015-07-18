import {
  RegisterField, RegisterNode, RegisterRelation
} from '../dist';

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';

export let Person = new GraphQLObjectType({
  name: 'Person',
  description: 'A person',
  fields: () => ({
    name: {
      type: GraphQLString,
      collect: RegisterField()
    }
  })
});


export var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      type: Person,
      collect: RegisterNode(),
      resolve: () => {
      }
    })
  })
});
