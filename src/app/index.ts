import Generator = require('yeoman-generator')
import { green } from 'chalk'
import yosay = require('yosay')

interface Answers {
  storename: string
  withDevTools: boolean
}

module.exports = class extends Generator {
  answers: Answers

  async prompting() {
    this.log(yosay(`Welcome to  ${green('Context Store')} generator !`))

    const prompts: Generator.Question[] = [
      {
        type: 'input',
        name: 'storename',
        message: 'What is the prefix of your store?',
        default: 'context'
      },
      {
        type: 'confirm',
        name: 'withDevTools',
        message: 'Would you like to include redux dev tools for this store?',
        default: false
      }
    ]

    this.answers = await this.prompt<Answers>(prompts)
  }

  writing() {
    const capitalizedName = this.answers.storename.charAt(0).toUpperCase() + this.answers.storename.slice(1)
    const templateData = {
      ...this.answers,
      ...this.options,
      capitalizedName
    }
    if (this.answers.withDevTools) {
      this.fs.copyTpl(
        this.templatePath('devtools.ts'),
        this.destinationPath(`${this.answers.storename}Store/devtools.ts`),
        templateData
      )
      this.fs.copyTpl(
        this.templatePath('reducerWithDevTools.ts'),
        this.destinationPath(`${this.answers.storename}Store/reducer.ts`),
        templateData
      )
    } else {
      this.fs.copyTpl(
        this.templatePath('reducerWithoutDevTools.ts'),
        this.destinationPath(`${this.answers.storename}Store/reducer.ts`),
        templateData
      )
    }
    this.fs.copyTpl(
      this.templatePath('actions.ts'),
      this.destinationPath(`${this.answers.storename}Store/actions.ts`),
      templateData
    )

    this.fs.copyTpl(
      this.templatePath(`StoreProvider.tsx`),
      this.destinationPath(`${this.answers.storename}Store/${capitalizedName}StoreProvider.tsx`),
      templateData
    )
    this.fs.copyTpl(
      this.templatePath('initialState.ts'),
      this.destinationPath(`${this.answers.storename}Store/initialState.ts`),
      templateData
    )
    this.fs.copyTpl(
      this.templatePath('store.ts'),
      this.destinationPath(`${this.answers.storename}Store/store.ts`),
      templateData
    )
    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`${this.answers.storename}Store/index.ts`),
      templateData
    )
  }

  install() {
    console.log('Nothing to install')
  }
}
