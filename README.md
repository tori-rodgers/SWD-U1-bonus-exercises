# SWD-U1-bonus-exercises

These exercises will give you extra practice on fundamental concepts! Each file has some of the work already done to serve as examples, and the rest of the instructions are marked with TODO so you can finish it.

There are two branches: 
 - `main` - starter code
 - `solution` - fully completed code

To fully benefit from this practice, don't look at the solution until you have done it yourself!

## CREATE YOUR OWN COPY
1. FORK it to your own GitHub account (hint: deselect the option that would include only `main`)
1. COPY the link from your new repo on GitHub
1. CLONE it to your local machine. Example (using YourUserName):

```git clone https://github.com/YourUsername/SWD-U1-bonus-exercises```

## PRACTICE IN YOUR OWN BRANCHES
If you want to update your forked repository from my parent repository when I add or change things to mine in the future, there are instructions below this section, BUT...
It will go much easier if you don't ever change the code in `main`. Instead, do the following:
1. From `main`, use the command `git checkout -b new-branch-name` to create your own branch for practicing (example: `functions-practice`).
1. Practice as much as you'd like in your new branch, making commits as you add code.
1. When you are ready to work on something different in another new branch, use the command `git checkout main` to return to `main` and then you can repeat the two steps above.

## UPDATE YOUR REPO WITH MY FUTURE CHANGES 

#### Set the upstream link:
1. On your local machine, make sure you are in the correct directory in the terminal.
1. Use the command `git remote add upstream https://github.com/Carolista/SWD-U1-bonus-exercises`

You now have a direct link to my original repo! 

Use the command `git remote -v` to verify that you have linked to both `origin` (your forked repo) and `upstream` (my original repo)

#### Update your repo anytime I make changes in the future:
1. On your local machine, make sure you are in the correct directory in the terminal.
1. If you have any uncommitted changes, **stage** and **commit** them.
1. Make sure you are in the branch you wish to update (e.g. `main`)
1. Use the command `git fetch upstream` so your local repo has knowledge of changes I made in my repo
1. Use the command `git rebase upstream/main` to sync your repo

#### Check to see which branches you already have:
1. You can use the command `git branch` anytime to see what local branches you have
1. The command `git branch -r` will show you branches that exist on GitHub (after you've fetched that knowledge)

#### Acquire the solution branch from the main branch (if you don't already have it):
1. Make sure you've followed the directions above to set the upstream link
1. Use the command `git fetch upstream` to get the latest knowledge of changes I made in my repo
1. Use the command `git checkout solution` to create your local copy of the branch and switch to it