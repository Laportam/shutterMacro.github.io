const sstk = require("shutterstock-api");


const applicationClientId = "123abc456def";
const applicationClientSecret = "1a2b3c4d";
sstk.setBasicAuth(applicationClientId, applicationClientSecret);

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  "query": "hiking",
  "image_type": ["photo"],
  "orientation": "vertical",
  "people_number": 3
};

imagesApi.searchImages(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });