const katakana = ['アイ', 'ウエ', 'オカ', 'キク', 'ケコ', 'サシ', 'スセ', 'ソタ', 'チツ', 'テト', 'ナニ', 'ヌネ', 'ノハ', 'ヒフ', 'ヘホ', 'マミ', 'ムメ', 'モヤ', 'ユヨ', 'ラリ', 'ルレ', 'ロワ', 'ヲン']

const dictionary = ["一.jpg", "右.jpg", "雨.jpg", "円.jpg", "王.jpg", "音.jpg", "下.jpg", "火.jpg", "花.jpg", "貝.jpg", "学.jpg", "気.jpg", "九.jpg", "休.jpg", "玉.jpg", "金.jpg", "空.jpg", "月.jpg", "犬.jpg", "見.jpg", "五.jpg", "口.jpg", "校.jpg", "左.jpg", "三.jpg", "山.jpg", "子.jpg", "四.jpg", "糸.jpg", "字.jpg", "耳.jpg", "七.jpg", "車.jpg", "手.jpg", "十.jpg", "出.jpg", "女.jpg", "小.jpg", "上.jpg", "森.jpg", "人.jpg", "水.jpg", "正.jpg", "生.jpg", "青.jpg", "夕.jpg", "石.jpg", "赤.jpg", "千.jpg", "川.jpg", "先.jpg", "早.jpg", "草.jpg", "足.jpg", "村.jpg", "大.jpg", "男.jpg", "竹.jpg", "中.jpg", "虫.jpg", "町.jpg", "天.jpg", "田.jpg", "土.jpg", "二.jpg", "日.jpg", "入.jpg", "年.jpg", "白.jpg", "八.jpg", "百.jpg", "文.jpg", "木.jpg", "本.jpg", "名.jpg", "目.jpg", "立.jpg", "力.jpg", "林.jpg", "六.jpg", "引.jpg", "羽.jpg", "雲.jpg", "園.jpg", "遠.jpg", "何.jpg", "科.jpg", "夏.jpg", "家.jpg", "歌.jpg", "画.jpg", "回.jpg", "会.jpg", "海.jpg", "絵.jpg", "外.jpg", "角.jpg", "楽.jpg", "活.jpg", "間.jpg", "丸.jpg", "岩.jpg", "顔.jpg", "汽.jpg", "記.jpg", "帰.jpg", "弓.jpg", "牛.jpg", "魚.jpg", "京.jpg", "強.jpg", "教.jpg", "近.jpg", "兄.jpg", "形.jpg", "計.jpg", "元.jpg", "言.jpg", "原.jpg", "戸.jpg", "古.jpg", "午.jpg", "後.jpg", "語.jpg", "工.jpg", "公.jpg", "広.jpg", "交.jpg", "光.jpg", "考.jpg", "行.jpg", "高.jpg", "黄.jpg", "合.jpg", "谷.jpg", "国.jpg", "黒.jpg", "今.jpg", "才.jpg", "細.jpg", "作.jpg", "算.jpg", "止.jpg", "市.jpg", "矢.jpg", "姉.jpg", "思.jpg", "紙.jpg", "寺.jpg", "自.jpg", "時.jpg", "室.jpg", "社.jpg", "弱.jpg", "首.jpg", "秋.jpg", "週.jpg", "春.jpg", "書.jpg", "少.jpg", "場.jpg", "色.jpg", "食.jpg", "心.jpg", "新.jpg", "親.jpg", "図.jpg", "数.jpg", "西.jpg", "声.jpg", "星.jpg", "晴.jpg", "切.jpg", "雪.jpg", "船.jpg", "線.jpg", "前.jpg", "組.jpg", "走.jpg", "多.jpg", "太.jpg", "体.jpg", "台.jpg", "地.jpg", "池.jpg", "知.jpg", "茶.jpg", "昼.jpg", "長.jpg", "鳥.jpg", "朝.jpg", "直.jpg", "通.jpg", "弟.jpg", "店.jpg", "点.jpg", "電.jpg", "刀.jpg", "冬.jpg", "当.jpg", "東.jpg", "答.jpg", "頭.jpg", "同.jpg", "道.jpg", "読.jpg", "内.jpg", "南.jpg", "肉.jpg", "馬.jpg", "売.jpg", "買.jpg", "麦.jpg", "半.jpg", "番.jpg", "父.jpg", "風.jpg", "分.jpg", "聞.jpg", "米.jpg", "歩.jpg", "母.jpg", "方.jpg", "北.jpg", "毎.jpg", "妹.jpg", "万.jpg", "明.jpg", "鳴.jpg", "毛.jpg", "門.jpg", "夜.jpg", "野.jpg", "友.jpg", "用.jpg", "曜.jpg", "来.jpg", "里.jpg", "理.jpg", "話.jpg", "悪.jpg", "安.jpg", "暗.jpg", "医.jpg", "委.jpg", "意.jpg", "育.jpg", "員.jpg", "院.jpg", "飲.jpg", "運.jpg", "泳.jpg", "駅.jpg", "央.jpg", "横.jpg", "屋.jpg", "温.jpg", "化.jpg", "荷.jpg", "界.jpg", "開.jpg", "階.jpg", "寒.jpg", "感.jpg", "漢.jpg", "館.jpg", "岸.jpg", "起.jpg", "期.jpg", "客.jpg", "究.jpg", "急.jpg", "級.jpg", "宮.jpg", "捄.jpg", "去.jpg", "橋.jpg", "業.jpg", "曲.jpg", "局.jpg", "銀.jpg", "区.jpg", "苦.jpg", "具.jpg", "君.jpg", "係.jpg", "軽.jpg", "血.jpg", "決.jpg", "研.jpg", "県.jpg", "庫.jpg", "湖.jpg", "向.jpg", "幸.jpg", "港.jpg", "号.jpg", "根.jpg", "祭.jpg", "皿.jpg", "仕.jpg", "死.jpg", "使.jpg", "始.jpg", "指.jpg", "歯.jpg", "詩.jpg", "次.jpg", "事.jpg", "持.jpg", "式.jpg", "実.jpg", "写.jpg", "者.jpg", "主.jpg", "守.jpg", "取.jpg", "酒.jpg", "受.jpg", "州.jpg", "拾.jpg", "終.jpg", "習.jpg", "集.jpg", "住.jpg", "重.jpg", "宿.jpg", "所.jpg", "暑.jpg", "助.jpg", "昭.jpg", "消.jpg", "商.jpg", "章.jpg", "勝.jpg", "乗.jpg", "植.jpg", "申.jpg", "身.jpg", "神.jpg", "真.jpg", "深.jpg", "進.jpg",
	"世.jpg",
	"整.jpg",
	"昔.jpg",
	"全.jpg",
	"相.jpg",
	"送.jpg",
	"想.jpg", "息.jpg",
	"速.jpg", "族.jpg",
	"他.jpg", "打.jpg",
	"対.jpg", "待.jpg", "代.jpg",
	"第.jpg",
	"題.jpg", "炭.jpg",
	"短.jpg", "談.jpg",
	"着.jpg", "注.jpg", "柱.jpg", "丁.jpg",
	"帳.jpg",
	"調.jpg", "追.jpg",
	"定.jpg", "庭.jpg",
	"笛.jpg",
	"鉄.jpg", "転.jpg", "都.jpg",
	"度.jpg",
	"投.jpg",
	"豆.jpg",
	"島.jpg",
	"湯.jpg",
	"登.jpg",
	"等.jpg",
	"動.jpg",
	"童.jpg",
	"農.jpg", "波.jpg",
	"配.jpg",
	"倍.jpg",
	"箱.jpg",
	"畑.jpg",
	"発.jpg",
	"反.jpg",
	"坂.jpg", "板.jpg",
	"皮.jpg",
	"悲.jpg",
	"美.jpg",
	"鼻.jpg", "筆.jpg",
	"氷.jpg",
	"表.jpg",
	"秒.jpg",
	"病.jpg",
	"品.jpg",
	"負.jpg",
	"部.jpg", "服.jpg",
	"福.jpg",
	"物.jpg",
	"平.jpg",
	"返.jpg",
	"勉.jpg",
	"放.jpg",
	"味.jpg",
	"命.jpg", "面.jpg",
	"問.jpg",
	"役.jpg",
	"薬.jpg",
	"由.jpg", "油.jpg",
	"有.jpg",
	"遊.jpg",
	"予.jpg", "羊.jpg",
	"洋.jpg",
	"葉.jpg",
	"陽.jpg",
	"様.jpg",
	"落.jpg",
	"流.jpg",
	"旅.jpg",
	"両.jpg", "緑.jpg",
	"礼.jpg",
	"列.jpg",
	"練.jpg",
	"路.jpg",
	"和.jpg",
	"愛.jpg",
	"案.jpg",
	"以.jpg", "衣.jpg",
	"位.jpg",
	"囲.jpg",
	"胃.jpg",
	"印.jpg",
	"英.jpg", "栄.jpg",
	"塩.jpg",
	"億.jpg",
	"加.jpg",
	"果.jpg",
	"貨.jpg",
	"課.jpg",
	"芽.jpg",
	"改.jpg",
	"械.jpg",
	"害.jpg",
	"街.jpg", "各.jpg",
	"覚.jpg",
	"完.jpg",
	"官.jpg",
	"管.jpg",
	"関.jpg",
	"観.jpg",
	"願.jpg", "希.jpg",
	"季.jpg",
	"紀.jpg",
	"喜.jpg",
	"旗.jpg",
	"器.jpg",
	"機.jpg",
	"議.jpg",
	"求.jpg",
	"泣.jpg",
	"救.jpg",
	"給.jpg", "挙.jpg",
	"漁.jpg",
	"共.jpg",
	"協.jpg",
	"鏡.jpg",
	"競.jpg",
	"極.jpg",
	"訓.jpg",
	"軍.jpg",
	"郡.jpg",
	"径.jpg",
	"型.jpg", "景.jpg",
	"芸.jpg",
	"欠.jpg",
	"結.jpg",
	"建.jpg",
	"健.jpg",
	"験.jpg",
	"固.jpg",
	"功.jpg",
	"好.jpg",
	"候.jpg",
	"航.jpg",
	"康.jpg",
	"告.jpg", "差.jpg",
	"菜.jpg",
	"最.jpg",
	"材.jpg",
	"昨.jpg",
	"札.jpg",
	"刷.jpg",
	"殺.jpg",
	"察.jpg",
	"参.jpg",
	"産.jpg", "散.jpg",
	"残.jpg",
	"士.jpg",
	"氏.jpg",
	"史.jpg",
	"司.jpg",
	"試.jpg",
	"児.jpg",
	"治.jpg",
	"辞.jpg",
	"失.jpg",
	"借.jpg", "種.jpg",
	"周.jpg",
	"祝.jpg",
	"順.jpg",
	"初.jpg",
	"松.jpg",
	"笑.jpg",
	"唱.jpg",
	"焼.jpg",
	"象.jpg",
	"照.jpg", "賞.jpg",
	"臣.jpg",
	"信.jpg",
	"成.jpg",
	"省.jpg",
	"清.jpg",
	"静.jpg",
	"席.jpg",
	"積.jpg",
	"折.jpg",
	"節.jpg",
	"説.jpg", "浅.jpg",
	"戦.jpg",
	"選.jpg",
	"然.jpg",
	"争.jpg",
	"倉.jpg",
	"巣.jpg",
	"束.jpg",
	"側.jpg", "続.jpg",
	"卒.jpg",
	"孫.jpg",
	"帯.jpg",
	"隊.jpg",
	"達.jpg",
	"単.jpg",
	"置.jpg",
	"仲.jpg", "貯.jpg",
	"兆.jpg",
	"腸.jpg",
	"低.jpg",
	"底.jpg",
	"停.jpg", "的.jpg",
	"典.jpg",
	"伝.jpg",
	"徒.jpg",
	"努.jpg",
	"灯.jpg", "堂.jpg",
	"働.jpg",
	"特.jpg",
	"得.jpg",
	"毒.jpg",
	"熱.jpg",
	"念.jpg",
	"敗.jpg",
	"梅.jpg", "博.jpg",
	"飯.jpg",
	"飛.jpg",
	"費.jpg",
	"必.jpg",
	"票.jpg",
	"標.jpg",
	"不.jpg",
	"夫.jpg", "付.jpg",
	"府.jpg",
	"副.jpg",
	"粉.jpg",
	"兵.jpg",
	"別.jpg",
	"辺.jpg",
	"変.jpg",
	"便.jpg", "包.jpg",
	"法.jpg",
	"望.jpg",
	"牧.jpg",
	"末.jpg",
	"満.jpg",
	"未.jpg",
	"脈.jpg",
	"民.jpg", "無.jpg",
	"約.jpg",
	"勇.jpg",
	"要.jpg",
	"養.jpg",
	"浴.jpg",
	"利.jpg",
	"陸.jpg",
	"良.jpg",
	"料.jpg",
	"量.jpg",
	"輪.jpg",
	"類.jpg",
	"令.jpg",
	"冷.jpg",
	"例.jpg",
	"歴.jpg",
	"連.jpg",
	"老.jpg",
	"労.jpg",
	"録.jpg",
	"圧.jpg",
	"移.jpg",
	"因.jpg",
	"永.jpg",
	"営.jpg",
	"衛.jpg",
	"易.jpg",
	"益.jpg",
	"液.jpg",
	"演.jpg",
	"応.jpg",
	"往.jpg",
	"桜.jpg",
	"恩.jpg",
	"可.jpg",
	"仮.jpg",
	"価.jpg",
	"河.jpg",
	"過.jpg",
	"賀.jpg",
	"快.jpg",
	"解.jpg",
	"格.jpg",
	"確.jpg",
	"額.jpg",
	"刊.jpg",
	"幹.jpg",
	"慣.jpg",
	"眼.jpg",
	"基.jpg",
	"寄.jpg",
	"規.jpg",
	"技.jpg",
	"義.jpg",
	"逆.jpg",
	"久.jpg",
	"旧.jpg",
	"居.jpg",
	"許.jpg",
	"境.jpg",
	"均.jpg",
	"禁.jpg",
	"句.jpg",
	"群.jpg",
	"経.jpg",
	"潔.jpg",
	"件.jpg",
	"券.jpg",
	"険.jpg",
	"検.jpg",
	"限.jpg",
	"現.jpg",
	"減.jpg",
	"故.jpg",
	"個.jpg",
	"護.jpg",
	"効.jpg",
	"厚.jpg",
	"耕.jpg",
	"鉱.jpg",
	"構.jpg",
	"興.jpg",
	"講.jpg",
	"混.jpg",
	"査.jpg",
	"再.jpg",
	"災.jpg",
	"妻.jpg",
	"採.jpg",
	"際.jpg",
	"在.jpg",
	"財.jpg",
	"罪.jpg",
	"雑.jpg",
	"酸.jpg",
	"賛.jpg",
	"支.jpg",
	"志.jpg",
	"枝.jpg",
	"師.jpg",
	"資.jpg",
	"飼.jpg",
	"示.jpg",
	"似.jpg",
	"識.jpg",
	"質.jpg",
	"舎.jpg",
	"謝.jpg",
	"授.jpg",
	"修.jpg",
	"述.jpg",
	"術.jpg",
	"準.jpg",
	"序.jpg",
	"招.jpg",
	"承.jpg",
	"証.jpg",
	"条.jpg",
	"状.jpg",
	"常.jpg",
	"情.jpg",
	"織.jpg",
	"職.jpg",
	"制.jpg",
	"性.jpg",
	"政.jpg",
	"勢.jpg",
	"精.jpg",
	"製.jpg",
	"税.jpg",
	"責.jpg",
	"績.jpg",
	"接.jpg",
	"設.jpg",
	"舌.jpg",
	"絶.jpg",
	"銭.jpg",
	"祖.jpg",
	"素.jpg",
	"総.jpg",
	"造.jpg",
	"像.jpg",
	"増.jpg",
	"則.jpg",
	"測.jpg",
	"属.jpg",
	"率.jpg",
	"損.jpg",
	"退.jpg",
	"貸.jpg",
	"態.jpg",
	"団.jpg",
	"断.jpg",
	"築.jpg",
	"張.jpg",
	"提.jpg",
	"程.jpg",
	"適.jpg",
	"敵.jpg",
	"統.jpg",
	"銅.jpg",
	"導.jpg",
	"徳.jpg",
	"独.jpg",
	"任.jpg",
	"燃.jpg",
	"能.jpg",
	"破.jpg",
	"犯.jpg",
	"判.jpg",
	"版.jpg",
	"比.jpg",
	"肥.jpg",
	"非.jpg",
	"備.jpg",
	"俵.jpg",
	"評.jpg",
	"貧.jpg",
	"布.jpg",
	"婦.jpg",
	"富.jpg",
	"武.jpg",
	"復.jpg",
	"複.jpg",
	"仏.jpg",
	"編.jpg",
	"弁.jpg",
	"保.jpg",
	"墓.jpg",
	"報.jpg",
	"豊.jpg",
	"防.jpg",
	"貿.jpg",
	"暴.jpg",
	"務.jpg",
	"夢.jpg",
	"迷.jpg",
	"綿.jpg",
	"輸.jpg",
	"余.jpg",
	"預.jpg",
	"容.jpg",
	"略.jpg",
	"留.jpg",
	"領.jpg",
	"異.jpg",
	"遺.jpg",
	"域.jpg",
	"宇.jpg",
	"映.jpg",
	"延.jpg",
	"沿.jpg",
	"我.jpg",
	"灰.jpg",
	"拡.jpg",
	"革.jpg",
	"閣.jpg",
	"割.jpg",
	"株.jpg",
	"干.jpg",
	"巻.jpg",
	"看.jpg",
	"簡.jpg",
	"危.jpg",
	"机.jpg",
	"揮.jpg",
	"貴.jpg",
	"疑.jpg",
	"吸.jpg",
	"供.jpg",
	"胸.jpg",
	"郷.jpg",
	"勤.jpg",
	"筋.jpg",
	"系.jpg",
	"敬.jpg",
	"警.jpg",
	"劇.jpg",
	"激.jpg",
	"穴.jpg",
	"絹.jpg",
	"権.jpg",
	"憲.jpg",
	"源.jpg",
	"厳.jpg",
	"己.jpg",
	"呼.jpg",
	"誤.jpg",
	"后.jpg",
	"孝.jpg",
	"皇.jpg",
	"紅.jpg",
	"降.jpg",
	"鋼.jpg",
	"刻.jpg",
	"穀.jpg",
	"骨.jpg",
	"困.jpg",
	"砂.jpg",
	"座.jpg",
	"済.jpg",
	"裁.jpg",
	"策.jpg",
	"冊.jpg",
	"蚕.jpg",
	"至.jpg",
	"私.jpg",
	"姿.jpg",
	"視.jpg",
	"詞.jpg",
	"誌.jpg",
	"磁.jpg",
	"射.jpg",
	"捨.jpg",
	"尺.jpg",
	"若.jpg",
	"樹.jpg",
	"収.jpg",
	"宗.jpg",
	"就.jpg",
	"衆.jpg",
	"従.jpg",
	"縦.jpg",
	"縮.jpg",
	"熟.jpg",
	"純.jpg",
	"処.jpg",
	"署.jpg",
	"諸.jpg",
	"除.jpg",
	"将.jpg",
	"傷.jpg",
	"障.jpg",
	"城.jpg",
	"蒸.jpg",
	"針.jpg",
	"仁.jpg",
	"垂.jpg",
	"推.jpg",
	"寸.jpg",
	"盛.jpg",
	"聖.jpg",
	"誠.jpg",
	"宣.jpg",
	"専.jpg",
	"泉.jpg",
	"洗.jpg",
	"染.jpg",
	"善.jpg",
	"奏.jpg",
	"窓.jpg",
	"創.jpg",
	"装.jpg",
	"層.jpg",
	"操.jpg",
	"蔵.jpg",
	"臓.jpg",
	"存.jpg",
	"尊.jpg",
	"宅.jpg",
	"担.jpg",
	"探.jpg",
	"誕.jpg",
	"段.jpg",
	"暖.jpg",
	"値.jpg",
	"宙.jpg",
	"忠.jpg",
	"著.jpg",
	"庁.jpg",
	"頂.jpg",
	"潮.jpg",
	"賃.jpg",
	"痛.jpg",
	"展.jpg",
	"討.jpg",
	"党.jpg",
	"糖.jpg",
	"届.jpg",
	"難.jpg",
	"乳.jpg",
	"認.jpg",
	"納.jpg",
	"脳.jpg",
	"派.jpg",
	"拝.jpg",
	"背.jpg",
	"肺.jpg",
	"俳.jpg",
	"班.jpg",
	"晩.jpg",
	"否.jpg",
	"批.jpg",
	"秘.jpg",
	"腹.jpg",
	"奮.jpg",
	"並.jpg",
	"陛.jpg",
	"閉.jpg",
	"片.jpg",
	"補.jpg",
	"暮.jpg",
	"宝.jpg",
	"訪.jpg",
	"亡.jpg",
	"忘.jpg",
	"棒.jpg",
	"枚.jpg",
	"幕.jpg",
	"密.jpg",
	"盟.jpg",
	"模.jpg",
	"訳.jpg",
	"郵.jpg",
	"優.jpg",
	"幼.jpg",
	"欲.jpg",
	"翌.jpg",
	"乱.jpg",
	"卵.jpg",
	"覧.jpg",
	"裏.jpg",
	"律.jpg",
	"臨.jpg",
	"朗.jpg",
	"論.jpg",
	"あ.jpg",
	"い.jpg",
	"う.jpg",
	"え.jpg",
	"お.jpg",
	"か.jpg",
	"き.jpg",
	"く.jpg",
	"け.jpg",
	"こ.jpg",
	"さ.jpg",
	"し.jpg",
	"す.jpg",
	"せ.jpg",
	"そ.jpg",
	"た.jpg",
	"ち.jpg",
	"つ.jpg",
	"て.jpg",
	"と.jpg",
	"な.jpg",
	"に.jpg",
	"ぬ.jpg",
	"ね.jpg",
	"の.jpg",
	"は.jpg",
	"ひ.jpg",
	"ふ.jpg",
	"へ.jpg",
	"ほ.jpg",
	"ま.jpg",
	"み.jpg",
	"む.jpg",
	"め.jpg",
	"も.jpg",
	"や.jpg",
	"ゆ.jpg",
	"よ.jpg",
	"ら.jpg",
	"り.jpg",
	"る.jpg",
	"れ.jpg",
	"ろ.jpg",
	"わ.jpg",
	"を.jpg",
	"ん.jpg",
	"アイ.jpg",
	"ウエ.jpg",
	"オカ.jpg",
	"キク.jpg",
	"ケコ.jpg",
	"サシ.jpg",
	"スセ.jpg",
	"ソタ.jpg",
	"チツ.jpg",
	"テト.jpg",
	"ナニ.jpg",
	"ヌネ.jpg",
	"ノハ.jpg",
	"ヒフ.jpg",
	"ヘホ.jpg",
	"マミ.jpg",
	"ムメ.jpg",
	"モヤ.jpg",
	"ユヨ.jpg",
	"ラリ.jpg",
	"ルレ.jpg",
	"ロワ.jpg",
	"ヲン.jpg"]

const replaces = new Map([
  ['が','か'], ['ぎ','き'],　['ぐ','く'], ['げ','け'], ['ご','こ'], ['だ','た'], ['ぢ','ち'], ['づ','つ'], ['で','て'], ['ど','と'], ['ざ','さ'], ['じ','し'], ['ず','す'], ['ぜ','せ'], ['ぞ','そ'], ['ば','は'], ['ぱ','は'], ['べ','へ'], ['ぺ','へ'], ['ぶ','ふ'], ['ぷ','ふ'], ['び','ひ'], ['ぴ','ひ'], ['ぼ','ほ'], ['ぽ','ほ'], ['ゃ','や'], ['ょ','よ'], ['ゅ','ゆ'], ['っ','つ'], ['ャ','ヤ'], ['ョ','ヨ'], ['ュ','ユ'], ['ッ','ツ'], ['ガ','カ'], ['ギ','キ'], ['グ','ク'], ['ゲ','ケ'], ['ゴ','コ'], ['ザ','サ'], ['ジ','シ'], ['ズ','ス'], ['ゼ','せ'], ['ゾ','ソ'], ['ダ','タ'], ['ヂ','チ'], ['ヅ','ツ'], ['デ','テ'], ['ド','ト'], ['バ','ハ'], ['ビ','ヒ'], ['ブ','フ'], ['ベ','ヘ'], ['ボ','ホ']])

// function isValid(value) {
// 	return value.length >= 1
// }

// const submitBtn = document.getElementById('btn');
// const input = document.getElementById('input__kanzi')
// submitBtn.addEventListener('submit', getKanzi);
// input.addEventListener('input', () => {
// 	submitBtn.disabled = !isValid(input.value)
// })

// const params = decodeURI(document.location.search)
let url = new URL (window.location.href)
document.kanzi__form.input__kanzi.value = url.searchParams.get('q')
// (params.substr(10)).split('&')
var ele = document.getElementById("myForm");
if(ele.addEventListener){
    ele.addEventListener("submit", getKanzi(), false);
}

function getKanzi() {
	let text = document.kanzi__form.input__kanzi.value.toLocaleLowerCase();
	let url = new URL (location.protocol + '//' + location.host + location.pathname)
	url.searchParams.append("q", text)
	window.history.pushState({}, null, url)
	console.log(text)
	// window.location.replace(url)
	// console.log(url.search)
	
	const replace = (c) => replaces.get(c) ?? c

	// let searchKanzi = document.createElement('div');
	// searchKanzi.innerHTML = 'Мы ищем кандзи...';
	// searchKanzi.className = "search__kanzi";

	while (document.getElementById("found__kanzi").firstChild) {
		document.getElementById("found__kanzi").removeChild(document.getElementById("found__kanzi").firstChild);
	}
	const result = [].map.call(text, c => ({
		char: c,
		page: dictionary.find(p => p.toLocaleLowerCase().includes(replace(c)))
	}))

	// const replace = (c) => replaces.get(c) ?? c
	// console.log(replace(result.page))

	const distinctPage = [... new Set(result.map(x => x.page))];

	for (i = 0; i < distinctPage.length; ++i) {
		let pic = document.createElement('img');
		let notFoundKandzi = document.createElement('div');
		if (!distinctPage[i]) { notFoundKandzi.innerHTML = result[i].char + ' Не найден'; }

		notFoundKandzi.className = "not__found";
		pic.src = './img/Dictionary/' + distinctPage[i];
		pic.className = "kanzi";
		pic.id = "myImg";
		notFoundKandzi.className = "kanzi__notFound";
		pic.onload = function () { document.getElementById("found__kanzi").appendChild(pic); }
		pic.onerror = function () { document.getElementById("found__kanzi").appendChild(notFoundKandzi); }
	}

	// input.value = "";
	// submitBtn.disabled = true;
}

// for (i = 0; i < kanzi.length; ++i) {
// 	let pic = document.createElement('img');
// 	let notFoundKandzi = document.createElement('div');
// 	notFoundKandzi.innerHTML = kanzi[i] + ' Не найден';
// 	notFoundKandzi.className = "not__found";
// 	pic.src = './img/Dictionary/' + kanzi[i] + '.jpg';
// 	pic.className = "kanzi";
// 	pic.id = "myImg";
// 	notFoundKandzi.className = "kanzi__notFound";
// 	pic.onload = function () { document.getElementById("found__kanzi").appendChild(pic); }
// 	pic.onerror = function () { document.getElementById("found__kanzi").appendChild(notFoundKandzi); }
// }