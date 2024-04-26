export default function sizeLimitChecker(file: File): boolean {
  // CHECK IF THE FILE SIZE IS 10MB OR LESS.
  if (file.size <= 10 * (1024 * 1024)) {
    return true;
  }
  return false;
}
