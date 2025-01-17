'use strict';

module.exports = function renderNode($$, component, node) {
  var componentRegistry = component.context.componentRegistry || component.props.componentRegistry;
  var ComponentClass = componentRegistry.get(node.type);
  if (!ComponentClass) {
    console.error('Could not resolve a component for type: ' + node.type);
    return $$('div');
  }
  return $$(ComponentClass, {
    node: node,
    doc: node.getDocument()
  });
};
