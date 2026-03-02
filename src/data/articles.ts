export interface ArticleSection {
  heading?: string;
  text?: string;
  verse?: string;
  bullets?: string[];
}

export interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  tint: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    id: 1,
    category: 'Heritage',
    date: 'Doctrinal Series',
    title: 'The Brethren Movement: Returning to New Testament Christianity',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=85&auto=format&fit=crop',
    tint: '#1a2a5a',
    sections: [
      {
        heading: 'Introduction',
        text: 'We identify with the historic Brethren Movement, a Bible-centered Christian movement that emerged in the early nineteenth century with a desire to return to the simplicity and purity of New Testament Christianity. Our aim is not denominational identity, but faithfulness to the Word of God and the exaltation of the Lord Jesus Christ as Head of the Church.',
      },
      {
        text: 'We gather solely in the Name of the Lord Jesus Christ, seeking to follow the pattern of the early church as revealed in Scripture.',
      },
      {
        heading: 'The Priesthood of All Believers',
        text: 'We affirm the priesthood of all believers. Every born-again believer has direct access to God through the Lord Jesus Christ.',
        verse: '1 Peter 2:9 describes believers as a royal priesthood.',
        bullets: [
          'We do not recognize a separate clerical class.',
          'Qualified brethren participate in teaching, prayer, and worship as led by the Holy Spirit.',
          'All participation is in accordance with Scripture.',
        ],
      },
      {
        heading: 'The Church and Its Gathering',
        text: 'We believe the Church is the body of Christ, composed of all true believers. Locally, believers gather as assemblies under the headship of Christ. Our gatherings are characterized by:',
        bullets: [
          'Weekly breaking of bread',
          'Christ-centered worship',
          'Prayer and Scripture reading',
          'Sound Bible teaching',
          'Fellowship among believers',
        ],
      },
      {
        text: 'Simplicity, reverence, and biblical order guide our worship.',
      },
      {
        heading: 'Our Commitment',
        text: 'As an assembly associated with the Brethren Movement, we are committed to:',
        bullets: [
          'The supremacy of Christ',
          'The authority of Scripture',
          'The simplicity of New Testament worship',
          'The unity of believers',
          'The proclamation of the gospel',
        ],
      },
      {
        text: 'Our desire is to glorify God by gathering in the Name of the Lord Jesus Christ and maintaining faithfulness to the teaching of His Word.',
      },
    ],
  },
  {
    id: 2,
    category: 'Doctrine',
    date: 'Doctrinal Series',
    title: 'What We Believe: Scripture, Grace, Worship & The Blessed Hope',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=700&q=85&auto=format&fit=crop',
    tint: '#3b1a5a',
    sections: [
      {
        heading: 'The Authority of Holy Scripture',
        text: 'We believe that the Holy Bible, consisting of the Old and New Testaments, is verbally inspired by God, infallible in its original writings, and the final authority in all matters of faith and practice.',
        verse: '2 Timothy 3:16–17 affirms that all Scripture is given by inspiration of God and is profitable for doctrine and instruction in righteousness.',
        bullets: [
          'All teaching must be governed by Scripture alone.',
          'All worship must be governed by Scripture alone.',
          'All discipline and church order must be governed by Scripture alone.',
        ],
      },
      {
        heading: 'The Person and Work of the Lord Jesus Christ',
        text: 'We believe in the full deity and true humanity of our Lord Jesus Christ. We affirm:',
        verse: 'Acts 4:12 declares that there is no other name under heaven given among men whereby we must be saved.',
        bullets: [
          'His virgin birth',
          'His sinless life',
          'His substitutionary death',
          'His bodily resurrection',
          'His ascension into heaven',
          'His present ministry as High Priest',
          'His personal and imminent return',
        ],
      },
      {
        heading: 'Salvation by Grace Through Faith',
        text: 'We believe that salvation is by grace alone through faith alone in Christ alone.',
        verse: 'Ephesians 2:8–9 teaches that salvation is the gift of God and not of works.',
        bullets: [
          'Repentance toward God is essential for salvation.',
          'Faith in the Lord Jesus Christ is essential for salvation.',
        ],
      },
      {
        heading: "The Lord's Supper",
        text: "We observe the Lord's Supper weekly in remembrance of the Lord's death until He comes again.",
        verse: '1 Corinthians 11:23–26 teaches the institution and purpose of this ordinance.',
        bullets: [
          'Participation is for believers walking in fellowship with the Lord.',
        ],
      },
      {
        heading: 'The Blessed Hope',
        text: 'We believe in the personal and imminent return of the Lord Jesus Christ for His Church.',
        verse: '1 Thessalonians 4:16–17 speaks of the coming of the Lord and the gathering of believers to Him.',
        bullets: [
          'This blessed hope encourages holy living.',
          'It motivates faithful service.',
          'It calls us to spiritual watchfulness.',
        ],
      },
      {
        heading: 'Christian Living',
        text: 'We believe believers are called to live holy and separated lives, walking in obedience and love.',
        verse: '2 Corinthians 5:7 reminds us that we walk by faith, not by sight.',
        bullets: [
          'We are committed to proclaiming the gospel.',
          'We are committed to serving our communities for the glory of God.',
        ],
      },
    ],
  },
  {
    id: 3,
    category: 'India',
    date: 'Doctrinal Series',
    title: 'Brethren Assemblies Across India: Rooted in the Word, Faithful in Mission',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=85&auto=format&fit=crop',
    tint: '#7a2800',
    sections: [
      {
        heading: 'Brethren Assemblies in India',
        text: 'The Brethren Movement was established in India through missionary efforts in the late nineteenth and early twentieth centuries. Missionaries and indigenous evangelists labored faithfully to preach the gospel, plant assemblies, and translate biblical teaching into local languages.',
      },
      {
        heading: 'States with Brethren Assemblies',
        text: 'Today, Brethren assemblies are found across many Indian states, including:',
        bullets: [
          'Kerala',
          'Tamil Nadu',
          'Karnataka',
          'Andhra Pradesh & Telangana',
          'Maharashtra',
          'North Indian regions',
        ],
      },
      {
        heading: 'Foundational Principles',
        text: 'Indian Brethren assemblies maintain the same foundational principles:',
        bullets: [
          'The authority of Scripture',
          'Weekly breaking of bread',
          'The priesthood of all believers',
          'Simplicity in worship',
          'Evangelistic outreach and missions',
        ],
      },
      {
        heading: 'Active Ministry',
        text: 'In many parts of India, assemblies are actively involved in:',
        bullets: [
          'Gospel outreach meetings',
          'Bible conferences',
          'Youth ministries',
          'Literature distribution',
          'Church planting in rural and urban areas',
        ],
      },
      {
        heading: 'Self-Governing Assemblies',
        text: 'Indian assemblies are largely self-governing, with elders raised up from among local believers according to New Testament principles. There is no central denominational headquarters; fellowship exists through shared doctrine and mutual recognition among assemblies.',
      },
      {
        text: 'Despite cultural diversity, the unity of Indian Brethren assemblies is grounded in sound doctrine and a shared commitment to Christ.',
      },
    ],
  },
];
