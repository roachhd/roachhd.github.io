Up, Up & Away
--------------



This is the base HTML for a general page ie: like the about page.

```html
---
layout: layout
title: "About Katie Ball"
---

<section class="content about">
  <h1 class="big thin">Katie Ball</h1>

    <img src="http://www.clker.com/cliparts/J/Q/T/y/5/i/purple-orange-owl-hi.png" class="noclip" style="display: block;margin-left: auto;margin-right: auto;" />

  <p>
    I work at <a href="https://roachhd.com">Roach Haus</a>. When I'm not
    doing that, I'm usually <a href="http://roachhd.github.io/Notepad">blogging</a>,
    hacking on <a href="https://github.com/roachhd">open source</a>,
    building new products (like <a href="http://github.com/ios7-css-ui.com">iOS7 CSS UI</a>)
    and learning new things. I'm a rather good at Javascript and CSS (also a wiz with Adobe 
    Creative Cloud), but kinda know something about ruby, Python and Java too. I also co-created
    two little people and care for 2 fury kids also. I live happily in Melbourne, Australia and 

    never want to leave!
  </p>

  <p>
    I used to have a pretty bad-ass and super bloated resume here,
    but well, there is so many places to update. So, check this site everything important
    <a href="http://katieball.me/">
      KatieBall.me
    </a>. You can also send me an <a href="mailto:katie@roachhd.com;">email</a> or a tweet
    at <a href="http://twitter.com/meatball">twitter</a> I ❤ getting tweets!
  </p>
</section>
```

---


Up is a clean and beautiful [Bootstrap](http://getbootstrap.com) based layout
for [Jekyll](https://github.com/mojombo/jekyll).

This is designed to be an easy layout to modify for your own blog. It is
based on [zachholman's](http://zachholman.com/) blog themes: the "old" one, now
opensourced as [left](http://github.com/holman/left), and also in his actual
theme, that's not opensource (I believe), but I stole some ideas anyway. I also
took something from [jekyll-bootstrap](https://github.com/plusjade/jekyll-bootstrap),
and, of course, I'm using [bootstrap](https://github.com/twitter/bootstrap) as
a base for whole thing.

![Up 2](http://f.cl.ly/items/1k0B3m21451e0G1i3u0F/up_v2.png)

## Installation

- [Fork this repository](https://github.com/caarlos0/up/fork)
- Rename it to `YOUR-USER.github.io`
- Clone it: `git clone https://github.com/YOUR-USER/YOUR-USER.github.io`
- With Ruby, bundler, Node.js and NPM previously installed, run the init script
`bundle && rake init`;
- Start it up in watch mode: `foreman start -f Procfile.dev`.

You should have a server up and running locally at <http://localhost:4000>.

## Customization

Next you'll want to change a few things. The list of files you may want to
change is the following:

- [_config.yml](https://github.com/caarlos0/up/blob/gh-pages/_config.yml): Put
your config there, almost everything will be up and running.
- [about/index.html](https://github.com/caarlos0/up/blob/gh-pages/about/index.html):
Well, that's about you, I would change it if I were you... OH WAIT!
- [CNAME](https://github.com/caarlos0/up/blob/gh-pages/CNAME): If you're using
this on GitHub Pages with a custom domain name, you might want to change this to be
the domain you're going to use. All that should be in here is a
domain name on the first line and nothing else (like: `example.com`).
- [favicon.ico](https://github.com/caarlos0/up/blob/gh-pages/favicon.ico): This
is a smaller version of my gravatar for use as the icon in your browser's
address bar. You may change it to whatever you like. [Updating your icons][up-icons].
- [apple-touch-icon.jpg](https://github.com/caarlos0/up/blob/gh-pages/apple-touch-icon.jpg):
Again, this is my gravatar, and it shows up in iOS and various other apps
that use this file as an "icon" for your site. [Updating your icons][up-icons].

[up-icons]: https://github.com/caarlos0/up#update-favicon-and-apple-precomposed-icons-based-on-gravatar

### Custom CSS/JS

Assets are now managed by bower. You could simply run `grunt` whenever you
want to update your assets. `grunt watch` will also watch everything for
changes.

Note: I'm not using any Jekyll asset pipeline because it's not supported
by [GitHub Pages](http://pages.github.com), so, I prefer to do it by myself.


### Update `favicon` and `apple-precomposed` icons based on gravatar

First, be sure you have the author email configured in `_config.yml`,
then, just run:

```sh
rake icons
```

The script will generate your email hash and get your gravatar, then, using
RMagick, it will create all needed icons.


## Deployment

You should deploy with [GitHub Pages](http://pages.github.com)- it's just
easier.

All you should have to do is to rename your repository on GitHub to be
`username.github.io`. Since this is a Jekyll project, you
should be able to see your new site at <http://username.github.io>.

## Licensing

This is [MIT](https://github.com/caarlos0/up/blob/master/LICENSE) with no
added caveats, therefore feel free to use this on your site without
linking back to me or using a disclaimer or anything silly like that.

If you'd like give [me](http://github.com/caarlos0),
[holman](http://github.com/holman)
(from [left](http://github.com/holman/left) layout),
[plusjade](https://github.com/plusjade)
(from [jekyll-bootstrap](https://github.com/plusjade/jekyll-bootstrap)),
[fat](https://github.com/fat) and [mdo](https://github.com/mdo) (from
[bootstrap](https://github.com/twitter/bootstrap)) credit somewhere on your
all-new blog or tweet a shout out to us, well hey, sure we'll take it.

Thanks.

---
layout: post
title: "New UP Version"
category: posts
---

So I decided to release a new [UP][1] version. Changes include:

- Bootstrap 3.0.0;
- Last Font-Awesome version;
- Improved Makefile and Rakefile;
- Pygments for syntax highlight;
- Bootstrap collapse plugin (navbar is now fully responsive);
- Minor tweaks.

![Up 2](http://f.cl.ly/items/3S2m1X2I1V0s0E2P1s38/Captura%20de%20Tela%202013-04-08%20%C3%A0s%2000.37.30.png)

So, update it if you want! It shall be easy, since I was doing it in my
blog, and then import it back to [UP][1]. If you have any issues, you can
ping me at twitter or other social network, or even email me.

The general update guide is:

- Read the [readme][2];
- Replace `Rakefile` and `makefile` with the new ones;
- Copy the `package.json`;
- replace `_assets` folder;
- check the differences in default layout and apply it.

The whole list of differences can be found [here][3].

Hope you like this new version!

[1]: https://github.com/caarlos0/up
[2]: https://github.com/caarlos0/up/blob/bs3/readme.markdown
[3]: https://github.com/caarlos0/up/compare/gh-pages...bs3

---

---

---
layout: post
title: "UP v2"
category: posts
---

So, this is the all-new UP version. It is more based
on my own [blog][my-blog], which is a some kind of
branch of this theme.

The biggest changes here are:

- Assets are now managed by [bower][bower];
- Build are now made by [grunt][grunt];
- `Procfile.dev` to use with foreman to watch
changes everywhere (assets, pages, posts);
- Removed the hardcoded Jekyll from Gemfile and
replaced it with the github pages Gem;
- Bumped all assets versions;
- Some semantics fixed in HTML;

### Usage

To get started, with Ruby, Bundler, Node.js and NPM
previously in your `PATH`, run the init script:

{% highlight bash %}
./script/init.sh
{% endhighlight %}

This will install all needed dependencies and build
the the assets for you (just run `grunt`).

You can also start it up in watch mode with

{% highlight bash %}
foreman start -f Procfile.dev
{% endhighlight %}

### Update

To update, the easiest way is to backup your _posts folder and override
everything else. If you don't want to do that, you will have to hack
around the changes and do it by hand.

If you have any issues or suggestions, ping me at the [up project][up].

[up]: http://github.com/caarlos0/up
[my-blog]: http://carlosbecker.com
[bower]: http://bower.io
[grunt]: http://gruntjs.com/


---

---

---
## deleted `Gemfile.lock`
```ruby
GEM
  remote: https://rubygems.org/
  specs:
    RedCloth (4.2.9)
    classifier (1.3.3)
      fast-stemmer (>= 1.0.0)
    colorator (0.1)
    commander (4.1.5)
      highline (~> 1.6.11)
    directory_watcher (1.4.1)
    dotenv (0.9.0)
    fast-stemmer (1.0.2)
    foreman (0.63.0)
      dotenv (>= 0.7)
      thor (>= 0.13.6)
    github-pages (8)
      RedCloth (= 4.2.9)
      jekyll (= 1.2.0)
      kramdown (= 1.0.2)
      liquid (= 2.5.1)
      maruku (= 0.6.1)
      rdiscount (= 1.6.8)
      redcarpet (= 2.2.2)
    highline (1.6.19)
    jekyll (1.2.0)
      classifier (~> 1.3)
      colorator (~> 0.1)
      commander (~> 4.1.3)
      directory_watcher (~> 1.4.1)
      liquid (~> 2.5.1)
      maruku (~> 0.5)
      pygments.rb (~> 0.5.0)
      redcarpet (~> 2.2.2)
      safe_yaml (~> 0.7.0)
    kramdown (1.0.2)
    liquid (2.5.1)
    maruku (0.6.1)
      syntax (>= 1.0.0)
    posix-spawn (0.3.6)
    pygments.rb (0.5.2)
      posix-spawn (~> 0.3.6)
      yajl-ruby (~> 1.1.0)
    rake (10.1.0)
    rdiscount (1.6.8)
    redcarpet (2.2.2)
    rmagick (2.13.2)
    safe_yaml (0.7.1)
    syntax (1.0.0)
    thor (0.18.1)
    yajl-ruby (1.1.0)

PLATFORMS
  ruby

DEPENDENCIES
  foreman
  github-pages
  rake
  rmagick
```

