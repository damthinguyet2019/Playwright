import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev38-mtf.opdev.vn/client/qt/');
  await page.locator('input[name="vpc_Amount"]').click();
  await page.locator('input[name="vpc_Amount"]').fill('177700000');
  await page.locator('input[name="vpc_Amount"]').press('Enter');
  await page.locator('intercard-form #intercard-radio').click();
  await page.locator('intercard-form span').click();
  await page.getByRole('radio', { name: 'Thẻ tín dụng / Ghi nợ' }).check();
  await page.goto('https://dev38.opdev.vn/paygate/general/?id=INV-uqzHD-RGTM-iXp7MtNRQ4Q&locale=vi&b=&type=1');
  await page.getByRole('textbox', { name: '5678 9101 1234' }).click();
  await page.getByRole('textbox', { name: '5678 9101 1234' }).fill('5123 4500 0000 0008');
  await page.getByRole('textbox', { name: '/25' }).fill('05/29');
  await page.getByRole('textbox', { name: '123', exact: true }).fill('789');
  await page.getByRole('textbox', { name: 'NGUYEN VAN A' }).fill('et');
  await page.getByRole('textbox', { name: 'name@email.com' }).click();
  await page.getByRole('textbox', { name: 'name@email.com' }).fill('u@gmail.com');
  await page.getByRole('checkbox', { name: 'Tôi đã đọc, hiểu rõ và đồng' }).check();
  await page.getByRole('button', { name: 'Thanh toán' }).click();
  await page.goto('https://dev38.opdev.vn/paygate/payment-error?locale=vi&error_name=INTERNAL_SERVER_ERROR&merchant_name=TEST%20PCI%20NAME&order_info=Ma%20Don%20Hang&merch_txn_ref=TEST_17925934881541151297027&create_time=20261021T143854Z');
});