export interface Block {
    description?: String;
    link?: String;
    text?: String;
    title?: String;
  }

  export interface MemberCard {
    first: First;
    second: Second;
    third: Third;
  }

  export interface ImageUrl {
    w200?: String;
    w400?: String;
    w1080?: String;
    w1920?: String;
    w2560?: String;
  }
  
  export interface First {
    imageUrl?: ImageUrl;
    block?: Block;
  }

  export interface Second {
    imageUrl?: ImageUrl;
    block?: Block;
  }
  export interface Third {
    imageUrl?: ImageUrl;
    block?: Block;
  }