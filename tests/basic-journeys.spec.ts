import { expect, test } from "@playwright/test";

const URL: string = "localhost:3000/";

test.describe("Basics E2E Tests", () => {
  test("Home page working correctly", async ({ page }) => {
    await page.goto(URL);
    await expect(page).toHaveTitle("Home Page - Bkool");
  });

  test("Profiles searcher working correctly", async ({ page }) => {
    await page.goto(URL);
    await page.getByTitle("Go to Searcher Profile").click();
    await expect(page).toHaveTitle("Profile Search Engine - Bkool");
  });

  test("Profile details working correctly", async ({ page }) => {
    await page.goto(URL);
    await page.getByTitle("Go to Searcher Profile").click();
    await page.getByLabel("List of profiles").isVisible();
    await page.getByTitle("Lorenzo").click();
    await page.getByText("Mr Lorenzo Rojas").isVisible();
  });
});
