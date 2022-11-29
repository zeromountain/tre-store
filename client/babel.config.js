const presets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  ['@babel/preset-react', { targets: { node: 'current' } }],
];

const plugins = [];

module.exports = { presets, plugins };
