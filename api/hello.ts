import { NowResponse } from '@vercel/node';

export default (res: NowResponse) => {
  res.json({ message: 'Hello World!' });
};
