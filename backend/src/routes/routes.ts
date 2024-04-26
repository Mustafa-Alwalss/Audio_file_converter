import { Router, Response, Request } from "express";
import multer from "multer";
import path from "path";
import fileConversionHandler from "../handlers/fileConversionHandler";

const router: Router = Router();

const PUBLIC_DIR = path.join(__dirname, "../../public");

const STORAGE = multer.diskStorage({
  destination: (rq, file, callback) => {
    callback(null, path.join(PUBLIC_DIR, "./uploads"));
  },
  filename: (rq, file, callback) => {
    const NAME = crypto.randomUUID();
    callback(null, NAME);
  },
});

const M = multer({
  storage: STORAGE,
  limits: { fileSize: 10 * (1024 * 1024) },
});

router.get("/", (rq: Request, rs: Response) => {
  rs.send("this is the home page");
});

// AAC
router.post("/aac", M.single("FILE"), (rq: Request, rs: Response) => {
  const THE_FILE = rq.file;
  try {
    // TO CHECK IF 'THE_FILE' IS NOT 'undefined'
    if (THE_FILE === undefined) {
      throw new Error("There is no file.");
    }
    console.log(THE_FILE?.filename);
    fileConversionHandler(
      THE_FILE,
      path.join(PUBLIC_DIR, "./uploads", THE_FILE.filename),
      "aac",
      rs
    );
  } catch (err) {
    console.log(err);
  }
});

// MP3
router.post("/mp3", M.single("FILE"), (rq: Request, rs: Response) => {
  const THE_FILE = rq.file;
  try {
    // TO CHECK IF 'THE_FILE' IS NOT 'undefined'
    if (THE_FILE === undefined) {
      throw new Error("There is no file.");
    }
    console.log(THE_FILE?.filename);
    fileConversionHandler(
      THE_FILE,
      path.join(PUBLIC_DIR, "./uploads", THE_FILE.filename),
      "mp3",
      rs
    );
  } catch (err) {
    console.log(err);
  }
});

// OGG
router.post("/ogg", M.single("FILE"), (rq: Request, rs: Response) => {
  const THE_FILE = rq.file;
  try {
    // TO CHECK IF 'THE_FILE' IS NOT 'undefined'
    if (THE_FILE === undefined) {
      throw new Error("There is no file.");
    }
    console.log(THE_FILE?.filename);
    fileConversionHandler(
      THE_FILE,
      path.join(PUBLIC_DIR, "./uploads", THE_FILE.filename),
      "ogg",
      rs
    );
  } catch (err) {
    console.log(err);
  }
});

// WAV
router.post("/wav", M.single("FILE"), (rq: Request, rs: Response) => {
  const THE_FILE = rq.file;
  try {
    // TO CHECK IF 'THE_FILE' IS NOT 'undefined'
    if (THE_FILE === undefined) {
      throw new Error("There is no file.");
    }
    console.log(THE_FILE?.filename);
    fileConversionHandler(
      THE_FILE,
      path.join(PUBLIC_DIR, "./uploads", THE_FILE.filename),
      "wav",
      rs
    );
  } catch (err) {
    console.log(err);
  }
});

export default router;
