
import { gql } from 'graphql-request'


const ALLPROJECTS = gql`
query{
    projects(orderBy: id_DESC,  stage: PUBLISHED) {
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

const UNPINNEDPOST = gql`
query unpinnedPost{
  posts (where: {pin: false},  stage: PUBLISHED){
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


export {ALLPROJECTS, POST, POSTLIST, PINNEDPOST, UNPINNEDPOST}


