/*import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';


describe('Run', () => {
  let Person = new GraphQLObjectType({
    name: 'Person',
    description: 'A person',
    fields: () => ({
      name: {
        type: GraphQLString,
        collect: RegisterField()
      },
      age: {
        type: GraphQLInt,
        collect: RegisterField()
      },
      friends: {
        type: new GraphQLList(Person),
        collect: RegisterRelation('(n)-[:IS_FRIENDS-WITH]-(friends:Person)')
      },
      isOlderThan: {
        type: GraphQLBoolean,
        args: {
          age: {
            type: GraphQLInt
          }
        },
        collect: RegisterField('n.age > { age }')
      }
    })
  });

  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: () => ({
        findPerson: {
          type: Person,
          collect: RegisterNode(),
          resolve: () => {
            return {
              name: 'Bob',
              age: 28,
              friends: [
                { name: 'Steve', age: 40 },
                { name: 'Earl', age: 22 },
                { name: 'Derrick', age: 58 },
                { name: 'David', age: 19 }
              ]
            };
          }
        }
      })
    })
  });

  var query = '{ bob: findPerson { name age friends { name }} }';

  graphql(schema, query).then(result => {
  });
});*/
