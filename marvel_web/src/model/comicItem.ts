export interface ComicItem {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[]; // Puedes ajustar el tipo según la estructura real
    resourceURI: string;
    urls: ComicUrl[];
    series: ComicSeries;
    variants: any[]; // Puedes ajustar el tipo según la estructura real
    collections: any[]; // Puedes ajustar el tipo según la estructura real
    collectedIssues: any[]; // Puedes ajustar el tipo según la estructura real
    dates: ComicDate[];
    prices: ComicPrice[];
    thumbnail: ComicImage;
    images: ComicImage[];
    creators: ComicCreators;
    characters: ComicCharacters;
    stories: ComicStories;
    events: ComicEvents;
  }
  
  interface ComicUrl {
    type: string;
    url: string;
  }
  
  interface ComicSeries {
    resourceURI: string;
    name: string;
  }
  
  interface ComicDate {
    type: string;
    date: string;
  }
  
  interface ComicPrice {
    type: string;
    price: number;
  }
  
  interface ComicImage {
    path: string;
    extension: string;
  }
  
  interface ComicCreators {
    available: number;
    collectionURI: string;
    items: ComicCreatorItem[];
    returned: number;
  }
  
  interface ComicCreatorItem {
    resourceURI: string;
    name: string;
    role: string;
  }
  
  interface ComicCharacters {
    available: number;
    collectionURI: string;
    items: ComicCharacterItem[];
    returned: number;
  }
  
  interface ComicCharacterItem {
    resourceURI: string;
    name: string;
  }
  
  interface ComicStories {
    available: number;
    collectionURI: string;
    items: ComicStoryItem[];
    returned: number;
  }
  
  interface ComicStoryItem {
    resourceURI: string;
    name: string;
    type: string;
  }
  
  interface ComicEvents {
    available: number;
    collectionURI: string;
    items: any[]; // Puedes ajustar el tipo según la estructura real
    returned: number;
  }
  