const { test } = require('@playwright/test');
const { QaToolPage } = require('../../pageobjects/qa-tool.page');

test.describe("Critical tests", () => {
  test("Show/hide answer", async ({page}) => {
    const qaToolPage = new QaToolPage(page);

    // arrange
    await qaToolPage.openPage();

    // action
    await qaToolPage.clickQuestion(0);

    // assert
    await qaToolPage.expectAnswerDisplayed(0);

    // action
    await qaToolPage.clickQuestion(0);

    // assert
    await qaToolPage.expectAnswerNotDisplayed(0);
  });

  test("Check newly added answer", async ({page}) => {
    const qaToolPage = new QaToolPage(page);

    // arrange
    await qaToolPage.openPage();
    const answerText = "new answer";

    // action
    await qaToolPage.submitNewQuestion("new question", answerText);
    await qaToolPage.clickQuestion(1);

    // assert
    await qaToolPage.expectAnswerText(1, answerText);
  });
});
