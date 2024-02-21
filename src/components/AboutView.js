import { HeroComponent } from "./Hero";

export function AboutViewComponent() {
  return (
    <div className="About-Component">
      <HeroComponent text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 m-5">
            <p className="lead">
              Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
              Arcu dui vivamus arcu felis bibendum. Fringilla ut morbi tincidunt
              augue. Augue neque gravida in fermentum et. In hendrerit gravida
              rutrum quisque non tellus. Vitae nunc sed velit dignissim. Dolor
              sit amet consectetur adipiscing elit duis. Ornare massa eget
              egestas purus viverra accumsan. Eget velit aliquet sagittis id
              consectetur. In metus vulputate eu scelerisque felis imperdiet.
              Hac habitasse platea dictumst vestibulum rhoncus est. Pellentesque
              elit eget gravida cum sociis natoque. Elementum pulvinar etiam non
              quam lacus suspendisse faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
