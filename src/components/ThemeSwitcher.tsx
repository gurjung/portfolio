'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Theme } from '@/types/theme';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const options: Array<{ id: Theme; label: string; icon: string; title: string }> = [
    { id: 'swiss', label: 'Porcelain', icon: '⚪', title: 'Refined Porcelain Minimalist' },
    { id: 'paper', label: 'Paper', icon: '📜', title: 'Signature Warm Paper Editorial' },
    { id: 'carbon', label: 'Carbon', icon: '🌙', title: 'Dark Cyber Cockpit' },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className="inline-flex items-center p-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-card-subtle)] text-[11px] font-mono"
    >
      {options.map((opt) => {
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            role="radio"
            aria-checked={isActive}
            title={opt.title}
            onClick={() => setTheme(opt.id)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all duration-150 font-medium cursor-pointer ${
              isActive
                ? 'bg-[var(--bg-card)] text-[var(--text-main)] shadow-sm font-bold border border-[var(--border-color)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            <span className="text-[12px]">{opt.icon}</span>
            <span className="hidden sm:inline">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
