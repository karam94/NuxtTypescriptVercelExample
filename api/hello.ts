import { NowRequest, NowResponse } from '@vercel/node';

export default (_: NowRequest, res: NowResponse) => {
  res.json({ message: 'Hello World!' });
};
