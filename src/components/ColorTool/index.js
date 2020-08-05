import React, { useState } from 'react'

import { ColorDisplayBox } from './ColorDisplayBox'
import { ColorPicker } from './ColorPicker'
import { ColorSlider } from './ColorSlider'
import { Switch } from './Switch'

import './ColorTool.css'

export const ColorTool = () => {
  const [inputColor, setInputColor] = useState('#ffff00')
  const [shouldDarken, setShouldDarken] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)

  const handleCheckboxChange = (e) => {
    setShouldDarken(e.target.checked)
  }

  const handleColorInputChange = (e) => {
    setInputColor(e.target.value)
  }

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value)
  }

  return (
    <div className="container flex flex--column flex--justify-evenly">
      <h2>Color Slider</h2>
      <ColorPicker color={inputColor} handler={handleColorInputChange} />
      <Switch handler={handleCheckboxChange} />
      <ColorSlider handler={handleSliderChange} value={sliderValue} />
      <ColorDisplayBox color={inputColor} purpose="INPUT" />
      <ColorDisplayBox color={inputColor} purpose="OUTPUT" />
    </div>
  )
}
