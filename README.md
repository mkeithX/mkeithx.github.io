<div align="center">
  <h1 align="left">
    <a href="https://mkeithx.github.io">
      <img src="./public/img/github-banner.png" alt="The SpaceHub Project">
    </a>
<b>SpaceHub Project</b>
  </h1>
</div>

This repo contains the configurations and source code powering the **SpaceHub Project** docs [website](https://mkeithx.github.io).

## Overview


The project is part of an internal initiative at [Kitiplex](https://github.com/kitiplex) focusing on standard practices in software development. It emphasizes the importance of providing clear and comprehensive documentation for all projects.


## Configuration
The SpaceHub Project website is a static site generated using the latest [Docusaurus](https://docusaurus.io/) version. The `custom` website configuration can be found in [website](/website/docusaurus.config.ts) directory.




Organized as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md), this project also includes some [basic code examples](./examples/python-starters/README.md). 

### Directory Structure

```
mkeithx.github.io/
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

### Installation
Recommended that you have installed the latest version of [Git](https://git-scm.com/downloads), [Node](https://nodejs.org/en/download/) and your preferred package manager:

- npm
- Yarn
- pnpm

> [!WARNING]  
> For local installation, it is assumed that you are already **FAMILIAR** with how the site is built using [Docusaurus](https://docusaurus.io/docs/installation).

1. Clone the repo

```sh
git clone https://github.com/mkeithX/mkeithx.github.io.git
```

```sh
cd mkeithx.github.io
```
2. Install packages (Depending on your pack manager):

```sh
npm install
```
```sh
yarn install
```
```sh
pnpm install
```
3. Run locally

```sh
npm run start
```
```sh
yarn run start
```
```sh
pnpm run start
```


<!-- 
> [!IMPORTANT]  
> This project is constantly updating and some functionalities may or may not work for you.  -->

## Contributing
While the project is publicly available and contributions are welcome, we highly encourage future contributors to join **Kitiplex**! Joining us gets you:

- [x] Access to a supportive community
- [x] Additional resources and tools
- [x] Collaborative opportunities


Learn more [how to get involved](https://mkeithx.github.io/community).




<!-- > _A documentation website representing humanity from Dimension C-137 🚀_ -->

<!-- <p align="center">
  <a href="#">
    <img src="https://skillicons.dev/icons?i=react,cloudflare,ts,githubactions,vscode" />
  </a>
</p> -->



