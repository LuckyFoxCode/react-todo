import { Icon } from '@/ui';
import { cn } from '@/utils/libs';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

interface ThemeSwitcherProps {
  style: string;
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  style,
  className,
}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(style, className)}
    >
      <Icon
        name={theme === 'light' ? CiLight : CiDark}
        className='fill-white'
      />
    </button>
  );
};
