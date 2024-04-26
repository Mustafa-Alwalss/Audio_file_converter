export default function errorTypes(
  FORMAT: boolean,
  FILE_SIGNATURE: boolean,
  SIZE: boolean
): number {
  // FIRST CHECK FOR FORMAT ERROR.
  if (FORMAT === false) {
    return 1;
  }
  // IF THE FILE EXTENSION IS AN AUDIO FILE, BUT IT'S NOT A REAL AUDIO FILE
  else if (FILE_SIGNATURE === false) {
    return 2;
  }
  // ONCE THE FORMAT IS CORRECT, CHECK THE SIZE.
  else if (SIZE === false) {
    return 3;
  }

  throw new Error("errorTypes.ts: Something is wrong");
}
