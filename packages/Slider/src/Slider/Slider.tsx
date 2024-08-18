import React from 'react';
import {Slider as RadixSlider } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { SliderProps } from './Slider.types';
import { SliderBaseClassName } from './Slider.classes';

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(SliderBaseClassName, className);
    return (
      <RadixSlider {...rest} ref={forwardedRef} className={classes} >
          {children}
      </RadixSlider>
    );
});

export default Slider;
