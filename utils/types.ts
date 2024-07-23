export interface Message {
    user: string;
    text: string;
  }
  
  export interface Chat {
    user: string;
    messages: Message[];
  }
  