#!/bin/sh

# if [ "`git status -s`" ]
# then
#     echo "The working directory is dirty. Please commit any pending changes."
#     exit 1;
# fi

echo "Deleting old publication"
rm -rf public

echo "Generating site"
Rscript -e "blogdown::build_site()"

echo "Get Setup"
git config --global init.defaultBranch main
git config --global push.default matching
git config --global user.email "therimalaya@gmail.com"
git config --global user.name "therimalaya"

echo "Updating main branch"
cd public
git init
git remote add origin git@github.com:therimalaya/therimalaya.github.io.git

git add --all .
git commit -m "Publishing to main (deploy.sh)"

echo "Pushing to github"
git push --quiet --force git@github.com:therimalaya/therimalaya.github.io.git main
