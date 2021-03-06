import {keyBy} from 'lodash';
import irfu from '../../static/img/irfu.svg';

const cdnURL = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/';
const ireland = {
    name : 'Ireland',
    code : 'ie',
    svg : irfu,
    flag : '🇮🇪',
    odds : 12.5,
    rank : 3,
    ew   : 4.5,
    primary: '#169b62',
    complement : 'white',
    accent : '#ff883e',
    intro: 'https://www.youtube.com/watch?v=kwElFQInEh8'
};

const scotland = {
    name : 'Scotland',
    code : 'gb-sct',
    flag : '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    odds : 2.44,
    ew   : 2.87,
    rank : 7,
    primary: '#0165BF',
    complement: 'white',
    accent: '#FFD323',
    intro: 'https://www.youtube.com/watch?v=jsxAvs9XCAQ'
};

const japan = {
    name : 'Japan',
    code : 'jp',
    flag : '🇯🇵',
    odds : .332,
    ew   : 2.41,
    rank : 11,
    primary: '#ff567e',
    complement: 'white',
    accent: '#BC002D',
    intro: 'https://www.youtube.com/watch?v=D_OUleQ9J-o&t=3s'
};

const samoa = {
    name : 'Samoa',
    code : 'ws',
    flag : '🇼🇸',
    rank : 16,
    odds : .1,
    ew   : 1.6,
    primary : '#002B7F',
    complement: 'white',
    accent: '#CE1126',
    intro: 'https://www.youtube.com/watch?v=oPw_mO6GxOA'
};

const russia = {
    name : 'Russia',
    code : 'ru',
    flag : '🇷🇺',
    odds : .013,
    ew   : .07,
    rank : 20,
    primary: '#D52B1E',
    complement: 'white',
    accent: '#0039A6',
    intro: 'https://www.youtube.com/watch?v=O5mHRHNIceQ'
};

const nz = {
    name : 'New Zealand',
    code : 'nz',
    flag : '🇳🇿',
    odds : 45.5,
    ew   : 5.28,
    rank : 1,
    primary: '#333',
    complement: 'white',
    accent: '#D50000',
    intro: 'https://www.youtube.com/watch?v=uSxzHf-Z50c'
};

const sa = {
    name : 'South Africa',
    code : 'za',
    flag : '🇿🇦',
    odds : 9.09,
    ew   : 4.15,
    rank : 5,
    primary: '#007A4D',
    complement: 'white',
    accent: '#FFB612',
    intro: 'https://www.youtube.com/watch?v=A9TH0UkjX6o'
};

const italy = {
    name : 'Italy',
    code : 'it',
    flag : '🇮🇹',
    rank : 14,
    odds : .04,
    ew   : 2.06,
    primary: '#007FFF',
    complement: 'white',
    accent: 'green',
    intro: 'https://www.youtube.com/watch?v=DEAaceCdzk0'
};

const canada = {
    name : 'Canada',
    code : 'ca',
    flag : '🇨🇦',
    rank : 21,
    odds : .013,
    ew   : .65,
    primary: '#FF0000',
    complement: 'white',
    accent: '#ff9999',
    intro: 'https://www.youtube.com/watch?v=UL3MdIuRJwk&t=52s'
};

const namibia = {
    name : 'Namibia',
    code : 'na',
    flag : '🇳🇦',
    odds : .013,
    ew   : .45,
    rank : 23,
    primary : '#003580',
    complement: 'white',
    accent: '#FFCE00',
    intro: 'https://www.youtube.com/watch?v=swXM7Hwpu54'
};

const england = {
    name : 'England',
    code : 'gb-eng',
    flag : '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    odds : 14.3,
    ew   : 4.59,
    rank : 4,
    primary: '#CF081F',
    complement: 'white',
    accent: 'green 900',
    intro: 'https://www.youtube.com/watch?v=unHc2QyaRVU'
};

const france = {
    name : 'France',
    code : 'fr',
    flag : '🇫🇷',
    rank : 8,
    odds : 2.55,
    ew   : 2.96,
    primary : '#002395',
    complement : 'white',
    accent : '#ED2939',
    intro: 'https://www.youtube.com/watch?v=wRHlFJNfve4'
};

const argentina = {
    name : 'Argentina',
    code : 'ar',
    flag : '🇦🇷',
    odds : 1.96,
    ew   : 2.8,
    rank : 10,
    primary : '#75AADB',
    complement : 'white',
    accent : '#FCBF49',
    intro: 'https://www.youtube.com/watch?v=q4cAOm-oQp0'
};

const tonga = {
    name : 'Tonga',
    code : 'to',
    flag : '🇹🇴',
    odds : .04,
    ew   : .75,
    rank : 13,
    primary: '#C10000',
    complement: 'white',
    accent: '#333',
    intro: 'https://www.youtube.com/watch?v=j6XCBYZWvaE'
};

const usa = {
    name : 'USA',
    code : 'us',
    flag : '🇺🇸',
    rank : 15,
    odds : .02,
    ew   : .75,
    primary: '#3C3B6E',
    complement: 'white',
    accent: '#B22234',
    intro: 'https://www.youtube.com/watch?v=xcayGW1b1W0'
};

const australia = {
    name : 'Australia',
    code : 'au',
    flag : '🇦🇺',
    rank : 6,
    odds : 5.88,
    ew   : 3.7,
    primary: '#FFCD00',
    complement: 'black',
    accent: '#00C853',
    intro: 'https://www.youtube.com/watch?v=vsN14GXfDjw'
};

const wales = {
    name : 'Wales',
    code : 'gb-wls',
    flag : '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    odds : 11.1,
    ew   : 4.55,
    rank : 2,
    primary: '#D30731',
    complement: 'white',
    accent: '#00AD36',
    intro: 'https://www.youtube.com/watch?v=I64ahtfVj64'
};

const fiji = {
    name : 'Fiji',
    code : 'fj',
    flag : '🇫🇯',
    odds : .2,
    ew   : 2.01,
    rank : 9,
    primary: '#68BFE5',
    complement: 'white',
    accent: '#CE1126',
    intro: 'https://www.youtube.com/watch?v=CVq3M-aYY4k'
};

const georgia = {
    name : 'Georgia',
    code : 'ge',
    flag : '🇬🇪',
    rank : 12,
    odds : .1,
    ew   : 1.81,
    primary: '#FF0000',
    complement: 'white',
    accent: 'grey 800',
    intro: 'https://www.youtube.com/watch?v=bpXpOv5bz-c'
};

const uruguay = {
    name : 'Uruguay',
    code : 'uy',
    flag : '🇺🇾',
    odds : .013,
    ew   : .04,
    rank : 19,
    primary: '#0038A8',
    complement: 'white',
    accent: '#FCD116',
    intro: 'https://www.youtube.com/watch?v=35SiPq4LIN8'
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
].map(country => Object.assign({svg : `${cdnURL}${country.code}.svg`}, country)), 'name');

