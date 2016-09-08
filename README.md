# dotjs
My version of [defunkt/dotjs](https://github.com/defunkt/dotjs) that uses [RawGit](https://rawgit.com/) to pull `.js`files directly from GitHub repositories.

## Installation
Download the `dotjs.crx` file from the [latest release](https://github.com/shadowfacts/dotjs/releases/latest). In Chrome, go to `chrome://extensions`. Drag and drop the `dotjs.crx` from wherever you downloaded it to, onto the Chrome window with the extensions page open.

## Options
- Repository: The GitHub repo to get `.js` files from (in the form of `username/repo` e.g. `shadowfacts/dotfiles`). **Required**
- Branch: The Git branch in the repository to use. Default: `master`.
- Dev Mode: Use this while you are testing your `.js` scripts to have RawGit update more frequently. After you've finished your scripts, you should switch this off which will reduce the load on [RawGit](https://rawgit.com/)

## Usage
dotjs will search for scripts in the `.js/` directory of the repository you specified. For example, if you navigate to [gist.github.com](https://gist.github.com), dotjs will attempt to run `dotjs.js` (the deafult script which is run for all domains), `gist.github.com.js`, `github.com.js`, and `com.js`.

dotjs scripts have access to 3.1.0.

### Example
For example, let's say you have a file `github.com.js` in your `.js` folder that contains this:

```js
console.log('Hello, ~/.js');
$('a[class^=header-logo-]').html(
    $('<img>')
        .attr('src', 'https://avatars3.githubusercontent.com/u/7091588?v=3&s=460')
        .css({'width': 'auto', 'height': '22px'})
    );
```

Whenever you load GitHub, dotjs will load this script and run it, it will log a message and replace the GitHub icon with my profile picture:

![dotjs example](http://i.imgur.com/TXept47.png)