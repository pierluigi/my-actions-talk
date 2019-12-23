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

Watch a prerecoreded demo video on my YouTube channel to see what this is about: https://youtu.be/CQnnlLfVhW0

**Instructions**
To recreate this demo simply follow these steps:

1. Fork this repository (https://github.com/pierluigi/my-actions-talk)
2. Generate a new Personal Access Token with `repo` permissions https://github.com/settings/tokens
3. Download my Siri Shortcut by following this iCloud link on your iOS device: https://www.icloud.com/shortcuts/0f28733463b94c8fafda83c23801be4d 
    **⚠️ Please note** You may have to enable the `Allow Untrusted Shortcuts` flag under `Settings -> Shortcuts` on you iOS device if you are receiving an alert when trying to install my Shortcut. You will be able to review what my shortcut does before finally installing it.

You need to change the following values:

<img src="https://raw.githubusercontent.com/pierluigi/my-actions-talk/master/shortcuts-info.jpeg" width="380" />

1. Change `[USERNAME]` and `[REPOSITORY]` with the corresponding values of your fork (e.g. `pierluigi` and `actions-demo` in this case) inside the `URL` field. 
2. Expand the `Get contents of URL` section `Show More ->  Headers - Authorization` and add the GitHub PAT you generated in step 2 above.
3. You can change the sentence to your own liking to trigger this shortcut. By default, it will respond to `Hey Siri – Create New Issue`. After a short pause, Siri will ask you `With what text?`. At this point you can commence the dictation of the issue description.


Done! Have fun filing bug reports using Siri ;)

### Thank you!
