// Shared helpers: storage layout
//  board/shared 'fields' -> [{id,name,type,options?,front?}]
//  card/shared  'values' -> {fieldId: value}
var DEFAULT_FIELDS = [
  { id: 'priority', name: 'Priority', type: 'dropdown', options: ['Low', 'Medium', 'High', 'Critical'], front: true },
  { id: 'estimate', name: 'Estimate (h)', type: 'number', front: true }
];
function getFields(t) {
  return t.get('board', 'shared', 'fields').then(function (f) {
    return Array.isArray(f) && f.length ? f : DEFAULT_FIELDS;
  });
}
function getValues(t) {
  return t.get('card', 'shared', 'values').then(function (v) { return v || {}; });
}
function uid() { return 'f' + Math.random().toString(36).slice(2, 8); }
