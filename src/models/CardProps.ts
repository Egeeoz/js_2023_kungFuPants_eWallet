export interface CardProps {
    cardNumber: string;
    cardHolderName: string;
    validThru: string;
    vendor: string;
    active?: boolean;
  }