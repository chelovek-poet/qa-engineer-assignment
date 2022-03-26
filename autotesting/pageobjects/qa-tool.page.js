import allure from '@wdio/allure-reporter';
import { step } from 'utils/step-decorator';

class qaToolPage {
  // Elements
  //--------------------------------------------------------------------------------------------------------------------
  get mainHeader() {
    return $('.header');
  }

  get questionsHeader() {
    return $('.questions h2');
  }

  get questionMakerHeader() {
    return $('.question-maker h2');
  }

  get createdQuestions() {
    return $$('.question__question');
  }

  get createdQuestionsAnswers() {
    return $$('.question__answer');
  }

  get sortButton() {
    return $('.btn-primary');
  }

  get removeButton() {
    return $('.btn-danger');
  }

  get questionInput() {
    return $('#question');
  }

  get answerTextarea() {
    return $('#answer');
  }

  get createButton() {
    return $('.btn-suckess');
  }

  get questionsHeaderTooltip() {
    return $('.questions span');
  }

  get questionMakerHeaderTooltip() {
    return $('.question-maker span');
  }

  get sidebarBlock() {
    return $('.sidebar');
  }

  get noQuestionsAllertBlock() {
    return $('.alert-danger');
  }

  // Actions
  //--------------------------------------------------------------------------------------------------------------------
  @step
  open() {
    browser.url("/");
  }

  @step()
  getCurrentQuestionsNumber() {
    this.createdQuestions().length;
  }

  @step()
  clickQuestion(questionNumber) {
      this.createdQuestions[questionNumber].WaitForClickable();
      this.createdQuestions[questionNumber].click();
  }

  @step()
  clickSortButton() {
      this.sortButton.WaitForClickable();
      this.sortButton.click();
  }

    @step()
    clickRemoveButton() {
        this.removeButton.WaitForClickable();
        this.removeButton.click();
    }

    @step()
    submitNewQuestion(questionText, answerText) {
      this.questionInput.click();
      browser.keys(questionText);
      this.answerTextarea.click();
      browser.keys(answerText);
      this.createButton.click();
    }



  // Expects
  //--------------------------------------------------------------------------------------------------------------------
  @step()
  expectHeaders() {
    expect(this.mainHeader.getText()).toEqual("The awesome Q/A tool");
    expect(this.questionsHeader.getText()).toEqual("Created questions");
    expect(this.questionMakerHeader.getText()).toEqual("Create a new question");
  }

  @step()
  expectQuestionHeaderTooltip() {
    expect(this.questionsHeaderTooltip.isDisplayed()).toBeTruthy();
    expect(this.questionsHeaderTooltip.getText()).toEqual("Here you can find the created questions and their answers.");
  }

  @step()
  expectQuestionMakerHeaderTooltip() {
    expect(this.questionMakerHeaderTooltip.isDisplayed()).toBeTruthy();
    expect(this.questionMakerHeaderTooltip.getText()).toEqual("Here you can create new questions and their answers.");
  }

  @step()
  expectQuestionText(questionNumber, questionText) {
      expect(this.createdQuestions[questionNumber].getText()).toEqual(questionText);
  }

  @step()
  expectAnswerDisplayed(answerNumber, displayed) {
    expect(this.createdQuestionsAnswers[answerNumber].isDisplayed()).toEqual(displayed);
  }

  @step()
  expectAnswerText(answerNumber, answerText) {
    expect(this.createdQuestionsAnswers[answerNumber].getText()).toEqual(answerText);
  }

  @step()
  expectQuestionsNumberInSidebar() {
    const questionsNumber = this.getCurrentQuestionsNumber();
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
    expect(this.sidebarBlock.getText()).toEqual("Here you can find " + middleText + ". Feel free to create your own questions!");
  }
}

export default new qaToolPage();