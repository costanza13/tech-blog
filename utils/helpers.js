module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },

  format_time: date => {
    return `${new Date(date).getHours()}:${('' + new Date(date).getMinutes()).padStart(2, 0)}`;
  },

  format_plural: (word, amount) => {
    if (amount === 0 || amount > 1) {
      return `${word}s`;
    }
    return word;
  }
}