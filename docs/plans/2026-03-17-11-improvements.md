# 11 Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor the Know Your Deen app to fix bugs, improve architecture, strengthen types, add proper testing, and polish accessibility/SEO.

**Architecture:** Extract the monolithic App.tsx into focused components and hooks. Replace manual localStorage with Zustand persist. Move all translations to a central file. Adopt Vitest for testing.

**Tech Stack:** React 19, TypeScript strict, Vite 6, Tailwind v4, Zustand 5 (with persist), Vitest, lucide-react

---

### Task 1: Install Vitest and migrate existing tests
### Task 2: Strengthen TypeScript types
### Task 3: Move animations from inline style to CSS + reduced motion
### Task 4: Centralise i18n translations
### Task 5: Create custom hooks (useWakeLock, useGameStore with Zustand persist)
### Task 6: Fix the turn-skip bug
### Task 7: Extract UI components
### Task 8: Performance improvements
### Task 9: SEO meta tags
### Task 10: Accessibility improvements
### Task 11: Minor quick wins (source links, error boundary)

See full task details in the implementation conversation.
