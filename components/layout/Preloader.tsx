export default function Preloader() {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="pre-inner">
            <div className="load typing-load">
              <p>loading...</p>
            </div>
            <span className="typed-load" />
          </div>
        </div>
      </div>
    </div>
  );
}
