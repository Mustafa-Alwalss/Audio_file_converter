// THIS FUNCTION RESETS EVERY STATE TO THE DEFAULT VALUE
export default function resetStatesHandler(
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>,
  setUserChoose: React.Dispatch<React.SetStateAction<string | undefined>>,
  setErrorCode: React.Dispatch<React.SetStateAction<number>>
): void {
  setFile(undefined);
  setUserChoose(undefined);
  setErrorCode(0);
}
