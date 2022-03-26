const testHost = process.env.testHost || "https://app.deel.training/";

class TestSite {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    organization(orgName) {
        return `${this.baseUrl}/${orgName}`;
    }

    project(orgName, projectName) {
        return `${this.baseUrl}/${orgName}/${projectName}`;
    }
}

module.exports = {
    // page url builder for our test site
    site: new TestSite(testHost),
    // configuration object for Selenium
    selenium: {
        host: process.env.selenium || "localhost",
        desiredCapabilities: {
            browserName: "chrome"
        }
    }
};