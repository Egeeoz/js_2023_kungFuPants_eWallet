export interface CardProps {
  cardNumber: string;
  cardHolderName: string;
  validThru: string;
  vendor: string;
  bgColor: string;
  icon: string;
  text: string;
  active?: boolean;
}
