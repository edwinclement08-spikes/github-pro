const TEST_ADD = 'TEST_ADD';
const TEST_CLR = 'TEST_CLR';

function createTestAdd(text) {
  return { type: TEST_ADD, text };
}

function createTestClear() {
  return { type: TEST_CLR };
}

export { TEST_ADD, TEST_CLR, createTestAdd, createTestClear };
