'use strict'
// tslint:disable-next-line:variable-name
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b
        }) ||
      function(d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) {
            d[p] = b[p]
          }
        }
      }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
Object.defineProperty(exports, '__esModule', { value: true })
var Lint = require('tslint')
var ts = require('typescript')
// tslint:disable-next-line:variable-name
var sprintf_js_1 = require('sprintf-js')
// tslint:disable-next-line:variable-name
var Rule = (function(_super) {
  __extends(Rule, _super)
  function Rule() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Rule.prototype.apply = function(sourceFile) {
    return this.applyWithWalker(
      new OutputMetadataWalker(sourceFile, this.getOptions())
    )
  }
  Rule.metadata = {
    ruleName: 'existing-environment-vars',
    type: 'functionality',
    // tslint:disable-next-line:object-literal-sort-keys
    description:
      'Reports when trying to access an non-existing environment variable',
    rationale:
      // tslint:disable-next-line:max-line-length
      'Useful when building the front-end of an application which internally uses environment variables. For instance, REACT_APP_VAR.',
    options: null,
    optionsDescription: 'Not configurable.',
    typescriptOnly: true
  }
  Rule.RuleFailure =
    'Environment variable "%s" used but not presented in environment'
  return Rule
})(Lint.Rules.AbstractRule)
exports.Rule = Rule
// tslint:disable-next-line:variable-name
var OutputMetadataWalker = (function(_super) {
  __extends(OutputMetadataWalker, _super)
  function OutputMetadataWalker() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  OutputMetadataWalker.prototype.visitPropertyAccessExpression = function(
    node
  ) {
    var varName = node.name.getText()
    var text = node.expression.getText()
    if (
      varName &&
      text === 'process.env' &&
      process.env[varName] === undefined
    ) {
      this.addFailure(
        this.createFailure(
          node.name.getStart(),
          node.name.getWidth(),
          sprintf_js_1.sprintf(Rule.RuleFailure, varName)
        )
      )
    }
    _super.prototype.visitPropertyAccessExpression.call(this, node)
  }
  OutputMetadataWalker.prototype.visitElementAccessExpression = function(node) {
    var name = node.argumentExpression
    var expressionText = node.expression.getText()
    var varName = null
    if (
      name.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral ||
      name.kind === ts.SyntaxKind.StringLiteral
    ) {
      varName = name.getText()
      varName = varName.slice(1, varName.length - 1)
    }
    if (
      varName &&
      expressionText === 'process.env' &&
      process.env[varName] === undefined
    ) {
      this.addFailure(
        this.createFailure(
          name.getStart(),
          name.getWidth(),
          sprintf_js_1.sprintf(Rule.RuleFailure, varName)
        )
      )
    }
    _super.prototype.visitElementAccessExpression.call(this, node)
  }
  return OutputMetadataWalker
})(Lint.RuleWalker)
