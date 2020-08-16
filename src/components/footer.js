import React from 'react'
import {  graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss';


export default function Footer() {
    const data1=useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
            author,
          footerData
        }
      }
    }
    `)


    return (
        <footer className={footerStyles.footer}>
            <p>Created by: {data1.site.siteMetadata.author} {data1.site.siteMetadata.footerData} </p>
        </footer>
    )
}
