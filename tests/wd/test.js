const assert = require("assert");
const expect = require("chai").expect;

describe("Running a sample test", function() {
  this.timeout(20000);
  const wd = require("wd");
  const driver = wd.promiseChainRemote({
    host: "localhost",
    port: 4723
  });

  before(async () => {
    return await driver.init({
      platformName: "Android",
      deviceName: "Android Emulator",
      app: "/Users/pushkar/Stash/om_detox_example/app.apk",
      appWaitActivity: "*",
      automationName: "UiAutomator2",
      androidInstallTimeout: 20000
    });
  });

  after(async () => {
    return await driver.quit(); // end testing session after test
  });

  beforeEach(async () => {
    await driver.sleep(5000);
    const isWelcomeScreen = await driver.elementByAccessibilityId("welcome").isDisplayed();
    console.log("Welcome button is displayed ?", isWelcomeScreen)
  });

  it("should show hello screen after tap", async () => {
    const helloBtn = await driver.elementByAccessibilityId("hello_button");
    await helloBtn.click();
  });

});
