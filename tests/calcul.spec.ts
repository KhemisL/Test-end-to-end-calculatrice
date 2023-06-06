import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");

  /////// Addition ////////////
  await page.getByRole("button", { name: "7" }).click();
  await page.getByRole("button", { name: "Plus" }).click();
  await page.getByRole("button", { name: "7" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page.getByText("=14").nth(0)).toBeVisible();

  await page.getByRole("button", { name: "0" }).click();
  await page.getByRole("button", { name: "Plus" }).click();
  await page.getByRole("button", { name: "0" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page.getByText("=0").nth(0)).toBeVisible();

  /////// Multiplication ////////////
  await page.getByRole("button", { name: "7" }).click();
  await page.getByRole("button", { name: "Multiplier" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page.getByText("=14").nth(1)).toBeVisible();

  /////// Soustraction ////////////
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "Moins" }).click();
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page.getByText("=0").nth(1)).toBeVisible();

  /////// Division ////////////
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "Diviser" }).click();
  await page.getByRole("button", { name: "0" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page.getByText("=undefined")).toBeVisible();
  await page.getByRole("button", { name: "9" }).click();
  await page.getByRole("button", { name: "Diviser" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page.getByText("=4.5")).toBeVisible();

  /////// Retoour en arrière ////////////
  await page.getByRole("button", { name: "5" }).click();
  await page.getByRole("button", { name: "Retour arrière" }).click();
});
