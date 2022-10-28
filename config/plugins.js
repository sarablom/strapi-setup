module.exports = ({ env }) => ({
  // upload: {
  //   config: {
  //     provider: "cloudinary",
  //     prodivderOptions: {
  //       cloud_name: env("CLOUDINARY_NAME"),
  //       api_key: env("CLOUDINARY_KEY"),
  //       api_secret: env("CLOUDINARY_SECRET"),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       delete: {},
  //     },
  //   },
  // },
  "gatsy-preview": {
    enable: true,
    resolve: "./src/plugins/gatsby-preview"
  }
})