### Web Development Testing

**_Unit & Integration Testing_**

- Compenent Testing
- Jest & JS DOM
- Testing Library / React Testing Library

- npm init :
- npm install jest -D

**_Automation Testing_** - e2e Test Cases - Tools: Puppeteer, Cypress, Selenium

- Puppeteer
  - npm install puppeteer -D
  - import this package where you want to run puppeteer testing

**_A/B Testing_** - Split testing - Bucket testing

- CTA: call to action
  - Based on Data, we can take decision in this type of testing
    - Provide different bucket example, version 1 website and version 2 website and monitor the traffic. Based on user using the versions decide the best verision.
    - Example. may be keeping the button name, "GET STARTED" or "START LEARNING"
    - Decide based on the success matrix whoever clicks more time on which version

**_Performance Testing_**

- Google chrome dev tools - Performance - Lighthouse - other tools: webpagetest, pageSpeedtest

## **_Test Driver Development_**

- RED - GREEN - REFACTOR

  - Write test cases first which fails as we don't have code to run
  - Make them pass by writing the code
  - finally re-factor them to perform well

- npm run test -- --watch -> a
