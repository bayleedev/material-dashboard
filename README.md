# 🤪 Baylee's Open Source Template

This template allows you to build TypeScript React applications that compile to
gh-pages easily!

# 💫 Using this template

Clone the template

```
git clone git@github.com:bayleedev/material-dashboard.git project_name
cd project_name
```

Update the port

```
sed "s/3125/3$(date '+%s' | rev | cut -c -3)/g" package.json > package.json
```

Update git

```
npm install
rm -rf .git
git init
git add --all
git commit -m '🥳 Initial commit'
git remote add origin NEW_ORIGIN
```

Initial deploy

```
git push
npm run deploy
```


# 💻 Logistically

🤖 To run

```
npm install
npm start
```

📦 To deploy

```
npm run deploy
```
