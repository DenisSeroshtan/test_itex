var smartgrid = require('smart-grid');

var settings = {
  filename: '_smartgrid',
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 12, /* number of grid columns */
  offset: '30px', /* gutter width px || % */
  container: {
    maxWidth: '1000px', /* max-width оn very large screen */
    fields: '30px' /* side fields */
  },
  breakPoints: {
    lg: {
      width: "900px",
      fields: "30px"
    },
    md: {
      width: "768px",
      fields: "30px"
    },
    sm: {
      width: "576px",
      fields: "20px"
    },
    xs: {
      width: "360px",
      fields: "15px"
    }
    
  },
  properties: [],
  oldSizeStyle: false
};

smartgrid('./source/style/_misc', settings);
