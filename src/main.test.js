import { afterEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import RaveAlert from './main';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('RaveAlert', () => {

  test('RaveAlert class can be instantiated', async () => {

    new RaveAlert();

    const alert = await screen.findByLabelText('High-level alert');

    expect(alert).toBeInTheDocument();

  });
  
});
