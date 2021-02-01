import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  const id = req.query.id as string;
  res.json({ message: `ID: ${id}` });
};

// export default async (req: NowRequest, res: NowResponse) => {
//   const id = req.query.id as string;
//   res.json({ message: 'ID:', id });
// };
