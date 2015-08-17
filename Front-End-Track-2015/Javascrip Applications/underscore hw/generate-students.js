module.exports = (function () {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	var students = [],
		student = require('./student.js'),
		firstNames = [
			'Allison',
			'Arthur',
			'Ana',
			'Alex',
			'Arlene',
			'Alberto',
			'Barry',
			'Bertha',
			'Bill',
			'Bonnie',
			'Bret',
			'Beryl',
			'Chantal',
			'Cristobal',
			'Claudette',
			'Charley',
			'Cindy',
			'Chris',
			'Dean',
			'Dolly',
			'Danny',
			'Danielle',
			'Dennis',
			'Debby',
			'Erin',
			'Edouard',
			'Erika',
			'Earl',
			'Emily',
			'Ernesto',
			'Felix',
			'Fay',
			'Fabian',
			'Frances',
			'Franklin',
			'Florence',
			'Gabielle',
			'Gustav',
			'Grace',
			'Gaston',
			'Gert',
			'Gordon',
			'Humberto',
			'Hanna',
			'Henri',
			'Hermine',
			'Harvey',
			'Helene',
			'Iris',
			'Isidore',
			'Isabel',
			'Ivan',
			'Irene',
			'Isaac',
			'Jerry',
			'Josephine',
			'Juan',
			'Jeanne',
			'Jose',
			'Joyce',
			'Karen',
			'Kyle',
			'Kate',
			'Karl',
			'Katrina',
			'Kirk',
			'Lorenzo',
			'Lili',
			'Larry',
			'Lisa',
			'Lee',
			'Leslie',
			'Michelle',
			'Marco',
			'Mindy',
			'Maria',
			'Michael',
			'Noel',
			'Nana',
			'Nicholas',
			'Nicole',
			'Nate',
			'Nadine',
			'Olga',
			'Omar',
			'Odette',
			'Otto',
			'Ophelia',
			'Oscar',
			'Pablo',
			'Paloma',
			'Peter',
			'Paula',
			'Philippe',
			'Patty',
			'Rebekah',
			'Rene',
			'Rose',
			'Richard',
			'Rita',
			'Rafael',
			'Sebastien',
			'Sally',
			'Sam',
			'Shary',
			'Stan',
			'Sandy',
			'Tanya',
			'Teddy',
			'Teresa',
			'Tomas',
			'Tammy',
			'Tony',
			'Van',
			'Vicky',
			'Victor',
			'Virginie',
			'Vince',
			'Valerie',
			'Wendy',
			'Wilfred',
			'Wanda',
			'Walter',
			'Wilma',
			'William',
			'Kumiko',
			'Aki',
			'Miharu',
			'Chiaki',
			'Michiyo',
			'Itoe',
			'Nanaho',
			'Reina',
			'Emi',
			'Yumi',
			'Ayumi',
			'Kaori',
			'Sayuri',
			'Rie',
			'Miyuki',
			'Hitomi',
			'Naoko',
			'Miwa',
			'Etsuko',
			'Akane',
			'Kazuko',
			'Miyako',
			'Youko',
			'Sachiko',
			'Mieko',
			'Toshie',
			'Junko'
		],
		lastNames = [
			'Abbott',
			'Acevedo',
			'Acosta',
			'Adams',
			'Adkins',
			'Aguilar',
			'Aguirre',
			'Albert',
			'Alexander',
			'Alford',
			'Allen',
			'Allison',
			'Alston',
			'Alvarado',
			'Alvarez',
			'Anderson',
			'Andrews',
			'Anthony',
			'Armstrong',
			'Arnold',
			'Ashley',
			'Atkins',
			'Atkinson',
			'Austin',
			'Avery',
			'Avila',
			'Ayala',
			'Ayers',
			'Aailey',
			'Aaird',
			'Aaker',
			'Aaldwin',
			'Aall',
			'Aallard',
			'Aanks',
			'Aarber',
			'Aarker',
			'Aarlow',
			'Aarnes',
			'Aarnett',
			'Aarr',
			'Aarrera',
			'Aarrett',
			'Barron',
			'Barry',
			'Bartlett',
			'Barton',
			'Bass',
			'Bates',
			'Battle',
			'Bauer',
			'Baxter',
			'Beach',
			'Bean',
			'Beard',
			'Beasley',
			'Beck',
			'Becker',
			'Bell',
			'Bender',
			'Benjamin',
			'Bennett',
			'Benson',
			'Bentley',
			'Aenton',
			'Aerg',
			'Berger',
			'Bernard',
			'Berry',
			'Best',
			'Bird',
			'Bishop',
			'Black',
			'Blackburn',
			'Blackwell',
			'Blair',
			'Blake',
			'Blanchard',
			'Blankenship',
			'Blevins',
			'Bolton',
			'Bond',
			'Bonner',
			'Booker',
			'Boone',
			'Booth',
			'Bowen',
			'Bowers',
			'Bowman',
			'Boyd',
			'Boyer',
			'Boyle',
			'Bradford',
			'Bradley',
			'Bradshaw',
			'Brady',
			'Branch',
			'Bray',
			'Brennan',
			'Brewer',
			'Bridges',
			'Briggs',
			'Bright',
			'Britt',
			'Brock',
			'Brooks',
			'Brown',
			'Browning',
			'Bruce',
			'Bryan',
			'Bryant',
			'Buchanan',
			'Buck',
			'Buckley',
			'Buckner',
			'Bullock',
			'Burch',
			'Burgess',
			'Burke',
			'Burks',
			'Burnett',
			'Burns',
			'Burris',
			'Burt',
			'Burton',
			'Bush',
			'Butler',
			'Byers',
			'Byrd',
			'Cabrera',
			'Cain',
			'Calderon',
			'Caldwell',
			'Calhoun',
			'Callahan',
			'Camacho',
			'Cameron',
			'Campbell',
			'Campos',
			'Cannon',
			'Cantrell',
			'Cantu',
			'Cardenas',
			'Carey',
			'Cobb',
			'Cochran',
			'Coffey',
			'Cohen',
			'Cole',
			'Coleman',
			'Collier',
			'Collins',
			'Colon',
			'Combs',
			'Compton',
			'Conley',
			'Conner',
			'Conrad',
			'Contreras',
			'Conway',
			'Cook',
			'Cooke',
			'Cooley',
			'Cooper',
			'Copeland',
			'Cortez',
			'Cote',
			'Cotton',
			'Cox',
			'Craft',
			'Craig',
			'Crane',
			'Crawford',
			'Crosby',
			'Cross',
			'Cruz',
			'Cummings',
			'Cunningham',
			'Curry',
			'Curtis',
			'Dale',
			'Dalton',
			'Daniel',
			'Daniels',
			'Daugherty',
			'Davenport',
			'David',
			'Davidson',
			'Dunlap',
			'Dunn',
			'Duran',
			'Durham',
			'Dyer',
			'Eaton',
			'Edwards',
			'Elliott',
			'Ellis',
			'Ellison',
			'Emerson',
			'England',
			'English',
			'Erickson',
			'Espinoza',
			'Estes',
			'Estrada',
			'Evans',
			'Everett',
			'Ewing',
			'Farley',
			'Farmer',
			'Farrell',
			'Faulkner',
			'Ferguson',
			'Fernandez',
			'Ferrell',
			'Fields',
			'Figueroa',
			'Finch',
			'Fulton',
			'Gaines',
			'Gallagher',
			'Gallegos',
			'Greer',
			'Gregory',
			'Griffin',
			'Griffith',
			'Grimes',
			'Gross',
			'Guerra',
			'Guerrero',
			'Guthrie',
			'Gutierrez',
			'Guy',
			'Guzman',
			'Hahn',
			'Hale',
			'Aaley',
			'Hall',
			'Hamilton',
			'Hammond',
			'Hampton',
			'Hancock',
			'Haney',
			'Hansen',
			'Hayden',
			'Hayes',
			'Haynes',
			'Hays',
			'Head',
			'Heath',
			'Hebert',
			'Henderson',
			'Hendricks',
			'Hendrix',
			'Henry',
			'Howell',
			'Hubbard',
			'Huber',
			'Hudson',
			'Huff',
			'Huffman',
			'Hughes',
			'Hull',
			'Humphrey',
			'Hunt',
			'Hunter',
			'Hurley',
			'Hurst',
			'Hutchinson',
			'Hyde',
			'Ingram',
			'Irwin',
			'Jackson',
			'Jacobs',
			'Jacobson',
			'James',
			'Jarvis',
			'Jefferson',
			'Jenkins',
			'Jennings',
			'Jensen',
			'Jimenez',
			'Aohns',
			'Johnson',
			'Johnston',
			'Jones',
			'Aordan',
			'Joseph',
			'Joyce',
			'Joyner',
			'Juarez',
			'Justice',
			'Kane',
			'Kaufman',
			'Keith',
			'Keller',
			'Kelley',
			'Kelly',
			'Kemp',
			'Kennedy',
			'Kent',
			'Kerr',
			'Key',
			'Kidd',
			'Kim',
			'King',
			'Kinney',
			'Kirby',
			'Kirk',
			'Kirkland',
			'Klein',
			'Kline',
			'Knapp',
			'Knight',
			'Knowles',
			'Knox',
			'Koch',
			'Kramer',
			'Lamb',
			'Lambert',
			'Lancaster',
			'Landry',
			'Lane',
			'Lang',
			'Langley',
			'Lara',
			'Larsen',
			'Larson',
			'Macdonald',
			'Macias',
			'Mack',
			'Madden',
			'Maddox',
			'Maldonado',
			'Mueller',
			'Mullen',
			'Mullins',
			'Munoz',
			'Murphy',
			'Murray',
			'Myers',
			'Nash',
			'Navarro',
			'Neal',
			'Nelson',
			'Newman',
			'Newton',
			'Nguyen',
			'Nichols',
		],
		marksLen = getRandomInt(1, 6),
		marks = [];


	for (var i = 0, len = firstNames.length; i < len; i += 1) {

		for (var j = 0; j < marksLen; j += 1) {
			marks.push(getRandomInt(2,7));
		}
		
		students.push(
			Object.create(student).init(firstNames[getRandomInt(0, firstNames.length)],
				lastNames[getRandomInt(0, lastNames.length)],
				getRandomInt(18, 40),
				marks)
			)
			
			marks = [];
	}

	return students;
} ())