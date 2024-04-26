import ffmpeg from "fluent-ffmpeg";
import path from "path";

export default async function toOGG(
  file: Express.Multer.File,
  FILE_PATH: string
) {
  return new Promise((resolve, reject) => {
    const PUBLIC_DIR = path.join(__dirname, "../../public");

    const F = ffmpeg(FILE_PATH);
    F.output(path.join(PUBLIC_DIR, "./output", `${file.filename}.ogg`));
    F.audioCodec("libvorbis");
    F.on("end", () => {
      console.log("This is from toOGG. It's done.");
      resolve(true);
    });
    F.on("error", (err) => {
      console.log(err);
      reject(false);
    });
    F.run();
  });
}
