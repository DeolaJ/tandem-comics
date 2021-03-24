import { previewClient } from '../../src/sanity';

export default async function createComment(req, res) {
  const { _id, name, email, body } = JSON.parse(req.body);

  try {
    await previewClient.create({
      _type: 'comments',
      art: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      body,
      approved: false,
    });
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }

  return res.status(200).json({ message: 'Comment submitted' });
}
