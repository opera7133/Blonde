# Blonde

![](https://github.com/opera7133/Blonde/raw/master/images/screenshot.png)

Blonde, A simple theme using Tailwind CSS.

The demo can be seen here: https://blonde.pages.dev

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=opera7133/blonde&engine=hugo&version=0.81.0&config=exampleSite)

## Features

- Responsive
- Dark/Light mode
- Google Analytics
- Yandex.Metrica
- Widgets
- Pagination
- Syntax Highlight
- RSS feeds
- Support tags and categories and archives
- Disqus
- [100/100 Google Lighthouse speed score](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fblonde.pages.dev)

## Installation

### Method 1

Inside the folder of your Hugo site run:

```bash
$ git clone https://github.com/opera7133/Blonde themes/Blonde
```

Updating theme:

```bash
$ cd themes/Blonde
$ git pull
```

### Method 2

Inside the folder of your Hugo site run:

```bash
$ git submodule add https://github.com/opera7133/Blonde.git themes/Blonde
```

Updating theme:

```bash
$ git submodule update --remote --merge
```

### Install dependencies

Copy at least the following files from `themes/Blonde/exampleSite` to the root folder of your site.

- package.json
- tailwind.config.js
- postcss.config.js

After that, run this command.

```bash
$ npm install
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file

Copy the config.toml in the exampleSite to the root of your Hugo site. Change strings as you like.

### Check your site

In order to see your site in action, run Hugo's built-in local server.

```bash
$ npm run start
```

Now enter `localhost:1313` in the address bar of your browser.

### Build your site

```bash
$ npm run build
```

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/opera7133/Blonde/issues) or make a PR.

## License

This theme is released under the [MIT license](https://github.com/opera7133/Blonde/blob/master/LICENSE).
