const path = require("path");
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
      app: path.join(process.cwd(), "app.apk"),
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
    const isWelcomeScreen = await driver
      .elementByAccessibilityId("welcome")
      .isDisplayed();
    expect(isWelcomeScreen).to.be.true;
  });

  it("should show hello screen after tap", async () => {
    const helloBtn = await driver.elementByAccessibilityId("hello_button");
    await helloBtn.click();
    const isHello = await driver.elementByAndroidUIAutomator('new UiSelector().className("android.widget.TextView").text("Hello!!!")');
    const isHelloDisplayed = await isHello.isDisplayed();
    expect(isHelloDisplayed).to.be.true;
  });
});
