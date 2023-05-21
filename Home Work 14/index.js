hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = hero.concat(native.reverse()).concat(destination.reverse());
rainbow[0] = 'Richard';
rainbow[4] = 'Vain';
rainbow.splice(3, 0,'Gave','Battle');

colors = ['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet'];
divColors = [];

for (i = 0; i < colors.length; i++) {
    divColors.push(`<div class='element'>
    <div class='circle' style='background-color: ${colors[i]}'></div>
    <p>${rainbow[i]}</p>
    </div>`);
}

document.write(`
    <div class='wrapp'>${divColors.join('')}</div>
`);

