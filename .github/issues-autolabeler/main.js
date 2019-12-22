const core = require("@actions/core");
const getLuisIntent = require('./get-luis-intent');

async function run() {
  try {
    const issue = core.getInput("issue", { required: true });
    console.log("ISSUE", issue);
    
    const label = await getLuisIntent(issue);

    console.log("LABEL", label);

  } catch (error) {
    console.error(error.message);
    core.setFailed(error.message);
  }
}

run();
