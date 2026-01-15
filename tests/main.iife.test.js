import { afterEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Immediately Invoked Function Expression (IIFE)', () => {

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('RaveAlert is added automatically', async () => {

    require('../dist/main.iife');

    const alert = await screen.findByLabelText('High-level alert');

    expect(alert).toBeInTheDocument();

  });

});
