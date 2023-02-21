const handler = (req: any, res: any) => {
  if (req.method === 'POST') {
    //some code to save to db
    console.log(req.body);
    res.json({ message: 'thank you' });
  }
};

export default handler;
