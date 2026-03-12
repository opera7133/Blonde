# Blonde

![](https://github.com/opera7133/Blonde/raw/master/images/screenshot.png)

Blonde, A simple theme using Tailwind CSS.

The demo can be seen here: https://blonde.pages.dev

## Features

- Responsive
- Dark/Light mode
- Google Analytics
- Google AdSense
- Widgets
- Pagination
- Syntax Highlight
- RSS feeds
- Support tags and categories and archives
- Page search (with Google Search or Pagefind)
- Disqus / Gisqus
- [100/100 Google Lighthouse speed score](https://pagespeed.web.dev/analysis/https-blonde-pages-dev/jiu5fx88oj?form_factor=mobile)

## Installation

### Method 1

Inside the folder of your Hugo site run:

```bash
git clone https://github.com/opera7133/Blonde themes/Blonde
```

Updating theme:

```bash
cd themes/Blonde
git pull
```

### Method 2

Inside the folder of your Hugo site run:

```bash
git submodule add https://github.com/opera7133/Blonde.git themes/Blonde
```

Updating theme:

```bash
git submodule update --remote --merge
```

### Install dependencies

Copy at least the following files from `themes/Blonde/exampleSite` to the root folder of your site.

- package.json

After that, run this command.

```bash
npm install
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file

Copy the `hugo.toml` in the exampleSite to the root of your Hugo site. Change strings as you like.

### Check your site

In order to see your site in action, run Hugo's built-in local server.

```bash
hugo server
```

Now enter `localhost:1313` in the address bar of your browser.

### Build your site

```bash
hugo
```

### Using Pagefind (optional)

You can use pagefind by changing following line in `hugo.toml`:

```diff
- widgets = ["search", "archive", "category", "tags", "recent"]
+ widgets = ["pagefind", "archive", "category", "tags", "recent"]
```

Then run the following command after building your site:

```
npx -y pagefind --site public
```

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/opera7133/Blonde/issues) or make a PR.

## License

This theme is released under the [MIT license](https://github.com/opera7133/Blonde/blob/master/LICENSE).

Regarding the icons in assets/icons, Material Icons are licensed under the Apache 2.0 License, and Bootstrap Icons are licensed under the MIT License.

- [Material Icons : Google](https://github.com/google/material-design-icons)
- [Bootstrap Icons : The Bootstrap Authors](https://github.com/twbs/icons)
