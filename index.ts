import express from "express";
import logger from 'winston';


const app = express();


const port = process.env.PORT || 4000;

app.listen({ port }, () =>{
  logger.info(`listening on port ${port}`);
});

export default app;
