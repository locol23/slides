const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')

;(async () => {
  const files = await imagemin(['assets/*.{jpg,png}'], {
    destination: 'assets',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  })

  console.log(files)
})()
