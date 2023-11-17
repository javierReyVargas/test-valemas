const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'LookAndFeel',

  exposes: {
    './LookAndFeelModule': './projects/look-and-feel/src/app/modules/look-and-feel/look-and-feel.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
