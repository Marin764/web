const fs = require('fs');
const path = process.env.HOME + '/.claude/projects/c--Users-hutingrong-Downloads-web-main/de20e6bc-31ed-4726-92ac-3d368fd5a56e/tool-results/b8y0hsl78.txt';
try {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  const nodes = data.nodes;
  for (const [nodeId, nodeData] of Object.entries(nodes)) {
    const doc = nodeData.document;
    function extractText(node, depth) {
      let result = [];
      const name = node.name || '';
      const type = node.type || '';
      const chars = node.characters || '';
      if (chars) {
        result.push('  '.repeat(depth) + '[' + type + '] ' + name + ': ' + chars.substring(0, 400).replace(/\n/g, '\\n'));
      } else if (name && (type === 'FRAME' || type === 'SECTION' || type === 'GROUP' || type === 'TEXT')) {
        result.push('  '.repeat(depth) + '[' + type + '] ' + name);
      }
      if (node.children) {
        for (const child of node.children) {
          result = result.concat(extractText(child, depth + 1));
        }
      }
      return result;
    }
    const lines = extractText(doc, 0);
    console.log(lines.join('\n'));
  }
} catch (e) {
  console.log('Error:', e.message);
  console.log('Tried path:', path);
}