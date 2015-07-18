import { parse } from 'graphql/lib/language/parser';
import expect from 'expect.js';

export function getField(query) {
  let ast = parse(query);
  let field = ast.definitions[0].selectionSet.selections[0];
  return field;
}

export function expectCypher(result, query) {
  expect(normalize(result)).to.be(normalize(query));

  function normalize(str) {
    return str.replace(/\n/g, ' ').replace(/ +/g, ' ').trim();
  }
}
