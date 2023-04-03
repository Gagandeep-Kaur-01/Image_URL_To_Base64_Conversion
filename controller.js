import request from 'request';
import fs from 'fs';
import axios from 'axios';


const imageUrl = 'https://thumbs.dreamstime.com/z/dandelion-white-background-beautiful-yellow-flower-jpg-png-transparent-isolated-wildflowers-182168320.jpg';


export const urlToBase64 = async(res) => {    
    axios.get(imageUrl, {
        responseType: 'arraybuffer'
      })
      .then(response => {
        const imageData = Buffer.from(response.data, 'binary').toString('base64');
        const imageSrc = `data:${response.headers['content-type']};base64,${imageData}`;
        console.log("The written has the following contents: ",  imageSrc);
        res.send(
          imageSrc
        );
      })
      .catch(error => {
        console.log(error);
        res.send({
          error: 'Error fetching image'
        });
      });
    // try {
    //     axios.get(url, {
    //         responseType: 'arraybuffer'
    //     })
    //     .then(response => {
    //         const imageData = Buffer.from(response.data, 'binary').toString('base64');
    //         const imageSrc = `data:${response.headers['content-type']};base64,${imageData}`;
    //         fs.writeFile("image.txt", imageSrc, (err) => {
    //             if (err) {
    //             console.log(err);
    //             return err;
    //             }
    //             else {
    //                 console.log("File written successfully\n");
    //                 console.log("The written has the following contents:");
    //                 console.log(fs.readFileSync("image.txt", "utf8"));                    
    //             }
    //         })
    //         return imageSrc;
    //     // use imageSrc to display the image in HTML
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }
    // catch (err) {
    //     console.log("----err----", err);
    // }
}











