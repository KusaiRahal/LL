interface Source {
  name: string;
  rating: number;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  sources: Source[];
}

export const articles: Article[] = [
  {
    id: 'tripoli-turmoil-2025',
    title: 'Tripoli in Turmoil: Assassination of Militia Leader Sparks Deadly Clashes',
    content: 'On May 12, 2025, Abdel Ghani al-Kikli, known as "Gheniwa," commander of the Stability Support Apparatus (SSA), was assassinated during a meeting with the 444th Brigade in Tripoli. His death ignited intense clashes between rival militias, resulting in at least eight civilian deaths and numerous injuries. The fighting, some of the worst in years, led to a ceasefire on May 14, but tensions remain high as Prime Minister Abdulhamid al-Dbeibah vows to dismantle militias and restore state authority.',
    date: '2025-05-14',
    sources: [
      { name: 'Wikipedia', rating: 10 },
      { name: 'The Guardian', rating: 10 },
      { name: 'Wikipedia', rating: 10 },
      { name: 'Al Jazeera', rating: 9 },
      { name: 'Reuters', rating: 9 },
      { name: 'Reuters', rating: 9 },
      { name: 'The Times', rating: 6 },
      { name: 'Reuters', rating: 6 },
      { name: 'Reuters', rating: 6 }
    ]
  },
  {
    id: 'public-outcry-2025',
    title: 'Public Outcry and Ministerial Resignations Shake Dbeibah\'s Government',
    content: 'Following the recent violence in Tripoli, widespread protests erupted, demanding Prime Minister Dbeibah\'s resignation over his failure to ensure security and progress towards elections. Demonstrations intensified after a police officer was killed during an attempted storming of the prime minister\'s office. In response, three ministers—Economy, Local Government, and Housing—resigned in solidarity with the protesters, highlighting deepening political instability.',
    date: '2025-05-15',
    sources: [
      { name: 'Wikipedia', rating: 3 },
      { name: 'Reuters', rating: 3 },
      { name: 'Al Jazeera', rating: 3 }
    ]
  },
  {
    id: 'us-embassy-palestine-2025',
    title: 'U.S. Embassy Denies Reports of Palestinian Relocation Plan to Libya',
    content: 'The U.S. embassy in Tripoli has refuted claims from an NBC News report suggesting that the Trump administration planned to relocate up to one million Palestinians from Gaza to Libya. The embassy labeled the report as untrue, and the Libyan Government of National Unity has not commented. The alleged plan faced widespread condemnation, being likened to ethnic cleansing by Palestinian groups.',
    date: '2025-05-13',
    sources: [
      { name: 'RMN Networks', rating: 6 },
      { name: 'Reuters', rating: 6 },
      { name: 'The Times of Israel', rating: 6 }
    ]
  },
  {
    id: 'corruption-ranking-2024',
    title: 'Libya\'s Corruption Crisis: Transparency International Ranks Libya 173rd',
    content: 'Transparency International\'s 2024 Corruption Perceptions Index ranked Libya 173rd out of 180 countries, underscoring pervasive corruption issues. Investigations have revealed extensive corruption within state institutions, including the misappropriation of funds in the health sector and the National Oil Corporation. These systemic issues continue to erode public trust and hinder Libya\'s path to stability.',
    date: '2024-12-15',
    sources: [
      { name: 'Wikipedia', rating: 0 }
    ]
  },
  {
    id: 'derna-minifootball-2025',
    title: 'Derna to Host 2025 African Minifootball Cup Amid Reconstruction Efforts',
    content: 'The city of Derna is set to host the 2025 African Minifootball Cup from July 14 to 25, marking a significant step in its recovery following devastating floods in 2023. The tournament will feature 16 teams and is seen as an opportunity to showcase Derna\'s resilience and progress in rebuilding infrastructure and community spirit.',
    date: '2025-05-10',
    sources: [
      { name: 'Scientific American', rating: 2 },
      { name: 'Wikipedia', rating: 2 },
      { name: 'Kachina Dawn Blog - Kachina Dawn', rating: 2 }
    ]
  }
]; 