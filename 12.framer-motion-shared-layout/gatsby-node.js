const path = require(`path`);
const pageData = require(`./src/data.json`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  pageData.forEach((data) => {
    const pagePath = `/${data.slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/components/Model/index.tsx`),
      context: data,
    });
  });
};

// Fix locomotive scroll prod build issue
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
