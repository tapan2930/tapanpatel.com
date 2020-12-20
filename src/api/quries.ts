
import { gql } from 'graphql-request'


const ALLPROJECTS = gql`
query{
    projects(stage: PUBLISHED) {
      title,
      description,
      tags,
      app,
      code,
      cover(locales:[en]){
        fileName,
        url
      }
    }
  }
`

const POST = gql`
query getPost($slug: String!){
  post(where: {slug: $slug}, stage: PUBLISHED){
    date
    title
    excerpt
    tags
    content
    author{
      __typename
      ... on Author {
        name
        picture(locales:en){
          url(
            transformation: {
              image: { resize: { width: 50, height: 50, fit: clip } }
            })
        }
      }
    }
    cover(locales:en){
      fileName
      url
    }
  }
}
`
const PINNEDPOST = gql`
query pinnedPost{
  posts (where: {pin: true},  stage: PUBLISHED){
    title
    slug
    date
    excerpt
    tags
    cover(locales:en){
      url
      fileName
    }
  }
}
`

const ALLPOST = gql`
query allPost{
  posts (stage: PUBLISHED){
    title
    slug
    date
    excerpt
    tags
    cover(locales:en){
      url
      fileName
    }
  }
}
`

const POSTLIST = gql`
query postList{
  posts{
    slug
  }
}
`

const ALLRESOURCES = gql`
query allResources{
  resources(orderBy: id_DESC, locales:en){
    category
    heading
    app
    description
    cover(locales:en){
      url(
        transformation: {
          image: { resize: { width: 500, height: 500, fit: crop } }
        })
    }
  }
}
`


export {ALLPROJECTS, POST, POSTLIST, PINNEDPOST, ALLPOST, ALLRESOURCES}


