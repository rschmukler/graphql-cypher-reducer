import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

describe('Run', () => {
  let Person = new GraphQLObjectType({
    name: 'Person',
    description: 'A person',
    fields: {
      name: {
        type: GraphQLString,
        collect: logCollect("Child", { returnResult: "Test" })
      }
    }
  });

  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: Person,
          collect: logCollect("Parent"),
          resolve: (parent) => {
            return { name: "Test", age: 25 };
          }
        }
      }
    })
  });

  var query = '{ hello { name } }';

  graphql(schema, query).then(result => {
    console.log(result);
  });

  function logCollect(name, ret) {
    return (children, args, root, field, type) => {
      console.log(`${name} collect:`);
      console.log(`  children: %j`, children);
      console.log(`  args: %j`, args);
      console.log(`  root: ${root}`);
      console.log(`  field: %j`, field.name.value);
      console.log(`  type: %j`, type);
      return ret;
    };
  }
});
