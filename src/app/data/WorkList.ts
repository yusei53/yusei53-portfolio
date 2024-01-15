export type Work = {
  imagePath: string; // imgからの相対パス
  imageHeight: number;
  cardWidth: number;
  title: string;
  description: string;
  tips: string[];
};

const WorkList: Work[] = [
  {
    imagePath: "portfolio.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "portfolioサイト",
    description:
      "このサイトです。\nDBをsupabaseに格納したい \n https://github.com/yusei53/yusei53-portfolio",
    tips: ["Next.js", "TypeScript"],
  },
  {
    imagePath: "asap.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "ASAP",
    description:
      "大学生向けにメール(授業欠席,バイト欠席,内定辞退)のテンプレート文を生成/送信画面まで遷移 \n https://github.com/yusei53/ASAP",
    tips: ["React"],
  },
  {
    imagePath: "zundamon.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "二次元への扉",
    description:
      "ChatGPTのAPIを使って、二次元キャラクターと会話ができるchatアプリ/ずんだもん使っています \n https://github.com/RozeSullatui/voicevox_hackthon",
    tips: ["React", "flask", "ChatGPT API"],
  },
  {
    imagePath: "typro.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "タイプロ",
    description:
      "タイピング練習＋プログラミングの知識を取得する駆け出しエンジニア向けアプリ(コミット期間は3日程/未完成) \n https://github.com/yusei53/typing_game",
    tips: ["React", "TypeScript"],
  },
  {
    imagePath: "liscript.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "Liscript",
    description:
      "音声ファイル文字起こし&翻訳&要約アプリ。ChatWork株式会社様から企業賞受賞/技育展出場 \n https://github.com/geekcamp2023-vol5-team32/liscript",
    tips: ["Next.js", "TypeScript", "ChatGPT", "Whisper"],
  },
  {
    imagePath: "veteranhome.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "ベテランすまい",
    description:
      "家を売りたいが、どの不動産に頼めばいいかわからないユーザーの課題に対してのプロダクト \n https://github.com/yusei53/Veteran-home",
    tips: ["Rails"],
  },
  {
    imagePath: "easeme.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "イーズミー",
    description:
      "同じ目的を持った人同士が出会える環境を提供するアプリ。sansan株式会社で準優勝 \n https://github.com/sansan-event-fusion/spark-2023-teamP",
    tips: ["Next.js", "TypeScript", "CICD", "AWS", "Docker"],
  },
  {
    imagePath: "otocampus.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "オトキャンパス",
    description:
      "長期インターン自社開発アプリ/企画の要素をもとにTips・ツールを紹介していくメディア系のサービス。企画から設計、開発まで。 \n https://github.com/oto-port/topic-tips",
    tips: ["php", "vanilla.js", "Wordpress"],
  },
  {
    imagePath: "extention.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "vscode拡張機能",
    description:
      "個人的にめちゃくちゃ面白い拡張機能です。コードを書いて、その書き方に応じてポケモンの画像が生成されます。リリース済 \n https://github.com/Najah7/Pokemon-Stats-Checker",
    tips: ["TypeScript", "AWS", "PokeAPI"],
  },
  {
    imagePath: "seikei.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "成蹊大学サークル紹介サイト",
    description:
      "未経験を二人を連れて開発しました。PMの立場を取って開発に携わりました。DBはsupabaseにする予定です \n https://github.com/Peach-Tech0927/seikei_org_list",
    tips: ["Next.js", "TypeScript", "MaterialUI"],
  },
  {
    imagePath: "htmlapp.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "PeachTech紹介サイト",
    description:
      "授業内でサイトを自由に作って発表する機会があったので、代表している団体の紹介サイトを開発しました \n https://github.com/yusei53/html-introduce-class",
    tips: ["html", "css", "vanilla.js"],
  },
];

export default WorkList;
