'use client';

import { useState, useEffect, useRef } from 'react';
import styles from "./styles.module.css"
import Link from 'next/link';

interface DropdownMenuProps {
  label: string;
  items: string[];
}

export default function Selector({ label, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <Link
  href="/music"
  className={styles.button}
  onClick={(e) => {
    e.preventDefault();
    setOpen(!open);
  }}
>
  {label}
</Link>

      {open && (
        <div className={styles.menu}>
          {items.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}