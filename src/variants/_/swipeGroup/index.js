import React from "react";
import {Flex, useCheckboxGroup, useRadioGroup, useStyleConfig} from "@chakra-ui/react";
import {Radio} from "../radio";
import {CheckboxCard} from "../../../common/_/cards/checkbox";

let Swiper;
import('swiper/react').then((SwiperModule) => {
    Swiper = SwiperModule.default || SwiperModule;
});

export const SwipeRadio = ({radioGroups, minW}) => {
    const {getRootProps, getRadioProps} = useRadioGroup({
        defaultValue: radioGroups.defaultValue,
        onChange: radioGroups.handleChange,
    });
    const styles = useStyleConfig("CustomSwipe");
    return (
        <Flex {...styles.container} {...getRootProps()}>
            <Swiper.Swiper {...styles.swiper} onSlideChange={() => radioGroups.handleChange}>
                {radioGroups.radioItems.map((radioItem, i) => (
                    <Swiper.SwiperSlide key={`radio-${i}`}>
                        <Radio
                            {...radioItem}
                            {...getRadioProps({
                                value: radioItem.uuid.toString(),
                            })}
                        />
                    </Swiper.SwiperSlide>
                ))}
            </Swiper.Swiper>
        </Flex>
    );
};

export const SwipeCheckbox = ({groups}) => {
    const {getCheckboxProps} = useCheckboxGroup({
        defaultValue: groups.defaultValue,
        onChange: groups.handleChange,
    });
    const styles = useStyleConfig("CustomSwipe", {variant: "checkbox"});
    return (
        <Flex {...styles.container}>
            <Swiper {...styles.swiper} onSlideChange={() => radioGroups.handleChange}>
                {groups.items.map((item, i) => (
                    <SwiperSlide key={`checkbox-${i}`}>
                        <CheckboxCard
                            {...item}
                            {...getCheckboxProps({
                                value: item.uuid.toString(),
                            })}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
};
