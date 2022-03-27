import QaToolPage from 'autotesting/pageobjects/qa-tool.page';
import allure from '@wdio/allure-reporter';

describe("Crit tests", () => {
  it("Add question", () => {
    const description = `<ul>
    <li>Open Q/A tool page</li>
    <li>Input question and answer</li>
    <li>Submit question and answer</li>
    <li>Check added question</li>
    </ul>`;
    allure.addDescription(description, 'html');

    // arrange
    QaToolPage.open();
    const questionText = "To be or not to be?"

    // action
    QaToolPage.submitNewQuestion(questionText, "42");

    // assert
    QaToolPage.expectQuestionText( 1, questionText);
  });
});
