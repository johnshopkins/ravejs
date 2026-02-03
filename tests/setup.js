import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const restHandlers = [
  http.get('https://www.jhu.edu/wp-json/jhu-public/v1/rave-alert', () => {
    return HttpResponse.json({
      alert: {
        pubDate: 1768430727,
        link: 'https://www.jhu.edu',
        message: 'This is the message',
        image: null,
        type: 'high',
        typeLabel: 'High-level alert',
      }
    })
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers());
