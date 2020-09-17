import React, {Fragment} from 'react';
import Gridlist from 'react-gridlist';



const images = Array.from({ length: 50 }, (_, i) => {
  let width = 300
  let height = Math.floor(Math.random() * 300) + 200;
  return {
    url: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 100}/${width}/${height}.jpg`,
    width,
    height,
  }
})

let styles = {
  container: {
    margin: "20px auto",
    padding: "0 20px"
  },
  image: {
    position: "relative",
    width: "100%",
    height: "auto",
    verticalAlign: "top",
    background: "hsl(0, 0%, 98%)"
  }
}

const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 10 : 5;

const getColumnCount = (elementWidth) => Math.floor(elementWidth / 300);

const getWindowMargin = (windowHeight) => Math.round(windowHeight * 1.5);

const getItemData = (image, columnWidth) => {
  let imageRatio = image.height / image.width
  let adjustedHeight = Math.round(columnWidth * imageRatio)
  return {
    key: image.url,
    height: adjustedHeight,
  }
}

  const App = () => {
    return (
      <div>
        <Gridlist
          items={images}
          getGridGap={getGridGap}
          getColumnCount={getColumnCount}
          getWindowMargin={getWindowMargin}
          getItemData={getItemData}
          renderItem={(image) => {
            return (
              <img
                src={image.url}
                width={image.width}
                height={image.height}
              />
            )
          }}
        />
      </div>
    )
  }

  export default App