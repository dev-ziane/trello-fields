var ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';
var COLORS = { Low: 'green', Medium: 'yellow', High: 'orange', Critical: 'red' };

TrelloPowerUp.initialize({
  'board-buttons': function (t) {
    return [{ text: 'Fields', icon: ICON, callback: function (t) {
      return t.popup({ title: 'Manage fields', url: './settings.html', height: 380 });
    } }];
  },
  'card-back-section': function (t) {
    return { title: 'Fields', icon: ICON, content: { type: 'iframe', url: t.signUrl('./card.html'), height: 160 } };
  },
  'card-badges': function (t) {
    return Promise.all([getFields(t), getValues(t)]).then(function (r) {
      var out = [];
      r[0].forEach(function (f) {
        var v = r[1][f.id];
        if (!f.front || v === undefined || v === '' || v === false) return;
        var text = f.type === 'checkbox' ? f.name : f.name.replace(/ \(.*\)$/, '') + ': ' + v;
        var b = { text: text };
        if (f.type === 'dropdown' && COLORS[v]) b.color = COLORS[v];
        out.push(b);
      });
      return out;
    });
  },
  'on-enable': function (t) {
    return t.popup({ title: 'Set up fields', url: './settings.html', height: 380 });
  }
}, { appName: 'My Fields' });
