const { test } = require('@playwright/test');
const { QaToolPage } = require('../../pageobjects/qa-tool.page');

test.describe("Critical tests", () => {
  test("Add question", async ({page}) => {
    const qaToolPage = new QaToolPage(page);

    // arrange
    await qaToolPage.openPage();
    const questionText = "To be or not to be?"

    // action
    await qaToolPage.submitNewQuestion(questionText, "42");

    // assert
    await qaToolPage.expectQuestionText(1, questionText);
  });
});
