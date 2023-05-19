['Richard','Of','York','Gave','Battle','In','Vain'];
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = hero.concat(native.reverse()).concat(destination.reverse());
console.log(rainbow);
['Ivan', 'Of', 'York', 'In', 'Poltava']
rainbow[0] = 'Richard';
rainbow[4] = 'Vain';
