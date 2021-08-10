
import { gql } from 'graphql-request'


const ALLPROJECTS = gql`
query{
    projects(stage: PUBLISHED, orderBy:createdAt_DESC) {
      title,
      description,
      tags,
      app,
      code,
      cover(locales:[en]){
        fileName,
        url,
        placeholder:url(
          transformation: {
            image: { resize: { width: 50, height: 50, fit: clip } }
          })
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
        }),
      placeholder:url(
        transformation: {
          image: { resize: { width: 50, height: 50, fit: clip } }
        })
        
    }
  }
}
`

const RESUMEDATA = gql`
query resumedata{
  resume(where: {id: "ckobh6bbkc3i00d619hpm1b6y"}){
	personalInformation{
    name
    desgination
    connect{
      __typename
      ... on ContactAndConnect {
        name,
        value,
        link
      }
    }
  }
  skills{
    	id
      skill
      category
    }
  projects{
    id
    name
    description
    web
    code
  }
  jobExperiences(orderBy: createdAt_DESC){
    id
    companyName
    workExperience
    from
    to
    position
  }  
  educations{
    id
    instituteName
    from
    to
    degree
    course
    location
    cpi
  }  
  extras{
      id
      extras
    }
  }
}
`




export {ALLPROJECTS, POST, POSTLIST, PINNEDPOST, ALLPOST, ALLRESOURCES,RESUMEDATA}


