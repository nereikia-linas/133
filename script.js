'use strict'

var countries = ['Monakas', 'Kinija', 'Kanada', 'Vokietija', 'Lietuva', 'Portugalija'];
var area = [2.1, 9596961, 9984670, 357022, 65300, 92212];
var people = [38.300, 1444390177, 38048738, 83166711, 2793694, 10260009];
var million = 1000000;
var i;
for (i = 0; i < countries.length; i++) {
  console.log('Šalis: ' + countries[i] + ', joje gyvena ' + (people[i] / million).toFixed(2) + ' mln. gyventojų. Valstybės plotas: '
                 + area[i] + ' km², plotas tenkantis vienam gyventojui: ' + ((area[i] * million) / people[i]).toFixed(2) + ' m²');
}
