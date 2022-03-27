import { QA_PAIRS } from 'autotesting/pageobjects/qa-pairs.data';
import QaToolPage from 'autotesting/pageobjects/qa-tool.page';
import allure from '@wdio/allure-reporter';

describe("Normal tests", () => {
  afterEach(() => Browser.reloadSession());

  [...QA_PAIRS].forEach(qa => {
    it("Add qa-pair: "+ qa.testCaseName, () => {
      const description = `<ul>
      <li>Open Q/A tool page</li>
      <li>Input question and answer</li>
      <li>Submit question and answer</li>
      <li>Check added question</li>
      </ul>`;
      allure.addDescription(description, 'html');

      // arrange
      QaToolPage.open();

      // action
      QaToolPage.submitNewQuestion(qa.questionText, qa.answerText);
      const lastQuestionNumber = QaToolPage.getCurrentQuestionsAmount() - 1;
      QaToolPage.clickQuestion(lastQuestionNumber);

      // assert
      QaToolPage.expectQuestionText( lastQuestionNumber, qa.questionText);
      QaToolPage.expectAnswerText(lastQuestionNumber, qa.answerText);
    });
  })
});
