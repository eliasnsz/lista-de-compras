import { Item } from "@/types";

export default function processInputWithRegex(text: string) {
  
  const regex = /^([1-9]\d*(?:\.\d+)?)\s*(k?g)?\s+(?:de\s+)?(.+)/i;
  const match = regex.exec(text);

  if (!match) {
    return {
      quantity: null,
      unit: 'un',
      name: text.trim(),
      isChecked: false
    };
  }

  const quantity = parseFloat(match[1]);
  const unit = match[2]?.toLowerCase() || 'un';
  const name = match[3].trim();

  return {
    quantity,
    unit,
    name,
  } as Item;
} 