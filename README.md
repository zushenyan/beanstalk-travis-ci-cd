# Node.js & AWS Elastic Beanstalk & Travis

This is a demonstration of how to integrate CI/CD with `nodejs`, `AWS Elastic Beanstalk` and `Travis`.

There are two ways to do the CI/CD, you can look up the following links for tutorial:
- [with docker](https://github.com/zushenyan/test-playground/tree/docker)
- [without docker](https://github.com/zushenyan/test-playground/tree/no-docker)

# How to trigger CI/CD

Simply do

1. `git add .`
2. `git commit -m "update"`
3. `git push origin master`

To start the CI on Travis. Once all the tests passed Travis will automatically run depolyment script for deploying on AWS Elastic Beanstalk.
