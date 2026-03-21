import { describe, it, expect } from 'vitest';
import { questionsDB, CATEGORIES } from '../data/questions';

describe('Basic structure', () => {
  it('has exactly 150 questions', () => {
    expect(questionsDB).toHaveLength(150);
  });

  it('has exactly 5 categories', () => {
    expect(CATEGORIES).toHaveLength(5);
  });
});

describe('Unique IDs', () => {
  it('has no duplicate question IDs', () => {
    const ids = questionsDB.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(questionsDB.length);
  });
});

describe('Sequential IDs', () => {
  it('starts at 1 and ends at 150', () => {
    const ids = questionsDB.map(q => q.id).sort((a, b) => a - b);
    expect(ids[0]).toBe(1);
    expect(ids[ids.length - 1]).toBe(150);
  });

  it('has every ID from 1 to 150', () => {
    const idSet = new Set(questionsDB.map(q => q.id));
    for (let i = 1; i <= 150; i++) {
      expect(idSet.has(i), `Missing question ID ${i}`).toBe(true);
    }
  });
});

describe('Question content', () => {
  const arOptionKeys = ['أ', 'ب', 'ج', 'د'];
  const enOptionKeys = ['A', 'B', 'C', 'D'];

  it.each(questionsDB.map(q => [q.id, q]))('Q%i has valid Arabic content', (_id, q) => {
    expect(q.ar.q.length).toBeGreaterThan(0);
    expect(arOptionKeys).toContain(q.ar.ans);
    for (const key of arOptionKeys) {
      expect(q.ar.options).toHaveProperty(key);
    }
    expect(q.ar.exp.length).toBeGreaterThan(0);
  });

  it.each(questionsDB.map(q => [q.id, q]))('Q%i has valid English content', (_id, q) => {
    expect(q.en.q.length).toBeGreaterThan(0);
    expect(enOptionKeys).toContain(q.en.ans);
    for (const key of enOptionKeys) {
      expect(q.en.options).toHaveProperty(key);
    }
    expect(q.en.exp.length).toBeGreaterThan(0);
  });
});

describe('Answer position consistency', () => {
  const arToEn: Record<string, string> = { 'أ': 'A', 'ب': 'B', 'ج': 'C', 'د': 'D' };

  it.each(questionsDB.map(q => [q.id, q]))('Q%i AR and EN answers match position', (_id, q) => {
    const expectedEn = arToEn[q.ar.ans];
    expect(q.en.ans).toBe(expectedEn);
  });
});

describe('Category coverage', () => {
  it('covers all 150 questions with no gaps', () => {
    const coveredIds = new Set<number>();
    for (const cat of CATEGORIES) {
      expect(cat.startId).toBeLessThanOrEqual(cat.endId);
      expect(cat.ar.length).toBeGreaterThan(0);
      expect(cat.en.length).toBeGreaterThan(0);
      for (let id = cat.startId; id <= cat.endId; id++) {
        coveredIds.add(id);
      }
    }
    for (let i = 1; i <= 150; i++) {
      expect(coveredIds.has(i), `Question ID ${i} not covered`).toBe(true);
    }
  });
});

describe('No overlapping categories', () => {
  it('has non-overlapping category ranges', () => {
    for (let i = 0; i < CATEGORIES.length; i++) {
      for (let j = i + 1; j < CATEGORIES.length; j++) {
        const a = CATEGORIES[i];
        const b = CATEGORIES[j];
        const overlaps = a.startId <= b.endId && b.startId <= a.endId;
        expect(overlaps, `Categories '${a.id}' and '${b.id}' overlap`).toBe(false);
      }
    }
  });
});
