# Blonde
Blonde, A simple theme using Tailwind CSS.

The demo can be seen here: [https://blonde.netlify.app](https://blonde.netlify.app)

![blonde](https://user-images.githubusercontent.com/39876629/90247119-ebae6600-de70-11ea-9aeb-98e2500961a1.png)

:warning: **This theme is currently under development!**

## Features
* Responsive
* Google Analytics
* Pagination
* Mobile support
* RSS feeds
* Tags/Categories support
* Archive
* Disqus

## Prerequisites

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

## Installation
Inside the folder of your Hugo site run:

```
$ git submodule add https://github.com/opera7133/Blonde.git themes/Blonde
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Getting started
After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file
Copy the config.toml in the exampleSite to the root of your Hugo site. Change strings as you like.

### Check your site
In order to see your site in action, run Hugo's built-in local server.
```
$ hugo server
```
Now enter `localhost:1313` in the address bar of your browser.

### Update the theme
Inside the folder of your Hugo site run:

```
$ git submodule update --remote --merge
```

## Contributing
If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/opera7133/Blonde/issues) or make a PR.

## License
This theme is released under the [MIT license](https://github.com/opera7133/Blonde/blob/master/LICENSE).
