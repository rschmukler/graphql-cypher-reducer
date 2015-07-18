import expect from 'expect.js';

import {
  RegisterField, RegisterNode, RegisterRelation
} from '../dist';

import {
  graphql, GraphQLSchema, GraphQLObjectType, GraphQLString,
  GraphQLInt, GraphQLBoolean, GraphQLList
} from 'graphql';

import {
  expectCypher
} from './helpers';

import { Person } from './fixtures';

describe('e2e', () => {
  it('supports a basic query', (done) => {
    let query = '{ singlePerson { name } }';
    graphql(mockSchema({
      singlePerson: {
        type: Person,
        collect: RegisterNode(),
        resolve: (a, b, c, d, e, f, g, node) => {
          try {
            let {cypher,params} = node.startFrom('MATCH (n) WHERE id(n) = 123');
            expectCypher(cypher, `
            `);
            done();
          } catch(e) {
            done(e);
          }
        }
      }
    }), query);
  });
});

function mockSchema(fields) {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: () => (fields)
    })
  });
}

