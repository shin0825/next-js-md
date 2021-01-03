export function getSortedSkillsData() {
  const allSkillsData = [
    { id: 0, image: 'nextjs.svg', title: 'Next.js',         date_from: '2020-07-01', date_to: '2020-07-01', context: 'チュートリアルを実施し、自身のポートフォリオサイトに利用。'},
    { id: 1, image: 'javascript.svg', title: 'javascript',  date_from: '2018-12-01', date_to: '2018-12-01', context: '実務経験あり。' },
    { id: 2, image: 'rails.svg', title: 'Ruby on Rails',    date_from: '2019-04-01', date_to: '2019-04-01', context: 'チュートリアルを実施したのち、オリジナルアプリを作成。' },
    { id: 3, image: 'django.svg', title: 'Django',          date_from: '2020-11-01', date_to: '2020-11-01', context: '実務経験あり。' },
    { id: 4, image: 'c-sharp.svg', title: 'C#.NET',         date_from: '2007-04-01', date_to: '2007-04-01', context: '実務経験あり。' },
    { id: 5, image: '', title: 'SQLServer',                 date_from: '2007-04-01', date_to: '2007-04-01', context: '実務経験あり。' },
    { id: 6, image: 'postgresql.svg', title: 'PostgreSQL',  date_from: '2019-04-01', date_to: '2019-04-01', context: '個人開発への利用と、実務経験あり。' },
  ]
  // 投稿を日付でソートする
  return allSkillsData.sort((a, b) => {
    if (a.date_to < b.date_to) {
      return 1
    } else {
      return -1
    }
  })
}
