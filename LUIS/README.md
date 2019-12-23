# triage-issues-app-generator

This is a Ruby script to generate a LUIS app training model in JSON format.

To run, simply:
```
ruby triage-issues-app-generator.rb
```

Please note this folder also contains a pre-generated JSON file based on ~1000 issues taken from various GitHub repositories. This is enough to train our LUIS model to detect if an "utterance" (issue body in our case) should be given a `bug`, `enhancement` or `question` label. Feel free to import this convenience app definition in your [LUIS Applications List Page](https://www.luis.ai/applications) to get started. 
