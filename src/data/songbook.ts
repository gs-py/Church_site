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
];
