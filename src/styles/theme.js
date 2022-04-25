 const colors = {
    black: "#191919",
    black2: "#232323",
    gray: "#3f3f3f",
    gray2: "#696969",
    gray3: "#898989",
    gray4: "#cecece",
    white3: "#e5e5e5",
    white2: "#ECF0F1",
    white: "#ffffff",
  };
  
  const fonts = {
    weight: {
      extraLight: 200,
      light: 300,
      medium: 400,
      bold: 500,
      bolder: 600,
      boldest: 700,
    },
    primary: '"Outfit", Roboto, sans-serif',
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