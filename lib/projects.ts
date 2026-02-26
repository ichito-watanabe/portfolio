export type ProjectBlock =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export type Project = {
  title: string;
  slug:
    | "research"
    | "llm-competition"
    | "dance-event-beehive-vol1"
    | "dance-event-beehive-vol2"
    | "local-event-auspice-vol1"
    | "local-event-auspice-vol2"
    | "local-event-auspice-vol3";
  dateLabel?: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  pdfLinks?: {
    label: string;
    href: string;
  }[];
  mainImagePath?: string;
  contentBlocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    title: "ローカルイベント AUSPICE vol.1 開催",
    slug: "local-event-auspice-vol1",
    dateLabel: "2024-06-23",
    description: "異なる大学文化をつなぐことを目的に、友人とローカルイベントを立ち上げました。",
    techStack: ["Community", "Planning", "Operation"],
    mainImagePath: "/images/auspis_vol1_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "長岡には、工学部のみの長岡技術科学大学と、デザイン専門の公立大学である長岡造形大学という、性質の異なる大学があります。技術志向と表現志向という異なる文化に触れる中で、若者同士が横断的に交流できる場は少ないと感じました。そこで「ローカルの魅力に触れながら異なる価値観が交わる場をつくる」ことを目標に、友人とイベントを立ち上げました。",
      },
      {
        type: "text",
        text: "実現に向けては、地元学生の感性を伝えることに重きを置き、2つの大学で創作活動などを行っていた学生に声をかけました。出店では、コーヒーのacacia coffeeさん、パンのあららさん、洋服のgeometryさん、アートとグッズのmegrolliさん、cirrusさん、11人のDJの皆さんにご協力いただきました。集客にはSNSと知人のネットワーク、また地元の飲食店などを回ってビラを置いてもらうことなどを行いました。",
      },
      {
        type: "text",
        text: "しかし初回開催では、予想していたよりも集客が少なく，広報活動の甘さや日時設定など、今思えば人が来やすいイベントにはなっていなかったと感じています。",
      },
      {
        type: "text",
        text: "次回の開催を悩んでいた一方で、開催を終えた後に，参加者の中からDJ活動を始める人や出店に挑戦する人が現れ、規模以上の影響が生まれていることに気づきました。私は「人数」だけで成功を測るのではなく、「来場者の人生にどのくらい影響を与えることができたのか」という視点こそがこのイベントの良さだと思えるようになり、この気づきが、困難な状況でも前向きに継続できた要因だと思います。結果として、長岡でのイベントは3月の29日に第5回を迎え、他地域からも出店者を招く規模へと成長しました。",
      },
      {
        type: "image",
        src: "/images/auspis_vol1_2.jpg",
        alt: "AUSPICE vol.1 sub image",
      },
      {
        type: "text",
        text: "これはおいしそうなコーヒーを小窓から見る僕です。",
      },
    ],
  },
  {
    title: "ローカルイベント AUSPICE vol.2 開催",
    slug: "local-event-auspice-vol2",
    dateLabel: "2024-10-06",
    description: "AUSPICE vol.2 を開催し、前回の課題を改善して運営品質を向上させました。",
    techStack: ["Community", "Direction", "PR", "Operation"],
    mainImagePath: "/images/auspis_vol2_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "参加者導線と運営役割を再設計し、よりスムーズな当日進行を実現しました。",
      },
      {
        type: "image",
        src: "/images/auspis_vol2_2.jpg",
        alt: "AUSPICE vol.2 sub image",
      },
    ],
  },
  {
    title: "ダンスイベント BeeHive vol.1 開催",
    slug: "dance-event-beehive-vol1",
    dateLabel: "2025-01-11",
    description: "BeeHive vol.1 を企画・開催し、出演者調整から当日運営まで担当しました。",
    techStack: ["Planning", "Design", "Marketing", "Operation"],
    mainImagePath: "/images/beehive_vol1_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "会場調整、出演者連携、集客導線の設計を行い、当日の運営オペレーションを主導しました。",
      },
    ],
  },
  {
    title: "ローカルイベント AUSPICE vol.3 開催",
    slug: "local-event-auspice-vol3",
    dateLabel: "2025-05-11",
    description: "AUSPICE vol.3 を開催し、継続開催の仕組みを強化しました。",
    techStack: ["Community", "Facilitation", "Sponsorship", "Operation"],
    mainImagePath: "/images/auspis_vol3_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "企画運営フローを標準化し、次回開催へつながる体制づくりを進めました。",
      },
      {
        type: "image",
        src: "/images/auspis_vol3_2.jpg",
        alt: "AUSPICE vol.3 sub image",
      },
    ],
  },
  {
    title: "学会発表を行ってきました！",
    slug: "research",
    dateLabel: "2025-09-23",
    description: "IEEE電子情報通信学会信越支部にて、SNS上の多義語を考慮したトピック抽出手法を発表しました。",
    techStack: ["Python","SNS","自然言語","クラスタリング"],
    mainImagePath: "/images/research_1.jpg",
    pdfLinks: [
      { label: "投稿原稿 (PDF)", href: "/docs/research_presentation.pdf" },
      { label: "発表資料 (PDF)", href: "/docs/research_summary.pdf" },
    ],
    contentBlocks: [
      {
        type: "text",
        text: "IEEE電子情報通信学会信越支部にて研究発表を行ってきました。別々ではありますが、一緒に参加してくれた研究室の同期・先輩方ありがとうございました。写真左から2番目が僕です。",
      },
      {
        type: "text",
        text: "今回発表したテーマは、SNS上の多義語（同じ単語でも意味が変わる言葉）を考慮したトピック抽出手法の提案です。",
      },
      {
        type: "text",
        text: "SNSでは、例えば「落ちる」という単語ひとつを取っても、物理的な落下を意味する場合もあれば、試験に不合格になることを指す場合もあります。従来のトレンド分析では、こうした意味の違いを十分に考慮することが難しいという課題がありました。",
      },
      {
        type: "text",
        text: "そこで本研究では、まずGLIPCAを用いて時系列的に似た単語群（トレンドクラスタ）を抽出し、その後BERTによって文脈を考慮した単語埋め込みを生成、さらにDPGMMを用いたソフトクラスタリングを行うことで、単語が複数の意味を持つ可能性を確率的に扱う手法を提案しました。",
      },
      {
        type: "text",
        text: "その結果、従来手法と比較して意味的にまとまりのある話題抽出が可能であることを示すことができました。",
      },
      {
        type: "text",
        text: "今回が初めての学会発表だったため、正直とても緊張しました。自分の研究内容を限られた時間で分かりやすく伝える難しさを実感しました。",
      },
      {
        type: "text",
        text: "特に印象に残っているのは、「なぜその手法を選んだのか？」「他の方法ではだめなのか？」といった質問をいただいたことです。研究室の中では当たり前だと思っていた前提が、外に出ると必ずしも共有されていないことに気づきました。",
      },
      {
        type: "text",
        text: "今回の経験を通して、研究は考えることだけでなく、伝えることまで含めて研究であるということを強く学びました。",
      },
    ],
  },
  {
    title: "ダンスイベント BeeHive vol.2 開催",
    slug: "dance-event-beehive-vol2",
    dateLabel: "2026-01-09",
    description: "BeeHive vol.2 を開催し、vol.1 の改善点を反映して運営品質を向上させました。",
    techStack: ["Planning", "Direction", "Promotion", "Operation"],
    mainImagePath: "/images/beehive_vol2_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "前回の反省をもとに、告知導線・役割分担・当日進行を見直し、よりスムーズなイベント進行を実現しました。",
      },
    ],
  },
  {
    title: "LLMコンペティション 3位入賞‼",
    slug: "llm-competition",
    dateLabel: "2026-02-13",
    githubUrl: "https://github.com/ichito-watanabe/SSC2025.git",
    description:
      "SIGNATEの自然言語処理コンペにチームで参加し、最終3位に入賞しました。",
    techStack: ["Python", "LLM", "埋め込み検索", "テキスト類似度"],
    mainImagePath: "/images/LLM_1.png",
    contentBlocks: [
      {
        type: "text",
        text: "SIGNATEの自然言語処理コンペにチームで参加しました。テーマは、LLMが生成した架空のあらすじから、元ネタになっている既存作品2つを50作品の中から当てる課題で、最終順位は3位でした。",
      },
      {
        type: "text",
        text: "最初は50作品すべてをそのままLLMに渡して推定する方法でしたが、似た作品の区別が不安定で、トークン数も大きく推論がぶれました。ここで、精度の問題ではなく設計の問題だと判断しました。",
      },
      {
        type: "text",
        text: "改善として、埋め込み類似度とテキスト類似度を組み合わせ、候補を段階的に絞る仕組みに変更しました。単純に上位のみを残すのではなく、関連性が低いものを1件ずつ除外する方式にして、正解候補を落としにくくしました。",
      },
      {
        type: "text",
        text: "トレインデータで検証した結果、18件までは正解を落とさないことを確認し、汎化を考慮して最終的に20件に設定しました。これによりトークン数は半分以下になり、推論の安定性、APIコスト、処理時間を同時に改善できました。",
      },
      {
        type: "text",
        text: "一番の学びは、最初に精度だけを追ってしまった反省です。埋め込み上位だけで候補化すると正解自体が候補から消えるケースがあり、まずは再現率を確保して当たりを含める設計が重要だと実感しました。",
      },
    ],
  },
];

const dateToEpoch = (dateLabel?: string) => {
  if (!dateLabel) {
    return 0;
  }

  const timestamp = Date.parse(dateLabel);
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

export const projectsByDateDesc = [...projects].sort(
  (a, b) => dateToEpoch(b.dateLabel) - dateToEpoch(a.dateLabel),
);

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
