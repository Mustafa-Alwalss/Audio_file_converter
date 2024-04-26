import { Response } from "express";
import toAAC from "../utils/toAAC";
import toMP3 from "../utils/toMP3";
import toOGG from "../utils/toOGG";
import toWAV from "../utils/toWAV";
import path from "path";

export default async function fileConversionHandler(
  file: Express.Multer.File,
  pathToFile: string,
  TO_WHAT: string,
  rs: Response
) {
  const PUBLIC_DIR = path.join(__dirname, "../../public");

  switch (TO_WHAT) {
    case "aac":
      await toAAC(file, pathToFile);
      rs.status(200).sendFile(
        path.join(PUBLIC_DIR, "./output", `${file.filename}.${TO_WHAT}`)
      );
      break;

    case "mp3":
      await toMP3(file, pathToFile);
      rs.status(200).sendFile(
        path.join(PUBLIC_DIR, "./output", `${file.filename}.${TO_WHAT}`)
      );
      break;

    case "ogg":
      await toOGG(file, pathToFile);
      rs.status(200).sendFile(
        path.join(PUBLIC_DIR, "./output", `${file.filename}.${TO_WHAT}`)
      );
      break;

    case "wav":
      await toWAV(file, pathToFile);
      rs.status(200).sendFile(
        path.join(PUBLIC_DIR, "./output", `${file.filename}.${TO_WHAT}`)
      );
      break;

    default:
      break;
  }
}
