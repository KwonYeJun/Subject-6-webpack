import express, { Request, Response, NextFunction } from "express";
import path from 'path';
const root = path.resolve(__dirname);
const app = express();


app.use(express.static(path.join(__dirname, 'bundle')));
app.get("/", (req: Request, res: Response) => {
  const filePath = path.join(__dirname, '/bundle/index.html');
  res.sendFile(filePath);
});

app.use(express.static(root));

app.listen(2222, () => {
  console.log('연결')
})