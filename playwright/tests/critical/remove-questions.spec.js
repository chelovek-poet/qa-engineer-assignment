const { test } = require('@playwright/test');
const { QaToolPage } = require('../../pageobjects/qa-tool.page');

test.describe("Critical tests", () => {
  test("Remove questions", async ({page}) => {
    const qaToolPage = new QaToolPage(page);

    // arrange
    await qaToolPage.openPage();

    // action
    await qaToolPage.submitNewQuestion("just", "text");

    // assert
    await qaToolPage.expectQuestionsNumberInSidebar();

    // action
    await qaToolPage.clickRemoveButton();

    // assert
    await qaToolPage.expectQuestionsNumberInSidebar();
  });
});
