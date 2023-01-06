const { I } = inject();

Given('я нахожусь на странице {string}', (page) => {
  I.amOnPage(page);
  I.wait(3);
});

When('я ввожу в поле {string} текст {string}', (fieldName, value) => {
  I.fillField(fieldName, value);
  I.wait(3);
});

When('я ввижу в поле {string} текст {string}', (fieldName, value) => {
  I.fillField(fieldName, value);
  I.wait(3);
});

When('я ввижу в поле {string} текст {string}', (fieldName, value) => {
  I.fillField(fieldName, value);
  I.wait(3);
});

When('я ввижу в поле {string} текст {string}', (fieldName, value) => {
  I.fillField(fieldName, value);
  I.wait(3);
});

When('я нажимаю на кнопку {string}', (buttonId) => {
  I.click(buttonId)
});

Then('я вижу сообщение {string}', (greetMessage) => {
  I.waitForElement(greetMessage, 10);
});
