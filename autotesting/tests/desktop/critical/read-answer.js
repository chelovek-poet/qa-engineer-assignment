import QaToolPage from 'autotesting/pageobjects/qa-tool.page';
import allure from '@wdio/allure-reporter';

describe("Crit tests", () => {
  it("Show/hide answer", () => {
    const description = `<ul>
    <li>Open Q/A tool page</li>
    <li>Click question</li>
    <li>Check answer is not empty</li>
    </ul>`;
    allure.addDescription(description, 'html');

    // arrange
    QaToolPage.open();

    // action
    QaToolPage.clickQuestion(0);

    // assert
    QaToolPage.expectAnswerDisplayed(0, true);

    // action
    QaToolPage.clickQuestion(0);

    // assert
    QaToolPage.expectAnswerDisplayed(0, false);
  });

  it("Check newly added answer", () => {
    const description = `<ul>
    <li>Open Q/A tool page</li>
    Submit question and answer</li>
    <li>Click question</li>
    <li>Check added question</li>
    <li>Check answer is not empty</li>
    </ul>`;
    allure.addDescription(description, 'html');

    // arrange
    QaToolPage.open();
    const answerText = "new answer"

    // action
    QaToolPage.submitNewQuestion("new question");
    QaToolPage.clickQuestion()
    QaToolPage.clickQuestion(1);

    // assert
    QaToolPage.expectAnswerText(1, answerText);
  });
});
