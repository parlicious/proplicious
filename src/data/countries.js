import {keyBy} from 'lodash';
const ireland = {
    name : 'Ireland',
    flag : '🇮🇪',
    odds : 12.5,
    rank : 3,
    ew   : 4.49,
    primary: '#169b62',
    complement : 'white',
    accent : '#ff883e'
};

const scotland = {
    name : 'Scotland',
    flag : '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    odds : 2.44,
    ew   : 2.83,
    rank : 7,
    primary: '#0165BF',
    complement: 'white',
    accent: '#FFD323'
};

const japan = {
    name : 'Japan',
    flag : '🇯🇵',
    odds : .332,
    ew   : 2.37,
    rank : 11,
    primary: '#ff567e',
    complement: 'white',
    accent: '#BC002D'
};

const samoa = {
    name : 'Samoa',
    flag : '🇼🇸',
    rank : 16,
    odds : .1,
    ew   : 1.5,
    primary : '#002B7F',
    complement: 'white',
    accent: '#CE1126'
};

const russia = {
    name : 'Russia',
    flag : '🇷🇺',
    odds : .013,
    ew   : .26,
    rank : 20,
    primary: '#D52B1E',
    complement: 'white',
    accent: '#0039A6'
};

const nz = {
    name : 'New Zealand',
    flag : '🇳🇿',
    odds : 45.5,
    ew   : 5.28,
    rank : 1,
    primary: '#333',
    complement: 'white',
    accent: '#D50000'
};

const sa = {
    name : 'South Africa',
    flag : '🇿🇦',
    odds : 9.09,
    ew   : 4.15,
    rank : 5,
    primary: '#007A4D',
    complement: 'white',
    accent: '#FFB612'
};

const italy = {
    name : 'Italy',
    flag : '🇮🇹',
    rank : 14,
    odds : .04,
    ew   : 2.06,
    primary: '#007FFF',
    complement: 'white',
    accent: 'green'
};

const canada = {
    name : 'Canada',
    flag : '🇨🇦',
    rank : 21,
    odds : .013,
    ew   : .65,
    primary: '#FF0000',
    complement: 'white',
    accent: '#ff9999',
};

const namibia = {
    name : 'Namibia',
    flag : '🇳🇦',
    odds : .013,
    ew   : .45,
    rank : 23,
    primary : '#003580',
    complement: 'white',
    accent: '#FFCE00'
};

const england = {
    name : 'England',
    flag : '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    odds : 14.3,
    ew   : 4.59,
    rank : 4,
    primary: '#CF081F',
    complement: 'white',
    accent: 'green 900'
};

const france = {
    name : 'France',
    flag : '🇫🇷',
    rank : 8,
    odds : 2.55,
    ew   : 2.86,
    primary : '#002395',
    complement : 'white',
    accent : '#ED2939'
};

const argentina = {
    name : 'Argentina',
    flag : '🇦🇷',
    odds : 1.96,
    ew   : 2.6,
    rank : 10,
    primary : '#75AADB',
    complement : 'white',
    accent : '#FCBF49'
};

const tonga = {
    name : 'Tonga',
    flag : '🇹🇴',
    odds : .04,
    ew   : .9,
    rank : 13,
    primary: '#C10000',
    complement: 'white',
    accent: '#333'
};

const usa = {
    name : 'USA',
    flag : '🇺🇸',
    rank : 15,
    odds : .02,
    ew   : .9,
    primary: '#3C3B6E',
    complement: 'white',
    accent: '#B22234'
};

const australia = {
    name : 'Australia',
    flag : '🇦🇺',
    rank : 6,
    odds : 5.88,
    ew   : 3.7,
    primary: '#FFCD00',
    complement: 'black',
    accent: '#00C853',
};

const wales = {
    name : 'Wales',
    flag : '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    odds : 11.1,
    ew   : 4.55,
    rank : 2,
    primary: '#D30731',
    complement: 'white',
    accent: '#00AD36'
};

const fiji = {
    name : 'Fiji',
    flag : '🇫🇯',
    odds : .2,
    ew   : 1.88,
    rank : 9,
    primary: '#68BFE5',
    complement: 'white',
    accent: '#CE1126'
};

const georgia = {
    name : 'Georgia',
    flag : '🇬🇪',
    rank : 12,
    odds : .1,
    ew   : 1.68,
    primary: '#FF0000',
    complement: 'white',
    accent: 'grey 800'
};

const uruguay = {
    name : 'Uruguay',
    flag : '🇺🇾',
    odds : .013,
    ew   : .3,
    rank : 19,
    primary: '#0038A8',
    complement: 'white',
    accent: '#FCD116'
};

export default keyBy([
    ireland,
    scotland,
    japan,
    samoa,
    russia,
    nz,
    sa,
    italy,
    canada,
    namibia,
    england,
    france,
    argentina,
    tonga,
    usa,
    australia,
    wales,
    fiji,
    georgia,
    uruguay
], 'name');

