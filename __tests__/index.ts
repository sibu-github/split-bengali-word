import { splitWord } from '../src';

describe('split-bengali-word', () => {
  it('handles undefined input', () => {
    const input = undefined;
    const expected = [undefined];
    // @ts-ignore
    expect(splitWord(input)).toStrictEqual(expected);
  });
  it('handles null input', () => {
    const input = null;
    const expected = [null];
    // @ts-ignore
    expect(splitWord(input)).toStrictEqual(expected);
  });
  it('handles number input', () => {
    const input = 5134;
    const expected = [5134];
    // @ts-ignore
    expect(splitWord(input)).toStrictEqual(expected);
  });
  it('handles empty string', () => {
    const input = '';
    const expected = [''];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('handles space', () => {
    const input = ' ';
    const expected = [' '];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters', () => {
    const input = 'মনোমোহিনী';
    const expected = ['ম', 'নো', 'মো', 'হি', 'নী'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with juktakkhor', () => {
    const input = 'অনন্তসর্পশ্রেনিপরিবেস্থিত';
    const expected = ['অ', 'ন', 'ন্ত', 'স', 'র্প', 'শ্রে', 'নি', 'প', 'রি', 'বে', 'স্থি', 'ত'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with multiple juktakkhor', () => {
    const input = 'অবিচ্ছেদ্য';
    const expected = ['অ', 'বি', 'চ্ছে', 'দ্য'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters long word', () => {
    const input =
      'লশুনপলাণ্ডগুঞ্জনকুম্ভীশ্রাপথন্নসুতকান্নাভোজ্যান্যমধুমাংসমূত্ররেতোহমেধ্যাভক্ষভক্ষণেগায়ত্র‍্যাষ্টসহ';
    const expected = [
      'ল',
      'শু',
      'ন',
      'প',
      'লা',
      'ণ্ড',
      'গু',
      'ঞ্জ',
      'ন',
      'কু',
      'ম্ভী',
      'শ্রা',
      'প',
      'থ',
      'ন্ন',
      'সু',
      'ত',
      'কা',
      'ন্না',
      'ভো',
      'জ্যা',
      'ন্য',
      'ম',
      'ধু',
      'মা',
      'ং',
      'স',
      'মূ',
      'ত্র',
      'রে',
      'তো',
      'হ',
      'মে',
      'ধ্যা',
      'ভ',
      'ক্ষ',
      'ভ',
      'ক্ষ',
      'ণে',
      'গা',
      'য়',
      'ত্র‍্যা',
      'ষ্ট',
      'স',
      'হ',
    ];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with spaces at beginning', () => {
    const input = ' মনোমোহিনী';
    const expected = [' ', 'ম', 'নো', 'মো', 'হি', 'নী'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with multiple spaces at beginning', () => {
    const input = '  মনোমোহিনী';
    const expected = ['  ', 'ম', 'নো', 'মো', 'হি', 'নী'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with space at middle', () => {
    const input = 'মনো  মোহিনী';
    const expected = ['ম', 'নো', '  ', 'মো', 'হি', 'নী'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with space at end', () => {
    const input = 'মনোমোহিনী  ';
    const expected = ['ম', 'নো', 'মো', 'হি', 'নী', '  '];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with tab space at end', () => {
    const input = 'মনোমোহিনী  \t';
    const expected = ['ম', 'নো', 'মো', 'হি', 'নী', '  \t'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with newline space at end', () => {
    const input = 'মনোমোহিনী  \n';
    const expected = ['ম', 'নো', 'মো', 'হি', 'নী', '  \n'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with newline space at middle', () => {
    const input = 'মনো\nমোহিনী';
    const expected = ['ম', 'নো', '\n', 'মো', 'হি', 'নী'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits numbers', () => {
    const input = '১২৩৪৫৬৭৮৯০';
    const expected = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '০'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters with bengali numbers', () => {
    const input = 'ব্লক১';
    const expected = ['ব্ল', 'ক', '১'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('returns same string for english word', () => {
    const input = 'splitter';
    const expected = ['splitter'];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('returns same string for english word with space', () => {
    const input = 'splitter ';
    const expected = ['splitter '];
    expect(splitWord(input)).toStrictEqual(expected);
  });

  it('splits words by letters for mix word', () => {
    const input = 'अतिथिদেব';
    const expected = ['अतिथि', 'দে', 'ব'];
    expect(splitWord(input)).toStrictEqual(expected);
  });
});
