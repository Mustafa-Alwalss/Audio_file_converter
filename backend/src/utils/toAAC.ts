import ffmpeg from "fluent-ffmpeg";
import path from "path";

export default async function toAAC(
  file: Express.Multer.File,
  FILE_PATH: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const PUBLIC_DIR = path.join(__dirname, "../../public");

    const F = ffmpeg(FILE_PATH);
    F.output(path.join(PUBLIC_DIR, "./output", `${file.filename}.aac`));
    F.audioCodec("aac");
    F.on("end", () => {
      console.log("This is from toAAC. It's done.");
      resolve(true);
    });
    F.on("error", (err) => {
      console.log(err);
      reject(false);
    });
    F.run();
  });
}
