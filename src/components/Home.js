import { HeroComponent } from "./Hero";

export function HomeComponent() {
  return (
    <div className="Home-Component">
      <HeroComponent text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 m-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est. Quisque sagittis purus sit
              amet volutpat consequat mauris. Tincidunt augue interdum velit
              euismod. Eget felis eget nunc lobortis. Sit amet nulla facilisi
              morbi tempus. Scelerisque fermentum dui faucibus in ornare quam.
              Diam quis enim lobortis scelerisque. Enim nunc faucibus a
              pellentesque sit amet. Cum sociis natoque penatibus et magnis.
              Suspendisse interdum consectetur libero id faucibus nisl
              tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
