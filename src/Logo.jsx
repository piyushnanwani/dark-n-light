import React, { useContext } from 'react';
import { ThemeContext } from './App';

const DARK_FILL = '#fff';
const LIGHT_FILL = '#000';

export const Logo = () => {
    const theme = useContext(ThemeContext);
    const fill = theme === 'dark' ? DARK_FILL : LIGHT_FILL;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" stroke={fill} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>

    );
};
