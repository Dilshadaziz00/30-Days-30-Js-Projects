unlayer.registerPropertyEditor({
  name: "my_color_picker",
  layout: "bottom",
  Widget: unlayer.createWidget({
    render: (e, t, o) =>
      `\n        <input class="value" type="text" value="${e}" />\n        <button class="red">Red</button>\n        <button class="green">Green</button>\n        <button class="blue">Blue</button>\n      `,
    mount(e, t, o, l) {
      var r = e.querySelector(".value"),
        n = e.querySelector(".red"),
        u = e.querySelector(".green"),
        i = e.querySelector(".blue");
      (r.onchange = function (e) {
        o(e.target.value);
      }),
        (n.onclick = function () {
          o("#FF0000");
        }),
        (u.onclick = function () {
          o("#00ff00");
        }),
        (i.onclick = function () {
          o("#0000ff");
        });
    },
  }),
});
unlayer.registerTool({
  name: "my_tool",
  label: "My Tool",
  icon: "fa-smile",
  supportedDisplayModes: ["web", "email"],
  options: {
    default: { title: null },
    text: {
      title: "Text",
      position: 1,
      options: {
        textColor: {
          label: "Color",
          defaultValue: "#ff0000",
          widget: "my_color_picker",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (e) =>
        `<div style="color: ${e.textColor};">I am a custom tool.</div>`,
    }),
    exporters: {
      web: function (e) {
        return `<div style="color: ${e.textColor};">I am a custom tool.</div>`;
      },
      email: function (e) {
        return `<div style="color: ${e.textColor};">I am a custom tool.</div>`;
      },
    },
    head: { css: function (e) {}, js: function (e) {} },
  },
});

