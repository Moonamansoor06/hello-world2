import React from "react"
import {Link,  graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogpageStyles from './blogpage.module.scss';



export default function BlogPage() {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort:{
        fields:date
        order:DESC
      }
    ){
      edges{
        node{
          title
          slug
          date(formatString:"MMMM Do,YYYY")
        }
      }
    }
  }
        `)



return (
  <Layout>
    
        <h1>Blogs</h1>
      <ol className={blogpageStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge)=>{
            return(
                <li className={blogpageStyles.post}>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <h2>{edge.node.title}</h2>
                    <p>{edge.node.date}</p>
               </Link>
                </li>
            )
        })}
    
    </ol>
    
  </Layout>
)
}