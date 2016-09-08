# dotjs
My version of [defunkt/dotjs](https://github.com/defunkt/dotjs) that uses [RawGit](https://rawgit.com/) to pull `.js`files directly from GitHub repositories.

## Options
- Repository: The GitHub repo to get `.js` files from (in the form of `username/repo` e.g. `shadowfacts/dotfiles`). **Required**
- Branch: The Git branch in the repository to use. Default: `master`.
- Dev Mode: Use this while you are testing your `.js` scripts to have RawGit update more frequently. After you've finished your scripts, you should switch this off which will reduce the load on [RawGit](https://rawgit.com/)