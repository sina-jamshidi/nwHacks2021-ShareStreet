interface User {
  username: string;
  name: string;
  email: string;
  password: string;
  type: "Individual" | "Organization";
}

interface Listing {
  id: string;
  /**
   * Refers to the id of a User
   */
  submitter: string;
  item: string;
  description: string;
  quantity: number;
  unit: "Kilograms" | "Containers" | "Milliliters" | "Each";
  type: "Request" | "Offer";
  expired: boolean;
  timestamp: number;
}

interface Notification {
  id: string;
  /**
   * Refers to the id of a User
   */
  username: string;
  content: string;
  type: "matchingListing" | "messageReceived";
  read: boolean;
  notificationTimestamp: number;
}

interface Message {
    id: string;
    /**
     * Refers to the id of a User
     */
    sender: string;
    dateSent: number;
    text: string;
    read: boolean;
  }

interface Conversation {
    id: string;
    /**
     * Refers to the ids of a User
     */
    usernames: Array<string>;
    messages: Array<Message>;
  }
