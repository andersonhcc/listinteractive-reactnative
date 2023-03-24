import React, { useState } from 'react';
import Animated, {
    runOnJS,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedReaction,
} from 'react-native-reanimated';
import { CardList, CARD_HEIGHT } from '../CardList';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { PropsMovableCard } from './types';
import { styles } from './styles';

const MovableCard = ({ data, cardsPosition, cardsCounter, scrollY }: PropsMovableCard) => {

    const [moving, setMoving] = useState(false);

    const top = useSharedValue(cardsPosition.value[data.id] * CARD_HEIGHT);

    const objectMove = (positions: number[], from: number, to: number) => {
        'worklet';
        const newPositions = Object.assign({}, positions);

        for (const id in newPositions) {
            if (positions[id] === from) {
                newPositions[id] = to;
            }

            if (positions[id] === to) {
                newPositions[id] = from;
            }
        }
        return newPositions;
    }

    useAnimatedReaction(() => cardsPosition.value[data.id], (currentPosition, previousPosition) => {
        if(currentPosition !== previousPosition) {
            if(!moving){
                top.value = withSpring(currentPosition * CARD_HEIGHT)
            }
        }
    },[moving])

    const longPressGesture = Gesture
        .LongPress()
        .onStart(() => {
            runOnJS(setMoving)(true);
        })
        .minDuration(200)


    const panGesture = Gesture
        .Pan()
        .manualActivation(true)
        .onTouchesMove((_, state) => {
            moving ? state.activate() : state.fail();
        })
        .onUpdate((event) => {
            const positionY = event.absoluteY + scrollY.value;
            top.value = positionY - CARD_HEIGHT;

            const startPositionList = 0;
            const endPositionList = cardsCounter - 1;
            const currentPosition = Math.floor(positionY / CARD_HEIGHT);
            'worklet'
            const newPosition = Math.max(startPositionList, Math.min(currentPosition, endPositionList));

            if (newPosition !== cardsPosition.value[data.id]) {
                cardsPosition.value = objectMove(cardsPosition.value, cardsPosition.value[data.id], newPosition);
            }
        })
        .onFinalize(() => {
            const newPosition = cardsPosition.value[data.id] * CARD_HEIGHT;
            top.value = withSpring(newPosition);
            runOnJS(setMoving)(false);

        })
        .simultaneousWithExternalGesture(longPressGesture)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            top: top.value - CARD_HEIGHT,
            zIndex: moving ? 1 : 0,
            opacity: withSpring(moving ? 1 : 0.4),
        }
    }, [moving]);


    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <GestureDetector gesture={Gesture.Race(panGesture, longPressGesture)}>
                <CardList data={data} />
            </GestureDetector>
        </Animated.View>
    );

};

export { MovableCard };