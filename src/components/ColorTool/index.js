import React, { useState } from 'react'

import { ColorDisplayBox } from './ColorDisplayBox'
import { ColorPicker } from './ColorPicker'
import { ColorSlider } from './ColorSlider'
import { Switch } from './Switch'

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

  return (
    <div>
      <h2>Color Slider</h2>
      <ColorPicker color={inputColor} handler={handleColorInputChange} />
      <Switch handler={handleCheckboxChange} />
      <ColorSlider value={sliderValue} />
      <ColorDisplayBox color={inputColor} purpose="INPUT" />
      <ColorDisplayBox color={inputColor} purpose="OUTPUT" />
    </div>
  )
}
