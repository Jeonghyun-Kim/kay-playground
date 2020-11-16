import React from 'react';
import { useTheme } from 'next-themes';
import { IconButton } from '@components/ui';
import { Moon, Sun } from '@components/icons';

interface Props {
  className?: string;
}
const ThemeSwitcher: React.FC<Props> = ({ className, ...props }) => {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme(localStorage.getItem('@theme') ?? 'light');
  }, [setTheme]);

  const toggleTheme = React.useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('@theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('@theme', 'light');
    }
  }, [theme, setTheme]);

  const Component = React.useMemo(() => (theme === 'light' ? Sun : Moon), [
    theme,
  ]);

  return (
    <IconButton className={className} onClick={() => toggleTheme()} {...props}>
      {theme && <Component />}
    </IconButton>
  );
};

export default ThemeSwitcher;
