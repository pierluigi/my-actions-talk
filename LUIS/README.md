## Usage

This folder comes with a Ruby script to generate a LUIS app training model in JSON format.

To run, simply:
```
ruby triage-issues-app-generator.rb
```

Please note this folder also contains a pre-generated JSON file based on ~1000 issues taken from various GitHub repositories. This is enough to train our LUIS model to detect if an "utterance" (issue body in our case) should be given a `bug`, `enhancement` or `question` label. Feel free to import this convenience app definition in your [LUIS Applications List Page](https://www.luis.ai/applications) to get started. 

## Setting up your LUIS environment

Once you have created the LUIS app you will need to grab the LUIS Application ID and Endpoint Key. To do so, reach out to your LUIS Dashboard and click on the `Manage` tab to retrieve the App ID. Next, find the `Primary Key` value under the `Azure Resources` section.

Finally, in your GitHub repository Settings tab reach for the `Secrets` section and create the corresponding `LUIS_APP_ID` and `LUIS_APP_KEY` secrets. These will be required by our workflow.
