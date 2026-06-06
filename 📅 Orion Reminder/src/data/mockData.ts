export const quickGoals = [
  { id: 'g1', label: 'Tagesziel', value: '3/5 Aufgaben' },
  { id: 'g2', label: 'Woche', value: '12 Erinnerungen' },
  { id: 'g3', label: 'Fokuszeit', value: '2h 30m' },
];

export const categories = [
  { id: 'c1', name: 'Arbeitsprojekt', color: '#6bb7ff' },
  { id: 'c2', name: 'Privat', color: '#ff8eb3' },
  { id: 'c3', name: 'Gesundheit', color: '#8ce6b9' },
];

export const tasks = [
  { id: 't1', title: 'Design Review abschließen', category: 'Arbeitsprojekt', priority: 'Hoch', completed: false },
  { id: 't2', title: 'Meeting-Agenda vorbereiten', category: 'Arbeitsprojekt', priority: 'Mittel', completed: true },
  { id: 't3', title: 'Einkaufsliste aktualisieren', category: 'Privat', priority: 'Niedrig', completed: false },
  { id: 't4', title: 'Morgenlauf planen', category: 'Gesundheit', priority: 'Mittel', completed: false },
];

export const reminders = [
  { id: 'r1', title: 'Zahnarzttermin um 10:30', time: '10:30', category: 'Privat' },
  { id: 'r2', title: 'Team-Standup Erinnerung', time: '09:00', category: 'Arbeitsprojekt' },
  { id: 'r3', title: 'Wasser trinken', time: '15:00', category: 'Gesundheit' },
];

export const stats = [
  { id: 's1', label: 'Aufgaben abgeschlossen', value: 72 },
  { id: 's2', label: 'Ziele erfüllt', value: 65 },
  { id: 's3', label: 'Fokuszeit', value: 84 },
];

export const calendarEvents = [
  { id: 'e1', label: 'Team Sync', time: '09:00', color: '#6bb7ff' },
  { id: 'e2', label: 'Projektplan prüfen', time: '11:30', color: '#ff8eb3' },
  { id: 'e3', label: 'Abendroutine', time: '18:00', color: '#8ce6b9' },
];
