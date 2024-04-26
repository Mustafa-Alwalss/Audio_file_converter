//  ARRAY OF THE SUPPORTED FORMATS
const FORMATS: string[] = [".aac", ".mp3", ".ogg", ".wav"];

export default function supportedFormatsChecker(FILE: File): boolean {
  //  SEE IF THE FILE EXTENSION EXISTS IN THE ARRAY ABOVE.
  if (FORMATS.indexOf(FILE.name.slice(FILE.name.lastIndexOf("."))) !== -1) {
    return true;
  } else {
    return false;
  }
}
