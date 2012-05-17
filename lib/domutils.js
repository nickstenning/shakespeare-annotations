var walk = function(node, call) {
  if (typeof call === 'undefined' || call == null) { return; }

  walkLoop:
  while (true) {
    call(node);
    if (node.firstChild) {
      node = node.firstChild;
      continue;
    } else if (node.nextSibling) {
      node = node.nextSibling;
      continue;
    } else {
      while ((node = node.parentNode)) {
        if (node.nextSibling) {
          node = node.nextSibling;
          continue walkLoop;
        }
      }
      break;
    }    
  }
};
exports.walk = walk;

var textNodes = function(node) {
  var nodes = [];
  walk(node, function (node) {
    if (node.nodeType === 3) {
      nodes.push(node);
    }
  });
  return nodes;
};
exports.textNodes = textNodes;

var nodeData = function(node) {
  // Replace whitespace characters (from &nbsp; and friends) that wc counts as
  // two characters with a space.
  return node.data.replace(/[\xa0\xc2]/gm, " ");
};
exports.nodeData = nodeData;

var xpath = function(node, relativeRoot) {
  if (typeof relativeRoot === 'undefined' || relativeRoot == null) {
    relativeRoot = node.ownerDocument;
  }

  var node, idx;
  var path = '';

  while (node && node.nodeType === 1 && node !== relativeRoot) {
    idx = node
      .parentNode
      .childNodes
      .filter(function (n) { return n.tagName === node.tagName; })
      .indexOf(node) + 1;
    path = "/" + node.tagName.toLowerCase() + "[" + idx + "]" + path;
    node = node.parentNode;
  }

  return path;
};
exports.xpath = xpath;