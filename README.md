## Install:

```
npm i -D playwright-bdd

npm i -D @playwright/test @cucumber/cucumber
```

After installing/updating Playwright you need to install browsers:

```
npx playwright install
```

## Run:

```
npm test
```

Run  test in UI mode

```
npx playwright test --ui
```

Run  test in headed mode


```
npx playwright test --headed
```


### Report: :+1

```
npm run report
```

## Directory test-results wil be used to save 'screenshots' 



### Test Reports :+1

There will be a new page displayed for reports in http://localhost:9323/
where we can have a view of the test results 