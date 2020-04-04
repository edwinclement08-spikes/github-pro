const TEST = 'TEST';

function createTestAction(text) {
  return { type: TEST, text }
}

export { TEST, createTestAction };
