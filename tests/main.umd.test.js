import { afterEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

require('../dist/main.umd');

describe('Universal Module Definition (UMD)', () => {

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('RaveAlert class can be instantiated', async () => {

    new RaveAlert();

    const alert = await screen.findByLabelText('High-level alert');

    expect(alert).toBeInTheDocument();

  });

});
