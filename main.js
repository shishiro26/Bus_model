import "./style.css";
document.querySelector("#app").innerHTML = `
  <div>
     <iframe
        title="PAZ 672"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        height="100%"
        width="100%"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/740bb39b99174d5b8f2cc0052f746dcc/embed?autostart=1&ui_controls=0&ui_infos=0&ui_hint=0"
      >
      </iframe>
  </div>
`;

setupCounter(document.querySelector("#counter"));
