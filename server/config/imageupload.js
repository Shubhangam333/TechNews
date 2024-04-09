import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import { v2 as cloudinary } from "cloudinary";

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "technews_avatar",
//     allowed_formats: ["jpg", "png", "jpeg"],
//   },
// });

// const Poststorage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "technews_posts",
//     allowed_formats: ["jpg", "png", "jpeg"],
//   },
// });

// export const postupload = multer({ storage: Poststorage });

// export const upload = multer({ storage: storage });
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    return cb({ message: "Unsupported file format" }, false);
  }
  cb(null, true);
};

export const upload = multer({ storage: storage, fileFilter: imageFilter });
