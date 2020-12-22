import React from 'react';

const SetPrefferedTheme = () => {
  const executeOnClient = `
(function() {
  if(typeof window !== 'undefined') {
    const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
    const storedTheme = window.localStorage.getItem('theme') === 'dark';
    if(storedTheme || isDarkModePreferred) {
      document.body.classList.add('theme-dark');
    }
  }
})()
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: executeOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<SetPrefferedTheme key="set-theme-script" />);
};
