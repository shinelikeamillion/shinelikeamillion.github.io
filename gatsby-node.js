/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function (
        context,
        request,
        callback
      ) {
        const regex = /^@?firebase(\/(.+))?/
        if (regex.test(request)) {
          return callback(null, `umd ${request}`)
        }
        callback()
      }),
    })
  }
}