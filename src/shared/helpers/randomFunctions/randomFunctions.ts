export function getRandomEnumValue<T extends { [key: string]: string }>(enumObject: T): T[keyof T] {
    const enumValues = Object.values(enumObject) as string[]; // Explicitly cast to string[]
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex] as T[keyof T];
}