# Contributing to MKEITHX Website

To foster a positive and inclusive community, **MKX SpaceHub**™ has established a [**Code of Conduct**](https://kitiplex.github.io/community/code-of-conduct) for all participants to follow. Please review the summarized guidelines to understand what behaviors are expected and unacceptable.

<details>
<summary><b>Guidelines</b></summary>


## Core Values

- **Respect**: Treat others with kindness, empathy, and understanding.
- **Inclusivity**: Embrace diversity of thought, background, and identity.
- **Openness**: Encourage honest and constructive communication.
- **Collaboration**: Work together towards common goals with mutual respect.


## Expected Behavior

In this community, we expect all participants to:

- Be respectful towards others, regardless of differences.
- Listen actively and considerately to others' perspectives.
- Provide constructive feedback and criticism.
- Refrain from engaging in any form of harassment, discrimination, or offensive behavior.

## Unacceptable Behavior

Examples of unacceptable behavior include:

- Offensive comments related to personal characteristics.
- Harassment, intimidation, or discrimination in any form.
- Disruptive behavior that hinders productive discussion.
- Any form of unwelcome attention or advances.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

</details>


## Development process

**MKXSpacehub** depends on GitHub as its main source of information. All pull requests will be checked by the continuous integration system, GitHub actions.

![website_status](https://img.shields.io/website?url=https%3A%2F%2Fmkeithx.github.io%2F&style=for-the-badge&label=Website)
![build_status](https://img.shields.io/github/actions/workflow/status/mkeithx/mkeithx.github.io/deploy.yml?style=for-the-badge)
![issues](https://img.shields.io/github/issues/mkeithx/mkeithx.github.io?style=for-the-badge
)
![pr](https://img.shields.io/github/issues-pr/mkeithx/mkeithx.github.io?style=for-the-badge
)
![lic](https://img.shields.io/github/license/mkeithx/mkeithx.github.io?style=for-the-badge&color=orange)

## Contribute

1. Fork the repository to your GitHub account.
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


### Code Conventions

Follow the existing code style and formatting conventions.

### Commit Messages

Write clear and concise commit messages and PR descriptions.

| Type     | Description                                                                  | Example                                                                |
| :-------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `feat`     | A new API or behavior for the end user.                                      | _Added a feature to allow users to upload profile pictures._             |
| `fix`      | A bug fix for the end user.                                                  | Resolved issue where login button was not clickable on mobile devices. |
| `docs`     | A change to the website or other Markdown documents in our repo.             | Updated installation guide with additional troubleshooting steps.      |
| `refactor` | A change to production code that leads to no behavior difference.            | Refactored code to improve readability and maintainability.            |
| `test`     | Adding missing tests, refactoring tests; no production code change.          | Added unit tests for user authentication module.                       |
| `chore`    | Upgrading dependencies, releasing new versions, maintenance tasks.           | Updated package.json with latest dependency versions.                  |
| `misc`     | Anything else that doesn't change production code, yet is not test or chore. | Updated GitHub Actions workflow to include code linting.               |



More about [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#examples).

## Pull request

- Keep your changes focused and atomic, addressing one issue per PR.
- Write clear and concise commit messages and PR descriptions.
- Test your changes thoroughly and ensure they don't introduce any regressions.
- Be respectful and considerate towards other contributors.

## Issues

If you find a bug, have a suggestion, or want to request a new feature, feel free to open an [issue](https://github.com/mkeithX/mkeithx.github.io/issues) in the repository.

**IMPORTANT**: 
Please visit [Docusaurus website](https://docusaurus.io/community/contributing#issues) for issues related to infrastructure.




## Licensing

By contributing to **MKEITHX Website**, you agree that your contributions will be licensed under its MIT license. 