import {keyBy} from 'lodash';
const ireland = {
    name : 'Ireland',
    flag : '🇮🇪',
    odds : 12.5,
    rank : 3,
    ew   : 4.33
};

const scotland = {
    name : 'Scotland',
    flag : '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    odds : 2.44,
    ew   : 2.54,
    rank : 7
};

const japan = {
    name : 'Japan',
    flag : '🇯🇵',
    odds : .332,
    ew   : 2.11,
    rank : 11
};

const samoa = {
    name : 'Samoa',
    flag : '🇼🇸',
    rank : 16,
    odds : .1,
    ew   : 1.4
};

const russia = {
    name : 'Russia',
    flag : '🇷🇺',
    odds : .013,
    ew   : .7,
    rank : 20
};

const nz = {
    name : 'New Zealand',
    flag : '🇳🇿',
    odds : 45.5,
    ew   : 5.53,
    rank : 1
};

const sa = {
    name : 'South Africa',
    flag : '🇿🇦',
    odds : 9.09,
    ew   : 3.96,
    rank : 5
};

const italy = {
    name : 'Italy',
    flag : '🇮🇹',
    rank : 14,
    odds : .04,
    ew   : 2.06
};

const canada = {
    name : 'Canada',
    flag : '🇨🇦',
    rank : 21,
    odds : .013,
    ew   : .65
};

const namibia = {
    name : 'Namibia',
    flag : '🇳🇦',
    odds : .013,
    ew   : .45,
    rank : 23
};

const england = {
    name : 'England',
    flag : '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    odds : 14.3,
    ew   : 4.46,
    rank : 4
};

const france = {
    name : 'France',
    flag : '🇫🇷',
    rank : 8,
    odds : 2.55,
    ew   : 2.63
};

const argentina = {
    name : 'Argentina',
    flag : '🇦🇷',
    odds : 1.96,
    ew   : 2.4,
    rank : 10
};

const tonga = {
    name : 'Tonga',
    flag : '🇹🇴',
    odds : .04,
    ew   : 1.1,
    rank : 13
};

const usa = {
    name : 'USA',
    flag : '🇺🇸',
    rank : 15,
    odds : .02,
    ew   : .85
};

const australia = {
    name : 'Australia',
    flag : '🇦🇺',
    rank : 6,
    odds : 5.88,
    ew   : 3.62
};

const wales = {
    name : 'Wales',
    flag : '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    odds : 11.1,
    ew   : 4.36,
    rank : 2
};

const fiji = {
    name : 'Fiji',
    flag : '🇫🇯',
    odds : .2,
    ew   : 1.88,
    rank : 9
};

const georgia = {
    name : 'Georgia',
    flag : '🇬🇪',
    rank : 12,
    odds : .1,
    ew   : 1.68
};

const uruguay = {
    name : 'Uruguay',
    flag : '🇺🇾',
    odds : .013,
    ew   : .3,
    rank : 19
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

