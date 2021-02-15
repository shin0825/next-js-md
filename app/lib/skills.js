const allSkillsData = [
  { type: 'tech', image: 'nextjs.svg', title: 'Next.js',         date_from: '2020-07-01', date_to: '2020-09-30', context: 'チュートリアルを実施し、自身のポートフォリオサイトに利用。'},
  { type: 'tech', image: 'javascript.svg', title: 'javascript',  date_from: '2018-12-01', date_to: '2021-02-01', context: '実務経験あり。非同期処理やexport/importなど、一般的な記法や組み込み関数については調べながら利用することができる。' },
  { type: 'tech', image: 'rails.svg', title: 'Ruby on Rails',    date_from: '2019-04-01', date_to: '2020-03-31', context: 'チュートリアルを実施したのち、オリジナルアプリを数本作成。現在もちょっとした業務用アプリ開発に利用' },
  { type: 'tech', image: 'django.svg', title: 'Django',          date_from: '2020-11-01', date_to: '2020-11-01', context: '実務経験はあるが、一般的な環境と異なるため、持ち合わせている知識に偏りがある。' },
  { type: 'tech', image: 'c-sharp.svg', title: 'C#.NET',         date_from: '2007-04-01', date_to: '2019-06-30', context: '実務経験あり、抵抗なくコーディングを行うことができる。' },
  { type: 'tech', image: '', title: 'SQLServer',                 date_from: '2007-04-01', date_to: '2019-06-30', context: '実務経験あり。' },
  { type: 'tech', image: 'postgresql.svg', title: 'PostgreSQL',  date_from: '2019-04-01', date_to: '2021-02-01', context: '個人開発への利用と、実務経験あり。' },
  { type: 'engineering', image: '', title: '要件定義',  date_from: '2020-06-01', date_to: '2020-11-30', context: '生産管理システムのリプレース案件などで経験' },
  { type: 'engineering', image: '', title: '基本設計/DB設計',  date_from: '2015-04-01', date_to: '2020-11-30', context: '生産管理や在庫管理システムなどの小・中規模案件/リプレース案件などで経験' },
  { type: 'engineering', image: '', title: '詳細設計',  date_from: '2010-04-01', date_to: '2020-11-30', context: '製造業の企業様向けの複数案件にて経験、生産管理や在庫管理など' },
  { type: 'engineering', image: '', title: 'テスト',  date_from: '2008-04-01', date_to: '2020-11-30', context: '複数案件にて経験。自動テストについては独学で学び手法は理解しているが、環境の都合上知識を活用できていない' },
  { type: 'engineering', image: '', title: '保守',  date_from: '2017-04-01', date_to: '2021-02-01', context: '過去受け持った案件や引き継いだ案件の不具合対応や調査・データ管理を受け持っている' },
  { type: 'engineering', image: 'docker.svg', title: '仮想コンテナの利用',  date_from: '2019-04-01', date_to: '2021-02-01', context: '独学で利用していたが、案件の都合上によりデータベースを手軽に再構築させる必要が出てきたため、社内メンバにdocker-composeを利用するよう推進した' },
  { type: 'soft', image: 'visual-studio-code.svg', title: 'VSCodeの推進',  date_from: '2019-04-01', date_to: '2021-02-01', context: '独学で初めてVSCodeに触れて以降、社内に布教している。特にプログラミング歴の浅い人向けにケアレスミスを減らすためにグラフィカルな補助を活用するよう促している。他、Djangoのデバッグ、Draw.io、LiveShareによるペアプログラミングなど、活用の手段を広げるよう伝えている。' },
  { type: 'soft', image: 'git.svg', title: 'ソースコードレビュー環境の導入',  date_from: '2019-04-01', date_to: '2020-11-30', context: '当時担当していたプロジェクトでソースコードレビューの実施機会がまちまちであることを課題とし、gitbucketを社内サーバーに稼働させることでpull requestによるソースコードレビューを行えるようにした。gitを利用したことがないメンバも多かったため、手順書を作成し、利用を促した。' },
  { type: 'soft', image: '', title: '新人教育担当',  date_from: '2019-04-01', date_to: '2021-02-01', context: '技術について疎いメンバーもいるなかでなるべく全員に業務の全体像を知ってもらうべく、目標の提示と体験型学習のカリキュラムを実施した' },
  { type: 'soft', image: '', title: '技術的な相談の請負',  date_from: '2017-04-01', date_to: '2021-02-01', context: 'プロジェクトに関係なく、上司や部下から技術的な相談を受けている。時には時間をかけて一緒に調査を行うこともある。' },
]

export function getEngineeringSkillDatas() {
  return getSkillsData('engineering');
}

export function getTechSkillDatas() {
  return getSkillsData('tech');
}

export function getSoftSkillDatas() {
  return getSkillsData('soft');
}

function getSkillsData(select_type) {
  // タイプ抽出
  const filteredSkillsData = allSkillsData.filter(skill => skill.type==select_type)
  // 投稿を日付でソートする
  return filteredSkillsData.sort((a, b) => {
    if (a.date_from < b.date_from) {
      return 1
    } else {
      return -1
    }
  })
}
