import expect from 'expect.js';

import {
  RegisterField, RegisterNode, RegisterRelation
} from '../dist';

import Node from '../dist/node';

import { getField } from './helpers';

describe(`Collectors`, () => {
  describe(`RegisterField`, () => {
    it(`returns a registerField instruction`, () => {
      let mockField = getField(`{ name }`);
      let res = RegisterField()(undefined, undefined, undefined, mockField);
      expect(res).to.eql({ registerField: { src: `name`, out: `name` } });
    });

    it(`allows specifying a custom src`, () => {
      let mockField = getField(`{ id }`);
      let res = RegisterField(`id(n)`)(undefined, undefined, undefined, mockField);
      expect(res).to.eql({ registerField: { src: `id(n)`, out: `id` } });
    });
  });

  describe(`RegisterRelation`, () => {
    it('returns a loadRelation instruction', () => {
      let res = RegisterRelation('(n)-[:IS_FRIENDS_WITH]-(friends:Person)')();
      expect(res.loadRelation).to.be('(n)-[:IS_FRIENDS_WITH]-(friends:Person)');
    });
  });

  describe(`RegisterNode`, () => {
    it(`returns a Node instance`, () => {
      let res = RegisterNode()({
        name: { data: { registerField: { src: 'name', out: 'name' } } }
      });
      expect(res).to.be.a(Node);
    });
  });
});
