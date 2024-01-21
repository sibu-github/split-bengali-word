const BENGALI_CHARS_LOWER = 2432;
const BENGALI_CHARS_UPPER = 2559;
const MAIN_CHARS_LOWER = 2437;
const MAIN_CHARS_UPPER = 2489;
const CHAR_HASANTA = 2509;
const CHAR_RHA = 2525;
const CHAR_RRA = 2524;
const CHAR_ANUSVARA = 2434;
const CHAR_KHANDATA = 2510;
const CHAR_YYA = 2527;
const CHAR_RRI = 2528;
const CHAR_ZERO = 2534;
const CHAR_NINE = 2543;
const CHAR_ZERO_WIDTH_JOINER = 8205;

function isNonBengaliChar(ch: number): boolean {
  return ch !== CHAR_ZERO_WIDTH_JOINER && (ch < BENGALI_CHARS_LOWER || ch > BENGALI_CHARS_UPPER);
}

function isMainChars(ch: number): boolean {
  return (
    ch == CHAR_ANUSVARA ||
    ch == CHAR_RHA ||
    ch == CHAR_RRA ||
    ch == CHAR_KHANDATA ||
    ch == CHAR_YYA ||
    ch == CHAR_RRI ||
    (ch >= CHAR_ZERO && ch <= CHAR_NINE) ||
    (ch >= MAIN_CHARS_LOWER && ch <= MAIN_CHARS_UPPER)
  );
}

function isHasanta(ch: number): boolean {
  return ch == CHAR_HASANTA;
}

function isBreakpoint(prev: number, next: number): boolean {
  return (
    (isNonBengaliChar(next) && !isNonBengaliChar(prev)) || (isMainChars(next) && !isHasanta(prev))
  );
}

export function splitWord(word: string): string[] {
  if (typeof word !== 'string' || word === '') {
    return [word];
  }

  let allChars = word.split('').map((s) => s.charCodeAt(0));
  const collect = [];
  let start = 0;
  while (start < allChars.length) {
    let end = start + 1;
    while (end < allChars.length) {
      const next = allChars[end];
      const prev = allChars[end - 1];
      if (isBreakpoint(prev, next)) {
        break;
      }
      end += 1;
    }
    const s = word.substring(start, end);
    collect.push(s);
    start = end;
  }
  return collect;
}
