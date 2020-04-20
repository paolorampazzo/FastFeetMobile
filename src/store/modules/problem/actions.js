export function loadProblems(id) {
  return {
    type: '@problem/LOAD',
    payload: { id },
  };
}
