import axios from 'axios';

class VacancyService {

    async getVacancies() {
        let result = await axios.get('https://api-vacancies.herokuapp.com/vacancies');
        return result.data;
    }
}



export default new VacancyService();

// (async () => {
//     let data = await getVacancies()
//     console.log(data)
// })()