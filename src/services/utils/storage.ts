export function GetLocalStr<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(
      `Failed to parse localStorage item with key "${key}":`,
      error
    );
    return null;
  }
}

export function SetLocalStr<T>(key: string, value: T): void {
  try {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  } catch (error) {
    console.error(
      `Failed to stringify localStorage item with key "${key}":`,
      error
    );
  }
}

export function removeLocalStorageItem(key: string): void {
  localStorage.removeItem(key);
}
