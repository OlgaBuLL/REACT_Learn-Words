export default class GET {
  static async getWordsCollection() {
    try {
      const r = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const data = await r.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
