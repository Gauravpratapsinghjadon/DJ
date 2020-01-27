import React from 'react'
class  ToggleRender extends React.Component{
  render(){
    const {
        routes,
        actionSize,
        actionExpandingAngle
      } = this.props;
  
      const {
        active
      } = this.props;
      const offset

      const angle=0;
      const radius=0
      const x;
      const y;
      const activationScale
      const activationPositionX
      const activationPositionY
      const STEP = 135 / routes.length;
      return routes.map((route, i) => {
         offset = (STEP * (i + 1)) / DEFAULT_EXPANDING_ANGLE - 0.5;
         angle = -90 + (135 * offset) - (STEP / 2);
         radius = 80;
         x = radius * Math.cos(-angle * Math.PI / 180);
         y = radius * Math.sin(-angle * Math.PI / 180);
         activationScale = this[`actionActivation_${i}`].interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1]
          });
          activationPositionX = this[`actionActivation_${i}`].interpolate({
            inputRange: [0, 1],
            outputRange: [0, x]
          });
          activationPositionY = this[`actionActivation_${i}`].interpolate({
            inputRange: [0, 1],
            outputRange: [0, y]
          });
          
      })
      return(
          <View></View>

      )
  }
}
export default ToggleRender;