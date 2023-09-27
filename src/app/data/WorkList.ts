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
      "このサイトです。\n勉強がてらReact QueryとMock使って実装しています。 \n https://github.com/yusei53/yusei53-portfolio",
    tips: ["Next.js", "TypeScript"],
  },
  {
    imagePath: "asap.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "ASAP",
    description:
      "大学生向けにメール(授業欠席、バイト欠席、内定辞退)のテンプレート文を生成し、送信画面まで遷移してくれるアプリ \n https://github.com/yusei53/ASAP",
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
      "タイピングしながらプログラミングの知識を取得する駆け出しエンジニア向けアプリ(コミット期間は一週間ほどで、未完成) \n https://github.com/yusei53/typing_game",
    tips: ["React", "TypeScript"],
  },
  {
    imagePath: "liscript.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "Liscript",
    description:
      "音声ファイル文字起こし&翻訳&要約アプリ。ChatWork株式会社様から企業賞受賞/技育展出場 \n https://github.com/geekcamp2023-vol5-team32/liscript",
    tips: ["Next.js", "TypeScript", "flask", "ChatGPT", "Whisper"],
  },
  {
    imagePath: "veteranhome.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "ベテランすまい",
    description:
      "speeeサマーインターン/家を売りたいが、どの不動産に頼めばいいかわからないユーザーの課題に対してのプロダクト \n https://github.com/yusei53/Veteran-home",
    tips: ["Rails"],
  },
  {
    imagePath: "easeme.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "イーズミー",
    description:
      "Sansanサマーインターン/同じ目的を持った人同士が出会える環境を提供するアプリ \n https://github.com/sansan-event-fusion/spark-2023-teamP",
    tips: ["Next.js", "TypeScript", "Rails", "AWS", "Docker", "Github Actions"],
  },
];

export default WorkList;
