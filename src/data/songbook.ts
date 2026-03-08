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
  {
    number: 157,
    title: 'Devarinda untada vakya',
    englishTitle: 'Word of God',
    lyrics: `1. Devarinda untada vakya
Nanna bokha sagide
Nanadannu dina dina
Dhyana madikoluve
Samadhana, nithyabaghya
Anubhavavaghuthe

2. Dustanadavana mosa
Enduprapthisidharu
Devavakya kadghadinda
Edurisi nilluve
Dairyavaghi, yudhamadi
Jayashali yaghuve

3. Lokhadalli bade bidi
Dukha kasta bandharu
Deva vakya visranthi
Kooda balavulladhu
Ghrantha rakna, daiva kjana
Neenu nanagasthiyu`
  },
  {
    number: 158,
    title: 'Parathparana vakyavu',
    englishTitle: '',
    lyrics: `1. Parathparana vakyavu
Eshto nirmalavu
Ella dhurmarghagaligu
Virodavaddadhu

2. Darpana mugha bavava
Thorisuvantheye
Sadwedavu aandaryada
Prathyaksha maduthe

3. Ee vedavannu dyanisi
Kaykolluvavaru
Kalamkavannu thyajisi
Sudhatwa hondwaru

4. Devathmane aa vakyava
Namage bhodisu
Thadanusara nadeya
Sahayavagiru`
  },
  {
    number: 159,
    title: 'Sudha divya grandave',
    englishTitle: '',
    lyrics: `Sudha divya grandave
Nanna sreshta dravyave
Thorisenna sthitiya
Helu dayva sruthiya
Sudha divya grandave
Sreshta dravyavenage

Nene nadisennannu
Thoresenna paapava
Neene nanna rakshane
Nanna jeeva marghave
Sudha divya grandave
Sreshta dravyavenage

Mokshada anandava
Madenalli kachitha
Marananada garadi
Nillalike dayryedi
Sudha divya grandave
Nene bhodisenage

Nanu sathu elalu
Mahema kerettava
Devarinda honduva
Margha budhi sakthiya
Neenu bhodisenage
Sudha divya grandave`
  },
  {
    number: 160,
    title: 'Samudra hatradi',
    englishTitle: '',
    lyrics: `Samudra hatradi
Kristhesuve
Ascharya reethilli
Kottantheye
Jeevada rottiya
Oh palisu
Nannathmadaseya
Nee theerisu

Ninnannu bettare
Badukenu
Enyara balege
Hogonavu?
Prema sampoornane
Vedhokthiya
Preethisuvantheye
Preresenna

Devathma preritha
Shastradalli
Jeevada nayaka
Adagidhe
Allenu kanada
Kurudanu
Ninnannu rakshesa
Drushtikodu

Ninnanelelliyu
Hudukuve
Nannathmaharavu
Nee matrave
Melana lokhadhol
Ninondige
Shaswathanandhadhol
Naniruve`
  },
  {
    number: 161,
    title: 'Aadhiyalli devaru',
    englishTitle: '',
    lyrics: `1. Aadhiyalli devaru
Sthre-purusharibbara
Untumadi avara
Thane ondu madida

2. Deiva katle merege
Eegha aadha madhuve
Shrusti karthanindale
Aashirvadha hondhuthe

3. Paraspara preethiyu
Ebbarallu huttisu
Jeevadanthya mattigu
Aikyadalli erisu

4. Ella kaladhalliyu
Obarannu obaru
Preethiyinda seirise
Jeevanava madali

5. Sathrukala banakku
Papa karma dhoshakku
Evarannu thappisu
Preethiyinda kapadu`
  },
  {
    number: 162,
    title: 'Kana urinalli ebbaru',
    englishTitle: '',
    lyrics: `1. Kana urinalli ebbaru
Vivahavaghuthirallu
Kristesu alli hodanu
Thannashirvada kottanu

2. Ade prakara nammanu
Ee hothu ashirvadisu
Eeghaghuvantha maduve
Mangala madu karthane

3. Sabeya madalingane
Aleysunamma namma prathane
Elli prasannanagiru
Ninna katakshethorisu`
  },
  {
    number: 163,
    title: 'Banni koda haduva',
    englishTitle: '',
    lyrics: `1. Banni koda haduva
Harshadinda geetava
Mosa nasta kastavu
Yestu bandu edharu
Jeevadinda egalu
Hosa varsha kandevu
Hatravidhu thandeyu
Nammanella kadenu
Banni kooda haduva
Harshadinda geethavao

2. Yestodroha thalida
Yesto papa muchida
Namma kadegathanu
Deergha santhanadenu
Ramya sthaladalliye
Namma bhaga bidhade
Howdu namma patreyu
Thumbi chelli hoyithu
Banni kooda haduva
Harshadinda geethavao

3. Hosa varsha kottanda
Krupeyulla devara
Hosa asirvadava
Egha bedi kolluva
Athakundu endigu
Athadiga dayavu
Ghana mana karthane
Honda yogyanu neene
Banni kooda haduva
Harshadinda geethavao`
  },
  {
    number: 164,
    title: 'Ennondu varshavu',
    englishTitle: '',
    lyrics: `Ennondu varshavu
Samapthavayithu
Ee mere namma ayusu
Mugidu hogwadu

Onnondu varshavu
Nammannu dattalu
Pranandya vaguva kalavu
Sameepa vagwadu

Thalkala matrave yen swantha
Vadadu
Eekala nashtavadare
Na huchanadenu

Lakshandra sampathu
Eedagi kottaru
Sandeha kalayarigu
Yendendu sikhadu

Thatkala nanage
Amulyavadadu
Sugeeva honda egale
Thakanda veleyu

Oh devarathmane!
Ee dhodha nenapu
Yellara athmadolage
Beroora madisu`
  },
  {
    number: 165,
    title: 'Howdu howdu',
    englishTitle: '',
    lyrics: `1. Howdu howdu
Mitranundu
Akasadalliye
Athanda priyamitra
Sathbalakarege

2. Howdu howdu
Sughavuntu
Akasadalliye
Nirandravada nanda
Sathbalakarege

3. Howdu howdu
Maneyuntu
Akasadalliye
Uthama vasa sthala
Sathbalakarege

4. Howdu howdu
Ghana untu
Akasadalliye
Mahatwada kereetta
Sathbalakarege

5. Na yesuswamiyannu
Viswasisidhare
Aa sreshta lokhadalli
Kadeyalli seruve`
  },
  {
    number: 166,
    title: 'Ninna margha karthane',
    englishTitle: '',
    lyrics: `1. Ninna margha karthane
Thorisenna athmake
Bakthi santhi thalmeyu
Nannalli eresesuve

2. Naanu kusu adaru
Ninna snehisuvenu
Jeevavakya dindale
Nanna poshisesuvae

3. Nanna Shakti swalpavae
Thrana kodu karthane
Nanu jawradandeye
Nannna kayi yesuve

4. Nanu bhudhi heenanu
Neenu poorna njaniyu
Sathya mathu yochane
Neene hottisesuve

5. Nanna athma satruvu
Thanna bale odalu
Hatravidhu begane
Thapissenna yesuve

6. Baktha margha bidadhe
Ninnanathukolluve
Moksha rajyadholage
Nanna seresesuve

7. Divyavada karthane
Nanna dhina prarthane
Daya made thalade
Kelu priya yesuve`
  },
  {
    number: 167,
    title: 'Kurba nande munde hogu',
    englishTitle: 'Saviour Like a Shepherd Lead Us',
    lyrics: `1. Kurba nande munde hogu
Namma divya karthane
Ninna mandeyannu meysu
Ramya holadalliye
Priya yesu priya yesu
Navu ninna mandeye

2. Mandeyannu preethiyinda
Marghadalli nadisu
Thappihoda kuriyannu
Karunisi huduku
Priya yesu priya yesu
Kelu kelu nammannu

3. Navu papa madidagyu
"Bhanni nanu tallanu;
Nirmalatwa koduthene"
Endu nenu helide
Priya yesu priya yesu
Barutheve eghale

4. Balyadalli ninna daya
Namma mele erale
Ninna divyavada preethi
Edeyannu thumbali
Priya yesu priya madu
Hinde preethi madidhe.`
  },
  {
    number: 168,
    title: 'Yesu lokhadalli',
    englishTitle: '',
    lyrics: `1. Yesu lokhadalli
Eruvagale
Ele makalannu
Harisidhanu
Paradhalli kooda
Preethiyindhalu
Makalannu atha
Snehisuvanu

2. Makalu athana
Bede kollalu
Atha preethiyinda
Rakshisuvanu
Thanna kaykalalli
Ethikolluvenu
Thana edeyalli
Apikolvenu

3. Bhooprayanadalli
Nadisuvenu
Swarghanaandalli
Seresuvenu
Jeeva jalavannu
Koodisuvenu
Yella dhukavannu
Harisuvenu

4. Nanagagi sathu
Edha karthane
Ninna namake yendu
Sthotra maduve
Jeevakaladalli
Asirvadisu
Savu baruvalli
Swarghakerisu`
  },
  {
    number: 169,
    title: 'Yesuvena preethiyu',
    englishTitle: 'Jesus Loves Me This I Know',
    lyrics: `1. Yesuvena preethiyu
Untu nanna meleyu
Makalannu athanu
Angegarisuvenu
Howdawdu nija(3)
Sadweda mathidu

2. Preethiyinda silube
Yesu thaldanallave
Nanna papa athanu
Pariharisuvanu

3. Athanannu na saha
Snehesuvenu saha
Yesu agha nannannu
Swarghakeresuvanu`
  },
  {
    number: 170,
    title: 'Howdowdu sikithu',
    englishTitle: 'There Is a Happy Land',
    lyrics: `1. Howdowdu sikithu
Sudesavu
Sowbhagya janaru
Allavaru
Rakshaka yesuvu
Sthotrahonda yogyanu
Yendendu hadwaru
Yendendigu

2. Aa olledeshake
Baruthiya?
Thadavu ethake?
Eehothe baa
Oh yesto bhagyavu
Anubhavisuvevu
Kaneeru ellavu
Yendendigu

3. Aa bhagya desadhol
Anandave
Thandeya hatradhol
Sowbhagyave
Vaybhava lokhake
Raja mudigagiye
Mundodu begane
Balendigu`
  },
  {
    number: 171,
    title: 'Howduntu olledesavu',
    englishTitle: '',
    lyrics: `1. Howduntu olledesavu
Meleye meleye
Upadra yendu elladu
Sugave sugave
Allella jana yogyaru
Allella mathu preethiyu
Allella kriye shudavu
Sugave sugave

2. Kanneru alli ellavu
Sukave sukave
Pisachahatra seranu
Sugave sugave
Adeshada nivasiyu
Endendu bhagyavandanu
Amrutha panavayithu
Nithyave nityave

3. Navella sapagrastharu
Nijave nijave
Krishtesu rakshisidanu
Preethiye preethiye
Ee divya yaknjapasuvu
Samastha papa tholedu
Melokakeresuvanu
Bhagyave bhagyave`
  },
  {
    number: 172,
    title: 'Priyarada makale',
    englishTitle: '',
    lyrics: `1. Priyarada makale
Namma koda bhannire
Kanthiyulla lokhake
Bhanni bhanni
Harsha halleluya
Sthuthisiri

2. Thandeyada devare
Alle drushtisuvevu
Kanthiyulla lokake
Bhanni bhanni
Harsha halleluya
Sthuthisiri

3. Yesunamma rakshaka
Alli thoribaruva
Kanthiyulla lokake
Bhanni bhanni
Harsha halleluya
Sthuthisiri

4. Jeevada kireetavu
Sikidevu
Alli thoribaruva
Kanthiyulla lokake
Bhanni bhanni
Harsha halleluya
Sthuthisiri

5. Atyananda yendigu
Anubhavisuvevu
Kanthiyulla lokake
Bhanni bhanni
Harsha halleluya
Sthuthisiri

6. Naavu nimma sangada
Barutheve egale
Kanthiyulla lokake
Bhanni bhanni
Harsha halleluya
Sthuthisiri`
  },
  {
    number: 173,
    title: 'Ehadhalli namage',
    englishTitle: '',
    lyrics: `1. Ehadhalli namage
Bade dhuka kashtava
Vishrandi nanage?
Yesto santhosa
Yesto santhosa
Yesto santhosa
Swargadalli aguthe

2. Satbhaktharu matrave
Bhagyavulla lokake
Serona vayithu
Bhalyanada nanage
Devabhakthiyidhare
Aa sthalaseruve

Nanna priya yesuvu
Nanna kannegendigu
Pratyakshavagwanu

Alli deva maheme
Drusyavagi nanage
Yavagu bhagyave`
  },
  {
    number: 174,
    title: 'Bhooparaloka devare',
    englishTitle: '',
    lyrics: `1. Bhooparaloka devare
Samastha koduvathane
Ananda sthotra ninage
Dayaprane

2. Nininda soorya thapwade
Sada udaya vaguthe
Ananda sthotra ninage
Dayaprane

3. Bhoopalavannu uttisi
Yellara jeeva kayuthe
Ananda sthotra ninage
Dayaprane

4. Samsara kshamabalege
Ninnasirvada dindale
Ananda sthotra ninage
Dayaprane

5. Ee lokhada rakshanege
Swaputranannu kottide
Ananda sthotra ninage
Dayaprane

6. Nee kotta sudha vedave
Nannathmake adharane
Ananda sthotra ninage
Dayaprane

7. Melana lokha badyathe
Koduthenendu helidhe
Ananda sthotra ninage
Dayaprane

8. Nannannu ninna sevege
Santhosadinda oppisi
Ninnannu matra nambuve
Dayaprane`
  },
  {
    number: 175,
    title: 'Kathalalli deepa uriyuthade',
    englishTitle: 'Jesus Bids Us Shine',
    lyrics: `1. Kathalalli deepa uriyuthade
Hage sugunadi priya maguve
Belakina hage guna thorisu
Edhe yesu swami kotta
Aaknjeyu

2. Namma suthu muthu yestu paapavu
Yella janaralli nadiyuvadu
Naavu sudharagi kanthi koduva
Karthanada yesu mechikolluva

3. Aathmadalli deena gonavidhare
Olle mathu kriye sada bharuthe
Hege namma deepa kathalalliyu
Olle belakannu sada kodwenu`
  },
  {
    number: 176,
    title: 'Hrudayavannu magane',
    englishTitle: '',
    lyrics: `1. Hrudayavannu magane
Nanage oppisu
Parama thande hegeye
Aaknjapisedenu
Oo bhanni bhanni makale
Yesu swami hatrabhanni
Neevu bhandare nimma hrudaya
Poorna sudhavaguthe

2. Akramadhalli huttidhe
Asudha paapiye
Naa sarva sakthanagiyu
Sudhathwava koduve

3. Nee dhooradhalli hodaru
Na yendu bidanu
Ninna thadeginda premade
Samrakshisuvenu`
  },
  {
    number: 177,
    title: 'Na cheeyona bettavaneruthene',
    englishTitle: '',
    lyrics: `1. Na cheeyona bettavaneruthene
Ondige yesu edhane
Ananda manege seruthane
Ondige yesu edhane
Yesu yesu
Yenondige yesuedhane
Yesu yesu
Yenondige yesuedhane

2. Ee payanadhalli yesto santhosa
Ondige yesu edhane
Nanathma dwaniya keluva
Ondige yesu edhane

3. Ee payana thoredare bandarenu
Ondige yesu edhane
Nanella himseya thaluvenu
Ondige yesu edhabe

4. Aa cheeyon janaru haduthare
Ondege yesu edhane
Sampoorna jayava honduthare
Ondige yesu edhane

5. Ee payana antyava bayasuthene
Ondege yesu edhane
Nirantra maneyalliruthene
Ondege yesu edhane`
  },
  {
    number: 178,
    title: 'Aa maguvannu nodiri',
    englishTitle: '',
    lyrics: `1. Aa maguvannu nodiri
Godaliyalli malagi
Samastha lokhada odeya
Alliavathara madidha

2. Ohh Ghana raja! Vandane
Nee bandi paapikoskarwe
Yestagi thagisikondadu
Yesto hechada dayavu

3. Oh swarva lokhadodeya
Yenagi nannagoskara?
Aakasa sthanavagali
Dheenatwadalli seredhe

4. Ee lokhavella raknadu
Bhangaradi thumbidaru
Oh yesu ninagendigu
Thakanda dhanavagadu

5. Nanaptha priya karthane
Nivasa madenolake
Ninnannu yugha yughaku
Kondade harshisuvenu`
  },
  {
    number: 179,
    title: 'Sahodrare yellaru harshisi',
    englishTitle: '',
    lyrics: `1. Sahodrare yellaru harshisi
Maha santhosadinda hadiri
Aa dhinadalli jeeva prabhuvu
Prapanchodarakagi bandanu
Ee marmavannu swarghadavaru
Anandapattu saruthidaru

2. Mahonathagalalli sthotravu
Bhoolokhadalli samadanavu
Daveeda pattanadholu rakshaka
Dayvanugrahadinda huttida
Hegendu paralokha saynyavu
Gambeera raga ethikondaru

3. Ee athisayavada janana
Yavagyo njapthimadikolluva
Arambhadinda kade thanaka
Krishthesuvina srame noduva
Yesto prayasa prana sangatta
Namma nimithavagi thalida

4. Aashcharyavada preethi dyanisi
Vimochana heche hathire
Kadelli moksharajyadolage
Samastha dhootha saynyadholage
Sashttanga bhidhu hadi annuva
Nirandra balu divya rakshaka`
  },
  {
    number: 180,
    title: 'Chikkavarada namage',
    englishTitle: '',
    lyrics: `1. Chikkavarada namage
Dayava madu yesuve
Newthanavada manasu
Untaga madi rakshisu

2. Chikkavarella barali
Nanaasirvada hondali
Neenu helida hageye
Bandu edheve karthane

3. Namolu bhudhi swalpave
Namolu guna kettade
Adagyu ninna preethiyu
Yesto vistharavadadhu

4. Paapavanella mannisu
Nammannu asirvadisu
Pishachaninda thapissu
Ninna rajyake seresu`
  },
  {
    number: 181,
    title: 'Kelu dhoothar ghanava',
    englishTitle: '',
    lyrics: `1. Kelu dhoothar ghanava
Ghanaraja huttida
Swarghadalli maheme
Bhoomiyalli karune
Yella jana nambali
Dhootharkooda hadali
Bethlaheminolage
Param jyothi thorede
Kelu dhoothar ghanava
Ghanaraja huttida

2. Aaga huttidathanu
Paralokhadarasu
Meleninda elidu
Naranagi bandanu
Preethiyinda thannannu
Dheena madikondenu
Devara kumaranu
Elli vasisidanu
Kelu dhoothar ghanava
Ghanaraja huttida

3. Oh mahatwadarasa!
Sarvalokharakshaka
Samadana guruve
Neethi surya kristhane
Manasanthi huttisi
Mokshananda thandidhee
Namaskara yesuve
Nitya mana ninage
Kelu dhoothar ghanava
Ghanaraja huttida`
  },
  {
    number: 182,
    title: 'Yesu paapigalannu',
    englishTitle: '',
    lyrics: `1. Yesu paapigalannu
Paapadholagindalu
Ega bhidisuvenu
Nijavagi helidhu
Hadi paadi manave
Hadi paadi yellare
Yesu paapigalannu
Ega shkamisuvenu

2. Papa kandu arike
Maduvanda paapige
Yesuvannambidhare
Pariharavaguthe

3. Paapakagi dhukave
Saladu oh paapiye
Rakshakana meleye
Edabeku nambike`
  },
  {
    number: 183,
    title: 'Olle sudhikelide',
    englishTitle: '',
    lyrics: `1. Olle sudhikelide
Rakshane sidheye
Sarvatra ee sudheye
Habhuthe habhuthe
Janarella kelali
Yesuvannu nambali
Yesuvina namake
Ghanavu aagali

2. Yella desagaligu
Hogiri hogiri
Sarva paapigaligu
Heliri heliri
Yesu rakshisuvenu
Papa kshamisuvenu
Yesuvina arpane
Begane sariri

3. Divya samacharava
Hadiri paadiri
Yesu paapigalige
Sathanu edhanu
Jeevamanadalliyu
Yella sthaladalliyu
Sarva janaralliyu
Premadim hadiri

4. Yaru puna barvanu
Yesuve yesuve
Yaru athananodwaru
Kraysthare kraysthare
Anthareeshadalliyu
Karthan jotheyalliyu
Sadhakaladalliyu
Jayave jayave`
  },
  {
    number: 184,
    title: 'Naanu papadalli hutti',
    englishTitle: '',
    lyrics: `1. Naanu papadalli hutti
Kadu paapiyadenu
Nanavidavagi thappi
Paapadalli bidenu
Yesu nanna rakshaka
Yesu nanna rakshaka
Yesu nanna rakshaka

2. Paapiyagi nadeyalu
Yesu nanna kadegu
Thanna divya preethiyannu
Thorisutha bandenu

3. Swalpakala hodamele
Deyvasamacharavu
Bithu nanna kiviyalle
Yesuva nambhidenu

4. Yesu nanna athmavannu
Preethisida nathane
Paapapariharavannu
Kottidhane nanage

5. Hage yesuvina mele
Naa nambike ettano
Hageye nee koda nambi
Athan kade sereko`
  },
  {
    number: 185,
    title: 'Naanu madidantha paapavella',
    englishTitle: '',
    lyrics: `1. Naanu madidantha paapavella
Hege hoyithu?
Parihara nanagelli sikithu?
Nanna karthanada yesu swami prana kottanu
Nananda dhodha paapi rakshisa
Dhodha paapiyada nanna
Rakshisa rakshisa
Dhodha paapiyada nanna
Rakshisa rakshisa
Yesu swami bandanu
Thanna prana kottanu
Dhodha paapiyada nanna
Rakshisa

2. Estu upakaramadidantha
Yesu karthage
Nanu badalagi yenu kottanu?
Nanna poorna sakthiyannu
Athan divya sevege
Kottu premadinda sthotra madwenu

3. Naavu olle dasarndu
Namma kartha heluva
Neethirastheyalli
Naavu hodare
Atha sekra baruthane yendu
Jnapthi maduva
Aga neethiya kireeda nammade`
  },
  {
    number: 186,
    title: 'Yellaru koodi haduva',
    englishTitle: '',
    lyrics: `1. Yellaru koodi haduva
Devaru preethiye
Bhooparalokhavu saha hadali
Preethiye
Paapathmarella bannire
Rakshakanannu nambiri
Sambramadinda hadiri
Devaru preethiye

2. Oh sarerella janake
Devaru preethiye
Namathma raksha-athane
Preethiye preethiye
Krishtuyesuvina rakthavu
Samastha papa tholedu
Nammannu sudha madithu
Devaru preethiye

3. Yesto aananda vayithu
Devaru preethiye
Yahova namma thandeye
Preethiye preethiye
Gurani surya sampathu
Asraya kotte durgavu
Ananda bhagyavathanu
Devaru preethiye`
  },
  {
    number: 187,
    title: 'Ondu orinalli ondu belaku',
    englishTitle: '',
    lyrics: `1. Ondu orinalli ondu belaku
Andakaradalli thoralayithu
Bethlaheminali neethisuryanu
Paapakathalalli kanthi kottanu

2. Ega nararalli divyakrupeyu
Yella bhoomiyalli dhodadayithu
Ega sudha neethi olle sughavu
Sathyavada preethi nelegondevu

3. Bethleheminalli yesuswamiyu
Nararoopadalli huttidagalu
Jeevada prakasa prabe kottithu
Maranada pasa bichi hoyithu`
  },
  {
    number: 188,
    title: 'Mandhe serida',
    englishTitle: '',
    lyrics: `1. Mandhe serida
Thobathombathu
Hattiyolagiddavu
Innodhu elliyo hoyithu
Ashrayakke dhoravu
Ee kuriyu patta vedhane
Yarindha helalaguthe

2. Olleya kurubane
Thombathomthu
Ninge saku allave
Evella salathu anthanu
Nanagondu thappide
Mathestu prayasavadharu
Nan hogi hudukuvenu

3. Adhare kuruba patta kastavu
Estadika vadhadho
Vimochisal patta obbaru
Helalaravallavo?
Aa goravadanta sankata
Suchithadinda sagida

4. Nodu rakthada guruthu toruthe
Alli margadalliye
Howda kaledu hodakurige
Chelalpatta rekthave
Dehatmagahallaliyu maha
Santhosha patta kuruba

5. Kelu bettagalinda shabdavu
Aakashakke eruthe
Anandapadi ellaru
Nanna kuri sikkide
Melada lokhadhol saha
Untaguthade harsha`
  },
  {
    number: 189,
    title: 'Adhayryasthane',
    englishTitle: '',
    lyrics: `1. Adhayryasthane
Nee dhrudaa padu
Sameepadalle
Ninna ashrayavu?
Nee prarthane madi
Viswasavidu
Untesuvinalli
Sampoornatheyu

2. Elli neenu
Upadhra kondeya?
Kargathaleyu untagideya?
Nee nambikondeyu
Divyapthanannu
Kaibidaninnannu
Nirantharavu

3. En karthanige
Sambavisidu
Nan nodidhare
Adashcharyavu
En odeya neene
Santhapisalu
Na paduva shrama
Thrunastadhadu

4. Prayojanakke
Ee seyryraneyu
Melowshadave
Ee shkeshegalu
Avashe prayasa
Thakalavashte
Vijayavadagave
Nithyolsavave`
  },
  {
    number: 190,
    title: 'Nodu kristha bhaktha',
    englishTitle: '',
    lyrics: `1. Nodu kristha bhaktha
Ninna suthalu
Andakara saynya
Varthisirvudu
Saynika! Edelu
Sughavethake?
Jayapradayutha
Divya silube

2. Manadalli baktha
Hagalirulu
Shodakana thandra
Yaknisuvadu
Adarenu baya
Dayryavagiru
Prarthaneya bala
Jayisuvudu

3. Upavasa japa
Yella vayarthavu
Emba vanchakana
Mathundagalu
Helu dayryadinda
Nitya prarthane
Theeruthide yudha
Santhi sikkuthe

4. Ninagaguvantha
Kastha yavathu
Nane ninna kartha
Sahisiralu
Bhata! Kundaderu
Himseyindale
Sughaprapthiyapu
Denna hatrave`
  },
  {
    number: 191,
    title: 'Mathaduvudhumtallave',
    englishTitle: '',
    lyrics: `1. Mathaduvudhumtallave
Sulokhada vishayavu
Navalliga seridhare
Yestobaghya sikuvudu

2. Sankithisuthevallave
Ee lokhada sukhavannu
Navalliga seridhare
Yestobaghya sikuvudu

3. Manohara yojaneye
Ee lokhada mahimeyu
Navalliga seridhare
Yestobaghya sikuvudu

4. Howdhenannu serisikko
Oo karthane swarghadholu
Navalliga seridhare
Yestobaghya sikuvudu`
  },
  {
    number: 192,
    title: 'En priyane vishranthiyalliru',
    englishTitle: '',
    lyrics: `1. En priyane vishranthiyalliru
Karthana sannidheyalle-iru
Aathana premavesto visheshavo
Nidhe madu madu

2. Koosina shantha nidheyantheye
Nee ega shanthi hondu priyane
Innendhigu allilla vedhane
Nidhe madu madu

3. Ee lokhadhanthakara mugidu
Samadhisili hogwa mattigu
Roopanthra nagi elwa mattigu
Nidhe madu madu

4. Melokhadalli koodwa mattigu
Suseve madwavarge karthanu
Nirlaya mudi-eduvamattigu
Nidhe madu madu`
  },
  {
    number: 193,
    title: 'Ha bagyavulla dina',
    englishTitle: 'O Day of Rest and Gladness',
    lyrics: `1. Ha bagyavulla dina
Visranthi kalavu
Sambrama padathakka
Gambera veleyu
Ee divyavada dina
Amulya sampathu
Nanathmake suratha
Santhosavadadu

2. Ee dina yesu kartha
Samadi bittanu
Ee dina lokhodhara
Sampoornavayithu
Ee dina devarathma
Sameepa baruva
Ee dina samadhana
Namolu kuduva

3. Ee hothu kriystha sabhe
Ellellu koduthe
Ellaregu suvarthe
Prasangavaguthe
Aknjana manadalli
Prakasa huttuthe
Sabhaktha janaralli
Asakthe hechuthe

4. Ee dina deva dhyana
Hechage maduthe
Vimochaneya ragha
Empagi haduve
Bhoolokhadalli sabath
Samapthavadaru
Sulokhadalli sabath
Endendu thiradu`
  },
  {
    number: 194,
    title: 'Kartha nodu bhumiyalli',
    englishTitle: '',
    lyrics: `1. Kartha nodu bhumiyalli
Estu anthakaravu
Lokhada kargathallalli
Belakarihoyithu
Vyartha bhombe poojeyu
Estu prabalavayithu

2. Endhu hodidhanthaka
Suryanendu moodyanu
Endu shudha samachara
Lokha thumbisuvada
Eekha kjana thoredu
Jana murkaradharu

3. Eelu jaghathina kartha
Eelu krupeyarase
Rathriyannu parihara
Madu neethi surya ne
Ninna vakya begane
Jayahondisesuve

4. Kartha kodi siddiyannu
Ninna sevakarige
Kodu olle phalavannu
Vakyada prasangakke
Poorna kanthiyindalu
Bhoomiyannu thumbisu`
  },
  {
    number: 195,
    title: 'Thandeyidhane',
    englishTitle: '',
    lyrics: `1. Thandeyidhane
Ramyalokhadhol(2)
Ba annuthanne nannane
Na nodalike hoguve
Hoguve hoguve
Ramyalokhakke

2. Yesuyidhane
Ramyalokhadhol(2)
Ba annuthanne nannane
Na nodalike hoguve

3. Untu kiritta
Ramyalokhadhol(2)
Koduthenenda karthane
Thakolalike hoguve

4. Untu suvasa
Ramyalokhadhol(2)
Vimuktha sabe alliye
Ondhagidhare allave
Hoguve hoguve
Ramyalokhakke
Vimochakana padakke
Na bidhu sthothra maduve`
  },
  {
    number: 196,
    title: 'Sahodharare ecthathu banni',
    englishTitle: '',
    lyrics: `1. Sahodharare ecthathu banni
Kristhesuvige
Sanmanathanni
Ee divya sunama samastharige
Athyasakthiyinda
Sariheliri

2. Sandeha eekae?
Mahonathanu
Edhanallave
Sahayakanu
Yahovana rajya
Melgolvadu
Bhoomi prajegalella
Konadaduvaru

3. Simhasana dinda
Koothatanige aakashadhol
Sthothraduvaru
Onde manasagi
Shrestathmagalu
Aaradhane madi
Sankeerthiparu`
  },
  {
    number: 197,
    title: 'Oh banniri eegha',
    englishTitle: '',
    lyrics: `1. Oh banniri eegha
Aananda padona
Sudharshana nodi
Kondaduthirige
Melokhada kartha
Ee bhoomige banda
Aradhisa banne
Sahodharare

2. Howdevadideva
Bholokhebanda
Prasannavannu adhanu
Nararige
Ee ashcharya kandu
Sanmanavannu thandu
Aradhisa banne
Sahodharare

3. Oh doothara shynya
Namodige kuda
Suragavethi sambramisiri
Ee rakshakannanu
Ee bhopatiyannu
Aradhisa banne
Sahodharare`
  },
  {
    number: 198,
    title: 'Sabheka asirvada',
    englishTitle: '',
    lyrics: `1. Sabheka asirvada
Kristhesuvu thane
Adathana nirmana
Thanathmanindale
Aa sabhe sudha mada
Tha sapa thindanu
Thannavarannu kaya
Swaraktha kottenu

2. Aa sabhe lokhadalli
Chedari edharu
Yellaru krishthanalli
Bratrugaladaru
Onde viswasa untu
Onde nireeksheyu
Onabilashe pattu
Sancharisuvaru

3. Eevaga yudakala
Maha horattave
Adagyu samadana
Kadelli aguthe
Mahathinalli sere
Endendu sayaru
Jeeva kireeta hondi
Vishramisuvaru

4. Treyeka devaralli
Anyonyaradaru
Ananda lokhadalli
Swathandrarendigu
Oh sreshtavada jana
Subagyavandare
Navella nimma koda
Popevu mokshake`
  },
  {
    number: 199,
    title: 'Jeevavakyada ganava',
    englishTitle: 'Sing Them Over Again to Me',
    lyrics: `1. Jeevavakyada ganava
Empagi hadiri
Deva preethiya vivara
Varnisi helere
Sudha varthamana
Athmake adhara
Anandhave, anandhave
Sadveda vakyavu

2. Deva vakyavu namage
Kristhesu kottanu
Kele vakyava papeye
Videyanagiru
Mosha loka marga
Uchidartha dhana
Anandhave, anandhave
Sadveda vakyavu

3. Saru vakyava janake
Asaktheyindale
Saru papada mannane
Papigalelarge
Sudhamadi yesu
Kayuthirpanendu
Anandhave, anandhave
Sadveda vakyavu`
  },
  {
    number: 200,
    title: 'Paapishtta thappisu',
    englishTitle: 'Rescue the Perishing',
    lyrics: `1. Paapishtta thappisu
Prana kapadu
Mokshada marghadindakarshisu
Durghadi bidisi
Sadhathi koda
Yesu edanendu prakatisu
Paapishta thapisu
Prana kapadu
Dayada yesuvu rakshesuva

2. Jeevandya sankata
Nyayavichara
Baruvenendu nee yecherisu
Divyanda karune
Kadiruthade
Ee olle sudhiya saruthiru

3. Dushta saythananu
Durmargharannu
Vanchisutha eruthanallave?
Gantandra thorisi
Subhudhi hele
Aayasa gollade yecharisu

4. Preethiya prerane
Jnanada bhode
Madutha eru paapishttare
Katinavadaru
Nambike untu
Karthanidhane dayaparane`
  },
  {
    number: 201,
    title: 'Athaninna karthanu',
    englishTitle: '',
    lyrics: `1. Athaninna karthanu
Prashne kela bandanu
Yesu mathanadalu
Kivikottalochisu

2. Paapiye na ninnannu
Yesto snehisidenu
Preethi ninnallilave?
Ninna rakshaka nane

3. Sereyallidagalu
Ninna bidisidenu
Rokhadhol bhidiralu
Bandu swastha kottenu

4. Margha bittu dhoorave
Aledadu vagale
Ninna hudukidenu
Marghadalli thandenu

5. Ninna divya preethiyu
Thappi hogalaradu
Sagra jala dantheye
Mithiyilladagide`
  },
  {
    number: 202,
    title: 'Nee bheku sarwadha',
    englishTitle: 'I need thee every hour',
    lyrics: `1. Nee bheku sarwadha
Udharaka!
Inyaru koderu sushanthiya

O yesu ninagathya
Yesu ninagathya
Kaichachi nanagiga sahaya tha

2. Nee bheku sarwada!
Ninidhare
Ghadanthradhaliyu paraguve

3. Nee bheku sarwadha
Nanondhige!
Niniladhidhare sothoguve

4. Nee beku sarwada!
Sunathane
Nee yeladantheye naa maduve

5. Nee beku sarwadha!
Pavithrane!
Madena hurdhavam pavithrane`
  },
  {
    number: 203,
    title: 'Nanu ninnava priya karthane',
    englishTitle: 'I am thine, oh Lord',
    lyrics: `1. Nanu ninnava priya karthane
Ninna vakya kelede
Ennu kevala ninna nyonyake
Serodhenna korike

Hele nanna hele priya karthane
Ninna kruje kambake
Hele nanna hele priya karthane
Ninna thividedeyge

2. Ninna sevege, priya rakshaka
Ne prathishtiseenannu
Daya palisu druda nishcheya
Ninna chitha nannadu

3. Nanu orage ninna padake
Susamvada madutha
Ninna sangada erva galige
Entha mulya santhasa

4. Thalavillada preethisagara
Budhya thirtha harsave
Nanagagalu ninna darsana
Nithya sthotra ninage`
  },
  {
    number: 204,
    title: 'Yesu krishthane',
    englishTitle: '',
    lyrics: `1. Yesu krishthane
Mruthyinjayane
Namma jeeva jeevave
Ninna sreme nanna kshame
Kaye kaye nammannu

2. Kallanandeye
Namma dandane
Honeyagi thalide
Nee pavitra divyamitra
Kaye kaye nammannu

3. Dushta hasyavu
Mullumaleyu
Ninna ghanavayithu
Namma ninde neenu thinde
Kaye kaye nammannu

4. Bada papige ninna kroojeyu
Jeevavrukshavagide
Ninna dukha namma sugha
Kaye kaye nammannu

5. Divya preethiye
Deva putrane
Kanyasreya maguve
Jeevadallu mruthiyallu
Kaye kaye nammannu`
  },
  {
    number: 205,
    title: 'Ee hothina dhinadhol',
    englishTitle: '',
    lyrics: `1. Ee hothina dhinadhol
Deva sabhda kiviyol
Beluvaga yechara
Atha karyuthanalla
Atha natra odi baa

2. Nale hrudaya Katina
Vagi hodithakatta
Sthriravalla jeevavu
Krupakala theervadu
Nale nyayatheerpina
Kala bandu hathira

3. Endu krupa samaya
Ennu eru karana
Ninna pranarakshege
Odi hogu begane
Endu hogu sarana
Deva sabhda kele baa`
  },
  {
    number: 206,
    title: 'Krishesu ninna neethiyu',
    englishTitle: '',
    lyrics: `1. Krishesu ninna neethiyu
Nannalankara vastrave
Jagathu suttu hodare
Adannu hondu nilluve

2. Naa ghoreyinda horattu
Swapakshakere hogalu
Krishtesu nanagagiyu
Sathedenendu nachenu

3. Aa dhinadalli nanage
Yaru virida nillaru
Krishtesu rakthadindale
Dushkarma baya hodavu

4. Sajeevavilladavare
Ee vakyakelatakkadu
Krishesu raktha neethiye
Nammalangara vastravu`
  },
  {
    number: 207,
    title: 'Namma ayusu bahu swalpavu',
    englishTitle: '',
    lyrics: `1. Namma ayusu bahu swalpavu
Bega bapputhantyaswasa
Lokha koduve vilasa
Bhahukalavu nillalaradu

2. Vyartha brameyu
Ennu bedavu
Churukada budhiyannu
Hrudwe sudha bavavannu
Kodu namage
Priya karthane

3. Endu nammadu
Nalinapathu
Poorna marmaviralagi
Nitya athma sughakagi
Nodadavane
Modanallave?

4. Nanna athmake
Onde yochane
Ee prapanchavella laya
Eke gadi ninna daya
Dayavenage
Koduyesuve`
  },
  {
    number: 208,
    title: 'Jehova praptakaladha',
    englishTitle: '',
    lyrics: `1. Jehova praptakaladha
Subhadra durga sthala
Satrugalannu jayisuva
Sreshtastra nija bala
Hale vayreyu
Ega munnindu
Mahasakthiyim
Kayuthe tantradim
Virode nindedhane

2. Nammalli tranavillavu
Naa gella saktharalla
Yahovanada shooranu
Vijaya kodaballa
Aadarendare
Yesu krishtane
Yella sreshtigu
Karthadikarthanu
Mathobha devarilla

3. Bhoodevva thumbidadaru
Nammannu nungwadilla
Vijaya gathi nammadu
Nammalli bayavilla
Ee prapanchakanu
Sittigedaru
Hagyu nillanu
Anthyaknjeyayithu
Ee onde mathu saaku

4. Yaavatha bandu kelwenu
Pavitra vakyavannu?
Divyathmanaluthirvanu
Sathbaktha sabeyannu
Sathesutharu
Hone hesaru
Yella hogali
Nee vayre soluve
Rajyadi namma paalu`
  },
  {
    number: 209,
    title: 'Ee lokhadavarellaru',
    englishTitle: '',
    lyrics: `1. Ee lokhadavarellaru
Karthanegendu hadali
Santhosadinda yellaru
Aathana seve madali

2. Athanu sakshath prabhuve
Nammannu srishtisidenu
Nammellara poshakane
Udharisuva karthanu

3. Sthotrava thandu kodiri
Santhosadinda bhanniri
Aa hesarige premade
Thakanda mana kodiri

4. Mahopakari athane
Nammelarinda sthutyane
Athana mathu nilluthe
Manava kodirellare`
  },
  {
    number: 210,
    title: 'Vimochakana sthotrava',
    englishTitle: '',
    lyrics: `1. Vimochakana sthotrava
Hadali manave
Yennarasena krupeya
Prasidha maduve

2. Yellelli ninna namava
Prasidha madalu
Thakanda bhashe nanagu
Kodeega karthane

3. Yesu ninnamavenalli
Anandaveyuthe
Aa nama divya owshadi
Mulamu hakuthe

4. Yen papa sala therethu
Ninnannu nambuve
Ninna divyavada rakthavu
Vishudha maduthe

5. Aathana mathu kelede
Athana athmanu
Suknjana kottu nannale
Ullasa madithu

6. Oh kelerella janare
Rakshane egale
Namage sikhalaguthe
Yesuvinindale`
  },
  {
    number: 211,
    title: 'Balishtanada devarge',
    englishTitle: '',
    lyrics: `1. Balishtanada devarge
Sthotrava maduva
Swasabhda marghadalli
Sampoornanathanu

2. Janaru paapadindale
Ashudaraderu
Karthanu preethiyindale
Rakshane thandenu

3. Aathanu preethiyindale
Sahaya madidha
Devathma baladindale
Vayreya jaysidha

4. Aa vayre solisalike
Swaprana kottanu
Aathanu kroojeyalliye
Udharisidenu

5. Paapada shekshe athane
Sahisikondanu
Krishtana rakthadindale
Vijaya sikithu

6. Aa thottadalli athanu
Dhukava pattenu
Kroojeya mele athanu
Yengagi sathanu

7. Balishtanada devarge
Sthotrava maduva
Aa sudha lokhadalliye
Nirandra sthutiye`
  },
  {
    number: 212,
    title: 'Melokha raja aradisiri',
    englishTitle: '',
    lyrics: `1. Melokha raja aradisiri
Athana bage sthuthi hadiri
Athanu gurani maha vaydyanu
Gawravulla swami sarvasakthanu

2. Aathana krupe prakatisiri
Athana sakthi sankeerthisiri
Athana vahana nelamegave
Athana nivasa paralokave

3. Sarvasakthane ninna balade
Ee bhoolokhava untu madidhe
A mele samudra betteya hage
Bhoomiya suthalu neenu hakide

4. Ninna palane athi sreshtadu
Namma suthalu kanisuvadu
Bettagala mele bayinallu
Ninna divya krupe thappihogadu

5. Sabhaktharige ashraya neene
Namma nambike ninna melede
Ninna karuneyu yesto olledu
Neenu namma kartha mitra devaru`
  },
  {
    number: 213,
    title: 'Devadi deva prachara madu',
    englishTitle: '',
    lyrics: `1. Devadi deva prachara madu
Aa namadeya allalli saru
Aa sunamadalli vijayavide
Yellellu athanu sthuthi patrane

2. Suswargadallu bhoolokhadallu
Namma devaru vasisuvenu
Bakthara samooha kondaduvaru
Nirandra rakshane maduvavanu

3. Aaptha snehidanagirvanu
Yella makala preethisuvenu
Athanu rakshane samastharegu
Nithyanandadinda koda ballenu

4. Simhasanadhol aasenanige
Sarva janarol stotraviruthe
Krishthayesuvige kondattavannu
Yellarusallisi arpisuvaru

5. Navathananna kondaduvevu
Thakka sthanava kodathanigu
Krishtesuvinalli preethibalavu
Paripoornavagi nelegondevu`
  },
  {
    number: 214,
    title: 'Meloka rajane abramanapthane',
    englishTitle: '',
    lyrics: `1. Meloka rajane abramanapthane
Nirandrakaladathane
Vathsalyave
Bhooparalokavu ninnamelebeluthe
Naanu saha beluvenu
Yehovane!

2. Abrahamanapthane
Ninaknjeyantheye
Na paapamargha biduve
Oh prabhuve!
Yellava biduve
Dhurbhudhi yellavu
Ninnannu matra nambuve
Yehovane!

3. Ne aknje ettide
Aa aknje nambuve
A aknjeyande swarghake
Seruvenu
Ninna samughave
Kanisuthiruthe
Na ninna sthotra haduve
Yehovane

4. Treyeka devare
Ne athisreshtane
Ninnannu swarghadalliye
Kondaduve
Nee nityanagiye
Swarajya kanuve
Alliruvavarelaru
Videyaru

5. Aa lokadavaru
Treyeaka ninnannu
Kondadi sthotrisuvaru nirandrane
Ninaella baktharu
Nirandra balwaru
Sakthi prabhallya ninnade
Yehovane`
  },
  {
    number: 215,
    title: 'Karuya karthange',
    englishTitle: '',
    lyrics: `1. Karuya karthange
Hadirella baktare
Athana karuneyu
Yendu thappihogadu

2. Sarvasaktthanagiyu
Jyothi koduvathanu

3. Sarva jeevarashige
Jeevakoduvathanu

4. Thanna swantha janara
Paapadinda kayuva

5. Krishtaninda devaru
Yenge kshame kottanu

6. Manopoorthiyindale
Hadirella bakthare`
  },
  {
    number: 216,
    title: 'Swarlokha rajanige',
    englishTitle: 'Praise my soul the king of heaven',
    lyrics: `1. Swarlokha rajanige
Sthotravarpisutharu
Aathanannu ninnahage
Yarusthotra madwaru
Sthotra madu sthotra madu
Swargha lokha rajage

2. Divyakrupegagi sthotra
Arpisu yenathmave
Muncheyida hagi
Ega asirvada sikkuthe
Sthotra madu sthotra madu
Krupeyulla rajage

3. Thandeyagi nammanella
Krupeyinda kayvenu
Thanna kaygalalli atha
Ethi horuvathanu
Sthotra madu sthotra madu
Karuneya rajage

4. Pavitrathma nerevagu
Krishta aykyadalliye
Nanu nelekolluvande
Bala kodu egale
Sthotra madu sthotra madu
Sarva krupe rajage`
  },
  {
    number: 217,
    title: 'Sthotrisu sthotrisu',
    englishTitle: '',
    lyrics: `1. Sthotrisu sthotrisu
Yahovananne
Yahovana karyava keerthisiri
Krishesuvina maheme
Dayagalanella
Sakalirege ega helutha eri
Divya preethi nadiyande
Hariyuthade
Divya karune
Saswathavaguthade

2. Sthotrisu sthotrisu
Krishtesuvane
Paapigagi sathu edhu bandanu
Swarajyavannu sthapisuvadake
Ee lokhake begane barvanu

3. Athanu bandaga
Brameyaguvadu
Rajadi rajanu thanaluvanu
Than vayreyanagisikolluvanu
Sadha thanna janara kapaduvanu`
  },
  {
    number: 218,
    title: 'Deva ninna nama kondaduvenu',
    englishTitle: 'To God be the glory',
    lyrics: `1. Deva ninna nama kondaduvenu
Ni rakshaneyanu erpadisidhi
Nanna bhadalagi kristhesuvanu
Shikshsi yenathmava rakshisidhi
Karthane ninage
Sthotra salisuve
Karthane ninage
Sarva kondatave
Nine janagala samrakshanege
Mahathwava nadesi bandhathane

2. Raktha kriyadinda ninellarige
Sampoorna swathan thrava palisade
Ninna nambikonda papikalige
Ne mannisi baruvadayaprane

3. Sathyarthava thori mahathyavannu
Kristesuvinnalliye thoriside
Nithyasrayadalli naniruvenu
Sada ninna hathra na vasisuve`
  },
  {
    number: 219,
    title: 'Aa krooje mele pranava',
    englishTitle: '',
    lyrics: `1. Aa krooje mele pranava
Bittanandava kondaduve
Athana hasye madade
Athana sthotra haaduve

2. Aakrooje mele preetiye
Namage kandu bandithu
Namma papakaki athage
Aa krooje sheksheyayithu

3. Aa kroojeyinda namge
Yendasirvada vaguthe
Allesuva-shiksheyannu
Namagage thalidanu

4. Yesuvininda namage
Adaraveshtu bandied
Samadiyalli belalu
Adayryavella hoyithu

5. Aa lokhadevadhootharu
Ashcharya paduvavaru
Aa swamiprana kottadu
Ashcharya untumadithu

6. Paapiya shikshe yesuve
Thalidakaki athage
Ananda sthotra maduve
Sadha aa sthotravaguthade`
  },
  {
    number: 220,
    title: 'Yeuvannu sthotresalegale bandu',
    englishTitle: 'Praise Him, praise Him',
    lyrics: `1. Yeuvannu sthotresalegale bandu
Kristha preethi nenapu madiri
Dhootha gana athana stotradaliru
Mana keerthi salisa bannire
Kurbanande yesu thannavarannu
Nodi mesi kayuvanallave
Preethi prema ellara mele thanittu kayuthane
karuneyindale

2. Yesuvannu sthotresalegale bandu
Kristha hatra hogalu bandiru
Namagage silube marana pattu
Thande hatra nammannu thandanu
Krooravada mullina mudi thottu
Mrudubava thorisi sathanu
Endha kartha!athana sthotresa bandu
Sadha balu annuatha bandiru

3. Yesuvannu sthorasalegale bandu
Kristha vani kelutha bandiru
Atha sarva lokhada rajanagidhu
Harsadinda alalu barvanu
Adha biddu athana-srayadalli
Sererega baluverondigu
Kareyuthane athane rakshaneyalli
Nambi banni athanu thallanu`
  },
  {
    number: 221,
    title: 'Krishthesu swarwa logava swarajyava maduvenu',
    englishTitle: '',
    lyrics: `1. Krishthesu swarwa logava swarajyava maduvenu
Paschimadintha porvakke thanobbane ahluvanu

2. Ah rajyakagi bhayasuve
Ah dhivya raja sthuthyane
Athana nama maduravu
Amula rakthadandithe

3. Athana preethi karyavu
Allelli kanna baruthe
Sakala rajya dindalu
athana sthothra sikuthe

4. athanidalli jayave
alelaru swathethrare
deivaryirvadadindalu
sathoshapaduvavaru

5. ah rajya thanna rajage
thaka sanmanava kodali
ee lokadavarellare
athana adda bhilali`
  },
  {
    number: 222,
    title: 'Prarthaneya madiri',
    englishTitle: '',
    lyrics: `1. Prarthaneya madiri
Yendu karthahelida
Preethiyindale kele
Utharava koduva

2. Yesumaharajanu
Yella koda ballenu
Divya balakindalu
Hechuyaru kelalu

3. Kartha namma manasanna
Thole neenu egalu
Ninna rakthadindale
Sudha madu nammanne

4. Yesu neenu namgae
Santhi kodu egale
Neenu namma karthanu
Nadisega nammannu

5. Eha loka namage
Parasthala vagide
Ninna rajyadalliye
Namma vasasthalave`
  },
  {
    number: 223,
    title: 'Hagalu ratriyalliyu',
    englishTitle: '',
    lyrics: `1. Hagalu ratriyalliyu
Noduva kannide
Yellara mathu kelalu
Kiviyu eruthe

2. Yellara bala meruva
Sakthiyu eruthe
Manuja preethi hodaru
Supreethi eruthe

3. Aa kannu ella noduthe
Aa sakthiyu thaluthe
Aa kiviyella keluthe
Aa preethi thaluthe

4. Yellaru sothu hodare
Devaru solade
Nammanendu thallade
Sahayakoduva

5. Prathane kele devaru
Sahaya koduva
Prarthaneyinda jayava
Naveega honduva`
  },
  {
    number: 224,
    title: 'Ninna hatra yesu baruve',
    englishTitle: '',
    lyrics: `1. Ninna hatra yesu baruve
Sannidiyalli beluve
Prasannadinda ee sthalava
Thumbisu ega swamiye

2. Nannannu devakadege
Nee rakthachelli thadidhe
Thandeya nama sthuthisa
Nannannu sudha madidhe

3. Mulmudi hotha thaleya
Gayada pakka kaygala
Na nodi ninna preethisa
Sahaya madu oh kartha

4. Lokhabayrathw mareya
Swarghadananda padeya
Nin hatrave naa bandenu
Nannannu ega palisu`
  },
  {
    number: 225,
    title: 'Kartha ninna janarellaru',
    englishTitle: '',
    lyrics: `1. Kartha ninna janarellaru
Koduva sthaladalli
Needhi yendu ballaru
Aa sthala sudha bhoomiyu

2. Visheshavada maneyu
Avashyavillavendigu
Janaru kooduvadaralli
Neenavarondegiruthe

3. Ee sthana dalli nammalli
Neeruvanagiye
Koodida nanna janara
Nee kanisu oh karthane

4. Prarthana baladindale
Vyasanavella hoguthe
Hathira swarghaviruthe
Alli vishranthisikkuthe

5. Kelavaragi kodida
Nammannu ega lalisu
Uthara preethiyindale
Neenekodiga namage`
  },
  {
    number: 226,
    title: 'Yesu vinanthikeluva',
    englishTitle: '',
    lyrics: `1. Yesu vinanthikeluva
Sthanake baruve
Athana munde beluve
Surakshisuthirive

2. Alli naa baruvadake
Nin aknje agide
En baravanella alliye
Naa bittu baruve

3. Paapada baradindale
Naa kasthapaduve
Nee balapalisidare
Vijayava honduve

4. Nanathma vayre bandare
Ninna hatra baruve
Nannannu vayre muttade
Ododi hogithe

5. Nee preethiyinda
Nannannu rakshisu prabhuve
Ninnamavethi ninnannu
Kondaduthiruve`
  },
  {
    number: 227,
    title: 'Krishtana preethiye',
    englishTitle: '',
    lyrics: `1. Krishtana preethiye
Anoynya nammalli
Swarghada ekyadandeye
Utagamaduthe

2. Thandeyu mundeya
Prarthaneyindale
Nirekshe santhiaguthe
Santhosa vaguthe

3. Edara kashtodhol
Santhapisuvevu
Avara kastakaneerol
Badyastharaguvevu

4. Agalisuvage
Manege hodaru
Thandeya hatravideve
Navendu mareyvu

5. Ee divya satyave
Thidu kondevu
Yendivya thande
Manege nerikshesuvevu`
  },
  {
    number: 228,
    title: 'Devariga asirvadava',
    englishTitle: '',
    lyrics: `1. Devariga asirvadava
Kodalikiruvanu
Pavitrathma balavagi
Karya maduvathanu

Barali divyaasirvada
Balavagi belesu
Naavu kayuthiruvaga
Nammanella sudhisu

2. Devaralli eruthane
Bandedeve sthalake
Athanege krupeyinda
Asirvada koduva

3. Devaralli eruthane
Nambiri ee mathanna
Divya preethi nammalestu
Thanna karya maduva

4. Rakshaka namma vinathe
Neenu ega lalisu
Ninna divya preethiyinda
Asirvada surisu`
  },
  {
    number: 229,
    title: 'Kastavu baruvagale',
    englishTitle: '',
    lyrics: `1. Kastavu baruvagale
Nastavu bandakalave
Kripasanadali naavu
Sahaya Honda ballevu

2. Alli krishtesu namage
Sahayisuvanallave?
Athana rakthadindale
Aa krupe sthale sikkuthe

3. Aa sthaladalli baktharu
Dhoorastharagidharu
Anyonyavagiralikku
Aa sthala kerebarvaru

4. Alli namathma eruva
Kalavu bega hoguthe
Devaru hatra eruva
Balavu alli sikkuthe`
  },
  {
    number: 230,
    title: 'Ha yenda preethi',
    englishTitle: 'Oh the deep deep love of Jesus',
    lyrics: `1. Ha yenda preethi
Krishtana preethiye
Mitiyillada preethiye
Avadiyende thoruthellanege
Aa preethinanna melede
Nanna suthalu edhu
Avalisuthairuthe
Nannannu deva manegeye
Nadisalidhu eruthe

2. Aa divya preethi
Agada preethiye
Allalli haardisa thakkade
Athana preethi mitiyilladu
Marpatavillada preethiye
Thannavaranella swarakthakottu
Tha kondukolla sathallave?
Avaranatha kayuvenendu
Viknjapane atha maduvane

3. Aa divya preethi
Agada preethiye
Amulya preethiyu agide
Devara vara aa preethiyallide
Divya santhi koduthe
Krishtana preethi agada preethi
Swarghava thandu palisidhe
Devara hatra nannannu thandu
Sadha santhosa koduthe`
  },
  {
    number: 231,
    title: 'Kristhana charitra kelu',
    englishTitle: '',
    lyrics: `1. Kristhana charitra kelu
Nanage vivaresu
Yella charitragalalli
Nanage empadadhu
Aathana janmada ratri
Dootharu elidaru
Rakshakanu huttidane
Yendu haduthidharu

2. Aathanu nalvathu dina
Adaviyalli edhanu
Sodhane sayrisikondu
Vijaya galisida
Athanu devara seve
Yavagalu madidha
Aathanu badavanagi
Kasttavannu thaliida

3. Athana krooje baghe
Nanage vivarisu
Athanu samadiyinda
Edhanendu thelisu
Kristhana charitreyalli
Preethiya noduvenu
Nanagage yesu satha
Yendu na nambuvenu`
  },
  {
    number: 232,
    title: 'Nananda maga rakshisa',
    englishTitle: '',
    lyrics: `1. Nananda maga rakshisa
Krishtesu prana kodalu
Sundaravada lokava
Biduvadu ascharyavu

2. Aathanu hutti bandanu
Ee mathu nijavagide
Athanu kastadindalu
Preethiya seve madida

3. Nananda maga athanu
Thann kade seresalike
Amulya preethiyittanu
Ascharyave! ashcharyave!

4. Nannannu rakshesalike
Kroojeya savina baghe
Naa yochisaliruvagale
Ascharyavagi kanuthe

5. Athana maranavannu
Kannare noduthedare
Aa preethiya sampoornathe
Nodalikyu asadyavu

6. Athana preethi yestide
Nannannu snehisidanu
Nanathanannu nambuve
Athana preethisuvenu

7. Oh priya kartha ninnannu
Na preethimadi baruve
Nannannu ninna kadegu
Ne nele yesuswamiye`
  },
  {
    number: 233,
    title: 'Yaknjavedi raktha',
    englishTitle: '',
    lyrics: `1. Yaknjavedi raktha
Yaknja baleyilla
Yaknja benke kuri hoge
Yavadu bedave
Papada shekshe hogalike
Bere marghavide
Krishtana rakthave

2. Krishtana rakthave
Aa rakthadindale
Namathma sudhavayithu
Vijaya sikkuthe
Naraka papa shiksheyindale
Rakshaneyayithu
Namage jayave

3. Aa lokhadindale
Elidakrupeyu
Namaparada muchide
Yesto anandavu
Triyeka preethi vakthavagide
Pitaputra athmanige
Susthotrave

4. Nereksheyagide
Santhosadindale
Bavishya kala kayuve
Krishtagamanava
Bhooyatre nastavella theeruthe
Aa dhina barali
Yenda neereksheye`
  },
  {
    number: 234,
    title: 'Paapiya mitrane',
    englishTitle: '',
    lyrics: `1. Paapiya mitrane
Ninnannu nambuve
Krishtesu namma asraya
Nannannu bidenu

2. Ninnama kelalu
Athanu mechuva
Ninindalashirvadava
Krishtesu koduva

3. Nin neethi vastravu
Yen papa muchithu
Nininda paralokava
Naa seruvavanu

4. Nannannu rakshisa
Nee sapa thindidhe
Papada sheksheyindalu
Swathandra kottide

5. Paapiya mitrane
Ninna kondaduve
Nananthe yaru ninnannu
Sthotresuvavaro?

6. Ninninda swarghadhol
Nin neethiyalliye
Na nindu harshisuvenu
Sadha kondaduve

7. Alli naa ninage
Abyandravillade
Sampoornavagi sthuthisi
Na preethi maduve`
  },
  {
    number: 235,
    title: 'Nammannu rakshhesalike',
    englishTitle: '',
    lyrics: `1. Nammannu rakshhesalike
Pattanada horagu
Krishtesu kalvariyalliye
Kroojisalpattanu

2. Athana badhe yestendu
Yaru thiliyaru
Adella namagagiye
Sahisikondanu

3. Paapada pariharavu
Untaguvantheyu
Tha sapagrasthanadanu
Gorege bidhanu

4. Enyaru namagoskara
Swaprana kottaru
Paapada shekshe yendigu
Hogada hagithu

5. Navesto preethisidaru
Aathanu yogyane
Navellavannu kottaru
Adinnu saladu`
  },
  {
    number: 236,
    title: 'Marana muttadantheye',
    englishTitle: '',
    lyrics: `1. Marana muttadantheye
Aaygupthadalliyu
Devaru rakthadindale
Samrakshesidanu

Rakthava noduvagale
Ninnannu beduve
Yembuva divya mathanne
Naa nambikolluve

2. Paapada shekshe namage
Untagadantheyu
Swaraktha chelli yesuve
Samrakshesidanu

3. Aa divya rakthadindale
Neethiya kopade
Amulyavada rakshane
Namage sikkuthe

4. Nammella sapa yesuvu
Sahesi sathanu
Navendu kodalagada
Aa guna kottanu

5. Devara mathinandeye
Nadeyuvavaru
Aa nyaya dinadalliye
Anchake padaru`
  },
  {
    number: 237,
    title: 'Rakshaka krujeyalli',
    englishTitle: '',
    lyrics: `1. Rakshaka krujeyalli
Thorida preethiyu
Hechagi nanna lakshyakke
Baruvantha madu
Hechagi thilukollu
Nee madu karthane
Papada shiksshe thapithu
Aa preethiyindale

2. Aa krujeyalli mole
Hidiyalagadu
Nanalitantha preethiye
Ninnali hakithu

3. Aaschaaryagalascharya
Aa raktadindale
En papavella mannana
Sada untaguthe

4. Naa ninna prethi mada
Nannanu nadisu
Ninna mughantharavaghi
Vijaya sikkithu`
  },
  {
    number: 238,
    title: 'Lokhada mele dhevaru',
    englishTitle: '',
    lyrics: `1. Lokhada mele dhevaru
Preethiyanittaru
Swaputhranannu kottanu
Raksisalemannu
Entha shresta preethiyannu
Raksisalemannu
Kristesu kalvariyalliye
Thorpadisidanu

2. Satheddha rakshakanu
Swekarisidevu
Aa raktha dinda namagu
Rakshane sikkithu

3. Bhoolikha dhalli eeghale
Aa jeeva sikkuthe
Swarghada lokhadalliyu
Sampoorna vaghuthe

4. Saithanana upayava
Vishwasandinde
Kristana baladodane
Sollisi baruve`
  },
  {
    number: 239,
    title: 'Papiyu thanna kadege',
    englishTitle: '',
    lyrics: `1. Papiyu thanna kadege
Anyone vaghali
Amitha vada prethiya
Deva thorisida
Makkalemba hesarannu
Namage koduvadaralli
Thandeyu entha preethi
Namma mele ittanu

2. Kristana rakthadalli
Devara hathrave
Kondadi seruthiruva
Santhoshadindale

3. Aa lokhadalli-rvadu
Esto santhoshave
Swamiya rakthadindalu
Sada naniruve

4. Antha nereeksheyavanu
Enthavanaguve
Thanna nade nudiyindalu
Chennagiruve`
  },
  {
    number: 240,
    title: 'Yechara vagennathmave',
    englishTitle: '',
    lyrics: `1. Yechara vagennathmave
Rakshakannanu sthuthisu
Aathana krupe estide
Enathma thilukoladu

2. Papada deseyindalu
Thappidasthanada nannanu
Kristesu krupeyindale
Kai haki raksidanu

3. Vairigallanu suthalu
Nannanu kedisalikke
Bandagyu dodda krupeya
Nannannu badra kaithe

4. Modada hage sankata
Avarisutha bandaru
Kristhesu krupe mulaka
Sahaya kottu bandithu

5. Aaghaghe pappadindale
Na dhari bittu hodhru
Aathane krupe nannane
Dhikkara madalaradu`
  },
  {
    number: 241,
    title: 'Swami baruvathanu',
    englishTitle: '',
    lyrics: `1. Swami baruvathanu
Athyamulya mathidu
Nambuvavarellar
Harsha gollathakadu
Aatha bandu nammanu
Swarghkkerisuvanu

2. Namma ahipreeyaru
Sayuthiruvaghalu
Dhukha paduvagalu
Nenappu maduvevu
Swami baruvathanu
Thalikolluthaeru

3. Suthalagi kathallu
Thumbikondu edharu
Lokhadweshisidaru
Yestu kasta bandaru
Swami baruvathanu
Thalikolluthaeru

4. Rotti thindu patreyum
Panamadikolluve
Swamiya maranavu
Japthimadikolluve
Swami baruvathanu
Navaradisuvevu`
  },
  {
    number: 242,
    title: 'Nodi baktharemba notta',
    englishTitle: '',
    lyrics: `1. Nodi baktharemba notta
Dhukida manusyanu
Yudadalli veeranagi
Jayasaliyadenu
Ghana mana sthuti sthotra
Athana keerettavu

2. Swarghadalli dhoodarella
Yesuva kondadwaru
Simhasana rudanagi
Jayageethe hadwaru
Ghana mana sthuti sthotra
Rajadi rajanige

3. Dustajana mullimale
Haki gere-ettaru
Devadhootha baktharella
Sthotramadwaru
Ghana mana sthuti sthotra
Jayasali karthage

4. Kelrella jayadwani
Swarghavella thumbuthe
Athyunnadana sthanadalli
Yesu sobisuvenu
Ghana mana sthuti sthotra
Karthanada rajage`
  },
  {
    number: 243,
    title: 'Mullina mudi hondida',
    englishTitle: '',
    lyrics: `1. Mullina mudi hondida
Aa thalegegale
Amulyavada chinnada
Keerettaviruthe

2. Swarghada mukyasthanave
Athage yogyavu
Rajadi rajanathane
Sthutyanu ellaku

3. Aa lokadalli sarvavu
Aa lokadavaru
Athana preethi thilidu
Bayava padaru

4. Krishtana silubeyalli
Nambikeyittare
Athana rakthadindale
Vimukthi sikkuthe

5. Athana krooje nimitha
Badeya patteru
Swarghada lokadalliyu
Sampadyavaguthe

6. Kroorasavu athage
Kroorada kastavu
Avgalinda namage
Saswatha bagyavu`
  },
  {
    number: 244,
    title: 'Yesuvu thirugi barvanu',
    englishTitle: '',
    lyrics: `1. Yesuvu thirugi barvanu
Swarakthadindale sudhisida
Janarigagiye baruvenu
Ee satya sarerega

Yesu thirugi barvanu
Yellelli sareri sudhiyannu
Thirugi baruvenu

2. Athana dwaniya kelvaru
Sathavaredhu akasadallu
Athana sangatta kodwaru
Thirugi baruveru

3. Yesu bandu susanthiyannu
Lokake thandittu aluvanu
Kaneeru hogisaliruvanu
Thirugi baruveru

4. Nijave yesuvu baruvanu
Thammannu sudhisikondavaru
Athana sangatta kodwaru
Thirugi baruveru`
  },
  {
    number: 245,
    title: 'Munchaneyalli krishabarvanu',
    englishTitle: '',
    lyrics: `1. Munchaneyalli krishabarvanu
Thanna janara karakollabekendu
Swamahemeyalli athane
Begane baruvanu

Sreyesu swami
Yendu thirugibaruvi
Baruthane halleluya
Halleluya amen
Halleluya amen

2. Madyanadallu athabaruvenu
Madyarathriyallu atha kanisuvenu
Swajanakagi atha mahemeyallu
Begane baruvanu

3. Alokadalli eruva athmagalella
Swamiyondige elidubaruvenu
Swaganavannu darshisikondirvanu
Begane barvanu

4. Sadandave yesuve barvanu
Dhuka roga kastagaliruvadilla
Ee ghanadalli serekondirvanu
Begane barwanu`
  },
  {
    number: 246,
    title: 'Bhoolokadavarega',
    englishTitle: '',
    lyrics: `1. Bhoolokadavarega
Krishtana nambaru
Athana konchajana
Sweekarisuvaru
Enalpakala hogi
Athanu baruva
Rajyadigara vahisi baruva

Tha rajanagi baruva
Lokake baruva
Poornadikaradallu
Mahemeyalliyu
Nijavagi baruvenu
Ascharyavaguthe
Rajanagi lokadalii baruva

2. Aakasa nirmalavagai
Sobayavaguthe
Athana baktharella
Santhosisuvaru
Krishanu mahemeyallu
Kangolisuvanu
Rajadigara vahisibarva

3. Nammunde poornanda
Vijayavaguthe
Namma hinde dukavella
Marethu hoguthe
Namma rakshakanalli
Santhosavaguthe
Rajadigara vahisi baruva

4. Aa dhina bayasutheve
Barali begane
Aad hinakaki seve
Madutha baruve
Namiga aviswasi
Begane nambiri
Rajadigara vahisi baruva`
  },
  {
    number: 247,
    title: 'Swamiyu battemuttida sthreyu',
    englishTitle: '',
    lyrics: `1. Swamiyu battemuttida sthreyu
Muttida koodale
Bandu nooki janagallalliyu
Nambi ninthidalu

Aa battesereghavannu
Muttida koodale
Sushakthi bandu ninnali
Ghunava maduthe

2. Kristesu bandu ninthidannu
Thilukondaghalu
Aa kshana nuggi
Swamiya mutti
Ghuna hondidalu

3. Aathanu banda hegasa
Nodi dairya kottanu
Aa mathu kelida ksanavagi
Santhosha vayithu`
  },
  {
    number: 248,
    title: 'Yesu ninna hathra',
    englishTitle: '',
    lyrics: `1. Yesu ninna hathra
Nanu baruve
Nanu kettu hogi
Dura hogide
Yaru ninna hage rakshisuvaru
Yaru ninna hage prana kottaru

Yesu ninna hathra
Nanu baruve
Nanu kettu hogi
Dura hogide

2. Yesu ninna mathra
Nanu nambuve
Ninna nade nude dhyana maduve
Bere bere rokha vasi madide
Yava papiyannu thalladeidde

3. Yesu ninna namba yaru bandaru
Ninna baleyinda thalalpadaru
Ninnendu nanu nodadidaru
Ninnanu naa nambi baruvenu

4. Yesu nanu indu bayavillade
Nijavaghi nambi barutheve
Nijashravagi ninna raktha
Adannu nanu nambi barutheve`
  },
  {
    number: 249,
    title: 'Ella papigalannu yesu rakshisuvanu',
    englishTitle: '',
    lyrics: `1. Ella papigalannu yesu rakshisuvanu
Yava dhosha viddaru atha mannisuvanu

Hadirega bakthare yesu rakshisuvaru
Heliregha janakke ee amathranavannu

2. Banni rella hathrakke
Monothrupthiyaguthe
Entha papi yadaru
Yesu serisuvanu

3. Nambi kondu bandanu
Papaharisidanu
Papi yaghi sathanu
Yesu serisuvanu

4. Entha kadu papiyu
Aathana nambikondaru
Nithyajeeva dhyanava
Kristhaninda honduva`
  },
  {
    number: 250,
    title: 'Ha entha swami',
    englishTitle: '',
    lyrics: `1. Ha entha swami
Preethiyindalu
Nannanu rakshisalu
Bandanu
Aathanambuvarellargu
Saswatha jeevavu

Sathyave nijave
Swami athanu
Sathyave nijave
Thappi hogadu
Nannannu nambuvarellargu
Saswatha jeevavu

2. Paapada wrunavannu athanu
Swaprana kottu thirisida
Athan-nambuvarellargu
Saswatha jeevavu

3. Ayoghyanada nanu anchenu
Nambuva papiyagi bandaru
Nambikeyittu nanagigalu
Saswatha jeevavu

4. Badavanagi naannu bandaru
Nanna athanendu thallenu
Aathana mathinanthe koduva
Saswatha jeevavu`
  },
  {
    number: 251,
    title: 'Paapada bara krathare',
    englishTitle: '',
    lyrics: `1. Paapada bara krathare
Bannirigale
Karthana mathu nambiri
Shanthiya hondiri

Nambireega nambireega
Nambireeghale
Eegha yesu nimmanella rakshisuvanu

2. Aa papa bhara harisa
Swaraktha chellida
Ee theerthadalli nimmaniga
Shudda maduva

3. Yesu thane sathya marga
Aaghidannallave
Saavakasha madabeda
Nambireeghale

4. Kristhesuvina janarol
Seririeghale
Aa sathya lokha baghyadol
Sthalava hondiri`
  },
  {
    number: 252,
    title: 'Namagheghale thoruva',
    englishTitle: '',
    lyrics: `1. Namagheghale thoruva
Raktha bugge kondadvaru
Bugge thorisiddyesuve
Nanu sthothrisuthiruve
Naanu dhari bittavanu
Esto dhoora hogiddene
Divyavadhi bhuggheyalli
Naanu shudhanagiruve

Shuddanaguve shuddanaguve
Yesuvina rakthadalle
Nane shuddanagiruve

2. Yesu nanna rakshisalu
Silubeyalli saththanu
Nithya jeeva kodalu
Mullu mudi thottanu
Divyavadhi theerthadalle
Snana madi baruvenu
Naaniga himakinthalu
Nithya sudhanaguvenu

3. Nannalidha papavannu
Neenu shikshisa bandare
Nanu nithya nasadhol
Sikki biddu hogiddenu
Naanu krista buggeyalle
Sudhanagi bandhiruve
Naanu nasanapadedhe
Sada swarghadhalliruvenu`
  },
  {
    number: 253,
    title: 'Swarghada lokha bittu',
    englishTitle: '',
    lyrics: `1. Swarghada lokha bittu
Bandidha swamiyu
Supremavannu helu
Kela santhoshavu
Adhannu sudhavagi
Thilisu nanage
Papada dhariyalli
Nadedu bandied

Aadhiysllidds preeethi
Devara divya preethi
Kristesuvina preethi
Mareyade keliri

2. Kristesu papighagi
Swaprana kottanu
Embadu sudhavaghi
Nanage thilisu
Aathana maryadanthe
Aaghaghe thilisu
Adhannu manadhalli
Nannittu kolluve

3. Adhannu mithranagi
Paapathmagali
Supreemadinda keli
Nee bidabedave
Nannanu kristanalli
Seruvavaregu
Melinda mele hele
Nanna echarisu

4. Lokhada nota dinda
Naa dhari bittaru
Nee bandu preethiyinda
Nanna echarisu
Ee lokha biduvagha
Swarghiya lokhakke
Na seri sada kala
Alli vasisuve`
  },
  {
    number: 254,
    title: 'Elliliyu paapada kavalithu',
    englishTitle: '',
    lyrics: `1. Elliliyu paapada kavalithu
Kristeysu satya jyothi
Namm manadhol aathaholedhanu
Kristeysu satya jyothi

Jyothige bannirannuthane
Nammali adu holeyutha
Kurudanagi kanuthene
Kristeysu satya jyothi

2. Viswasigalighe katheleyilla
Kristeysu satya jyothi
Aa janari prakashavella
Kristeysu satya jyothi

3. Paapaghala marghada janaghale
Kristeysu satya jyothi
Nambuvarige gothaguthe
Kristeysu satya jyothi

4. Paralokhadalli surya bedavu
Kristeysu satya jyothi
Aa lokhada jyothi rakshakanu
Kristeysu satya jyothi`
  },
  {
    number: 255,
    title: 'Yesu nannathmadharave',
    englishTitle: '',
    lyrics: `1. Yesu nannathmadharave
Nannanu rakshisa
Thanannanu kruje savige
Oppisikottanu

Krujeya maranavannu
Nannendu maryadentheyu
endhigu kruje nenepu
huttisenelleya

2. Nee paapagrasthanagiye
Paapada horeya
Aa kroora silubeyalli
Hothidha swamiyu

3. Aa savininda nanage
Rakshane ayithu
Ninnanu preethiyindale
Naa sevisuvenu`
  },
  {
    number: 256,
    title: 'Kristana raktha thirtha nambikondaru',
    englishTitle: '',
    lyrics: `1. Kristana raktha thirtha nambikondaru
Athane sudha maduvenu
Aatha papa sikshe bidisuvenu
Aathane sudha maduvanu

Banniri eeghale
kristana rakthada thirthakke
paapadinda banda
kole tholesi
himakintha bellagagiri

2. Athana jothe nadeyuviyo
Aathane sudha maduvanu
Poorna vaghi athannanu nambiko
Aathane sudha maduvanu

3. Yesu baruvagha sidhavagiddheyo
Aathane sudha maduvanu
Ninna athama sudhavagi ittuko
Aathane sudha maduvanu

4. Holasada paapavannu bidiri
Aathane sudha maduvanu
Divyavada thirthavannu nambiri
Aathane sudha maduvanu`
  },
  {
    number: 257,
    title: 'Ninna preethisuva obbanidhane',
    englishTitle: '',
    lyrics: `1. Ninna preethisuva obbanidhane
Neenu athanannu thallabedave
Dhukhadinda atha nilla vadaru
Bekha bandu athana nambigalu

Ninna preethisuva obbanidhane
Neenu athanannu thallabeduve

2. Preethiyinda ninthu
Kareyuthane
Ninna papa hechu
Thori bandhare
Atha krupeyinda
Mannisuvanu
Neenu yakke thamsa
Madabeku

3. Yesu ninna hathra
Kayuvaghalu
Pashathapadinda
Eddu bandiru
Aatha sada kala
Rakshisuvanu
Bega Bandu athana
Nambigalu`
  },
  {
    number: 258,
    title: 'Vimochane enda suvarthe',
    englishTitle: '',
    lyrics: `1. Vimochane enda suvarthe
Yehova nange kottanu
Kristesu paapiya wrunave
Swarakthadim theerisida

Ee vakyava nambalu banni
Aa vartheya sathya varthe
Aa rakshakana mele nambi
Vimochane sikkuthe

2. Maranakke badalu jeeva
Supremadim koduvanu
Viswasiya manava eegha
Krithesu suddhisuvanu

3. Durasheya thyjisibidu
Aa karyava madisalu
Namage ashadya vidaghyu
Kristesu kayuvanu

4. Ooh banniri kristana hathra
Ee rakshane hondighalu
Aa rakshakanu preethi yinda
sweekarisikolluvanu`
  },
  {
    number: 259,
    title: 'Na dairyavagi karthana',
    englishTitle: 'I am not ashamed to own my Lord',
    lyrics: `1. Na dairyavagi karthana
Areke maduve
Athana vakya thallade
Kapadi kolluve

Silubeyalleye nithya jeeva nodide
Nanna papa baravu hogide
Nambikondenu santhihondede
Nane dairyavagi hoguve

2. Yesu ninathma ballenu
Sampoorna nambuve
Nanathma nenu thallade
Rakshesuthiruve

3. Nin mathu vyartha vagade
Endendu thaluthe
Nin hatra vita athmava
Ne kayuvathane

4. Thandeya munde nannannu
Njapaka maduve
Bhoolokhadalli ninnannu
Arike maduve`
  },
  {
    number: 260,
    title: 'Kristesu papa murida',
    englishTitle: '',
    lyrics: `1. Kristesu papa murida
Divya rakshaka yesu
Salavannu arisida
Divya rakshaka yesu

Divya rakshaka yesuvu
Nanna rakshaka yesuvu
Nanna prabu

2. Swaraktha chelli hodanu
Divya rakshaka yesu
Nannanu sudhisidanu
Divya rakshaka yesu

3. Nithya nammaliruva
Divya rakshaka yesu
Nammanu endu kayuva
Divya rakshaka yesu

4. Durashe thegeyuvanu
Divya rakshaka yesu
Vijaya palisuvanu
Divya rakshaka yesu

5. Naa purnavagi nambuve
Divya rakshaka yesu
Ee lokha thalli bidu
Divya rakshaka yesu`
  },
  {
    number: 261,
    title: 'Krista rakthava',
    englishTitle: '',
    lyrics: `1. Krista rakthava
nodi nambuvenu
aa bali deva oopuva
nanaghe shanthiyu

2. Aa shanthi hogade
Sthirakthaadalliye
Devara mathu hogadhe
Endendu thaluthe

3. Kastavu bandaru
Lokhava hodharu
Aa shanthiyendu hogadu
Kristesu andhanu

4. Nan preethi kamiyu
Aananada hodharu
Devara mathu endigu
Badalu aghadu

5. Nan preethiyalliye
Nan athu kollenu
Devara preethiyalliiye
nanathukodenu`
  },
  {
    number: 262,
    title: 'Kondata vakali',
    englishTitle: 'Blessed be God our God',
    lyrics: `1. Kondata vakali
Yehova deva sthothra hondhalli
Athanu thanna maga kottanu
Kondatavagali

2. Innenu koduva?
Athanu swecheyinda nammalli
Preethi ya nittu karya madida
kondata vakhali

3. Devaru swaputhra
Krujeya krura savigadaru
Oppisi namma raksisidanu
Kondata vakhali

4. Evakha kristhanu
Devara munde beduvathanu
Yarikha namma thalluvaru
Kondata vakhali

5. Theermanamadhithu!
Devara karya vadarindalu
Naviga sudda jana radevu
kondata vakhale

6. Jayavu namage
Devaru yesu kristanindale
Aa jaya palisiruvathane
kondata vakhali`
  },
  {
    number: 263,
    title: 'Bhakthi kundi hoguvaga',
    englishTitle: '',
    lyrics: `1. Bhakthi kundi hoguvaga
Christa kayuanu
Nanu bhiddu hoguvaga
Nanna kayuvanu

Nanna kayuvanu
Nanna kayuvanu
Nanna preethisuvenu
Nanna kayuvanu

2. Nannu thappi hoguvaga
Nanna kayuvanu
Nanna preethi thannaga
Nanna kayuvanu

3. Rakthadinda konda mele
Nanna kayuvanu
Kristhana raknavagiddane
Nanna kayuvanu

4. Narakada nashadinda
Nanna kayuvanu
Thann poorna shkathi yinda
Nanna kayuvanu`
  },
  {
    number: 264,
    title: 'Namodaya bhadu',
    englishTitle: '',
    lyrics: `1. Namodaya bhadu
Margava Thori;
nanna hinde bandu
Himbhallisenda
ebhettavahathi
Athgannu thuli
Enmanege bhanni
Andu hodenu
Atha namanu
Thanna dhojad hathra
Maha preetiyinda
Karauthane
Athananu preethisi
Athana sthala
Endendigu nasheri
Alli eruve

2. Nammodeneye karada
mundagi hogi
Attangava talli
Hinegeriuvu
Pavitra thannathama
Sahayannedi ahsthalake atha
Sherisuvenu
Kasta sangada mutti
Bhandiderenu
Thalmeyinda navu alliseruva
Himsegalathali kastagala thoori
Kristhesuvim patanake baruvevu

3. Namedeneye karedha
Munjeyallidu
Santhoshdim hogi
Hibhaliselu
Eelokhada dwaniyu
Thyjisibhittu
Estagiye kugiddaru
Atha nammnu thanna
janarannagi tha karediddarinda
Bhagya vantharu
Athanu mrustanava
Kottu nammalli
Santhoshavittu tharuvanu`
  },
  {
    number: 265,
    title: 'Sarva sakthanada deva',
    englishTitle: '',
    lyrics: `1. Sarva sakthanada deva
Ehadalli kapadu
Nanirbhala nenu shkthi
Hastha needi nadisu
Divya hara paliseega nanagu

2. Atha tholayauva bhugge
Nina hatra bharuve
Ista thrertha bhaktharige
Sarva trupthi yaguthe
Mahakartha
Nene Bhalapadisu

3. Kade savu bharuvaga
Bhaya dinda thappisu
Swargalokhakkeruvaga
Harisha dinda bharuve
Sadhakala
nina hatriraviruve`
  },
  {
    number: 266,
    title: 'Yesu jotheyiruvaga',
    englishTitle: '',
    lyrics: `1. Yesu jotheyiruvaga
Nanu bhayapadenu
Atha harthrahiruvaga
Bhayavenu illavu

Yava bhayavillade
Anusarisiruve
Elliuna hoguthene
nina jotayaille

2. Yesu jotheyiruvagaa
Dairya kettu hogathe
Sthiravagi nilluvaga
Bhathibhalaviruthe

3. Yesu jotheyiruvagaa
Vyre kedumadanu
Loka kasta bharuvaga
Athma nasta vaguwdu

4. Yesu jotheyiruvagaa
Dharithappi hogvenu
Yesu kooda bharuvaga
Dhari thorisuvenu`
  },
  {
    number: 267,
    title: 'Parisuddathma koduva',
    englishTitle: '',
    lyrics: `1. Parisuddathma koduva
Athanu swamiye
Aa athmaneege namage
Bandiruva

2. Paarivalada hageyu
Aathanu bandanu
Su shanthi preethigalannu
Koduvanu

3. Benki gali galantheyu
phackane bandanu
papaada aruhannu
huttisida

4. Yaru thamma jeevadhol
Sthana kodutharo
Avarige sushathiya
palisuva

5. Papada marghadalliyu
Hogalu oppanu
Vishudaa yochaneyannu
Huttisuva

6. Suseveyannu madalu
Bala koduvanu
Ella supreraneyannu
Koduvanu

7. Devara athma namagu
Suyochaneyannu
Nithyavu kottu
Nammanu kayuvanu`
  },
  {
    number: 268,
    title: 'Devara hathradalliyu',
    englishTitle: '',
    lyrics: `1. Devara hathradalliyu
Naa krupeyindalu
Nirbayavagi nillavue
Anyonya viruthe

2. Devara margha bitten
Naa dura hodanu
Aathanu krupeyindalu
Nanna hathra bandanu

3. Kristana rakthadindale
Devaru nammanu
Swaputhra kristanantheye
Serisuvathanu

4. Deva swaputhrananthe
Nannanu noduva
Nammanu kristhanahage
Preethisuthiruve

5. Na entha preethiyalliyu
Nelegondiralu
Nanendu bayapadenu
Nananjikolenu`
  },
  {
    number: 269,
    title: 'Nannanu kartha prethisuvenu',
    englishTitle: '',
    lyrics: `1. Nannanu kartha prethisuvenu
Nannanu kartha prethisuvenu
Nanathma rakshisidenu
Sukuna huttisidenu
Nannanu kartha prethisuvenu

2. Nannanu kartha suddhisuvannu
Nannanu kartha suddhisuvannu
Olagina papadim
Horagina papadim
Nannanu kartha suddhisuvannu

3. Nannanu kartha nadisuvenu
Nannanu kartha nadisuvenu
Durguna biduvudakku
Sanmarghaseruvudakku
Nannanu kartha nadisuvenu

4. Karthanu swargakke erisuvenu
Karthanu swargakke erisuvenu
Neeriksheyalli kayuve
Susevelli nilluve
Karthanu swargakke erisuvenu`
  },
  {
    number: 270,
    title: 'Papiya mithranu yesu swami',
    englishTitle: "There's not a friend like the lowly Jesus",
    lyrics: `1. Papiya mithranu yesu swami
Edhane, Edhane
Papada rokhada vaidyanagi
Edhane, Edhane

Atha nathmada kasta nodi
Vasi maduvanallave
Athanu swargadha vaydyanagi
Edhane edhane

2. Papiya mithranu sakthanage
Edhane, Edhane
Yarannu thalladavanagi
Edhane, Edhane

3. Hagalu erulu namma hatra
Edhane, Edhane
Athanu nammannu preethisutha
Edhane, Edhane

4. Ee mitra nammannu kareyutha
Edhane, Edhane
Athanu nammannu bidalara
Sagutha edhane

5. Athanu papava mannisutha
Edhane, Edhane
Nammannu nashake akalara
Sagutha edhane`
  },
  {
    number: 271,
    title: 'Yesuve nanu ninnanne',
    englishTitle: 'More about Jesus',
    lyrics: `1. Yesuve nanu ninnanne
Thiliyalase paduve
Ninna sahaya enage
Sikkuvadendu nambuve

Hechechagi yesu, hechechagi yesu
Rakshane madwa krupeye
Thileyalase paduve

2. Yesuve ninna hatravu
Kaleyalike aseyu
Eruvadendu nanagu
Athmana bala palisu

3. Devaravakya dallliye
Ninnannu noduvandeye
Thilleya madukarthane
Nannannu drushtise-yesuve

4. Yesuve ninna maheme
Noduva dhina baruthe
Elliyu nanu ninnanne
Preethiya seve maduve`
  },
  {
    number: 272,
    title: 'Yesu nenu nanage',
    englishTitle: '',
    lyrics: `1. Yesu nenu nanage
Athmiya asrayavu
Nenu kayuvathanu!
Nanage rakshaganu!
Himse baruvagalu
Nasta kaladalliyu
Nithyavu nanondigu
Nithya kayuvathanu

2. Elliyu na hogenu
Ninagage kayuve
Nene nanna-srayavu
Ninna vakya nambuve
Ninna kadeyindale
Sakthi kodu nanage
Nin sahaya dindale
Jaya ghosha vaguthe

3. Nanna divya apthane!
Ninna preethi nanage
Eshtascharya vagide
Manotruthi koduthe
Nanayogya nadaru
Nene preethi maduthi
Nanasudhanagalu
Nene sudhamaduve

4. Nannalidha papave
Ninna rakthadindale
Hoyithella nanage
Samadhanavagidhe
Sadha nene nannannu
Kayuvatha nagide
Jeevadanthya bandaru
Nannannu seresuve`
  },
  {
    number: 273,
    title: 'Yesu nammathmadaranege',
    englishTitle: '',
    lyrics: `1. Yesu nammathmadaranege
Jeevada-dhara jyothiyu
Nee kottananda namage
Lokhavu kodalaredu

2. Nin sthiravada sathyavu
Marpata enda padedu
Ninnanu bayasuvaru
Sada santhosha viruvaru

3. Nee jeeva kotta namage
Ninninda thrupthiyaguthe
Jeevada bugge namage
Dahavu endu barade

4. Ellelli navu hodare
Ninnanu bayasuvevu
Ninnanu thallidavaru
Saphalavaghalaradu

5. Kristesu nammellara
Yavagalu kayuvanu
Kastagallannu nnegisi
Sada nammanu kayuvanu`
  },
  {
    number: 274,
    title: 'Aa sathya lokha rajane',
    englishTitle: '',
    lyrics: `1. Aa sathya lokha rajane
Kurubananthidhane
Nannalidha koretheyu
Kristesu neegisuva

2. Kristesu jala hathrave
Nannanu nadisuva
Amulya maevinalliye
Nannanu erisuva

3. Nanestu thappi hodaru
Kristesu bidelara
Nannanu sudha madalu
Athana divya chitha

4. Marana dina bandaru
Naa hedaruvudilla
Aathanu hathra dalliyu
Balavaneeduvanu

5. Kristesu nanna mundeyu
Aaharaviduvanu
Naa thrupthipattu karthanige
Su sthothra maduvenu

6. Athana preethi thappide
Nannanu kayuthade
En preethiyulla kathanige
Suseva sallisuve`
  },
  {
    number: 275,
    title: 'Yesu ninnamadharane',
    englishTitle: '',
    lyrics: `1. Yesu ninnamadharane
Amulya ratnave
Adhella namakinthalu
Impada hesare

2. Aa nama ninna preethiya
Prakatisuthade
Enyaru hage nammanu
Preethisuvaru

3. Naventha kastadhalliyu
Bidhagyu namagu
Sahaya kotu nammanu
Preethisuvavaru

4. Adharyavella athanu
Bidisaballanu
Devara vakya nambalu
Sahayisuavanu

5. Yesu ninnama helalu
Ellelli haduve
Adhara bele helalu
Ashadhyavagide`
  },
  {
    number: 276,
    title: 'En kartha nanna kuruba',
    englishTitle: '',
    lyrics: `1. En kartha nanna kuruba
Korathe padenu
Mrustana santhigalannu
Yesu koduvanu

2. Nanathma bala kodalu
Sukrupe thoruva
Naa neethivanthanagalu
Nannanu kayuva

3. Marana bandharalliyu
Nananchikollenu
Nanondige nan karthanu
Sahayisuvanu

4. Vairiya munde mevannu
Pooraisuvanu
Nan thalege enne hachalu
Santheisuvenu

5. Eeghina kaladhalliyu
Tha preethisuvanu
Aathana maneyalliyu
Santhrupthisuvenu`
  },
  {
    number: 277,
    title: 'Papada marghadalli',
    englishTitle: '',
    lyrics: `1. Papada marghadalli
Nna thappi hodenu
Yesu nanna nodi
Nannethi thandanu
Tha thanna hattiyalliruva
Sthalava kotta nanage

Preethiyinda banda
Rakthadinda konda
Krupeyinda thanna thandaru
Endha krupe yesu ittanu

2. Aathanu nodidaga
Naa sayuthidenu
Kristesu bandu nange
Dairyava kottanu
Impadamathinindalu
Nanage harsha kottanu
Impada mathinindalu
Nanagee harsha kottenu

3. Thanna kaighalallida
Ghayada guruthu
Swapadagala saha
Thorpadisidanu
Nannanu rakshisalikke
Kristesu bade patenu

4. Aathana hathra vidde
Santhosha viruthe
Athana mukha nodi
Aananda vaguthe
Athana sthothra madalu
Hagalu rathri saladu

5. Aathanu baruvanu
Esto anandave
Aa dinakkagi naanu
Kayuthiruvenu
Aavaga nanna hatige
Nannanu serisuvanu`
  },
  {
    number: 278,
    title: 'Yesu ninna sathya nodi',
    englishTitle: '',
    lyrics: `1. Yesu ninna sathya nodi
Manothrupthi honduve
Ninna athi sresta preethi
Thilukolluve
Ninna kanikara nodi
Nanage santhoshave
Neene nanna athma mutti
Dairya kottide

Yesu ninna sathya nodi
Manothrupthi honduve
Ninna athi sresta prethi
Thilukolluve

2. Avadiya udhakinda
Ninna preethi meruthe
Ninna dhoda upakara
Nannamelede
Priyane ninnalli nanu
Trupthi honduthiruve
Ninna vakyavu nannalli
Karyamaduthe

3. Nambikeya marghadinda
Manasanthiyagide
Ninna sreshta preethiyinda
Trupthi golluve
Ninna sakthibalaneedi
Jayadwanijayutthe
Neenu ninna hasthaneedi
Nanna nadisu

4. Nanu ninagage kadu
Seve madutheruve
Nanna mele drushtiyittu
Krupe pallisey
Neenu deva preethigagi
Karyamaduvathane
Nannan nedigu kapadi
Baladindale`
  },
  {
    number: 279,
    title: 'Nanu hatradalli eruvagalu',
    englishTitle: 'Fear not Iam with thee',
    lyrics: `1. Nanu hatradalli eruvagalu
Nenu bayapattu oodabaradu
Nanna matha nimbi sthiravagiru
Ninna bidalara bidenu endendigu

"Na kai bidenu, Na kai bidenu"
Aa mathu heledanalla
Tha heleda nallave

2. Suthalu hogalu bhadi hodaru
Mele swarghadholu badhalagadu!
Allindhesu swami baruvathanu
Nanna bidalara nannannu kai bidenu!

3. Munde bahu kashta baruthidharu
Bayapadalara swami edhane!
Balavagi ninthu, harshagolluve
Swami bidalara swami nanna bidenu!`
  },
  {
    number: 280,
    title: 'Divyasamadana',
    englishTitle: '',
    lyrics: `1. Divyasamadana
Nadiyanthede
Esta theerthapana
Baktharathmake
Yella bayavannu
Negisuvadu
Navadayryavannu
Huttisuvadu

Divyakrupanide
Sughapoorthiye
Paramartha sidhe
Santhe mulave

2. Devasraya dalli
Seredavanu
Surakshidanagi
Nilluvavanu
Gorabade chinthe
Yava vipathu
Yesu baktharige
Muttalaravu

3. Sugha dhukavella
Athanaindale
Shekshe rakshegella
Mula preethiye
Nambu athanannu
Satya sandanu
Ninna karyavannu
Nadisuvanu`
  },
  {
    number: 281,
    title: 'Yehova nanna kuruba',
    englishTitle: '',
    lyrics: `1. Yehova nanna kuruba
Korathe padenu
Uthkrushtta meva koduva
Santrupthi golluve

2. Vishranthiyannu koduva
Nannanu kayuva
Neethiya margha thoruva
Kedella neguva

3. Yen vayre edurinallu
Mejannu eduva
Mrushtana haki nanagu
Baa thinnu annuva

4. Naa mrutyu thaginalliyu
Nadeya bandaru
Nanendu anchadiruve
Krishtana hatrave

5. Yen sirasina meleyu
Suthayla hachida
Yen patreyellandavu
Sampoornaviruthe

6. Yahovanu swasthanake
Nannannu kareda
Yen seresuvavarege
Krupeya thoruva`
  },
  {
    number: 282,
    title: 'Yesu ascharya rajane',
    englishTitle: '',
    lyrics: `1. Yesu ascharya rajane
Neerana veeranu
Ne namma karyadalliye
Sahaya kottede

2. Ne namma manadalliyu
Satyavanittare
Durgunavella soluthe
Sudadwavaguthe

3. Yesuve ninna preethiyu
Mitege merede
Namage yestaascharyavu
Yesto kruthaknjade

4. Nin namava kondaduve
Na haduthiruve
Ninnannu bayasiruve
Na sthotra maduve

5. Ninnannu preethimaduve
Suseve maduve
Na ninna hinde baruve
Nishchaya madide

6. Ee divya preethi nannalle
Nityavu eruthe
Nannalli karya maduthe
Kadeya varege`
  },
  {
    number: 283,
    title: 'Shudatheyannu abyasisiru',
    englishTitle: '',
    lyrics: `1. Shudatheyannu abyasisiru
Nee karthana mathannu himbalisu
Sudhara nivasa korutha eru
Devara sahaya neene huduku

2. Shudatheyannu abyasisiru
Prarthaneya madalu kalitheru
Nee karthana hatra thanguthaeru
Ninnalli suguna kandiruvudu

3. Shudatheyannu abyasisiru
Nin estada hage ne hhogadiru
Aa kala sakala enu bandaru
Nee karthana hatra thangutha eru

4. Shudatheyannu abyasisiru
Neene mitimere mathadadiru
Nin nadathekartha mechiruvenu`
  },
  {
    number: 284,
    title: 'Sumitranu dorethanu',
    englishTitle: '',
    lyrics: `1. Sumitranu dorethanu
Preethiya bavadinda
Suvakyava aduthalu
Karune mele etta
Athana dwani kelalu
Sammathiyinda bande
Athana dasanadenu
Athana serisuve

2. Nanagage ee mitranu
Kroojeya mele satha
Tha nanagagi sayalu
Karuneyinda banda
Nanathavanagauve
Athanu nanna kartha
Nannalliruva sarvave
Koduve preethiyinda

3. Susakthiyinde mitranu
Yellava mada balla
Nannannu nitya swarghaku
Seresa ballanatha
Athanigagi kayuve
Hooradi sevesuve
Anadra nanendendigu
Athana jothiyiruve

4. Ee mitranu yellarigu
Belakada divya vaydya
Aathanu budhi kodwanu
Athanu kaya balla
Thanna divya preethige
Thappisuvavanu yaru
Nanelleliyu yendedigu
Sthotrava maduvenu`
  },
  {
    number: 285,
    title: 'Nanelliyu hogiruvaga',
    englishTitle: '',
    lyrics: `1. Nanelliyu hogiruvaga
Udharakaniruvenu
Sameepasthanagiruthane
Thiliya lelllarigu

Yellaru thiliya beku
Yellaru thiliya beku
Udharisuvathanidane
Yellaru thiliya beku

2. Athanu sukarune preethi
Atyadigavagiruthe
Yellaralli pradamanatha
Thiliyalellarigu

3. Kastagalavarisuvaga
Sahaya koduvanu
Na kondaduthe athanannu
Thiliyalellarigu

4. Nanathana preethisuthene
Sevesutha baruvenu
Ninudarisi baruthane
Thiliyalellarigu`
  },
  {
    number: 286,
    title: 'Nannannu yesuve',
    englishTitle: '',
    lyrics: `1. Nannannu yesuve
Preethisidhe
Silubeyalliye
Nee sathidhe
Ninmunde tharuve
Hrudaya kanike
Na preethiyndale
Kondaduve

2. Yesu nee swarghake
Yeri hodi
Ninna samohake
Bandiruve
Kroojeya thalalu
Preethiyinderalu
Seveya madalu
Sahayisu

3. Naa sthiravagiye
Ninthiralu
Nee nanna athmake
Bala kodu
Nitya suseveya
Paroopakarave
Nannalli kanisi
Nee madayya

4. Nannalli sarvava
Na ninage
Arpisi ninnanna
Kondaduve
Ninnannu nodalu
Santhosa poorthiyu
Nannalli ervadu
Yendendigu`
  },
  {
    number: 287,
    title: 'Kartha mathanadu nanagu',
    englishTitle: '',
    lyrics: `1. Kartha mathanadu nanagu
Nee sumaneyera barede
Nin ande mathanadalu
Sahaya kodu karthane

2. Ethara jana nadisa
Nannannu nadisu kartha
Hasida tahmagalannu
Nee trupthi madenodeya

3. Halavu janagalannu
Adarisuva hageyu
Nee nanna bala padisu
Nannannu kapaduthiru

4. Amulya ninna mathanne
Naanadi baruvantheye
Nannannu kalisesuve
Sahaya kodu nanage

5. Kastada kaladalliye
Preethiya mathanadalu
Ninna sushanthi nanage
Nan nodeya nee palisu

6. Nannalli poorna preethiyu
Thoralike krishtesuve
Nin athmaninda nadisu
Kelasa madu nannalle

7. Nannanu upagogisu
Ninna suchitha nannallu
Swarghake servavaregu
Nanodeya nee nadisu`
  },
  {
    number: 288,
    title: 'Mangala sree rathriyalli',
    englishTitle: '',
    lyrics: `1. Mangala sree rathriyalli
Bethlehem chatradi
Varakanyeyalli janisida
Devaputrana vandisuva
Vandane rakshagane

2. Mangala sree rathriyalli
Dhootharu holadi
Hindu kayuva kurbarige
Thanda vartheyu sreshtavade
Bandanu rakshakane

3. Mangala sree rathriyalli
Jathana mughadi
Suprasannade sobhisuthe
Neethi sadgadi brastarige
Swagatha rakshagane`
  },
  {
    number: 289,
    title: 'Nanna yesu sakthanu',
    englishTitle: '',
    lyrics: `Nanna yesu sakthanu
Yendu nadisuvenu
Anandave kartha nanna durgave
Anudina athanodakodi nadeyuva

1. Athbudave athan
preethiyendigu thalladanthaha
Reethi
Papiyada nannanatha
Sudhamadida reethi
Endenage yesuvalle
Margha unnathe

2. Sampoorna santhosavu
Nityavada deva santiyu
Sudade Honda bugeyadu
Krishtana rakthavadu
Paapige devara danavidu
Yendendu uchidavu

3. Krishthanu thane athanagi
Karediha paapiya dheenanagi
Hondade hodare rakshaneya
Krupaya kaladi
Thappadu naraga dandeneyu
Nyaya theerpadinadi`
  },
  {
    number: 290,
    title: 'Yellavannu devaru',
    englishTitle: '',
    lyrics: `1. Yellavannu devaru
Untu madidanu
Eha para lokava
Athanu madidha

2. Bere bere bannada
Hohakigalannu
Srishtikartha devaru
Untu madidanu

3. Athanu bettagala
Nadigala saha
Akasavannu kooda
Yellava madidha

4. Male kala cheliyu
Besige suryanu
Thottagala phalava
Palisidathanu

5. Yellava nodu kannu
Sthotrava madalu
Bayi nammalittu
Kapaduvavanu`
  },
  {
    number: 291,
    title: 'Thamma makalannu',
    englishTitle: '',
    lyrics: `1. Thamma makalannu
Karedu kondu thandu
Krishtesuvina hathira
Jana bandaru
Hogiri yendu shisyaru
Thilisalagi krishtanu
Sanna makalu baralu andanu

2. Kurubana hage
Aa chikka makalannu
Kurimarigalantheye
Naa sakuvenu
Nannannu nambuvavarannu
Swarghake seresuvenu
Sanna makalu baralu andanu

3. Aa makalu bara
Helida namma kartha
Yendavanenedu
Nodiri
Priya makale
Allalli yestu makalu
Athana sabhakelalu Sanna
Makalu baralu andanu

4. Allaliya jana
Swavigrahagalannu
Bisadi devara kadege
Yendu barvaru
Oh deva yella makalu
Nin kadege baruvantheyu
Avaralli satya heluthiru`
  },
  {
    number: 292,
    title: 'Yesu nammanella kayuvavanu',
    englishTitle: '',
    lyrics: `1. Yesu nammanella kayuvavanu
Hatradallidane bayayathaku?
Atha marghadalli nadesuthalu
Nammannu kapadi baruvathanu

2. Yesu nammanella kayuvagalu
Nammalli mathadi baruvathanu
Kela kaladalli thiduvathanu
Hage maduthane namma melegu

3. Yesu namagagi preethiyindalu
Thanna raktha chelli rakshisidanu
Nambuvavaralli chinneyettanu
Edu nanna swathu heluvathanu

4. Yesu kurubanu kayuvathanu
Yava vayri bandi kedumadalu
Kadeyalli naavu sayuvavaru
Athanu nammannu seresuvanu`
  },
  {
    number: 293,
    title: 'Thanna rajya sthapisalu',
    englishTitle: '',
    lyrics: `1. Thanna rajya sthapisalu
Yesu baruvaga
Thanna raknagalanella kodisuvenu

Krustha kireettavannu
Tharegala hage
Baktharemba raknegalu
Holeyuvaru

2. Sudha raknagala hage
Yella baktharannu
Thanna niya rajadalle
Seresuvenu

3. Krusthanannu preethisuva
Chikka makalella
Yesuvina raknagalu
Agiruvaru`
  },
  {
    number: 294,
    title: 'Papake bagilu',
    englishTitle: '',
    lyrics: `1. Papake bagilu
Muchuva pattanake
Asudha maduva
Asudha maduva
Yavadu seradhe

2. Rakshaka yesuve
Nannannu sudhisu
Nannannu thole
Nannannu thole
Nannannu rakshesu

3. Kartha nanegalu
Ninnannu nambuve
Balavakodu
Balavakodu
Papava bidalike

4. Aa sudha pattanadhol
Na ninna mundeye
Nirdhoshadeyol
Nirdhoshadeyol
Nirandranilluve`
  },
  {
    number: 295,
    title: 'Jyothi swaroopa devare',
    englishTitle: '',
    lyrics: `1. Jyothi swaroopa devare
Nee munde nillalu
Yarinda sadyavaguthe
Kalmasa papa yavadu
Kanalu baradu

2. Ninsuthalagi dhootharu
Aa jyothi thalvaru
Avaru papa madalu
Asadyavendu alliyu
Yendendu nilwaru

3. Papishtanada nanagu
Aa jyothi sadyave
Na hyege alli nilvanu
Nanathma hyege thaluthe
Aa prabhe yaliye

4. Krishtesuvina krupeye
Marghava madithu
Swaraktha chelli nanage
Sudathe palisidenu
Sadya madidenu

5. Devarupuranindale
Kareda nannannu
Athana preethiyindale
Jyoti swaroopi mundeye
Nirandra nilluve`
  },
  {
    number: 296,
    title: 'Nin hatra kartha baruve',
    englishTitle: '',
    lyrics: `1. Nin hatra kartha baruve
Naa namma Ghana vaydyane
Kastavu yavadindale
Nee guna maduvathane

2. Ninnanu kanninindalu
Nodalikagadidharu
Ne ninna mathinandeye
Eruveyendu ballevu

3. Oh karthane nenegale
Sahaya madu namage
Nam preethi kamiyagide
Kelavaralli ellave

4. Lokavu mosa maduthe
Embadu thilukondaru
Adanu bidalolada
Janara asirvadisu

5. Nin seve maduvavaru
Sampoornararu helalu
Asadyavagadidharu
Avaranagigarisu

6. Preethiya bavadindale
Ne avathara thalide
Karune thorisalike
Naa namagagi sathide

7. Nenaga muttidagale
Gunavaga madidathane
Egalu bala hageye
Gunavu madalaguthe`
  },
  {
    number: 297,
    title: 'Hagalega hoguthe',
    englishTitle: '',
    lyrics: `1. Hagalega hoguthe
Kavalega bandede
Sancheyalli yellaru
Sthotramada thakadhu
Yehovage

Sudha sudha sudha
Yahovane
Eha para ninnannu
Sthotrisuvarellaru
Yahovane

2. Jeevavulla karthane
Baktharada nammanne
Asirvada dindale
Nadisemma nendigu
Nee kapadu

3. Kavalinnu hechalu
Aguthiruvagalu
Ninage nammodeya
Naavu prarthisuvevu
Karunisu

4. Lokha kastavella
Pariharavaguthe
Aga sthotra ninage
Sallisuvarellare
Nirandrave`
  },
  {
    number: 298,
    title: 'Nee kotta dina their banthu',
    englishTitle: '',
    lyrics: `1. Nee kotta dina their banthu
Eeghalu rathri yagide
Hothsre yslli sthothra kottu
Naneega hage maduve

2. Ee lokha sthuthi baruvagha
Nin sabhe kayuthiruthe
Prarthaneyalliruvaga
Nin karya nadeyuthade

3. Ee dhesha dalli kathallide
Aadhesha dalli belaku
Allelli krista sabhe
Kondata sallisuvaru

4. Aa dhesadalli surya modi
Baktharu sevisuvaru
Allalli sthothra koduathare
Prarthane madalpaduthe

5. Ee lokha keduthiruvalli
Nin lokha sudha vaghuthe
Endendigu nin nama hadi
Kondatamaduthiruve`
  },
  {
    number: 299,
    title: 'Munjaneyalli deva vakya',
    englishTitle: '',
    lyrics: `1. Munjaneyalli deva vakya
Bija bithu
sanjeyalli saha Bithuthayiru
Munde sukki kala baruthade
Endu
kjapthimadi kondu kelasa madiru

phala sikkuthe phala sikkuthe
purna-anandadinda
bithuthayiru

2. Bisiliruvalli neraliruvalli
Devavakya saru
Heluthayiru
Athyalkaladalli
Purna-anandadalli
Phala sikkvadendu kjapthi madiri`
  },
  {
    number: 300,
    title: 'Dush prernegendu',
    englishTitle: '',
    lyrics: `1. Dush prernegendu
Kiwi kodade
Yavagalu jaya
Honduthayiru
Horadi durashe
Sholisalu
Karthana shahaya
Edikolluthiru

Kartha bala sahaya
Bedi kollutha yiru
Aatha ninnanu kele
Sahayisuva

2. Dus-sankava mathu
Dur bashane bidu
Devara sahaya beduthayiru
Itharara labha uttagalliku
Nee badukki bandhu
Kai hakuthiru

3. Vijayava hondi bandavarigu
Sujayada male sikkiruvadu
Horadutha kartha vakyava
Nambu ninnali vijaya untaguvadu`
  },
  {
    number: 301,
    title: 'Suvartha ennu sara',
    englishTitle: '',
    lyrics: `1. Suvartha ennu sara
Santhoshapeduve
Kristesuvina vaakya
Na heluthiruve
Aa shuba varthesathya
Na tilukolluve
Athennu saruvaka
Santhoshapeduve

Suvartha ennu sara
Enthenthanathisuve
Kristeshuvina vaakya
Na helaliruve

2. Aashcharya vada varthe
Enthenthanadisuve
Ennyava reethiyalli
Rakshaneyaakuthe
Aa vartheyu nannalli
Sukaryamadithe
Ellelliyu na heli
Adennu saruve

3. Suvarthe heluvalli
Aanandaviruthe
Kristeshuvina preethi
Thorutha baruthe
Athannu bahujana
Enthenthigu kelaru
Aa vaartha avarige
Na saruvavanu

4. Bhaktharu arthahela
Santhoshisuvaru
Athannu keluvaaka
Santhoshisuvaru
Sada athannu haadi
Sampramadindale
Devara hatra seri
Na haaduthiruve`
  },
  {
    number: 302,
    title: 'Golgotha guddakke',
    englishTitle: '',
    lyrics: `1. Golgotha guddakke
Nannannu oyyu
Alli Yesu swami
Nanagaagi sathanu
Lokatha paapatha
Shapava thaali
Ellarigaagi thanna
Prana kottanu

2. Golgotha guddakke
Nannannu oyyu
Aa Yesu swami
Thanna raktha chellida
Aa rakthadindale
Nannannu kondu
Adarindalle nannannu
Shudhamaaditha

3. Golgotha guddakke
Nannannu oyyu
Alli naanu Yesuvina
Kruje noduve
Alliye impatha
Soukyava hondi
Verondu intha
Sthana naanu ariye

4. Golgotha guddakke
Nannannu oyyu
Silubeya hatra
Sarwa kaala baaluve
Karthana divya
Kataakshava nodi
Aathananne naanu
Preethi maaduve

5. Golgotha guddakke
Nannannu oyyu
Alli nanna ella aashe
Bugge noduve
Karthana sangada
Melokathalli
Krujeya bake
Sarwakaala haaduve`
  },
  {
    number: 303,
    title: 'Doora deshadalli krujeya melaye',
    englishTitle: '',
    lyrics: `1. Doora deshadalli krujeya melaye
Namma shretshta kartha sattanu
Paapadim thumbitha lokakosgarave
Thanna rakthava chellidanu

Yesu baruvavareyke
Nanna krujeya horuvanu
Aaga krujeya badalaagi
Nannu kireeta honduvenu

2. Lokhavu krujeya thiraskarisuthe
Adaagyu nanage chandathu
Devara kuriyu melokava bittu
Taane krujeya eeridhanu

3. Krujeya taalida Yesukristakaagi
Apamaana thaluvenu
Kadeyke karthanu arpane kaykondu
Naanu swargakke seruvenu`
  },
  {
    number: 304,
    title: 'Kristeshu devara puthra',
    englishTitle: '',
    lyrics: `Kristeshu devara puthra
Kristeshu manava puthra
Krujeya kambatha mele
Swapranava kottidhane

1. Melana lokava bittu
Bhoolokakke bandanu
Manuja roopava hondi
Nammandeye baaluvenu

2. Paapishtare aathanannu
Hidukondu hodaru
Maratha kambatha mele
Thugaadisi kondaru

3. Saavina shakthiya mele
Jayava hondi bandanu
Swargakke erisal pattu
Simhasana hattidanu

4. Ee hothu aathana hatra
O papaikale banniri
Nimmella paapava bittu
Samrekshaneya hondiri`
  },
  {
    number: 305,
    title: 'Yesu swami thane beku',
    englishTitle: '',
    lyrics: `Yesu swami thane beku
Lokanada hoguthe
Yesuvina shreshta preethi
Sarwa kaala taaluthe

Yesu swami nanna mele
Yeshto preethi ittanu
Nannanu rakshisalikke
Tanna praana kottanu

Yesu swami thane bekku
Manashaanthi needuva
Nanna jeeva maargadalli
Suprakaasha koduva

Yesu swami thane bekku
Aathanandigiruve
Divya samadana hondi
Kashtadol na haaduve

Yesu swami nanagaagi
Lokathalli baalitha
Pappa bhara hottukondu
Krujeyannu taalida

Yesu swami thane bekku
Nodathe nan nambuve
Kadayalli swargadalli
Na kannare kaanuve`
  },
  {
    number: 306,
    title: 'O kristha bhakdare',
    englishTitle: '',
    lyrics: `O kristha bhakdare
Sandosha paduva
Naavella koodi haaduva
Kristhake stotravu
Chiyon namma sthana
Sundara sundara Chiyon
Devara sundara sthana
Chiyonige hoguve

Devara makkale
Ee gaana hadelli
Mathyaaru hadalaralu
Kristhesu maathrave

Devara mughava
Alli noduvevu
Endendigu Chiyoninol
Papava madevu

Chiyoninindale
Sahaaya baruthe
Pravaasadalli namage
Prakaasha sikkuthe

Golada baarathu
Santhosha paduva
Navella munde hoguva
Stotrava haaduva`
  },
  {
    number: 307,
    title: 'Vaalsalyadinda kristeshu',
    englishTitle: '',
    lyrics: `Vaalsalyadinda kristeshu
Dinavu ninnannu kayvenu
Thai koosa kayuthiruvandeyu
Yesuvu ninnannu kaayvenu

Dhukkadol nashtadol
Anjabeda makuve
Ninnannu kaybidanu
Endu namma shreshta karthane
Dinavu ninnannu kayvenu

Vaalsalyadinda kristeshu
Dinavu ninnannu kayvenu
Thai koosa kayuthiruvandeyu
Yesuvu ninnannu kaayvenu

Dharani shrishtisuvadikinda modalu
Karthanu ninagaayi chindisidanu
Vaalsalyadinda kristhesu
Dinavu ninnannu kayvenu`
  },
  {
    number: 308,
    title: 'O kartha ninna preethi',
    englishTitle: '',
    lyrics: `O kartha ninna preethi
Namage sambodisu
Ninna kaykaalukala
Namage thorpadisu
Namma hrudayadindale naavu
Aaradhaneya sallisuvevu

Ninna maranadinda namage
Deva preethi thorisidhi
Nanivaaga ninna
Stothra sthuthi arpisutheve
Yesu karthane deva puthra
Namma jeeva neene

Ninna dehaahaara
Namage aagiruthe
Ninna rakthave paana
Namage aagiruthe
Naavendu ninna saavinindale
Jeevisutheve Yesu karthane`
  },
  {
    number: 309,
    title: 'Kraystha kristhane suvaarthe',
    englishTitle: '',
    lyrics: `Kraystha kristhane suvaarthe
Saralikke horadu
Yesu paapigaliikaagi
Thanna praana kottanu

Howdu naanu hoguthene
Suvaarthe saralikke hoguthene
Howdu naanu Yesuvina
Suvaarthe saaruve

Paapikalige suvaarthe
Spashtavaagi tilisu
Avara dusthithiyannu
Avarige thorisu

Swargatha sugatha bake
Janarige tilisu
Ethennalla kodalikke
Yesu dukkahapattenu

Yesu thnna sabeygaagi
Sthana siddha maadalu
Eega paralogathalli
Eddanendu tilisu`
  },
  {
    number: 310,
    title: 'Yehova deva baya bhakthiyinda',
    englishTitle: 'Oh Lord my God',
    lyrics: `1. Yehova deva baya bhakthiyinda
Nin srustiyannu nanu noduve
Swahastha dinda nenu edhanella
Teyaresidhi endu nambuve

En athma ninna sthotra haduthe
En devare nee sreshtane

2. Aranyadalli thirugaduvaga
Empada pakshi swara keluve
Parvathadallina soudaryavannu
Aananda dinda nanu noduve

3. Swaputhranannu devaru engaagi
Silube saavige oppidhanu
En papa bhaara hothukolluvande
Swaraktha chelli Yesu sathanu

4. Kristhesu mahimayinda baruvaaga
Thuthoori shabdha naanu keluve
Suswargakke nannanu oyyuvaaga
Endendu naanu stothra maaduve`
  },
  {
    number: 311,
    title: 'Yesu nanna rakshaka',
    englishTitle: '',
    lyrics: `Yesu nanna rakshaka
Papadinda bidisa
Thanna praana kottitha
Nanna prabu

Yesu nanna kuruba
Nannondike kaayuva
Nanna munnadeysuva
Nanna prabhu

Yesu nanna arasa
Aatha ondu divasa
Haalalikke baruva
Nanna prabhu

Yesu nanna karthanu
Nanagaagi sathanu
Nanna preethisuvanu
Nanna prabhu`
  },
  {
    number: 312,
    title: 'Nithya preethiyindale',
    englishTitle: '',
    lyrics: `Nithya preethiyindale
Preethisal pattiruve
Pavithaatmadindale
Nannau krupeya hondide
Paripoorna shaandiye
Divya vaadanandave
Swaashvatha preethiyalle
Naanu athanavane
Divya preethiyalliye
Aathanu nannaathane
Ee bhooparalogadalliye
Susoundarya noduve
Kristhaninda nanage
Hosa drushti sikkuthe
Hakki hoogalalliyu
Divya preethi kaanuve
Nanageega gothuntu
Naanu aathanavane
Entha sreshta sathyave
Aathanu nannaathane

Eega shaanthi sikkithu
Deva hastha dindale
Kashtavella hoyithu
Deva nanna tandheye
Aathanu nanaashraya
Nanna aathmadaathane
Aathanalli iruve
Nanu aathanavane
Nanage gothagithe
Aathanu nannaathane

Enthendu nannaathanu
Nannannu kaybidanu
Enta samadanave
Kristaninda sikkithu
Bhoolokavu hodaru
Suprakaasha hodaru
Devariruvaakale
Naanu aathanavane
Sarwa kaala haaduve
Aathanu nannaathane`
  },
  {
    number: 313,
    title: 'Vishwaasada rekhegade',
    englishTitle: '',
    lyrics: `Vishwaasada rekhegade
Nanage idhare
Na haari swargadalliye
Bhaktara noduve

Ha omme ihadalliye
Santaapa paattaru
Swapaapadha virodhiye
Horaaduthidharu
Vijayu ellindale
Nimage sikkithu
Ee prashna keli nanage
Eeyuthara bandu

Shredeva kumariyu
Aa krujemeleyu
Swapraana kottu nammannu
Samrakshisidanu

Kristhesu hoda maargadol
Himbaalisidevu
Ivaaga krista paapadol
Vishraandi sikkithu

Sushreshta Yesu karthanu
Aa maargavaadanu
Anega deva bhaktharu
Ee Saakshi kottaru`
  },
  {
    number: 314,
    title: 'Kartha ninna preethi apaaravagathu',
    englishTitle: '',
    lyrics: `Kartha ninna preethi apaaravagathu
Ninna ninappu maadi
Na harshisuvenu
Aadagyu nanna kartha
Nanna manadalli
Makuvina nirbala
Nanage kaanuthe

Aadagyu ninna preethi
Vyathyasavaagalu
Prakashamathu shaanti
Nanage kottadu
Ninna saanidhyadalli
Hechaagi iddare
Naanella jeevanadalli
Ninnathma thoruve

O sooryananthe neenu
Preethisuvaathanu
Modagalu baralu
Ninnannu nodanu
Meghavu hodamele
Ninna prakaashave
Athi soundaryadalli
Nanage kaanuthe

O kartha nanna aathma
Kaapaduthairu
Ninna divya chithava
Nanage bodisu
Ninna krupeyennella
Nanage thorisu
Ninnalli yesu kartha
Nireekshisuvenu`
  },
  {
    number: 315,
    title: 'Bhoolokadalli dhusthithiya',
    englishTitle: '',
    lyrics: `Bhoolokadalli dhusthithiya
Naaneega noduve
Ee koratheya moreya
Naanega keluve
Sreeyeshu ninna sabheya
Eevaaga ebhissu
Ninnathmaninda nammanu
Sanjeeva padisu

Anekaru akjanadim
Vigraha bhaktharu
Anekaru akjanadim
Samthripthi padaru
Shreeyesu krupayindale
Ee koratheyannu
Thilukolluvadakke
Nin sabhe nadeysu

Bhoolokadalli egalu
Vigjanahechide
Nin naama sarva lokakku
Saral paduthathe
Shreeyesu ninna vaakyava
Ella reethiyolu
Na dharyadinda tilisa
Sahaayisanagu

Nin nyaya kaala ghandeyu
Na heluthiruve
Nin krooravada krujeya
Njapaka maaduve
Shreeyeshu vaartha saralu
Ninna sabhayannu
Ebhissuthiruvaagalu
Nannannu ebhissu`
  },
  {
    number: 316,
    title: 'Nanna rakshaka yesuvu',
    englishTitle: '',
    lyrics: `Nanna rakshaka yesuvu
Ninna sresta preethiyu
Edaralli enddendu
Naa harshisuvenu
Swargada marghadalli
Naa haduvavanu
Paapiyada nagagi
Krisstesu sathanu

Golgotha kristesu
Mullina keereeta
Ha enda savanna
Kristesu hondida
Ha enda divya preethi
Nannalli kandenu
Paapiyaada nanagaagi
Kristeshu sathanu

Kristeshuvike strotra
Svuyejja maaditha
Nanna papa shikshey
Karthanu taalida
Krrojeya mele yesu
Teerithu andanu
Paapiyaada nanagaagi
Kristeshu sathanu

Entu Swargadalli
Na karthanondige
Deva bhaktha kooda
Stotrava maaduve
Na haaduthiruvalli
Nanna gaanavidu
Paapiyaada nanagaagi
Kristeshu sathanu`
  },
  {
    number: 317,
    title: 'Praaniya rakthavu',
    englishTitle: '',
    lyrics: `Praaniya rakthavu
Paapiyennendigu
Avvana paapadindalu
Vimukthi maadadu

O Yesu karthane
Suyenkjave neene
Nangaagi krujemeleye
Swarakta chellide

Viswaasadindale
Nin tale meleye
Kayittu kondu ninage
Arikke maduve

Kalvaari krujeye
Ninappu maaduve
Paapatha baara yesuve
Neenalli thaalide

Ninna nambi naane
Santhosha paduve
Devara kurimarike
Stotrava haaduve`
  },
  {
    number: 318,
    title: 'Kristana shaashwatha preethiyu',
    englishTitle: '',
    lyrics: `Kristana shaashwatha preethiyu
Aathana chellida rakthavu
Aaathana rakshana maargavu
Avugala bake haaduve

Kadeyke swargadol
Naavella koodibaruvevu
Kristake endiku
Naavu stothra haaduvevu

Kristanu thanna rakthadinda
Shudha maargava maditha
Aatha maha yakjadinda
Nithya jeevavu sikkuthade

Kristhana preethiyu eegale
Namage aanada koduthe
Kristhana koode swargadalle
Enda santhoshavaauthathe`
  },
  {
    number: 319,
    title: 'Mugamughiyaagi naanu',
    englishTitle: '',
    lyrics: `Mugamughiyaagi naanu
Rakshakana noduve
Nanagaagi satha Yesu
Harshadinda kaanuve

Aaga mugamughiyagi
Yesuvanne noduve
Nanna gouravulla swami
Kadayalli kaanuve

Eega yesubvina mugha
Mobbagi na noduve
Ondu dyanavaada dina
Spashtavaagi kaanuve

Yesu swami ella kashta
Poornavaagi neeguva
Dongu maargavannella
Nettavaagi maduva

Mugamugiyaagi nodi
Enthananda honduve
Nanna preeethiyulla swami
Karthanada yesuve`
  },
  {
    number: 320,
    title: 'Kristana kruje hatra',
    englishTitle: '',
    lyrics: `Kristana kruje hatra
Na nindu kolluve
Dikkillada pravaasike
Visraanthi staanave
Adaviyalli maneyku
Maargadol aashraya
Kadu bisilinindalu
Besaradindalu

O sundara aashraya
O divya sthaanave
Deva preethineedigala
Baddeya sthaanave
Yaakobina kanasinol
Noditha haageye
Nanage kristhana kruje
Swargakke maargave

Aa kruje aachekade
Ha enda nottave
Paathalada kathaleya
Naanalli noduve
Aadaagyu krujayelliye
Aashraya sikkithu
Krujisalpetta karthanim
Rakshaneyaayithu

Aa Yesu kruje mele
Engaagi swaprana
Kotta kristana roopava
Kannare kaanuve
Nanna hrudayadindale
Araykamaduve
Aathana shreshta preethiye
Nanna ayogyathe

Krujissalpatta kristha
Nannaashraya neenu
Ninna krujeya moolakka
Paapakke sathanu
Lokatha stuthi vyardave
Chindayu bedave
Ninna silubeyalliye
Hechalapaduve`
  },
  {
    number: 321,
    title: 'Kristana haage mathyaariruvaru',
    englishTitle: '',
    lyrics: `Kristana haage mathyaariruvaru
Yaarilla yaarilla
Mathyaaru swasthate koduvaru
Yaarilla yaarilla

Kashtatilukonda Yesu
Nammanella nadisuvannu
Aathana haage mathyaariruvaru
Yaarilla yaarilla

Mathyaru indaha shreshta mitra
Yaarilla yaarilla
Aadagyu indaha swastika kartha
Yaarilla yaarilla

Mathyaaru hage rakshisuvaru
Yaarilla yaarilla
Nammanu endigu kaayuvaru
Yaarilla yaarilla

Mathyaru hage preethisuvaru
Yaarilla yaarilla
Mathyaaru mokshakoduvaru
Yaarilla yaarilla`
  },
  {
    number: 322,
    title: 'O kartha nannanu',
    englishTitle: '',
    lyrics: `O kartha nannanu
Sampoorna bandisu
Gadgava bida prerisu
Utsaahapadisu
Ee jeeva kathalol
Mulguthalidhene
Kaychaachi nanna appikko
Chaytanya honduve

Yese udharaka
Na bada paapiyu
Samardhyvenu illatha
Chanchala kristhanu
Nisthulya kristhane
Nannannu jayisi
Shareera aathma praana
Swaatheena madikko

Na balaheenannu
Ayogya daasanu
Aaramba preethijalava
Mathomme urisu
Lokava thyajisa
Nannindalakadhu
Ninnathma shakthiyindale
Vijaya paalisu

Nanniche hogali
Nin chitha aalali
Prapancha vayyarava
Naaneega bitten
Garvishtanaagathe
Sarwa prathishtissi
Nin dividethegoraki
Ujjeva hondithe`
  },
  {
    number: 323,
    title: 'Yesuvina kuriyu',
    englishTitle: '',
    lyrics: `Yesuvina kuriyu
Naanu chintepadenu
Nange nithyakke santhosha
Preethiyinda olle poshane
Kottu kaayuva Yesuvu
Nanna naama ballanu

Kolu hidithannannu
Shaanthiyannu kaayalu
Sughakshemadallidene
Olle mevu melluthene
Dahavage kurube
Thorisonu bhugeya

Sughiyatha kurige
Hruthsanthoshavirade
Ee sukaladanthyadalli
Aatha swantha hegalalli
Manegennanu oyyallu
Sugapoorthi ahudhu`
  },
  {
    number: 324,
    title: 'Yesu parama kartha priya rakshaka',
    englishTitle: '',
    lyrics: `Yesu parama kartha priya rakshaka
Nambithavane bhaktha bhaagya hondida
Premadalli muluki nodali
Mounagolluthalli dhanyanaagali

Stotra stotra kartha haaduthiruvanu
Neenu maatra yogya
Stotra hondalu
Stotra stotra kartha
Stuthisuthiruvenu
Nanu ninna bhaktha
Enta harshavu

Ninna paapaseve nithya maaduve
Bedavenage bere
Thruptiyaakithe
Sthothrayaknjadandu
Arpisiruvenu
Ninna ghanave ondu
Enna guriyathu`
  },
  {
    number: 325,
    title: 'Ninna aayusalpave',
    englishTitle: '',
    lyrics: `Ninna aayusalpave
Elayu uthiruvantheye
Sivudu kattuvandeye theeruthe
Muiva dinagalallirihudu
Marana hiditha hidivudu
Neene sidhanaagiru egale

Egale egale
Yesu ninna kareya samaya egale
Papadalle hodare krupeya baagil adachuthe
Koneyke ninage
Narakave naashave

Chelavu pushpa onaguthe
Youvanadinda adakuthe
Ninage samaya konchave eruthate
Karayuthane devare
Halaye beda paapiye
Dayva shikshe tappathe
Baruthate

Samaya haari hoguthe
Marana theerppu barutahe
Yesu hastha galige serireegale
Tilithugo visheshave
Thyajisi beeduvaadhare
Ninna aathma agnike
Nithyakke

Gamaniseeka echara
Nambikkollu kristana
Aaga Swargadalliya santhasa
Irullininda belakike
Sedayuvaatha kristhane
Balike neenu egale
Horattuba

Horattuba! Horattuba!
Nale beda inde nee horattuba
Anthyakaala baruvadu
Matte samaya dorakkadu
Nithya golutheeradhu
Horattuba!`
  },
  {
    number: 326,
    title: 'Danitha bhaktarige amoolya',
    englishTitle: '',
    lyrics: `Danitha bhaktarige amoolya
Devara vaagdaanavu
Kotta loka yatrayalli
Nadisuthene ninnannu

Nadisuthene Nadisuthene
Nadisuthene katakshisi
Lokadinda divakamarga
Nadisuthene katakshisi

Shodhanayalli soluvalli
Mitrarella tyajisalu
Maadu ee vaagdana jyapti
Nadisuthene ninnannu

Ninna gooda ashe nashta
Dalli samaadhi giliyalu
Hidukko ee vaagdhaana bhadra
Nadisuthene ninnannu

Jeevithakke modamuchi
Marana vele bandaru
Nambigastha maathu kotta
Nadisuthene ninnannu`
  },
  {
    number: 327,
    title: 'Lokhadi neenathi shreshtanu',
    englishTitle: '',
    lyrics: `Lokhadi neenathi shreshtanu
Nin kanyageshtu moolyanu
Sampoorna neene obbanu
Athbhutha silube manushyanu

Aa shilube manushyanu
Nangaagi sathannu
En hrudaya gethanu
Aa divya manushyanu

Papike jeevu shaanthiyu
Paapavimukthi kottanu
Swaraktha chelli bittanu
Karune shilube manushyanu

Suvaragalannu ithanu
Parama preethi suridhanu
Nammanu shudhigaydhanu
Dayaya shilube purushanu

Nanage ninadaranayu
Kanuveromme ninnannu
Alliye mahime kendravu
Aashcharya shilube vyakthiyu`
  },
  {
    number: 328,
    title: 'Than preiyarannathanu',
    englishTitle: '',
    lyrics: `Than preiyarannathanu
Nadisuvenu
Nammathbutha rakshakanu
O ellinda verobba snehithanu
Nee kaarunya sagaranu

Ha athbhutha rakshaka
Ha athbhutha rakshaka
Preethiyindhemma kaayuvenu
Prakaashaveduru chelvanu
Mana prabhavanin stothra maduvenu

Than priyanaathanu nadisuvenu
Na margadi dhanidallu
Ha divyaashirvadavu surivadu
Munjaneya munjinanthe

Than priyanaathanu nadisuvenu
Prayasa sangashtadalliyu
Than premade neralallirisonu
Allimege vishranthiyu

Than priyanaathanu nadisuvenu
Ha prayaana theerdallu
Aa paadakke beeluvadanandavu
Kondaadutha iruvevu`
  },
  {
    number: 329,
    title: 'Sampoorna samaadhanavannu',
    englishTitle: '',
    lyrics: `Sampoorna samaadhanavannu
Kristeshu nange kottanu
Aa ugra daiva kopadinda
Nannannu thappisidanu

Kristeshu rakshisidanu
Paapathmanada nammannu
En paapavfella neekithu
Ninake stothra maaduvenu

Ellinnu nanage samadana
Ee lokavendu kodethu
Himse ikkattu ninde kooda
Bandaru bhayapadanu

Nannalliruva shanthiyannu
Nimake naanu koduvenu
Lokavu koduva reethiyalla
Entheli dharya kottanu

Nannannu nambuvaathanike
Koduve nithya jeevava
Avaru naashavaakuvathilla
Heekendu kotta dharyava

Naaneega dhayva makuvaagi
Ee lokadhalli iruvenu
Kristhana prathyakshayalli
Aathana mughavanoduvenu

Allendu nange kannerilla
Lokatha kashta nodenu
Karthana mughava nodutha
Stothra ententhu haduvenu

Kristhana hegge jadinalli
Mundakke sakuthiruvenu
Aathanannu vishwaasadinda
Nireekshisuthalirvenu

Kristhesu bega baruvenu
Swargakke nannu oyyanu
Enta soubhagya irvathu
Santhoshavendu teerathu`
  },
  {
    number: 330,
    title: 'Kurubanadhu hattiyalli',
    englishTitle: '',
    lyrics: `Kurubanadhu hattiyalli
Nooru kurikal idhavu
Preethiyinda avakalannu
Saakki salahuthiddanu

Kurubannanna priya Yesu
Korathe endu kanenu
Swarava keli hinde hogi
Orathe kandu kondenu

Kaadinalli meyalondu
Odi thappi hoyithu
Padutha chinthe kurubanodane
Hudukkaledhu horattanu

Yeshtu thakku dinne mullu
Kashtappettu nondanu
Sikkidaaka hegala mele
Haakki maneke tandanu

Banni nanage harsha kaledu
Hoda kuriyu sikkithu
Innithara nimthu karedu
Ella harusha gondaru

Kuruba Yesu papikalannu
Hudukkalikke bandanu
Kandu kondu halavarannu
Nambidavare kurikalu`
  },
  {
    number: 331,
    title: 'Gana maana Yesuvike',
    englishTitle: '',
    lyrics: `Gana maana Yesuvike
Stuthi namma karthake
Poorna manadinda hada
Koodi banni kristare

Jagathrakshakannu ee hothu
Karayuthanne nammannu
Shishu bavadinda bandu
Aashirvada hondiri

Bhaalyadalliye smarisu
Ninna shrishti kartana
Aathmada udharakkaaki
Nambu raksha karthana

Swami preethigandyavilla
Yaake ninge bhayavu
Thaayupreethiyinda moola
Ninna preethi maduvenu

Thanna makkalannu aatha
Endu maralaaranu
Bhadravaagi kaayuva bara
Nanna preeya swaamithu`
  },
  {
    number: 332,
    title: 'Ningaagi kottenu',
    englishTitle: '',
    lyrics: `Ningaagi kottenu
En jeeva makane
Nin paapakkagiye
Rakthava surithe
En pranavanne kottanu
Neenennu koduthi

Nin gaagi bitten
Unnatha lokhava
Ningaagi bandenu
Kanishta logakke
Na swargavanne bittanu
Neenenu biduthi

Ningaagi pattenu
Aa ghora thapavam
Ningaagi hondidhe
Apaara himseya
Ningaagi kashtapattenu
Neenenu paduthi

Ningaagi thandenu
Rakshanapaathreya
Ningaagi thandhenu
Thandeya shrameya
Ningaagi jeeva tandenu
Neenennu tharuthi`
  },
  {
    number: 333,
    title: 'Nithya jeeva jeeva kristanalliye',
    englishTitle: '',
    lyrics: `Nithya jeeva jeeva kristanalliye
Nambithaka hondithe
Divya ratha chelli
Krujeya meleye
Nanna shapa theeride
Apaaravaada krupeya
Naanu haadi paduve
Nithya jeeva jeeva kristanalliye
Nambithaka hondithe

Nithya jeeva untu nanage
Kristeshuvinalliye
Nambu hondu neenu
Thadamaadathe
Nyaayatheerpu thapputhe
Apaara ee dheva krupeyu
Uchithartha sikkide
Nithyadeva thane
Namma thandeyu
Stuthi stotra aathange

Avishwaasa innu ninge bedavu
Mosa hoguvi nishchaya
Deva thane gayda divya kaaryavu
Sidhavaagithe nishchaya
O nambu ee dotta rakshane
Inde olle samaya
Papa shapakkella
Ande nashane
Hondu devashraya

Kristha maarga yeshto bikkattadaru
Munde saguva dairyadim
Kristanirva enta bhayaviddaru
Jeevadhandyakku sthayryadim
Kireetakoduvanalliye
Nambigastha makkallige
Hallelujah yeshu karthage
Nithya stothra haduve`
  },
  {
    number: 334,
    title: 'Kristhanalli nyaya pramaana',
    englishTitle: '',
    lyrics: `Kristhanalli nyaya pramaana
Athakke bandu avasaana
Yeshu bandaka vishesha varthe
Ee shubha varthe rakshenaye

O Yesu nee matra udharaka
Nin horthu bere marghavilla
Krujeya mele nee baliyaadhi
Sthotrakke nee yogya Kristeshuve

Hrudeya shaanti kristeshu kotta
Nambithe naanu kruperyinda
Kristhana neethi nannathma muttu
Naan deva maku kristaninda`
  },
  {
    number: 335,
    title: 'Ee loka sagradalliye',
    englishTitle: '',
    lyrics: `Ee loka sagradalliye
En priya karthane
Hrudayada ennave
Nin raktha langare

Sarwaswa ninge idharu
Sikkidha truptiyu
Kristanalli neeyidhare
Sampthrupti iruvadhu

Sampathu roopa youvvana
Athyalpa kaalakke
Aliyadanda bhavana
Nimgeeva nithyakke

Thai thande bandu mithraru
Kaibittu hodaru
Endendu nee bidanu
Swargeeya thandeyu`
  },
  {
    number: 336,
    title: 'Devarigu nararigu',
    englishTitle: '',
    lyrics: `Devarigu nararigu
Eka madhyavarthiyu
Bhoomiyol prathyakshanaada
Sharstrava pooraisidha

Krupayindale rakshane
Nambuvavarellarike
Kristanalliye ee maarga
Ethe deva nirnaya

Papa bharadinda nondu
Yakke chinte ninage
Aatha dheerga shanthanendu
Karayuthanne ninnannu

Aathma shaanthi samadhana
Sarwa kristhanalliye
Uchithaartha deva daana
Nambihondu egale`
  },
  {
    number: 337,
    title: 'Shastrava oodhuthiru',
    englishTitle: '',
    lyrics: `Shastrava oodhuthiru
Ee divya pustaka
Gamanavittu oodhu
Deva vaakyava
Devare preethiyinda
Namake needitha
Paavana grandadinda
Njaana honduva

Devara chithavenu
Endu grahisalu
Devara vaakyavannu
Ooduthayiru
Devara vaakyavoodu
Munchaneyalliyu
Sanche madhyanadallu
Dhyana maadiru

Deva prakashadalle
Nadethu hogalu
Aathana vakyavanne
Ooduthayiru
Papava jayisalu
Devara vaakyava
Hrudayadalli ittu
Dyaanamaaduva`
  },
  {
    number: 338,
    title: 'Nin aaknja anusarissi',
    englishTitle: '',
    lyrics: `Nin aaknja anusarissi
O yeshu karthane
Na namravulla manadhi
Ninna nenasuve

Nee kotta ninna dehavu
Nannatma haravu
Nee surisida rakthavu
Nannatma paanavu

Gathsameneya thootadhi
Nee patta shramava
Marayalaradhe ninni
Dhukka ninasuva

Ninna shilube kadeke
Na drushti haakkuve
Yakjatha kuri aathanne
Ninna nenasuve

Ninna preethi dhukkagala
Ninappu maaduve
En jeeva maanavellam
Ninna smarisuve

Puna neenu baruvi
Aavaaka karthane
Ninna divya mahmadhi
Ninnannu noduve`
  },
  {
    number: 339,
    title: 'Swargalokadhinda endu',
    englishTitle: '',
    lyrics: `Swargalokadhinda endu
Suprakasha kaanuthe
Aadaru bhoolokhakkindu
Krystara deepakale

Suprakaashava kodona
Kristana suvartheya
Sandeshava thelisuvona
Rakshaneya vaakyava

Paapada samudradol
Jana munuguvaru
Suvartha kiranakalu
Avara muttuvavu

Papadha samudradinda
Janake apaayavu
Suvartha prakaashadinda
Janake sahaayavu`
  },
  {
    number: 340,
    title: 'Devarinda rakshaney',
    englishTitle: '',
    lyrics: `Devarinda rakshaney
Namake baruthathe
Rakshaneya moolavu
Jeevavulla devaru

Kristanalli rakshaney
Namage sikkuthate
Yesu kristanobbanu
Rakshaneya maargavu

Krupeyinda rakshaney
Namma paaluvaakuthe
Sathkriyakalinda
Hondalu assaadhyave

Naavu kristanalliye
Nambikkolluvaakale
Rakshanaanubhavave
Namage aakuthathe

Divyavaatha rakshaney
Devakrupadaanave
Ee vishesha daanakke
Lakshya kodirellare

Nithyavada rakshaney
Sarva kaala thaluthe
Nithya jeeva endigu
Tappihogalaradu

Rakshaneya honditha
Yavanobba manava
Olle kaarykalinda
Devarannu mechuva

Varthamaana bhavishya
Bhoothakaladol saha
Divyavaadha rakshaney
Kaary saadhisuthathe

Rakshaneya honduva
Yogyavaada samaya
Naleyalla egale
Endu veda heluthe

Rakshaneya hondatha
Manavana athayanda
Sthithi bhayangarave
Rakshakodireegale`
  },
  {
    number: 341,
    title: 'Kristeshu nanna rakshisidanu',
    englishTitle: '',
    lyrics: `1. Past Tense
Kristeshu nanna rakshisidanu
Nannanu rakshisalu sathanu
Tanna rakthadindale
Paapashikshayindale
Kristeshu nanna rakshisidanu

Kristeshu nanna rakshisidanu
Nannanu rakshisalu sathanu
Nanna savinindale
aathmarakshaneyannu
Nangaagi Yesu sadisidannu

Kristeshu nanna rakshisidannu
Nannanu rakshisalu sathanu
Nanu nambithagale
Nanu neethivandane emba nirnaya
Nanagagithu

2. Present Tense
Kristeshu nanna rakshisuthane
Nannanu rakshisutha idhane
Nannannu jeevadandale
Paapa shakthiyindale
Kristeshu nanna rakshisuthane

Kristeshu nanna rakshisuthane
Nannanu rakshisalu edhanu
Edhu banda karthanu
Prana rakshaneyannu
Nanage daya paalisuthane

Kristeshu nanna rakshisuthane
Nannanu rakshisutha idhane
Nanu nambuvaagalu
Shudhanaaki baalalu
Kristeshu nanna Saagisuthane

3. Future Tense
Kristeshu nanna rakshisuvanu
Nannanu rakshisalu baruvanu
Tanna saamarthyadinda
Paapasaanidhyadinda
Kristeshu nanna rakshisuvanu

Kristeshu nanna rakshisuvanu
Nannanu rakshisalu baruvanu
Mukhamugiyaaki aa
Divya roopanoduva
Nanage deha rakshanagvathu

Kristeshu nanna rakshisuvanu
Nannanu rakshisalu baruvanu
Yesu mahimayindale
Prathyakshanaaguvaagale
Nannannu thanna hage maduvenu`
  },
  {
    number: 342,
    title: 'Edu spastavada mathu',
    englishTitle: '',
    lyrics: `Edu spastavada mathu
Nanu brastanadenu
Bahu kastadalli sikkikondenu
Sarvokrasta margha bittu
Naa dustanaghiye
Swantha estadanthe baluthidenu

Aagha jesta puthranada
Namma sresta guruvu
Thanna estadanthe pranakottenu
Nanna kastavella bidisi
duskarma thegedu
Neenu shishyanagi balu anthanu

Nanu bakthiheenanagi
Dustavyakyhiyagi baluthudenu
Bahu yukthiyulla vairige
Sikkikondenu
Deivokthiyannu nindisidenu

Aagha sakthiyulla swami
Sadbakthi yendaadu
Bahu vyakthavagi thorisidenu
Thanna rakthadinda nanna
durneethi tholeda
Nija mukthiyalli serisidanu`
  },
  {
    number: 343,
    title: 'Enna thalla beda kristha',
    englishTitle: '',
    lyrics: `Enna thalla beda kristha
Moreyaalissu
Pararannu karedaaka
Kare nannannu

Kartha kartha
Moreyalissu
Pararannu karedaaka
Kare nannannu

Ninna krupaasanavannu
Seri kleshakke
Olagaagi addabiddu
Krupey beduve

Ninna preethiyondaralli
Itti nambikke
Khema samaadaana shaanthi
Kodu nanage

Nanna sugavella bukke
Aage dikkatha
Eeha paradalli neene
Nannu daraka`
  },
  {
    number: 344,
    title: 'Sthoothravannuthamma',
    englishTitle: '',
    lyrics: `Sthoothravannuthamma
Devarigarpisuva banni
Unnathadalli aa karthake
Mahime anni
Harshadi doothara sangadalli
Stothrasugandavathanni

Bhoodivalogakalathana
Swargeeya raajya
Bhooparapalana sangada
Yavanu vyaajya maaduvenu
Aathanna mathigundu
Marthyaragondala tyaajya

Kreyakke kristhanu konda
Janaangave naane
Oppani raajana chithakke
Dasara seve
Odeyanu prasanna nagalindu
Sugadhi jeevisutheve`
  },
  {
    number: 345,
    title: 'Shubha varthamaana sarvarike',
    englishTitle: '',
    lyrics: `Shubha varthamaana sarvarike
Tilisuvadikke nanagithe
Kristanalli shreshta bhaagya sikkithe
Jeeva vaakyadindale

Yeshto aananda
Aha yeshto aananda
Lokavendutekayada aananda
Dotta samadaana nanagaayittu
Devarike stothra

Vaakyadalli naanu drida nambithe
Nambi papa parihaara hondithe
Nithya jeeva nanagiga sikkithe
Innu bhayavenithe

Shubavaarthamana sarvarike
Tilisuvadikke nanagithe
Jaathanaatha rakshaka kristhayesuve
Satha nanagaagiye

Yesu edhu bandu
Jeeva thandenu
Nambidhavarike mukthi kottenu
Hogi logakella sarirendanu
Nambi shuba vartheyu`
  },
  {
    number: 346,
    title: 'Oh enda athbuda vada dina',
    englishTitle: '',
    lyrics: `1. Oh enda athbuda vada dina
Nanebdigu mareyenu
Papandhagharadhol alede na
Rakshakana kandenu
Komala karuneyullayesu
En korathe negeda
Kathale hoyithu jothiya modithu
Nanega dhanyanade

Swarghadanandha
Enathma thumbithu
Silube nadha en swasthagaydanu
En papa tholeda
Erula dinake thiruvida
Swarghadanandha
Enathma thumbithu

2. Athana nyunatha janmadinda
Devaputranadenu
Neethi nirnayava hondidenu
Bhagyavandanadenu
Papaathmanagi na bandagale
Asirvada sikithu
Krupeya mulave-rakshane hondede
Sunama kondaduve

3. Anandha nereshe enagide
Kalavu thiralage
Swarghada bhavya bidaradhalli
Nityavagi eruve
Silube nanage asrayave
Nambikegadarave
Nitya aswaryava divyasirvadava
Kartha evanenage`
  },
  {
    number: 347,
    title: 'Eevareygemma devaru',
    englishTitle: '',
    lyrics: `Eevareygemma devaru
Sahaya maadithane
Eevareygiralu
Nammannu kaathidaane
Eevareyge yaavagalu
Santhosha daya paalisi
Udhara daya maadithane

Samsthuthi ninge karthane
Sangeethi namaskaara
Nishchela preethiyindale
Svaprejeya vichaara
Nee gaydadannu ninassi
Kondaadutheve harshadi
Ninnella upakaara

Ennadaru swajanakke
Aashraya staanavaaku
Sarvavu pradikalige
Swathaha sameepavaagu
Krithesu shrama mooladim
Samastha kashtadolagim
Nammannu paarumaadu`
  },
  {
    number: 348,
    title: 'O belakke kaarunnya nidhiye',
    englishTitle: '',
    lyrics: `O belakke kaarunnya nidhiye
Mun nadissu
Kathale aayithu
Mane dhoorave
Mun nadissu
Mundadiyide balaheenannu
Ondhontu hejenadisennannu

Hindella sweche hinda saagithe
Mun nadissu
Enthu ninnannu bedalillavy
Mun nadissu
Hindena sokkininda nadethe
Anthina ella papa mannissai

Hindenna kaythu
Ninna shakthiye kaavalaadhi
Mundenna kaavu dendu gothithe
Pravaasadhi
Unnatha seri belakkinalle
Chennika rondhigaanu baaluve`
  },
  {
    number: 349,
    title: 'Aradisuvevu kartha yesuva',
    englishTitle: '',
    lyrics: `Aradisuvevu kartha yesuva
Athma sathyadinda priya kristhana
Paramathandeyannu aradisuvevu

1. Papa kshame needida atha namage
Bidisida rakthada krayadindale
Jayave jayave sada athage.

2. Kannan drishti tereda yeshuvininda
Kandu kondevu athmadastivarava
Athbuda athbuda sada namage

3. Swathandrava hondalu bhadyaradevu
Adhikara hondida rajyakagiye
Hosanna hosanna jayadevage.

4. Prapanchava jayisalu sakthi needida
Silubeyol margadol nadisidanu
Sthuthisu sthuthisu kartha yeshuvan`
  },
  {
    number: 350,
    title: 'Nadesenna Yesu kartha',
    englishTitle: '',
    lyrics: `Nadesenna Yesu kartha
Loka kaarunnya yaathrayol
Neene shakthanaana shaktha
Daattiey swahasthadol
Jeevadhenna tinnissanna
Poorna thruptigolissu
Jeevajalanidhiyinda
Neegu nanna thrusheya

Agnimeghasthampadinda
Thoru nanna maargava
Nee samartha raksha kartha
Neene daalu gediyavu

Yordhan teeradhol nanna
Kayyoledhi salahu
Rakshekaithu praanavanna
Kaanan desa serissu
Ninagalli nithyadalli
Stoothragaana maduvenu`
  },
];
