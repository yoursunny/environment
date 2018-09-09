module.exports = {
  hooks: {
    'commit-msg': 'commitlint --env HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged && yarn tsc',
  },
};