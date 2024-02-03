export interface StoryItem {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    type: string;
    modified: string;
    thumbnail: StoryImage | null;
    creators: StoryCreators;
    characters: StoryCharacters;
    series: StorySeries;
    comics: StoryComics;
    events: StoryEvents;
    originalIssue: StoryOriginalIssue;
  }
  
  interface StoryImage {
    path: string;
    extension: string;
  }
  
  interface StoryCreators {
    available: number;
    collectionURI: string;
    items: StoryCreatorItem[];
    returned: number;
  }
  
  interface StoryCreatorItem {
    resourceURI: string;
    name: string;
    role: string;
  }
  
  interface StoryCharacters {
    available: number;
    collectionURI: string;
    items: StoryCharacterItem[];
    returned: number;
  }
  
  interface StoryCharacterItem {
    resourceURI: string;
    name: string;
  }
  
  interface StorySeries {
    available: number;
    collectionURI: string;
    items: StorySeriesItem[];
    returned: number;
  }
  
  interface StorySeriesItem {
    resourceURI: string;
    name: string;
  }
  
  interface StoryComics {
    available: number;
    collectionURI: string;
    items: StoryComicItem[];
    returned: number;
  }
  
  interface StoryComicItem {
    resourceURI: string;
    name: string;
  }
  
  interface StoryEvents {
    available: number;
    collectionURI: string;
    items: any[]; // Puedes ajustar el tipo según la estructura real
    returned: number;
  }
  
  interface StoryOriginalIssue {
    resourceURI: string;
    name: string;
  }
  