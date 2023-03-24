import { SharedValue } from "react-native-reanimated";
import { CardProps } from "../CardList/types";

export interface PropsMovableCard {
    data: CardProps;
    cardsPosition: SharedValue<number[]>;
    scrollY:  SharedValue<number>;
    cardsCounter: number;
}