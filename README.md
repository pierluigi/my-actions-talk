# Automate your Workflows With GitHub Actions 

This is the repository referenced in [my GitHub Actions talk](https://docs.google.com/presentation/d/1rLTHa2Gp3vvky-ws-wjepFUMKtdGHpym2tTkouuIaJc/edit?usp=sharing). Feel free to reuse the example code provided.

## Demos
This repository contains the code to run the following demos as part of my talk.

### 1. Simple CI/CD with NodeJS

TODO

### 2. Advanced CI with self-hosted runners

TODO

### 3. File a bug using Siri and AI

In this demo we will learn how to use Siri Shortcuts and the [LUIS Cognitive Services API](https://www.luis.ai/) to automate the creation of a new "bug report" issue on your GitHub Project using voice recognignition and machine learning for automatic triaging.

You can also watch a prerecoreded demo video on my YouTube channel: https://youtu.be/CQnnlLfVhW0

**Instructions**

1. Fork this repository (https://github.com/pierluigi/my-actions-talk)
2. Generate a new Personal Access Token with repo permissions https://github.com/settings/tokens
3. Install my Siri Shortcut by following this iCloud link on your iPhone: https://www.icloud.com/shortcuts/0f28733463b94c8fafda83c23801be4d **Please note** You may need to enable the `Allow Untrusted Shortcuts` flag under `Settings -> Shortcuts` on you iOS device if you are receiving an alert when trying to install my Shortcut.
4. Modify the Shortcut with your own values (see screenshot below). Open the Shortcuts and change the `USERNAME` and `REPOSITORY` with your own GitHub values (e.g. `pierluigi` and `actions-demo` in this case) inside the `URL` field. Expand the "Get contents of URL" section `Show More ->  Headers - Authorization` and add your own GitHub PAT.


Done! Have fun filing bug reports using Siri ;)

### Thank you!
