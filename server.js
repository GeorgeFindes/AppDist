import express from 'express';
import { join, resolve } from 'path';


const app = express();
const port = 3000;
const baseDir = join(resolve(), 'dist');

app.use(express.static(`${baseDir}`));


app.get('*', (request, response) =>
  response.sendFile(join(baseDir,'index.html'))
);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
