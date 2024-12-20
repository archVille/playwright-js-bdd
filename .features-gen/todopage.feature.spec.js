/** Generated from: features\todopage.feature */
import { test } from "..\\steps\\fixtures.ts";

test.describe(`Todo Page`, () => {

  test.beforeEach(async ({ Given, todoPage }) => {
    await Given(`I am on todo page`, null, { todoPage });
  });

  test(`Empty list`, async ({ Then, And, todoPage }) => {
    await Then(`visible todos count is 0`, null, { todoPage });
    await And(`page screenshot matches previous one`, null, { todoPage });
  });

  test(`Add todos`, async ({ When, And, Then, todoPage }) => {
    await When(`I add todo "foo"`, null, { todoPage });
    await And(`I add todo "bar"`, null, { todoPage });
    await Then(`visible todos count is 2`, null, { todoPage });
  });

  test(`Complete todos`, async ({ When, And, Then, todoPage }) => {
    await When(`I add todo "foo"`, null, { todoPage });
    await And(`I add todo "bar"`, null, { todoPage });
    await And(`I complete todo "bar"`, null, { todoPage });
    await And(`I filter todos as "Completed"`, null, { todoPage });
    await Then(`visible todos count is 1`, null, { todoPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $tags: ({}, use, testInfo) => use({
    "Empty list": ["@todo"],
    "Add todos": ["@todo"],
    "Complete todos": ["@todo"],
  }[testInfo.titlePath.slice(2).join("|")] || []),
});