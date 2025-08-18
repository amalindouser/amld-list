const KEY = "dateGroups_v2";

// shape: [{ id: string, date: string, notes: [{id, text, completed}] }]

export function loadGroups() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveGroups(groups) {
  localStorage.setItem(KEY, JSON.stringify(groups));
}

export function addGroup(date) {
  const groups = loadGroups();
  if (groups.some(g => g.date === date)) {
    throw new Error("Tanggal sudah ada");
  }
  const id = String(Date.now());
  const next = [...groups, { id, date, notes: [] }];
  saveGroups(next);
  return id;
}

export function getGroupById(id) {
  return loadGroups().find(g => g.id === id);
}

export function updateGroup(updated) {
  const groups = loadGroups().map(g => (g.id === updated.id ? updated : g));
  saveGroups(groups);
}

export function deleteGroup(id) {
  const groups = loadGroups().filter(g => g.id !== id);
  saveGroups(groups);
}
