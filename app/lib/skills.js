const allSkillsData = [
  { type: 'tech', image: 'nextjs.svg', title: 'Next.js',         date_from: '2020-07-01', date_to: '2020-07-01', context: 'チュートリアルを実施し、自身のポートフォリオサイトに利用。'},
  { type: 'tech', image: 'javascript.svg', title: 'javascript',  date_from: '2018-12-01', date_to: '2018-12-01', context: '実務経験あり。' },
  { type: 'tech', image: 'rails.svg', title: 'Ruby on Rails',    date_from: '2019-04-01', date_to: '2019-04-01', context: 'チュートリアルを実施したのち、オリジナルアプリを作成。' },
  { type: 'tech', image: 'django.svg', title: 'Django',          date_from: '2020-11-01', date_to: '2020-11-01', context: '実務経験あり。' },
  { type: 'tech', image: 'c-sharp.svg', title: 'C#.NET',         date_from: '2007-04-01', date_to: '2007-04-01', context: '実務経験あり。' },
  { type: 'tech', image: '', title: 'SQLServer',                 date_from: '2007-04-01', date_to: '2007-04-01', context: '実務経験あり。' },
  { type: 'tech', image: 'postgresql.svg', title: 'PostgreSQL',  date_from: '2019-04-01', date_to: '2019-04-01', context: '個人開発への利用と、実務経験あり。' },
  { type: 'engineering', image: '', title: 'DB設計',  date_from: '2015-04-01', date_to: '2020-08-01', context: '小規模システムやリプレース案件などで経験' },
]

export function getEngineeringSkillDatas() {
  return getSkillsData('engineering');
}

export function getTechSkillDatas() {
  return getSkillsData('tech');
}

function getSkillsData(select_type) {
  // タイプ抽出
  const filteredSkillsData = allSkillsData.filter(skill => skill.type==select_type)
  // 投稿を日付でソートする
  return filteredSkillsData.sort((a, b) => {
    if (a.date_to < b.date_to) {
      return 1
    } else {
      return -1
    }
  })
}
