const { test } = require('@playwright/test');
const { QaToolPage } = require('../../pageobjects/qa-tool.page');
const { QA_PAIRS } = require('../../testData/qa-pairs.data');

test.describe("Normal tests", () => {
  [...QA_PAIRS].forEach(qa => {
    test("Add qa-pair: "+ qa.testCaseName, async ({ page }) => {
      const qaToolPage = new QaToolPage(page);
      // arrange
      await qaToolPage.openPage();

      // action
      await qaToolPage.submitNewQuestion(qa.questionText, qa.answerText);
      const lastQuestionNumber = await qaToolPage.getCurrentQuestionsAmount() - 1;
      await qaToolPage.clickQuestion(lastQuestionNumber);

      // assert
      await qaToolPage.expectQuestionText( lastQuestionNumber, qa.questionText);
      await qaToolPage.expectAnswerText(lastQuestionNumber, qa.answerText);
    });
  });
});
