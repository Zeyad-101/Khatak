// ---------- Station data (English name, Arabic name) ----------
const LINE1 = [
  ["Helwan","حلوان"],["Ain Helwan","عين حلوان"],["Helwan University","جامعة حلوان"],
  ["Wadi Hof","وادي حوف"],["Hadayek Helwan","حدائق حلوان"],["El-Maasara","المعصرة"],
  ["Tora El-Asmant","طرة الأسمنت"],["Kozzika","كوتسيكا"],["Tora El-Balad","طرة البلد"],
  ["Sakanat El-Maadi","ثكنات المعادي"],["Maadi","المعادي"],["Hadayek El-Maadi","حدائق المعادي"],
  ["Dar El-Salam","دار السلام"],["El-Zahraa","الزهراء"],["Mar Girgis","مار جرجس"],
  ["El-Malek El-Saleh","الملك الصالح"],["Al-Sayeda Zeinab","السيدة زينب"],["Saad Zaghloul","سعد زغلول"],
  ["Sadat","السادات"],["Nasser","جمال عبدالناصر"],["Orabi","عرابي"],["Al-Shohadaa","الشهداء"],
  ["Ghamra","غمرة"],["El-Demerdash","الدمرداش"],["Manshiet El-Sadr","منشية الصدر"],
  ["Kobri El-Qobba","كوبري القبة"],["Hammamat El-Qobba","حمامات القبة"],["Saray El-Qobba","ساراي القبة"],
  ["Hadayeq El-Zaitoun","حدائق الزيتون"],["Helmeyet El-Zaitoun","حلمية الزيتون"],["El-Matareyya","المطرية"],
  ["Ain Shams","عين شمس"],["Ezbet El-Nakhl","عزبة النخل"],["El-Marg","المرج"],["New El-Marg","المرج الجديدة"]
];
const LINE2 = [
  ["El-Mounib","المنيب"],["Sakiat Mekky","ساقية مكي"],["Omm El-Masryeen","أم المصريين"],
  ["El Giza","الجيزة"],["Faisal","فيصل"],["Cairo University","جامعة القاهرة"],
  ["El Bohoth","البحوث"],["Dokki","الدقي"],["Opera","الأوبرا"],["Sadat","السادات"],
  ["Mohamed Naguib","محمد نجيب"],["Attaba","العتبة"],["Al-Shohadaa","الشهداء"],["Masarra","مسرة"],
  ["Road El-Farag","روض الفرج"],["St. Teresa","سانتا تريزا"],["Khalafawy","الخلفاوي"],
  ["Mezallat","المظلات"],["Kolleyyet El-Zeraa","كلية الزراعة"],["Shubra El-Kheima","شبرا الخيمة"]
];
const LINE3_TRUNK = [
  ["Adly Mansour","عدلي منصور"],["El Haykestep","الهايكستب"],["Omar Ibn El-Khattab","عمر بن الخطاب"],
  ["Qobaa","قباء"],["Hesham Barakat","هشام بركات"],["El-Nozha","النزهة"],["Nadi El-Shams","نادي الشمس"],
  ["Alf Maskan","ألف مسكن"],["Heliopolis Square","ميدان هليوبوليس"],["Haroun","هارون"],
  ["Al-Ahram","الأهرام"],["Koleyet El-Banat","كلية البنات"],["Stadium","الإستاد"],["Fair Zone","أرض المعارض"],
  ["Abbassia","العباسية"],["Abdou Pasha","عبده باشا"],["El Geish","الجيش"],["Bab El Shaaria","باب الشعرية"],
  ["Attaba","العتبة"],["Nasser","جمال عبدالناصر"],["Maspero","ماسبيرو"],["Safaa Hegazy","صفاء حجازي"],
  ["Kit Kat","الكيت كات"]
];
const LINE3_BRANCH_A = [
  ["Sudan","السودان"],["Imbaba","إمبابة"],["El-Bohy","البوهي"],["El-Qawmia","القومية"],
  ["Ring Road","الطريق الدائري"],["Rod al-Farag Corridor","محور روض الفرج"]
];
const LINE3_BRANCH_B = [
  ["Tawfikia","التوفيقية"],["Wadi El Nile","وادي النيل"],["Gamat El Dowal","جامعة الدول العربية"],
  ["Boulak El Dakrour","بولاق الدكرور"],["Cairo University","جامعة القاهرة"]
];

// ---------- Monorail data (separate system: East Nile is operating, West Nile is not yet open) ----------
// Each entry: [English name, Arabic name, English area, Arabic area, interchange-or-null]
const MONO_EAST = [
  ["Cairo Stadium","استاد القاهرة","Nasr City","مدينة نصر",{en:"Metro Line 3",ar:"الخط الثالث بالمترو"}],
  ["Hisham Barakat","هشام بركات","Nasr City","مدينة نصر",null],
  ["Al-Azhar University","جامعة الأزهر","Nasr City","مدينة نصر",null],
  ["Seventh District","الحي السابع","Nasr City","مدينة نصر",null],
  ["El-Mosheer Ahmed Ismail","المشير أحمد إسماعيل","Nasr City","مدينة نصر",null],
  ["Jehan El-Sadat","جيهان السادات","Nasr City","مدينة نصر",null],
  ["Al-Mousheer Tantawy","المشير طنطاوي","New Cairo","القاهرة الجديدة",null],
  ["One Ninety","وان ناينتي","New Cairo","القاهرة الجديدة",null],
  ["Air Force Hospital","مستشفى القوات الجوية","New Cairo","القاهرة الجديدة",null],
  ["Al-Nargis","النرجس","New Cairo","القاهرة الجديدة",null],
  ["Investors","المستثمرين","New Cairo","القاهرة الجديدة",null],
  ["Al-Lotus","اللوتس","New Cairo","القاهرة الجديدة",null],
  ["Golden Square","الميدان الذهبي","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["Beit Al-Watan","بيت الوطن","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["Al-Fattah Al-Alim Mosque","مسجد الفتاح العليم","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["R1 District","الحي R1","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["R2 District","الحي R2","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["Business District","الحي المالي والأعمال","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["Arts and Culture City","مدينة الفنون والثقافة","New Administrative Capital","العاصمة الإدارية الجديدة",{en:"LRT",ar:"القطار الخفيف"}],
  ["Government District","الحي الحكومي","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["Masr Mosque","مسجد مصر","New Administrative Capital","العاصمة الإدارية الجديدة",null],
  ["Al-Adala City (Justice City)","مدينة العدالة","New Administrative Capital","العاصمة الإدارية الجديدة",null]
];
const MONO_WEST = [
  ["New October / Ahram Canadian University","أكتوبر الجديدة / الجامعة الكندية الأهرام","6th of October City","مدينة 6 أكتوبر",null],
  ["Sadat (6th of October)","السادات (6 أكتوبر)","6th of October City","مدينة 6 أكتوبر",null],
  ["6th of October University","جامعة 6 أكتوبر","6th of October City","مدينة 6 أكتوبر",null],
  ["Engineers Syndicate","نقابة المهندسين","6th of October City","مدينة 6 أكتوبر",null],
  ["Mall of Egypt","مول مصر","6th of October City","مدينة 6 أكتوبر",null],
  ["Sheikh Zayed City (Alexandria Rd)","مدينة الشيخ زايد (طريق الإسكندرية)","Sheikh Zayed","الشيخ زايد",null],
  ["Mansouria","المنصورية","Giza","الجيزة",null],
  ["Marioutia","المريوطية","Giza","الجيزة",null],
  ["Ring Road","الطريق الدائري","Giza","الجيزة",null],
  ["Bashteel","بشتيل","Giza","الجيزة",null],
  ["Wadi El Nile","وادي النيل","Mohandessin","المهندسين",{en:"Metro Line 3",ar:"الخط الثالث بالمترو"}]
];

// ---------- Build graph ----------
const arabicOf = {};
[LINE1, LINE2, LINE3_TRUNK, LINE3_BRANCH_A, LINE3_BRANCH_B].forEach(list=>{
  list.forEach(([en,ar])=>{ arabicOf[en]=ar; });
});
const englishOf = {};
Object.entries(arabicOf).forEach(([en,ar])=>{ englishOf[ar]=en; });

let LANG = "en";
function displayName(en){ return LANG === "ar" ? (arabicOf[en] || en) : en; }

const graph = {};
function ensure(name){ if(!graph[name]) graph[name]=[]; }
function addEdge(a,b,line){ ensure(a); ensure(b); graph[a].push({to:b, line}); graph[b].push({to:a, line}); }
function addChain(list, line){ for(let i=0;i<list.length-1;i++){ addEdge(list[i][0], list[i+1][0], line); } }
addChain(LINE1, "L1");
addChain(LINE2, "L2");
addChain(LINE3_TRUNK, "L3");
addEdge(LINE3_TRUNK[LINE3_TRUNK.length-1][0], LINE3_BRANCH_A[0][0], "L3");
addChain(LINE3_BRANCH_A, "L3");
addEdge(LINE3_TRUNK[LINE3_TRUNK.length-1][0], LINE3_BRANCH_B[0][0], "L3");
addChain(LINE3_BRANCH_B, "L3");

const linesOf = {};
function markLine(list, line){ list.forEach(([en])=>{ linesOf[en]=linesOf[en]||new Set(); linesOf[en].add(line); }); }
markLine(LINE1,"L1"); markLine(LINE2,"L2");
markLine(LINE3_TRUNK,"L3"); markLine(LINE3_BRANCH_A,"L3"); markLine(LINE3_BRANCH_B,"L3");

const STATION_NAMES = Object.keys(graph).sort((a,b)=>a.localeCompare(b));

function shortestPath(start, end){
  if(start===end) return {path:[start], lines:[]};
  const visited = new Set([start]);
  const prev = {};
  const queue = [start];
  let qi = 0;
  while(qi < queue.length){
    const cur = queue[qi++];
    for(const edge of graph[cur]){
      if(!visited.has(edge.to)){
        visited.add(edge.to);
        prev[edge.to] = {from:cur, line:edge.line};
        if(edge.to === end){
          const path = [end]; const lines = []; let node = end;
          while(node !== start){ const p = prev[node]; lines.unshift(p.line); path.unshift(p.from); node = p.from; }
          return {path, lines};
        }
        queue.push(edge.to);
      }
    }
  }
  return null;
}
function fareFor(stops){ if(stops<=9) return 10; if(stops<=16) return 12; if(stops<=23) return 15; return 20; }
const I18N = {
  en: {
    subtitle: "Cairo Metro Route Board",
    linesTag: "3 LINES",
    routeEyebrow: "ROUTE",
    fromLabel: "FROM",
    toLabel: "TO",
    placeholder: "Type a station…",
    goBtn: "FIND ROUTE ▶",
    browseEyebrow: "BROWSE ALL 89 STATIONS",
    tabMap: "MAP",
    tabList: "LIST",
    hint: 'Tap a station to set <b>A (from)</b>, tap another for <b>B (to)</b>.',
    footnote: "Distances are counted in station-stops, not km. Treat fare and stop counts as solid estimates, not an official reading. Fares follow current 2026 Ministry of Transport tiers.",
    creditPrefix: "Khatak · built by",
    fareLabel: "EGP FARE",
    stopsLabel: "STOPS",
    changeLabel: "CHANGE",
    changesLabel: "CHANGES",
    lineLabel: {L1:"LINE 1", L2:"LINE 2", L3:"LINE 3"},
    invalidStation: "That station name doesn't match anything on the network. Pick one from the dropdown, map or list.",
    pickBoth: 'Pick both a <b>from</b> and a <b>to</b> station to see your route.',
    sameStation: (name)=> `You're already at ${name}. Nowhere to go from here.`,
    noRoute: "Couldn't find a connecting route between these two.",
    cairoTime: "CAIRO TIME",
    rushHourTag: "RUSH HOUR",
    rushTag: "RUSH",
    clearTag: "CLEAR",
    railLabels: { L1: "LINE 1", L2: "LINE 2", L3trunk: "LINE 3 · trunk", L3a: "LINE 3 · to Rod al-Farag", L3b: "LINE 3 · to Cairo University" },
    weekday: {Sun:"SUN",Mon:"MON",Tue:"TUE",Wed:"WED",Thu:"THU",Fri:"FRI",Sat:"SAT"},
    toggleLabel: "عربي",
    tabMono: "MONORAIL",
    monoEastTitle: "EAST NILE MONORAIL",
    monoWestTitle: "WEST NILE MONORAIL",
    monoOperating: "OPERATING",
    monoComingSoon: "NOT YET OPEN",
    monoHours: "Daily, 6:00 AM to 9:00 PM",
    monoDiscount1: "50% off for seniors (60+) and passengers with disabilities, every zone",
    monoDiscount2: "50% off full fare every Friday, Saturday and public holidays",
    monoZoneNote: "Fare depends on how many stations you cross",
    monoZone1: "Up to 5 stations",
    monoZone2: "Up to 10 stations",
    monoZone3: "Up to 15 stations",
    monoZone4: "Full line",
    monoWestNote: "Route confirmed by Cairo Governorate. Opening date and fares not announced yet.",
    monoStationsHeading: "Stations"
  },
  ar: {
    subtitle: "لوحة مسارات مترو القاهرة",
    linesTag: "3 خطوط",
    routeEyebrow: "الرحلة",
    fromLabel: "من",
    toLabel: "إلى",
    placeholder: "اكتب اسم المحطة…",
    goBtn: "ابحث عن الرحلة ▶",
    browseEyebrow: "تصفح كل الـ89 محطة",
    tabMap: "الخريطة",
    tabList: "القائمة",
    hint: 'اضغط على محطة لتحديدها كـ <b>A (البداية)</b>، واضغط على محطة تانية لـ <b>B (الوجهة)</b>.',
    footnote: "المسافة محسوبة بعدد المحطات مش بالكيلومترات. اعتبر الأجرة وعدد المحطات تقدير قريب، مش قراءة رسمية. الأجرة حسب تعريفة وزارة النقل لسنة 2026.",
    creditPrefix: "خطك · بناه",
    fareLabel: "الأجرة (جنيه)",
    stopsLabel: "عدد المحطات",
    changeLabel: "تغييرات",
    changesLabel: "تغييرات",
    lineLabel: {L1:"الخط الأول", L2:"الخط الثاني", L3:"الخط الثالث"},
    invalidStation: "اسم المحطة ده مش موجود في الشبكة. اختار واحدة من القائمة أو الخريطة.",
    pickBoth: 'اختار محطة <b>البداية</b> ومحطة <b>الوجهة</b> عشان تشوف رحلتك.',
    sameStation: (name)=> `إنت أصلاً في ${name}. مفيش حتة تروحها من هنا.`,
    noRoute: "معرفناش نلاقي رحلة بين المحطتين دول.",
    cairoTime: "توقيت القاهرة",
    rushHourTag: "وقت الزحمة",
    rushTag: "زحمة",
    clearTag: "هادي",
    railLabels: { L1: "الخط الأول", L2: "الخط الثاني", L3trunk: "الخط الثالث · الجذع", L3a: "الخط الثالث · لروض الفرج", L3b: "الخط الثالث · لجامعة القاهرة" },
    weekday: {Sun:"الأحد",Mon:"الإثنين",Tue:"الثلاثاء",Wed:"الأربعاء",Thu:"الخميس",Fri:"الجمعة",Sat:"السبت"},
    toggleLabel: "EN",
    tabMono: "المونوريل",
    monoEastTitle: "مونوريل شرق النيل",
    monoWestTitle: "مونوريل غرب النيل",
    monoOperating: "شغال دلوقتي",
    monoComingSoon: "لسه ماخدمش",
    monoHours: "يوميًا من 6 صباحًا لـ 9 مساءً",
    monoDiscount1: "خصم 50% للمسنين (60+) وذوي الإعاقة في كل المناطق",
    monoDiscount2: "خصم 50% على التذكرة الكاملة كل جمعة وسبت والعطلات الرسمية",
    monoZoneNote: "الأجرة حسب عدد المحطات اللي هتعديها",
    monoZone1: "لحد 5 محطات",
    monoZone2: "لحد 10 محطات",
    monoZone3: "لحد 15 محطة",
    monoZone4: "الخط كامل",
    monoWestNote: "المسار مؤكد من محافظة القاهرة، بس معاد الافتتاح والأسعار لسه ماتحددوش.",
    monoStationsHeading: "المحطات"
  }
};
function stopsText(n){
  if(LANG === "ar"){
    if(n === 1) return "محطة واحدة";
    if(n === 2) return "محطتين";
    return `${n} محطات`;
  }
  return `${n} stop${n===1?"":"s"}`;
}
function buildSegments(path, lines){
  const segs = []; let segStart = 0;
  for(let i=1;i<=lines.length;i++){
    if(i===lines.length || lines[i]!==lines[i-1]){
      segs.push({ line: lines[segStart], from: path[segStart], to: path[i], stops: i - segStart });
      segStart = i;
    }
  }
  return segs;
}

// ---------- Rush hour ----------
const RUSH_MESSAGES = [
  { ar: "دلوقتي وقت الزحمة الرسمي… لو حد قالك في مكان تقف فيه في العربية يبقى بيهزر معاك.",
    en: "This is officially rush hour. If someone tells you there's room to stand, they're joking." },
  { ar: "مترو الساعة دي بقى زي زحمة الطريق الدائري، بس تحت الأرض.",
    en: "The metro right now is basically Ring Road traffic, just underground." },
  { ar: "خد نفسك قبل ما تنزل، مش هتلاقي مكان تاخده تاني لحد ما توصل.",
    en: "Take a deep breath before you go down. You won't get another chance until you arrive." },
  { ar: "مش وقتك يا صاحبي… بس لو مصمم، بالتوفيق والعربية الأولى غالبًا مش هتقف عندك.",
    en: "Not your best timing, friend. But if you're set on it: good luck, the first train probably won't even stop." },
  { ar: "الزحمة دلوقتي درجة توهان هوية مؤقت.",
    en: "The crowd right now is dense enough to briefly make you forget who you are." }
];
const CALM_MESSAGES = [
  { ar: "تمام، الوقت ده هادي شوية… استمتع بالرحلة.", en: "Good, it's fairly calm right now. Enjoy the ride." },
  { ar: "لسه بدري على الزحمة، رحلتك المفروض تبقى مريحة.", en: "Still early for the crowds. Your ride should be smooth." },
  { ar: "توقيت كويس، هتلاقي مكان تقعد فيه غالبًا.", en: "Good timing, you'll probably even find a seat." },
  { ar: "مفيش زحمة دلوقتي، بس متنساش تدوس بطاقتك.", en: "No rush-hour crowd right now, just don't forget to tap your card." }
];
function getCairoNow(){
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Africa/Cairo', weekday:'short', hour:'numeric', minute:'numeric', hour12:false });
  const parts = fmt.formatToParts(new Date());
  const map = {}; parts.forEach(p=>{ map[p.type]=p.value; });
  let hour = parseInt(map.hour,10); if(hour===24) hour = 0;
  return { weekday: map.weekday, hour, minute: parseInt(map.minute,10) };
}
function isRushHour(){
  const { weekday, hour, minute } = getCairoNow();
  const workday = ["Sun","Mon","Tue","Wed","Thu"].includes(weekday);
  if(!workday) return false;
  const dec = hour + minute/60;
  return (dec>=7 && dec<=9.5) || (dec>=15 && dec<=19.5);
}
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function enableDragScroll(el){
  let isDown = false, startX = 0, startScroll = 0, moved = false;
  el.addEventListener("mousedown", (e)=>{
    isDown = true; moved = false;
    el.classList.add("dragging");
    startX = e.pageX; startScroll = el.scrollLeft;
  });
  window.addEventListener("mouseup", ()=>{ isDown = false; el.classList.remove("dragging"); });
  window.addEventListener("mousemove", (e)=>{
    if(!isDown) return;
    const dx = e.pageX - startX;
    if(Math.abs(dx) > 4) moved = true;
    el.scrollLeft = startScroll - dx;
  });
  // suppress the click-to-select that would otherwise fire right after a drag
  el.addEventListener("click", (e)=>{
    if(moved){ e.stopPropagation(); e.preventDefault(); }
  }, true);
}

function flapText(str, startDelay){
  return str.split('').map((ch,i)=>{
    const safeCh = ch === ' ' ? '&nbsp;' : ch;
    return `<span class="flap-char" style="animation-delay:${startDelay + i*16}ms">${safeCh}</span>`;
  }).join('');
}
function routeWordHtml(text, startDelay){
  // Arabic script breaks if split into per-character spans (letters lose their joined
  // forms), so give it a single fade-in instead of the Latin per-character flap.
  if(LANG === "ar"){
    return `<span class="led-route-ar" style="animation-delay:${startDelay}ms">${text}</span>`;
  }
  return flapText(text.toUpperCase(), startDelay);
}

// ---------- Autocomplete combobox ----------
function setupCombo(inputEl, listEl){
  let activeIndex = -1;
  let matches = [];
  function renderList(query){
    const qEn = query.trim().toLowerCase();
    const qAr = query.trim();
    matches = STATION_NAMES.filter(n =>
      n.toLowerCase().includes(qEn) || (arabicOf[n]||"").includes(qAr)
    ).slice(0, 30);
    listEl.innerHTML = "";
    matches.forEach((name, idx)=>{
      const div = document.createElement("div");
      div.className = "combo-opt" + (idx===activeIndex ? " active" : "");
      const lines = Array.from(linesOf[name]||[]).sort();
      const primary = LANG === "ar" ? (arabicOf[name]||name) : name;
      const secondary = LANG === "ar" ? name : (arabicOf[name]||"");
      const primaryClass = LANG === "ar" ? "arabic" : "";
      const secondaryClass = LANG === "ar" ? "ar" : "ar arabic";
      div.innerHTML = `<span class="${primaryClass}">${primary}</span><span class="${secondaryClass}">${secondary}</span>`;
      const badgeWrap = document.createElement("span");
      badgeWrap.className = "badges";
      badgeWrap.innerHTML = lines.map(l=>`<span class="badge b-${l}"></span>`).join("");
      div.appendChild(badgeWrap);
      div.addEventListener("mousedown", (e)=>{
        e.preventDefault();
        inputEl.value = displayName(name);
        listEl.classList.remove("open");
        onStationPicked(name, inputEl);
      });
      listEl.appendChild(div);
    });
    listEl.classList.toggle("open", matches.length>0 && document.activeElement===inputEl);
  }
  inputEl.addEventListener("input", ()=>{ activeIndex = -1; renderList(inputEl.value); });
  inputEl.addEventListener("focus", ()=> renderList(inputEl.value));
  inputEl.addEventListener("blur", ()=> setTimeout(()=>listEl.classList.remove("open"), 100));
  inputEl.addEventListener("keydown", (e)=>{
    if(!listEl.classList.contains("open")) return;
    if(e.key==="ArrowDown"){ e.preventDefault(); activeIndex=Math.min(activeIndex+1, matches.length-1); renderList(inputEl.value); }
    else if(e.key==="ArrowUp"){ e.preventDefault(); activeIndex=Math.max(activeIndex-1, 0); renderList(inputEl.value); }
    else if(e.key==="Enter"){
      e.preventDefault();
      if(activeIndex>=0 && matches[activeIndex]){
        inputEl.value = displayName(matches[activeIndex]); listEl.classList.remove("open");
        onStationPicked(matches[activeIndex], inputEl);
      } else { renderRoute(); }
    }
    else if(e.key==="Escape"){ listEl.classList.remove("open"); }
  });
}

const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const fromList = document.getElementById("fromList");
const toList = document.getElementById("toList");
const screenEl = document.getElementById("screen");
const goBtn = document.getElementById("goBtn");
const swapBtn = document.getElementById("swapBtn");
const mapPanel = document.getElementById("mapPanel");
const listPanel = document.getElementById("listPanel");
const monoPanel = document.getElementById("monoPanel");
const tabMapBtn = document.getElementById("tabMapBtn");
const tabListBtn = document.getElementById("tabListBtn");
const tabMonoBtn = document.getElementById("tabMonoBtn");
const browseHint = document.getElementById("browseHint");

setupCombo(fromInput, fromList);
setupCombo(toInput, toList);

// which input a typed/clicked pick should NOT disturb — used for map/list taps
let nextSlot = "from";

function onStationPicked(name, sourceInput){
  // typing directly into a field always fills that field
  if(sourceInput === fromInput) nextSlot = "to";
  if(sourceInput === toInput) nextSlot = "from";
  updateSelectionVisuals();
  if(fromInput.value && toInput.value) renderRoute();
}

function pickFromBrowse(name){
  if(nextSlot === "from"){ fromInput.value = displayName(name); nextSlot = "to"; }
  else { toInput.value = displayName(name); nextSlot = "from"; }
  updateSelectionVisuals();
  if(fromInput.value && toInput.value) renderRoute();
}

swapBtn.addEventListener("click", ()=>{
  const tmp = fromInput.value; fromInput.value = toInput.value; toInput.value = tmp;
  updateSelectionVisuals();
  if(fromInput.value && toInput.value) renderRoute();
});

function resolveStation(value){
  const raw = value.trim();
  const v = raw.toLowerCase();
  const enMatch = STATION_NAMES.find(n => n.toLowerCase() === v);
  if(enMatch) return enMatch;
  if(englishOf[raw]) return englishOf[raw];
  return null;
}

// ---------- Build browse: MAP ----------
function buildMap(){
  const rl = I18N[LANG].railLabels;
  const rails = [
    { label: rl.L1, color: "var(--red)", cls: "line-L1", list: LINE1 },
    { label: rl.L2, color: "var(--blue)", cls: "line-L2", list: LINE2 },
    { label: rl.L3trunk, color: "var(--green)", cls: "line-L3", list: LINE3_TRUNK },
    { label: rl.L3a, color: "var(--green)", cls: "line-L3", list: LINE3_BRANCH_A },
    { label: rl.L3b, color: "var(--green)", cls: "line-L3", list: LINE3_BRANCH_B }
  ];
  mapPanel.innerHTML = "";
  rails.forEach(r=>{
    const block = document.createElement("div");
    block.className = "rail-block";
    const labelEl = document.createElement("div");
    labelEl.className = "rail-label";
    labelEl.innerHTML = `<span class="dot" style="background:${r.color}"></span>${r.label}`;
    block.appendChild(labelEl);
    const rail = document.createElement("div");
    rail.className = `rail ${r.cls}`;
    const track = document.createElement("div");
    track.className = "rail-track";
    r.list.forEach(([en])=>{
      const stop = document.createElement("div");
      stop.className = "stop";
      stop.dataset.station = en;
      if((linesOf[en]||new Set()).size > 1) stop.classList.add("interchange");
      stop.innerHTML = `<div class="stop-dot"></div><div class="stop-label">${displayName(en)}</div>`;
      stop.addEventListener("click", ()=> pickFromBrowse(en));
      track.appendChild(stop);
    });
    rail.appendChild(track);
    block.appendChild(rail);
    mapPanel.appendChild(block);
    enableDragScroll(rail);
  });
}

// ---------- Build browse: LIST ----------
function buildList(){
  const rl = I18N[LANG].lineLabel;
  const groups = [
    { label: rl.L1, color: "var(--red)", list: LINE1 },
    { label: rl.L2, color: "var(--blue)", list: LINE2 },
    { label: rl.L3, color: "var(--green)", list: [...LINE3_TRUNK, ...LINE3_BRANCH_A, ...LINE3_BRANCH_B] }
  ];
  listPanel.innerHTML = "";
  groups.forEach(g=>{
    const wrap = document.createElement("div");
    wrap.className = "list-group";
    const title = document.createElement("div");
    title.className = "list-group-title";
    title.innerHTML = `<span class="dot" style="background:${g.color}"></span>${g.label}`;
    wrap.appendChild(title);
    g.list.forEach(([en,ar])=>{
      const row = document.createElement("div");
      row.className = "list-row";
      row.dataset.station = en;
      const primary = LANG === "ar" ? ar : en;
      const secondary = LANG === "ar" ? en : ar;
      const primaryClass = LANG === "ar" ? "arabic" : "";
      const secondaryClass = LANG === "ar" ? "ar" : "ar arabic";
      row.innerHTML = `<span class="${primaryClass}">${primary}</span><span class="${secondaryClass}">${secondary}</span>`;
      row.addEventListener("click", ()=> pickFromBrowse(en));
      wrap.appendChild(row);
    });
    listPanel.appendChild(wrap);
  });
}

// ---------- Build browse: MONORAIL (separate system, reference only) ----------
function renderMonoLine(container, opts){
  const t = I18N[LANG];
  const section = document.createElement("div");
  section.className = "mono-section" + (opts.west ? " mono-west" : "");

  const header = document.createElement("div");
  header.className = "mono-header";
  header.innerHTML = `
    <div class="mono-title">${opts.title}</div>
    <div class="mono-status ${opts.west ? "soon" : "live"}">${opts.west ? t.monoComingSoon : t.monoOperating}</div>
  `;
  section.appendChild(header);

  if(!opts.west){
    const meta = document.createElement("div");
    meta.className = "mono-meta";
    meta.innerHTML = `${t.monoHours}<br>${t.monoDiscount1}<br>${t.monoDiscount2}`;
    section.appendChild(meta);

    const zoneNote = document.createElement("div");
    zoneNote.className = "mono-meta";
    zoneNote.textContent = t.monoZoneNote;
    section.appendChild(zoneNote);

    const zoneGrid = document.createElement("div");
    zoneGrid.className = "mono-zone-grid";
    zoneGrid.innerHTML = [
      [20, t.monoZone1], [40, t.monoZone2], [55, t.monoZone3], [80, t.monoZone4]
    ].map(([fare, label]) => `
      <div class="mono-zone-box">
        <div class="mono-zone-fare">${fare}</div>
        <div class="mono-zone-label">EGP<br>${label}</div>
      </div>
    `).join("");
    section.appendChild(zoneGrid);
  } else {
    const note = document.createElement("div");
    note.className = "mono-meta";
    note.textContent = t.monoWestNote;
    section.appendChild(note);
  }

  const stationsHeading = document.createElement("div");
  stationsHeading.className = "mono-group-title";
  stationsHeading.textContent = t.monoStationsHeading;
  section.appendChild(stationsHeading);

  let lastArea = null;
  opts.stations.forEach(([en, ar, areaEn, areaAr, interchange])=>{
    const area = LANG === "ar" ? areaAr : areaEn;
    if(area !== lastArea){
      const groupTitle = document.createElement("div");
      groupTitle.className = "mono-group-title";
      groupTitle.style.color = "var(--mono-accent)";
      groupTitle.textContent = area;
      section.appendChild(groupTitle);
      lastArea = area;
    }
    const row = document.createElement("div");
    row.className = "mono-row";
    const primary = LANG === "ar" ? ar : en;
    const secondary = LANG === "ar" ? en : ar;
    const secondaryClass = LANG === "ar" ? "ar" : "ar arabic";
    const tag = interchange ? `<span class="mono-interchange-tag">${LANG === "ar" ? interchange.ar : interchange.en}</span>` : "";
    row.innerHTML = `
      <div class="mono-names">
        <span>${primary}</span>
        <span class="${secondaryClass}">${secondary}</span>
      </div>
      ${tag}
    `;
    section.appendChild(row);
  });

  container.appendChild(section);
}
function buildMonorail(){
  const t = I18N[LANG];
  monoPanel.innerHTML = "";
  renderMonoLine(monoPanel, { title: t.monoEastTitle, stations: MONO_EAST, west: false });
  renderMonoLine(monoPanel, { title: t.monoWestTitle, stations: MONO_WEST, west: true });
}

function updateSelectionVisuals(){
  const fromKey = resolveStation(fromInput.value);
  const toKey = resolveStation(toInput.value);
  document.querySelectorAll(".stop, .list-row").forEach(el=>{
    const name = el.dataset.station;
    el.classList.toggle("sel-from", !!fromKey && name === fromKey);
    el.classList.toggle("sel-to", !!toKey && name === toKey);
  });
}

// ---------- Tabs ----------
function activateTab(which){
  tabMapBtn.classList.toggle("active", which === "map");
  tabListBtn.classList.toggle("active", which === "list");
  tabMonoBtn.classList.toggle("active", which === "mono");
  mapPanel.classList.toggle("active", which === "map");
  listPanel.classList.toggle("active", which === "list");
  monoPanel.classList.toggle("active", which === "mono");
  browseHint.style.display = which === "mono" ? "none" : "";
}
tabMapBtn.addEventListener("click", ()=> activateTab("map"));
tabListBtn.addEventListener("click", ()=> activateTab("list"));
tabMonoBtn.addEventListener("click", ()=> activateTab("mono"));

// ---------- Render route on the LED screen ----------
function renderRoute(){
  const t = I18N[LANG];
  const from = resolveStation(fromInput.value);
  const to = resolveStation(toInput.value);
  updateSelectionVisuals();

  const fromTyped = fromInput.value.trim();
  const toTyped = toInput.value.trim();

  if(!from && !to){
    screenEl.classList.remove("show");
    return;
  }
  if((fromTyped && !from) || (toTyped && !to)){
    screenEl.classList.add("show");
    screenEl.innerHTML = `<div class="same-station">${t.invalidStation}</div>`;
    return;
  }
  if(!from || !to){
    screenEl.classList.add("show");
    screenEl.innerHTML = `<div class="same-station">${t.pickBoth}</div>`;
    return;
  }
  if(from===to){
    screenEl.classList.add("show");
    screenEl.innerHTML = `<div class="same-station">${t.sameStation(displayName(from))}</div>`;
    return;
  }

  const found = shortestPath(from, to);
  if(!found){
    screenEl.classList.add("show");
    screenEl.innerHTML = `<div class="same-station">${t.noRoute}</div>`;
    return;
  }

  const { path, lines } = found;
  const stops = path.length - 1;
  const fare = fareFor(stops);
  const segments = buildSegments(path, lines);
  const changeCount = segments.length - 1;

  const segHtml = segments.map(seg => `
    <div class="segment">
      <div class="seg-dot b-${seg.line}"></div>
      <div class="seg-text">
        <span class="seg-line-tag tag-${seg.line}">${t.lineLabel[seg.line]}</span>
        <b>${displayName(seg.from)}</b> → <b>${displayName(seg.to)}</b> · ${stopsText(seg.stops)}
      </div>
    </div>
  `).join("");

  const rush = isRushHour();
  const msg = pick(rush ? RUSH_MESSAGES : CALM_MESSAGES);
  const msgText = LANG === "ar" ? msg.ar : msg.en;
  const msgClass = LANG === "ar" ? "arabic" : "";
  const { weekday, hour, minute } = getCairoNow();
  const weekdayText = t.weekday[weekday];
  const timeStr = `${weekdayText} ${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")} ${t.cairoTime}${rush ? " · " + t.rushHourTag : ""}`;

  const fromDisp = displayName(from);
  const toDisp = displayName(to);
  screenEl.innerHTML = `
    <div class="led-route">${routeWordHtml(fromDisp, 0)}<span class="sep">››</span>${routeWordHtml(toDisp, LANG === "ar" ? 120 : fromDisp.length*16 + 60)}</div>
    <div class="led-meta">
      <div class="led-meta-item"><div class="led-meta-num">${fare}</div><div class="led-meta-label">${t.fareLabel}</div></div>
      <div class="led-meta-item"><div class="led-meta-num">${stops}</div><div class="led-meta-label">${t.stopsLabel}</div></div>
      <div class="led-meta-item"><div class="led-meta-num">${changeCount}</div><div class="led-meta-label">${changeCount===1 ? t.changeLabel : t.changesLabel}</div></div>
    </div>
    <div class="segments">${segHtml}</div>
    <div class="rush-banner">
      <div class="rush-tag ${rush ? "hot" : "calm"}">${rush ? t.rushTag : t.clearTag}</div>
      <div>
        <div class="rush-text-ar ${msgClass}">${msgText}</div>
        <div class="rush-meta">${timeStr}</div>
      </div>
    </div>
  `;
  screenEl.classList.add("show");
}

goBtn.addEventListener("click", renderRoute);

const langToggle = document.getElementById("langToggle");

function applyLanguage(lang){
  // if the current from/to already resolve to real stations, carry them over
  // as the new language's display name rather than losing the selection
  const fromKey = resolveStation(fromInput.value);
  const toKey = resolveStation(toInput.value);

  LANG = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", lang === "ar");

  const t = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.innerHTML = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    el.placeholder = t[el.dataset.i18nPlaceholder];
  });
  langToggle.textContent = t.toggleLabel;

  if(fromKey) fromInput.value = displayName(fromKey);
  if(toKey) toInput.value = displayName(toKey);

  buildMap();
  buildList();
  buildMonorail();
  updateSelectionVisuals();

  if(screenEl.classList.contains("show") && fromKey && toKey){
    renderRoute();
  }
}

langToggle.addEventListener("click", ()=> applyLanguage(LANG === "en" ? "ar" : "en"));

const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

applyLanguage("en");
