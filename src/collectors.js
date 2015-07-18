import Node from './node';

export function RegisterField(srcName) {
  return (children, args, root, field, type) => {
    srcName = srcName || field.name.value;
    let outName = field.name.value;
    return { registerField: { src: srcName, out: outName }};
  };
}

export function RegisterNode() {
  return (children, args, root, field, type) => {
    let loadFields = Object.keys(children).map( x => children[x].data.registerField );
    return new Node({
      fields: loadFields
    });
  };
}

export function RegisterRelation(traversal) {
  return (children, args, root, field, type) => {
    return { loadRelation: traversal };
  };
}
