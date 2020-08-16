import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

export default function Header() {
  const data=useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title,
        author
      }
    }
  }
  `)
  return (
    <header className={headerStyles.header}>
      <h1>
        <div className={headerStyles.title}  >
          {data.site.siteMetadata.title}
          <br/>
         </div>
         <Link className={headerStyles.title2} to="/">
          
          {data.site.siteMetadata.author}
        </Link>
      </h1>
      <ul className={headerStyles.navlist}>
        <li>
          {" "}
          <Link className={headerStyles.navitems} activeClassName={headerStyles.activenavitem} to="/about">
            {" "}
            Author
          </Link>
        </li>
        <li>
          {" "}
          <Link className={headerStyles.navitems} activeClassName={headerStyles.activenavitem} to="/blog">
            {" "}
            Blog Posts
          </Link>
        </li>
        <li>
          {" "}
          <Link className={headerStyles.navitems} activeClassName={headerStyles.activenavitem} to="/contact">
            {" "}
            Author's Contact
          </Link>
        </li>
        <li>
          {" "}
          <Link className={headerStyles.navitems} activeClassName={headerStyles.activenavitem} to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
      </ul>
    </header>
  )
}
