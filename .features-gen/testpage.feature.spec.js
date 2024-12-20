/** Generated from: features\testpage.feature */
import { test } from "..\\steps\\fixtures.ts";

test.describe(`Playwright Home Page`, () => {

  test(`Check title`, async ({ Given, page, Then }) => {
    await Given(`I am on Playwright home page`, null, { page });
    await Then(`I see in title "Playwright"`, null, { page });
  });

  test.describe(`Check get started`, () => {

    test(`Example #1`, async ({ Given, page, When, Then }) => {
      await Given(`I am on Playwright home page`, null, { page });
      await When(`I click link "Get started"`, null, { page });
      await Then(`I see in title "Installation"`, null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
});