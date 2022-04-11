
 const colors = {
    black: "#191919",
    black2: "#232323",
    gray: "#3f3f3f",
    gray2: "#898989",
    gray3: "#cecece",
    white2: "#e5e5e5",
    white: "#ffffff",
  };
  
  const fonts = {
    weight: {
      bold: 500,
      bolder: 600,
      boldest: 700,
      medium: 400,
      light: 300,
      extraLight: 200,
    },
    primary: '"Poppins", Roboto, sans-serif',
    secondary: '"Montserrat", Roboto, sans-serif'
  };
  
  const configs = {
    hover: 'filter: brightness(0.8)',
    mobilePadding: '10px 20px'
  }

  const theme = {
    fonts,
    configs,
    background: colors.black,
    ...colors
  };

   export default theme;