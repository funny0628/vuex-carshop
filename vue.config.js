{
    configureWebpack: (config) => {
        config.externals = {
          vue: 'Vue',
          'iview': 'iview'
        }
      }
}