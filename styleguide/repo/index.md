---
layout: inner
title: Repo Styleguide
---

This it's a style guide for GitHub repos. Most projects should include the following:

## Documentation

* `README.md`    -- external description and documentation, as defined above.
  - This is the only support document in the code root. The rest go in the wiki (`notes/` folder). Don't make 'README-[subcomponent].md`, or `path/to/[subcomponent]/README.md`.
* `LICENSE.md`   -- we usually use the Apache 2.0 license. If the project is internal, it should state 'all rights reserved'.
* `CHANGELOG.md` -- update with changes before pushing a new version
* `TODO.md`      -- known issues and nitpicks.
* `notes/`       -- a `git submodule`d version of the project's wiki

* `examples/`
* `data/`
* `Guardfile`, `Procfile`


### Submodule the wiki into the `notes/` directory

The `notes/` a `git submodule`d version of the project's wiki. If the sections outlined in the [README README](https://github.com/infochimps-labs/style_guide/blob/master/style-guide-for-readme-files.md) become lengthy, separate them into files named as follows:
  - `notes/INSTALL.md`
  - `notes/design-goals.md`
  - `notes/examples.md`
  - `notes/configuration.md`
  - `notes/code-components.md`
  - `notes/code-layout.md`
  - `notes/known-issues.md`
  - `notes/performance.md`
  - `notes/references.md`

