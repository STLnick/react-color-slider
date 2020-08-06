import React, { useState } from 'react'
import convert from 'color-convert'

import { ColorDisplayBox } from './ColorDisplayBox'
import { ColorPicker } from './ColorPicker'
import { ColorSlider } from './ColorSlider'
import { Switch } from './Switch'

import './ColorTool.css'

export const ColorTool = () => {
  const [alteredColor, setAlteredColor] = useState('#ffff00')
  const [inputColor, setInputColor] = useState('#ffff00')
  const [shouldDarken, setShouldDarken] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)

  const adjustColor = (makeDarker, changeValue) => {
    // Convert hex to hsl and store returned values
    let [h, s, l] = convert.hex.hsl(inputColor)

    // If DARKEN is selected subtract from lightness else add to it
    makeDarker ? l -= (changeValue / 2) : l += (changeValue / 2)

    setAlteredColor(`hsl(${h}, ${s}%, ${l}%)`)
  }

  const handleCheckboxChange = (e) => {
    setShouldDarken(e.target.checked)
    adjustColor(e.target.checked, sliderValue)
  }

  const handleColorInputChange = (e) => {
    setInputColor(e.target.value)
    setAlteredColor(e.target.value)
    setSliderValue(0)
  }

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value))
    adjustColor(shouldDarken, e.target.value)
  }



  return (
    <div className="container flex flex--column flex--justify-evenly">
      <h2>Color Slider</h2>
      <ColorPicker color={inputColor} handler={handleColorInputChange} />
      <Switch handler={handleCheckboxChange} />
      <ColorSlider handler={handleSliderChange} value={sliderValue} />
      <ColorDisplayBox displayColor={inputColor} label="Input Color" />
      <ColorDisplayBox displayColor={alteredColor} label="Altered Color" />
    </div>
  )
}
