import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'

function Repositories({ className }) {
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(first: 8, types: [REPOSITORY]) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    url
                    description
                    stargazers {
                      totalCount
                    }
                    forkCount
                    updatedAt
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  edges
    .sort((a, b) => b.node.stargazers.totalCount - a.node.stargazers.totalCount)
    .slice(0, 8)
  return (
    <Fragment>
      <div className={className}>
        <h2>Pinned repositories on Github</h2>
        <div className="repositories__content">
          {edges.map(({ node: repo }) => (
            <Fragment key={repo.id}>
              <div className="repositories__repo">
                <a className="repositories__repo-link" href={repo.url}>
                  <strong>{repo.name}</strong>
                </a>
                <div>{repo.description}</div>
                <div className="repositories__repo-date">
                  Updated: {new Date(repo.updatedAt).toUTCString()}
                </div>
                <div className="repositories__repo-star">
                  ★ {repo.stargazers.totalCount}
                </div>
              </div>
              <hr />
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303b;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`
