/* eslint-disable linebreak-style */
import Validator from '../Validator';

test('Test Validator', () => {
  const res = Validator.validateUsername('Alex322_sd-d');
  expect(res).toEqual(true);
});

test('Test Validator-2', () => {
  const res = Validator.validateUsername('_Alex322_sd-d');
  expect(res).toEqual(false);
});

test('Test Validator-3', () => {
  const res = Validator.validateUsername('-Alex322_sd-d');
  expect(res).toEqual(false);
});

test('Test Validator-4', () => {
  const res = Validator.validateUsername('Alex3265854682_sd-d');
  expect(res).toEqual(false);
});

test('Test Validator-5', () => {
  const res = Validator.validateUsername('0Alex322_sd-d');
  expect(res).toEqual(false);
});

test('Test Validator-6', () => {
  const res = Validator.validateUsername('Alex322_sd-d6');
  expect(res).toEqual(false);
});

test('Test Validator-7', () => {
  const res = Validator.validateUsername('Alex322_sd-d_');
  expect(res).toEqual(false);
});

test('Test Validator-8', () => {
  const res = Validator.validateUsername('Alex322_sd-d-');
  expect(res).toEqual(false);
});
