---
layout: post
title: "Publishing your Ruby Gem"
category: posts
---
_Start with an idea, end with a distributable package of Ruby code._

Ways to share your gem code with other users.

## Introduction

Now that you've [created your gem][1], you're probably ready to share it. While it is perfectly reasonable to create private gems solely to organize the code in large private projects, it's more common to build gems so that they can be used by multiple projects. This guide discusses the various ways that you can share your gem with the world.

## Sharing Source Code

The simplest way (from the author's perspective) to share a gem for other developers' use is to distribute it in source code form. If you place the full source code for your gem on a public git repository (often, though not always, this means sharing it via [GitHub][2]), then other users can install it with [Bundler's git functionality][3].

For example, you can install the latest code for the wicked_pdf gem in a project by including this line in your Gemfile:


    gem "wicked_pdf", :git => "git://github.com/mileszs/wicked_pdf.git"


> Installing a gem directly from a git repository is a feature of Bundler, not a feature of RubyGems. Gems installed this way will not show up when you run `gem list`.

## Serving Your Own Gems

If you want to control who can install a gem, or directly track the activity surrounding a gem, then you'll want to set up a private gem server. You can [set up your own gem server][4] or use a commercial service such as [Gemfury][5].

RubyGems 2.2.0 and newer support the `allowed_push_host` metadata value to restrict gem pushes to a single host. If you are publishing private gems you should set this value to prevent accidental pushes to rubygems.org:


    Gem::Specification.new 'my_gem', '1.0' do |s|
      # ...
      s.metadata['allowed_push_host'] = 'https://gems.my-company.example'
    end


See the [Resources][6] guide for an up-to-date listing of options for private gem servers.

## Publishing to RubyGems.org

The simplest way to distribute a gem for public consumption is to use [RubyGems.org][7]. Gems that are published to RubyGems.org can be installed via the `gem install` command or through the use of tools such as Isolate or Bundler.

To begin, you'll need to create an account on RubyGems.org. Visit the [sign up][8] page and supply an email address that you control, a handle (username) and a password.

After creating the account, use your email and password when pushing the gem. (RubyGems saves the credentials in ~/.gem/credentials for you so you only need to log in once.)

To publish version 0.1.0 of a new gem named 'squid-utils':


    $ gem push squid-utils-0.1.0.gem
    Enter your RubyGems.org credentials.
    Don't have an account yet? Create one at https://rubygems.org/sign_up
       Email:   gem_author@example
    Password:
    Signed in.
    Pushing gem to RubyGems.org...
    Successfully registered gem: squid-utils (0.1.0)


Congratulations! Your new gem is now ready for any ruby user in the world to install!

## Push Permissions on RubyGems.org

If you have multiple maintainers for your gem you can give your fellow maintainers permission to push the gem to rubygems.org through the [gem owner command][9].

[1]: http://katieball.me/posts/make-your-own-gems/
[2]: https://github.com
[3]: http://bundler.io/git.html
[4]: http://guides.rubygems.org/run-your-own-gem-server
[5]: http://www.gemfury.com/
[6]: http://guides.rubygems.org/resources
[7]: https://rubygems.org/
[8]: https://rubygems.org/users/new
[9]: http://guides.rubygems.org/command-reference/#gem_owner
