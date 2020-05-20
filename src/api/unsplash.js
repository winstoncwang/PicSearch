import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
		Authorization : 'Client-ID 23dUFRS6PdL6XGFaSVWqOWqg-_zF7Y3scVMduIHs7Eo'
	}
});
