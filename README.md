# Getting Started with Create React App

## Technology used
<a href="#"> <img alt="React" src="https://github.com/Abhishek-k-git/image/blob/main/react.png" width="40" height="40" /> </a>

**visit here:** <a href="http://www.techscinotes.xyz"><img alt="React App" src="https://abhishek-k-git.github.io/reactwebsite/" width="20" height="20" style="margin-right:20px;" /></a>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How to deploy on github <br>
- ### prerequisites:
  - Inside *package.json* :
  ```{
    "name": "as it is...",
    "homepage: "https://your_git_username.github.io/your_app_name",
  }
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  }
  
- Install the *gh-pages* as a dev-dependency<br>
```npm install --save gh-pages```<br>

- *git init* is one way to start a new project with Git. To initialize a repository, Git creates a hidden directory called .git. That directory stores all of the objects and refs that Git uses and creates as a part of your project's history. This hidden .git directory is what separates a regular directory from a Git repository.<br>
```git init```  <br>

- This will create a file *'.gitignore'* in your current *dir* of your local computer. A *gitignore* file specifies intentionally untracked files that Git should ignore. <br>
```type nul > .gitignore``` <br>

- Commit the changes. <br>
```git commit -m "my commit"``` <br>

- The git remote add command takes two arguments: <br>
  --A remote name, for example, origin <br>
  --A remote URL, for example, https://github.com/Abhishek-k-git/reactwebsite.git <br>
  ```git remote add origin https://github.com/Abhishek-k-git/todo.git``` <br>
  
- push commits made on your local branch to a remote repository. <br>
```git push -u origin master``` <br>

- Deploy the site by running npm run deploy
```npm run deploy```

Created with :heart:
