export function getSortedSkillsData() {
  const allSkillsData = [
    { id: 0, title: 'Next.js', date: '2020-07-01', context: 'チュートリアルを実施し、自身のポートフォリオサイトに利用。'},
    { id: 1, title: 'javascript', date: '2018-12-01', context: '実務経験あり。' },
    { id: 2, title: 'Ruby on Rails', date: '2019-04-01', context: 'チュートリアルを実施したのち、オリジナルアプリを作成。' },
    { id: 3, title: 'Django', date: '2020-11-01', context: '実務経験あり。' },
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
