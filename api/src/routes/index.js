//Importar axios para consumir la API
const axios = require('axios');
const { Router } = require('express');
const { Country, Activity } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Solicitud a la API y almacenamiento en la BD
const getCountry = async () => {
  const countryDB = await Country.findAll({
    attribute: ['id', 'name', 'flag', 'continent', 'capital', 'subregion', 'area', 'population']
  });

  if(!countryDB.length){
  try {
    const allCountriesApi = await axios.get('https://restcountries.com/v3/all')
    const allCountries = allCountriesApi.data.map(c => {
      return {
        id:c.cca3,
        name:c.name.common, 
        flag:c.flags[1], 
        continent:c.continents[0], 
        capital:c.capital ? c.capital[0] : "Capital not found",
        subregion:c.subregion,
        area:Math.floor(c.area),
        population:c.population
      }
    });
    await Country.bulkCreate(allCountries);
    return allCountries;
    } catch (error) {
    console.log(error);
   }
  } else {
    return countryDB
  }
}


//Llamada a los paises almacenados en la api y los creado en la base de datos
const getAll = async ()=>{
  await getCountry()
  return await Country.findAll({
    includes: {
      model: Activity,//Incluye las activities
      attributes:['name', 'difficulty', 'duration', 'season'],
      through:{attributes: []}
    }
  });
}

//Configurar los routers
router.get('/countries', async (req, res, next) => {
  let {name} = req.query
  try {
    const countries = await getAll()
    if(!name){  //si no me pasan el nombre por query, devuelvo todo
      res.status(200).send(countries)
    } else {  //Si me pasan el nombre, filtro del total y devuelvo
      const countryName = countries.filter(c=>c.name.toLowerCase().includes(name.toLowerCase()))
      countryName.length ?
      res.status(200).send(countryName) :
      res.status(404).send('Country not found')
    }
  } catch (error) {
    next(error);
  }
})

router.get('/countries/:id', async (req, res, next) => {
  const id = req.params.id //Encontrarlo por Primary Key e incluir todas las actividades
  try {
    const countryId = await Country.findByPk(id.toUpperCase(),{
      includes:{
        model: Activity
      },
    })
    countryId ? 
    res.status(200).send(countryId) :
    res.status(404).send('Country not found')
  } catch (error) {
    next(error)
  }
})


//Obtener todas las actividades, incluidos los datos del pais
router.get('/activity', async (req, res, next)=>{
  try {
    let allActivities = await Activity.findAll({
       include: Country
    })
    return res.status(200).send(allActivities)
  } catch (error) {
    next(error)
  }
})

router.post('/activity', async (req, res, next) => {
  //Creamos una actividad con los datos recibidos por body
  const {name, difficulty, duration, season, countries} = req.body
  try {
    let newActivity = await Activity.create({ 
      name,
      difficulty,
      duration,
      season
    })
//Encontrar la coincidencia de countries enviada por body
    let activityCountry = await Country.findAll({
      where: {name:countries}
    })
//Agregamos a la nueva actividad creada la coincidencia encontrada
    await newActivity.addCountry(activityCountry)
    res.status(200).send('La actividad se creo con exito')
  } catch (error) {
    next(error)
  }
})


module.exports = router;
