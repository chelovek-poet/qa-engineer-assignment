const { test } = require('@playwright/test');
const { QaToolPage } = require('../../pageobjects/qa-tool.page');

test.describe("Critical tests", () => {
  test("Sort questions", async ({page}) => {
    const qaToolPage = new QaToolPage(page);

    // arrange
    await qaToolPage.openPage();
    await qaToolPage.enterUnsortedQuestions();

    // action
    await qaToolPage.clickSortButton();

    // assert
    await qaToolPage.expectQuestionsSorted();
  });
});
