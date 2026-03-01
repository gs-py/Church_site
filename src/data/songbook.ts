export interface Song {
  number: number;
  title: string;
  englishTitle: string;
  lyrics: string;
}

export const songs: Song[] = [
  {
    number: 1,
    title: 'Yeshu kartha neene bandu',
    englishTitle: 'Jesus Lord we know thee present',
    lyrics: `1. Yeshu kartha neene bandu
Namma madhyadalide
Ninna mejin hatra koothu
Athma trupthi koduthi
Higaye koodi baruvalli
Entha sreshta kalave
Bere ella ashe bittu
Ninna baji sutheve

2. Pavitrathma preraneyinda
Ninsamuga dhaliyu
Roti thindu pathreyannu
Pana madikolvevu
Muridanda nina deha
Nenu chelda rakthava
Njapthi madi bakthiyinda
Ninnaradisuvevu

3. Enda guruthugalalli
Ninna preethikanuthe
Ondhe roti ondhe pathre
Anyonya suchisuthe
Obhane nam sreshta thale
Navu ondhe dehavu
Ondhe manadinda koodi
Irvadu nin chithavu

4. Bhega baruthene nanu
Sidhavada maneli
Nimman serisuvenendu
Vagdhana madiruthi
Ninna bharavam harisi
Kadidevanandadi
Nammali prarambhisida
Karya koneghanive`
  },
  {
    number: 2,
    title: 'Deenaragi bandideve',
    englishTitle: '',
    lyrics: `1. Deenaragi bandideve
Ninna mathi nindale
Njapthi madi kollutheve
Ninnane oh karthane

2. Krooravada krujemele
Paapa shishke thailide
Aparada baliyagi
Alli prana bittidhe.

3. Ninna deha ellargage
Kottu murisidaythu
Stotradinda roti thindu
Ninna njapthi madvevu

4. Neenu kudidantha pathre
Kopadinda thumbithu
Naavu mangalashirvada
Pathre panamadvevu

5. Namma mele neenittantanda
Preethi karuneyannu
ega navu njapthi madi
Ninnane kondadvevu.`
  },
  {
    number: 3,
    title: 'Ninnannu priya kartha',
    englishTitle: '',
    lyrics: `1. Ninnannu priya kartha
Na sthotra maduve
Ninna silubeya hatra
Na koothu kolluve
Vatreyu seralara
Dhurguna soluthe
Ninondhe bhadra sthana
Nin bhakthalerarghe

2. Aa silube thapa vannu
Nenappu maduve
En athma rakshesalu
Nenella thaledhe
Nenendha priya swami
Oh yesu kristhane!
Na sadha kaladhalli
Nin nambhi baluve

3. Pavitra ninna dheha
Njapak amadalu
Nee kotta rotti yannu
Thegahadu kolvenu
Amulya ninna raktha
Thoruva patreye
Kruthaknja sthuthuyinda
Theghadukoluve

4. En alpa kaladhalli
Nanailli nillade
Anandha lokhadali
Na seri kolluve
Ninna sannidhiyalli
Nirandra baluve
Amitha ninna preethi
Yen prana dharave`
  },
  {
    number: 4,
    title: 'Devasanadha mundeye',
    englishTitle: 'Before the throne of God',
    lyrics: `1. Devasanadha mundeye
Premabdi guru yesuve
Nannathmavannu bidade
Binnaha madvanallave?

2. Howdenna swami alleye
Bhakthana srame thane
Njapaka madi odane
Sahaya koduva nallave?

3. Papiya honegarane
Devaru kandakoodale
Paapigeshikshe kodenu
Endhadu bittu bittanu

4. Athanamulya rakthave
Nan paapa nivareside
Maha pavitra devarege
Saku aa bale rakthave

5. Athana kaykalalliyu
Athana hrudayadalliyu
Yen nama baradadakide
Santhosa padu manave

6. Aa swami sthotra madalu
Oh paapi nen-ayogyanu
Endhamjisuva vayriyu
Yenandaru nananjanu

7. Deva sanadha mundeye
Yen yeshu nanagagiye
Kanisikolluvagalu
Hogendu yaru helalu

8. Nanathanalli eykyane
Athana rakthadindale
Na kollelpatta dasanu
Sadha santhoshisuvenu`
  },
  {
    number: 5,
    title: 'Nodu sabhe kannanethi',
    englishTitle: 'Come thou fount of every blessing',
    lyrics: `1. Nodu sabhe kannanethi
Devalokhadolaku
Allikoothu kondidhane
Namma prana priyanu

2. Mahemeya lokhadinda
Thannane arpisalu
Namagagi devaputra
Yehadalli bandanu

3. Elli himse hasya nindhe
Yella thalikondaru
Ghoravadha silube mele
Bhade pattu sathanu

4. Helalaradastu -kasta
Eshto vyadhe pattanu
Thale kalu kaykalinda
Raktha sorutha ethu

5. Atha namma paapakagi
Thane yaknja vadanu
Atha veeranagi yedhu
Mahema lokha keredhanu`
  },
  {
    number: 6,
    title: 'Gori yolilida yesu rakshaka',
    englishTitle: 'Low in the grave He lay',
    lyrics: `1. Gori yolilida yesu rakshaka
Thaneluva dinava kayuthidha
Goriyan bittedanu
Yesu mruthyim jaya saleyu
Mrutyuvemba sathru gedhu bandanu
Thanna bhaktarondigiruva nendigu
Kristhanu edhanu
Haleluya edhanu

2. Athana gorige,mudreya hakhi
Pahare kadidhru,soth-hodaru

3. Vairi than gaideya,hidiyadhoda
Bedeya murida,en rakshaka

4. Marana kondeye,murithu koodale
Jaya-vijayave en swamige`
  },
  {
    number: 7,
    title: 'Pranapriya nanna kartha',
    englishTitle: 'Sweet the moments',
    lyrics: `1. Pranapriya nanna kartha
Ninna krooje mundeye
Nannu koothu ninna prema
Nodihadi kolluve

2. Ethu suprasannakala
Elli divya nandave
Paapigalamulya mitra
Sadha sthotra maduve

3. Ninna mele nanna paapa
Yesto bhara vagithu
Nanna bhara nege hoythu
Ninna gendu sthotravu

4. Ninna amulya vada raktha
Nanna sudha madidhe
Sakhe bale nanna paapa
Parihara vagidhe

5. Ninna mele egha drushti
Ettidene yeshuve
Nenu swargha nandha dhalli
Serisuva pathiye

6. Yelli ninna krooje hatra
Jaya dwani gayyuvee
Mruthyuvina bandhavanna
Gedhe sarva sakthanu

7. Swami!nanna balavagu
Yella paapa shodhane
Nanu ghedhu ninna tholu
Athukondu hoguve`
  },
  {
    number: 8,
    title: 'Neenu bharvavaregu',
    englishTitle: 'Till He comes! Oh let the words',
    lyrics: `1. Neenu bharvavaregu
Parokhavidhu nanagu
Prathya-shavaguva kalavu
Begha prapthavagwadu
Yesu nanna apthane
Begha baa nangageye

2. Priya jana hodaru
Aptha mitra bittaru
Nenu hatra nilluve
Santhi mathanaduve
Ella thale kolluve
Nenu barvavaregu!

3. Ninna savin nenappu
Egha maadi kollalu
Bandhe divya karthane
Maathanadu nanage
Ninna dyana maduve
Nenu barvavaregu!

4. Ninna divya dehava
Rotti gurthisuthade
Mathre yalli rakthava
Suchisuva rasava
Nodi sthotra koduva
Nenu barvavaregu!

5. Dhari sottagidharu
Vayre honche kadaru
Nerevagu karthane
Hastha needu nanage
Begha baa yen apthane
Ninnanathu kolluve`
  },
  {
    number: 9,
    title: 'Krooje dyana maduthene',
    englishTitle: '',
    lyrics: `1. Krooje dyana maduthene
Enda preethi thoruthe
Pancha gaya noduthene
Yesu swami yalliye

2. Swalpa hothu nindu nodwe
Hechu nodalarenu
Ayyo,nanna ella srame
Yesu thane thaldanu

3. Krooje hatre hogalage
Dhorethasirvadavu
Yesuvannu nodalage
Nitya santhi sikkithu

4. Allle ninthu noduthene
Divya raktha dhareya
Athaninda honduthene
Pavitrathma santhiya

5. Madalenu kodalenu
Ninna divya sevege?
Helathiralaradastu
Preethi divya preethiye

6. Athma prana dehavannu
Ninna divya sevege
Sthira mana dinda thandu
Baleyagi koduve`
  },
  {
    number: 10,
    title: 'Kruthaknja bale tharuve',
    englishTitle: 'Now in the song of greatful praise',
    lyrics: `1. Kruthaknja bale tharuve
Yen yesu swami balege
Yellava saredaydanu
Yen thandu sthotra madwenu

2. Athanu sarva shakthanu
Athanu sarva ballanu
Sukarya madwa mitranu
Yen thandu sthotra madwenu

3. Athanu preethi estendu
Na hele thiralarenu
Athanu athmadathanu
Santoshadinda hadwenu

4. Nanenda kasta dholage
Biddagyu ennu haduve
Yellava sare madwanu
Yen thandu sthotra madwenu

5. Athana swargha-anadhake
Nanaeresada eruve
Athana karya vellavu
Sthotrake yogyavadavu`
  },
  {
    number: 11,
    title: 'Dhukida manushyanu',
    englishTitle: 'Man of sorrows, what a name!',
    lyrics: `1. Dhukida manushyanu
Embha deva magahnu
Nanaghagi sathanu
Halleluya enda kartha!

2. Ninde bade shikseya
Nanagagi thaleda
Thanna raktha chellida
Halleluya enda kartha!

3. Dhosha paapa rahitha
Saktheheena nannanna
Preethiyinda ethida
Halleluya enda kartha!

4. Silube mele dhushttaru
Athanannu ettaru
Thirethella andhanu
Halleluya enda kartha!

5. Swargha lokha keredha
Thande hatra seredha
Nanagage baruva
Halleluya enda kartha!

6. Atha Ghana rajanu
Atha nondegirvenu
Sadha kala hadwenu
Halleluya enda kartha!`
  },
  {
    number: 12,
    title: 'Kartha yava reethiyinda',
    englishTitle: '',
    lyrics: `1. Kartha yava reethiyinda
Ninna sthotra nadwenu?
Ninna karunathisaya
Bhuddi minchihodadhu
Nararu nin krupeyannu
Vivaresarareru
Halleluya nitya sthotra
Ninaghenna thandeye!

2. Nanu ketta gunadindha
Paapa kolagadenu
Ninna-apara krupeyinda
Pashchathapa pattenu
Karuna kathakshavulla
Ninna hatra seredhe
Halleluya nitya sthotra
Ninaghenna thandeye!

3. Poorna anugrahadinda
Neenu nanna nadesi,
Nanu huttidandhi nindha
Preethi thorisuthidhe
Ninna preethigandhyavilla
Oh maha dhayabhdiye
Halleluya nitya sthotra
Ninaghenna thandeye!

4. Nanna gunadha pareshe
Mada nenu yochisi
Ajimdhagya krupe shikshe
Nanagundu maduthe
Athe negha?ninna dasa
Ninna mathu keluve
Halleluya nitya sthotra
Ninaghenna thandeye!`
  },
  {
    number: 13,
    title: 'Silubhe mruthu yesuve',
    englishTitle: 'Saviour we remember thee!',
    lyrics: `1. Silubhe mruthu yesuve
Nanna meleghagiye
Nenu thaldharinale
Ninna bhajisuve.

2. Ninna ghora mruthiya
Ninna apara dhayava
Thori bandha preethiya
Nodi bhajisuve

3. Andhaghara muthithu
Divya raktha chellithu
Nanna paapamuchithu
Ninna bhajisuve.

4. Vayreyindha kattava
Janarindha himseya
Thali ghedhubhandedhe
Ninna bhajisuve

5. Mruthyuvina kodiya
Kithu ghoregellava
Ninna bhala nodidha
Nanubhajisuve

6. Ninna maranavannu
Na prasidhe madwenu
Ninna preethisuvenu
Ninna bhajisuve.`
  },
  {
    number: 14,
    title: 'Rajadhirajane, enathmadharane!',
    englishTitle: 'Thou whose Almighty word',
    lyrics: `1. Rajadhirajane,enathmadharane!
Sthotrarhane!nin rakthadindale
Paapada horeye,sampoorna hogide
Rakshakane!

2. Rajadhirajane bhakthara mitrane
Ne matrave hrudaya kanike
Hondhalu yogyane,preethige
patrane,yen yesuve!

3. Rajadhirajane!ninaknjeyandeye
Naneghale, subhavadindalu
Deenathwadindalu
Ninna kondadwenu,athyapthane!

4. Rajadhirajane!bhaktharaguruve
Kristhesuve sthotrada baleye
Ninnavarendale,devadidevane
Hondheghale!

6. Yesu ne matra papege
Swarghada marghave
Nenegha namma keertheyu
Nityamma ganave`
  },
  {
    number: 15,
    title: 'Yesu nannathma smarane',
    englishTitle: 'Jesus the very thought of thee',
    lyrics: `1. Yesu nannathma smarane
Nannathma thumbuthe
Ninna samoga seralu
Nanna abhilasheye

2. Rakshakane! nin namavu
Namellaralliyu
Amulyavada rathnave
Sudhaparacheyu

3. Sudharege nersheye
Bhaktharanandave
Papige divya sharana
Santhidayakane!

4. Ninnannarasuvavarge
Nenenda mitranu
Yarannu thalladavane
Ba annuvanu

5. Nin hatra bandavarge
Hithavu enedhe?
Helalagada bhagyavu
Samprapthisuthade`
  },
  {
    number: 16,
    title: 'Kalavu ghadisuthe',
    englishTitle: 'The sands of time are sinking',
    lyrics: `1. Kalavu ghadisuthe
Enswami bharvanu
Nireksheyinda nithya
Ethuru noduwenu
Ee bhooprayanadhalli
Kaneereshtidharu
Swargha santhosadhalli
Kadeli servanu

2. Kristhanu nijha thirtha
Jeevadha bhugheyu
Howdhathanalli matra
Samthipthi ervadu
Nanelli athana nambhi
Anandha golluve
Aa ramya lokhadhalli
Samthripthi hondhuve

3. Swamiya lokhavellu
Abhayavilladu
Ellindhaa hogi bittu
Nithyaalli ervanu
Nannannu preethisuva
En swami bharvanu
Aa lokhadhalli atha
Sampoorna karthanu

4. Aghora silubeyalli
Dayalu kristhanu
Thannannu paapa bhali
Arpisikottanu
Athanu sthotra hondha
Athyandga yogyane
Endendhigu kondhada
Yellinda hoguve

5. Ghana kereettavalla
En swami moghava
Nanodi adha bidhu
Kondaduve sadha
Ha! Gayalpatta kartha
En athma dharave
Aa deshada prabhava
En kartha matrave`
  },
  {
    number: 17,
    title: 'Ha jajal patta yesu',
    englishTitle: '',
    lyrics: `1. Ha jajal patta yesu
En priya karthane
Nin akalu kaikalannuu
Bandiga thorisu
Yahova ninna jaja
Santhosa pattanu
Navadda bidhu ninna
Arahdhisuvevu

2. Oh karthanada yesu
Nin megin meleye
Ee roti pathre yannu
Ne haresenayya
Ninetha divya roti
Nin bhakthalerargu
Ninnannu ella kala-di
Sthuthisuvevu

3. Namma-athmakala munde
Enadru idhare
Adhannu hogamadu
Nin athma dindale
Nin bhojanava nega
Madalu bandevu
Nin divya mugha vannu
Oh kartha thorisu

4. Oh jeeva daranada
Nan athma priyane
Ninna sannideyalli
Samtrupti eruthe
Eegha nin preethiyinda
Nammannu thumbisu
Nammalli ninna vakyava-
Nele golisu`
  },
  {
    number: 18,
    title: 'Ne kotta bhojanada',
    englishTitle: 'Sweet feast of love divine',
    lyrics: `1. Ne kotta bhojanada
Ee roti patreye
Ninnathishaya krupeya
Thoresuthiruthe

2. Paapige bhanda sava
Thalida rajane!
Kroojelli bitte pranava
Oh divya bhaleye

3. Ee rottiyalli nanu
Palannu honduve
Nee jeeva rotti nangu
Na harsha golluve

4. Ee patre ninna raktha
Suchisuthiruthe
Ee rakthadinda nan paapava
Sampoorna muchidhe

5. Nin athi preethiyalli
Santhosa paduve
Nin mughavannu nodalu
Samthripthiyaguthe

6. Nanalli sadhakala
Ninandhe aghuve
Amitha ninna krupeya
Kondadutheruve`
  },
  {
    number: 19,
    title: 'Mullu mudi thalegu',
    englishTitle: '',
    lyrics: `1. Mullu mudi thalegu
Silube bhade mayyallu
Thalekonde swamiye
Nanaghage allave?

2. Nanna bhara hothidhe
Nanna shikshe thindedhe
Endha kastha bhadeye
Bithu ninna meleye

3. Ninna paravagiyu
Yaru nillalillavu
Nenu alli obhane
Honeyagi nindhede

4. Thandeyadha devaru
Ninna bittu hodhanu
Dwesha bhade kathalu
Eve matra edhavu

5. Nanna priya karthane
Nene nanna aasare
Ninna haghe obhanu
Yellu sikka laranuu

6. Swamiye ee preethige
Bhadhalenu koduve!
Rakna chinna kottaru
Etha keedu aghadu`
  },
  {
    number: 20,
    title: 'Lakhandra dhanava',
    englishTitle: 'Not all the blood of beast',
    lyrics: `1. Lakhandra dhanava
Arpisi kottaru
Paapishtta manasudhiyu
Hondhalikagadhu

2. Krishthesuvu thane
Sakhada yaknjavu
Amulya rakthadindale
Nammannu kondanu

3. Ninnannu nambhuve
Oh divya honeye
Aghoravada paapighe
Asrayavu nene!

4. Rakshene madedhe
Prapanchakageye
Nammaathma dapthanagidhe
Oh prana priyane!`
  },
  {
    number: 21,
    title: 'Oh parimala namave!',
    englishTitle: 'How sweet the name of Jesus sounds',
    lyrics: `1. Oh parimala namave!
Krishesu swamiyu
Nirbhaya dhayrya-dharane
Ee olle hesaru

2. Papishttanandha gayake
Mulamu hakuthe
Ayasa vulla athmake
Visrandhi koduthe

3. Ee namave viswaseghe
Asraya sthanavu
Nanambhikondee durghave
Krupa bhandharavu

4. En arase pravadheye
Pradhana yachaka
En divya kartha ninage
Anandha sharana

5. En dendigu na bidenu
Nin nama smarane
En ragha savinalliyu
Ye sreshtta hesare`
  },
  {
    number: 22,
    title: 'Ascharyavada silube',
    englishTitle: 'When I survey the wondrous cross',
    lyrics: `1. Ascharyavada silube
kannitu drustisidare
elokada mahathwavu
bari huchatavadadu.

2. En yesu swami obane
amulya raktha nanage
nanathanannu kandare
berella bagya sunyave.

3. Dehatmadalli athanu
esto santhapa pattanu
edella nana goskara
kattaksadinda thalida.

4. E divyavada prithige
Na badalenu koduve
Sampathu prana yavathu
Kotagyu ennu saladu`
  },
  {
    number: 23,
    title: 'Ellaru adha belali',
    englishTitle: 'All hail the power of Jesus name',
    lyrics: `1. Ellaru adha belali
Gambira namake
Kiritavittu hadali
Ne balu…Yesuve

2. Emmaneul patta kastavu
Eshto oh sabaye
Nirandravagarabadisu
Ne balu..Yesuve

3. Bhoopara sainya koodali
Mahathu karthage
Sashtanga biddu kogale
Ne balu..Yesuve!

4. Nanalli koda prabhuve
Ninondegeruve
Endendigu nan haduve
Ne balu…Yesuve!`
  },
  {
    number: 24,
    title: 'Nannannu yesuve snehesidhe',
    englishTitle: 'Saviour thy dying love',
    lyrics: `1. Nannannu yesuve snehesidhe
Nanenu ninaghe sallisali
Preethiya maduve,dasanagheruve
Hrudhaya kanike arpisuve

2. Melana lokhadhol,aluthidhe
Deva samooghadhol bidhuthidhe
Ninna viknjapane siddiyakoduthe
Paapiya kookighe rakshakane

3. Dhinalu karthane,hatravidhe
Bekhadhadarane koduthedhe
Ninnannu bidadhe endendu nambuve
Sthiravagiruve jeevanthyake

4. Divya vimochaka sadhguruve
Paapighe asraya nee matrave
Sashttanga verege ninnannu vandisi
Nirantra sthuthisi sevesuve`
  },
  {
    number: 25,
    title: 'Jaya jaya vijaya swamige',
    englishTitle: '',
    lyrics: `Jaya jaya vijaya kristhage
Jaya jaya vijaya swamige
Jayasali yesu swamige

1. Papathmaru athana
taltsyaragaidaru
Eegha swargha pathiyadanu

2. Kiretta mullinintha
henethukottaru
Mahemma kiretavayithu

3. Papishtta mitranendu hesarittu
nakaru
Aa nama mana hondithu

4. Virodigaligagi swaprana
kottanu
Karuna samudranadenu

5. Bhoolokha dalli kasta
sahisikondanu
Paralokhadarasadanu

6. Adayryapadadiru oh
kristhabakthare
Rajadiraja yesuve

7. Lokhapavadavenu? Tathkala
matrave
Vijayada dina baruthe`
  },
  {
    number: 26,
    title: 'Sudha sudha sudha',
    englishTitle: 'Holy holy holy',
    lyrics: `1. Sudha sudha sudha
Sarva saktha deva
Harshadinda hadi
Kondadikolluve
Sudha sudha sudha
Krupa poorna sagra
Oh triyeka deva
Sthuthi ninage

2. Sudha sudha kartha
Paralokha sainya
Ninna munde biddu
Aradisuvudhu
Navu koda ega
Aka chitha dinda
Raghavannu ethi
Sthuthisuvevu

3. Ninna suthu muthu
Moda anthagara
Vastradanthe bandu
Avarisidharu
Sudha neethi preethi
Ninnallundu nithya
Ninna bakthargella
Bheethi ellavu

4. Sudha sudha sudha
Eka jaganatha
Serakodadanthe
Prakasadholidhe
Nithya gana mana
Sarvashristiyinda
Neenu mathra Honda
Yogya nagedhe`
  },
  {
    number: 27,
    title: 'Paapiyadha nannannu',
    englishTitle: '',
    lyrics: `1. Paapiyadha nannannu
Snehisidha yesuve
Ghana mana sthothravu
Ninna sreshtta namake

2. Paapada sankoleya
Dayadinda bichedhi
Ghoravada shiksheya
Parihara madidhe

3. Samadhana nambhike
Paripoorna-nandhavu
Ninna rakthadindale
Nanaghe untadevu

4. Nijavada bhagyava
Sthiravada maheme
Nithyavada jeevava
Naa nininda honduve

5. Paapiyada nannannu
Snehisida yesuve
Ghana mana sthothravu
Ninna sreshta namake`
  },
  {
    number: 28,
    title: 'Ninna sthothra yesuve',
    englishTitle: '',
    lyrics: `1. Ninna sthothra yesuve
Endhu endu haduve
Sarva lokhadarasa
Neenu nanna rakshaka

2. Ninna aknjeyindale
Bhoomiyalli huttidhe
Ninna athma dindale
Poorna janma hondede

3. Saapa grastha nanage
Neenu shapa thaledhe
Sava savindhale
Ghedhe nanaghageye

4. Ninna ghora kashtavu
Nanna samadhanavu
Ninna kroora mruthyuve
Nitya jeeva nanaghe`
  },
  {
    number: 29,
    title: 'Evagha bhadra sthanake',
    englishTitle: '',
    lyrics: `1. Evagha bhadra sthanake
Thandhitti nanna langhara
Adhara sthira nanage
Krishthesuvina marana
Bhooparalokha biddaru
Nanendhu bhaya padenu

2. Apaara preethi kandenu
Sampoorna-anandha vayithu
Anandha daye sikkithu
Nirandraharshisuvenu
Aghora paapavidharu
Divya kattaksha thappadhu

3. Amulya raktha chellidha
Pavitranada guruve
Saswatha santhi koduva
Samarthyavulla karthana
Amithavadha krupeyu
Ninnintha nanaghayithu

4. Ninna mughadradindale
Nanathma kshemahondede
Oh pranapriya yesuve
Ninnannuu athukolluve
Bhooparalokhabiddharu
Nanenedhu bayapadenu`
  },
  {
    number: 30,
    title: 'Undo ninaghe ayasa',
    englishTitle: 'Art thou weary? art thou languid?',
    lyrics: `1. Undo ninaghe ayasa
Besarekeyu?
Yesuvina hatra bandhu

2. Athanariyuva hage
Enu guruthu?
Pakke kalu kayghalalli gayavu.

3. Rajanandhe siradhalli
Mukuttavunde
Nijave kireetta untu munllindhe

4. Atha yava bhahumana
Elli kottanu
Sane dhukka sane kashtta kanneru

5. Ninna thallibittanenu
Haresennalu?
Bhoomyakasha bidhodhagyu
Thallenu.

6. Nambhi sayresidhavange
Unte bhagyavu?
Untu endu devavakya annuthe`
  },
  {
    number: 31,
    title: 'Oh krupa sampoorna dayaparane',
    englishTitle: '',
    lyrics: `1. Oh krupa sampoorna dayaparane
Ninnamavu estho athyuthamave
Prapanchava nenu vimochishiddhu
Maha athisayadha karuneyu

2. Sanyaya pramanava nodidhare
Pranakjne nirnaya samprapthisuthe
Ninascharya vada kadakshavondhe
Nanolake nambhike huttisuthe

3. Ha yesuve yen divyavimochakanu
Swarakthava paapake chellidhanu
Aa rakthavu nanage sakhadadhu
En paapadhada dhosavu hariyadhu

4. Oh thandhe kumara pavitrathmane
Athyanthopakare papishtarege
Na sashtangha biddhu aradhisuve
Premabhdiyadha dayaluvanne`
  },
  {
    number: 32,
    title: 'Na paapiye howdhu',
    englishTitle: 'I hear the saviour say',
    lyrics: `1. Na paapiye howdhu
Akramagharane
Swaneethi ellavu
Narghapatrane
Yesu swamiye!
Hone-yadhanu
sandhidhe
Krishtesu kottanu

2. Na krupeyindale
Rakshesalpattanu
Devakumarane
Udharesiddanu
Yesu swamiye…

3. Na sayuvaghalu
Nirbhaya vaghuthe
En hatra shuranu
Edhane allave?
Yesu swamiye…

4. Na mokshakeralu
Yen ragha yesuve
Kireetta hondwadhu
Athana krupeye
Yesu swamiye…`
  },
  {
    number: 33,
    title: 'Sthotradinda haduva',
    englishTitle: '',
    lyrics: `1. Sthotradinda haduva
Thande magha athmana
Veeneyindha athana
Sthuthi sthotra madona
Thandevadyadindalu
Prabheyulla swamighe
Hade padi keerthane
Sthotradinda haduva
Thande magha athmana

2. Bhaktharella hadire
Devaralli harshise
Nana vadhya baresi
Devasthothra madiri
Poorna manadindalu
Thalamela dindalu
Hosaragha ethire
Sarvakala madiri
Sthotradinda haduva
Thande magha athmana

3. Swargha lokha saynyave
Sarva lokhaprajeye
Chikka prayadhavare
Prayahonda janare
Eka sabhadindalu
Sthotra hadirelare
Surya thare chandrare
Hadi sarva srishtiye
Sthotradinda haduva
Thande magha athmana`
  },
  {
    number: 34,
    title: 'Santha yesuve, ninna hageye',
    englishTitle: '',
    lyrics: `1. Santha yesuve,ninna hageye
Yaru sarva lokhadhalli
Ella naraputraralli
Athi sreshttane
Santha yesuve

2. Nanna salavu,edhe kodalu
Neenu dhodda preethiyinda
Nannannella dhoshadinda
Sudhamadidhe
Sala sallies

3. Athi thejane,preethiyindale
Nararalli naranagi
Neecha satru janakagi
Ninnannarpisi
Yaknjamadide

4. Divya shoorane,mruthiyolake
Sere,dhushtta satruvannu
Jayisi namma shiksheyannu
Anubhavisi melekeredhe

5. Sadhpravadheye,sarvarajane
Ninna chitha kopputhene
Ninna shishyanaghedhene
Ninna padave,jadhi nanaghe`
  },
  {
    number: 35,
    title: 'Priyayesu swamiye',
    englishTitle: 'Everlasting love',
    lyrics: `1. Priyayesu swamiye
Ninna sthotra haduve
Ninna daya nanage
Eshtascharya vagide!
Ninna chithadindale
Ehadhalli huttidhe
Ninna krupeyindale
Paradhalli seruve

2. Paapighalikoskara
Thalikonde shapava
Jeeva yaknjavarpisi
Jeeva untu madidhe
Ghore gharbhadholage
Neenu seredhaghale
Maranadha jayavu
Bhinna vagi hoyithu

3. Ninna dheha yesuve
Athmaharavagide
Ninna rakthakarthane
Jeevapana namage
Priya yesu swamiye
Ninna sthotra maduve
Ninna daya nanage
Athyavashya vagide`
  },
  {
    number: 36,
    title: 'Hagye dayavulla yesu',
    englishTitle: '',
    lyrics: `1. Hagye dayavulla yesu
Ninna krupe hadale
Ninna preethige takkashtu
Sthotra hagye madale
Nanu kurudana hage
Mosa margha hidithe
Dina dina jarebidhe
Nashanada hathrake.

2. Dhoora hodhe dhooradindha
Neenu nanna karedhe
Krupeyinda ninna sabdha
Kela manasu kotti
Endha dayavannu hondhe
Paschathapa pattenu
Athi thivragi oodi
Ninna hathra bandhenu

3. Ega nanagesto sugha
Estandhavayithu
Divya rakshakana mugha
nodi estotrupthiyu
Sarva paapa parihara
nanaghe untayithu
Sthiravadha yellla bhagya
Anubhavisidanu

4. Ninna dayaviruvalli
nanagenu bhayavu?
Neenu kayuthiruvalli
Nanagenu chintheyu?
Jaya! jaya! Hechechagi
Ninna rajya barali
Jagadradrakshaka! Ellelli
Sthuthi ninagagali`
  },
  {
    number: 37,
    title: 'Dayavulla yesu kartha',
    englishTitle: '',
    lyrics: `1. Dayavulla yesu kartha
Divyavada snehetha
Avamana ,rakthasnana
Nanagage hondede

2. Athi dhukka, athi bheethi
Dhushttarinda thalidha
Ninna dhukka, nanna sugha
Devara kumarane

3. Ninna kashttavada savu
Nanna nitya jeevavu
Ghana mana,nithya rajya
Neenu honda yogyanu`
  },
  {
    number: 38,
    title: 'Jeevakanthi yannu bittu',
    englishTitle: '',
    lyrics: `1. Jeevakanthi yannu bittu
Raktha maya yesuve
Mullina kirita thottu
Ghayavada thaleye
Dweshavestu
Nideyesto
Ninna mele bandive(2)

2. Nenu aatha karanavenu
Nanna dusta paapave
Nenu sathu hodadenu
Nanagida shapave
Dukhadalli
Raktha Chelli
Jeeva kotti nanage(2)

3. Ekhe ninna mele kasta
Dukka shrame bidhavu
Nithyanannu jeevanasta
Eke hidukondithu
Nanna droha
Nanna shikshe
Ninna mele thagithu(2)

4. Ninna shuda rakthadinda
Nanna paapa hoyithu
Ninna athma shakthiyinda
Ella karya sadyavu
Kadeyalli,Nenedalli
Nanu seruvavanu(2)`
  },
  {
    number: 39,
    title: 'Ninna preethi karthane',
    englishTitle: '',
    lyrics: `1. Ninna preethi karthane
Njapthi maduvadake
Bhandedene, yesuve!

2. Ninna nama smarane
Namaghe adharane
Jeevavulla karthane

3. Rottiunnuvaghalu
Ninna savu nenappu
Manadhalli huttisu

4. Draksharasa hoyallu
Neenu raktha chellidhu
Njapti mada bhodisu

5. Lokhada vimochaka
Neenu namma rakshaka
Nityavada asraya

6. Neenu namma bhagyavu
Paapa dhosha hoyithu
Mokshandha nammadhu`
  },
  {
    number: 40,
    title: 'Thannannu priya yesuvu',
    englishTitle: '',
    lyrics: `1. Thannannu priya yesuvu
Arpisa kotta erula
Kayalli rotti thegadu
Thanna-sarvada kottanu

2. Ee rotti nann dehavu
Nimma nimitha muridhu
Nanna njapthimadalu
Bhojana madirandanu

3. Aamele atha heledhu
Ee patre nanna rakthavu
Paaparthakagi chellidhu
Paanava madi yellaru
Oh yesu ninna aknjeya
Kaykolla sakthe kodega
Swamughavannu thorisu
Nammannu asirvadisu`
  },
  {
    number: 41,
    title: 'Kristhesu swamiyu',
    englishTitle: 'We bless our saviour\'s name',
    lyrics: `1. Kristhesu swamiyu
Paapishtargageye
Swaprana kottu bittanu
Vimochakathane

2. Ha!ghaya pattanu
Premabdhe karthanu
Ee rotti unnuvaghalu
Aa ghaya dyanisu

3. Drasheya rasava
Pavana madalu
Krishthesu raktha chellida
Preethiya nenasu

4. Ee meja seralu
Ayogya nadenu
Kristhesu kotta yaknjavu
Sampoornavadadu

5. Krishthesu namava
Navega sthuthisi
Kondadi Ghana maduva
Empagi hadutha`
  },
  {
    number: 42,
    title: 'Devarashirvadadinda',
    englishTitle: '',
    lyrics: `1. Devarashirvadadinda
Bhalu sothu sikkuthe
Nanna swantha yathavella
Poornavagi vyarthave
Bhudhi bhala kala sothu
Kartha thane kottanu
Yavudhannu swanthaventhu
Endhu helararenu

2. Hatharalli ondhu amsha
Devabhagavagide
Hege koduvande atha
Aknje madwalillave?
Mana poornavagi nanu
Ashtu kodathakkade
Deva katleyannu endu
Mirabheda manave!

3. Devarajya balagholla
Chintheyunto ninage?
Edhakaki hana thrana
Kodabekku thappade
Yellavannu karthangagi
Kodabekku nyayave?
Swalpa baga athangagi
Koduvadakagade?

4. Devarendu lobheyannu
Mechekollararenu
Nyayavagi koottavannu
Asirvadisuvenu
Heralavagi koduvava
Nashta hondalarenu
Hechu melu devarinda
Nijavagi hondwanu.`
  },
  {
    number: 43,
    title: 'Ondhu dhina kartha yesu',
    englishTitle: '',
    lyrics: `1. Ondhu dhina kartha yesu
Ninthu noduthidhanu
Thamma kanekegalannu jana
Hakkuthidharu
Avaralli mugyavagi
Badanade yadha sthre
Thanagidhadella thandhu
Kottalu santhoshadi

2. Kartha ekkeyannu nodi
Mechi bada vidave
Bere ellarginda hechu
Kottidhale kanike
Endelidha. Avalandhe
Namagirvadellava
Karthesuvegagi kottu
Mechikeya hondhuva

3. Kartha begha baruthene
Endhu hele hodharu
Nimma karyada prakara
Prathifala tharvenu
Athan sreshtta mugha nodi
Poorna trupthi yakuthe`
  },
  {
    number: 44,
    title: 'Paapigagi satha yesu',
    englishTitle: 'Praise my soul',
    lyrics: `1. Paapigagi satha yesu
Meghadholu baruva
Thanna kooda tharuvanu
Saviraru dhoothara
Halleluya!
Krishtha puna baruva

2. Pancha gaya kanuvavu
Thejapoja dehadi
Agha harsha paduvaru
Muktharella nityadi
Jayachinne
Nodi harshisuvaru

3. Krishtha!peeda verekontu
Sathruvannu jayisu
Sarva bhala manahondhu
Bhajisalu sarvaru
Halleluya!
Rajyavannu nadisu`
  },
  {
    number: 45,
    title: 'Yesuvu thirugi baruvenu',
    englishTitle: 'Jesus is coming',
    lyrics: `1. Yesuvu thirugi baruvenu
Namage mathannu kottedhanu
Yarathanannu nambhi
Sathoghidharu
Ondhege tharuvanu
Yesuvu thirugi bharuthane
Thirugi bharuthane

2. Yesuvu thirugi baruvenu
Nammannu meleke ethuvenu
Priyara kooda naviruvevu
Karthana jhotheyallu
Samastha janake saronavu
Thirugi bharuthane

3. Yesuvu thirugi baruthane
Siddaragiri sahodharare
Nambhike shuddathwa keluthane
Thanna swajanaralle

4. Aghale karthanadesuve! Baa
Poorna vimochane lokhake tha
Ninnannu sandhisi ghanavella
Ninage sallisuva`
  },
  {
    number: 46,
    title: 'Samadhiyolaghe',
    englishTitle: '',
    lyrics: `1. Samadhiyolaghe,
ee deha beluthe
Mannagi hogi,hulake aharavaguthe

2. Adagyu mruthyuvu
Endendu jaysadu
Sadbhakthanannu ghoriyu
nasisalaradu

3. Samadhi jayisida krishthesu baralu
Hunitta namma dehava
Roopandra madwenu`
  },
  {
    number: 47,
    title: 'Yesu karthanedhanu',
    englishTitle: 'Christ the Lord is risen today',
    lyrics: `1. Yesu karthanedhanu
Halleluya!
Mrutyu sothuhoyithu
Halleluya!
Jeeva savimdhustede
Halleluya!
Jaya pradha kristhage
Halleluya!

2. Lokha rakshakanathane
Halleluya!
Nambhirella janare
Halleluya!
Paapa harisidhanu
Halleluya!
Nitya bhagya kodwenu
Halleluya!

3. Namma divya arasu
Halleluya!
Sthotra Honda yogyanu
Halleluya!
Namaskara madiri
Halleluya!
Ragha yethi hadiri
Halleluya!`
  },
  {
    number: 48,
    title: 'Ghattyadha bhandeyalli',
    englishTitle: '',
    lyrics: `1. Ghattyadha bhandeyalli
Samadhi odhedhu
Amulya bheejavalli
Yosephanittanu
Aa ghore lokhadhalli
Visheshavadhaddu
Aa jeeva bhoomiyalli
Uthkrishtavadadhu

2. Truthiya dhinadhalli
Udhayavaghalu
Aa beja bhoomiyinda
Uthpathiyayithu
Aa dhinadhalli jeeva
Savindha huttithu
Aa dhinadhalli savu
Sadhenavayithu

3. Samadhiyalli sere
Oh yesu kristhane
Ne jeeva marghavannu
Prasidda madidhe
Ninnalli drudavagi
Vishwasisidhare
Samadhiyalli sera
Nananchadhiruve

4. Ee dhehake samade
Vishrande sthalavu
Nanathma vache datti
Ujeevisuvadhu
Ne mruthyuvina sakthi
Melghonde karthane
Nanu ninnalli nambhi
Vijaya honduve`
  },
  {
    number: 49,
    title: 'Howdowdu nijave',
    englishTitle: '',
    lyrics: `1. Howdowdu nijave
Krishtesu edhanu
Mahathinidale
Samadi bittanu
Raghethuva, pishachanu
Soth-hodanu jayothsave

2. Vimokthaganavu
Empagi barese
Pradhana dhootharu
Sashtanghaverage
Bhalendhigu,oh prabhuve
Ne yogyane endendaru

3. Manushya makkale
Sanjeetha hadire
Rakshana bhadyare
Anandha padiri
Nevellaru oh prabhuve
Ne yogyane bhalendigu

4. Karthade karthane
Nammannu ebhisi
Swahastadindale
Keretta koduve
Endendigu oh prabhuve
Ne yogyane haduvevu`
  },
  {
    number: 50,
    title: 'Divyashirvadada maale',
    englishTitle: 'There shall be showers of blessing',
    lyrics: `1. Divyashirvadada maale
Eliya maduvenu
Embhavisheshada varthe
Manana madipenu
Aa divya maale
Eliya madalegha
Ninnannu keluve thande
Nannan-nadhareseyya

2. Maaleya dhoda susabhdha
Alalli kelisuthe
Namaghe haniyu matra
Melaghe bheluthade

3. Divya vagdhanaghalannu
Krupeyin palisidhe
Prarthane keluvenendu
Dayryava huttisidhe

4. Nannendha maaleya kelu
Maleya koduvenu
Embha suvaghdhana
Thandeye nambhuvenu

5. Ninna sukaruneyinda
Alpana prarthaneya
Lalisi uttaravannu
Palisi nadesayya`
  },
  {
    number: 51,
    title: 'Devra munde prathane',
    englishTitle: 'This the blessed hour of prayer',
    lyrics: `1. Devra munde prathane
Madwa kalavidu
Denaragilla kudi
Bedikolvevu
Drudavadha manasu
Eralagathyavu
Prarthanasakti yinda
Manas thrupthi aakvadu

2. Devra munde prarthane
Madva kalavidu
Pranapriya rakshaka
Sameepasthanu
Namma neegha kelvanu
Uthra koduvanu
Pratanasakthi-yinda
Mana shanty akvadu

3. Devra munde prarthane
Madva kalavidu
Shodakana balavu
Vyartha madalu
Yidhu thakka samaya
Divya sandarbavu
Prarthana sakthiyinda
Mahat karya vakvadu

4. Devra munde prarthane
Madva kalavidu
Navu kelva sahaya
Aathanivanu
Navu dhay-ryadindalu`
  },
  {
    number: 52,
    title: 'Kartha echarisu',
    englishTitle: 'Revive thy work oh Lord',
    lyrics: `1. Kartha echarisu
Nin makkalellaru
Nin mathukala kelalu
Bandegha mathadu.
Nammaella ralliyu
Subakthi hechisu
Nee karyavella nammallu
Sampoorna madidaru.

2. Nammanechirisu
Nin bala thorisu
Nin prithi dayeyindalu
Nammannu thumbisu.

3. Nammu prayoghisu
Nammanu nadisu
Anekaranne sabegu
Baralu prerisu.

4. Ninna sunamavu
Ghanava hondhalu
Nee nammanella nadisu
Puna rujjivisu.`
  },
  {
    number: 53,
    title: 'Nanathma surya kristhane',
    englishTitle: 'Sun of my soul thou saviour dear',
    lyrics: `1. Nanathma surya kristhane
Sajyothi nenu nanaghe
Ninna samogha kanalu
Nagae ratreyellavu

2. Aa mugha muchuvadake
Bhoomanchu eradhirali
Erulu haghalalliyu
Nanna sameepavagiru

3. Bhayasare malagheralu
Nanna sameepakaadiru
Hothare eluvaghalu
Prakashodaya thorisu

4. Prapancha yudhadholage
Ninnindha jayahonduve
Jeevadya kaladhalliyu
Ninnindhu jeevisuvenu`
  },
  {
    number: 54,
    title: 'Ee bhoosancharadhalli',
    englishTitle: '',
    lyrics: `1. Ee bhoosancharadhalli
Na bhedekollathu
Samasthasthithiyalli
Dasana rakshesu
Na rather nide madi
Munchane yelalu
Nenendigu kapadi
Dasana rakshesu

2. Udhyoga maduvalli
Nannannu nadisu
Yavathu kasthadhalli
Dasana rakshesu
Dhurecha baladinda
Ghoodandra bandaru
Dayadinda
Dasana rakshesu

3. Nan-apadayryanagi
Asakthanagalu
Nin athma mulavagi
Dasanna rakshesu
Saythananinda hani
Sambhavisiralu
Nee kadu preethiyagi
Dasannu raksheshu

4. Aknjana aviswasa
Hrudadi huttalu
Kodenage suknjana
Dasanna rakshesu
Na mrudi honduvalli
Ninnannu bedalu
Nin-aythu gayakagi
Dasanna rakshesu`
  },
  {
    number: 55,
    title: 'Devabhakthaleru',
    englishTitle: '',
    lyrics: `1. Devabhakthaleru
Japamadathakkaddu
Bhakthe hechuvadake
Athyavasya vagidhe

2. Dhukkisuva paapiyu
Shrama paduvavanu
Japa madikondare
Santhi hondalakuthe

3. Shodhaganu bandare
Namma bala prarthane
Deva sakthe nanage
Heghe matra sikkuthe

4. Devarathma! elithu
Namma bhakthe hechisu
Jhapa mada manasu
Hechechagi huttisu`
  },
  {
    number: 56,
    title: 'Yadharthavada prarthane',
    englishTitle: 'Prayer is the souls sincere desire',
    lyrics: `1. Yadharthavada prarthane
Athmada-pekshaye
Antharyadhalli eruva
Rahasya asheye

2. Yadarthavada prarthane
Viswasavolladhe
Parathparana odane
Sambhashisuvudu

3. Yadarthavada prarthane
Devathmanindale
Paapishtta-radharane
Bhakthana jeevave

4. Oh parisudha athmane
Nammalli egalu
Yadarthavada prarthane
Arpisa bhodisu`
  },
  {
    number: 57,
    title: 'Ella olle danagalla',
    englishTitle: 'Lord I hear of showers of blessing',
    lyrics: `1. Ella olle danagalla
Mula kartha devare
Ninna divya asirvada
Daya madu nanage
Nanage nanage
Daya madu nanage

2. Papaiyagidhene howdu
Yogyanalla thandeye
Kristhagage kshameyanu
Dayamadu nanage

3. Ninna mele bharavasa
Ettidhene yesuve
Ninna sthira samadana
Dayamadu nanage

4. Njana,bhakthi,sathya santhi
Koduvantha athmane
Ninna athmadalli sakthe
Dayamadu nanage

5. Athisaya krupeyannu
Palisuva prabhuve
Thalla beda papiyannu
Dayamadu nanage`
  },
  {
    number: 58,
    title: 'En divya karthane',
    englishTitle: 'I need thee every hour',
    lyrics: `1. En divya karthane
En thandeye
Ee bada prarthane
Kele..egale
Hechada preethiyinda
Divya sakthiyinda
Oh pavitra-athmane
En thumbisu

2. Na balahenane
Kristhesuve!
Nin sakthiyillade
Na beluve!

3. Ne kshanamatrave
Kai bittare
Na kunde hoguve
En apthane`
  },
  {
    number: 59,
    title: 'Yesu ninna nambhuthene',
    englishTitle: 'Iam trusting thee Lord Jesus',
    lyrics: `1. Yesu ninna nambhuthene
Ninna matrave
Poornavagi rakshesuve
Nannannu

2. Paapa pariharakagi
Nambhikolluve
Yesu nanna sudha madu
Egale

3. Ninna divya njanadinda
Nanna nadisu
Ninna suchith-ellavannu
Thorisu

4. Nitya ninna saktheyannu
Daya palisu
Ninna mathu keluvanthe
Prerisu

5. Yesu ninna nambhuthene
Ninna matravu
Yella paapadinda kaye
Nannannu`
  },
  {
    number: 60,
    title: 'Oh jaghatprabuve',
    englishTitle: '',
    lyrics: `1. Oh jaghatprabuve
Premapdiyu neene
Paratpranu
Navella ninaghe
Maduva prarthane
Assadde madade
Aalaysiru

2. Oh yesu swamiye
Devakumarane
Vimochaka
Swaraktha falava
Aakramaharana
Mano vishramava
Evagha tha

3. Oh shudda aathmane
Ella shudatwakke
Karanane
Durghana theghedu
Sukjyana belaku
Nammali huttisu
Dayaprane

4. Pitha puthrane
Eka yahovane
Katakshisu
Yavathu bumiyol
Samasta jhanarol
Ghadanda karadol
Prakashisu`
  },
  {
    number: 61,
    title: 'Sath,jothiyada yesuve',
    englishTitle: '',
    lyrics: `1. Sath,jothiyada yesuve
Prakasha kodu lokakke
Prapanchada karghathalu
Sampoorna vagi harisu

2. Pishachaninda jhanaru
Akjhanaragi hodaru
Ooh kartha kanikarisu
Sanmarghadalli sherisu

3. Papaadikara theghedu
Parisuddathwa huttisu
Bupraje ninagheragi
Ninnalananda padali

4. Yellellu ninna rajyake
Jayava kodu devare!
Ninnathmanannu hoythu
Paapishttarannu rakshesu`
  },
  {
    number: 62,
    title: 'Ha endha amulya mitra',
    englishTitle: 'What a friend we have in Jesus',
    lyrics: `1. Ha endha amulya mitra
Namagega sikidha
Paapa dhuka bhayavella
Parihara madidha
Sthirananda samadana
Hondalasesidhare
Yesu swamiyannu nithya
Bedu thiru manave

2. Sodhane untaguvaga
Thapa thrayadalliyu
Manadhalli kughabeda
Jhapa madutha eru
Nambathakka enda mitra
Bere obharellavu
Ninna dhukavella balla
Athu kollutha eru

3. Thumba vyasana upadra
Dusthithiyu bandaru
Yesu nada nityasraya
Bede kollutha eru
Ninde pede kalavala
Yava kashta bandaru
Sarva sakthana adhara
Endhu thappi hogadu`
  },
  {
    number: 63,
    title: 'Ee dhinavella nannannu',
    englishTitle: 'Glory to thee my God',
    lyrics: `1. Ee dhinavella nannannu
Kapadhidantha devaru
Sarvopakari athage
Kondatta kodu manave

2. Ee hothu kanda thapannu
Oh kartha pariharisu
Ee rathriyallu nannannu
Gandahrakella thapisu

3. Na nedhe gayyuvagalu
Ashubha swapna thappisu
Ninn kruneyaa nenappu
Nanathmadhalli erisu

4. En dheha sughapadisu
En athma samadayisu
Ninnannu sevemadalu
Udhayadhalli ebhisu`
  },
  {
    number: 64,
    title: 'Ennondigiru sancheyayithu',
    englishTitle: 'Abide with me',
    lyrics: `1. Ennondigiru sancheyayithu
Sandhokuthe ee jeevakalavu
Ennondhigiru divya mitranee
Anadha-nadha neenu allave

2. Oh yesu ninna mugha darshana!
Ondondhu kshanavu avasara
Prakasha moda yavadhidharu
Neenidhare nanaghe hithavu

3. Ninna sammughavannu kandare
Sugha dhukka ubhaya samave
Oh mruthyu ninnakondehoyithu
Samadiye! ninnannu gedhanu

4. Jeevandya kaladhalli karthane
Ninnannu aathu kondu sayuve
Anandhra swarghodaya vaghalu
Endendu neenu nanna bhaghavu`
  },
  {
    number: 65,
    title: 'Krupasanada balege',
    englishTitle: 'What various hindrances',
    lyrics: `1. Krupasanada balege
Baradha hage addiye
Kandhidharu na baruve
Devara sahaya honduve

2. Krupasanada balege
Viswasa preethiyodane
Nee bhedeko en athmave
Ninapthanesu kodane

3. Pranapthanesu alleye
Arooda nada nallave
Adhyaryabittu egale
Ne keleko enathmave

4. Yavaghallalli bandhare
Mano samtrupthi yakuthe
Nee nellavannu athage
Vivara helalakuthe

5. Na nega japadhalliye
Kadhadi jaya honduve
Kedukanembha vayreyu
Sampoorna sothu hodwanu

6. Praththene yinda kasthavu
Varisuthe santhoshavu
Sikkuvathendu beduve
Ninna hatra bande yesuve!`
  },
  {
    number: 66,
    title: 'Hothare suryanondege',
    englishTitle: 'Awake my soul and with sun',
    lyrics: `1. Hothare suryanondege
Echaravagu manave
Udhayadarpaneyannu
Ne karthanege arpisu

2. Empada nidhe nanage
Premade kotta karthage
Hrudaya poorthi yindale
Sthotrava kodu manave

3. Kapadidanda thandeye!
Alesu nanna prarthane
Nannannu asirvadisu
Sanmarghadalli nadisu

4. Oh sarva srushti paalaka!
Krupakattaksha sagara
Yugha yugandra ninnannu
Nannathma sthuthisuvadu`
  },
  {
    number: 67,
    title: 'Pitha putra athmane',
    englishTitle: '',
    lyrics: `1. Pitha putra athmane
Sarva jagharabhuve
Kelu namma prathane
Dayavulla kartha

2. Lokhakethe karune
Thorisidha thandeye
Kelu namma prathane
Dayavulla kartha

3. Namagage silubhe
Thalikonda yesuve
Kelu namma prathane
Dayavulla kartha

4. Bhaktharannu mokshake
Nadesuva athmane
Kelu namma prarthane
Dayavulla kartha

5. Ee prapancha sodhane
Thalli beduvadake
Bala kodu nanage
Dayavulla kartha

6. Namma athma satruvu
Mosamada baralu
Dasanannu thappisu
Dayavulla kartha

7. Yava paapa nammannu
Jayesidharu nityavu
Hatraviddu rakshesu
Dayavulla kartha

8. Sugha dhukka bandharu
Neene sthirashrayavu
Kayuthiru nammannu
Dayavulla kartha

9. Eha paradhalliyu
Yugha yughavendigu
Namma bhugheyagiru
Dayavulla kartha`
  },
  {
    number: 68,
    title: 'Sukalave!sukalave!',
    englishTitle: 'Sweet hour of prayer',
    lyrics: `1. Sukalave!sukalave!
Anandha devaradhane
Prapancha chinthe bheeduve
Krupasana nanaseruva
Eshtartha kele thandege
Divyasirvada beduve
Ha!subhakalavagidhe
Olledhu devaradhane!

2. Sukalave!sukalave!
Amrudha devaradhane
Hrudhaya thaapa-padalu
Visrama kodalulladhu
Parathparana padave
Ashraya sthana vagide
Aha subha kala vagidhe
Olledhu devaradhane!

3. Sukalave!sukalave!
Adhara devaradhane
Dhurguna vannu jayisa
Devathma sakthi koduva
Sanmarghanaga balavu
Bekkadhare viknjapisu
Aha subha kala vagidhe
Olledhu devaradhane!

4. Sukalave!sukalave!
Visranthi devaradhane
Melokhakore-madwanu
Bhoolokhadashe neegwathu
Vyakula thappisuthade
Mano visranthi koduthe
Ha!subhakalavagide
Olledhu devaradhane!`
  },
  {
    number: 69,
    title: 'Yuda kulada yesu',
    englishTitle: 'The lion of Judah',
    lyrics: `1. Yuda kulada yesu
En prarthaneyannu
Kelutha mechutha
Nadisuvenu
Athan sannideyallu
Na bedhu na bede
Na baravasavagi
Kadhiruvenu

2. Yudha kulada yesu
En aapathanella
Hedidhu haredhu
Haresuvanu
Aathanalli na nambhi
Na hadi ondadi
Nanarpisuvenendu
Su seveyannu

3. Yudha kulada yesu
Shastragalanenna
Baghesi bedhesi
Besaduvannu
Dhushtta balavannella
Thananagisuva
Tha bhakthanada nannannu
Kavuvenu

4. Yudha kulada yesu
Begha baruvenu
Santhosha samtrupthi
Sampoornatheyu
Nanaghaaguvadendu
Halleluya nityavu
Ninnama sthotra madi
kondaduvenu`
  },
  {
    number: 70,
    title: 'Kartha yesu swamigella',
    englishTitle: 'Must I go empty handed',
    lyrics: `1. Kartha yesu swamigella
Namma yella balava
Mathalochanegalella
Athan munde tharuva
Kartha yesu swamigella
Namma dhina thasella
Kartha yesu swamigella
Sthuthi sthotra koduva

2. Kaygalinda athan seva
Karya maduthiruva
Kalghalinda churukage
Athanhinde hoguva

3. Namma drushtti atanmele
Sthiravagi ttiruva
Bere drushtiyella hogi
Silbe kade noduva

4. Ye-enascharya! Ye-enascharya!
Mahemeya rajanu
Preethiyinda priyarendu
Karayuthane nammannu

5. Sthotra sthotra priya yesu
Ninna divya preethige
Ninna rakke neralolu
Erutheve nithyave`
  },
  {
    number: 71,
    title: 'Kartha ninna sevege',
    englishTitle: 'Take my life and let it be',
    lyrics: `1. Kartha ninna sevege
Nanna jeeva kottenu
Ninna Ghana karyakagi
Hothu kaleyuvanu

2. Nanna kayghal ninage
Na pradhishtte madide
Nanna kalu karthane
Thako ninna sevege

3. Nanna swara ninnade
Ninna sthotra madale
Nanna baye karthane
Ninna vakya sarale

4. Nanna bhelle chinnava
Thako divya mitrane
Nanna bhuddi ellava
Thako ninna sevege

5. Nanna chinthe ninnade
Ninna eshta maduve
Nanna manadholage
Neenu aalu karthane

6. Ninna bittu yarannu
Preethi madalarenu
Nanna poorna manasu
Nene thako endigu`
  },
  {
    number: 72,
    title: 'Ninnannu yesuve preethisuve',
    englishTitle: 'More love to thee oh Christ',
    lyrics: `1. Ninnannu yesuve preethisuve
Nanella nenage sallisuve
Enathma prarthane
Hachale preethiye
Nannolage divyaathmane

2. Lokhanandava hudukede
Naneghe ninnannu aresuve
Naninnannu keluve
Hachale preethiye
Nannolage divyaathmane

3. Dhukkavu sughavu enbandaru
Adella nanage melmadanu
Mathennu beduve
Hachale preethiye
Nannolage divyaathmane

4. Mrutyu bandidharu santhosave
Nanellu edharu santhosave
Howdhennu keluve
Hachale preethiye
Nannolage divyaathmane`
  },
  {
    number: 73,
    title: 'Nanna paapa neegalu',
    englishTitle: '',
    lyrics: `1. Nanna paapa neegalu
Kristhanu sathanu
Sadha nanna kayalu
Yeddu bandhanu
Njana neethi balavu
Athma shuddi agwavu
Ennudhara karthanu
En kaywanu

2. Yesu krishtha nanage
Aapthane priyane
Nanagagi silube
Thaledathane

3. Yesuvina rakthave
Bhakthage payave
Adu devra manege
Hakkaneyuthe

4. Sarva kala athanu
Nodwanu kaywanu
Bayavillavenagu
Athanirvanu

5. Halleluya!swamige
Jayave maheme
Athan saktheyindalu
Nanu gelluve`
  },
  {
    number: 74,
    title: 'Dayrya saliyagi ru',
    englishTitle: 'Standing by a purpose true',
    lyrics: `1. Dayrya saliyagi ru
Anjakollade
Devaraknje kaykkondu
Horaduvavane
Daniyelanande
Sthiravagiru
Meludhesavittu munde
Karya madiru

2. Thomanande neenu
Alpa nambhike
Bittu swamiyalliyu
Sthiranagegale

3. Pethranande neenu
Hedeyagade
Devasaksheyagiru
Adayryapadathe

4. Athma satrugalannu
Solisodake
Kodale nindu dayryadim
Horadu badane.`
  },
  {
    number: 75,
    title: 'Yesuvina preethiyalli',
    englishTitle: 'Praise the saviour ye who know Him',
    lyrics: `1. Yesuvina preethiyalli
Nelegondu sthotramadi
Athanolle sevegagi
Yella koduve

2. Yesuvina vakyadhalli
Nanu baravasavagi
Aathukondu neethiyalli
Nadakolluve

3. Yesuvina namadhalli
Harshagondu sthiravagi
Vayreyodane horadi
Jaya honduve

4. Yesuvina prabheyalli
Devra hatra nilluthene
Alli sadha kala bhali
Trupthi honduve

5. Yesu begha barvenendu
Njapthi madi harshakondu
Nanna sidda madikondu
Kadhukolluve`
  },
  {
    number: 76,
    title: 'Yesu swami ninge nanu',
    englishTitle: 'All to Jesus I surrender',
    lyrics: `1. Yesu swami ninge nanu
Ellavannu kodwanu
Ninna mundhe nanu biddu
Ninnaradhisuvenu
Na samasthava
Na samasthava
Ninage en divya kartha
Koduvenayya.

2. Ninna munde biddu swami
Ninna namisuvenu
Lokhadashe yella nege
Nanna sudha padisu

3. Poorna vagi nanu ninna
Dasanagi madisu
Neenu nanna karthanendu
Ellar mundhe heluvenu

4. Nanna kartha nannanega
Ninagarpisuvenu
Ninna preethi baladinda
Nannan-nega nadisu

5. Ninna raksheneyandha
Egha thilu kondenu
Halleluya ninagendu
Sadha sthotra madwanu`
  },
  {
    number: 77,
    title: 'Silube hatra baruve',
    englishTitle: '',
    lyrics: `1. Silube hatra baruve
Nanu bada paapiye
Poorna sudhanaguve
Yesuvannu nambhalu
Nanagage sathedhe
Devara kumarane
Paapigapthanagidhe
Rakshesennanegale

2. Bahukala nannannu
Ninna namesuvenu
Lokhadasheyella neegi
Nanna sudhapadisu

3. Nijavagi ninnannu
Sudhavagi maduve
Howdhu sudhanadenu
Harsha! Harsha! karthage.

4. Athma deha pranava
Divya kartha ninage
Nannenada sarvada
Nenageega koduve`
  },
  {
    number: 78,
    title: 'Kraystharadha namma mele',
    englishTitle: '',
    lyrics: `1. Kraystharadha namma mele
Bidha baravu
Dhoddadendu dyana madu
Ratre hagalu
Anyarada bere janra
Navu preethisi
Rakshagana hatra tharva
Hangu nammadu

2. Neenu eruvanda prathi
Sthaladhalliyu
Yesuvina mathinande
Nitya varthisu

3. Saviraru jana nitya
Sayyuthiralu
Yecharekke vakya hele
Prana kapadu

4. Paapiyannu rakshesuva
Pradhiyobhanu
Jyothiyanthe shobisuthaa
Mana hondwanu.`
  },
  {
    number: 79,
    title: 'Kelasa maduthiru',
    englishTitle: 'Work for the night is coming',
    lyrics: `1. Kelasa maduthiru
Hothareyalliye
Madyanadallu madu
Sanje baruthe
Jagradeyakuthiru
Hothiruvagalu
Thalsara madadiru
Ratre baruthe

2. Kelasa madutheru
Sandarbhadalleye
Manasu ettu madu
Hothu thapputhe
Jagrathe madutheru
Jeevavidhagale
Jeevantya dhina nodu
Saavu baruthe

3. Kelasa maduthiru
Samayaveegale
Karthanu baruthane
Nyaya thirpige
Jagratheyulla dasa
Mechige honduva
Somareyada japya
Biddu hoguva`
  },
  {
    number: 80,
    title: 'Swarghadalli seruthene',
    englishTitle: 'Must I go and empty handed',
    lyrics: `1. Swarghadalli seruthene
Howdhw mathu nijave
Adharenna swamigagi
Nanu enu madide?
Yaru krishtanalli namba
Yava yathna madade
Swami ethuragi hoga
Sareyo ennapthane

2. Hege bittu hogalenu
Seralalli hegeye?
Rakshakana munde nanu
Nachikollaguthe

3. Shanedina krishthanambi
Paapa kshame hondede
Adhare swalabhakagi
Nanu bhali bandiede

4. Suthalina janaralli
Thakka sakshi helade
Chinthe heenanagi
Bali hogwadalli sareye

5. Etharara hithakagi
Madu nithya prarthane
Nasha vagwa janakagi
Chinthe padu manave`
  },
  {
    number: 81,
    title: 'Yelelu cheyyon sabhe',
    englishTitle: 'Stand up for Jesus',
    lyrics: `1. Yelelu cheyyon sabhe
Prakasavagiru
Yahovaninda prabhe
Ninnalli huttithu
Samastha janaralli
Aghada kattalu
Samastha bhoomiyalli
Aknjana vayithu

2. Ninnannu serabeku
samasthajanaru
Sanmana madabeku
Prakyada rajaru
Kannethi gumpu
Nodi santhosavagiru
Maha samooha odi
Ninnannu hondithu

3. Dweepantharagalella
Ninnasthiyagive
Jananghadavarella
Swathantra ninage
Yelelu cheyyon sabhe
Prakasavagiru
Yahovaninda prabhe
Ninnalli huttithu`
  },
  {
    number: 82,
    title: 'Yudha sannadharagi',
    englishTitle: 'Stand up Stand up for Jesus',
    lyrics: `1. Yudha sannadharagi
Krishthana bhattare
Athana dwajavethi
Horadi veerare
Karthanu thanna sainya
Mundaresuvenu
Virodighala bala
Samharisuvenu

2. Yudha sannadharagi
Thuthoori koogutha
Swamiya saynyadhalli
Serere egale
Apaya hechuvaga
Hechada dayryadi
Kraysthara divyayudha
Solade madire

3. Yudha sannadaragi
Karthana thranava
Yavagyo nambuthiri
Bidire swarthava
Suvartha sarvayudha
Karthaheluvenu
Neenu nabhigastha
Olle dasanu

4. Yudha sannadharagi
Vijayavappudu
Horatta ghosha thiri
Jaya darbattavu
Untage jayashale
Jeevada maleya
Sambramadinda hondi
Nirandrava aluva`
  },
  {
    number: 83,
    title: 'Devaseve madu',
    englishTitle: '',
    lyrics: `Devaseve madu
Kala neeguthe
Jagharooganagu
Jana sayuthe
Vakya sari helu
Hogu egale
Preethiyinda saru
Rathri baruthe

Ghanavulla dendu
Deva kalasa
Manasittu madu
Pranarakshisu
Dayva bhahumana
Nija dasage
Sikki karthaninda
Bagyavaguthe

Sudharella koodi
Sarvakalavu
Devasthotramadi
Adhabelalu
Thanna-asanadinda`
  },
  {
    number: 84,
    title: 'Kartha sidhavagidhene',
    englishTitle: 'Master speak thy servant heareth',
    lyrics: `1. Kartha sidhavagidhene
Nanna koda mathadu
Ninna dwani keladhene
Eralishtavillave
Nanu keluthiruve
Nanagenu heluve

2. Na sandeha padalagi
kare nannahesaru
ninna hinde thoreyage
hogabahalapadisu
Kurbhanande mandeya
Neregyolyu oh kartha!

3. Swami ninna bhaktharalli
Alpavadhava nane
Adharu ede ninalli
Preethi nanna thalladhe
Nanna kamshe thirisu
Bhagyakenna nadisu

4. Ninna divya chithavannu
Thilukondu kodale
Poorna videyathwa vannu
Thorisuthaliruve
Nanu kelutha-ere`
  },
  {
    number: 85,
    title: 'Estu thappi hoda kuri',
    englishTitle: 'How many sheep are straying',
    lyrics: `1. Estu thappi hoda kuri
Papa margadalliye
Sanchara maduthare
Olle kurba ellade
Avarge nireksheyilla
Ashrayavenide?
Gandanthra dinadalli
Thapisikolvadu hyage?
Ooh banni hudukuva
Thappi hodavaranu
Paralokaseri kugvevu
Karakondu bandevu

2. Estu mandi kathalalli
Deva belakillde
Vyartha bombe Puje madi
Kettu hoguthidare
Namma hathra belakuntu
Banni sahodrare
Ede rakshane dina
Rathri bega baruthe

3. Namma jeeva sanjeyalli
Payana maduvagalu
Aneka kurigalu
Karakondu bandevu
Endu heli avarannu
Karthana padake
Kara kondu sthothra madi
Sankirthisutheve.`
  },
  {
    number: 86,
    title: 'Onde beku onde mathre',
    englishTitle: 'Guide me o thou',
    lyrics: `1. Onde beku onde mathre
Nanage avashyavu
Bere ellapekshe vyartha
Bere sukha sunyavu
Yesu swami-(3)
Jeeva bugge nanage

2. Ekapekshe eddu mana
Lokadakshe bedali
Kristanalli sthira dhyana
Nanna vidali
Yesu swami-(3)
Jeeva bugge nanage.

3. Ninna mele nannapekshe
Untu priya karthane
Nithyavu nannabilashe
Nene divya mithrane
Yesu swami-(3)
Jeeva bugge nanage.

4. Nanna divya yajamana
Nanu kandukondenu
Atha bodisuva jnana
Hondi thrupthiyayithu
Yesu swami-(3)
Jeeva bugge nanage.`
  },
  {
    number: 87,
    title: 'Harshadim, Harshadim Mundhoduve!',
    englishTitle: 'Moment by Moment',
    lyrics: `1. Harshadim, Harshadim Mundhoduve!
Mokshada sainyava sandisuve
Yesuve bayendu karayelu
Harshadim melakke oduve;
Lokha prayanavu mukiyalu
Swarghanandakke seruve
Serede baleka yendendighu
Harshadim harshadim haduvevu.

2. Savina banavu thakidaru
Dighilu nammanu hidiyadu
Yesu samadhiya jayisidha
Harshadim harshadim
Mundhoduve
Marana nammanu jayisadu
Yesuvina mitra adu;
Parama baghyava ashisidhya
Harshadim harshadim
Mundhoduva.

3. Nammanu bittaptha snehitharu
Melana sainyada sanghadalu
Nammanu melakke karedaru
Harshadim harshadim hoghuvevu;
Banghara veeneyam swaraghala
Impada raghada dwenighala
Kivighalolaghekelidhavu
Harshadim harshadim oduvevu.`
  },
  {
    number: 88,
    title: 'Bhayavenilla santhosave',
    englishTitle: 'Blessed assurance',
    lyrics: `1. Bhayavenilla santhosave
Yesu nannathma geleyane
Swarghada bhagya badyatheye
Nanage untu abhayave
Ethu en ragha,nitya bagya
Nannalli untu halleluya
Yesu enathma udharaga
Swamige sthotra nitya gana

2. Parisudhathma nannalliye
Pavitra santhi dayakane
Yesu antha sathyavanne
Thorisikodwa-nenathmake

3. Ananda vesto niresheyu
Nannalli thumbi eruvudu
Yesuvu barva kalavannu
Eduru nodi kavuvenu

4. Enathma-dapta baruvenu
Athana kooda hoguvenu
Athanu nannu swarghadallu
Vaibhavadhalli eruvevu`
  },
  {
    number: 89,
    title: 'Bahukala gharvadindalu',
    englishTitle: 'Years I spent in vanity and pride',
    lyrics: `1. Bahukala gharvadindalu
Swami vakya thallibittaru
Yesu nanna prithisidanu
Kalveralli.
Kripe alli nanna kadeghe
Swami thorisidanallave
Alli papa sala sandide
Kalveralli

2. Deva sathya vakya nannalu
Bahu baya untu madithu
Athma samadhana kottanu
Kalveralli.

3. Egha nanu yesu swamighe
Nithya seve hadi maduve
Paripurna preethi noduve
Kalveralli.

4. Yentha prithi nanna suthide
Endha kripe nanna meleye
yenda karunathishayave
Kalveralli

5. Yesu nanna nithya nathanu
Nanu yesuvina sakshiyunithya
vasasthala nanaghu
Kalveralli.`
  },
  {
    number: 90,
    title: 'Aascharyavadava',
    englishTitle: '',
    lyrics: `1. Aascharyavadava
Aascharyavadava
Devaputra yesu swami howdu
Aascharyavadava

2. Aalochana kartha
Aalochana kartha
Devaputra yesu swami howdu
Aalochana kartha

3. Balishttana deva
Balishttana deva
Devaputra yesu swami howdu
Balishttana deva

4. Nithyanada thandeyu
Nithyanada thandeyu
Devaputra yesu swami howdu
Nithyanada thandeyu`
  },
  {
    number: 91,
    title: 'Yesu swargaloka bittu',
    englishTitle: 'I will sing the wondrous story',
    lyrics: `1. Yesu swargaloka bittu
Nanagagi sathanu
Silbe gora mruthipatta
Entha prana priyanu
Howda premadishaya
Indu endu haduve
Krista baktha ganagala
Jothe serehaduve

2. Nanu thapi hodakuri
Yesu nanna kurubanu
Thagu bettagala dati
Nannanethi thandanu

3. Nanu kastadalli biddu
Dikkukanadiralu
Yesu swami hathra bandu
Nannanapikondanu

4. Kannu kanadiru vaga
Divya drusti kottanu
Dairya kundi hoguvaga
Nanna bali nintahnu

5. Badedukha sagaradalli
Yesu hathra iruvagha
Thanna divya hastha nedi
Nanna melakethuva

6. Kadeyalli ehalokha
Bittu mude hoguva
Nanaghenu bayavilla
Swami yondigirvanu`
  },
  {
    number: 92,
    title: 'Endhadaru na hoguve',
    englishTitle: 'Some day the silver chord will break',
    lyrics: `1. Endhadaru na hoguve
Nanelli nilladiruve
Kristhana aramanege
Na sere harshagolluve
Swarghada ghana krupeya
Allenu dhukavagadu
Devara mugha noduve
Niranthra sthuthisuvenu

2. Ande ee deha beduvenu
Endhoguve nanareye
Andu athana maneyu
Yen nithya sthalavaguthe

3. Aadhina swami nanage
Neeolle dhasa nagidhe
Annuvadannu keleye
Eshto santhosaviruthe

4. Aadhinakaki kayuve
Hogalu siddhanaguve
Appaneyadha koodale
Ellinda edhuhoguve

5. Aathana lokha nanagu
Niranthra maneyakuvadhu
Allindha hogenendigu
Sadha santhoshisuvenu`
  },
  {
    number: 93,
    title: 'Yen yesuve ninnaliye',
    englishTitle: 'Oh Christ in thee my soul hath found',
    lyrics: `1. Yen yesuve ninnaliye
Samtrupthi golluvenu
Vishranthi divyanandave
Ninnindalagwadu
Ennyara balihogwenu
Naanelli nodenu
Suprema santhiyellavu
Ninnallieruvavu

2. Yen swami preethi karune
Dhikarisidenu
Nannannu athathallade
Swekaresidenu

3. Jeevadha bhuge kanade
Naagurigettenu
Ninathra bandu koodide
Yen dhaha theerithu

4. Lokha vinodha chindheyu
Aavarisidevuu
Ninnindalegha thrupthiyu
Yen athma thumbwadu

5. Santhoshavalla dhukave
Ennalli thumbhithu
Naninna nodi koodale
Santhoshapattenu`
  },
  {
    number: 94,
    title: 'Devarunimmanu kayale',
    englishTitle: '',
    lyrics: `1. Devarunimmanu kayale
Dhine dhine dhari thoresi
Thanna hattiyalli seresi
Devarunimmanu kayale
Krishthanapaadhake
Seruvavarege
Nimmanella dhevarukapadali
Krishthapaadake kooduvavarege
Devarunimmanu kayale

2. Devarunimmanu kayale
Bhadekashtta baruvalli
Shodane untaguvalli
Devarunimmanu kayale

3. Devarunimmanu kayale
Thanna rekheyallashrayisi
Thanna vakyadim sandayisi
Devarunimmanu kayale

4. Devarunimmanu kayale
Athma-anyonyava nimmalli
Hechuthiruvanthe maadi
Devarunimmanu kayale`
  },
  {
    number: 95,
    title: 'Lokakella dhukha',
    englishTitle: 'In world where sorrow',
    lyrics: `1. Lokakella dhukha
Praptha vaaghidhe
Aadhare santhosha
Undu namake
Yeshu swamiyannu
nambikollalu
Aathan divyanandha
Poorthi aayithu
Dhukkavu baadhe
Bhayavannella
Karthana santhoshadhim
Nithya jayisuve

2. Nithya praadha kaala
Soorya nindhale
Raatri kattalella
Haari hoguthe
Namma priya kartha
Neethi suryanu
Namma papavella haarisuvenu

3. Swargakke prayana
Maaduthiralu
Nithya upakara
Thorisuthiru
Ellakintha preethi
Shreshta vaagithe
Enthu yeshu swami
Diya maathide`
  },
  {
    number: 96,
    title: 'Nammannu snehese davanyanu?',
    englishTitle: 'There is not a friend like a lowly Jesus',
    lyrics: `1. Nammannu snehese davanyanu?
Yesuve yesuve
Sadha samepathi eruvenu
Yesuve yesuve
Namma kastagallella balla
Nitya kayuvava-nallave
Athana hage mathobharella
Yesuve yesuve

2. Nammannu rakshedavanyaru?
Yesuve yesuve
Papava bhidisidavanyaru?
Yesuve yesuve

3. Athmada roghake vaidyanatha
Yesuve yesuve
Evana horathu rakshakanella
Yesuve yesuve

4. Athana preethiya marayabedre
Kraysthare kraysthare
Nithyadi sthotravan-arpisire
Swamige swamige`
  },
  {
    number: 97,
    title: 'O Yehova namma deva',
    englishTitle: 'Once I thought I walked with Jesus',
    lyrics: `1. O Yehova namma deva
Ninnannu kondaaduve
Ninna naama stuthisuve
Athbhutha devare
Samaadhana sikkuthe
Poorna samadhanave
Nannilli ittare
Sthiravaadha nambikke

2. Badavarike aashraya
Dheenarike sharana
Bisilalli nanaghaghi
Neralaakhidhi deva

3. Nireekshisidhene ninna
Rakshisidhi nannannu
Harshisuvenu ninnalli
Neene nanna bhaagyavu

4. Nithya vaadha balavundu
Ninnalli Yehovane
Sthira baravassa vitte
Dhrida manasinthale`
  },
  {
    number: 98,
    title: 'Nireekshisidhenu karthane',
    englishTitle: 'Amid tho trials that I meet',
    lyrics: `1. Nireekshisidhenu karthane
Kelidhi nanna muraye
Saayuva Nannanu Papadha
Kuniyindha ethidhi
Nee yojisuthithi
Kartha nanagaagi
Nee dhukka tappissa baruthi
Nee yojisuthithi

2. En paada vittidhi bandage
Sthiramaadi nanna nadeye
Suraga kottidhi bayelle
Sthothrada raagave

3. Jana kele bhayadindalu
Ninna thane haresuveru
Ninnannu nambhuva manuja
Sowbhaghyavandanu

4. Ninnannu haresuvavaru
Ninna karyava preethisuvaru
Ninnalli harshisi avaru
Jayava hondwaru

5. Oh devare thadamadade
Nee bhega bandu bhakthage
Sahayisu ninnathmake
Barale maheme`
  },
  {
    number: 99,
    title: 'Be not dismayed whatever beside',
    englishTitle: 'Be not dismayed whatever beside',
    lyrics: `1. Bhameyu beda kashtadhol
Devaru kayuvenu
Preethiya reke neralol
Devaru kayuvenu
Devaru kayuvenu
Anudhina hadigalol
Kayuva nischaya
Devaru kayuvenu

2. Hrudhaya kundi hodaru
Devaru kayuvenu
Margadhol bhayavidharu
Devaru kayuvenu

3. Bhekadadannu kodwanu
Devaru kayuvenu
Koduvenendu nambhiru
Devaru kayuvenu

4. Ontiganagi hodaru
Devaru kayuvenu
Athanu shanthi kodwanu
Devaru kayuvenu

5. Yentha paresheyadaru
Devaru kayuvenu
Aathanan-nathu kondiru
Devaru kayuvenu`
  },
  {
    number: 100,
    title: 'Bakthi bayadalli vakya belakalli',
    englishTitle: 'When we walk with the Lord',
    lyrics: `1. Bakthi bayadalli vakya belakalli
Navu nadeyutha bandare

2. Namma sangadalu kartha baruvanu
santhosha koduthane
keluvude hage maduvade
santhoshada marga
eede allave?

3. Vyade vyasanavella bethi
Branthi saha,
Athan munde hari hogvadu,
Kartha santhiyannu
samadanavannu,`
  },
  {
    number: 101,
    title: 'Yentha-mulyavaada raktha',
    englishTitle: 'Precious precious blood of Christ',
    lyrics: `1. Yentha-mulyavaada raktha
Silube meleye
Paapigaligagi yesu
Cheldanallave?
Yentha-mulyavaada raktha
Cheldanallave?
Kartha yesuvina raktha
Nanagagiye

2. Yesuvenaamulya raktha
Shudhamaaduthe
Hariyuthe niagagi
Nanna athmave

3. Papa athi kempagidum
Hechagidharun
Yesuvenaamulya raktha
Shudhamaadwadu

4. Nannakondukonda raktha
Shanthimaadwadu
Aadharinda paapakshame
Dhoreyuvadu

5. Deva parisudhavada
Sannidhanake
Nanage pravesa untu
Dhayryaviruthe

6. Athmayudhadhalli naanu
Soothu hodenu
Yesuvina rakthadinda
Jayahondwenu

7. Sthotra balegala thandu
Arpisuvenu
Karthanada yesuswami
Hondayogyanu`
  },
  {
    number: 102,
    title: 'Suthadhodda dandu nodi',
    englishTitle: 'Ho my comrades see the signals',
    lyrics: `1. Suthadhodda dandu nodi
Jathegarare
Ethurali saythan bandu
Ninthanallave
Kotte bhadra! Andha-nesu
Veeraragi
Sidhavagideve endu
Uthrakodere

2. Silbe dwajavannu kandu
Dhayrya padiri
Karthana vagdhatha nambi
Yudha maadiri

3. Yudha ghora vagidhaagyu
Bhayavillavu
Jhotheyalli rajaniruva
Sothuhogwevu

4. Howdu namma koodidane
Jagath prabuve
Rajyavannu aaluthane
Jayavaguthe`
  },
  {
    number: 103,
    title: 'Howdowdu bhadravade',
    englishTitle: 'Safe in the arms of Jesus',
    lyrics: `1. Howdowdu bhadravade
Yesuvinalliye
Aa preethiyulla yedhe
Aashraya madide
Dhoothara shabdha kele
Aanandha swarave
Melada lokhadinda
Empaaki baruthe
Howdowdu bhadravade
Yesuvinalliye
Aa preethiyulla yedhe
Aashraya madide

2. Yesunannathma dhatha
Vvyakula hooyithu
Shodhaka jayisalara
Paapase ellavu
Kaneeru eegha ella
Dhigilu hoyithu
Upadra bandarenu?

3. Yesu nanna-athmasraya
Paapiya mitranu
Ee thrana sthana naanu
Endendu bidanu
Eegina moda hoga
Kaadu kondiruve
Suvarna desa noda
nireekshesiruve`
  },
  {
    number: 104,
    title: 'Kapaduvava devare',
    englishTitle: 'He leadeth me',
    lyrics: `1. Kapaduvava devare
Santhosavulla yochane
Nallelli heghe edharu
Kapaduvava devare
Kapaduvava devare
Thanna swahasthadindale
Adairya bittu nambuve
Kapaduvava devare

2. Ondundu vele dhokavu
Ondundu vele sughavu
Hegedharu nish chinteye
Kapaduvava nathane

3. Enenu prapthisidaru
Na gunaguttalarenu
Yavagalu samtrupthane
Kapaduvava nathane

4. Ee jeevathantya bandaru
Na yordhan hatra nindaru
Nirbhayavagi dhattuve
Kapaduvava nathane`
  },
  {
    number: 105,
    title: 'Yendu dayryagollu bratha',
    englishTitle: 'Courage brother donot stumble',
    lyrics: `1. Yendu dayryagollu bratha
Margha kathaladaru
Kartha ninna nadisuva
Nambi madu olledu
Yendu dayryagollu bratha
Dhari sottagidharu
Heche edu sthiradinda
Nambi madu olledu

2. Yendu dayryagollu bratha
Yara daya bedavu
Devaralli baravasa
Ettu madu olledu
Yendu dayryagollu bratha
Kroda thade bandaru
Bittu chinde brande yella
Nambi madu olledu

3. Yendu dayryagollu bratha
Bhaktharege jayavu
Anthyadalli untu sathya
Nambi madu olledu
Yendu dayryagollu bratha
Margha kathaladaru
Kartha ninna nadisuva
Nambi madu olledu`
  },
  {
    number: 106,
    title: 'Sarva kasta parihara',
    englishTitle: '',
    lyrics: `1. Sarva kasta parihara
Gayyuvanda kristhana
Edharenagenda bhagya
Athma kenda sowkyavu
Martharada mitrarella
Nanna bittu bittaru
Divya mitranada kristha
Endu bida dathanu

2. Atha hatraviruvalli
Thapa thrayabandaru
Drushtiyittu aathanalli
Santhi honduthiruvenu
Athanolle mitranagi
Thapiyada nanage
Nanusaha thapiyendu
Dhayryavannu helane

3. Hothukollalaradanda
Bhara-nanagiralu
Aapthamitra nerevagu
Neene nanna sarane
Nanubhalahenanedu
Neenu thilidathanu
Ninagenna kripe saaku
Yendu balapadisu`
  },
  {
    number: 107,
    title: 'Ha sahodra preethiyu',
    englishTitle: '',
    lyrics: `1. Ha sahodra preethiyu
Yestu ramyavadadhu
Paraspara premavu
Bhaktharalankaravu

2. Parimaladantheye
Yella kaladalliyuu
Premadim suvasane
Bhesuthade suthalu

3. Manapoorthiyindale
Preethi kshema koduthe
Yava kedu madade
Hageyannu thaluthe

4. Yaava ghunavidharu
Preehiyilladhidhare
Naanu yenu ellavu
Ninna munde devare

5. Preethiyulla hrudhaya
Devarinda huttuthe
Endha divya ghunava
Nannallidu karthane

6. Kristha sabha sirase
Ninna janarellaru
Poorna preethiyindale
Nadakolla bhodisu`
  },
  {
    number: 108,
    title: 'Devasanada suthalu',
    englishTitle: 'Around the throne of God in heaven',
    lyrics: `1. Devasanada suthalu
Karthana mundeye
Dhodda samoha makalu
Erutharallave?
Sthuthi sthotra haadi paadi

2. Aa belakulla lokhake
Hege pravesavu?
Aa sowkyavada sthanake
Hege seredharu?
Sthuthi sthotra haadi paadi

3. Jagathigagi yesuvu
Sathedharendale
Sudhathwa hondi avaru
Bandaru bhagyake
Sthuthi sthotra haadi paadi

4. Bhoolokhada rakshakana
Preethisidavaru
Sulokhadhalli ghanava
Sampadisidaru
Sthuthi sthotra haadi paadi`
  },
  {
    number: 109,
    title: 'Howdu ramya nivasavide',
    englishTitle: 'There is a land that is fairer than day',
    lyrics: `1. Howdu ramya nivasavide
Deva janarighoskaravu
Namma parama thande thane
Alli sthalava koduvenu
Ennu mel howdowdu
Alli kooduve-vendendigu

2. Aa mahasughadesastharol
Thumbanandavu agwadu
Mathu kanneeru mughagalol
Endu kanade eruvadu
Ennu mel howdowdu

3. Enda koreke koodisuva
Paramothama karthanigee
Nithya sthotrava arpisuva
Ella bhakthara sangattale
Ennu mel howdowdu`
  },
  {
    number: 110,
    title: 'Santhoshave santhoshave',
    englishTitle: 'O happy day that fixed my choice',
    lyrics: `1. Santhoshave santhoshave
Na kristhanatra seruve
Bhoovasakinda alleye
Mahasambrama sikkuthe
Harshave harshave
Maha sambrama vaguthe
Kristhesu agha nanage
Prathyashanagwa nallave
Harshave harshave
Maha sambrama vaguthe

2. Parathparanada devara
Kannare nanu noduve
Rakshakanindale agha
Kiritivannu hodhuve

3. Sudha athmarellarodane
Nin nama, kartha haduve
Chiyona pattanadolage
Ninnanu seve maduve

4. Santhoshagala thripthiyu
Niranthra sorgatholunttu
bangara vene endigu
en hasta bittu hogada

5. Ee loka bittu hogadu
En athmakae santhosavu
Vimochagana nodvadu
Sampoornavada bagyavu`
  },
  {
    number: 111,
    title: 'Karthana hatrave',
    englishTitle: 'Forever with the Lord',
    lyrics: `1. Karthana hatrave
Sadha eruvenu
Endha ghambeera yochane
Maha santhosavu
Suvarna desake
Nanega dhoorave
Adhagyu dhina dhinake
Samepa hoguve
Hoguve hoguve
Samepa hoguve

2. Ninna nivasava
Yenathma noduthe
Aaramya patta dwarava
Oh there karthane

3. Cheeyon pattanavu
Sameepavagide
Adhannu nanna manavu
Athyasisuthathe

4. Ee prana hogalu
Yen thande! Ninnannu
Na kandu ninna hatrave
Endendu bhaluve`
  },
  {
    number: 112,
    title: 'Yeshuve neenu',
    englishTitle: '',
    lyrics: `5. Yeshuve neenu
Endu nadisu
Marghayashavagidhyagu
Shathru edhurisidhyaghu
Bayavillade
Munde hoghuve

6. Kathaladharu
Shathru bandaru
Dairyakodu krupeyinda
Hidi ninna hastadind
Nanna thapisu
Mokshathorisu

7. Dukha baralu
Shanthi nee kodu
Yella shodaneghallannu
Shahisuva thalmeyannu
Dhayapalisu
Balapadisu

8. Yeshuve neenu
Endhu nadisu
Minde kanuvantha shathi
Paralokhadavishrathi
Serva mattigu
Nanna nadisu`
  },
  {
    number: 113,
    title: 'Oh yesu ninna namavu',
    englishTitle: 'Christ has for sin atonement made',
    lyrics: `1. Yestoascharyave
Nee paapige asrayavu
Oh divyanada karthane
Oh divyanada yesu
Oh divyanada yesu
Oh divyanada yesu
Nannannu rakshisu

2. Na bhada paapi nijave
Oh priyanada yesu
Nin hatra bande egale
Oh priyanada yesu

3. Nan papa yesto edharo
Nee yendu thallalare
Nin mundhe kshame bedalu
Nan paapaa harisuve`
  },
  {
    number: 114,
    title: 'Bhanni paschathapadinda',
    englishTitle: '',
    lyrics: `1. Bhanni paschathapadinda
Swami hatra baruva
Athanalli krupeyuntu
Atha santhikoduva

2. Shikshisida neethiyinda
Preethi thorisuvenu
Pettu kotta hasthadinda
Poorna vasi madwanu

3. Devarannu asheyinda
Hudukuva ellare
Koduvenu kripeyinda
Harsha beduvalliye

4. Hege molakeya mele
Thili manju belutho
Hage namma mele krupe
Surisuvanallave?

5. Maleyinda anda pushpa
Vikasiswa merege
Namma manadhol-ananda
Hutti trupthiyaguthe

6. Bhanni paschathapadinda
Swami hatra baruva
Athanalli krupeyuntu
Atha santhikoduva`
  },
  {
    number: 115,
    title: 'Aaghora mana klesavu',
    englishTitle: '',
    lyrics: `1. Aaghora mana klesavu
Samprapthavarenu
Gholatta chndeyadaru
Upadra kottarenu

2. Ninna bhara bhakthane
Yella lesu maduve
Emba divya mathanne
Nambu nambu nambu

3. Swamitra-satruvadaru
Anyaya hondidagyu
Kangittu thapapatteru
Nee dhayryavagi nambu

4. Nee melu maduthiralu
Viroda bandarenu
Yadharthanagi bhalalu
Dhornama pattarenu

5. Bhoolokha bandu mitraru
Hodagyu dhukha beda
Melokha thande yendigu
Ninnannu bidalara

6. Anadanagi edharu
Aayasa chinde yake
Sulokha dhootharellaru
Ninnannu kayuthare

7. Bhoomyaseyella hodaru
Samadi matra eega
Nin munde kana bandaru
Apayavenu ella`
  },
  {
    number: 116,
    title: 'Devara preethi srestavu',
    englishTitle: '',
    lyrics: `1. Devara preethi srestavu
Empada bhashekindalu
Preethiyillada jeevavu
Ghanteya sabdavu

2. Preethi kay nannethithu
Kesharin kuniyindalu
Amulyavada preethiye
Nithyavu sthotra ninage

3. Yella varaghalidharu
Viswasa hechagidaru
Preethiyillada manasu
Phalava kodadu

4. Nanasthi bhadavarige
Kottagyu deha bengigi
Ee preethiyilla dhidhare
Yellavu vyarthave

5. Preethiyu thalme yulladu
Preethiyu hage madadhu
Preethi ubbikolladu
Illa hottekichu

6. Preethiyu sittumadadhu
Nenasadu yava kedu
Anyayake ee preethiyu
Santhosa padedhu

7. Yella viswasisuvadu
Yella nirekshesuvadu
Yellava sahisuvadu
Yendigu hogadu

8. Pravadaneghaladharu
Bhashe njanavaraghalu
Nija nashavaguvavu
Preethi saswatha

9. Preethiya sampoornatheyu
Nannalli bharuvagalu
Apoorna vadadhella
Elladhandaguvadhu`
  },
  {
    number: 117,
    title: 'Deva putra rellaru',
    englishTitle: '',
    lyrics: `1. Deva putra rellaru
Yestu baghyavantharu
Papa dukha bayavu
Pariharavayithu
Nanu avarondinge
Palugharanaghuve

2. Kristaninda avaru
Neethivantharadaru
Maanashathiyellaru
Hondi harshisuvaru
Nanu avarondinge
Palugharanaghuve

3. Thande hathra makhalu
Hogha bayapadaru
Devarannu baktharu
Nodalanchalararuh
Nanu avarondinge
Palugharanaghuve

4. Bade kasta bandaru
Nasta hoda lararu
Shrame deva janake
Melu huntumaduthe
Nanu avarondinge
Palugharanaghuve

5. Ihadalli krupeyu
Shayuvalli jayavu
paradalli jeevavu
hondi harshisuvaru
Nanu avarondinge
Palugharanaghuve`
  },
  {
    number: 118,
    title: 'Nin hathra devare',
    englishTitle: 'Nearer my God to thee',
    lyrics: `1. Nin hathra devare
Nannama eruthe
Oh thandeye
Esta -artha thirisa
Nannode asare(2)
Ninnalliye

2. Ee bo prayanavu
Prayasave
Ellelu kathalu
Ontagide
Nin athravidare
Nir-bayavaguthe(2)
En devare

3. Opadra bandaru
Nir bayave
Ithu melokhake
Nechaniye
Prabancha thapisa
Sathgathi
Yothisa(2)
Sahayave

4. Margada laksana
Kedhadaru
Agoora sankata
Bandidharu
Neen hathravidhare
Santhosha vaguthe(2)
En devare`
  },
  {
    number: 119,
    title: 'Modavilladirpa dina',
    englishTitle: 'When the trumpet of the Lord',
    lyrics: `1. Modavilladirpa dina
Swami swarghadalliye
Nanna nama ethi kooghuvaghale
Hagaraghidene swami
Endu uthrakodve
Aga sadananda baghya viruthe
Hagaraghidene swami
Hagaraghidene swami
Hagaraghidene swami
Endu harshadinda uthrakodve

2. Lokha della kadeyinda
Krista baktharellaru
Swarghalokha dhalli
Hagaraghuvaru
Nambi gunapadisuvantha
Yava nija bakthanu
Swamiyinda thalalpadalaranu

3. Yeshu bega baruthatane
Endu njapti maduva
Aa sulokhakera siddaraghuva
Akha kannureppe muchu
Varharolu seruva
A shanthoshadhallli eruve

4. Lokha dhalli aikyaraghi
Athan seve maduva
Jagarokaragi sakshi koduva
Karma marghavella bittu
Athanalli mechuva
Swamikaryadhalli harshagolluva

5. Yesuvina mukthimargha
Nambadiruvavara
Yesuvina munde njapthimaduva
Atha shekra baruthane endu
Saari heluva
Shubha dhina naanu
edhurgholluve`
  },
  {
    number: 120,
    title: 'Anandave! Anandave!',
    englishTitle: '',
    lyrics: `1. Anandave! Anandave!
Na kristha bhakthanadenu
Sambrama padu manave
Naa bhagyavandanadenu
Harshave harshave
Naa bhagyavandanadenu
Krishthesuvena rakthavu
Nannannu shudhamadidhu
Harshave harshave
Naa bhagyavandanadenu

2. Samthrupthanade karthanu
Nannannu drushtisidanu
Virodiyannu kondanu
Nannannu bidisidanu

3. Eevagha manashanthiyu
Untagi thrupthipattanu
Ennella bere asheyu
Amrudha pana vayithu

4. Nannannu devyva sevege
Pradishtte madikondenu
Endende odambadike
Kaapadi sevesuvanu`
  },
  {
    number: 121,
    title: 'Na karthanada yesuswami',
    englishTitle: '',
    lyrics: `1. Na karthanada yesuswami
Hatra bandanu
Nanna papa kasta vella
pariharisidenu
Mughake prakasa athmake
viswasa
Koduthanege devarege sthotravu

2. Oh krysthane nee yake dhuka
Kasta paduthe1
Nee yake managundi sadha
Sothuhoguthe?

3. Sanmargha thappi
chinthacrandanada krysthane
Ninna aptha janarella bittu
Hodrenanjike
Divya yajamana bekadashtu njana
Swakrupeyinda dayapalisuvane?

4. Modhalidhasakthi preethi
thampagideyo?
Nee muche kotta sakshe
Nudi ninthu hoyitho?
Kartha yesukshme, athapattasrame
Ne njapthimadi athanpreethi
maadiko

5. Karthanu begha baruthane
Priya mitrare
Athan sevegagi ennu swalpa
kalave
Honduva sudhathwa erali
sidhathwa
Baa kartanada yesu swami
begene`
  },
  {
    number: 122,
    title: 'Chinteyinda bakthi kundi hodalu',
    englishTitle: 'When upon life billows',
    lyrics: `Chinteyinda bakthi kundi hodalu
Nasta thapa traya kasta muthalu
Karthanalli thoribanda preethiya
Njapthamadi kolluthiru sthotrava
Kristhanalli banda bagyavu
Bakthanada nanna palisu
Ashstishtendu lakhamadalu
Ninna kaigallalliyu asadyavu

1. Rakna chinna belli lokhadavaru
Kodisittu thumbanadapadwaru
Aavu swalpakala matra barvavu
Yesu kottabhagya vendu hogadu

2. Yava kastadalli nevubiddaru
Lokha deshamadi pedisidaru,
Ninna bagyavendu hogalaradu,
Athu kristhanalli badravagwadu.

3. Chinthe bhaya bandarenu?-ninage
Nanna kripe sakhu endu yesuve
Rathre hagalalli dhoora hodhare,
Hatra nindu keluthane ninage.

4. Alpa drudavagi nenu edhare
Devarashirvada hege sikkuthe?
Apanambikella bidu egale
Drudanagi baluthiru, bhakthane!`
  },
  {
    number: 123,
    title: 'Yesu rakshakana maha preethiyu',
    englishTitle: '',
    lyrics: `Sihiyagirvadu
Namma munde
Santhiya nireeksheyu
Dhina dhina sihiyagirvadu
Oh sthotra bali arpisi
Yesto harshadhinda hadvevu
Karthanege aa raghavu
Dhina dhina sihiyagirvadu

2. Nithyajeeva belaku prakasavu
Dhine dhine hechagirvevu
Namma kartha baruvike vagdhana
Dhine dhine shreshtavaguvadu

3. Karthayesu kodwa samadanavu
Dhine dhine priyavagwadu
Paralokhamulyavada sughavu
Dhine mahascharyavagwadu`
  },
  {
    number: 124,
    title: 'Paralokhadhallimpada ramya',
    englishTitle: 'There is singing up in the heaven',
    lyrics: `1. Paralokhadhallimpada ramya
Reethiyindale
Dhoothara saynyavella devrannu
Sthuthisuthare
Alli sadhananadhadinda bheethi
Bhayavillade
Deva simhasanada munde
Nindharadisuthare
Sudha sudhanendadwaru
Dhoothara kooda nanu saha
Sthotra hadwenu
Andu vimochakana preethi
Haduthiralu
Aa dhootharu enjotheyalli
Hadalararu

2. Paralokhadalli-enondu gumpu
Jeetha haduvadu
Thanna raktha surisi nammannu
Kondukondanu
Nammannu paapadinda bidisi
Samrakshisidanu
Endu kurimarigagi
Sthuthi sthotra hadwadu

3. Nanu maha himse pattu
Maha kastadindalu
Namma rakshakana sahayadinda
Yilli bandevu
Enda sabhe raga keluvaga
Dhootharellaru
Andha raghadalli sere shotra
hadalararu

4. Eegha nanu dhoothanalla
Andu kastalokhadhol
Nanu edharu en karthanege
Sthotra hadwenu
Atha kalvari bettadhalli thanna
Prana kottanu
Enda paapiyada nannannu
Rakshesa sathanu`
  },
  {
    number: 125,
    title: 'En en papa negwadu?',
    englishTitle: 'What can wash away my sin',
    lyrics: `En en papa negwadu?
Yesuvena raktha matra
Enu swasthakoduvathu?
Yesuvena raktha matra
Ha divya rakthave!
Ee bhughe allade
Berundu ariye
Yesuvina raktha matra

1. Sudhamada takadhe
Yesuvena raktha matra
Sakhe bali nanage
Yesuvena raktha matra

2. Nasa mosa harana
Yesuvena raktha matra
Athma sudhikarana
Yesuvena raktha matra

3. Badrasraya sikithu
Yesuvena raktha matra
Nambikonde endigu
Yesuvena raktha matra`
  },
  {
    number: 126,
    title: 'Yesu athma kadavanuu',
    englishTitle: 'Have you any room for Jesus',
    lyrics: `1. Yesu athma kadavanuu
Thattuthiruvagale
There ninna manavannu
Athanambu narane
Atha Ghana lokha raja
Kada thattivavanu
Athanaknje enda ega
Manadhalli seresu

2. Atha ninagagi sathu
Raktha chellibittanu
Jayasaliyagi edhu
Ninna preethisuvenu

3. Edhu suprasanna kala
Raksheneya dhinavu
Embha vakya keluvaga
Thadamadade eru

4. Aatha ninthu ninna bali
Sadha kelalaranu
Kadeyalli ninna thalli
Nasa madibidwanu`
  },
  {
    number: 127,
    title: 'There\'s a great day',
    englishTitle: 'There is a great day',
    lyrics: `1. There's a great day
Dhodda dhina baruthe
Dhodda dhina baruthe
Dhodda dhina baruthe
Ennu mele
Baktharu paapishtaru
Bhagisal padwaru
Siddhavagi edeyo neenu
Siddhavagi kadupaapi
Siddhavagidiyo
Nyayathipige
Balagade edagade
Yavadu hogwadw

2. Kanthi dhina baruthe
Kanthi dhina baruthe
Kanthi dhina baruthe
Ennumele
Karthana preethimadwarige
sughavu
Preethininnalli-edeyo nodu

3. Dhuka dhina baruthe
Dhuka dhina baruthe
Dhuka dhina baruthe
Paapiye ninnareye kelwano?
Endha theerpige thapisiko`
  },
  {
    number: 128,
    title: 'Paapavu hogalu asheyunto?',
    englishTitle: '',
    lyrics: `1. Paapavu hogalu asheyunto?
Untu sakthi sakthi rakthadindale
Paapada horeya bidhuhogalu
Untu sakthi rakthadhindale.
Untu sakthi sakthidivyavada sakthi
Namma karthanada yesuvina
rakthadindale
Untu sakthi sakthidivyavada sakthi
Namma yesuvina rakthadindale

2. Garvada bidugade agabeko?
Untu sakthi sakthi rakthadindale
Paapada sereyinda thappisiko
Untu sakthi rakthadindale

3. Saithana jayesalu asheyunto?
Untu sakthi sakthi rakthadindale
Paapada gunava kaleyabeko
Untu sakthi rakthadindale

4. Hemakinda beluvagabeko?
Untu sakthi sakthi rakthadindale
Neethiya vastrava beguttuko?
Untu sakthi rakthadindale

5. Yesu rajana sevebeko?
Untu sakthi sakthi rakthadindale
Nanu avanavanendu oppisiko
Untu sakthi rakthadindale`
  },
  {
    number: 129,
    title: 'Yaro nintheharega horago',
    englishTitle: '',
    lyrics: `1. Yaro nintheharega horago
Kere ee hothathana olagu
Eshto sari nindhida
Bittu hogadandatha
Parisudha yesuva seresu

2. Ninna hrudaya thereswamigu
Hoguthidane kare olagu
Atha ninna snehisida
Ninna athmakadara
Nityavagi kayuva seresu

3. Preethiya sabhda kelu egalu

4. Athannangigarisu athmaku
Atha bagilalliye
Ninthu thattuthidane
Theredaseyindale seresu`
  },
  {
    number: 130,
    title: 'Yesukristhana preethiyannu',
    englishTitle: '',
    lyrics: `1. Yesukristhana preethiyannu
Endadaru keledhiya?
Hege devra lokha bittu
Ninna rakshesa ellebanda
Howdowdu ninna rakshaka
Yesu thane
Howdowdu ninnannu preethi
Maduthane

2. Aathan patta kasta shrameyu
Nana hechagi keledenu
Mathu nijave edanella
Nanagoskara thaledhanu

3. Yesu ee nanna manaviya
Dayamadi angegarisu
Divya parisudhathmaninda
Ninna hatra nanna seresu`
  },
  {
    number: 131,
    title: 'Yesuswami ninagai',
    englishTitle: '',
    lyrics: `1. Yesuswami ninagai
Sathidhane
Baray baray evagale
Baray evagale

2. Ninna papa parihara
Madaballa
Baray baray evagale
Baray evagale

3. Thallalara nambu matra
Oh paapathma
Baray baray evagale
Baray evagale

4. Thade made bande bande
Nambuthene
Egha egha evagale
Nambuthenegale`
  },
  {
    number: 132,
    title: 'Krishthesu kareda',
    englishTitle: '',
    lyrics: `1. Krishthesu kareda
Paapathmane
Eeghale kareda
Kelpaapiye

2. Eehothu kareda
Ohdodiba
Bittogu manuja
Dhurmarghava

3. Eehothu kareda
Kelathana
Ninodeya ninna
Kapaduva

4. Eehothu kareda
Su-premadi
Nee keladidhare
Halaguthe

5. Eehothu kareda
Keledhiya
Krishthesu kayuva
Ninathmava`
  },
  {
    number: 133,
    title: 'Ninnindenu beduvu',
    englishTitle: '',
    lyrics: `1. Ninnindenu beduvu
Beda paapiye
Yesu yella madwanu
Munche nichave
Yesuthirithendanu
Thirithellavu
Eshte saaku allave
Bhaki enede?

2. Swarghalokhabittanu
Ninagagiye
Swantha jeevakottanu
Nambu paapiye

3. Yaake kashta paduthe
Paapadindale
Yake bhara horuthe
Yella vyarthave

4. Swantha neethi arpisi
Aathana paadake
Kristhanalli nambalu
Kshameyaguthe`
  },
  {
    number: 134,
    title: 'Oh olle sudhe rakshane',
    englishTitle: '',
    lyrics: `1. Oh olle sudhe rakshane
Sampoornavayithu
Paapishtarella karuna
Eegonda bahudu
Na nambuve na haduve

2. Kristhesu namma rakshaka
Samadi bittanu
Simhasanada hathira
Madyasthanadanu
Na nambuve na haduve

3. Ee subha samacharava
Bachidabedere
Bhoomyandagala talaka
Prasidhi madiri
Na nambuve na haduve

4. Prapanchadavarellare
Srashtanga belere
Vimochakana namake
Mahathwa kodiri
Na nambuve na haduve

Ghana mana sthuthi sthotra
Yesu swami gagalendu
Yesu namma rakshakanu
Haleluya! Haleluya!
Haleluya!
Sthuthisiri`
  },
  {
    number: 135,
    title: 'Oh yesu swami ninnalli',
    englishTitle: '',
    lyrics: `1. Oh yesu swami ninnalli
Sanmargha kandenu
Ninnalli horthu parake
Seralikagadu

2. Nee satha ninna vakyavu
Njanopadeshave
Subhudhe sudha manasu
Ninnindalaguthe

3. Nee jeeva ghore tegedu
Savanna jayesidhe
Ninnannu nambidavanu
Entheka-njali?

4. Nee margha sathya jeevavu
Ninnannu nambuve
Neenobhane sadhguruve
Ninnannu seruve`
  },
  {
    number: 136,
    title: 'Oh yesu ninna preethi',
    englishTitle: '',
    lyrics: `1. Oh yesu ninna preethi
Amithavadadhu
Sampoornavada neethi
Ninindhalayithu
Nannalli ninna njana
Uthpathiyadhare
Maha anandadinda
Ninnannu seruve

2. Yen papa bandadinda
Nee nanna bidisi
Aghora kedeninda
Rakshane madide
Sampoorna neethiyannu
Ninninda hondede
Aanandha bhagyavannu
Sampadya madede

3. Oh paapi ninna dhroha
Aparavadaru
Ninnalli mansthapa
Eshtagi edharu
Dayalu karthanu
Nee bede konderu
Ninnella kashtavannu
Nivarisuvenu`
  },
  {
    number: 137,
    title: 'Kripeyulla yesu kartha',
    englishTitle: '',
    lyrics: `1. Kripeyulla yesu kartha
Nannanegha drustisu
Ninna poorna kanikara
Dayavagi thorisu
Naanu paapi naanu paapi
Thalla bidade eru

2. Kashtapettu baravannu
Horuvanda janare
Nanna hatra odibandu
Santhi hondirellare
Embha maathu embha maathu
Neenu adalillave

3. Bandedene divyamithra
Neenu nanashrayavu
Ninna mele nanna bara
Egha horesidhanu
Nanna bhara
Neenu hothukondiru

4. Nanna apavitra guna
Poornavagi negesu
Ninna hinde antehoga
Sakthidayapalisu
Mokshadalli
Mokshadalli
Tharuvaya seresu`
  },
  {
    number: 138,
    title: 'Yordan nadi theeradol',
    englishTitle: '',
    lyrics: `1. Yordan nadi theeradol
Enaspada
Savin there ghoshadhol
Enaspada
Margha bittu paapiye
Aagha yenu nambike
Daiva krupe illade
Enaspada, Enaspada

2. Dehachara madalu
Enaspada
Bhakthiveshaviddaru
Enaspada
Nitya japasthanaku
Bandu bandu kootharu
Gunavilladidhare
Enaspada
Enaspada

3. Jare bidhu krysthare
Enaspada
Kade dhina bandare
Enaspada
Manasakhi peedisi
Gada gade nadugi
Munde enu maduve
Enaspada?
Enaspada?

4. Ninage nanathmave
Enaspada?
Pranahoguvalliye
Enaspada?
Rakshakana edeye
Athukondu sayuve
Yesuvina silube
Nan aspada
Nan aspada`
  },
  {
    number: 139,
    title: 'Yen dyana melana lokhave',
    englishTitle: '',
    lyrics: `1. Yen dyana melana lokhave
Pavitra desave
Edhare mitraralliye
Sukshemavandare
Allege hogwe
Allege hogwe
Allege hogwe
Allege hogwenu

2. Yen dyana melana lokhave
Yen swamiyalliye
Gambheeravagi aluva
Sapoorna harshave
Allege hoguve(4)

3. Yen dyana melana lokhave
Amulya sthanavu
Kereetta sikkuvadalliye
Uthsaha thirithu
Allege hoguve

4. Yen dyana melana lokhave
Suvarna desavu
Suraga hadi endigu
Sambrama thirithu
Allege hoguve(4)

5. Yen dyana melana lokhave
Vagdatha desave
Enathma thumba koruthe
Aa lokha serleke
Allenda hoge
Allenda hoge
Allenda hoge
Allenda hogenai`
  },
  {
    number: 140,
    title: 'Paapi yeke nasise',
    englishTitle: '',
    lyrics: `1. Paapi yeke nasise
Eke sathu hoguthe?
Swantha prana thegedu
Kedelenne mithanu?

2. Thandeyada devaru
Rakthakoota yesuvu
Snehesuva athmanu
Yethakendu andaru

3. Neethi margha thyajisi
Paapadalli sathidhe
Eradane marana
Thalalase patteya?

4. Mosa sthanadalli nee
Eke nindu konde dhe?
Narakada badege
Bhayavenu ellave?

5. Kelu kelu droheye
Krupa sabha hoguthe
Kivi kottu thirigu
Kshame honed badukku`
  },
  {
    number: 141,
    title: 'Devarajyadalli untu',
    englishTitle: '',
    lyrics: `1. Devarajyadalli untu
Enu sthala paapiye
Howdu yesuswamiyalli
Divya punya sikkuthe
Banni banni
Banni banni
Yesuswami priyane

2. Yesu paapiyannu howdu
Angegarisuvenu
Nitya jeeva nitya sugha
Koduthane nijave
Banni banni
Banni banni
Yesuswami mithrane

3. Ninna mele yesu kristha
Preethiyittu sathanu
Egha nimma paapavella
Pariharisuvenu
Banni banni
Banni banni
Yesuswami apthanu

4. Begha banni yellasidda
Egha shane sthalavu
Yesuvannu nambikondu
Papa kalakollere
Banni banni
Banni banni
Yesu rakshesuvenu`
  },
  {
    number: 142,
    title: 'Yesu swami ninagage',
    englishTitle: '',
    lyrics: `1. Yesu swami ninagage
Thanna prana kottanu
Nimma papa kshame gagi
Kooguthane nimmannu

2. Nambiri egale
Nambi banni ee hothe
Egale bandare
Nija mukthi sikkuthe

3. Dhodda paapiyagidene
Howde mathunijave
Paapavella bittu nambi
Samadhana honduve

4. Shane dhina paapadalli
Bhididene nischaya
Nanna mele deva preethi
Untu esto ascharya

5. Paapakaki dhuka pattu
Beduvanda ninnannu
Yesuswami sersikontu
Santhipalisuvenu

6. Swamihatra hoguthiri
Aa suvarna desadi
Nitya jeeva sugha alli
Honduthira-nandadadhi`
  },
  {
    number: 143,
    title: 'Howduntu sowbhagyavu',
    englishTitle: '',
    lyrics: `1. Howduntu sowbhagyavu
sudharege
Devograda bhayavu thappiede
Paapathmarigoskara rakshaneyu
Untesuvinolage endendigu
Oh kartha preethiya
Hadiri bhakthare
Yesuvu rakshesa
Baleshtane

2. Howduntu sowbhagyavu
sudharege
Pavitra sowbhagyava hondedhare
Hrudayadholegalu devathmanu

3. Howduntu sowbhagyavu
sudharege
maha samadanavu avarade
krishthesu thalida silubeyu
sampoorna vimochakane
koduvadu

4. Howduntu sowbhagyavu
sudharege
pisachina thantravu sothogide
dhurmaranavagadu krystharege
samadiya mele jayavide`
  },
  {
    number: 144,
    title: 'Athi kartha kristhane!',
    englishTitle: 'Rock of ages',
    lyrics: `1. Athi kartha kristhane!
Silalpatta bandeye!
Nenu patta gayavu
Hoyda neru rakthavu
Nanna papa negesi
Poorna sudha madali

2. Deyva katle kaigondu
Bala sakthi ellavu
Eshtu thapa pattaru
Kaneerestu bittaru
Nanna droha hogadu
Kartha nene rakshesu

3. Yesu ninna silube
Nannadara vagide
Nanu ghora papiyu
Neethi vastra hothisu
Neenu thalli bittare
Bhere gadi yellide

4. Bhoonivasa dhalliyu
Sayuthiruvagalu
Nyaya thirpinalliyu
Yuga yuga vendigu
Silalpatta bandeye
Nene dhiku nanage`
  },
  {
    number: 145,
    title: 'Oh bannere herekireyare',
    englishTitle: '',
    lyrics: `1. Oh bannere herekireyare
Suragha yethiri
Hosanna endu kristhage
Empagi hadiri
Devavadhara athane
Santhosapadiri
Rajadiraja prabuve
Sashtanga beleri

2. Kristhesuvina namavu
Mahatwavulladhu
Samastha jana adhannu
Kondadathakkadu
Howdathane vimochaka
Lokhopakariyu
Ellarigatha rakshaka
Saswathashrayavu

3. Anandhavulla lokhava
Kannethi drshtisi
Allakuvantha vaybava
Ellinda nodiri
Aha aa sugha poorthiyu
Sampadyavadare
Nirandrarbadisuvevu
Bhalesu swamiye`
  },
  {
    number: 146,
    title: 'Kanekara sikhithe',
    englishTitle: '',
    lyrics: `1. Kanekara sikhithe
Paapiyada nanighe
Dhoksha shame adithe
Buddi ghetta drohige

2. Bhahukaladindalu
Karthanannu bitten
Athagesto dhukava
Nanu huttisidenu

3. Dheerghasanti karthanu
Ennu thorisidanu
Preethiyinda athanu
Yesuvannu kottanu

4. Nanagagi kristhanu
Gayapattu sathanu
Vayregagi athanu
Karya karthanadenu`
  },
  {
    number: 147,
    title: 'Silbe pattavanannu nodidhare',
    englishTitle: '',
    lyrics: `1. Silbe pattavanannu nodidhare
Jeevadholpathiyaguvadu
Oh paapathmare nodirievagale
Sapa thalida kristhanannu
Nodo nodiri
Silbe pattavanannu nodidhare
Jeevadholpathiyaguvadu

2. Yesu thannanu oppisikottagale
Nimma dhoshavu hariyithu
Atha rakthava chelli sathagale
Nimma salavu santhoyithu

3. Japathapa gholattadindenu ede?
Athma rakshane hondisavu
Devaputrana rakthada bhuge-onde
Sudha hrudaya koduvadu

4. Sandehavu yake?yahova thane
Sthira vagdadwa madidhanu
Sreshta yachakanada kristhesuve
Paralokhadhol madyasthanu

5. Santhosadindegalu thakolliri
Nityajeevada dhanavannu
Mathu nischayavagi grahisiri
Savu nimmannuu kedisadu
Nambo nambiri
Silbe pattavanannu nambidhare
Jeevadholpathiyaguvadu`
  },
  {
    number: 148,
    title: 'Yesu kareyuthanallave?',
    englishTitle: '',
    lyrics: `Yesu kareyuthanallave?
Thada madade begane ba
Anandhadinda ba

Yochane madu kartha thane
Dayada mathu heluthale
Videyanagi kel paapiye
Rakshane Honda baa`
  },
  {
    number: 149,
    title: 'Kristhesu nija thirthavu',
    englishTitle: '',
    lyrics: `1. Kristhesu nija thirthavu
Ee theerthadholage
Paapathma tholaakollalu
Sudheya hondwenu

2. Elli prasidha dushttanu
Sudhatwa hondida
Paapathmanada nannannu
Nirmala maduva

3. Ee bhuge kanda nanage
Sambrama huttithu
Swarghadholu ondaduve
Ee sreshta theerthava

4. Ee thirthadalli sudheya
Hondida paapiyu
Athanda sudha devara
Samooha servanu

5. Na nambuve nan haduve
Rakshane nannadu
Nannaparada harisi
Kristhesu sathanu`
  },
  {
    number: 150,
    title: 'Kannethi kroojeyannu',
    englishTitle: '',
    lyrics: `1. Kannethi kroojeyannu
Paapathma drushtisu
Swamiya preethiyannu
Endu dwanisu
Aa shrama ninagage
Kristhesu thalida
Ninna akramakaki
Swaraktha chellida

2. Paapathmane aleysu
Sandeha bedavu
Viswasigestu matra
Rakshane thappadu
Rogishtta nanna hatra
Kshemake baralu
Arogya koduthane
Endesu andanu

3. Swaneethi nambabeda
Athella vyarthavu
Prapanchada prabhava
Ne noda baradu
Kristhesu swami thane
Ninonde marghavu
Paapathmama banda kodle
Vimochisuvenu

4. Ennelli manasanthi
Yarigu sikkathu
Hrudayada vishranthi
Ennelli ellavu
Oh paapi bandu nodi
Vimochakanannu
Bayavella thoredu
Athan nambiru`
  },
  {
    number: 151,
    title: 'Kaiyalli ondu ellade',
    englishTitle: 'Just as I am',
    lyrics: `1. Kaiyalli ondu ellade
Ninhatra bande karthane
Nee sathee nanagagiye
Paapathma drushtiseysuve

2. Kaiyalli ondu ellade
Na kettu hoda droheye
Ne matra gathi nanage
Paapathma kshamesaisuve

3. Kaiyalli ondu ellade
Na kevala ayoghyane
Dhowbarghya nodi thallade
Paapathma seriseisuve

4. Kaiyalli ondu ellade
Ennava dikku kanade
Ninnanu mathra nambide
Paapathma rakshisesuve`
  },
  {
    number: 152,
    title: 'Devara dayave',
    englishTitle: '',
    lyrics: `1. Devara dayave
Paapiyakadege
Pratyakshavagide
Nodega paapiye
Yararu nodi nambwaro
Nirantra jeeva hondwaru
Nirantra jeeva hondwaru

2. Ganeya sarpava
Nodida hageye
Kroojitha yesuva
Ne nodu paapiye

3. Nasana madalu
Kristhesu ballanu
Rakshane ellargu
Pooraysa bandanu

4. Paapige sapavu
Nimisalpattithu
Kristhesu swamiyu
En thappisidanu

5. Paapiya mitrane
Nanna sahayisu
Santhidayakane
Nanangegarisu`
  },
  {
    number: 153,
    title: 'Yesuvanne preethimaduvenu',
    englishTitle: '',
    lyrics: `1. Yesuvanne preethimaduvenu
Videyanagi naniruvenu
Nannannu eshtagi snehisida
Hagalu rathri kaapaduthidha
Avana seve maduvenu
Neenu maduvadillavo?
Avana seve maduvenu
Nannannu snehesida

2. Yesuvanne preethimaduvenu
Avannendigu nambuvenu
Avanu nanage chinthisutha
Jeevatha anthyaku poshisuva

3. Yesuvanne preethi maduvenu
Paapada asheya biduvenu
Avana melake kareyalu
Sthotrada kondatta koduvenu`
  },
  {
    number: 154,
    title: 'Rakshaganannu seregale',
    englishTitle: '',
    lyrics: `Rakshaganannu seregale
Marghava veda thorisuthe
Karuna sabha untallave?
Oh paapi etha baa

Harsha harsha nitya maheme
Yesu swami kotta nanage
Thiliru manavaguthade
Thandeya maneyol

Makale banni endu hega
Yesu kareyuthanallave?
Thada madade begane ba
Anandhadinda ba

Yochane madu kartha thane
Dayada mathu heluthale
Videyanagi kel paapiye
Rakshane Honda baa`
  },
  {
    number: 155,
    title: 'Edhane Ghana vaydyanu',
    englishTitle: 'The great physician now is near',
    lyrics: `1. Edhane Ghana vaydyanu
Kattakshavulla yesu
Arogya mada ballanu
Sukshema elli kelu
Ha empada swarave
Athiramya ragave
Mudhu mudhu hesare
Yesu priya yesu

2. Nirbaya santi koduthe
Kristhesuvina dyana
Anandha parimalave
Ee srshttavada nama

3. Kondadiri samasthare
Ee divya mitranannu
Ananda pattu manave
Aradiseysuvannu

4. Aleysi herekiriyare
Krishtesu namma jeeva
Namathmadapthanathane
Samadi jayisidatha

5. Na paralokhakeralu
En haadu yesu swami
Berondu namavendigu
Na sthotra madalolle`
  },
  {
    number: 156,
    title: 'Rakshaka yesuvu kareyuthane',
    englishTitle: '',
    lyrics: `1. Rakshaka yesuvu kareyuthane
Manujane manujane
Ninage sudathwa koduthane
Ee hothu kelu

2. Egale ninage heluthane
Nanna hatra baa
Nanna hatra baa
Paapavanella nanmannisuve
Visranthi koduve naa

3. Paapada bettava mel yake
Aleyuthe oh manuja
Devaru hatra edhanallave
Ninnannu seresuva

4. Nambidhare nitya jeevavannu
Koduvanu koduvanu
Nambade hodare narakavu
Ninage aguvadu`
  },
];
