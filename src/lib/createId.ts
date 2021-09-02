let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
  id++;
  // 忘记 id 存进 localStorage 了
  window.localStorage.setItem('_idMax', id.toString());
  return id;
}

export default createId;
