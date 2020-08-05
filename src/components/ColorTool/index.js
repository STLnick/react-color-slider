import React, { useState } from 'react'

import { ColorDisplayBox } from './ColorDisplayBox'
import { ColorPicker } from './ColorPicker'
import { ColorSlider } from './ColorSlider'
import { Switch } from './Switch'

export const ColorTool = () => {
  const [shouldLighten, setShouldLighten] = useState(true)
  const [sliderValue, setSliderValue] = useState(0)

  return (
    <div>
      <h2>Color Slider</h2>
      <ColorPicker />
      <Switch />
      <ColorSlider />
      <ColorDisplayBox purpose="INPUT" />
      <ColorDisplayBox purpose="OUTPUT" />
    </div>
  )
}
