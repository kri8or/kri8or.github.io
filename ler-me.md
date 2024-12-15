
with hugo installed in the system, do

npm run start

this builds the site and processes tailwind

---------

git setup:

1 - branch: gh_pages
2 - gitignore tracking only public folder in this branch
3 - this is what is commited to GH

You work normally in the master branch, or incodeserver, and then switch to gh_pages and do:

git checkout incodeserver -- public

then push to remote

