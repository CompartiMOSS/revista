const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const keywordTemplate = path.resolve("src/templates/keywords.js")

  const result = await graphql(`{
  keywordsGroup: allMdx(limit: 2000) {
    group(field: {frontmatter: {keywords: SELECT}}) {
      fieldValue
    }
  }
}`)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const keywords = result.data.keywordsGroup.group

  keywords.forEach(keyword => {
    createPage({
      path: `/keywords/${_.kebabCase(keyword.fieldValue)}/`,
      component: keywordTemplate,
      context: {
        keyword: keyword.fieldValue,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type SitePage implements Node @dontInfer {
      path: String!
    }
  `)
}