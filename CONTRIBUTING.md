# Contributing

When contributing to this project, please first discuss the change you wish to make by creating a [new issue](https://github.com/mkeithX/mkeithx.github.io/issues/new/choose). We also established a [Code of Conduct](../community/code-of-conduct) for all participants to follow as we foster a positive and inclusive community. Check out these guides:

- [Open Source Guides](https://opensource.guide/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)

## Code Conventions
Contributors must follow the standard code style and formatting conventions. Check out [this guide](https://mkeithx.pages.dev/community/styling-guide) to learn more.


## Pull Requests
Before submitting, please make sure that:

- **Keep it simple**: At least (~300 lines of diff). Keep your changes focused and addressing one issue per PR. Otherwise, please split it into separate requests.
- **Make it clear**: Write clear and concise [commit messages](#semantic-commit-messages) and PR descriptions.
- **Pass all tests**: Test your changes thoroughly and ensure they don't introduce any regressions.


### `Semantic Commit Messages`
Semantic commit messages follow a specific format that typically includes a type, an optional scope, and a description. The basic structure is:

```
<type>(<scope>): <subject>
```
`scopes` is optional. Consider adding a scope if the change affects a specific area, such as a module or component. It should be brief yet recognizable, e.g. `docs`, `core`.

**Example**

```
feat(core): add search to website
^--^^----^  ^-------------------^
|   |       |
|   |       +-> Summary in present tense. Use lower case, not title case!
|   |
|   +-> The package(s) that this change affected.
|
+-------> Type: see above for the list we use.
```

| Type     | Description                                                                  | Example Commit message                                                               |
| :-------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `feat`     | A new API or behavior for the end user.                                      | _allow users to upload profile pictures._             |
| `fix`      | A bug fix for the end user.                                                  | _fix mobile login button click issue._ |
| `docs`     | A change to the website or other Markdown documents in our repo.             | _update installation guide with troubleshooting steps._      |
| `refactor` | A change to production code that leads to no behavior difference.            | _enhance code readability and maintainability._            |
| `test`     | Adding missing tests, refactoring tests; no production code change.          | _add unit tests for user authentication module._                       |
| `chore`    | Upgrading dependencies, releasing new versions, maintenance tasks.           | _update package.json with latest dependency versions._                |
| `misc`     | Anything else that doesn't change production code, yet is not test or chore. | _update GitHub Actions workflow to include code linting._               |

More about [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#examples).



## Contribute

1. [Fork the repository](https://github.com/mkeithX/mkeithx.github.io/fork) to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix:


```bash
git switch -c <'feature/your-feature-name'>
```

4. Make your changes and commit them with descriptive commit messages:

```bash
git commit -m 'feat:Add some feature'
```

5. Push your changes to your forked repository:

```bash
git push -u origin <'feature/your-feature-name'>
```

6. Open a pull request (PR) against the main repository's `main` branch.
7. Ensure that your PR includes a clear description of the changes made and any relevant information.
8. Our team will review your PR, provide feedback, and merge it if everything looks good.

## Licensing

By contributing to this project, you agree that your contributions will be under its [MIT license](https://github.com/mkeithX/mkeithx.github.io/blob/main/LICENSE). 
