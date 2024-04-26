import { isItAAC, isItMP3, isItWAV, isItOGG } from "./isIt";

export default async function fileSignatureChekcer(
  FILE: File,
  FILE_EXTENSIONS: string
): Promise<boolean> {
  const data = await FileBuffer(FILE);
  switch (FILE_EXTENSIONS) {
    case ".aac":
      return isItAAC(data);
    case ".mp3":
      return isItMP3(data);
    case ".wav":
      return isItWAV(data);
    case ".ogg":
      return isItOGG(data);

    default:
      return false;
  }
}

function FileBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file.slice(0, 100));
    fileReader.onload = () => {
      if (!(fileReader.result instanceof ArrayBuffer)) {
        throw new Error("The result is not an 'ArrayBuffer'");
      }
      resolve(fileReader.result);
    };
    fileReader.onerror = reject;
  });
}
