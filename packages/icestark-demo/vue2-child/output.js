{
  mode: 'development',
  context: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child',
  output: {
    hashFunction: 'xxhash64',
    path: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/dist',
    filename: 'js/[name].js',
    publicPath: 'http://localhost:8091/',
    chunkFilename: 'js/[name].js',
    library: '@icestark-demo/vue2-child',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      '@': '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/node_modules',
      '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+@vue+cli-service@5.0.8_8d49a9b7dd5706cbcff70ffe62d02182/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+@vue+cli-plugin-typescript@5.0.8_bbff6db33cc5ade069b291a9fbb8ef3b/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+@vue+cli-plugin-babel@5.0.8_4e22aa047062d8323cdc8ef58085e0a3/node_modules/@vue/cli-plugin-babel/node_modules',
      '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+@vue+cli-service@5.0.8_8d49a9b7dd5706cbcff70ffe62d02182/node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat',
      'node_modules',
      '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/node_modules',
      '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+@vue+cli-service@5.0.8_8d49a9b7dd5706cbcff70ffe62d02182/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.10.0_acb0b581772484ee6821a64503117fbc/node_modules/vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              }
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+sass-loader@12.6.0_webpack@5.74.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+less-loader@11.0.0_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      'ant-prefix': 'av2'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+less-loader@11.0.0_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      'ant-prefix': 'av2'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+less-loader@11.0.0_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      'ant-prefix': 'av2'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+less-loader@11.0.0_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      'ant-prefix': 'av2'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+postcss-loader@6.2.1_postcss@8.4.17+webpack@5.74.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b1475583497452e4eb6a502a776a8f19/node_modules/babel-loader/lib/index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/node_modules/.cache/babel-loader',
              cacheIdentifier: 'f1ccf7a4'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b1475583497452e4eb6a502a776a8f19/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.4.1_typescript@4.5.5+webpack@5.74.0/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_b1475583497452e4eb6a502a776a8f19/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+ts-loader@9.4.1_typescript@4.5.5+webpack@5.74.0/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    realContentHash: false,
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          extractComments: false
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"http://localhost:8091/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: '@icestark-demo/vue2-child',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/public/index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      {
        patterns: [
          {
            from: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/public',
            to: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/dist',
            toType: 'dir',
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/public/index.html'
              ]
            },
            info: {
              minimized: true
            }
          }
        ]
      }
    ),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin(
      {
        extensions: [
          '.js',
          '.jsx',
          '.vue',
          '.ts',
          '.tsx'
        ],
        cwd: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child',
        cache: true,
        cacheLocation: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child/node_modules/.cache/eslint/beda53ea.json',
        context: '/Users/maxlz/webStormProject/micro-app-demos/packages/icestark-demo/vue2-child',
        failOnWarning: false,
        failOnError: true,
        eslintPath: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+eslint@7.32.0/node_modules/eslint',
        formatter: 'stylish'
      }
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '/Users/maxlz/webStormProject/micro-app-demos/node_modules/.pnpm/registry.npmmirror.com+vue@2.7.10/node_modules/vue/compiler-sfc/index.js'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: false
          }
        }
      }
    )
  ],
  entry: {
    app: [
      './src/main.ts'
    ],
    communicationTest: [
      './src/modules/communicationTest.ts'
    ]
  }
}
