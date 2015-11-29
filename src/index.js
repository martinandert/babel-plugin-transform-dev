export default function plugin({ types: t, template }) {
  const expr = template('"production" !== process.env.NODE_ENV')();
  const bool = t.booleanLiteral('production' !== process.env.NODE_ENV);

  return {
    visitor: {
      Identifier(path) {
        if (t.isIdentifier(path.node, { name: '__DEV__' })) {
          path.replaceWith(this.opts.evaluate ? bool : expr);
        }
      }
    }
  };
}
