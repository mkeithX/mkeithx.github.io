<div align="center">
  <h1 align="left">
    <a href="https://mkeithx.github.io">
      <img src="./public/img/github-banner.png" alt="The SpaceHub Project">
    </a>
<b>SpaceHub Project</b>
  </h1>
</div>

This repo contains the configurations and source code powering the **SpaceHub Project** docs website.

## Motivation
The project is part of an internal initiative at [Kitiplex](https://github.com/kitiplex) focusing on standard practices in software development. It emphasizes the importance of providing clear and comprehensive documentation for all projects.


## Configs & Base Features
> [!NOTE]  
> This project is constantly updating and some functionalities may or may not work for you. 

Organized as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md), this project also includes some [basic code examples](./examples/README.md) and includes examples. 

### Directory Structure

```
mkeithx.github.io/
+---.github
|   +---ISSUE_TEMPLATE
|   \---workflows
+---examples
+---public
\---website
    +---blog
    +---community
    +---cosmos
    +---docs
    +---src
    |   +---pages
    |   +---plugins
    |   +---theme
    \---static
    
```
### Build
The website is built with the latest Docusaurus version and hosted on [Cloudflare](https://pages.cloudflare.com/).

```
npx create-docusaurus@latest website classic --typescript
```
For detailed installation instructions, please visit the [Docusaurus Installation Guide](https://docusaurus.io/docs/installation).

### Seach Indexing
The search functionality powered by [Algolia DocSearch](https://docsearch.algolia.com) through custom crawlers configuration.

> [!NOTE]  
> This project is continuously being updated, so some functionalities may not always work as expected.

## Contributing
While the project is publicly available and contributions are welcome, we highly encourage future contributors to join **Kitiplex**! Joining us gets you:

- [x] Access to a supportive community
- [x] Additional resources and tools
- [x] Collaborative opportunities
- [x] Enhanced professional growth

Learn more [how to get involved](https://mkeithx.github.io/community).


<!-- > _A documentation website representing humanity from Dimension C-137 🚀_ -->

<!-- <p align="center">
  <a href="#">
    <img src="https://skillicons.dev/icons?i=react,cloudflare,ts,githubactions,vscode" />
  </a>
</p> -->



