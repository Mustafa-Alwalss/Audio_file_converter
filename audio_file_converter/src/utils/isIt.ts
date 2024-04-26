export function isItMP3(buffer: ArrayBuffer): boolean {
  const UINT_8 = new Uint8Array(buffer);
  // MP3 FILES HAVE DIFFERENT FILE SIGNATURES.
  const ALL_THE_FILE_SIGNATURES_OF_MP3 = [
    [0xff, 0xfb],
    [0xff, 0xf3],
    [0xff, 0xf2],
    [0x49, 0x44, 0x33],
  ];

  // THIS WILL RETURN 'TRUE' IF ONE OF THE SIGNATURES MATCHES THE FILE'S SIGNATURE, OTHERWISE IT WILL RETURN 'FALSE'.
  return ALL_THE_FILE_SIGNATURES_OF_MP3.some((SIGNATURE) =>
    SIGNATURE.every((value, index) => value === UINT_8[index])
  );
}
export function isItOGG(buffer: ArrayBuffer): boolean {
  const UINT_8 = new Uint8Array(buffer);

  const FILE_SIGNATURE = [0x4f, 0x67, 0x67, 0x53];

  // THIS WILL RETURN 'TRUE' IF THE SIGNATURE MATCHES THE FILE'S SIGNATURE, OTHERWISE IT WILL RETURN 'FALSE'.
  return FILE_SIGNATURE.every((value, index) => value === UINT_8[index]);
}

export function isItAAC(buffer: ArrayBuffer): boolean {
  const UINT_8 = new Uint8Array(buffer);

  const ALL_THE_FILE_SIGNATURES_OF_AAC = [
    [0xff, 0xf1],
    [0xff, 0xf9],
  ];

  return ALL_THE_FILE_SIGNATURES_OF_AAC.some((SIGNATURE) =>
    SIGNATURE.every((value, index) => value === UINT_8[index])
  );
}

export function isItWAV(buffer: ArrayBuffer): boolean {
  const UINT_8 = new Uint8Array(buffer);

  // THE FOUR EMPTY INDEXES ARE DIFFERENT FROM FILE TO FILE BUT THE REST ARE THE SAME.
  const FILE_SIGNATURE = [
    0x52,
    0x49,
    0x46,
    0x46,
    ,
    ,
    ,
    ,
    0x57,
    0x41,
    0x56,
    0x45,
  ];
  // THIS WILL RETURN 'TRUE' IF THE SIGNATURE MATCHES THE FILE'S SIGNATURE, OTHERWISE IT WILL RETURN 'FALSE'.
  return FILE_SIGNATURE.every((value, index) => value === UINT_8[index]);
}
