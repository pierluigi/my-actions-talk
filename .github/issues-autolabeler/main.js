const getLuisIntent = require('./get-luis-intent');

async function run() {
  try {
    const issue = core.getInput("issue", { required: true });
    const { number, title } = issue;
    
    const label = await getLuisIntent(title);

    console.log(label);

  } catch (error) {
    console.error(error.message);
    core.setFailed(error.message);
  }
}

run();
