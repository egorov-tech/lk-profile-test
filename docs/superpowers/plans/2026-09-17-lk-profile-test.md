# LK Profile Test Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive Vue 3 account-profile screen that can be launched standalone and embedded into Laravel through Vite.

**Architecture:** The page composes small account-prefixed Vue components. Shared CSS tokens and layout rules live in `resources/css/account`; the entrypoint mounts only the profile page and reads optional Laravel bootstrap data.

**Tech Stack:** Vue 3, Vite, Vitest, Vue Test Utils, plain CSS.

**Spec:** `docs/superpowers/specs/2026-09-17-lk-profile-test-design.md`

## Global Constraints

- Vue components use `<script setup>` and Composition API.
- One reusable component per file; files remain under 300 lines.
- No inline CSS; reusable CSS uses `account-` namespaced classes.
- Desktop and mobile layouts are verified in production build.

---

### Task 1: Test harness and reusable controls

**Files:**
- Create: `package.json`, `vite.config.js`, `vitest.config.js`, `tests/account_controls.spec.js`
- Create: `resources/js/components/account/account_button.vue`, `resources/js/components/account/account_input.vue`

**Interfaces:**
- Produces `AccountButton` with `label`, `type`, `loading` props and `click` event.
- Produces `AccountInput` with `modelValue`, `label`, `id`, `type`, `hint` props and `update:modelValue` event.

- [ ] Write tests for click emission and two-way input binding, observe failure.
- [ ] Implement two small controls and observe passing tests.
- [ ] Commit the foundation.

### Task 2: Shell, profile page, and responsive CSS

**Files:**
- Create: `resources/js/components/account/account_sidebar.vue`, `account_header.vue`, `account_section-card.vue`, `account_toast.vue`
- Create: `resources/js/pages/account_profile_page.vue`, `resources/js/app.js`
- Create: `resources/css/account/account_tokens.css`, `account_layout.css`, `account_profile.css`
- Modify: `tests/account_controls.spec.js`

**Interfaces:**
- `AccountProfilePage` owns form state and saves locally.
- `AccountSidebar` emits `navigate` and `close`.

- [ ] Add a failing page test for successful save feedback.
- [ ] Implement the profile composition and responsive CSS.
- [ ] Verify tests and production build.

### Task 3: Laravel handoff and deploy preparation

**Files:**
- Create: `README.md`, `resources/views/account-profile.blade.php`
- Modify: `package.json`

- [ ] Document local launch, Laravel mounting, Git/Vercel deploy commands.
- [ ] Run final tests and production build.
- [ ] Commit and publish the isolated repository.
