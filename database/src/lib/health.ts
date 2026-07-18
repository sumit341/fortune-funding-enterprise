import { mongooseInstance } from './mongoose.js';

export function databaseHealth() {
  const state =
    mongooseInstance.connection.readyState;

  return {
    connected: state === 1,
    state,
  };
}