export function getSortedSkillsData() {
  const allSkillsData = [
    { id: 0, title: 'hoge1', date: '2020-01-01' },
    { id: 1, title: 'hoge2', date: '2020-02-01' },
    { id: 2, title: 'hoge3', date: '2020-03-01' },
    { id: 3, title: 'hoge4', date: '2020-04-01' },
  ]
  // 投稿を日付でソートする
  return allSkillsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
