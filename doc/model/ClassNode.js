'use strict';

var DocumentedNode = require('./DocumentedNode');

var ClassNode = DocumentedNode.extend({
  name: 'class',
  properties: {
    parent: 'id',
    name: 'string',
    members: ['array', 'id'],
    isAbstract: 'boolean',
    isStatic: 'boolean',
    superClass: 'id', // when @extends is defined
  },
  getSpecificType: function() {
    if (this.isAbstract) return 'abstract-class';
    return 'class';
  }
});

ClassNode.static.blockType = true;

module.exports = ClassNode;

