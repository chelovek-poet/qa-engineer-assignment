const { expect } = require('@playwright/test');
const { UNSORTED, SORTED } = require('./sort-questions.data');

exports.QaToolPage = class QaToolPage {
  /**
   *
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  // Elements
  //--------------------------------------------------------------------------------------------------------------------
  get mainHeader() {
    return this.page.locator('.header');
  }

  get questionsHeader() {
    return this.page.locator('.questions h2');
  }

  get questionMakerHeader() {
    return this.page.locator('.question-maker h2');
  }

  get createdQuestions() {
    return this.page.locator('.question__question');
  }

  get createdQuestionsAnswers() {
    return this.page.locator('.question__answer');
  }

  get sortButton() {
    return this.page.locator('.btn-primary');
  }

  get removeButton() {
    return this.page.locator('.btn-danger');
  }

  get questionInput() {
    return this.page.locator('#question');
  }

  get answerTextarea() {
    return this.page.locator('#answer');
  }

  get createButton() {
    return this.page.locator('.btn-success');
  }

  get questionsHeaderTooltip() {
    return this.page.locator('.questions span');
  }

  get questionMakerHeaderTooltip() {
    return this.page.locator('.question-maker span');
  }

  get sidebarBlock() {
    return this.page.locator('.sidebar');
  }

  get noQuestionsAllertBlock() {
    return this.page.locator('.alert-danger');
  }

  // Actions
  //--------------------------------------------------------------------------------------------------------------------
  async openPage() {
    await this.page.goto('http://localhost:8000/');
  }

  async getCurrentQuestionsAmount() {
    return await this.createdQuestions.count();
  }

  async clickQuestion(questionNumber) {
    await this.createdQuestions.nth(questionNumber).click();
  }

  async clickSortButton() {
    await this.sortButton.click();
  }

  async clickRemoveButton() {
    await this.removeButton.click();
  }

  async submitNewQuestion(questionText, answerText) {
    await this.questionInput.fill(questionText);
    await this.answerTextarea.fill(answerText);
    await this.createButton.click();
  }

  async enterUnsortedQuestions() {
    for (let i = 0; i < UNSORTED.length; i++) {
      await this.submitNewQuestion(UNSORTED[i].questionText, UNSORTED[i].answerText);
    }
  }

 // Expects
  //--------------------------------------------------------------------------------------------------------------------
  async expectHeaders() {
    await expect(this.mainHeader).toHaveText("The awesome Q/A tool");
    await expect(this.questionsHeader).toHaveText("Created questions");
    await expect(this.questionMakerHeader).toHaveText("Create a new question");
  }

  async expectQuestionHeaderTooltip() {
    await expect(this.questionsHeaderTooltip).toBeVisible();
    await expect(this.questionsHeaderTooltip).toHaveText("Here you can find the created questions and their answers.");
  }

  async expectQuestionMakerHeaderTooltip() {
    await expect(this.questionMakerHeaderTooltip).toBeVisible();
    await expect(this.questionMakerHeaderTooltip).toHaveText("Here you can create new questions and their answers.");
  }

  async expectQuestionText(questionNumber, questionText) {
    await expect(this.createdQuestions.nth(questionNumber)).toHaveText(questionText);
  }

  async expectAnswerDisplayed(answerNumber) {
    await expect(this.createdQuestionsAnswers.nth(answerNumber)).toBeVisible();
  }

  async expectAnswerNotDisplayed(answerNumber) {
    await expect(this.createdQuestionsAnswers.nth(answerNumber)).toBeHidden();
  }

  async expectAnswerText(answerNumber, answerText) {
    await expect(this.createdQuestionsAnswers.nth(answerNumber)).toHaveText(answerText);
  }

  async expectQuestionsNumberInSidebar() {
    const questionsNumber = await this.getCurrentQuestionsAmount();
    let middleText
    switch (questionsNumber) {
      case 0:
        middleText = 'no questions';
        break;
      case 1:
        middleText = '1 question';
        break;
      default:
        middleText = questionsNumber + ' questions';
    }
    await expect(this.sidebarBlock).toHaveText("Here you can find " + middleText + ". Feel free to create your own questions!");
  }

  async expectQuestionsSorted() {
    for (let i = 0; i < SORTED.length; i++) {
      await this.clickQuestion(i);
      await expect(this.createdQuestions.nth(i)).toHaveText(SORTED[i].questionText);
      await expect(this.createdQuestionsAnswers.nth(i)).toHaveText(SORTED[i].answerText);
    }
  }
}
