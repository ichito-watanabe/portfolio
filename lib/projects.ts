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
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      caption?: string;
    }
  | {
      type: "youtube";
      embedUrl: string;
      watchUrl?: string;
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
        text: "次回の開催を悩んでいた一方で、開催を終えた後に，参加者の中からDJ活動を始める人や出店に挑戦する人が現れ、規模以上の影響が生まれていることに気づきました。私は「人数」だけで成功を測るのではなく、「来場者の人生にどのくらい影響を与えることができたのか」という視点こそがこのイベントの良さだと思えるようになり、この気づきが、困難な状況でも前向きに継続できた理由になりました！",
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
    description: "第1回の反省を踏まえ、体制と広報を再設計してAUSPICE vol.2を開催しました。",
    techStack: ["Community", "Direction", "PR", "Operation"],
    mainImagePath: "/images/auspis_vol2_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "第1回では、想定よりも集客が伸びず、広報設計や日時設定の甘さという課題が明確になりました。一方で、参加者の中から新たにDJ活動や出店に挑戦する人が生まれ、「規模ではなく影響こそが価値である」という気づきを得ました。",
      },
      {
        type: "text",
        text: "第2回では、この反省と学びを踏まえ、運営体制と広報戦略を大きく見直しました。",
      },
      {
        type: "text",
        text: "まず、組織として機能するイベントにするため、私はあえて前面に立たず、友人を主催として立て、自分はサポート役に回る体制へ変更しました。第1回では実質的にすべてを自分で抱えていたため、継続性に不安がありました。そこで役割を明確化し、私は受付対応、広報設計、出店（NUTSMASON）、全体調整を担う形に再構築しました。",
      },
      {
        type: "text",
        text: "広報面では、単なる開催告知ではなく、出店者一人ひとりのストーリーを発信する形へ変更しました。今回の出店者は、福岡から参戦してくださったコーヒーのBiNさん、前回に引き続きパンのあららさん、クラフトビール出店として主催が運営するAliさん、アートとグッズで初参加のYuto Sakaiさん、前回に続くCirrusさん、そして9名のDJの皆さんと、多様なカルチャーが交わる構成となりました。",
      },
      {
        type: "text",
        text: "その結果、運営は前回よりも安定し、来場者・出店者双方にとってより一体感のある空間をつくることができました。",
      },
      {
        type: "text",
        text: "第2回を通して学んだのは、「自分が中心に立つこと」よりも「チームとして機能する構造を設計すること」の重要性です。イベントは個人の情熱だけでは続かず、役割分担と全体最適の視点があってこそ継続できると実感しました。",
      },
      {
        type: "text",
        text: "また、第2回では私自身もNUTSMASONとしてハニーナッツとスパイシーナッツを販売しました。クラフトビールのおつまみとして展開したのですが、会場が車での来場が中心の場所だったこともあり、アルコールと一緒に楽しむ導線がうまく作れず、正直なところ売上は思うように伸びませんでした。",
      },
      {
        type: "text",
        text: "それでも、イベント中に「これめっちゃおいしいですね！」と声をかけてもらえた瞬間は本当にうれしくて、自分の出店がほんの少しでもその日の楽しい記憶の一部になれていたらいいな、と心から思えました。",
      },
      {
        type: "text",
        text: "うまくいかなかったことも含めて、イベント全体を設計する側の視点と、一出店者としてその場の一部を担う視点の両方を経験できたことは、自分にとって大きな学びでした。",
      },
      {
        type: "image",
        src: "/images/auspis_vol2_2.jpg",
        alt: "AUSPICE vol.2 sub image",
      },
      {
        type: "text",
        text: "これは設営直後の風景。人きてくれるかな、うまくいくかな、って不安と期待でいっぱいでした！",
      },
    ],
  },
  {
    title: "ダンスイベント THE BeeHive vol.1 開催",
    slug: "dance-event-beehive-vol1",
    dateLabel: "2025-01-11",
    description: "地元・諏訪の小中学生向けに、自由に踊れるダンスイベントを開催しました。",
    techStack: ["Planning", "Design", "Marketing", "Operation"],
    mainImagePath: "/images/beehive_vol1_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "長岡でのローカルイベントを経験して、「自分の生まれ育った町にも何か還元したい」と思うようになりました。そこで、地元・長野県諏訪のダンススクールに通う小中学生を対象に、ダンスイベントを開催しました。",
      },
      {
        type: "text",
        text: "コンセプトはシンプルで、「振り付けもジャンルも関係なく、誰でも自由に踊れる空間」。",
      },
      {
        type: "text",
        text: "自分が小さいころは、どこか周りの目を気にしてしまって、本当にやりたい踊りや即興のダンスができなかった経験があります。だからこそ、クラブハウスのような空間で、誰もが自由に表現できる場をつくりたいと思いました。",
      },
      {
        type: "text",
        text: "正直、「みんな本当に自由に踊ってくれるかな…？」という不安もありました。でも実際に始まってみると、想像以上にそれぞれが自分らしく踊っていて、コンセプトに沿った、本当にいい空間になったと感じています。",
      },
      {
        type: "text",
        text: "イベント後には、SNSに自分のダンス動画を日々アップする子が出てきたり、振り付けなしで即興で踊るフリーダンスを積極的に挑戦する子が増えたりと、目に見える変化も生まれました。",
      },
      {
        type: "text",
        text: "あの空間が、誰かにとって「ちょっと一歩踏み出すきっかけ」になっていたらうれしいなと、今でも思っています。",
      },
      {
        type: "video",
        src: "/images/beehive_vol1_2.MOV",
        poster: "/images/beehive_vol1_1.jpg",
        caption: "BeeHive vol.1 の動画（押すと再生）",
      },
      {
        type: "text",
        text: "みんなそれぞれが思い思いのダンスを踊っていて楽しい空間にすることができました。僕も踊りまくりました～",
      },
    ],
  },
  {
    title: "ローカルイベント AUSPICE vol.3 開催",
    slug: "local-event-auspice-vol3",
    dateLabel: "2025-05-11",
    description: "新規来場者の拡大と体験価値の向上をテーマに、AUSPICE vol.3を開催しました。",
    techStack: ["Community", "Facilitation", "Sponsorship", "Operation"],
    mainImagePath: "/images/auspis_vol3_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "第3回では、第1回・第2回の反省を踏まえ、「新規のお客さんを増やすこと」と「体験の質をさらに高めること」に本気で向き合いました。",
      },
      {
        type: "text",
        text: "今回は思い切って、音楽を楽しむフロアと出店を楽しむフロアを分けることにしました。これまでは同じ空間で混ざっていたのですが、それぞれの感性により集中できるようにしたかったんです。DJの音、出店者さんの作品、長岡という場所の空気感を、もっと存分に感じてもらえる空間を目指しました。",
      },
      {
        type: "text",
        text: "もちろん、その分会場費は上がり、参加費の値上げも必要になりました。正直、集客の不安はこれまで以上に大きかったです。でも、「誰かの心にちゃんと残るイベントをつくりたい」という思いを優先しました。私は裏方として全体の調整や運営サポートに回りながら、細かい部分まで妥協せず取り組みました。",
      },
      {
        type: "text",
        text: "今回の出店者は、第2回に引き続きCOFFEE BiNさん、ALI NAGAOKA SnapのNoahさん、洋服・グッズのneu projectsさん、megrolliさん、foggyさん、そしてVJとして前回までグッズ出店をしていただいていたcirrusさん。さらに7名のDJの皆さんとともに、2フロア体制で挑戦しました。",
      },
      {
        type: "text",
        text: "フロアが分かれた分、気にしなければいけない場所も増え、当日はかなりバタバタでした。それでも、それぞれが音楽や出店に没頭できる空間は確実につくれたと感じています。",
      },
      {
        type: "text",
        text: "次回は3月29日に長岡で第4回を開催予定です。さらに進化させるつもりなので、こうご期待！",
      },
      {
        type: "image",
        src: "/images/auspis_vol3_2.jpg",
        alt: "AUSPICE vol.3 sub image",
      },
      {
        type: "text",
        text: "服を買ってご満悦の僕です。",
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
    title: "ダンスイベント THE BeeHive vol.2 開催",
    slug: "dance-event-beehive-vol2",
    dateLabel: "2026-01-09",
    description: "進化と反省がたくさんあったVol.2でした！",
    techStack: ["Planning", "Direction", "Promotion", "Operation"],
    mainImagePath: "/images/beehive_vol2_1.jpg",
    contentBlocks: [
      {
        type: "text",
        text: "Vol.1のあと、スタジオの先生や生徒さんから「楽しかったからまたやってよ！」と声をいただき、THE BEE HIVE Vol.2を開催しました。",
      },
      {
        type: "text",
        text: "今回はさらにパワーアップして、実際にクラブでプレイしているDJをお呼びし、ショーケースの時間も用意。出演する子どもたちには、選曲・編曲・振り付けまで自分たちで考えてもらい、与えられたダンスではなく、自分たちでつくるダンスを発表してもらいました。イベントとしての完成度は確実に上がったと思います。",
      },
      {
        type: "text",
        text: "ただ、正直に言うと悔しさも残りました。前回参加してくれた子はほとんど戻ってきてくれたのですが、新規のお客さんをあまり呼び込めなかったんです。",
      },
      {
        type: "text",
        text: "振り返ってみると、一番の反省点は「Vol.1の良さをちゃんと外に伝えられていなかったこと」だと感じました。Vol.1に来てくれた子たちは、もともとダンスが大好きで、「こんなイベントあるなら行ってみよう！」と思える子たちでした。でも本当は、「自分あんまりうまくないし…」「即興とか恥ずかしいし…」って思っている子にこそ来てほしかった。",
      },
      {
        type: "text",
        text: "Vol.1の雰囲気は本当に最高だったのに、その空気感を言葉や写真だけでは伝えきれていなかった。今回はそこが足りなかったと痛感しました。",
      },
      {
        type: "text",
        text: "そこでVol.3に向けて、イベント中の様子を動画でしっかり撮影し、あとからまとめてアップロードすることに決めました。このイベントの空気や楽しさをちゃんと可視化して、次につなげたいと思っています。",
      },
      {
        type: "text",
        text: "進化はできた。でも、届けきれなかった。その悔しさを、次の一歩のエネルギーにします。",
      },
      {
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/DWbkvmSJl94",
        watchUrl: "https://www.youtube.com/watch?v=DWbkvmSJl94",

        caption: "BeeHive vol.2 ダイジェスト（YouTube）",
      },
      {
        type: "text",
        text: "1分30秒ぐらいの、大学生になり体力がなくなって疲れ果てて座っているのが僕です。",
      },
    ],
  },
  {
    title: "LLMコンペティション 3位入賞‼",
    slug: "llm-competition",
    dateLabel: "2026-02-13",
    githubUrl: "https://github.com/ichito-watanabe/SSC2025.git",
    description:
      "SIGNATEの自然言語処理コンペにチームで参加し、最終3位に入賞しました！",
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

