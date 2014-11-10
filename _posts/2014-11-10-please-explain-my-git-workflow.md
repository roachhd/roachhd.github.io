---
layout: post
title: "Please Explain? My git Workflow"
category: posts
--- 
Git is a versioning suite of tools that enables us to keep track of our day to day changes. We will be going over the super basics, of which I may well be wrong.


What can Git version, and why should you care?
Git can version anything that is a plain text file. Versioning is a great way to completely mess up a website, but instantly restore it. It makes it a breeze to deploy completed products as well. It’s also a standard for any programming job, excluding a select few. The best part is, when you talk about it, you become completely unapproachable by women. It’s truly a multifaceted approach to modern living, wrapped in a terminal shell.


What are the main tenants of Git use?
Git does a few really simple, but powerful things. They have all been given names, so we’ll call them by them.

#####Git has these features: Please Explain?

- Repository
- Commit
- Pull
- Merge
- Branch
- Push

######What is a repository?
A repository is a collection of your code, that you’ve created to host your code changes, from commits to pushes. A repository is the key aspect of Git and version controls.

######What is a commit?
A commit is done when you’ve updated your code to account for a feature or other part of work you’ve done you add the changes back into your remote Git repo. When you commit changes, you include a message to describe what you did and why. This is the most important part of version control. When you share why you’ve made the changes you’ve made, you create a code base that is manageable but almost anyone.

######What is a pull?
A pull can be one of two things, a pull or a pull request.

######A pull
A pull is downloading the code from your repository. It is how you make sure you’re local code is up to date before you begin working on it. When you pull code, Git automagically checks the remote code against your local code. It will see if there are any differences, and do something called merging. A merge just zips the two files together so that you’re back down to just one, by showing you any conflicts and allowing you to fix them.

######A Pull request
A pull request is when you have a large amount of changes you want to merge back into a main branch from your feature branch. A pull request opens your code up to peer review. After it’s been approved you then merge it back into the production or master branch.

######A merge
A merge just zips the two files together so that you’re back down to just one, by showing you any conflicts and allowing you to fix them.

######A branch
A branch is basically you checking out the whole repo and making major changes to it. When you’re done with your huge changes you make a pull request. After approval, you merge it back into the main branch.

######A push
A push is when you’ve finished your commits. merges, and pull request, and are ready to send the files out to your deployment. You run a push command and you repo is uploaded to a remote server.

######How do I use Git?
Git is a tool that requires a bit of a larger team and management layers, but being a small and agile developer, I have still have a need version control. I am going to use Git to version as I had previously explained. I’ll use a sample project to explain.

---

#####Starting the whole process:

First i will setup the development and production environment (grunt, node, bower, Ruby etc)

When all set, then move to git by following these instructions.

After Git is intialized I follow these simple steps to make a website function properly.

I branch off the master branch and create one called development

I build on the development branch, branching off for major features

My _config.json points the uploads to the staging server, which IS the development branch.

Every time I reach a major release I push it to the master branch and remote server for theclient to view.
That's just a brief explanation of how I want to use git. 
