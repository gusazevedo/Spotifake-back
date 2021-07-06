import { diskStorage, Options } from "multer";
import { resolve } from "path";
import { randomBytes } from "crypto";

export const songsUpdate = {
  dest: resolve(__dirname, "..", "..", "uploads", "songs"),
  storage: diskStorage({
    destination: (request, file, callback) => {
      if (file.mimetype === "audio/mpeg") {
        callback(null, resolve(__dirname, "..", "..", "uploads", "songs"));
      }
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
        callback(null, resolve(__dirname, "..", "..", "uploads", "covers"));
      }
    },
    filename: (request, file, callback) => {
      randomBytes(8, (error, hash) => {
        if (error) {
          callback(error, file.filename);
        }
        const filename = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, filename);
      });
    },
  }),
  fileFilter: (request, file, callback) => {
    const formats = ["image/jpeg", "image/jpg", "image/png", "audio/mpeg"];

    if (formats.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Formato não suportado"));
    }
  },
} as Options;
