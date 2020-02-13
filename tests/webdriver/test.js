const assert = require("assert");
const expect = require("chai").expect;
const wdio = require('webdriverio')

/** References:
 * Webdriver.io documentation for Appium selectors in Android: https://webdriver.io/docs/selectors.html#android-uiautomator
 */

describe("Running a sample test", function() {
  this.timeout(20000);
  var driver = null
	const options = {
		hostname: 'localhost',
		port: 4723,
		logLevel: 'error',
		capabilities: {
			platformName: 'android',
			app: '/Users/pushkar/Stash/om_detox_example/tests/app.apk',
			deviceName: 'Device',
			automationName: 'UiAutomator2',
		},
	}


  before(async () => {
		driver = await wdio.remote(options)
	})

	after(async () => {
		await driver.deleteSession()
	})

  beforeEach(async () => {
    const welcomeScreen = await driver.$('~welcome')
    const isWelcomeScreen = await welcomeScreen.isDisplayed()
    console.log("Welcome button is displayed ?", isWelcomeScreen)
  });

  it("should show hello screen after tap", async () => {
    const helloBtn = await driver.$('~hello_button')
    await helloBtn.click();
  });

});
