import React from "react";



const EmotionThemeProvider = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default EmotionThemeProvider;