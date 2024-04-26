import React from "react";
import supportedFormatsChecker from "../utils/supportedFormatsChecker";
import sizeLimitChecker from "../utils/sizeLimitChecker";
import errorTypeHandler from "../utils/errorTypes";
import fileSignaturesChekcer from "../utils/fileSignatureChecker";

export default async function handleFileChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>,
  setErrorCode: React.Dispatch<React.SetStateAction<number>>
) {
  const THE_FILE: File = event.target.files?.[0]!;

  const FILE_SIGNATURE: boolean = await fileSignaturesChekcer(
    THE_FILE,
    THE_FILE.name.slice(THE_FILE.name.lastIndexOf("."))
  );

  const FORMAT: boolean = supportedFormatsChecker(THE_FILE);

  const SIZE: boolean = sizeLimitChecker(THE_FILE);

  // CHECK IF EVERYTHING IS OKAY.
  if (
    THE_FILE !== undefined &&
    FORMAT === true &&
    FILE_SIGNATURE === true &&
    SIZE === true
  ) {
    setFile(THE_FILE);
  }
  // SET THE ERROR CODE IF SOMETHING IS WRONG.
  else {
    setErrorCode(errorTypeHandler(FORMAT, FILE_SIGNATURE, SIZE));
  }
}
